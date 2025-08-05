/*
Standard Competition Ranking
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples

competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes

The highest score has a rank value of 1.

Input:
  - An object that has a list of names and their current score
  - One of those names
Output:
  - Their competition ranking

Requirments:
  - Competion ranking is were starting from 1 and increasing unless 2 scores are the same then recieve the same
    ranking nad the next score is skipped
  - Add to the input object a ranking

Algorithm:
  - Create a rankedScores object
  - create a ranking and assign to 1
  - Iterate over the input object
    - If the previous score is equal to the current score 
      - add the ranking 






*/