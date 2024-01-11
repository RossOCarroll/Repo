=begin 
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. 
On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will 
tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie

explicit requirments:
  -return a string with the battle result: good wins, evil wins, tie
  -worth of each side will not exceed 32 bit integer

  Questions:
    -Will the good input always have 6 players and evil always have 7?

Test cases / exsamples:
  good_vs_evil('1 0 0 0 0 0', '1 0 0 0 0 0 0') == 'Battle Result: No victor on this battle field', 'Should be a tie' 
  good_vs_evil('0 0 0 0 0 10', '0 1 1 1 1 0 0') =='Battle Result: Good triumphs over Evil', 'Good should triumph' 
  good_vs_evil('0 0 0 0 0 10', '0 1 1 1 1 0 0') == 'Battle Result: Good triumphs over Evil', 'Good should triumph' 

Data struture:
  strings
  Assiting:
  -integers 
  -arrays

algorithm:
  -Set a good_army array to the points given
  -Set a evil_army array with the points given
  -turn the input good string into an array of integers
  -turn the input evil string into an array of integers
  -Set a good points variable to 0
  -set a evil points variable to 0
  -iterate over the good and evil array
    -times each element in the array with corisponding points array
    -adding to good or evil points
  -return result

=end

GOOD_POINTS = [1, 2, 3, 3, 4, 10]
EVIL_POINTS = [1, 2, 2, 2, 3, 5, 10]

def array_of_integers(string)
  string.split(' ').map {|num| num.to_i }
end

def calculate_good_worth(array)
  index = 0
  good_worth = 0
  array.each do |num| 
    good_worth += GOOD_POINTS[index] * num
    index += 1
  end
  good_worth
end

def calculate_evil_worth(array)
  index = 0
  evil_worth = 0
  array.each do |num| 
    evil_worth += EVIL_POINTS[index] * num
    index += 1
  end
  evil_worth
end


def good_vs_evil(good, evil)
  good_army = array_of_integers(good)
  evil_army = array_of_integers(evil)
  good_worth = calculate_good_worth(good_army)
  evil_worth = calculate_evil_worth(evil_army)

  if good_worth > evil_worth
    "Battle Result: Good triumphs over Evil"
  elsif good_worth < evil_worth
    "Battle Result: Evil eradicates all trace of Good"
  elsif good_worth == evil_worth
    "Battle Result: No victor on this battle field"
  end
end


p good_vs_evil('1 0 0 0 0 0', '1 0 0 0 0 0 0') #== 'Battle Result: No victor on this battle field', 'Should be a tie' 
p good_vs_evil('0 0 0 0 0 10', '0 1 1 1 1 0 0') #=='Battle Result: Good triumphs over Evil', 'Good should triumph' 
p good_vs_evil('0 0 0 0 0 10', '0 1 1 1 1 0 0') #== 'Battle Result: Good triumphs over Evil', 'Good should triumph' 


