import React from 'react'
import { makeStyles } from '@material-ui/core'
import business from '../Imagenes/business.png'
import entrepeneur from '../Imagenes/entrepeneur.png'
import forbes from '../Imagenes/forbes.png'
import inc from '../Imagenes/inc.png'
import verge from '../Imagenes/verge.png'
import well from '../Imagenes/well.png'

const styles = makeStyles({
    body:{
        backgroundColor:"#F7F7F7",
        marginTop:"20px"
    },
    logoEmpresas:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:"30px"
    },
    imagen:{
        height:"35px",
        width:"120px",
        margin:"30px"
    },
    parrafo:{
        textAlign:"center",
        width:"50%",
        fontWeight:"normal",
        fontSize:"20px",
    },
    completo:{
        display:"flex",
        alignItems:"center",
        flexDirection:"column"
    }
})

function Empresas() {
    const estilos = styles()
    return (
        <div className={estilos.body}>
            <div className={estilos.completo}>
                <p className={estilos.parrafo} style={{marginTop:"100px"}}>"Piensa en Evernote como tu centro de referencia, no solo para tus listas de tareas pendientes, sino para todas tus notas. Las posibilidades de organización que ofrece son amplias y todo se sincroniza en todos los dispositivos en los que la aplicación esté habilitada, por lo que siempre estarás al día."</p>
                <p className={estilos.parrafo}>-Inc Magazine</p>
            </div>
            <div className={estilos.logoEmpresas}>
                <img className={estilos.imagen} src={business}></img>
                <img className={estilos.imagen} src={entrepeneur}></img>
                <img className={estilos.imagen} src={verge}></img>
                <img className={estilos.imagen} src={well}></img>
                <img className={estilos.imagen} src={inc}></img>
                <img className={estilos.imagen} src={forbes}></img>
            </div>
        </div>
    )
}

export default Empresas
