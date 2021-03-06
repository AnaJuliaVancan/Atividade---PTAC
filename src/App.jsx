import React, { useState, useEffect} from 'react';
import api from './services/api' 
import Cabecalho from './pages/cabecalho';
import RodaPe from './pages/rodaPe';
import CorpoN from './pages/corpoN';
import CorpoN2 from './pages/corpoN2';
import './App.css';

function App() {
  return (
    <div class="container">
    <Cabecalho/>
    
     <div>
     <CorpoN2/>
     <CorpoN/>
     <CorpoN/>
     <CorpoN/>
     </div>

     <div>
     <CorpoN2/>
     <CorpoN/>
     <CorpoN/>
     <CorpoN/>
     </div>
    
    <RodaPe/>
    </div>
  );

  const [ noticias, setNoticias ] = useState([ ])
useEffect(() => {
  api
  .get('/noticias/')
  .then((response) => {
    setNoticias(response.data)
    console.log(noticias)
  })
  .catch(err =>{
    console.log(err)
  })
}, [])

  console.log(noticias)
  return (
    <main>
    {
      noticias.map(noticia =>{
        return(
          '<h2>${noticias}</h2>'
        )
      })
    }
    </main>
  );
}

export default App;