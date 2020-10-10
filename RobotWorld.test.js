const { expect } = require('@jest/globals')
const RobotWorld = require('./RobotWorld')

describe('Robot World', () => {
  test('turn instructions equal the number of robots', () => {
    let game = new RobotWorld(2, '^^<<')
    expect(game.getTurnInstructions()).toHaveLength(2)

    game = new RobotWorld(5, '^^<<*^^<<*')
    expect(game.getTurnInstructions()).toHaveLength(5)
  })
})