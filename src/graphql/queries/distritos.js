const { GraphQLList, GraphQLInt } = require('graphql');
const { distritoType } = require('../types/distrito.js');
const { getDistritosByCanton } = require('../../db/queries/distritos');

const listaDistritos = {
	type: new GraphQLList(distritoType),
	description: 'Returns a list of Distritos',
	args: {
		canton: {
			type: GraphQLInt,
			description: 'The canton of the distritos',
		},
	},
	resolve: async (_, { canton }) => {
		try {
			if (!canton) throw new Error('canton is required');
			return await getDistritosByCanton(canton);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { listaDistritos };
