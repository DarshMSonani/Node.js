require('dotenv').config();
const config=require('./config/config');
const express=require('express');
const app=express();
var fs = require('fs');
var bodyParser = require('body-parser')
const db=require('./config/db.config');
var path=require('path');



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');


let server
if(config.protocol == 'https'){
    const https = require('https')
    server = https.createServer({
        key : fs.readFileSync(config.certificate.privkey,'utf8'),
        cert : fs.readFileSync(config.certificate.fullchain, 'utf8')
    }, app);
}
else{
    const http = require('http')
    server = http.createServer(app);
}


const webRoute = require('./routes/web.routes')
app.all('*', webRoute);

const router = express.Router()
require('./routes/api.routes')(router, {})
app.use('/users', router);



server.listen(config.PORT,()=>{
    console.log(`Server Running On PORT ${config.PORT}`);
});