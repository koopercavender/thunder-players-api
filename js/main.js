document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://vast-erin-betta-sari.cyclic.app//api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector("#personAge").textContent = data.age
        document.querySelector("#personHeight").textContent = data.height
        document.querySelector("#personPosition").textContent = data.position
        document.querySelector("#personBl").innerText = data.birthLocation
        document.querySelector("#personCollege").innerText = data.college

    }catch(error){
        console.log(error)
    }
}