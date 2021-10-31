import React,{Component} from 'react'
import { Redirect, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import NavTop2 from '../components/NavTop2'
import axios from 'axios'

class LoginView extends Component {

  URL = `${process.env.REACT_APP_API}/login`

  state = {
    credentials:{usuarioCorreo:'',password:''}
  }

  login = event => {
    // console.log(this.state.credentials)
    fetch(this.URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(this.state.credentials)
    }).then(
      data => {
        console.log(data)
        if(data.status == 200) {
          Swal.fire({
            icon:'success',
            title:'Bienvenido',
            showConfirmButton:false,
            timer:1500
        })
          this.props.history.push('/login/admin')
        }else{
          Swal.fire({
            icon:'error',
            title:'Usuario no Registrado',
            showConfirmButton:false,
            timer:2000
        })
        }
      }
    ).catch( error => console.error(error))

    
    
  }
  inputChange = event => {
    const cred = this.state.credentials;
    cred[event.target.name]= event.target.value
    this.setState({credentials:cred})
  }

  render() {
    return (
      <div>
        
        <NavTop2 />
      
        <div className="container" >
            <div className="row justify-content-center">
              <h1 className="text-center mt-5">Iniciar Sesion</h1>
              <div class="m-0 vh=100 row justify-content-center align-items-center">

                <label className="col-auto form-label" > Correo: <br/>
                  <input type="text" name="usuarioCorreo" value={this.state.credentials.usuarioCorreo} onChange={this.inputChange}></input>
                </label>
              <div class="m-0 vh=100 row justify-content-center align-items-center">
                <label className="col-auto form-label mt-3" type="password">Contraseña: <br/>
                  <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChange} ></input>
                </label>
              </div>
              <div class="col-auto my-3">
                <button className="btn-primary" onClick={this.login}>Ingresar
                </button>
              </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default LoginView;