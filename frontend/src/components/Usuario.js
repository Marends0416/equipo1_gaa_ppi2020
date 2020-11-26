import React from 'react';
import axios from 'axios'; //Compartir resurcos entre servidores
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //usar iconos en React
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import {Modal,ModalHeader,ModalBody,ModalFooter,
} from "reactstrap";


const url = "http://localhost:3500/Usuario/";

class Usuario extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        id: '',
        nombre: '',
        contraseña: '',
        correo: '',
        tipoModal: ''
        
        
      }
    }}
    modalInsertar=()=>{
      this.setState({modalInsertar: !this.state.modalInsertar});
    }
    
    //seleccionar Usuario
    seleccionarUsuario=(Usuarios)=>{
     this.setState({
       tipoModal: 'actualizar',
       form: {
          id: Usuario.id,
         nombre: Usuario.nombre,
          contraseña: Usuario.contraseña,
          correo: Usuario.correo,
          
       }
     })
    }
    //Petición tipo GET
    peticionesGet=()=>{
      axios.get(url).then(response => {
        //console.log(response.data) 
        //asignaremos al estado
        this.setState({data: response.data})
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //Petición tipo POST
    peticionesPost=async()=>{
      await axios.post(url,this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //Peticiones tipo PUT
    peticionesPut=()=>{
      axios.put(url+this.state.form.id, this.state.form).then(response=>{
        this.modalInsertar();
        this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    PeticionesDelete=()=>{
      axios.delete(url+this.state.form.id).then(response=> {
        this.setState({modalEliminar: false});
         this.peticionesGet();
      }).catch(error=>{
        console.log(error.message);
      })
    }
    
    //carpturar lo que el usuario inserte en las cajas de texto
    //como se ejecuta en segundo plano debe ser asíncrono
    handleChange= async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
    }
    
    //primer ciclo de vida de los componentes
    
    componentDidMount(){
      this.peticionesGet();
    }

    render() {
      const {form}=this.state;
      return (
        <div className="App">
          <br/>
          <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal:'insertar'});this.modalInsertar()}}>Agregar Usuario</button>
          <br/><br/>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>nombre</th>
                <th>contraseña</th>
                <th>correo</th>
              
              </tr>
            </thead>
            <tbody>
                {this.state.data.map(Usuarios =>{
                  return(
                    <tr>
                      <td>{Usuarios.id}</td>
                      <td>{Usuarios.nombre}</td>
                      <td>{Usuarios.contraseña}</td>
                      <td>{Usuarios.correo}</td>
                      
                  
                      <td>
                        <button className="btn btn-primary" onClick={()=>{this.seleccionarUsuario(Usuarios);this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                        {" "}
                        <button className="btn btn-danger" onClick={()=>{this.seleccionarUsuario(Usuarios);this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
  
          <Modal isOpen={this.state.modalInsertar}>
            <h1>Modal Insertar</h1>
            <ModalHeader style={{display: 'block'}}>
              <span style={{float: 'right'}}>x</span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
              <label htmlFor="nombre">id</label>
                <input className="form-control" type="text" name="id" id="id"  readOnly onChange={this.handleChange} value={form?form.id: '' }/>
                <br/>
                <label htmlFor="nombre">nombre</label>
                <input className="form-control" type="text" name="nombre" id="nombre"  onChange={this.handleChange} value={form?form.PLACA: '' }/>
                <br/>
                <label htmlFor="contraseña">contraseña</label>
                <input className="form-control" type="text" name="contraseña" id="contraseña" onChange={this.handleChange} value={form?form.MARCA: ''}/>
               <br/>
               <label htmlFor="correo">correo</label>
                <input className="form-control" type="text" name="correo" id="correo" onChange={this.handleChange} value={form?form.MODELO:''}/>
                <br/>
              
              </div>
            </ModalBody>
            <ModalFooter>
                {this.state.tipoModal=='insertar'}
              <button className="btn btn-success" onClick={()=>this.peticionesPost()}>
                Insertar
              </button>
               <button className="btn btn-primary" onClick={()=>this.peticionesPut()}>
                Actualizar
              </button>
              <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
  
         <Modal isOpen={this.state.modalEliminar}>
           <ModalBody>
             Está seguro de eliminar el usuario {form && form.PLACA}
           </ModalBody>
           <ModalFooter>
             <button className="btn btn-danger" onClick={()=>this.PeticionesDelete()}>Sí</button>
             <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
           </ModalFooter>
         </Modal>
      </div>
      );
    }

}

export default Usuario;
