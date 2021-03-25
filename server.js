const app = require('./build/app');
const pool = require('./build/utils/pool');

const PORT = process.env.PORT || 7890;

const io = require('socket.io')(
  app.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
  }), {
    cors: {
      origin: true
    }
});

io.on('connection', (socket) => {
  console.log('user has connected');
})

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
