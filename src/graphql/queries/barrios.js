const { GraphQLList, GraphQLInt } = require('graphql');
const { barrioType } = require('../types/barrio.js');
const { getBarriosByDistrito } = require('../../db/queries/barrios');

const listaBarrios = {
	type: new GraphQLList(barrioType),
	description: 'Returns a list of barrios',
	args: {
		distrito: {
			type: GraphQLInt,
			description: 'The distrito of the barrios',
		},
	},
	resolve: async (_, { distrito }) => {
		try {
			if (!distrito) throw new Error('distrito is required');
			return await getBarriosByDistrito(distrito);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { listaBarrios };
