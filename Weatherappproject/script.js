const { response } = require("express")

async function apidetails()
{
   const api_response = await fetch("https://dog.ceo/api/breeds/image/random")
   const data = await response.json()
   console.log(data)
}

apidetails()