const HEADER_HTML = `
<nav class="bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex items-center space-x-4">
                <img src="logo-simarro.webp" alt="Logo Simarro" class="h-[72px] w-auto">
                <div class="h-8 w-px bg-slate-200"></div>
                <div>
                    <span class="block text-xl font-extrabold tracking-tight text-slate-900">JavaTutor <span
                            class="text-indigo-600 border-b-2 border-indigo-600/20">IA</span></span>
                    <span class="text-[10px] uppercase tracking-wider font-bold text-slate-400">CENTRO DE EXCELENCIA NACIONAL EN IA Y BD</span>
                </div>
            </div>

            <div class="hidden lg:flex items-center space-x-8 text-sm font-semibold" id="desktop-menu">
                <a href="index.html" class="nav-link px-2 py-1">Proyecto</a>
                <a href="dataset.html" class="nav-link px-2 py-1">Dataset</a>
                <a href="guide.html" class="nav-link px-2 py-1">Guía Técnica</a>
                <a href="infra.html" class="nav-link px-2 py-1">Hardware</a>
                <a href="roadmap.html" class="nav-link px-2 py-1">Hoja de Ruta</a>
                <div class="h-6 w-px bg-slate-200 mx-2"></div>
                <a href="https://github.com/aulaenlanube/excelencia-simarro-javatutor" target="_blank" class="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-xl github-btn-hover group">
                    <i class="fab fa-github text-lg"></i>
                    <span>GitHub</span>
                </a>
            </div>

            <div class="flex items-center lg:hidden">
                <button id="mobile-menu-btn" class="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
                    <i class="fas fa-bars text-2xl transition-transform duration-300" id="menu-icon"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu (Animated) -->
    <div id="mobile-menu" class="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-h-0 opacity-0">
        <div class="px-6 py-6 space-y-3">
            <a href="index.html" class="flex items-center space-x-4 p-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300">
                    <i class="fas fa-rocket"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-base">Proyecto</span>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Visión General</span>
                </div>
            </a>

            <a href="dataset.html" class="flex items-center space-x-4 p-3 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-300">
                    <i class="fas fa-database"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-base">Dataset</span>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Recursos multimodal</span>
                </div>
            </a>

            <a href="guide.html" class="flex items-center space-x-4 p-3 rounded-xl text-slate-600 hover:bg-amber-50 hover:text-amber-600 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-amber-100 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300">
                    <i class="fas fa-book-open"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-base">Guía Técnica</span>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Documentación</span>
                </div>
            </a>

            <a href="infra.html" class="flex items-center space-x-4 p-3 rounded-xl text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-cyan-100 group-hover:text-cyan-600 group-hover:scale-110 transition-all duration-300">
                    <i class="fas fa-microchip"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-base">Hardware</span>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Infraestructura</span>
                </div>
            </a>

            <a href="roadmap.html" class="flex items-center space-x-4 p-3 rounded-xl text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group">
                <div class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300">
                    <i class="fas fa-map-marked-alt"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-base">Hoja de Ruta</span>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Q4 2026</span>
                </div>
            </a>

            <div class="pt-4 border-t border-slate-100">
                <a href="https://github.com/aulaenlanube/excelencia-simarro-javatutor" target="_blank" class="flex items-center justify-center space-x-3 p-4 rounded-2xl bg-slate-900 text-white github-btn-hover shadow-lg shadow-slate-200">
                    <i class="fab fa-github text-xl"></i>
                    <span class="font-bold">Ver en GitHub</span>
                </a>
            </div>
        </div>
    </div>
</nav>
`;

// Insert header
const headerPlaceholder = document.getElementById("header-placeholder");
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = HEADER_HTML;
    // Layout classes handled in styles.css for reliability


    // Active link highlighting
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#desktop-menu .nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("text-indigo-600", "border-b-2", "border-indigo-600");
        } else {
            link.classList.add("text-slate-500", "hover:text-slate-900");
        }
    });

    // Mobile menu logic
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("menu-icon");

    if (btn && menu && icon) {
        btn.addEventListener("click", () => {
            // Toggle classes for animation
            if (menu.classList.contains("max-h-0")) {
                menu.classList.remove("max-h-0", "opacity-0");
                menu.classList.add("max-h-[600px]", "opacity-100");
                icon.className = "fas fa-times text-2xl transform rotate-90 transition-transform duration-300";
            } else {
                menu.classList.remove("max-h-[600px]", "opacity-100");
                menu.classList.add("max-h-0", "opacity-0");
                icon.className = "fas fa-bars text-2xl transform rotate-0 transition-transform duration-300";
            }
        });
    }
}
