WELCOME =
{'english'=>'Welcome',
'czech'=>'Vitejte',
'danish'=>'Velkomst',
'dutch'=>'Welkom',
'estonian'=>'Tere tulemast',
'finnish'=>'Tervetuloa',
'flemish'=>'Welgekomen',
'french'=>'Bienvenue',
'german'=>'Willkommen',
'irish'=>'Failte',
'italian'=>'Benvenuto',
'latvian'=>'Gaidits',
'lithuanian'=>'Laukiamas',
'polish'=>'Witamy',
'spanish'=>'Bienvenido',
'swedish'=>'Valkommen',
'welsh'=>'Croeso'}




def greet(language)
  if language == 'IP_ADDRESS_INVALID' || language == 'IP_ADDRESS_NOT_FOUND' || language == 'IP_ADDRESS_REQUIRED'
    return "Welcome, It didn't work out this time, keep trying!"
  else
    WELCOME.fetch(language)
  end
end

putsgreet('IP_ADDRESS_INVALID')