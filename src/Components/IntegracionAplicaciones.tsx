import { makeStyles,Grid,Button } from '@material-ui/core'
import React from 'react'
import imagenIntegracion from '../Imagenes/imagenIntegracion.png'
import iconoIntegracion from '../Imagenes/iconoIntegracion.png'

const styles = makeStyles({
    body:{
        display:"flex",
        width:"100%",
        marginTop:"20px",
        justifyContent:"flex-start",
    },
    primerGrid:{
        display:"flex",
        flexDirection:"column"
    },
    icono:{
        height:"45px",
        width:"45px",
        marginLeft:"80px"
    },
    titulo:{
        marginLeft:"82px",
        fontSize:"32px",
        marginTop:"20px"
    },
    subtitulo:{
        marginLeft:"82px",
        fontSize:"24px",
        marginTop:"10px",
        fontWeight:"normal"
    },
    boton:{
        marginTop:"25px",
        fontSize:"18px",
        color:"#21F967",
        '&:hover':{
            backgroundColor:"white",
            color:"green"
        }
    },
    imagen:{
        width:"75%",
        justifyContent:"center",
        marginLeft:"70px"
    }
    
})

function IntegracionAplicaciones() {
    const estilos = styles()
    return (
        <Grid container className={estilos.body} spacing={5}>
            <Grid className={estilos.primerGrid} item xs={12} sm={6} md={6} xl={12}>
                <img className={estilos.icono} src={iconoIntegracion}></img>
                <h1 className={estilos.titulo}>Integraciones de aplicaciones</h1>
                <h4 className={estilos.subtitulo}>Comparte contenido entre tus aplicaciones. Evernote se conecta con las herramientas de productividad que usas para que puedas trabajar a tu manera.</h4>
                <Button className={estilos.boton}>MAS INFORMACION &#10140;</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={12}>
                <img className={estilos.imagen} src={imagenIntegracion}/>
            </Grid>
        </Grid>
    )
}

export default IntegracionAplicaciones