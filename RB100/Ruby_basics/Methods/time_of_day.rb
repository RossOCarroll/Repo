def time_of_day(day)
  if day
    puts "Its daytime!"
  else   
    puts "Its nightime!"
  end
end

daylight = [true, false].sample
time_of_day(daylight)