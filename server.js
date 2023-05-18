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
        'position': 'Guard',
        'birthLocation': 'Fort Smith, AR',
        'college': 'University of Kentucky',
    },
    'chet holmgren':{
        'age': 21,
        'height': "7'1",
        'position': 'Center/Power Forward',
        'birthLocation': 'Minneapolis, MN',
        'college': 'Gonzaga University',
    },
    'josh giddey':{
        'age': 20,
        'height': "6'8",
        'position': 'Shooting Guard',
        'birthLocation': 'Melbourne, AUS',
        'college': 'N/a',
    },
    'aleksej pokusevski':{
        'age': 21,
        'height': "7'0",
        'position': 'Power Forward',
        'birthLocation': 'Belgrade, Serbia',
        'college': 'N/a',
    },
    'lindy waters iii':{
        'age': 25,
        'height': "6'6",
        'position': 'Shooting Guard/Small Forward',
        'birthLocation': 'Oklahoma City, OK',
        'college': 'Oklahoma State University',
    },
    'jaylin williams':{
        'age': 20,
        'height': "6'9",
        'position': 'Forward',
        'birthLocation': 'Fort Smith, AR',
        'college': 'University of Arkansas',
    },
    'lugentz dort':{
        'age': 24,
        'height': "6'4",
        'position': 'Shooting Guard',
        'birthLocation': 'Montreal, CAN',
        'college': 'Arizona State University',
    },
    'jalen williams':{
        'age': 22,
        'height': "6'5",
        'position': 'Guard',
        'birthLocation': 'Fort Smith, AR',
        'college': 'University of Arkansas',
    },
}

app.use('/js', express.static('js'))

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerName', (request,response)=>{
    const playerName = request.params.playerName.toLowerCase()
    if(players[playerName]){
        response.json(players[playerName])
    }else{
        response.json('N/a')
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
