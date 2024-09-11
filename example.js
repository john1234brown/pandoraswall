const express = require('express');
const { PandorasWallSource } = require('./index.js');
const app = express();
const port = 3000;
const PandorasWall = new PandorasWallSource(this);
//Must set the security symbol on the express app to help protect it in runetime! This Prevents Overriding the middleware on the express app Potentially!
console.log(PandorasWall.getExpressSymbol());
app[PandorasWall.getExpressSymbol()] == true; //Must set it to true! its a safety Boolean check! Don't Worry this Boolean will be protected from tamper in runetime! :D Enjoy!
//Only problems I have to solve for this design pattern is when sometimes the runetime dynamically changes the objects it throws false positives thus server gets restarted as it should!
//But Still Seems kinda sad restricted to that one Oh Welp Though This is the best we have to work with in todays world!
//Must Set ExpressApp to the PandorasWall for it to middleware the app!
PandorasWall.setExpressApp(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});