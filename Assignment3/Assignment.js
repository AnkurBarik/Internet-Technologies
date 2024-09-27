document.getElementById('headerTitle').innerText = 'JavaScript DOM Manipulation';

let descriptions = document.getElementsByClassName('description');
for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].style.color = 'blue';
}

let divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].style.fontStyle = 'italic';
}

document.querySelector('p').classList.add('highlight');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.backgroundColor = '#003900';
});


document.getElementById('submitButton').addEventListener('click', function() {
  
    let inputValue = document.getElementsByName('username')[0].value;
    
  
    document.getElementById('outputArea').innerText = inputValue;
    
  
    document.getElementsByName('username')[0].value = '';
});

const link = document.getElementById("myLink");
document.getElementById('outputArea').textContent="Link URL: "+link.getAttribute("href")
link.setAttribute("href", "https://www.google.com")
link.textContent="Go to example"
link.removeAttribute("href")
document.getElementById('outputArea').textContent="link is disable now"
