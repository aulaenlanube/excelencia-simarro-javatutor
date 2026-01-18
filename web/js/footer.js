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
            
            
        </div>
    </div>
</footer>
`;

const footerPlaceholder = document.getElementById("footer-placeholder");
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
}
