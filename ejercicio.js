// Crea carpeta


// var fs=require('fs')

// fs.mkdirSync('Carpeta ejercicio')

// fs.mkdirSync('Carpeta ejercicio',(error)=>{
//     if(error){
//         throw error;
//     }
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crear archivo de texto




// var fs=require(`fs`)

// var archivo='Solitario.txt'
// var mas='Echo por Germán :)'

// if(fs.existsSync(archivo)){
//          console.log('esta')
//     }
//      else{
//          console.log('no esta')
//      } 

// fs.writeFileSync(archivo,mas)

// var file= fs.readSync('./')
// var esc=fs.readFileSync(archivo,'utf-8')
// console.log(esc)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Mover archivo de texto a Carpeta


// var fs=require('fs')

// fs.renameSync('./Solitario.txt','./Carpeta ejercicio/Solitario.txt') /*para mover de lugar */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creo la otra carpeta

/* var fs=require('fs')

fs.mkdirSync('Carpeta 2')

fs.mkdirSync('Carpeta 2',(error)=>{
    if(error){
        throw error;
    }
})
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mover archivo que esta dentro de carpeta a la otra carpeta


// var fs=require('fs')
// fs.renameSync('./Carpeta ejercicio/Solitario.txt','./Carpeta 2/Solitario.txt') /*para mover de lugar */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Eliminar archivo de texto



// var fs=require('fs')
// fs.unlinkSync('./Carpeta 2/Solitario.txt')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Eliminar carpeta 2

// require('fs').rmdirSync('Carpeta 2');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Elimina la primera carpeta

// require('fs').rmdirSync('Carpeta ejercicio');
