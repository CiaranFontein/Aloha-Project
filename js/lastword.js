$(document).ready(function () {
    $('h1').each(function (index, element) {
        var heading = $(element);
        var word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/); // split on spaces
        last_word = word_array.pop();             // pop the last word
        first_part = word_array.join(' ');        // rejoin the first words together
        
        heading.html([first_part, " <span class='last-word'>", last_word, '</span>'].join(''));
    });
});