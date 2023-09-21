# The PEDAC Process

# P: Understanding the problem
  # - Establish the rules/ define the boundaries of the problem
    # - Asses available information
    # - Restate Explicit requrements
    # - Identify Implicit requrements
  # - Spend enough  time, dont rush this step

  # **General Exsample**

  # Given a string, produce a new string with every other word removed

  #   - Explicit requrements
  #     - Input: string
  #     - Output: new string
  #     - Remove every other word from input string

  # - Questions
  #   - What do we mean by every other word?
  #   - How do we define word in this context?
        # - Words are delimted by space


# E: Exsamples and test cases

# - Can confirm or refute assumtions
# - Help answer questions about implicit requrements
# - Act as assertions which help to codify the rules and boundries

# D: Data Structures

# - Help reason with data logically
# - help interact with data at implementation level
# - Thinking in terms of data structures is part of the problem solving Process
# - Data structure closely linked to Algorithm
#   -Set of steps from input to Output
#     - involves structuring data in a certin way


# A: Algorithms

# - A logical sequence  of steps for acomplishing a task or objective
#   - Closley linked to data structures
#   - Series of steps to structure data to produce the requred Output
# - Stay abstract/ high level
#   - Avoid implmenmtation detail
#   - Dont worry about efficency for now

# C: Implementing a solution in code

  # - Translating our solution algorithm to code
  # - think about algorithm in context of programing language
  #   - Language features and contraints
  #   - characteristics and data structures
  #   - Built in functions/ Methods
  # - Creat any test cases if nessessary
  # - Code with intent

## Sum Even Number Rows

# Imagine a sequence of consecutive even integers beginning with 2. The integers 
# are grouped in rows, with the first row contianing one integer, the second row two integers, 
# the third row three integers, and so on. Given an ineger representing the number of a particular
# row, return an integer representing the sum of all the integers in that row.

# - sequence of even integers
# - sequence begins with 2
# - integers are consecutive
# - Sequence is grouped in to rows
# - Each row incremently larger: 1, 2, 3
# - Row 'number 1' equals the number of elements in the row
#   - Row 1 has 1 element, row 2 has 2 elements..
# - Input a single integer
#   -Identifies a 'row', which is a subset of a sequence of integers
# - Output : a single integer
#   - the sum of the integers in the row identified by the input integer

# - Sequence:
# 2 , 4, 6, 8, 10, 12, 14, 16. 18,...

# 2
# 4 , 6
# 8, 10 , 12

# - How do we create the structure?

# ** Exsamples **

# row number: 1 --> sum of integers in row: 2
# row number: 2 --> sum of integers in row: 10
# row number: 4 --> sum of integers in row: 68


# 2 -- 2
# 4 , 6 -- 10
# 8, 10 , 12 -- 30

# ** Data Structure **

# - Overall structure represents a sequence
# - Individual rows within overall structure
# - Individual rows in a set order in context sequence
# - Individual rows contian integers
# - Can assume that integers are in a set order in the context of the sequence

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20]
  ...
]


# **Algorithm**

# 1. Create an empty 'rows' array to contian all the rows
# 2. Create a 'row' array and add it to the overall 'rows' array
# 3. Repeat step 2 untill all the nessessary roew have been created
    # - Rows have been created when the lengths of the rows array is equal to the input integer
# 4. Sum the final row
# 5. Return the sum 

# *Problem: Create a row*
# - Row is an array
# - Array contians integers
# - integers are consequtive even numbers
# - Integers in each row form part of an overall larger sequence
# - Rows are diffent lengths
# - Input : the information needed to creat the Output
#   - The starting integer
#   - length of the row
# - Output: the row itself: [8, 10, 12]


# Calculating the start integer:
# Rule: first integer of row == Last integer of the procedding row + 2

# Algorithm
#  -  get the last integer of the preceding row
#  -  add 2 the integer

# Exsamples:
# start: 2, length : 1 ---> [2]
# start: 4, length : 2 ---> [4, 6]
# start: 8, length : 3 ---> [8 , 10 ,12]

# Data structure :
#   - Array of integers

# Algorithm :
# 1. Create an empty array of integers
# 2. Add the starting integer
# 3. Increment the startinf integer by 2 to get the next integer
# 4. Repeat steps 2 & 3 until the array has reached the coreect length
# 5. Return thre row array


## Final thoughs

# - Not a completly linear process
# - Move back and foward between the steps
# - Switch from implimentation and problem solving mode when nessessary
# - Domnt try to problem solve at the coding level

