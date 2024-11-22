$(document).ready(function() {
    const $textElement = $('#text');
    const $toggleButton = $('#toggleButton');
    const $hideButton = $('#hideButton');
    const $showButton = $('#showButton');

    $toggleButton.on('click', function() {
        $textElement.toggle();
    });

    $hideButton.on('click', function() {
        $textElement.hide();
    });

    $showButton.on('click', function() {
        $textElement.show();
    });
});