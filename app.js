const tbody = document.querySelector('tbody')


async function obtenerDatos() {
    const response = await fetch('https://confutatis.com.mx/')
    const data = await response.json()

    let info = ''

    data.forEach( data => {

        const {id,marca,anio,modelo,color,placa} = data

        info += 
        `   <tr>
        <td>${id}</td>
        <td>${marca}</td>
        <td>${modelo}</td>
        <td>${anio}</td>
        <td>${color}</td>
        <td>${placa}</td>
        </tr>`
        
    });

    tbody.innerHTML = info
}



obtenerDatos()