import { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList'
import { Button } from 'react-bootstrap';
import { GoalConsumer } from '../../providers/GoalProvider';

const Goals = () => {
  const [adding, setAdd] = useState([])
  

  return(
  <>
  {
    adding ?
    <>
    <GoalForm 
    setAdd={setAdd}
    />
    <Button variant="warning" onClick={() => setAdd(false)}>Cancel</Button>
    </>
        :
    <Button onClick={() => setAdd(true)}>+</Button>
      }
    <h1>Goals</h1>
    <GoalList/>
  </>
  )
}

const ConnectedGoals = (props) => (
  <GoalConsumer>
    { value => <Goals {...value} {...props} />}
  </GoalConsumer>
)

export default ConnectedGoals;