document.getElementById('add-button').addEventListener('click', addItem);
document.getElementById('item-input').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addItem();
    }
});

function addItem(){
    const itemInput = document.getElementById('item-input');
    const itemValue = itemInput.value.trim();

    if (itemValue === '') return;

    const li =document.createElement('li');
    const span = document.createElement('span')
    span.textContent = itemValue;
    li.appendChild(span)

    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton'; // Añadir id al botón
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        li.remove();
    });

li.appendChild(deleteButton);
document.getElementById('grocery-list').appendChild(li);

itemInput.value = '';
}
