arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

new_arr = arr.delete_if { |x| x.start_with?('s', 'w')}

p new_arr