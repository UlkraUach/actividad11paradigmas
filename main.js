const todo = (tarea, duracion, callback) => {
    setTimeout(()=>{
         callback(tarea)
    }, duracion)
}

/*
Actividad 1: Levantarse. Duración: 5 segundos
Actividad 2: tender la cama. Duración: 3 segundos
Actividad 3: Bañarse. Duración: 3 segundos
Actividad 5: Tomar clase de paradigmas. Duración: 5 segundos
Actividad 6: Desayunar: Duración: 8 segundos
Actividad 6: Jugar videojuegos: Duración: 10 segundos
*/

todo("Levantarse", 5000, (tarea) => {
    console.log(`Realizando la tarea ${tarea}`)
    tender_cama();
})

function tender_cama(){
    todo("Tender la cama", 3000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
        bañarse();
    })
}

function bañarse(){
    todo("Bañarse", 3000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
        tomar_clase();
    })
}

function tomar_clase(){
    todo("Tomar clase de paradigmas", 5000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
        desayunar();
    })
}

function desayunar(){
    todo("Desayunar", 8000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
        jugar();
    })
}

function jugar(){
    todo("Jugar videojuegos", 10000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
    })
}