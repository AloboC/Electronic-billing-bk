const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const provinciaType = new GraphQLObjectType({
	name: 'provinciaType',
	description: 'Tipo de dato para la provincia',
	fields: {
		ID_PROVINCIA: {
			type: GraphQLInt,
			description: 'Identificador de la provincia',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre de la provincia',
		},
		PAIS: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Pais al que pertenecen las provincias',
		},
	},
});

module.exports = { provinciaType };
