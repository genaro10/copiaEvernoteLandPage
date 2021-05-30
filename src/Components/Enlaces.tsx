import { Grid,makeStyles } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    body:{
        margin:"60px"
    },
    grid:{
        width:"100%"
    },
    titulo:{
        fontSize:"20px"
    },
    primerItem:{
        marginTop:"15px"
    },
    redes:{
        display:"flex",
        justifyContent:"flex-end",
        margin:"30px"
    }
})

function Enlaces() {
    const estilos = styles()
    return (
        <div className={estilos.body}>
            <Grid container spacing={3}>
                <Grid className={estilos.grid} item xs={12} sm={2} md={2} lg={2} xl={2}> 
                    <h1 className={estilos.titulo}>PRODUCTO</h1>
                    <p className={estilos.primerItem}>¿Por qué elegir Evernote?</p>
                    <p>Evernote Basic</p>
                    <p>Evernote Premium</p>
                    <p>Evernote Business</p>
                    <p>Compara los planes</p>
                    <p>Descuento para estudiantes</p>
                    <p>Descargar la aplicación</p>
                </Grid>
                <Grid className={estilos.grid} item xs={12} sm={2} md={2} lg={2} xl={2}> 
                    <h1 className={estilos.titulo}>FUNCIONES</h1>
                    <p className={estilos.primerItem}>Web Clipper</p>
                    <p>Plantillas</p>
                    <p>Espacios</p>
                    <p>Integraciones</p>
                    <p>Sincronizacion de notas</p>
                    <p>PDF y busqueda de documentos</p>
                    <p>Busqueda de texto escrito a mano</p>
                    <p>Escaneo de documentos</p>
                    <p>Libretas y etiquetas</p>
                </Grid>
                <Grid className={estilos.grid} item xs={12} sm={2} md={2} lg={2} xl={2}> 
                    <h1 className={estilos.titulo}>COMUNIDAD</h1>
                    <p className={estilos.primerItem}>Nuestra comunidad</p>
                    <p>Consultores certificados</p>
                    <p>Programa Beta</p>
                    <p>Desarrolladores</p>
                    <p>Foro</p>
                </Grid>
                <Grid className={estilos.grid} item xs={12} sm={2} md={2} lg={2} xl={2}> 
                    <h1 className={estilos.titulo}>ASISTENCIA</h1>
                    <p className={estilos.primerItem}>Ayuda y aprendizaje</p>
                    <p>Resolucion de problemas</p>
                    <p>Blog</p>
                </Grid>
                <Grid className={estilos.grid} item xs={12} sm={2} md={2} lg={2} xl={2}> 
                    <h1 className={estilos.titulo}>COMPAÑIA</h1>
                    <p className={estilos.primerItem}>Acerca de nosotros</p>
                    <p>Oportunidades laborales</p>
                    <p onClick={()=>console.log("hola amigo")}>Contactanos</p>
                </Grid>
            </Grid>
            <div className={estilos.redes}>
                <img style={{marginRight:"20px"}} src="https://evernote.com/c/assets/social/facebook.svg?67b501bbe87f9480"/>
                <img style={{marginRight:"20px"}} src="https://evernote.com/c/assets/social/twitter.svg?7b399f8561cbf318"/>
                <img style={{marginRight:"20px"}} src="https://evernote.com/c/assets/social/medium.svg?ce5cfde2dc12d1ae"/>
                <img style={{marginRight:"20px"}} src="https://evernote.com/c/assets/social/instagram.svg?2657babed8147056"/>
                <img style={{marginRight:"20px"}} src="https://evernote.com/c/assets/social/youtube.svg?9777441454131556"/>
                <img src="https://evernote.com/c/assets/social/linkedin.svg?967ba6431d779d4c"/>
            </div>
        </div>
    )
}

export default Enlaces
