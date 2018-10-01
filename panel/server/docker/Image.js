const Docker = require('dockerode')
const ResponseParser = require('./Response')
const readline = require('readline')
const path = require('path')

module.exports = class {
  constructor (name) {
    this.name = name
  }

  async boot () {
    let docker = new Docker()
    let images = await docker.listImages()

    for (let image of images) {
      if (image.Labels && image.Labels['mana.game'] === this.name) return this._startContainer()
    }

    return this._createImage().then(() => {
      return this._startContainer()
    })
  }

  async _startContainer () {
    // Heyho
  }

  async _createImage () {
    let docker = new Docker()

    return new Promise(async (resolve, reject) => {
      let stream = await docker.buildImage({
        context: path.resolve(__dirname, '../../docker/' + this.name),
        src: ['Dockerfile', 'download.sh'] // Read all files in directory!
      }, { t: this.name })

      let rl = readline.createInterface({ input: stream, terminal: false })
      rl.on('line', (line) => {
        console.log(ResponseParser.parse(line))
      })

      rl.on('end', resolve)
    })
  }
}
