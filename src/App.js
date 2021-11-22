import { useState } from 'react';
import './App.css';
import FormInut from './components/FormInut';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessages:
        'Username should be 3-16 character and should not contain any special character',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessages: 'It should be a valid email address',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessages:
        'Password should be 8-20 characters and  include ataleast 1 letter,1 number and 1 special character',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessages: 'Passwords does not match',
      pattern: values.password,
      required: true,
    },
  ];

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(values,"values");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <h1>Register</h1>
        {inputs.map((inputs) => {
          return (
            <FormInut
              key={inputs.id}
              {...inputs}
              value={values[inputs.name]}
              handleChange={handleChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

/* 

each time useState value changed component re-render and to overcme this
we can use useref method
*/
