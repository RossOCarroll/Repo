munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, info|
  case 
  when info['age'] < 17 then munsters[name]['age_group'] = 'kid'
  when info['age'] > 17 && info['age'] < 65 then munsters[name]['age_group'] = 'adult'
  when info['age'] > 65 then munsters[name]['age_group'] = 'senior'
  end
end

p munsters