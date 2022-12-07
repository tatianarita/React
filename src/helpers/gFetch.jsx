let obj= [
    {id:'1', nombre:'planta 1', categoria:'plantas', stock:'50', precio:'1200', foto:'/public/suculove.jpg'},
    {id:'2', nombre:'planta 2', categoria:'plantas', stock:'50', precio:'1500', foto:'/public/suculove.jpg'},
    {id:'3', nombre:'planta 3', categoria:'plantas', stock:'50', precio:'1100', foto:'/public/suculove.jpg'},
    {id:'4', nombre:'maceta 1', categoria:'macetas', stock:'50', precio:'1000', foto:'/public/cemento.jpg'},
    {id:'5', nombre:'maceta 2', categoria:'macetas', stock:'50', precio:'1300', foto:'/public/cemento.jpg'},
    {id:'6', nombre:'maceta 3', categoria:'macetas', stock:'50', precio:'1200', foto:'/public/cemento.jpg'}
]

export const gFetch = (id) => {
  return new Promise( (resolve, reject) => {
    const condition = true
    if (condition){
        setTimeout(()=>{
            resolve (obj)
        }, 1000)
    } else {
        reject ('error')
    }
  } )
}

export default gFetch