const bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))


    app.get('/api/users/add', function(req, res) {
        console.log(req.params)
        res.send('added successfully')
    })
}