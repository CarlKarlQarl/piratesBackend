const body = document.body
fetch(`http://localhost:3000/ships`)
    .then(response => response.json())
    .then(ships => ships.map(showShip))
    .catch(error => console.log(error))

function showShip(ship){
    let h1 = document.createElement("h1")

    h1.innerHTML = `<a href="show.html?id=${ship.id}">${ship.name}</a>`

    body.appendChild(h1)
}