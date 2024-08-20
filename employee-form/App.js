import React, { useState, useEffect } from'react';
import'./App.css';
import EmployeeList from './EmployeeList';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addEmployee = () => {
    const newEmployee = { id: Date.now(), name, email, phone };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
    setName('');
    setEmail('');
    setPhone('');
  };

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  useEffect(() => {
    saveData(employees);
  }, [employees]);

  return (
    <div className="App"><h1>Add Employee</h1><div className="form"><div className="form-group"><label>Name:</label><input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter employee name"
          />
        </div><div className="form-group"><label>Email:</label><input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter employee email"
          />
        </div><div className="form-group"><label>Phone:</label><input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter employee phone"
          />
        </div><button onClick={addEmployee}>Add</button></div><EmployeeList employees={employees} /></div>
  );
}

export default App;
