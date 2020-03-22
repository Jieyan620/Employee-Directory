import React, { createContext } from 'react'

const Employee = createContext({
  Emplist: [],
  Emp: {},
  id: '',
  handleInputChange: () => { },
  handleSearchEmp: () => { }
})

export default Employee