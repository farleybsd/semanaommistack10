// Componemte: Bloco isolado de HTML / CSS / JS no qual não interfere no restante da aplicação.
//Propieade: Informaçoes que o componente pai passa para o componente Filho
//Estado: Informaçoes mantidas pelo componente (Lembrar: Imutabilidade)

import React from 'react';
import './global.css'
import './App.css'
import './SideBar.css'
import './main.css'

function App() {
  return (

    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="username_githug" required />

          </div>


          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>


          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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