import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { JournalConsumer } from '../../providers/JournalProvider';
// import axios from 'axios';
import JournalForm from './JournalForm';
import JournalList from './JournalList';
import { Button } from 'react-bootstrap';

const Journals = ({ getAllJournals, journals, addJournal, updateJournal}) => {
  const [adding, setAdd] = useState(false)
  const [loading, setLoaded] = useState(false)
  const [userName, setuserName] = useState('')
  const { userId } = useParams()
  
  useEffect( () => {
    getAllJournals(userId)
    // getAllJournals(userId)

    // axios.get('/api/journals')
    // .then ( res => {
    //   setuserName(res.data)
    // })
    // .catch( err => console.log(err) )
  }, [])

  // const addJournal = (journal) => {
  //   axios.post('api/journals', { journal })
  //   .then( res => {
  //     setJournals([...journals, res.data])
  //   })
  //   .catch( err => console.log(err) )
  // }
  // const updateJournal = (id, journal) => {
  //   axios.put(`/api/journals/${id}`, { journal })
  //   .then( res => {
  //     const updatedJournalNames = journals.map ( n => {
  //       if (n.id === id) {
  //         return res.data
  //       }
  //       return n
  //     })
  //     setJournals(updatedJournalNames)
  //   })
  //   .catch( err => console.log(err) )
  // }

  // const deleteJournal = (id) => {
  //   axios.delete(`/api/journals/${id}`)
  //   .then( res => {
  //     setJournals(journals.filter( n => n.id !== id ))
  //     alert( res.data.message)
  //   })
  // .catch( err => console.log(err) )
  // }

  return(
  <>
    { adding ?
    <>
    <JournalForm 
                updateJournal={updateJournal}
                addJournal={addJournal}
                userId={userId}
                setAdd={setAdd}
              />
              <Button onClick={() => setAdd(false)}>Cancel</Button>
            </>
            :
            <Button onClick={() => setAdd(true)}>+</Button>
          }
          <h1>All Journal Entries {userName}</h1>
          <JournalList
            journals={journals}
          />
        </>
  )
}

const ConnectedJournals = (props) => (
  <JournalConsumer>
    { value => <Journals {...props} {...value} />}
  </JournalConsumer>
)

export default ConnectedJournals;