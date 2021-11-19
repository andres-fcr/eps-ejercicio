let formulario = document.querySelector('form')
let listarCitas =document.getElementById('listarCitas')
let buscar = document.getElementById('btnBuscar')
let busqueda = document.getElementById('busqueda')
let citas = []

if (JSON.parse(localStorage.getItem('citas'))) {
    citas = JSON.parse(localStorage.getItem('citas'))
}

const capturarDatos = () => {
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let hora = document.getElementById('hora').value
    let sintomas = document.getElementById('sintomas').value

    let registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }
    swal.fire({
        title: '¿Segudo que quieres agendar la cita?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            swal.fire('¡Agenda guardada!', '', 'success')
            citas.unshift(registro)
            localStorage.setItem('citas', JSON.stringify(citas))
            pintardatos()
        } else if (result.isDenied) {
            swal.fire('La agenda no fue guardada', '', 'info')
        }
    })
    formulario.reset()
}
formulario.addEventListener('submit', e => {
    e.preventDefault()
    capturarDatos()
})

const pintardatos = () => {
    listarCitas.innerHTML =''

    let citasLocalStorage = JSON.parse(localStorage.getItem('citas'))

    citasLocalStorage.map((cita)=>{
        const { nombre, fecha, hora, sintomas } = cita
        listarCitas.innerHTML += `
             <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
        `
    })

}

document.addEventListener('DOMContentLoaded', pintardatos)

buscar.addEventListener('click', e =>{
    e.preventDefault()
    let input = document.getElementById('inputBuscar').value
    let data = JSON.parse(localStorage.getItem('citas'))

    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())
    console.log(filtro);

    

    filtro.lenght === 0
    ?
        busqueda.innerHTML += `
            <div style="color: white;">El nombre ${input} no existe</div>        
        `
    :
    filtro.map((cita)=>{
        const { nombre, fecha, hora, sintomas} = cita
        busqueda.innerHTML += `
        <div style="color: white;">${nombre}</div>
        <div style="color: white;">${fecha}</div>
        <div style="color: white;">${hora}</div>
        <div style="color: white;">${sintomas}
        <button id="btnBorrarBusqueda">Borrar</button>
        </div>
        `
        let borrarBusqueda = document.getElementById('btnBorrarBusqueda')
        borrarBusqueda.addEventListener('click',e =>{
            console.log(borrarBusqueda)
           
        })
    })
})

let nombre, apellido, email, contraseña;

const form = document.getElementById('formularioR')


form.addEventListener('click', (e)=>{
    e.preventDefault()
    saveData()

    document.getElementById('nombres').value = ''
    document.getElementById('apellidos').value =''
    document.getElementById('exampleInputEmail1').value =''
    document.getElementById('exampleInputPassword1').value =''

    
})

function saveData() {
    nombre = document.getElementById('nombres').value
    apellido = document.getElementById('apellidos').value
    email = document.getElementById('exampleInputEmail1').value
    contraseña = document.getElementById('exampleInputPassword1').value

    localStorage.setItem('Nombres',nombre)
    localStorage.setItem('apellidos',apellido)
    localStorage.setItem('E-mail',email)
    localStorage.setItem('Contraseña',contraseña)
}

