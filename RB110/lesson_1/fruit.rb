produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}


def select_fruit(hash)
  hash.select {|key, value| value == 'Fruit' }
end

def select_fruit2(hash)
  fruit_hash = {}
  produce_keys = hash.keys
  counter = 0

  loop do
    break if counter == produce_keys.size
    current_key = produce_keys[counter]
    current_value = hash[current_key]

      if current_value == 'Fruit'
        fruit_hash[current_key] = current_value
      end
    counter += 1
  end

  fruit_hash


end

p select_fruit2(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}

