const { GraphQLList, GraphQLInt } = require('graphql');
const { condicionVentaType } = require('../types/condicion_venta');
const { getAll, getById } = require('../../db/queries/condicion_venta');

/**
 * Obtiene todos los registros de la tabla condicion_venta
 */
const listaCondionVentas = {
	type: new GraphQLList(condicionVentaType),
	description: 'Returns a list of condiciones de venta',
	resolve: async () => {
		try {
			return await getAll();
		} catch (error) {
			throw error;
		}
	},
};

/**
 * Obtiene una condicion de venta por su id
 */
const condicionVenta = {
	type: condicionVentaType,
	description: 'Returns a condicion de venta',
	args: {
		id: {
			type: GraphQLInt,
			description: 'The id of the condicion de venta',
		},
	},
	resolve: async (_, { id }) => {
		try {
			if (!id) throw new Error('id is required');
			return await getById(id);
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { condicionVenta, listaCondionVentas };
