const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'isiah joe':{
        'age': 23,
        'height': "6'3",
        'position': 'Shooting Guard',
        'birthLocation': 'Fort Smith, AR',
        'college': 'University of Arkansas'
    },
    'shai gilgeous-alexander':{
        'age': 24,
        'height': "6'6",
        'position': 'Shooting Guard',
        'birthLocation': 'Fort Smith, AR',
        'college': 'University of Kentucky',
    },
    'jalen williams':{
        'age': 22,
        'height': "6'5",
        'position': 'Shooting Guard',
        'birthLocation': 'Denver, CO',
        'college': 'Santa Clara University',
    },
}

app.use('/js', express.static('js'))

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerName', (request,response)=>{
    const playersName = request.params.playerName.toLowerCase()
    if(players[playersName]){
        response.json(players[playersName])
    }else{
        response.json('N/a')
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
