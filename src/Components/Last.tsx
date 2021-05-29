import { makeStyles } from '@material-ui/styles'
import React from 'react'

const styles = makeStyles({
    body:{
        margin:"50px"
    },
    raya:{
        height:"2px",
        backgroundColor:"black",
        marginTop:"30px",
        width:"85%"
    }
})

function Last() {
    const estilos = styles()
    return (
        <div className={estilos.body}>
            <img src="https://evernote.com/img/logo/evernote/primary.svg"/>
            <div style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                <div className={estilos.raya}/>
            </div>
        </div>
    )
}

export default Last
