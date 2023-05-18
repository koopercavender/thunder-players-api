document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://vast-erin-betta-sari.cyclic.app//api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}