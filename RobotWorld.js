const Director = require('./Director')
const display = require('./Display')

class RobotWorld {
  constructor(numRobots = 1, instructions) {
    this.numRobots = numRobots
    this.director = new Director(numRobots, instructions)
    this.deliveries = {}
  }
  execute_turn() {
    // Execute one turn from the remaining instructions
    let robot_delivery = this.director.operate_next_robot()
    if(robot_delivery) {
      this.make_delivery(robot_delivery)
    }
    else {
      display("Robot cannot deliver. Space is already occupied.")
    }
    display("--------------------------")
  }
  execute_all() {
    // Execute all remaining instructions
    console.log(this.director.turnInstruction);
    while(this.director.turnInstruction) {
      this.execute_turn()
    }
  }
  robot_positions() {
    // Display the current position of the robots
    return this.robots.map((robot) => { return robot.position })
  }
  houses_with_packages(packageThreshold = 1) {
    // Return the number of houses that have atleast packageThreshold packages
    // delivered
    let housesOverPackageThreshold = []
    for (let key in this.deliveries) {
      if(this.deliveries[key] >= packageThreshold){
        housesOverPackageThreshold.push(key)
      }
    }
    display(`Houses that have received atleast ${packageThreshold} package${packageThreshold > 1 ? 's' : ''}: [${housesOverPackageThreshold.join('], [')}]`)
    return housesOverPackageThreshold
  }
  deliveries_made() {
    // Return the total number of deliveries made
    let totalDeliveries = 0
    for (let key in this.deliveries) {
      totalDeliveries += this.deliveries[key]
    }
    display(`Total deliveries made: ${totalDeliveries}`)
    return totalDeliveries
  }

  make_delivery(robot) {
    display(`Delivery made to ${robot.position.x},${robot.position.y}`)
    let positionKey = `${robot.position.x},${robot.position.y}`
    if (positionKey in this.deliveries) {
      this.deliveries[positionKey] = this.deliveries[positionKey] + 1
    }
    else {
      this.deliveries[positionKey] = 1
    }
  }
}

let game = new RobotWorld(3, '<^><<^<V<<<V')

game.execute_all()
game.deliveries_made()
game.houses_with_packages(1)
game.houses_with_packages(2)

module.exports = RobotWorld

