const { getConnection, sql } = require('../conection/index');
const { GET_ALL, GET_BY_ID, GET_BY_NAME, INSERT } = require('../scripts/formas_pago');

module.exports = {
	/**
	 * @description Obtiene todos las formas de pago de la base de datos
	 * @returns {Array} Lista de todos los registros de la tabla formas_pago
	 */
	getAll: async () => {
		try {
			const pool = await getConnection();
			const result = await pool.request().query(GET_ALL);
			return result.recordset;
		} catch (err) {
			throw err;
		}
	},

	/**
	 * @description Obtiene una forma de pago de la base de datos ya sea por su id o por su nombre
	 * @param {number} id Identificador de la forma de pago
	 * @param {string} nombre Nombre de la forma de pago
	 * @returns {Object} Forma de pago
	 */
	get: async (id, nombre) => {
		try {
			let result;
			const pool = await getConnection();
			if (id) result = await pool.request().input('id', sql.Int, id).query(GET_BY_ID);
			else if (nombre) result = await pool.request().input('nom', sql.VarChar(50), nombre).query(GET_BY_NAME);
			return result.recordset[0];
		} catch (err) {
			throw err;
		}
	},

	/**
	 * @description Inserta una forma de pago en la base de datos
	 * @param {Object} fp Forma de pago a insertar
	 * @returns {string} Objeto con el mensaje de exito
	 */
	set: async (fp) => {
		try {
			let msg = '';
			const pool = await getConnection(),
				result = await pool
					.request()
					.input('codigo', sql.VarChar(5), fp.CODIGO)
					.input('nombre', sql.VarChar(50), fp.NOMBRE)
					.output('id', sql.Int, fp.ID_FORMA_PAGO)
					.output('Msg', sql.VarChar(250), msg)
					.execute(INSERT);

			return result.output;
		} catch (err) {
			throw err;
		}
	},
};
