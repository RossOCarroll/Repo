/*

our should coding in function playPacMan. Function accept two parameters:

The fisrt parameter is map, it's a 2D array, like this:

[
["D","D","P"],
["D","W","E"],
["D","D","D"]
]
It's Pac-Man's game map. P is the initial position of Pacman. D is dots(or bean?), Pacman's favorite thing to eat. W is wall. E is empty place.

The second parameter is postion(That's where the P is), it is the starting point of Pac-Man.

Your task is to find a way to eat up all the dots. Returns an array containing all of the path coordinates. Like the example above, it should return:

[[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2]]
Please note:

Each coordinate array contains two numbers, the first one is the row coordinate, and the second is the column coordinate.
Pac-Man only eat dots, the return of the coordinates must be the coordinates of dots, and must eat all the dots.
If you can not find the path to eat all the dots, please return "no solution"

Input:
  - A 2d array of strings that represent a pacman game
Output:
  - a 2d array of coordinaces that dhow the movement pacman must take to eat the dots

Requirements:
  - Each coordinate is an array of 2 numbers row and column
  - Pac man will only eat the dots so 'W' 'E' pac man is not able to move there
  - If no path is avaliable return 'no solution'

Questions:
  - Would the first or ordinate be the position?

Algorithm:
  - å
  - Get all the dots from the map
  - 



*/