import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthConsumer } from './AuthProvider';

export const GoalContext = React.createContext();

export const GoalConsumer = GoalContext.Consumer;

const GoalProvider = ({ children, user }) => {
  const [goals, setGoals] = useState([])
  // const [adding, setAdd] = useState([])
  
  const navigate = useNavigate()

  const getAllGoals = () => {
    axios.get(`/api/users/${user.id}/goals`)
      .then( res => setGoals(res.data) )
      .catch( err => console.log(err))
  }

  const addGoal = (goal) => {
    axios.post(`api/users/${user.id}/goals`, { goal })
    .then( res =>
      setGoals([...goals, res.data]) )
    .catch( err => console.log(err) )
  }

  const updateGoal = (id, goal) => {
    axios.put(`/api/users/${user.id}/goals/${id}`, { goal })
    .then( res => {
      const updatedGoalNames = goals.map ( g => {
        if (g.id === id) {
          return res.data
        }
        return g
      })
      setGoals(updatedGoalNames)
    })
    .catch( err => console.log(err) )
  }

  const deleteGoal = (id) => {
    axios.delete(`/api/users/${user.id}/goals/${id}`)
    .then( res => {
      setGoals(goals.filter( g => g.id !== id ))
      alert( res.data.message)
    })
  .catch( err => console.log(err) )
  }

  return (
    <GoalContext.Provider value={{
      goals,
      getAllGoals: getAllGoals,
      addGoal: addGoal,
      updateGoal: updateGoal,
      deleteGoal: deleteGoal,
    }}>
      { children }
    </GoalContext.Provider>
  )
}

const ConnectedGoalProvider = (props) => (
  <AuthConsumer>
    { value => <GoalProvider {...value} {...props} /> }
  </AuthConsumer>
)

export default ConnectedGoalProvider;