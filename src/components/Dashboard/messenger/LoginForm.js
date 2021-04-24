import { useState } from 'react';
// import axios from 'axios';

const projectID = 'db336757-f2cc-4004-8a8d-85d4069e021f';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
    //   await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', 'AhmedElfkhrany');
      localStorage.setItem('password', '1234567Aa');

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;