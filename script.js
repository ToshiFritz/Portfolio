document.addEventListener('DOMContentLoaded', function () {
    // Dark mode functionality
    const toggleBtn = document.getElementById('dark-mode-toggle');
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
    
    // Editable content functionality
    const aboutEditBtn = document.getElementById('about-edit-btn');
    const aboutContent = document.getElementById('about-text-content');
    
    if (aboutEditBtn && aboutContent) {
        aboutEditBtn.addEventListener('click', function() {
            // Toggle contenteditable
            if (aboutContent.getAttribute('contenteditable') === 'true') {
                // Save mode - turn off editing
                aboutContent.setAttribute('contenteditable', 'false');
                aboutContent.classList.remove('editing');
                aboutEditBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
                
                // No longer saving to localStorage
                // Changes will be lost on refresh
            } else {
                // Edit mode - turn on editing
                aboutContent.setAttribute('contenteditable', 'true');
                aboutContent.classList.add('editing');
                aboutContent.focus();
                aboutEditBtn.innerHTML = '<i class="fas fa-save"></i> Save';
            }
        });
        
        // Load saved content if available - offline functionality removed
        /*
        const savedContent = localStorage.getItem('aboutContent');
        if (savedContent) {
            aboutContent.innerHTML = savedContent;
        } */
    }
});