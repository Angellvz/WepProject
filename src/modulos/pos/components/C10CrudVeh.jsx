import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='https://apifinalbd.onrender.com/vehiculos';


class C10CrudVeh extends Component {
      constructor(props) {
        super(props);
        this.state= ({
          vehiculos:[],
          pos:null,
          titulo:'Agregar Vehiculo',
          id: 0,
          placa: '',
          arduino: '',
          empresa: '',
        })
        
        this.cambioPlaca = this.cambioPlaca.bind(this);
        this.cambioArduino = this.cambioArduino.bind(this);
        this.cambioEmpresa = this.cambioEmpresa.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.guardar = this.guardar.bind(this);
        
      }

    cambioPlaca(e){
        this.setState({
          placa: e.target.value
        })
      }

      cambioArduino(e){
        this.setState({
          arduino: e.target.value
        })
      }

      cambioEmpresa(e){
        this.setState({
          empresa: e.target.value
        })
      }
      //---------------------------------------------------------------
      //------                   C R U D                          -----
      //---------------------------------------------------------------
      componentDidMount(){
        axios.get(url)
        .then(res =>{
          console.log(res.data);
          this.setState({vehiculos: res.data})
        })
      }
      
      mostrar(cod,index){
        axios.get(url+'/'+cod)
        .then(res => {
          this.setState({
            pos: index,
            titulo: 'Editar Vehiculo',
            id: res.data.id,
            placa :res.data.placa,
            arduino: res.data.arduino,
            empresa: res.data.empresa,
            
          })
        })
      }
      guardar(e){
        e.preventDefault();
        let cod = this.state.id;
        const datos = {
                    
          placa: this.state.placa,
          arduino: this.state.arduino,
          empresa: this.state.empresa,
        }
        if(cod>0){
          //edición de un registro
          axios.put(url+'/'+cod,datos)
          .then(res =>{
            let indx = this.state.pos;
            this.state.vehiculos[indx] = res.data;
            var temp = this.state.vehiculos;
            this.setState({
                pos:null,
                titulo:'Usuario',
                id: 0,
                placa: '',
                arduino: '',
                empresa: '',
            });
          }).catch((error) =>{
            console.log(error.toString());
          });
        }else{
          //nuevo registro
          axios.post(url,datos)
          .then(res => {
            this.state.vehiculos.push(res.data);
            var temp = this.state.vehiculos;
            this.setState({       
                id: 0,
                placa: '',
                arduino: '',
                empresa: '',
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
            var temp = this.state.vehiculos.filter((vehiculos)=>vehiculos.id !== cod);
            this.setState({
              vehiculos: temp
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
                titulo:'Agregar Vehiculos',
                id: 0,
                placa: '',
                arduino: '',
                empresa: '',
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
                      <th>Placa</th>
                      <th>Empresa</th>
                      <th>Acciones a Realizar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.vehiculos.map( (vehiculos,index) =>{
                      return (
                        <tr key={vehiculos.id}>
                          <td>{vehiculos.id}</td>
                          <td>{vehiculos.placa}</td>
                          <td>{vehiculos.empresa}</td>
                          <td>
                          <Button variant="success" onClick={()=>{this.mostrar(vehiculos.id,index);this.AbrirModal()}}>Editar</Button>&nbsp;&nbsp;
                          <Button variant="danger" onClick={()=>this.eliminar(vehiculos.id)}>Eliminar</Button>
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
                    <Form.Label>Ingrese Placa:</Form.Label>
                    <Form.Control type="text" value={this.state.placa} onChange={this.cambioPlaca} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Empresa:</Form.Label>
                    <Form.Control type="text"  value={this.state.empresa} onChange={this.cambioEmpresa} />
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
export default C10CrudVeh;
