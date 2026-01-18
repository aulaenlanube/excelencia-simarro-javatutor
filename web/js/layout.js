document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Script Loader for Header and Footer
    // This allows keeping them in separate files as requested, while working on file:// protocol

    function loadComponent(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Load in order: Header -> Footer
    loadComponent('js/header.js')
        .then(() => loadComponent('js/footer.js'))
        .catch(err => console.error("Error loading components:", err));
});
