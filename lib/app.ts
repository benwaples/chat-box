import express, { Request, Response, NextFunction } from 'express'
const app = express();
const io = require('socket.io')(app)


app.use(express.json());

// example route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(require('./utils/intro'))
})

io.on('connection', (socket: WebSocket) => {
  console.log('a user has connected');
  
})

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
