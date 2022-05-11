const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { listaPaises } = require('./queries/paises');
const { listaProvincias } = require('./queries/provincias');
const { listaCantones } = require('./queries/cantones.js');
const { listaDistritos } = require('./queries/distritos');
const { listaBarrios } = require('./queries/barrios.js');
const { listaCondionVentas, condicionVenta } = require('./queries/condicion_ventas.js');
const { listaFormasPago, createFormaPago } = require('./queries/formas_pago');

/**
 * ! ************************************************************ Query type
 */
const QueryType = new GraphQLObjectType({
	name: 'QueryType',
	description: 'Root Query',
	fields: {
		// listas
		listaPaises,
		listaProvincias,
		listaCantones,
		listaDistritos,
		listaBarrios,
		listaCondionVentas,
		listaFormasPago,

		// objectos
		condicionVenta,
	},
});

/**
 * ! ************************************************************ Mutations type
 */
const MutationsType = new GraphQLObjectType({
	name: 'MutationsType',
	description: ' the Root Mutation type',
	fields: {
		createFormaPago,
	},
});

module.exports = new GraphQLSchema({
	query: QueryType,
	mutation: MutationsType,
});
