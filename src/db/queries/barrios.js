const { getConnection, sql } = require('../conection/index');
const { GET_BY_DISTRITO } = require('../scripts/barrios');

module.exports = {
	getBarriosByDistrito: async (distrito) => {
		try {
			const pool = await getConnection();
			const result = await pool.request().input('distrito', sql.Int, distrito).query(GET_BY_DISTRITO);
			return result.recordset;
		} catch (err) {
			throw err;
		}
	},
};
