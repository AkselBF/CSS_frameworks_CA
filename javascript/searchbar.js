
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector('.search_bar');
  const thumbnails = document.querySelectorAll('.thumbnail');

  searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();

      thumbnails.forEach(thumbnail => {
          const thumbnailTitle = thumbnail.querySelector('.thumbnail_title').textContent.toLowerCase();
          const thumbnailText = thumbnail.querySelector('.thumbnail_text').textContent.toLowerCase();

          if (thumbnailTitle.includes(searchTerm) || thumbnailText.includes(searchTerm)) {
              thumbnail.style.display = 'block';
          } else {
              thumbnail.style.display = 'none';
          }
      });
  });
});