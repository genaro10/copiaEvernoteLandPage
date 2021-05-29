import { Button,makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    body:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:"30px",
        textAlign:"center"
    },
    botonRegistro:{
        backgroundColor:"green",
        color:"white",
        width:"27%",
        height:"55px"
    },
    botonIniciarSesion:{
        marginTop:"20px"
    }
})

function Inicio() {
    const estilos = styles()
    return (
        <div className={estilos.body}>
            <h1 style={{height:"25px",fontSize:"3vmax"}}>Consigue más con mejores notas</h1>
            <h4 style={{height:"25px",fontSize:"16px"}}>Evernote te ayuda a capturar ideas y a encontrarlas rápidamente.</h4>
            <Button className={estilos.botonRegistro}>Registrate gratis</Button>
            <Button className={estilos.botonIniciarSesion}>¿Ya tienes una cuenta? Inicia sesión</Button>
        </div>
    )
}

export default Inicio
