const express = require('express')
const app = express()
const PORT = 8000

const waysToWash = {
  'sink': {
    'water': 'hard',
    'pressure': 'strong',
    'duration': '5 minutes'
  },
  'shower': {
    'water': 'hard',
    'pressure': 'strong',
    'duration': '1 hr'
  },
  'hose': {
    'water': 'hard',
    'pressure': 'depending',
    'duration':  'If strong pressure, 2mins, if soft pressure, 10 mins'
  },
  'river': {
    'water': 'soft',
    'pressure': 'depending',
    'duration': '20 minutes' 
  },
  'unknown':{
    'water': '?',
    'pressure': '?',
    'duration': '?'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html') //looks in main directory for index.html 
})

app.get('/wash/:type', (request, response)=>{
  const washType = request.params.type.toLowerCase()
  if(waysToWash[washType] ){
    response.json(waysToWash[washType])
    // allows specific requests and returns objects if found
  }else{
    response.json(waysToWash['unknown'])
    // throws back an unknown if they look for something outside of API 
  }
})

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! `)
})