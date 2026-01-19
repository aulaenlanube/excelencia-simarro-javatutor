const FOOTER_HTML = `
<footer class="bg-white border-t border-slate-200 py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div class="space-y-6">
            <div class="flex items-center justify-center space-x-4">
                <img src="logo-simarro.webp" alt="Logo Simarro"
                    class="h-16 opacity-90 hover:grayscale-0 transition-all">
                <span class="text-xl font-bold text-slate-500">IES Dr. Lluís Simarro</span>
            </div>
            <div class="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto"></div>
            
            <div class="space-y-4">
                <a href="https://github.com/aulaenlanube/excelencia-simarro-javatutor" target="_blank" 
                   class="inline-flex items-center space-x-2 text-slate-500 hover:text-indigo-600 transition-colors group text-sm font-medium">
                    <i class="fab fa-github text-lg group-hover:scale-110 transition-transform"></i>
                    <span>Repositorio en GitHub</span>
                </a>
                
                <p class="text-slate-400 text-xs mt-4">
                    &copy; 2026 Aula en la Nube - IES Dr. Lluís Simarro. <br class="sm:hidden"> 
                    Todos los derechos reservados.
                </p>
            </div>
        </div>
    </div>
</footer>
`;

const footerPlaceholder = document.getElementById("footer-placeholder");
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
}
