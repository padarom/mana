module.exports = {
  parse (line) {
    try {
      const data = JSON.parse(line)
      return data
    } catch (error) {
      return { 'error': 'Docker Response is not valid JSON' }
    }
  }
}
