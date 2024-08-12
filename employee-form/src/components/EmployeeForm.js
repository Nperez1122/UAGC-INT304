import React from 'react';
import '../EmployeeForm.css'; // Correct path to the CSS file

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', title: '', department: '' }; // Step 4: Define the component state
    }

    // Step 6: Handle input field changes
    handleInputChange = (field) => (event) => {
        this.setState({ [field]: event.target.value });
    };

    // Step 7: Handle form submission
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state); // Log current state
        this.setState({ name: '', email: '', title: '', department: '' }); // Clear the form
    };

    render() {
        // Step 5: Add input fields and submit button
        return (
            <form onSubmit={this.handleSubmit} className="employee-form">
                <h2>New Employee Form</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInputChange('name')}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange('email')}
                    required
                />
                <input
                    type="text"
                    placeholder="Job Title"
                    value={this.state.title}
                    onChange={this.handleInputChange('title')}
                    required
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={this.state.department}
                    onChange={this.handleInputChange('department')}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Step 8: Export the EmployeeForm component
export default EmployeeForm;
