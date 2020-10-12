# Robot Delivery Simulator

A toy app simulating robots making deliveries, written in Javascript (NodeJS).
I've included a few tests using Jest.

## Install and demo instructions
You will need NodeJS installed on your system.

Clone the repo:
```
$ git clone git@github.com:liam027/robot-simulator.git
```

Run a simulation by specifying the number of robots and their instructions:
```
$ node RobotSimulator 2 '^><>V>>>^><>V>>>'
```

If you'd like to run the tests, using Jest:
```
$ npm install
$ npm test
```

## Notes

The program is split into a few modules:
- RobotSimulator, governs the simulation
- Director, handles the robots and sends them instructions
- Robot, contains the robot information and defines their actions

The RobotSimulator creates a Director that takes the next instruction and sends
it to the next robot. Once the robot has performed its action the Director checks
to see if there are any other robots in the same space and if not RobotSimulator
records the delivery.

## Requirements

- The universe is a discrete grid of houses whose origin is (0,0) and expands infinitely in every direction.
- All robots start at origin.

Parameters
 - The number of robots, defaulting to 1
 - The movement sequence, given as a string
MVP
- create a simulation
  - class RobotSimulator
- execute a single turn
  - execute_turn() method
- query the simulation for the current position of the robots
  - robot_positions() method
- query the simulation for the number of houses with atleast n presents
  - houses_with_packages() method
- query the simulation for the total number of packages delivered
  - deliveries_made() method
- run the entire simulation through the full sequence of moves
  - execute_all() method
