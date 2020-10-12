const { expect } = require('@jest/globals')
const RobotSimulator = require('./RobotSimulator')

describe('Robot Simulator', () => {

  test('a house can receive multiple packages', () => {
    let sim = new RobotSimulator(1, '^<V>^<V>')
    sim.execute_all()

    expect(sim.deliveries_made()).toBe(8)
  })

  test('execute_turn()', () => {
    let sim = new RobotSimulator(1, '^<V>')
    sim.execute_turn()
    sim.execute_turn()
    sim.execute_turn()
    sim.execute_turn()

    expect(sim.deliveries_made()).toBe(4)
  })

  test('execute_all()', () => {
    let sim = new RobotSimulator(1, '^<V>')
    sim.execute_all()

    expect(sim.deliveries_made()).toBe(4)
  })

  test('robot_positions()', () => {
    let sim = new RobotSimulator(2, '^><>V>>>^><>V>>>')
    sim.execute_all()

    expect(sim.robot_positions()[0]).toEqual([0,0])
    expect(sim.robot_positions()[1]).toEqual([8,0])
  })

  describe('houses_with_packages()', () => {
    test('basic test', () => {
      let sim = new RobotSimulator(2, '^V<VVV>V^V<VVV>')
      sim.execute_all()

      expect(sim.houses_with_packages(2)).toBe(4)
    })
    test('defaults to 1', () => {
      let sim = new RobotSimulator(2, '^><>V>>>^><>V>>>')
      sim.execute_all()

      expect(sim.houses_with_packages(1)).toBe(12)
    })
  })

  test('bad input does not interrupt simulation)', () => {
    let sim = new RobotSimulator(2, '^><>V>>>^><>V%>>')
    sim.execute_all()

    expect(sim.houses_with_packages(1)).toBe(11)
    expect(sim.robot_positions()[1]).toEqual([7,0])
  })
})