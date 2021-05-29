import { AppBar, makeStyles,Toolbar } from '@material-ui/core'
import React from 'react'

const styles = makeStyles({
    AppBar:{
        backgroundColor:"white",
        height:"65px",
        width:"100%"
    },
    imagen : {
        height:"65px",
        marginLeft:"60px"
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
        fontSize:"13px",
        margin:"9px"
    },
    textDescargar:{
        color:"green",
        fontSize:"13px",
        margin:"9px"
    }
})

export default function NavBar() {
    const estilos = styles()
    return (
        <>
            <AppBar className={estilos.AppBar} position='static'>
                <Toolbar>
                    <div className={estilos.padreImagen}>
                        <img alt="Logo" className={estilos.imagen} src="https://www.creativosonline.org/wp-content/uploads/2018/08/evernote.jpg"></img>
                    </div>
                    <div className={estilos.padreLista}>
                        <h2 className={estilos.text}>POR QUE EVERNOTE?</h2>
                        <h2 className={estilos.text}>FUNCIONES</h2>
                        <h2 className={estilos.text}>PLANES</h2>
                    </div>
                    <div className={estilos.padrefinal}>
                        <h2 className={estilos.text}>AYUDA</h2>
                        <h2 className={estilos.text}>INICIAR SESION</h2>
                        <h2 className={estilos.textDescargar}>DESCARGAR</h2>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
