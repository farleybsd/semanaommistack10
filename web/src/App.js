// Componemte: Bloco isolado de HTML / CSS / JS no qual não interfere no restante da aplicação.
//Propieade: Informaçoes que o componente pai passa para o componente Filho
//Estado: Informaçoes mantidas pelo componente (Lembrar: Imutabilidade)
//useEffect execultar uma funcao quando for alterada

import React,{useState,useEffect} from  'react'
import api from './services/api'
import DevItem from './componets/DevItem'
import DevForm from './componets/DevForm'

import './global.css'
import './App.css'
import './SideBar.css'
import './main.css'

function App() {
  
    const [devs,setdevs] = useState([])

  useEffect(()=>{

      async function loadDevs(){
        const response = await api.get('/devs')
        setdevs(response.data)
      }
      loadDevs()
  },[])

  async function handleAddDev(data){

    
    const response = await api.post('/devs',data
    
    )
    console.log(response.data)
    
    setdevs([... devs,response.data])
    
}
 

  return (

    <div id="app">

      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit= {handleAddDev} />
      </aside>

      <main>
        <ul>
       {devs.map(dev => (
          <DevItem key={dev._id} dev ={dev} />
        ))}
        </ul>
      </main>

    </div>

  );
}

export default App;

// parei aqui  15/01 01:09
//https://rocketseat.com.br/week-10/aulas