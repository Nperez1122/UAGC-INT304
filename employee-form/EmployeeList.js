import React from'react';
import { Link } from'react-router-dom';

function EmployeeList({ employees }) {
  return (
    <div className="employee-list"><h1>Employee List</h1><ul>
        {employees.map((employee) => (
          <li key={employee.id}><div><strong>Name:</strong> {employee.name}
            </div><div><strong>Email:</strong> {employee.email}
            </div><div><strong>Phone:</strong> {employee.phone}
            </div></li>
        ))}
      </ul></div>
  );
}

export default EmployeeList;
