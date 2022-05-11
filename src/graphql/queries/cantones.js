const { GraphQLList, GraphQLInt } = require('graphql');
const { cantonType } = require('../types/canton');
const { getCantonesByProvincia } = require('../../db/queries/cantones');

const listaCantones = {
	type: new GraphQLList(cantonType),
	description: 'Returns a list of cantones',
	args: {
		provincia: {
			type: GraphQLInt,
			description: 'The provincia of the canton',
		},
	},
	resolve: async (_, { provincia }) => {
		try {
			if (!provincia) throw new Error('provincia is required');
			return await getCantonesByProvincia(provincia);
		} catch (error) {
			throw error;
		}
	},
};

module.exports={listaCantones};
