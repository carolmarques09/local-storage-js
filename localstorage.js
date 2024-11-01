const name = 'valor';

localStorage.setItem('valor', name)

console.log(localStorage.getItem('valor'));

localStorage.setItem('pessoa', JSON.stringify({name: 'cliente'}));

console.log(JSON.parse(localStorage.getItem('name')));

const taskList = document.getElementById('taskList');

const tasks = [
    {id: 1, title: 'Tarefa 1', completed: true, priority: 'high'},
    {id: 2, title: 'Tarefa 2', completed: false, priority: 'low'},
    {id: 3, title: 'Tarefa 3', completed: true, priority: 'medium'},
    {id: 4, title: 'Tarefa 4', completed: false, priority: 'low'}
];

function renderTasks(filteredTasks) {
    const taskList = document.getElementById('taskList');
    if (!taskList) {
        console.error("Elemento 'task-list' não encontrado.");
        return;
    }

    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}

function filterTasks(status) {
    const filteredTasks = tasks.filter(task => {
        if (status === 'all') {
            return true;
        } else {
            return task.completed === (status === 'completed');
        }
    });

    renderTasks(filteredTasks);
}

renderTasks(tasks);

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filter-button');
    if (filterButton) {
        let currentStatus = 'all';
 
        filterButton.addEventListener('click', () => {
            currentStatus = currentStatus === 'all' ? 'completed' : currentStatus === 'completed' ? 'pending' : 'all';
            filterTasks(currentStatus);
        });
 
        filterButton.classList.add('active');
    } else {
        alert("Elemento filterButton não encontrado.");
    }
 }); 

function filterTasksByPriority(priority) {
    const filteredTasks = tasks.filter(task => task.priority === priority);
    renderTasks(filteredTasks);
}

document.addEventListener('DOMContentLoaded', () => {
    const filterPriorityButton = document.getElementById('filter-priority-button');
    
    if (filterPriorityButton) {
        let currentPriority = 'all';

        filterPriorityButton.addEventListener('click', () => {
            currentPriority = currentPriority === 'all' ? 'high' 
                           : currentPriority === 'high' ? 'medium' 
                           : currentPriority === 'medium' ? 'low' 
                           : 'all';

            if (currentPriority === 'all') {
                renderTasks(tasks);  // Exibe todas as tarefas
            } else {
                filterTasksByPriority(currentPriority);  // Exibe tarefas da prioridade atual
            }
        });

        filterPriorityButton.classList.add('active');
    } else {
        alert("Elemento filterPriorityButton não encontrado.");
    }
});

// Seleciona o botão pelo ID
const botaoAdicionar = document.getElementById('adicionarTarefa');

// Adiciona um evento de clique ao botão
botaoAdicionar.addEventListener('click', function() {
    // Obtém o valor do campo de entrada da tarefa
    const tarefa = document.getElementById('tarefaInput').value;

    // Verifica se a tarefa não está vazia
    if (tarefa.trim() !== "") {
        // Exibe uma mensagem no console
        console.log(`Tarefa "${tarefa}" foi adicionada!`);
        
        // Limpa o campo de entrada após adicionar a tarefa
        document.getElementById('tarefaInput').value = '';
    } else {
        console.log("Por favor, insira uma tarefa.");
    }
});