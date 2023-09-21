munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, info|

  case info['age']
  when (1..17)
    info.merge!("age_group" => "kid")
  when (18..64)
    info.merge!("age_group" => "adult")
  else
    info.merge!("age_group" => "senior")
  end


end

p munsters