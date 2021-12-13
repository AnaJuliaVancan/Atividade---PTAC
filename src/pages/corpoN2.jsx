import React  from 'react';
import api from '../services/api';
import { Outlet } from 'react-router-dom';


function CorpoN2(){
  const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Erro: ', err)
			})
	}, [])
    return(
      "Texto"
    )
}
export default CorpoN2;