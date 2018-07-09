import express from 'express'
import Docker from 'dockerode'
import redis from 'redis'
import readline from 'readline'
import stream from 'stream'

const app = express()
const docker = new Docker()

const pub = redis.createClient()

for (var i = 0; i < 100; i++) {
	done()
}

function done() {
  docker.createContainer({
    Image: 'ubuntu',
		Cmd: ['/bin/bash', '-c', 'tail -f /var/log/dpkg.log'],
    HostConfig: {
      Privileged: true
    }
  }, function(err, container) {
		console.log(err)
    container.attach({
      stream: true,
      stdout: true,
      stderr: true,
      tty: true
    }, function(err, stream) {
      if (err) return;

			let rl = readline.createInterface({
				input: stream,
				terminal: false
			})

			rl.on('line', (line) => {
				pub.publish('my channel', line)
			})
      // stream.pipe(process.stdout);

      container.start(function(err, data) {
        if (err) return;
      });
    });
  });
}

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.listen(3001, () => {
	console.log('Example app listening.')
})
