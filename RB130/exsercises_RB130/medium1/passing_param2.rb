def compile(array)
  yield(array)
end 

compile(%w(raven finch hawk eagle)) do |raven, finch, *raptors|
  p raven
  p finch 
  p raptors
end