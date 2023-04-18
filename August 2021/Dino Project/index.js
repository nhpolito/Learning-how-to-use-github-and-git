const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/dinoname', async(request,response) => {
    // run code stuff
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?format=json&words=2&paragraphs=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
		"x-rapidapi-key": "77708efa78msh4ab87bc00c5faa4p117726jsna93f96a19175"
	}
})

const dinoNameResponse = await fetchApi.json();
console.log(dinoNameResponse);
response.json(dinoNameResponse);
})