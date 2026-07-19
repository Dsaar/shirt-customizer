import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import imageRoutes from './routes/image.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use(
	cors({
		origin: "https://shirt-customizer-d2w67kv6l-dsaars-projects.vercel.app",
	})
); 

app.use(express.json({ limig: "50mb" }))

app.use("/api/v1/images", imageRoutes);


app.get('/', (req, res) => {
	res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});