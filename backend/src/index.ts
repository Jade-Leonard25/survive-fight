import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Health Check Route (Essential for scaling/Load Balancers)
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Dungeon Save Route Example
app.post('/api/dungeon/end', (req: Request, res: Response) => {
    // Your logic for saving loot like HelixVine or VenomVein
    res.json({ message: "Dungeon data synced successfully." });
});

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});