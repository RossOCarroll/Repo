advice = "Few things in life are as important as house training your pet dinosaur."

array = advice.split

array.delete_at(6)

array.insert(6, "urgent")

new_advice = array.join(" ")



puts new_advice

advice.gsub!('important', 'urgent')