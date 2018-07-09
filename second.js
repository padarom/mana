const redis = require('redis')

var sub = redis.createClient()

let i = 0;
sub.on("message", (channel, message) => {
  i++;
  console.log(channel, "(" + i + "):", message)
})

sub.subscribe("my channel")
