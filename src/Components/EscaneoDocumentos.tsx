import { makeStyles,Grid,Button } from '@material-ui/core'
import React from 'react'
import imagenDocumento from '../Imagenes/imagenDocumento.png'
import iconoDocumento from '../Imagenes/iconoDocumento.png'

const styles = makeStyles({
    body:{
        display:"flex",
        width:"100%",
        marginTop:"5px",
        justifyContent:"flex-start",
    },
    primerGrid:{
        display:"flex",
        flexDirection:"column"
    },
    icono:{
        height:"55px",
        width:"55px",
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

function EscaneoDocumentos() {
    const estilos = styles()
    return (
        <Grid container className={estilos.body} spacing={5}>
            <Grid item xs={12} sm={6} md={6} xl={12}>
                <img className={estilos.imagen} src={imagenDocumento}/>
            </Grid>
            <Grid className={estilos.primerGrid} item xs={12} sm={6} md={6} xl={12}>
                <img className={estilos.icono} src={"https://evernote.com/c/assets/homepage/doc-scanning.svg?a712ed9920b5d6ab"}></img>
                <h1 className={estilos.titulo}>Escaneo de documentos</h1>
                <h4 className={estilos.subtitulo}>Digitalízate. Haz una copia de seguridad de los documentos importantes en todos tus dispositivos y conserva la información, no el desorden.</h4>
                <Button className={estilos.boton}>MAS INFORMACION &#10140;</Button>
            </Grid>
        </Grid>
    )
}

export default EscaneoDocumentos