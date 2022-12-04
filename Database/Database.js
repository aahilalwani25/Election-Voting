const connection = require('../Database/connection');

class Database {
  con = new connection.Connection().getConnection();
  flag=false;

  constructor() {
    con.connect(err => {
      if (err) console.log(err);
      console.log('connected');
    });
  }


  //app.post
  insertQuery(query) {
    this.con.query(query,(err,rows,fields)=>{
        if(err) console.log(err);
        this.flag=true;
    })
    return this.flag;
  }

  //app.post
  updateQuery(query) {
    this.con.query(query, (err, rows, fields) => {
      if (err) console.log(err);
      this.flag = true;
    });
    return this.flag;
  }
  
  //app.get
  selectQuery(query) {
    let fetchRows=null;
    this.con.query(query, (err, rows, fields) => {
      if (err) console.log(err);
      fetchRows=rows;
    });
    return fetchRows;
  }
}

module.exports={Database};
