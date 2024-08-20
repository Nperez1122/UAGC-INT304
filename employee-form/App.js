import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(() => {
    // Retrieve data from local storage
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [name, setName] = useState('');

  const addEmployee = () => {
    const newEmployee = { id: Date.now(), name };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
    setName(''); // Clear input after adding
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  useEffect(() => {
    saveData(employees);
  }, [employees]);

  return (
    <div className="App">
      <h1>Employee Manager</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter employee name"
      />
      <button onClick={addEmployee}>Add Employee</button>

      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
