import { useState } from "react";
import JournalForm from "./JournalForm";
import { Card , Button, Container, Row, Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { JournalConsumer } from "../../providers/JournalProvider";


const Journal = ({user_id, journals, deleteJournal, setAdd, date_made, time_made, desc, id}) => {
  const [editing, setEdit] = useState(false)
  const { userId } = useParams()



  return (
    <>
      <h3>{date_made} {time_made}</h3>
      <h3>{desc}</h3>

                    {
                        editing ?
                        <>
                        <JournalForm 
                        setAdd={setAdd}
                        id={id}
                        date_made={date_made}
                        time_made={time_made}
                        desc={desc}
                        setEdit={setEdit}
                        user_id={user_id}
                        />
                       <Button onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </>
        :
        <Button onClick={() => setEdit(true)}>
          Edit
        </Button>
      }
       <Button onClick={() => deleteJournal(userId, id)}>
        Delete
      </Button>
      
   </>
  )
}

const ConnectedJournal = (props) => (
  <JournalConsumer>
    { value => <Journal {...props} {...value} />}
  </JournalConsumer>
)

export default ConnectedJournal;