const { GraphQLList, GraphQLInt } = require('graphql');
const { provinciaType } = require('../types/provincia.js');
const { getByPais } = require('../../db/queries/provincias');

const listaProvincias = {
	type: new GraphQLList(provinciaType),
	description: 'Returns a list of provincias',
	args: {
		pais: {
			type: GraphQLInt,
			description: 'The pais of the Provincias',
		},
	},
	resolve: async (_, { pais }) => {
		try {
			if (!pais) throw new Error('pais is required');
			return await getByPais(pais);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { listaProvincias };
