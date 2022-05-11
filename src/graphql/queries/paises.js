const { GraphQLList, GraphQLInt } = require('graphql');
const { paisType } = require('../types/pais.js');
const { getAll } = require('../../db/queries/paises');

const listaPaises = {
	type: new GraphQLList(paisType),
	description: 'Returns a list of paises',

	resolve: async () => {
		try {
			return await getAll();
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { listaPaises };
