const mysql = require('mysql');

class Connection{
    config={
            user:"root",
            password:"aahil",
            database:"sasta_entertainment_app",
            host:"localhost",
        };

    getConnection(){
        return mysql.createConnection(this.config,(err)=>{
            if(err){
                console.log(err);
            }
        });

        // conn.connect((err)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log("connected");
        //     }
        // })
    }
}

module.exports={Connection};

// let con=new Connection();
// console.log(con.getConnection());
