// Importing express module
import express from "express";
import { bookOfMormonRandom } from "../controllers/scriptureController.js";
import { allowCORS } from "../middleware/cors.js";
const app = express()
app.use(express.json())

app.use(allowCORS);
app.get('/', bookOfMormonRandom);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
