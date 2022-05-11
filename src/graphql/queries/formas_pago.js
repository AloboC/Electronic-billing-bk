const { GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLString } = require('graphql');
const { formaPagoType } = require('../types/forma_pago');
const { StatusType } = require('../types/Status');
const { getAll, set } = require('../../db/queries/formas_pago');

/**
 * Query type
 */
const listaFormasPago = {
	type: new GraphQLList(formaPagoType),
	description: 'Returns a list of formas de pago',
	resolve: async () => {
		try {
			return await getAll();
		} catch (error) {
			throw error;
		}
	},
};

/**
 * Mutations type
 */
const createFormaPago = {
	type: StatusType,
	description: 'Create a new forma de pago',
	args: {
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
	resolve: async (_, { ID_FORMA_PAGO, NOMBRE, CODIGO }) => {
		try {
			if (!ID_FORMA_PAGO) throw new Error('ID_FORMA_PAGO is required');
			if (!NOMBRE) throw new Error('NOMBRE is required');
			if (!CODIGO) throw new Error('CODIGO is required');

			let res = await set({ ID_FORMA_PAGO, NOMBRE, CODIGO });
			return { Msg: res.Msg, ok: true };
		} catch (error) {
			throw error;
		}
	},
};

module.exports = { listaFormasPago, createFormaPago };
