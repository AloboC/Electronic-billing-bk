module.exports = {
	GET_ALL: 'SELECT * FROM formas_pago',
	GET_BY_ID: 'SELECT * FROM formas_pago WHERE ID_FORMA_PAGO=@id',
	GET_BY_NAME: 'SELECT * FROM formas_pago WHERE NOMBRE=@nom',
	INSERT: 'sp_insert_forma_pago',
	DELETE: 'DELETE FROM formas_pago WHERE ID=@id',
};
