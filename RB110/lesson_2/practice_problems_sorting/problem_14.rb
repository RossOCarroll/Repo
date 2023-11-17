hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

new_array = 
  hsh.each_with_object([]) do |(fruit, info) , array|
    if info[:type] == 'fruit'
      array << info[:colors].map {|color| color.capitalize}
    elsif info[:type] == 'vegetable'
      array << info[:size].upcase
    end

  end

  p new_array