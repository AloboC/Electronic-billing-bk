const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');

const cantonType = new GraphQLObjectType({
	name: 'cantonType',
	description: 'Tipo de dato para el Canton',
	fields: {
		ID_CANTON: {
			type: GraphQLInt,
			description: 'Identificador del canton',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre del canton',
		},
		PROVINCIA: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Provincia a la que pertenecen los cantones',
		},
	},
});

module.exports = { cantonType };
