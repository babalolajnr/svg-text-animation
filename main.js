const logo = document.querySelectorAll('#logo path');

logo.forEach((path, i) => {
    console.log(`Letter ${i} is ${path.getTotalLength()}`);
    path.style.strokeDasharray = `${path.getTotalLength()}px`;
    path.style.strokeDashoffset = `${path.getTotalLength()}px`;
    path.style.animation = `line-animation ease forwards ${i * 0.3}s`;
});