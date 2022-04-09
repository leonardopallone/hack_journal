import { useState, useEffect } from 'react';
import { GoalConsumer } from '../../providers/GoalProvider';
// import { useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
const GoalForm = ({ id, addGoal, updateGoal, setEdit, setAdd, new_goal, diff, accomp}) => {
  const [goal, setGoal] = useState({ new_goal: '', diff: '', accomp: false })

  // const location = useLocation()
  // const { new_goal, diff, accomp } = location.state

  useEffect( () => {
    if (id) {
      setGoal({ new_goal, diff, accomp })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateGoal(id, goal)
      setEdit(false)
    } else {
      addGoal(goal)
      setAdd(false)
    }
    setGoal({ new_goal: '', diff: '', accomp: false })
  }

  return (
    <>
      <h3>{ id ? "Edit" : "Create" } Goal</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Goal</Form.Label>
          <Form.Control 
            type="text"
            name='new_goal'
            value={goal.new_goal}
            onChange={(e) => setGoal({...goal, new_goal: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Difficulty</Form.Label>
          <Form.Select 
            name='diff'
            value={goal.diff}
            onChange={(e) => setGoal({...goal, diff: e.target.value})}
            required
          >
            <option>Select one...</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    name='accomp'
    value={goal.accomp}
    type="checkbox" 
    label="Accomplished?" 
    onChange={(e) => setGoal({...goal, accomp: !goal.accomp })}
    />
  </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}
const ConnectedGoalForm = (props) => (
  <GoalConsumer>
    { value => <GoalForm {...props} {...value} />}
  </GoalConsumer>
)


export default ConnectedGoalForm;