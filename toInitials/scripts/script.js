let str = document.getElementById('value'),
    button = document.getElementById('button'),
    label = document.getElementById('label');

button.addEventListener('click', (e) => {
    e.preventDefault();
    label.textContent = toInitials(str.value);;
})
function toInitials(name) {
    return name
      .split(' ')
      .map(function(el) {
        return el.slice(0, 1).toUpperCase() + '.';
      })
      .join('');
  }