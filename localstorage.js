const name = 'valor';

localStorage.setItem('valor', name)

console.log(localStorage.getItem('valor'));

localStorage.setItem('pessoa', JSON.stringify({name: 'cliente'}));

console.log(JSON.parse(localStorage.getItem('name')));

const taskList = document.getElementById('taskList');
