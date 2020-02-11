
import React, { useState, useEffect } from 'react';

import api from './services/api';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const responseGetDevs = await api.get('/devs');

      setDevs([...responseGetDevs.data]);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const responsePost = await api.post('/devs', data);

    setDevs([...devs, responsePost.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((dev) => (
            // eslint-disable-next-line no-underscore-dangle
            <DevItem key={dev._id} dev={dev} />

          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
