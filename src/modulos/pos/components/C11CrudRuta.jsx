import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='https://apifinalbd.onrender.com/rutas';

class  C11CrudRuta extends Component {
      constructor(props) {
        super(props);
        this.state= ({
          rutas:[],
          pos:null,
          titulo:'Agregar Ruta',
          id: 0,
          ruta: '',
          empresa: '',
          vehiculo: '',
        })
        
        this.cambioRuta = this.cambioRuta.bind(this);
        this.cambioEmpresa = this.cambioEmpresa.bind(this);
        this.cambioVehiculo = this.cambioVehiculo.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.guardar = this.guardar.bind(this);
        
      }

    cambioRuta(e){
        this.setState({
          ruta: e.target.value
        })
      }

      cambioEmpresa(e){
        this.setState({
          empresa: e.target.value
        })
      }
      cambioVehiculo(e){
        this.setState({
          vehiculo: e.target.value
        })
      }
      //---------------------------------------------------------------
      //------                   C R U D                          -----
      //---------------------------------------------------------------
      componentDidMount(){
        axios.get(url)
        .then(res =>{
          console.log(res.data);
          this.setState({rutas: res.data})
        })
      }
      
      mostrar(cod,index){
        axios.get(url+'/'+cod)
        .then(res => {
          this.setState({
            pos: index,
            titulo: 'Editar Ruta',
            id: res.data.id,
            ruta :res.data.ruta,
            empresa: res.data.empresa,
            vehiculo: res.data.vehiculo,
            
          })
        })
      }
      guardar(e){
        e.preventDefault();
        let cod = this.state.id;
        const datos = {
                    
          ruta: this.state.ruta,
          empresa: this.state.empresa,
          vehiculo: this.state.vehiculo,
        }
        if(cod>0){
          //edición de un registro
          axios.put(url+'/'+cod,datos)
          .then(res =>{
            let indx = this.state.pos;
            this.state.rutas[indx] = res.data;
            var temp = this.state.rutas;
            this.setState({
                pos:null,
                titulo:'Agregar Ruta',
                id: 0,
                ruta: '',
                empresa: '',
                vehiculo: '',
            });
          }).catch((error) =>{
            console.log(error.toString());
          });
        }else{
          //nuevo registro
          axios.post(url,datos)
          .then(res => {
            this.state.rutas.push(res.data);
            var temp = this.state.rutas;
            this.setState({       
                id: 0,
                ruta: '',
                empresa: '',
                vehiculo: '',
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
            var temp = this.state.rutas.filter((rutas)=>rutas.id !== cod);
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
                titulo:'Agregar Ruta',
                id: 0,
                ruta: '',
                empresa: '',
                vehiculo: '',
          abierto: !this.state.abierto
          })
      }
      


  
  render() {
    return (
      <div className="text-center">
        <br /><br /><br />
      <button className="btn btn-success "  onClick={this.AbrirModal}>Agregar</button>
      <br /><br />
          <Container>
                  <Table style={{fontWeight:"bold"}} striped borderless hover responsive bgcolor='#eee'>
                  <thead >
                    <tr>
                      <th>Id</th>
                      <th>Ruta</th>
                      <th>Empresa</th>
                      <th>Vehiculo</th>
                      <th>Acciones a Realizar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rutas.map( (rutas,index) =>{
                      return (
                        <tr key={rutas.id}>
                          <td>{rutas.id}</td>
                          <td>{rutas.ruta}</td>
                          <td>{rutas.empresa}</td>
                          <td>{rutas.vehiculo}</td>
                          <td>
                          <Button variant="success" onClick={()=>{this.mostrar(rutas.id,index);this.AbrirModal()}}>Editar</Button>&nbsp;&nbsp;
                          <Button variant="danger" onClick={()=>this.eliminar(rutas.id)}>Eliminar</Button>
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
                    <Form.Label>Ingrese ruta:</Form.Label>
                    <Form.Control type="text" value={this.state.ruta} onChange={this.cambioRuta} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese id Empresa:</Form.Label>
                    <Form.Control type="text"  value={this.state.empresa} onChange={this.cambioEmpresa} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese id Vehiculo:</Form.Label>
                    <Form.Control  value={this.state.vehiculo} onChange={this.cambioVehiculo} />
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
export default C11CrudRuta;
