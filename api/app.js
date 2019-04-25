var bodyparser = require('body-parser');
var express = require('express');
var promise = require('bluebird');
var app = express();


var options = { promiseLib: promise }

var dt = require('pg-promise')(options);
var cs = 'postgres:postgres:toor@localhost:5432/task';

var db = dt(cs);



app.set('port', process.env.PORT || 4600);

app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');

    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma, Origin, Authorization, Content-Type, X-Requested-With");

    res.header("Access-Control-Allow-Methods", "*");

    return next();
});


app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "100mb" }));


app.get('/', (req, res) => {
    res.send('Database connected');
})
app.post('/signup', (req, res) => {

    var username = req.body.username;
    var name = req.body.name;
    var email=req.body.email;
    var usertype=req.body.usertype;
    var password= req.body.password;
    var mobile=req.body.mobile;
    var  address=req.body.address;

    db.any('insert into signup (username,name,email,usertype,password,mobile,address) values ($1,$2,$3,$4,$5,$6,$7)',[username,name,email,usertype,password,mobile,address]).then(data=>{
        res.send({'message':"registration successful"})
    })
})
app.get('/login/:id/:password',(req,res)=>{
    var username = req.params.id
    var password= req.params.password;

    db.any('select * from signup where username = $1 OR email = $1 OR mobile = $1',[username]).then(data=>{

        if(data[0].password==password){
            res.send(data);
        }
        else{
            res.send({'message':'invalid id or password'})
        }
    })

})

app.get('/getall',(req,res)=>{
    db.any('select * from signup').then(data=>{
        res.send(data);
    })
})

app.get('/getbyuser/:id',(req,res)=>{
    var id= req.params.id;
    db.any('select * from signup where userid=$1',[id]).then(data=>{
        res.send(data);
    })

})

app.listen(app.get('port'), (err => {
    if (err)
        console.log('serve not started')
    else
        console.log('server started at : http://localhost:4600 ');
}))
