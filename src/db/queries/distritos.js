const { getConnection, sql } = require('../conection/index');
const { GET_BY_CANTON } = require('../scripts/distritos');

module.exports = {
	/**
	 * @description Obtiene todos los distritos que pertenesen al canton indicado
	 * @param {number} identificador del Canton
	 * @returns {Array} Lista de todos los distritos que pertenesen al canton
	 */
	getDistritosByCanton: async (canton) => {
		try {
			const pool = await getConnection();
			const result = await pool.request().input('canton', sql.Int, canton).query(GET_BY_CANTON);
			return result.recordset;
		} catch (err) {
			throw err;
		}
	},
};
