/*
You are stuck in a multi-storey car parking lot. Your task is to exit the carpark using only the staircases. Exit is always at the bottom right of the ground floor.

Create a function that takes a two-dimensional array where:

Free carparking spaces are represented by a 0
Staircases are represented by a 1
Your starting position is represented by a 2 and can be at any level of the car park.
Exit is always at the bottom right of the ground floor.
You must use the staircases (1) to go down a level.
Each floor will have only one staircase apart from the ground floor which will not have any staircases.
... and returns an array of the quickest route out of the carpark.

arr = [
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]

// Starting from 2, move to left 4 times = "L4"
// Go down from stairs 1 step = "D1"
// Move to right 4 times to exit from right bottom corner = "R4"

result = ["L4", "D1", "R4"]
See the below examples to better understand:

Examples

parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]) ➞ ["L4", "D1", "R4"]
parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
]) ➞ ["R3", "D2", "R1"]

// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corner = "R1"
parking_exit([[0, 0, 0, 0, 2]]) ➞ []
// You are already at right bottom corner.

Input:
  - A 2d array of numbers that represent a parking structure
Output:
  - and array of strings that dictate how to get out pff the parking garage

Requirements:
  - In the 2d array 2 represents your position 1, represents the stair case
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
  position = [0, 3]
  stairs = [0, 0]
  move = position[1] - stairs[1] = -3 + 1 if negative move left if pos move right 
  move = 








*/