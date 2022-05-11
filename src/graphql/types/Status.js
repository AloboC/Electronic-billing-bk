const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const StatusType = new GraphQLObjectType({
	name: 'StatusType',
	description: 'Tipo de dato para el estado de la consulta',
	fields: {
		Msg: {
			type: GraphQLString,
			description: 'Mensaje de respuesta',
		},
		ok: {
			type: GraphQLBoolean,
			description: 'Estado de la consulta',
		},
	},
});

module.exports = { StatusType };
