const display = require('./Display')

class Robot {
  constructor(id) {
    this.id = id
    this.position = { x: 0, y: 0 }
  }

  static robot_factory(num){
    let robots = []
    for (let i = 0; i < num; i++) {
      robots.push(new Robot(i))
    }
    return robots
  }
  move(direction) {
    switch (direction) {
      case '^':
        this.position.y++
        display(`${this.name()} moved North. Now at ${this.position.x}, ${this.position.y}.`)
        break
      case '<':
        this.position.x--
        display(`${this.name()} moved West. Now at ${this.position.x}, ${this.position.y}.`)
        break
      case '>':
        this.position.x++
        display(`${this.name()} moved East. Now at ${this.position.x}, ${this.position.y}.`)
        break
      case 'V':
        this.position.x--
        display(`${this.name()} moved South. Now at ${this.position.x}, ${this.position.y}.`)
        break
      default:
        display(`${this.name()} received bad input. ${direction} not a valid direction.`)
        break
    }
  }
  name(){
    return `Robot ${this.id}`
  }
}
module.exports = Robot;
