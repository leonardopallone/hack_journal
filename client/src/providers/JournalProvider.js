import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const JournalContext = React.createContext()

export const JournalConsumer = JournalContext.Consumer

const JournalProvider = ({ children, user }) => {

  const [journals, setJournals] = useState([])
  const navigate = useNavigate()

  const getAllJournals = () => {
    axios.get(`/api/users/${user.id}/journals`)
    .then( res => setJournals(res.data))
    .catch( err => console.log(err) )
  }

  const addJournal = (journal) => {
    axios.post(`/api/users/${user.id}/journals`, { journal })
      .then( res => setJournals([...journals, res.data]) )
      .catch( err => console.log(err))
  }

  const updateJournal = (id, journal) => {
    axios.put(`/api/users/${user.id}/journals/${id}`, { journal })
      .then( res => {
        const newUpdatedJournal = journal.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setJournals(newUpdatedJournal)
        navigate(`/journals`)
      })
      .catch( err => console.log(err) )
  }

  
  const deleteJournal = (id) => {
    axios.delete(`/api/users/${user.id}/journals/${id}`)
      .then( res => {
        setJournals(journals.filter( a => a.id !== id))
        navigate('/cats')
      })
      .catch( err => console.log(err) )
  }

  return (
    <JournalContext.Provider value={{
      journals,
      getAllJournals,
      addJournal,
      updateJournal,
      deleteJournal,
    }}>
      { children }
    </JournalContext.Provider>
  )
}

const ConnectedJournalProvider = (props) => (
  <AuthConsumer>
    { value => <JournalProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedJournalProvider;
