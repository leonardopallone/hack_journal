
        import { useState, useEffect } from 'react';
        import axios from 'axios';
        import VisionBoardForm from './VisionBoardForm';
        import VisionBoardList from './VisionBoardList';
        import { Button } from 'react-bootstrap';
        
        const VisionBoards = () => {
          const [visionBoards, setVisionBoards] = useState([])
          const [adding, setAdd] = useState([])
          
          useEffect( () => {
            axios.get('/api/goals')
            .then ( res => {
              setVisionBoards(res.data)
            })
            .catch( err => console.log(err) )
          }, [])
        
          const addVisionBoard = (visionBoard) => {
            axios.post(`api/users/${user.id}/visionBoards`, { visionBoard })
            .then( res => {
              setVisionBoards([...visionBoards, res.data])
            })
            .catch( err => console.log(err) )
          }
          const updateVisionBoard = (id, visionBoard) => {
            axios.put(`/api/users/${user.id}/visionBoards/${id}`, { visionBoard })
            .then( res => {
              const updatedVisionBoardNames = visionBoards.map ( g => {
                if (g.id === id) {
                  return res.data
                }
                return g
              })
              setVisionBoards(updatedVisionBoardNames)
            })
            .catch( err => console.log(err) )
          }
        
          const deleteVisionBoard = (id) => {
            axios.delete(`/api/users/${user.id}/visionBoard/${id}`)
            .then( res => {
              setVisionBoards(visionBoards.filter( g => g.id !== id ))
              alert( res.data.message)
            })
          .catch( err => console.log(err) )
          }
        
          return(
          <>
          {
            adding ?
            <>
            <VisionBoardForm 
            addVisionBoard={addVisionBoard} 
            setAdd={setVisionBoards}
            />
            <Button variant="warning" onClick={() => setAdd(false)}>Cancel</Button>
            </>
                :
            <Button onClick={() => setAdd(true)}>+</Button>
              }
            <h1>Visions</h1>
            <VisionBoardList  
            VisionBoards={VisionBoards}
            updateVisionBoard={updateVisionBoard}
            deleteVisionBoard={deleteVisionBoard}
            />
          </>
          )
        }
        
        export default VisionBoards;