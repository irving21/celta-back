let conn = require('../../db/db');
let principalModel = {};


principalModel.getPrincipal = (callback) => {
    if (conn) {
        conn.query('SELECT * FROM informacion_principal',
        (err, rows) => {
            if (err) {
                console.log(err);
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};

principalModel.insertPrincipal = (principalData, cb) => {
    if (conn){
        conn.query(
            'INSERT INTO informacion_principal SET ?', principalData, 
            (err, result) => {
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    cb(null, {
                        'insertLead': result.insertId
                    });
                }
            } 
        );
    }
};

module.exports = principalModel;