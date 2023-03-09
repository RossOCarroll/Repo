stoplight = ['green', 'yellow', 'red'].sample

light = case stoplight
        when 'green'  then puts 'Go!'
        when 'yellow' then puts 'Slow down!'
        else               puts 'Stop!'
        end
puts light