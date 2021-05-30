import { AppBar, makeStyles,Toolbar } from '@material-ui/core'
import React from 'react'
import { Navbar, Nav,NavDropdown,Form,Button } from 'react-bootstrap'

const styles = makeStyles({
    AppBar:{
        height:"85px",
        width:"100%",
        backgroundColor:"white"
    },
    imagen : {
        height:"85px",
        marginLeft:"60px",
        marginTop:"24px"
    },
    padreImagen:{
        display:"flex"
        
    },
    padreLista:{
        display:"flex",
        margin:"20px",
        flex:1,
        justifyItems:"space-between"
    },
    padrefinal:{
        display:"flex",
        alignContent:"flex-end",
        marginRight:"60px"
    },
    text:{
        color:"black",
        fontSize:"16px",
        marginBottom:"9px",
        fontWeight:"bold",
        "&:hover": {
            backgroundColor:"green",
            color:"white",
            borderRadius:60
          }
    },
    textDrop:{
        color:"black",
        fontSize:"16px",
        marginBottom:"15px",
        fontWeight:"bold",
    },
    textDescargar:{
        color:"green",
        fontSize:"13px",
        margin:"9px"
    },
    boton:{
        marginBottom:'10px'
    },
    form:{
        display:"flex",
        marginBottom:"8px"
    }
})

export default function NavBar() {
    const estilos = styles()
    return (
        <div>
            <Navbar expand="lg" className={estilos.AppBar}>
                <Navbar.Brand href="#home" className={estilos.imagen}><img src={"https://evernote.com/img/logo/evernote/primary.svg"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{backgroundColor:"white",zIndex:1}} id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className={estilos.text}>POR QUE EVERNOTE</Nav.Link>
                        <Nav.Link href="#link" className={estilos.text}>FUNCIONES</Nav.Link>
                        <NavDropdown title='PLANES' id="basic-nav-dropdown" className={estilos.text}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className={estilos.form}>
                        <Nav.Link href="#home" className={estilos.text}>AYUDA</Nav.Link>
                        <Nav.Link href="#home" className={estilos.text}>INICIAR SESION</Nav.Link>
                        <Button variant="outline-success" className={estilos.boton}>DESCARGAR</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
