import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(helmet());
app.listen(port,() =>{
    console.log(`Server Connected to http://${port}`)
});
