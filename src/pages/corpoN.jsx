import React from 'react'

export default function Nprincipal1() {
  return (

    <div class="row">
      <div class="nomesNoticia">
        <h2 class="p-5 text-center">Notícias</h2>
        <h2 class="p-5 text-center">Aproveite nossas notícias frequinhas</h2>
      </div>

      <div class="col-6 col-md-4 mb-4">
        <div class="card h-100">
          <div class="col-4 p-0">
            Imagem
               </div>
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