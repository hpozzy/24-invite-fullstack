const express = require("express")
const app = express()
const axios = require("axios")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let going = []
let notGoing = []

app.get("/api", (req, res) => {
  axios.get(`https://randomuser.me/api/`).then((r) => {
    const user = r.data.results[0]
    res.json({
      name: user.name.first,
      last: user.name.last,
      pic: user.picture.large,
      email: user.email,
      phone: user.phone,
    })
  })
})

// app.post("./api/going", (req, res) => {
//   res.json(going)
// })

app.post("/api/going/", (req, res) => {
  going.push(req.body)
  res.json(going)
  //   console.log(going)
})

app.get("/api/going/", (req, res) => {
  res.json(going)
})

app.post("/api/notgoing/", (req, res) => {
  notGoing.push(req.body)
  res.json(notGoing)
  console.log(notGoing)
})

app.get("/api/notgoing/", (req, res) => {
  res.json(notGoing)
})

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
