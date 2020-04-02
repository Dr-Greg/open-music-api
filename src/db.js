const mongoose = require('mongoose');

const getDbConnection = async (dbConnectionStringTemplate) => {
	try {
		const dbConnection = await mongoose.connect(
			dbConnectionStringTemplate,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
				dbName: 'music',
			},
			(error) => {
				if (error) {
					console.error(error);
					return process.exit(1);
				}
				console.log('Connected to db.');
			},
		);

		return dbConnection;
	} catch (error) {
		console.error(error);
		return process.exit(1);
	}
};

module.exports = {
	getDbConnection,
};
