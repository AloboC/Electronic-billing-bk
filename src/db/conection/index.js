const sql = require('mssql');

const config = {
	user: 'alobo_fac',
	password: '0207Jalcgar',
	server: 'localhost',
	database: 'FacturacionElectronica',
	pool: {
		max: 20,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true,
		trustServerCertificate: true,
	},
};

const getConnection = async () => {
	try {
		const pool = await sql.connect(config);
		return pool;
	} catch (err) {
		throw new Error(err);
		// throw new Exception({
		//     name: "ConnectionError",
		//     msj: err.message,
		//     file: "connection.js",
		//     method: "getConnection",
		//     line: 22,
		//   });
	}
};

module.exports = { sql, getConnection };
