import { Form, Button, Card } from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios';
import { JournalConsumer } from '../../providers/JournalProvider';

const JournalForm = ({ addJournal, setAdd, userId, updateJournal, setEdit, date_made, time_made, id, user_id }) => {
  const [journal, setJournal] = useState({ date_made: '', time_made: '', desc: '', user_id: 0 })


    useEffect( () => {
      axios.get(`/api/users/${userId}`)
      .catch( err => console.log(err))
      
    }, [])
  
    const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateJournal(id, journal)
      setEdit(false)
    } else {
      addJournal(journal)
      setAdd(false)
    }
    setJournal({ date_made: '', time_made: '', desc: ''})

  }
  return(
  <>
  <Card style={{ width: '18rem'}}>
    <Card.Body>
    <h3>{ id ? "Update Journal" : "Create Journal"}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            name='date_made'
            value={journal.date_made}
            onChange={(e) => setJournal({ ...journal, date_made: e.target.value })}
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
          <Form.Control
            type='time'
            name='time_made'
            value={journal.time_made}
            onChange={(e) => setJournal({ ...journal, time_made: e.target.value })}
          />
          
        </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Journal</Form.Label>
    <Form.Control 
    as="textarea" 
    rows={3} 
    name='desc'
    value={journal.des}
    onChange={ (e) => setJournal({ ...journal, desc: e.target.value })}
    placeholder="Journal" 
    required
    />
    </Form.Group>
    <Button variant="primary" type="submit">
          Submit
        </Button>
  </Form>
  </Card.Body>
  </Card>
  </>
  )
}

const ConnectedJournalForm = (props) => (
  <JournalConsumer>
    { value => <JournalForm {...props} {...value}  />}
  </JournalConsumer>
)

export default ConnectedJournalForm;