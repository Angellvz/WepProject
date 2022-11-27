import React from 'react'

const C10CrudAdmin =()=>  {

    return (
    
        <div className="App">
        <br /><br /><br />
      <button className="btn btn-success" onClick={this.AbrirModal}>Agregar Postulantes y Editar Postulantes</button>
      <br /><br />
          <Container>
                  <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>DNI</th>
                      <th>Perfil</th>
                      <th>Nivel</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.postulantes.map( (postulante,index) =>{
                      return (
                        <tr key={postulante.id}>
                          <td>{postulante.id}</td>
                          <td>{postulante.nombre_completo}</td>
                          <td>{postulante.dni}</td>
                          <td>{postulante.perfil}</td>
                          <td>{postulante.nivel}</td>
                          <td>{postulante.fecha_de_nacimiento}</td>
                          <td>
                          <Button variant="success" onClick={()=>this.mostrar(postulante.id,index)}>Seleccionar Postulante</Button>&nbsp;&nbsp;
                          <Button variant="danger" onClick={()=>this.eliminar(postulante.id)}>Eliminar</Button>
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
                    <Form.Control type="text" value={this.state.nombre} onChange={this.cambioNombre} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese DNI:</Form.Label>
                    <Form.Control type="text" min="10000000" max="99999999" value={this.state.dni} onChange={this.cambioDni} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Perfil:</Form.Label>
                    <Form.Control type="text" value={this.state.perfil} onChange={this.cambioPerfil} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingrese Nivel:</Form.Label>
                    <Form.Control type="text" value={this.state.nivel} onChange={this.cambioNivel} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha de Nacimiento:</Form.Label>
                    <Form.Control type="date" value={this.state.fecha} onChange={this.cambioFecha} />
                  </Form.Group>
                  <Button variant="primary" type="submit" >
                    GUARDAR</Button>&nbsp;&nbsp;
                    <Button variant="secondary"  onClick={this.AbrirModal}>
                    CANCELAR</Button>
                </Form>                            
              
              </ModalBody>
              
            </Modal>


          
        </div> 
    
    );
    
    }
export default C10CrudAdmin;