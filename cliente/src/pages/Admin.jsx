import React, { useState } from 'react'
import { NavBar } from './../ui/NavBar';

export const Admin = () => {


  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }

  }
  const [turno, setTurno] = useState({
    title: "",
    description: "",

  });

  const [error, setError] = useState('');

  const handleInput = ({ target }) => {
    setTurno({
      ...turno,
      [target.name]: target.value


    })
    console.log(target.value)


  }

  const handleSubmit = (e) => {
    e.preventDefault();


    (async () => {


      opciones.body = JSON.stringify(turno)
      console.log('llegue aca')
      console.log('Registro: ', turno)
      console.log(opciones)
      const respuesta = await fetch('http://localhost:4000/task', opciones)
      const resJson= await respuesta.json()
      console.log('pase el fecth')
      if (resJson.ok) {
        window.location = '/login'

      } else {

        setError('Revise las credenciales yss')
        alert('Revise las credenciales yss')
      }
      // console.log('Registrado!')
      // const data= await respuesta.json()
      // alert('registrado')
    })()

  }

  return (
    <>
      <NavBar />
      <div className="Auth-form-container col-lg-4" style={{'margin-left': '500px'}}>

        <form className="Auth-form">

          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Crear turno</h3>

            <div>
              <label>Turno</label>
              <input
                type="text" name='title' onChange={handleInput}
                className="form-control mt-1"
              />
            </div>

            <div>
              <label>hora</label>
              <input
                type="text" name='description' onChange={handleInput}
                className="form-control mt-1"
              />
            </div>

          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Enviar
            </button>

            <div name="alerta" >
              {error.length > 0 && error}
            </div>


          </div>
        </form>

      </div>
    </>
  )
}
