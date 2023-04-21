def calculate_bonus(salary, yes_or_no)
  if yes_or_no
    puts salary / 2
  else
    puts 0
  end
end

calculate_bonus(100000, true)