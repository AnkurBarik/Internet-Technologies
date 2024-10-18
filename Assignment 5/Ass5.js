function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function slideElementX(id) {
    const element = document.getElementById(id);
    if (element.style.transform === 'translateX(100px)') {
        element.style.transform = 'translateX(0)';
    } else {
        element.style.transform = 'translateX(100px)';
    }
    element.style.transition = 'transform 1s ease-in-out';
}

function slideElementY(id) {
    const element = document.getElementById(id);
    if (element.style.transform === 'translateY(-100px)') {
        element.style.transform = 'translateY(0)';
    } else {
        element.style.transform = 'translateY(-100px)';
    }
    element.style.transition = 'transform 1s ease-in-out';
}

function fadeElement(id) {
    const element = document.getElementById(id);
    if (element.style.opacity === '0') {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
    element.style.transition = 'opacity 1s ease';
}

function deleteElement(id) {
    const element = document.getElementById(id);
    element.style.transition = 'opacity 1s ease';
    element.style.opacity = '0';
    setTimeout(() => { element.remove(); }, 500);
}