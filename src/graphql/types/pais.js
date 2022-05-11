const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const paisType = new GraphQLObjectType({
	name: 'paisType',
	description: 'Tipo de dato para el pais',
	fields: {
		ID_PAIS: {
			type: GraphQLInt,
			description: 'Identificador del pais',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre del pais',
		},
		CODIGO: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Codigo del pais',
		},
	},
});

module.exports = { paisType };
