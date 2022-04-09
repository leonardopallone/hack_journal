import { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { GoalConsumer } from '../../providers/GoalProvider';
import GoalForm from './GoalForm'
const GoalShow = ({ id, new_goal, diff, accomp, deleteGoal }) => {
  const [editing, setEdit] = useState(false)
  // const [show, setShow] = useState(false);

  return (
    <>

      <h1>{new_goal}</h1>
      { editing ?
          <>
            <GoalForm
            new_goal={new_goal}
            diff={diff}
            accomp={accomp}
            id={id}
            setEdit={setEdit}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
        <>
          <h3>{new_goal}</h3>
          <p>{accomp ? "Accomplished" : "Not Accomplished"}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteGoal(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

const ConnectedGoalShow = (props) => (
  <GoalConsumer>
    { value => <GoalShow {...value} {...props} />}
  </GoalConsumer>
)

export default ConnectedGoalShow;