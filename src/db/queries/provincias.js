const { getConnection, sql } = require('../conection/index');
const { GET_BY_PAIS } = require('../scripts/provincias');

module.exports = {
	/**
	 * @description Obtiene todos las provincias de la base de datos que pertenesen al pais indicado
	 * @param {number} pais Identificador del pais
	 * @returns {Array} Lista de todas las provincias que pertenesen al pais
	 */
	getByPais: async (pais) => {
		try {
			let result;
			const pool = await getConnection();
			result = await pool.request().input('pais', sql.Int, pais).query(GET_BY_PAIS);
			return result.recordset;
		} catch (err) {
			throw err;
		}
	},
};
