const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } = require('graphql');

const condicionVentaType = new GraphQLObjectType({
	name: 'condicionVentaType',
	description: 'Tipo de dato para la condicion de venta',
	fields: {
		ID_CONDICION_VENTA: {
			type: GraphQLInt,
			description: 'Identificador de la condicion de venta',
		},
		NOMBRE: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Nombre de la condicion de venta',
		},
		CODIGO: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Codigo de la condicion de venta',
		},
	},
});

module.exports = { condicionVentaType };
