import React from 'react'
import { Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import axios from 'axios'

const url = "http://localhost:3306/Consejos2/";

class Preguntas extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id: '',
        titulo: '',
        imagen: '',
        descripcion: '',
        respuesta: '',
        tipoModal: ''
      }
    }
  }
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  modalCerrar = () => {
    window.location.href = "./Preguntas";
  }

  modalinfo

  modalInfo = () => {
    this.setState({ modalInfo: !this.state.modalInfo });
  }

  seleccionarPreguntas = (Preguntas) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: Preguntas.id,
        titulo: Preguntas.titulo,
        imagen: Preguntas.imagen,
        descripcion: Preguntas.descripcion,
        respuesta: Preguntas.respuesta
      }
    })
  }

  peticionesGet = () => {
    axios.get(url).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionesPost = async () => {
    await axios.post(url, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionesPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then(response => {
      this.modalInsertar();
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  PeticionesDelete = () => {
    axios.delete(url + this.state.form.id).then(response => {
      this.setState({ modalEliminar: false });
      this.peticionesGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  componentDidMount() {
    this.peticionesGet();
  }

  render() {
    const { form } = this.state;
    return (
<div className="">
  <div>
<Container className="text-center" >
<form className="form-signin">
  <h1>Pregunta 1</h1>
  <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Pregunta</button>
  <h6 class="h3 mb-3 font-weight-normal">¿Que caneca le corresponde a los materiales orgánicos?</h6>
<br/>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Resultado")}>Rojo</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Resultado")}>Azul</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Resultado")}>Verde</button>
  <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/Resultado")}>Amarillo</button>
 
  
</form>
</Container>
</div>

<div className="container ">
            <div class="card-deck mb-3 text-center" data-toggle="modal">
              {this.state.data.map((Preguntas, index) => {
                return (
                  <div className="col-md-4 " key={`item-navbar-${index}`}>
                    <div className="card mt-4">
                      <div className="card-title text-center">
                        <h3>{Preguntas.titulo}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                          {Preguntas.imagen}
                        </span>
                      </div>
  
                      <div className="text-center">
                        <img className="Logo" src={Preguntas.descripcion} alt="Logo" />
                      </div>
                      <div className="card-body">
                        <p>{Preguntas.respuesta}</p>
                        <p><mark>{Preguntas.id}</mark></p>
                      </div>
                      <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'Info' }); this.modalInfo() }}>Agregar Preguntas</button>
  
                      <Modal isOpen={this.state.modalInfo}>
                        <ModalBody>
                          <h1>{Preguntas.titulo}</h1>
                          <img className="Logo" src={Preguntas.imagen} alt="Logo" />
                          <p>{Preguntas.descripcion}</p>
                          <p>{Preguntas.respuesta}</p>
                        </ModalBody>
                        <ModalFooter>
                          <button type="button" class="btn btn-secondary" onClick={() => this.modalCerrar()} >
                            Cancelar
                               </button>
                        </ModalFooter>
                      </Modal>
                      <div className="card-footer">
                        <button className="btn btn-primary" onClick={() => { this.seleccionarPreguntas(Preguntas); this.modalInsertar() }}>Actualizar </button>
                        {" "}
                        <button className="btn btn-danger" onClick={() => { this.seleccionarPreguntas(Preguntas); this.setState({ modalEliminar: true }) }}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
  
          <div className="container text-center">
            <Modal id="formContent" isOpen={this.state.modalInsertar}>
              <h1>Modal Insertar</h1>
              <ModalBody>
  
                <div className="form-group wrapper fadeInDown">
                  <label htmlFor="id">id</label><br />
                  <input className="form-control" type="text" name="id" id="id" onChange={this.handleChange} value={form ? form.id : ''}/>
                  <br />
                  <label htmlFor="titulo">Titulo</label>
                  <input className="form-control" type="text" name="titulo" id="titulo" onChange={this.handleChange} value={form ? form.titulo : ''} />
                  <br />
                  <label htmlFor="imagen">imagen</label>
                  <input className="form-control" type="text" name="imagen" id="imagen" onChange={this.handleChange} value={form ? form.imagen : ''} />
                  <br />
                  <label htmlFor="descripcion">Descripción</label>
                  <input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form ? form.descripcion : ''} />
                  <br/>
                  <label htmlFor="imagen">Respuesta</label>
                  <input className="form-control" type="text" name="respuesta" id="respuesta" onChange={this.handleChange} value={form ? form.imagen : ''} />
                </div>
  
              </ModalBody>
              <ModalFooter >
                {this.state.tipoModal == 'insertar'}
                <button className="btn btn-success" onClick={() => this.peticionesPost()}>
                  Insertar
                              </button>
                <button className="btn btn-primary" onClick={() => this.peticionesPut()}>
                  Actualizar
                              </button>
                <button className="btn btn-danger" onClick={() => this.modalInsertar()}>
                  Cancelar
                               </button>
              </ModalFooter>
  
            </Modal>
          </div>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
              Está seguro de eliminar el Preguntas {form && form.tipo}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => this.PeticionesDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
            </ModalFooter>
          </Modal>
  
  
  
  
  
        </div>
      );
    };
  }
  export default Preguntas;
  