import app from "./server.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import MoviesDAO from "./dao/moviesDAO.js"



async function main() {
	dotenv.config();

	console.log("MONGODB URI:", process.env.MOVIEREVIEWS_DB_URI);

	const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI);

	const port = process.env.PORT || 8000;

	try {
		await client.connect();
		await MoviesDAO.injectDB(client)

		app.listen(port, () => {
			console.log(`server is running on port: ${port}`);
		});
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
}

main().catch(console.error);