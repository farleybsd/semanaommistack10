// Componemte: Bloco isolado de HTML / CSS / JS no qual não interfere no restante da aplicação.
//Propieade: Informaçoes que o componente pai passa para o componente Filho
//Estado: Informaçoes mantidas pelo componente (Lembrar: Imutabilidade)
//useEffect execultar uma funcao quando for alterada

import React, { useState, useEffect } from 'react';
import './global.css'
import './App.css'
import './SideBar.css'
import './main.css'

function App() {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [github_username, setgithub_username] = useState('')
  const [techs, settechs] = useState('')
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 3000,
      }
    )
  }, [])

  async function handleAddDev(e){

      e.prevent.default()

  }

  return (

    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="username_githug"
              required
              value={github_username}
              onChange={e => { setgithub_username(e.target.value)}}
            />

          </div>


          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs"
             required 
             value ={ techs}
             onChange={ e => { settechs(e.target.value)}}
             />
          </div>


          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>

      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13547418?s=460&v=4" alt="FarleyRufino"></img>
              <div className="user-info">
                <strong> Farley Rufino</strong>
                <span>ReactJs,React Native ,Node.js</span>
              </div>
            </header>
            <p>Sou um Alieando no mundo rs</p>
            <a href="https://github.com/farleybsd">Acessar Perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13547418?s=460&v=4" alt="FarleyRufino"></img>
              <div className="user-info">
                <strong> Farley Rufino</strong>
                <span>ReactJs,React Native ,Node.js</span>
              </div>
            </header>
            <p>Sou um Alieando no mundo rs</p>
            <a href="https://github.com/farleybsd">Acessar Perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13547418?s=460&v=4" alt="FarleyRufino"></img>
              <div className="user-info">
                <strong> Farley Rufino</strong>
                <span>ReactJs,React Native ,Node.js</span>
              </div>
            </header>
            <p>Sou um Alieando no mundo rs</p>
            <a href="https://github.com/farleybsd">Acessar Perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13547418?s=460&v=4" alt="FarleyRufino"></img>
              <div className="user-info">
                <strong> Farley Rufino</strong>
                <span>ReactJs,React Native ,Node.js</span>
              </div>
            </header>
            <p>Sou um Alieando no mundo rs</p>
            <a href="https://github.com/farleybsd">Acessar Perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13547418?s=460&v=4" alt="FarleyRufino"></img>
              <div className="user-info">
                <strong> Farley Rufino</strong>
                <span>ReactJs,React Native ,Node.js</span>
              </div>
            </header>
            <p>Sou um Alieando no mundo rs</p>
            <a href="https://github.com/farleybsd">Acessar Perfil GitHub</a>
          </li>
        </ul>
      </main>

    </div>

  );
}

export default App;

// parei aqui  15/01 01:09
//https://rocketseat.com.br/week-10/aulas