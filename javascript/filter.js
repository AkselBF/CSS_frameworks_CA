
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.dropdown-item[data-filter]');
  const thumbnails = document.querySelectorAll('.thumbnail');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');
          
          thumbnails.forEach(thumbnail => {
              const thumbnailFilter = thumbnail.getAttribute('data-filter');
              if (filterValue === 'all' || filterValue === thumbnailFilter) {
                  thumbnail.style.display = 'block';
              } else {
                  thumbnail.style.display = 'none';
              }
          });
      });
  });
});