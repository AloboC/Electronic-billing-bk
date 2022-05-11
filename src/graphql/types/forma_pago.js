const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const formaPagoType = new GraphQLObjectType({
	name: 'formaPagoType',
	description: 'Tipo de dato para la forma de Pago',
	fields: {
		ID_FORMA_PAGO: {
			type: GraphQLInt,
			description: 'Identificador de la forma de pago',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre de la forma de pago',
		},
		CODIGO: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Codigo de la forma de pago',
		},
	},
});

module.exports = { formaPagoType };
