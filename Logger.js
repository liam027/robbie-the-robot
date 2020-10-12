function log(message) {
  if(!(process.env === 'test')){
    console.log(message)
  }
}
module.exports = log;
