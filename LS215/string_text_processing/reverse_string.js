function acronym(string) {
  let spacedString = string.replace(/-/g, ' ');

  let acronym = spacedString.split(' ').map(word => {
    return word[0].toUpperCase();
  }).join('')

  console.log(acronym);
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"