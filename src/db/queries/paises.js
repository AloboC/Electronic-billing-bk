const { getConnection, sql } = require('../conection/index');
const { GET_ALL } = require('../scripts/paises');

module.exports = {
  /**
   * @description Obtiene todos los paises de la base de datos
   * @returns {Array} Lista de todos los paises
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
};
