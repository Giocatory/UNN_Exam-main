// Получаем все элементы details
const details = document.querySelectorAll('details');

// Проходимся по каждому элементу
details.forEach(item => {

  // На каждый элемент вешаем слушатель события клика
  item.addEventListener('click', (e) => {

    // Сбрасываем стандартное действие при клике
    e.preventDefault();
    
    // Находим открытый элемент
    const openItem = document.querySelector('details[open]');
    
    // Если есть открытый элемент удаляем ему атрибут open
    if (openItem) openItem.open = false;

    // Если открытый элемент не является тем, на который мы нажали, то нажатому элементу добавляем атрибут open
    if (openItem !== item) item.open = true 
  })
})