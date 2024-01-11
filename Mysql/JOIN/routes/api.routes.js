const userController=require('../controller/user.controller');

module.exports=function(app){

//Inner Join..
app.get("/innerjoin",userController.innerjointable);
app.get("/mulinnerjoin",userController.MULtipleinnerjointable);

//Left Join.......
app.get("/leftjoin",userController.leftjointable);
app.get("/mulleftjoin",userController.mulleftjointable);


// Right Join ....
app.get("/rightjoin",userController.rightjointable);
app.get("/mulrightjoin",userController.mulrightjointable);


//Cross Join .....
app.get("/crossjoin",userController.crossjointable);

//full join ....
app.get("/fulljoin",userController.fulljointable);

//Self join ....
app.get("/selfjoin",userController.selfjointable);

// Exist..
app.get("/exist",userController.Exist);


// UNION..
app.get("/union",userController.union);

// Create Table ..
app.get("/create",userController.createtable);


return app  
}