import express, { Request, Response } from 'express';
import { PandorasWallSource } from './index'
const app = express();
const port = 3000;
const PandorasWall = new PandorasWallSource(this);
PandorasWall.setExpressApp(app, PandorasWall.getExpressString(), Symbol(PandorasWall.getExpressString())); // We Require 3 Because 3 is better then 1... Just common sense!
//Only problems I have to solve for this design pattern is when sometimes the runetime dynamically changes the objects it throws false positives thus server gets restarted as it should!
//But Still Seems kinda sad restricted to that one Oh Welp Though This is the best we have to work with in todays world!
//Must Set ExpressApp to the PandorasWall for it to middleware the app!
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});