let obj= [
    {id:'1', nombre:'planta', categoria:'plantas', stock:'50', precio:'1200', foto:'./assets/img/fotosuculenta.jpg'},
    {id:'2', nombre:'planta', categoria:'plantas', stock:'50', precio:'1200', foto:'/assets/img/fotosuculenta.jpg'},
    {id:'3', nombre:'planta', categoria:'plantas', stock:'50', precio:'1200', foto:'/assets/img/fotosuculenta.jpg'},
    {id:'4', nombre:'planta', categoria:'macetas', stock:'50', precio:'1200', foto:'/assets/img/fotosuculenta.jpg'},
    {id:'5', nombre:'planta', categoria:'macetas', stock:'50', precio:'1200', foto:'/assets/img/fotosuculenta.jpg'},
]

export const gFetch = (id) => {
  return new Promise( (resolve, reject) => {
    const condition = true
    if (condition){
        setTimeout(()=>{
            resolve (obj)
        }, 1000)
    } else {
        reject ('olvidate')
    }
  } )
}

export default gFetch