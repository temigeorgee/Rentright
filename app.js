const   express     = require('express'),
        app         = express(),
        bodyParser  = require('body-parser');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


  
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//=========================== Home Page ===================================================
app.get('/', (req, res, next) => {
    res.render('index')
})

//=================================== Keras Query =============================================
app.post('/', (req, res, next) => {
    // console.log('Hit route');
})


//================================LISTENER===========================================================


module.exports = app;