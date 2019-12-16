const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")
console.log(id)

fetch(`http://localhost:3000/ships/${id}`)
    .then(response => response.json())
    .then(ship => {
        let h1 = document.createElement("h1")
        h1.innerText = ship.name
        
        document.body.appendChild(h1)

        ship.pirates.map(pirate => {
            let p = document.createElement("p")
            p.innerText = pirate.name
            document.body.appendChild(p)
        })
    })
    .catch(error => console.log(error))