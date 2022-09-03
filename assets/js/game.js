window.addEventListener('load', () => {
  const boundaries = document.querySelectorAll('.boundary');

  boundaries.forEach((boundary) => {
    boundary.addEventListener('mouseover', () => {
      boundaries.forEach((boundary) => {
        boundary.style.backgroundColor = '#ea0505';
      });
    });
  });
});
