import React from 'react'
import { CardGroup, Card, Button, Navbar, FormControl, Form } from 'react-bootstrap';
import {
  Table, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter,
} from "reactstrap";

import axios from 'axios'

import '../style/Econsejo.css'

const url = "http://localhost:3060/consejo2/";

class ConsejoJson extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form: {
        id: '',
        categoria: '',
        titulo: '',
        imagen: '',
        descripcion: '',
        tipoModal: ''
      }
    }
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  modalCerrar = () => {
    window.location.href = "./Consejos2";
  }

  modalinfo

  modalInfo = () => {
    this.setState({ modalInfo: !this.state.modalInfo });
  }

  seleccionarFruta = (consejo) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: consejo.id,
        categoria: consejo.categoria,
        titulo: consejo.titulo,
        imagen: consejo.imagen,
        descripcion: consejo.descripcion
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
          <>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">
                <img
                  class="logoC"
                  src="./flecha3.png" alt=""
                  width="70"
                  height="60"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home">
                <h1>Orgánicos</h1>

              </Navbar.Brand>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Buscar"
                  className=" mr-sm-2"
                />
                <Button variant="outline-light">Buscar</Button>
              </Form>
              <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Fruta</button>
            </Navbar>
          </>
        </div>
        <div className="container ">
          <div class="card-deck mb-3 text-center" data-toggle="modal">
            {this.state.data.map((consejo, index) => {
              return (
                <div className="col-md-4 " key={`item-navbar-${index}`}>
                  <div className="card mt-4">
                    <div className="card-title text-center">
                      <h3>{consejo.titulo}</h3>
                      <span className="badge badge-pill badge-danger ml-2">
                        {consejo.categoria}
                      </span>
                    </div>

                    <div className="text-center">
                      <img className="Logo" src={consejo.imagen} alt="Logo" />
                    </div>
                    <div className="card-body">
                      <p>{consejo.descripcion}</p>
                      <p><mark>{consejo.id}</mark></p>
                    </div>
                    <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'Info' }); this.modalInfo() }}>Agregar Fruta</button>

                    <Modal isOpen={this.state.modalInfo}>
                      <ModalBody>
                        <h1>{consejo.titulo}</h1>
                        <img className="Logo" src={consejo.imagen} alt="Logo" />
                        <p>{consejo.descripcion}</p>
                      </ModalBody>
                      <ModalFooter>
                        <button type="button" class="btn btn-secondary" onClick={() => this.modalCerrar()} >
                          Cancelar
                             </button>
                      </ModalFooter>
                    </Modal>
                    <div className="card-footer">
                      <button className="btn btn-primary" onClick={() => { this.seleccionarFruta(consejo); this.modalInsertar() }}>Actualizar </button>
                      {" "}
                      <button className="btn btn-danger" onClick={() => { this.seleccionarFruta(consejo); this.setState({ modalEliminar: true }) }}>Eliminar</button>
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
                <input className="form-control" type="text" name="id" id="id" onChange={this.handleChange} value={form ? form.id : ''} />
                <br />
                <label htmlFor="categoria">Categoría</label>
                <input className="form-control" type="text" name="categoria" id="categoria" onChange={this.handleChange} value={form ? form.categoria : ''} />
                <br />
                <label htmlFor="titulo">Titulo</label>
                <input className="form-control" type="text" name="titulo" id="titulo" onChange={this.handleChange} value={form ? form.titulo : ''} />
                <br />
                <label htmlFor="imagen">imagen</label>
                <input className="form-control" type="text" name="imagen" id="imagen" onChange={this.handleChange} value={form ? form.imagen : ''} />
                <br />
                <label htmlFor="descripcion">Descripción</label>
                <input className="form-control" type="text" name="descripcion" id="descripcion" onChange={this.handleChange} value={form ? form.descripcion : ''} />
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
            Está seguro de eliminar la fruta  {form && form.tipo}
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
export default ConsejoJson;
