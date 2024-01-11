const db=require('../config/db.config');

async function checkemailExist(email) {
    var query="SELECT * FROM `pra1` WHERE email=?"
    db.query(query,[email],(err, row, fileds) => {
        if(typeof row!=undefined&&row!=null&&row.length>0){
          console.log("Email Already Exists...");
        }
    })
}

module.exports={checkemailExist}