def uuid
  identifier = ''
  switcher = [true , false].sample


  loop do
    if switcher
      identifier += rand(0..9).to_s
      identifier += ('a'..'z').to_a.sample
    else
      identifier += ('a'..'z').to_a.sample
      identifier += rand(0..9).to_s
    end

    break if identifier.size == 8 
  end

  identifier += '-'

  loop do
    if switcher
      identifier += rand(0..9).to_s
      identifier += ('a'..'z').to_a.sample
    else
      identifier += ('a'..'z').to_a.sample
      identifier += rand(0..9).to_s
    end

    break if identifier.size == 13
  end

  identifier += '-'
  
  loop do
    if switcher
      identifier += rand(0..9).to_s
      identifier += ('a'..'z').to_a.sample
    else
      identifier += ('a'..'z').to_a.sample
      identifier += rand(0..9).to_s
    end

    break if identifier.size >= 17
  end

  identifier += '-'

  loop do
    if switcher
      identifier += rand(0..9).to_s
      identifier += ('a'..'z').to_a.sample
    else
      identifier += ('a'..'z').to_a.sample
      identifier += rand(0..9).to_s
    end

    break if identifier.size >= 22
  end

  identifier += '-'

  loop do
    if switcher
      identifier += rand(0..9).to_s
      identifier += ('a'..'z').to_a.sample
    else
      identifier += ('a'..'z').to_a.sample
      identifier += rand(0..9).to_s
    end

    break if identifier.size >= 35
  end

  p identifier
  
end

uuid()
