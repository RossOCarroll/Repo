VALID_CHOICES = %w(rock paper scissors spock lizard)
ABBR = { r: 'rock',
         p: 'paper',
         sc: 'sciossors',
         l: 'lizard',
         sp: 'spock' }



def prompt(message)
  puts("=> #{message}")
end

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper') ||
    (first == 'rock' && second == 'lizard') ||
    (first == 'lizard' && second == 'spock') ||
    (first == 'spock' && second == 'scissors') ||
    (first == 'scissors' && second == 'lizard') ||
    (first == 'lizard' && second == 'paper') ||
    (first == 'paper' && second == 'spock') ||
    (first == 'spock' && second == 'rock')
end


def display_results(player, computer)
  if win?(player, computer)
    prompt("You won!")
  elsif win?(computer, player)
    prompt("Computer won!")
  else
    prompt("Its a tie!")
  end
end

loop do
  choice = ''
  loop do
    prompt("Choose one: rock(r), paper(p), scissors(sc), lizard(l) or spock(sp)")
    choice = gets.chomp.to_sym

    if ABBR.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = ABBR.keys.sample

  prompt("You chose: #{choice}; Computer's chose #{computer_choice}")

  display_results(choice, computer_choice)

  prompt("Do you want to play again? y/n")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for playing, Goodbye!")
