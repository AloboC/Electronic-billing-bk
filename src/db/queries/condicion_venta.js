const { getConnection, sql } = require('../conection/index');
const { GET_ALL, GET_BY_ID } = require('../scripts/condicion_venta');

module.exports = {
	/**
	 * @description Obtiene todos los registros de la tabla condicion_venta
	 * @returns {Array} Lista de todos los registros de la tabla condicion_venta
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
	 * @description Obtiene una condicion de venta por su id
	 * @param {number} id identificador de la condicion de venta
	 * @returns {Object} condicion de venta
	 */
	getById: async (id) => {
		try {
			let result;
			const pool = await getConnection();
			result = await pool.request().input('id', sql.Int, id).query(GET_BY_ID);
			return result.recordset[0];
		} catch (err) {
			throw err;
		}
	},
};


