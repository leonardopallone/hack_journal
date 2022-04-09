import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const VisionBoardContext = React.createContext()

export const VisionBoardConsumer = VisionBoardContext.Consumer

const VisionBoardProvider = ({ children, user }) => {

  const [visionBoards, setVisionBoards] = useState([])
  const navigate = useNavigate()

  const getAllVisionBoards  = () => {
    axios.get(`/api/users/${user.id}/visionBoards`)
    .then( res => setVisionBoards(res.data))
    .catch( err => console.log(err) )
  }

  const addVisionBoard = (visionBoards) => {
    axios.post(`/api/users/${user.id}/visionboards`, { visionBoards })
      .then( res => setVisionBoards([...visionBoards, res.data]) )
      .catch( err => console.log(err))
  }

  const updateVisionBoard = (id, visionBoard) => {
    axios.put(`/api/users/${user.id}/visionBoard/${id}`, { visionBoard })
      .then( res => {
        const newUpdatedVisionBoard= visionBoard.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setVisionBoards(newUpdatedVisionBoard)
        navigate(`/visionBoards`)
      })
      .catch( err => console.log(err) )
  }

  
  const deleteVisionBoard = (id) => {
    axios.delete(`/api/users/${user.id}/visionBoards/${id}`)
      .then( res => {
        setVisionBoards(visionBoards.filter( a => a.id !== id))
        navigate('/visionBoards')
      })
      .catch( err => console.log(err) )
  }

  return (
    <VisionBoardContext.Provider value={{
      visionBoards,
      getAllVisionBoards,
      addVisionBoard,
      updateVisionBoard,
      deleteVisionBoard,
    }}>
      { children }
    </VisionBoardContext.Provider>
  )
}

const ConnectedVisionBoardProvider = (props) => (
  <AuthConsumer>
    { value => <VisionBoardProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedVisionBoardProvider;