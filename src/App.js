import React, { useEffect, useState, usePrevious } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const handleSubmit = e => {
    setIsUserLoggedIn(!isUserLoggedIn);
    e.preventDefault();
  };
console.log(isUserLoggedIn)
  useEffect(() => {
    if(email) {
      console.log('email has change');
    }
  }, [email]);

  useEffect(() => {
if(isUserLoggedIn === true) {
  console.log('user is logged in');
}
return () => console.log('bye');
  }, [isUserLoggedIn]);


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="elon@spacex.com" value={email} onChange={event => setEmail(event.target.value)}/>
        <input onClick={handleSubmit} type="submit" value="submit" />
      </form>
      <button onClick={handleSubmit}>Lougout</button>
      {isUserLoggedIn === true ?
      <Message /> :
      <p>User is not Loggin</p>}
    </div>
  );
}
