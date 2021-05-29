import { makeStyles,Grid } from '@material-ui/core'
import React from 'react'
import img from '../Imagenes/imagenEvernote.png'

const styles = makeStyles({
    body:{
        display:"flex",
        width:"100%",
        marginTop:"20px",
        justifyContent:"flex-start",
        marginLeft:"50px"
    },
    dos:{
        width:"85%",
        marginTop:"30px"
    },
    titleText:{
        fontSize:"18px",
        height:"5px"
    },
    subtitleText:{
        fontSize:"14px",
        fontWeight:"initial"
    }
})

function InicioSegundo() {
    const estilos = styles()
    return (
        <Grid container className={estilos.body} spacing={5}>
            <Grid item xs={12} sm={6} md={6} xl={12}>
                <img src={img} style={{width:"90%"}}></img>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={12}>
                <div className={estilos.dos}>
                    <h1 className={estilos.titleText}>TRABAJA DESDE CUALQUIER LUGAR</h1>
                    <h6 className={estilos.subtitleText}>Mantén la información importante a tu alcance sincronizando tus notas en todos tus dispositivos.</h6>
                    <h1 className={estilos.titleText}>CAPTURA LOS ELEMENTOS IMPORTANTES</h1>
                    <h6 className={estilos.subtitleText}>Añade texto, imágenes, audios, documentos escaneados, archivos PDF y documentos a tus notas.</h6>
                    <h1 className={estilos.titleText}>TUS NOTAS A TU MANERA</h1>
                    <h6 className={estilos.subtitleText}>Exprésate con las herramientas de formato que te ayudarán a plasmar lo que piensas.</h6>
                    <h1 className={estilos.titleText}>ENCUÉNTRALO TODO RÁPIDAMENTE</h1>
                    <h6 className={estilos.subtitleText}>Accede a la información que necesites, cuando la necesites. La función de búsqueda te muestra resultados a medida que escribes.</h6>
                </div>
            </Grid>
        </Grid>
    )
}

export default InicioSegundo
