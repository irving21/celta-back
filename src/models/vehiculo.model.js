let conn = require('../../db/db');
let vehiculoModel = {};

vehiculoModel.getVehiculos = (cb) => {
    if(conn) {
        conn.query('SELECT * FROM vehiculo_de_interes', (err, rows)=>{
            if(err) {
                console.log(err);
                throw err;
            }else{
                cb(null, rows);
            }
        })
    }
};

vehiculoModel.insertVehiculo = (vehiculoData, cb) => {
    if(conn){
        conn.query(
            'INSERT INTO vehiculo_de_interes SET ?', vehiculoData,
            (err, result) => {
                if (err) {
                    console.log("Errror", err);
                    throw err;
                } else {
                    cb(null, {
                        'insertVehiculo': result.insertId
                    });
                }
            }
        )   
    }
};

module.exports = vehiculoModel;