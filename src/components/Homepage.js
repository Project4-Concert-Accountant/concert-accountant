import React from 'react'
import UserList from './UserList'
import ListBudgetForm from './ListBudgetForm'

const Homepage = () => {
  return (
    <div>
      <p>Homepage</p>
      <ListBudgetForm />
      <UserList />
    </div>
  )
}

export default Homepage