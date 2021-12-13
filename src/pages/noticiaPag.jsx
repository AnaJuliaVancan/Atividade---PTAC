import React from 'react'
import { Link } from 'react-router-dom';

function NoticiaPag(props) {
	return (
    <div class="row border rounded-2 cardnoticia">
            <div class="col-4 p-0">
            </div>

            <div class="col-8">
              <div class="mt-4">
                <Link to={props.idNoticia}>
                <h2>{props.titulo}</h2>
                </Link>  
                <span>{props.descricao}</span>
                <span>{props.dataPubli}</span>
              </div>
            </div>
          </div>
	)
}

export default NoticiaPag;