const userController=require('../controller/user.controller');
const upload=require('../middleware/middleware');

module.exports=function(app){

//Post Data
app.post('/insertdata',upload.single('profile_pic'),userController.postdata)

//Get Data    
app.get('/getdata',userController.getdata)

//Search by name
app.post('/searchdata',userController.searchdata)


//loging Data    
app.post('/logingrout',userController.loging)


//Delete
app.get('/deletedata',userController.deletedata)

//Update
app.post('/updatedata',upload.single('profile_pic'),userController.updatedata)




return app  
}