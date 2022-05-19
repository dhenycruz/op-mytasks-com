import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (_req: Request, res: Response) => res.send('Home'));

app.listen( console.log(`Escutando na porta ${PORT}`));
