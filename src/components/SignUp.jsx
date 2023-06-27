import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const isEmailValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordStrong = () => {
    return password.length >= 8;
  };

  const getGreeting = () => {
    switch (nationality) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: email && !isEmailValid() ? 'red' : 'green' }}
      />
      {email && !isEmailValid() && <span>Email is invalid.</span>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        style={{
          borderColor: password && !isPasswordStrong() ? 'red' : 'green',
        }}
      />
      {password && !isPasswordStrong() && <span>Password is weak.</span>}

      <label htmlFor="nationality">Nationality</label>
      <select
        name="nationality"
        id="nationality"
        value={nationality}
        onChange={handleNationalityChange}
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>

      <p>{getGreeting()}</p>

      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
