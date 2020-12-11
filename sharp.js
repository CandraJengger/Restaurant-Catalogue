const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, 'src/public/images/heros')
const destination = path.resolve(__dirname, 'src/public/images/heros')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

fs.readdirSync(target).forEach(img => {
  sharp(`${target}/${img}`)
    .resize(1200)
    .toFile(path.resolve(__dirname, `${destination}/${img.split('.')
    .slice(0, -1)
    .join('.')}-large.jpg`))
  sharp(`${target}/${img}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destination}/${img.split('.')
    .slice(0, -1)
    .join('.')}-small.jpg`))
})