import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url='https://apifinalbd.onrender.com/empresas';


class C12CrudEmp extends Component {
      constructor(props) {
        super(props);
        this.state= ({
          empresas:[],
          pos:null,
          titulo:'Agregar Empresa',
          id: 0,
          nombre: '',
        })
        
        this.cambioNombre = this.cambioNombre.bind(this);
        this.mostrar = this.mostrar.bind(this);
        this.guardar = this.guardar.bind(this);
        
      }

    cambioNombre(e){
        this.setState({
          placa: e.target.value
        })
      }
      //---------------------------------------------------------------
      //------                   C R U D                          -----
      //---------------------------------------------------------------
      componentDidMount(){
        axios.get(url)
        .then(res =>{
          console.log(res.data);
          this.setState({empresas: res.data})
        })
      }
      
      mostrar(cod,index){
        axios.get(url+'/'+cod)
        .then(res => {
          this.setState({
            pos: index,
            titulo: 'Editar Empresa',
            id: res.data.id,
            nombre :res.data.nombre,
            
          })
        })
      }
      guardar(e){
        e.preventDefault();
        let cod = this.state.id;
        const datos = {
                    
          empresa: this.state.empresa,
        }
        if(cod>0){
          //edición de un registro
          axios.put(url+'/'+cod,datos)
          .then(res =>{
            let indx = this.state.pos;
            this.state.empresas[indx] = res.data;
            var temp = this.state.empresas;
            this.setState({
                pos:null,
                titulo:'Empresa',
                id: 0,
                nombre: '',
            });
          }).catch((error) =>{
            console.log(error.toString());
          });
        }else{
          //nuevo registro
          axios.post(url,datos)
          .then(res => {
            this.state.empresas.push(res.data);
            var temp = this.state.empresas;
            this.setState({       
                id: 0,
                nombre: '',
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
            var temp = this.state.empresas.filter((empresas)=>empresas.id !== cod);
            this.setState({
              empresas: temp
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
                nombre: '',

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
                      <th>Nombre Empresa</th>
                      <th>Acciones a Realizar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.empresas.map( (empresas,index) =>{
                      return (
                        <tr key={empresas.id}>
                          <td>{empresas.id}</td>
                          <td>{empresas.nombre}</td>
                          <td>
                          <Button variant="success" onClick={()=>{this.mostrar(empresas.id,index);this.AbrirModal()}}>Editar</Button>&nbsp;&nbsp;
                          <Button variant="danger" onClick={()=>this.eliminar(empresas.id)}>Eliminar</Button>
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
                    <Form.Control type="text" value={this.state.nombre} onChange={this.cambioNombre} />
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
export default C12CrudEmp;
