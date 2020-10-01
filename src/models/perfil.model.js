let conn = require('../../db/db');

let perfilModel = {};

perfilModel.getPerfil = (cb) => {
    if (conn) {
        conn.query('SELECT * FROM perfil_financiero', (err, rows) => {
            if (err) {
                console.log(err);
                throw err;
            }else {
                cb(null, rows);
            }
        });
    } else {
        
    }
};

perfilModel.insertPerfil = (perfilData, cb) => {
    if (conn) {
        conn.query(
            'INSERT INTO perfil_financiero SET ?', perfilData,
            (err, result) => {
                if (err) {
                    console.log("Error: ", err);
                    throw err;    
                }else {
                    cb(null, {
                        'insertPerfil': result.insertId
                    });
                }
            }
        );
    }
}

module.exports = perfilModel;