const log = require('./Logger')
const Robot = require('./Robot')

class Director {
  constructor(numRobots, instructions) {
    this.turnInstruction = instructions.substring(0, 1)
    this.instructions = instructions.slice(1)
    this.robots = Robot.robot_factory(numRobots)
    this.robotToOperateIndex = 0
    this.robotToOperate = this.robots[0]
  }

  operate_next_robot() {
    if(this.turnInstruction) {
      log(`Turn start for ${this.robotToOperate.name()}`)
      log(`Instructions this turn: ${this.turnInstruction}`)
      let deliveryStatus = this.execute_instruction()
      this.set_next_turn_instruction()
      return deliveryStatus
    }
    else {
      log('---- Simulation over. No more instructions available. ----')
    }
  }

  set_next_turn_instruction() {
    this.turnInstruction = this.instructions.substring(0, 1)
    this.instructions = this.instructions.slice(1)
  }

  execute_instruction() {
    this.robotToOperate.move(this.turnInstruction)
    let delivery_status = this.attempt_delivery()
    this.nextRobot()
    return delivery_status
  }

  nextRobot() {
    this.robotToOperateIndex = (this.robotToOperateIndex + 1) % this.robots.length
    this.robotToOperate = this.robots[this.robotToOperateIndex]
  }

  attempt_delivery() {
    // Check if there are any other robots in the current location that would
    // prevent a delivery
    let operatingRobot = this.robotToOperate
    let location = operatingRobot.position

    let otherOccupants = this.robots.filter((robot) => {
      return location.x === robot.position.x && location.y === robot.position.y && operatingRobot.id !== robot.id
    })

    return otherOccupants.length < 1 ? operatingRobot : false
  }
}

module.exports = Director;
