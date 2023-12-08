=begin

You have a bank of switches before you, numbered from 1 to n. Each switch is connected to 
exactly one light that is initially off. You walk down the row of switches and toggle every 
one of them. You go back to the beginning, and on this second pass, you toggle switches 
2, 4, 6, and so on. On the third pass, you go back again to the beginning and toggle 
switches 3, 6, 9, and so on. You repeat this process and keep going until you have been 
through n repetitions.

Write a method that takes one argument, the total number of switches, and returns an Array 
that identifies which lights are on after n repetitions.

Input
  -One argument representing a number of switches

Output:
  - An array representing the number of swites that are on

Explicit requirmemnts:
  -Return an array that represent the number of switches

Implicit:
  - there can be any number of lights

Questions?
  -Will the 'n' number of lights always be positive?
  -Will the on light always be represented as integers?

Test Cases // Exsamples

Example with n = 5 lights:

round 1: every light is turned on
round 2: lights 2 and 4 are now off; 1, 3, 5 are on
round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
The result is that 2 lights are left on, lights 1 and 4. The return value is [1, 4].

With 10 lights, 3 lights are left on: lights 1, 4, and 9. The return value is [1, 4, 9].

Data structure:
  -Arrays
  -Integers

Algorithm:
  -Save an index starting at 1
  -Create and array starting from 1 up the the input number
  -looping over the array the amount of rounds as the input number (rounds)
    -delete element at index
    -increment index
  -return array

def light_switches(lights)
  light_switches = {}
  on_off =  []
  index = 0
  counter = 0

  1.upto(lights) {|num| light_switches[num] = 'on'}
  1.upto(lights) {|num| on_off << num }

  loop  do
    index += 1
    if light_switches.has_key?(on_off[index])
      light_switches[on_off[index]] = "off" 
    end

    

    index += 2
    counter += 1
    break if counter == lights
    p light_switches
  end

  light_switches
  on_off
end

 light_switches(5)
#p light_switches(10)

=end

def initialize_lights(lights)
  light_switches = {}
  1.upto(lights) {|num| light_switches[num] = 'off'}
  light_switches
end

def on_lights(lights)
  lights.select {|_position, state| state == "on"}.keys
end

def toggle_ever_nth_light!(lights, nth)
  lights.each do |position, state|
    if position % nth == 0
      lights[position] = (state == "off") ? "on" : "off"
    end
  end
end

def toggle_lights(number_of_lights)
  lights = initialize_lights(number_of_lights)
  1.upto(lights.size) do |iteration_number|
    toggle_ever_nth_light!(lights, iteration_number)
  end
  on_lights(lights)
end


p toggle_lights(1000)

