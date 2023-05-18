document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playersName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rose-weak-piranha.cyclic.app/api/${playersName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}