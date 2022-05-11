const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const distritoType = new GraphQLObjectType({
	name: 'distritoType',
	description: 'Tipo de dato para el distrito',
	fields: {
		ID_DISTRITO: {
			type: GraphQLInt,
			description: 'Identificador del distrito',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre del distrito',
		},
		CANTON: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Canton al que pertenecen los distrito',
		},
	},
});

module.exports = { distritoType };
