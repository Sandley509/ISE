document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filters button');
    const items = document.querySelectorAll('.items .item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.dataset.filter;
  
        items.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });