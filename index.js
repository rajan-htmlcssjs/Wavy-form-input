const labels = document.querySelectorAll(".form-container label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (txt, idx) =>
        `<span style="transition-delay:${idx * 50}ms"> ${txt}</span>`
    )
    .join('');
});
