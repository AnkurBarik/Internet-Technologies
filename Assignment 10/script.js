$(document).ready(function() {
    const $button = $('#btn');
    const $box = $('#box');
    let isCentered = false;
    let size = 200;

    $button.on('click', function() {
        if (!isCentered) {
            $box.css({
                position: 'relative',
                left: '0%',
                top: '0%',
                transform: 'translate(200px, 200px)',
                backgroundColor: 'blue',
                transition: '1s ease'
            });
            isCentered = true;
        } else {
            size += 20;
            $box.css({
                width: `${size}px`,
                height: `${size}px`,
                transition: 'width 0.3s ease, height 0.3s ease'
            });
        }
    });
});