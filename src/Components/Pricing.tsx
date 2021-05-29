import { Grid,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const styles = makeStyles({
    body:{
        backgroundColor:"white",
        marginTop:"25px",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        textAlign:"center"
    },
    grid:{
        backgroundColor:"white",
    },
    titulo:{
        display:"flex"
    },
    tipoPlan:{
        fontSize:"25px"
    },
    boton:{
        border:"1px solid black",
        width:"75%"
    },
    botonPremium:{
        border:"1px solid green",
        backgroundColor:"green",
        color:"white",
        width:"75%"
    },
    botonBusiness:{
        border:"1px solid black",
        backgroundColor:"black",
        color:"white",
        width:"75%"
    },
    cuerpoPrecio:{
        backgroundColor:"white",
        margin:"20px",
        border:"2px solid black",
        borderRadius:40
    },
    cuerpoPrecioMedio:{
        backgroundColor:"white",
        margin:"20px",
        border:"2px solid green",
        borderRadius:40
    },
    cuerpoDentro:{
        margin:"20px"
    }
})

function Pricing() {
    const estilos = styles()
    return (
        <div className={estilos.body}>
            <div>
                <h1 className={estilos.text}>Descárgate el Evernote que mejor se adapte a ti</h1>
            </div>
            <Grid container>
                <Grid className={estilos.grid} item xs={12} md={4} lg={4} xl={4} sm={4}>
                    <div className={estilos.cuerpoPrecio}>
                        <div className={estilos.cuerpoDentro}>
                            <div className={estilos.titulo}>
                                <img src="https://evernote.com/c/assets/compare-plans/basic-simple.svg?57b7b5225ecab114"/>
                                <h6 className={estilos.tipoPlan}>Basic</h6>
                            </div>
                            <div>
                                <h1>Gratis</h1>
                                <h6>REALIZA BUENAS ANOTACIONES</h6>
                                <p style={{marginTop:"20px"}}>&#10140; Sincroniza hasta 2 dispositivos</p>
                                <p>&#10140; Encuentra tus notas rápidamente gracias a las búsquedas y etiquetas</p>
                                <p>&#10140; Incluye formato enriquecido en tus notas</p>
                                <p>&#10140; Capturar páginas web</p>
                                <p>&#10140; Tamaño máximo de nota de 25 MB</p>
                                <p>&#10140; Límite de carga mensual de 60MB</p>
                                <div style={{textAlign:"center"}}>
                                    <Button className={estilos.boton}>Comenzar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={estilos.grid} item xs={12} md={4} lg={4} xl={4} sm={4}>
                    <div className={estilos.cuerpoPrecioMedio}>
                        <div className={estilos.cuerpoDentro}>
                            <div className={estilos.titulo}>
                                <img src="https://evernote.com/c/assets/compare-plans/premium-simple.svg?c512717175fff36f"/>
                                <h6 className={estilos.tipoPlan}>Premium</h6>
                            </div>
                            <div>
                                <h1>$ 25,00/ MES</h1>
                                <h6 >SÉ MÁS PRODUCTIVO.</h6>
                                <p style={{marginTop:"20px"}}>&#10140; Todo de Basic</p>
                                <p>&#10140; Sincroniza en un número ilimitado de dispositivos</p>
                                <p>&#10140; Accede a tus notas sin necesidad de estar conectado a Internet</p>
                                <p>&#10140; Realiza anotaciones en archivos PDF</p>
                                <p>&#10140; Encuentra texto dentro de documentos Office y archivos PDF</p>
                                <p>&#10140; Crear plantillas personalizadas</p>
                                <p>&#10140; Personaliza tu página de inicio</p>
                                <p>&#10140; Tamaño máximo de nota de 200MB</p>
                                <p>&#10140; Límite de carga mensual de 10GB</p>
                                <div style={{textAlign:"center"}}>
                                    <Button className={estilos.botonPremium}>Pruebalo gratis</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={estilos.grid} item xs={12} md={4} lg={4} xl={4} sm={4}>
                    <div className={estilos.cuerpoPrecio}>
                        <div className={estilos.cuerpoDentro}>
                            <div className={estilos.titulo}>
                                <img style={{height:"35px"}} src="https://evernote.com/c/assets/compare-plans/business-simple.svg?3dae02e9a0cf823f"/>
                                <h6 className={estilos.tipoPlan}>Business</h6>
                            </div>
                            <div>
                                <h1>$ 100,00 <span style={{fontSize:"14px"}}>/ USUARIO / MES</span></h1>
                                <h6 >COLABORA CON TODA TU EMPRESA.</h6>
                                <p style={{marginTop:"20px"}}>&#10140; Todo de Premium</p>
                                <p>&#10140; Trabaja con tu equipo en espacios compartidos</p>
                                <p>&#10140; Consulta el historial de actividad de tu equipo</p>
                                <p>&#10140; Centraliza la administración de la cuenta</p>
                                <p>&#10140; Gestiona los datos del equipo y acceso</p>
                                <p>&#10140; Inicia sesión rápidamente con el inicio de sesión único (SSO)</p>
                                <p>&#10140; Propiedad de los datos corporativos</p>
                                <p>&#10140; Límite de carga mensual de 20GB + 2GB/usuario</p>
                                <div style={{textAlign:"center"}}>
                                    <Button className={estilos.botonBusiness}>Pruebalo gratis</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Pricing
