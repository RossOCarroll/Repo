hash = {a:1, b:2, c:3, d:4}

hash[:e] = 5
hash.delete_if { |k, v| v < 3.5 }



p hash