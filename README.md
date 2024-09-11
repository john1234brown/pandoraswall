# Pandoras Wall
- **Author: Johnathan Edward Brown https://github.com/Vampeyer**
- **Help From: Jake Thompson https://github.com/Vampeyer** <- Taught me, Helped me study and learn Proper standard defense measures for protecting the public! <- Donate to him to show appreciation for this project! I could careless about donations! I just want to see the world be in a more secured state of mind along with developers!
- **Credits Too: https://js2ts.com/**

- When you want to keep the bad stuff out of your express or koa servers! we got you covered!
- Simple Runtime Detection Middleware which can easily be hooked up to any existing NodeJS Application
- Not Really The Best Way To Secure An Application But When One Wants to Take a Zero Trust Approach Use Our PandorasWall! For warnings This Doesnt Stop Injects of runetime this only prevents the execution of malicious code via the runetime by using a immediate shutdown approach this can obviously be used as a denial of service attack vector!
- Please ensure your application may not pose any runetime backdoors to avoid the potential denial of service This is only a Immediate Failsafe aka Panic button to immediately Stop runetime upon infections!
- This could be used for study purposes on how the runetime gets injected.

# How to install and use


<details>
<summary>## Examples</summary>

## CommonJS Usage
```js
const express = require('express');
const { PandorasWallSource } = require('pandoraswall');
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
```

## Typescript Usage
```ts
import express, { Request, Response } from 'express';
import { PandorasWallSource } from 'pandoraswall'
const app = express();
const port = 3000;
const PandorasWall = new PandorasWallSource(this);
app[PandorasWall.getExpressSymbol()] == true; //Must set it to true! its a safety Boolean check! Don't Worry this Boolean will be protected from tamper in runetime! :D Enjoy!
//Only problems I have to solve for this design pattern is when sometimes the runetime dynamically changes the objects it throws false positives thus server gets restarted as it should!
//But Still Seems kinda sad restricted to that one Oh Welp Though This is the best we have to work with in todays world!
//Must Set ExpressApp to the PandorasWall for it to middleware the app!
PandorasWall.setExpressApp(app);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

</section>
</details>
