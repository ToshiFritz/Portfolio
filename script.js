document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});