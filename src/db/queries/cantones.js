const { getConnection, sql } = require('../conection/index');
const { GET_BY_PROVINCIA } = require('../scripts/cantones');

module.exports = {
	getCantonesByProvincia: async (provincia) => {
		try {
			const pool = await getConnection();
			const result = await pool.request().input('provincia', sql.Int, provincia).query(GET_BY_PROVINCIA);
			return result.recordset;
		} catch (err) {
			throw err;
		}
	},
};
