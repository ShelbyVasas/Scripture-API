// Importing express module
import express from "express";
import { bookOfMormonBookFilter, bookOfMormonRandom } from "../controllers/scriptureController.js";
import { allowCORS } from "../middleware/cors.js";
const app = express()
app.use(express.json())

app.use(allowCORS);
app.get('/', bookOfMormonRandom);
app.get('/book/', bookOfMormonBookFilter);

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
