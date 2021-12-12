import React, { useState, useEffect} from 'react';
import api from './services/api' 
import './App.css';

function App() {
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