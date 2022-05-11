const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const barrioType = new GraphQLObjectType({
	name: 'barrioType',
	description: 'Tipo de dato para el Barrio',
	fields: {
		ID_BARRIO: {
			type: GraphQLInt,
			description: 'Identificador del barrio',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre del barrio',
		},
		DISTRITO: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Distrito al que pertenecen los barrio',
		},
	},
});

module.exports = { barrioType };
