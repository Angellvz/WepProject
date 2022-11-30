import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='http://localhost:3000/usuario';
//test edit



class C9CrudUser extends Component {
      constructor(props) {
        super(props);
        this.state= ({
          usuarios:[],
          pos:null,
          titulo:'Agregar Usuario',
          id: 0,
          name: '',
          correo: '',
          password: '',
          tipo: '',
        })
        
        this.cambioName = this.cambioName.bind(this);
        this.cambioCorreo = this.cambioCorreo.bind(this);
        this.cambioPassword = this.cambioPassword.bind(this);
        this.cambioTipo = this.cambioTipo.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.guardar = this.guardar.bind(this);
        
      }

    cambioName(e){
        this.setState({
          name: e.target.value
        })
      }

      cambioCorreo(e){
        this.setState({
          correo: e.target.value
        })
      }

      cambioPassword(e){
        this.setState({
          password: e.target.value
        })
      }

      cambioTipo(e){
        this.setState({
          tipo: e.target.value
        })
      }

      //---------------------------------------------------------------
      //------                   C R U D                          -----
      //---------------------------------------------------------------
      componentDidMount(){
        axios.get(url)
        .then(res =>{
          console.log(res.data);
          this.setState({usuarios: res.data})
        })
      }
      
      mostrar(cod,index){
        axios.get(url+'/'+cod)
        .then(res => {
          this.setState({
            pos: index,
            titulo: 'Editar Usuario',
            id: res.data.id,
            name :res.data.name,
            correo: res.data.correo,
            password: res.data.password,
            tipo : res.data.tipo,
            
          })
        })
      }


      guardar(e){
        e.preventDefault();
        let cod = this.state.id;
        const datos = {
                    
          name: this.state.name,
          correo: this.state.correo,
          password: this.state.password,
          tipo: this.state.tipo,
        }
        if(cod>0){
          //edición de un registro
          axios.put(url+'/'+cod,datos)
          .then(res =>{
            let indx = this.state.pos;
            this.state.usuarios[indx] = res.data;
            var temp = this.state.usuarios;
            this.setState({
                pos:null,
                titulo:'Usuario',
                id: 0,
                name: '',
                correo: '',
                password: '',
                tipo: '',
            });
          }).catch((error) =>{
            console.log(error.toString());
          });
        }else{
          //nuevo registro
          axios.post(url,datos)
          .then(res => {
            this.state.usuarios.push(res.data);
            var temp = this.state.usuarios;
            this.setState({       
                id: 0,
                name: '',
                correo: '',
                password: '',
                tipo: '',
            });
          }).catch((error)=>{
            console.log(error.toString());
          });
        }
      }
      eliminar(cod){
        let rpta = window.confirm("¿Desea Eliminar ?");
        if(rpta){
          axios.delete(url+'/'+cod)
          .then(res =>{
            var temp = this.state.usuarios.filter((usuarios)=>usuarios.id !== cod);
            this.setState({
              usuarios: temp
            })
          })
        }
      }
      state={
        abierto:false,
      }
      AbrirModal=()=>{
        this.setState({
          abierto: !this.state.abierto});
       
      }

      Limpiar=()=>{
        this.setState({
                pos:null,
                titulo:'Agregar Usuario',
                id: 0,
                name: '',
                correo: '',
                password: '',
                tipo: '',
          abierto: !this.state.abierto
          })
      }
      


  
  render() {
    return (
      <div className="C9CrudUser text-center">
        <br /><br /><br />
      <button className="btn btn-success "  onClick={this.AbrirModal}>Agregar</button>
      <br /><br />
          <Container>
              <Table style={{fontWeight:"bold"}} striped borderless hover responsive bgcolor='#eee'>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Password</th>
                      <th>Tipo</th>
                      <th>Acciones a Realizar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.usuarios.map( (usuarios,index) =>{
                      return (
                        <tr key={usuarios.id}>
                          <td>{usuarios.id}</td>
                          <td>{usuarios.name}</td>
                          <td>{usuarios.correo}</td>
                          <td type="password">{usuarios.password}</td>
                          <td>{usuarios.tipo}</td>
                          <td>
                          <Button variant="success" onClick={()=>{this.mostrar(usuarios.id,index);this.AbrirModal()}}>Editar</Button>&nbsp;&nbsp;
                          <Button variant="danger" onClick={()=>this.eliminar(usuarios.id)}>Eliminar</Button>
                          </td>


                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                
            </Container>

            <Modal isOpen={this.state.abierto}>
              <ModalHeader>
              <h1>{this.state.titulo}</h1>
              </ModalHeader>
              <ModalBody>
              
                <Form onSubmit={this.guardar}>
                  <Form.Control type="hidden" value={this.state.id} />
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Nombre:</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.cambioName} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Correo:</Form.Label>
                    <Form.Control type="text"  value={this.state.correo} onChange={this.cambioCorreo} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Password:</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.cambioPassword} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Tipo:</Form.Label>
                    <Form.Control type="text" value={this.state.tipo} onChange={this.cambioTipo} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={()=>{this.AbrirModal()}}>
                    GUARDAR</Button>&nbsp;&nbsp;
                    <Button id="cerrar" variant="secondary"  onClick={()=>{this.AbrirModal();this.Limpiar()}} >
                    CANCELAR</Button>
                </Form>                            
              
              </ModalBody>
              
            </Modal>


          
        </div> 
    )
  }
}
export default C9CrudUser;
