// import Goal from './Goal';
// import { GoalConsumer } from '../../providers/GoalProvider';
// const GoalList = () => (
//   <GoalConsumer>
//     { value => (
//   <>
//     { value.goals.map( g => 
//     <Goal 
//     key={g.id} 
//     {...g} 
    
//     /> 
//     )}
//   </>
//   )}
// </GoalConsumer>
// )

// export default GoalList;

import { Container, Row, Col } from 'react-bootstrap';
import GoalShow from './Goalshow';
import { GoalConsumer } from '../../providers/GoalProvider';
import { useEffect } from 'react';

const GoalList = ({ goals, getAllGoals }) => {
  
  useEffect( () => {
    getAllGoals()
  }, [])


  return ( 
    <>
      <h1>My Goals</h1>
          { goals.map( g => 
              <GoalShow
                key={g.id}
                {...g}
              />  
          )}
    </>
  )
}

const ConnectedGoalList = (props) => (
  <GoalConsumer>
    { value => <GoalList {...value} {...props} /> }
  </GoalConsumer>
)

export default ConnectedGoalList;