function display(message) {
  if(!(process.env === 'test')){
    console.log(message)
  }
}
module.exports = display;
