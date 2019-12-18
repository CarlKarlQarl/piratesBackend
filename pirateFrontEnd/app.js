const dropdown = document.getElementById("dropdown")

fetch(`http://localhost:3000/pirates`)
    .then(response => response.json())
    .then(pirates => pirates.map(pirate =>{
        let h2 = document.createElement("h2")

        h2.innerText = pirate.name

        document.body.appendChild(h2)
    }))
    .catch(error => console.log(error))

fetch(`http://localhost:3000/ships`)
    .then(response => response.json())
    .then(ships => ships.map(ship => {
        let option = document.createElement("option")

        option.innerText = ship.name
        option.value = ship.id

        dropdown.appendChild(option)
    }))
    .catch(error => console.log(error))