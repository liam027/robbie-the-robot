const { expect } = require('@jest/globals')
const RobotSimulator = require('./RobotSimulator')

describe('Robot Simulator', () => {
  test('turn instructions equal the number of robots', () => {
    let game = new RobotSimulator(2, '^^<<')
    expect(game.getTurnInstructions()).toHaveLength(2)

    game = new RobotSimulator(5, '^^<<*^^<<*')
    expect(game.getTurnInstructions()).toHaveLength(5)
  })
})