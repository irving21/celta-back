const principal = require('../models/principal.model');
const vehiculo = require('../models/vehiculo.model');
const perfil = require('../models/perfil.model');

module.exports = function(app) {
    // Rutas principal
    app.get('/principal', (req, res) => {
       principal.getPrincipal((err, data) => {
           res.status(200).json(data);
       });
    });

    app.post('/principal', (req, res) => {
        const principalData = {
            id: null,
            Nombre_de_Contacto: req.body.nombreCont,
            Telefono_Movil: req.body.telefonoMovil,
            Correo_electronico: req.body.correoElectronico,
            Fuente_de_reingreso: req.body.fuenteReingreso,
            Campana_de_Leads: req.body.campanaLeads,
            URL_de_formulario: req.body.url,
            Agencia_de_Origen:	req.body.agenciaOrigen
        };

        principal.insertPrincipal(principalData, (err, data) => {
            if (data && data.insertLead) {
                res.json({
                    success: true,
                    msg: 'Lead insertado',
                    data:data
                });
            }else {
                res.status(500).json({
                    success: false,
                    msg: `error en el servidor ${err}`
                });
            }
        });
    });

    // Rutas Vehiculo
    app.get('/vehiculo', (req, res) => {
        vehiculo.getVehiculos((err, data) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: `error en el servidor ${err}`
                });
            } else {
                res.status(200).json(data);
            }
        });
    });

    app.post('/vehiculo', (req, res) => {
        const vehiculoData = {
            id: null,
            Tipo: req.body.tipo,
            Marca: req.body.marca,
            Vehiculo: req.body.vehiculo,
            Version: req.body.version,
            Transmision: req.body.transmision,
            Color: req.body.color,
            Uso_de_Vehiculo: req.body.usoVechiculo,
            Demo_URL_formulario: req.body.urlformulario,
            Anio: req.body.anio,
            VIN: req.body.vin
        };

        vehiculo.insertVehiculo(vehiculoData, (err, data) => {
            if (data && data.insertVehiculo) {
                res.json({
                    success: true,
                    msg: 'vehiculo insertado',
                    data:data
                });
            }else {
                res.status(500).json({
                    success: false,
                    msg: `error en el servidor ${err}`
                });
            }
        });
    });

    app.get('/perfil', (req, res) => {
        perfil.getPerfil((err, data) => {
            if (err) {
                res.status(500).json({
                    success: false, 
                    msg: `error en el servidor ${err}`
                });
            } else {
                res.status(200).json(data);
            }
        });
    });

    app.post('/perfil', (req, res) => {
        const perfilData = {
            Ingresos_Mensuales: req.body.ingresosMensuales,	
            Pago_Inicial_Deseado: req.body.pagoInicialDes,	
            Buro_de_Credito: req.body.buro,
            Comprobante_de_Ingresos: req.body.comprobanteIngresos,		
            Mensualidad_Deseada: req.body.mensualidadDes,	
            Ocupacion: req.body.ocupacion,
            Nota: req.body.nota
        }

        perfil.insertPerfil(perfilData, (err, data) => {
            console.log(data)
            if (data && data.insertPerfil) {
                res.json({
                    success: true,
                    msg: 'perfil insertado',
                    data: data
                });
            }else {
                res.status(500).json({
                    success: false,
                    msg: `error en el servidor ${err}`
                });
            }
        });
    });
};