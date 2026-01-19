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
                    <span class="text-[10px] uppercase tracking-wider font-bold text-slate-400">Centro de Excelencia
                        Nacional IA</span>
                </div>
            </div>

            <div class="hidden lg:flex items-center space-x-8 text-sm font-semibold" id="desktop-menu">
                <a href="index.html" class="nav-link px-2 py-1">Proyecto</a>
                <a href="dataset.html" class="nav-link px-2 py-1">Dataset</a>
                <a href="guide.html" class="nav-link px-2 py-1">Guía Técnica</a>
                <a href="infra.html" class="nav-link px-2 py-1">Hardware</a>
                <a href="roadmap.html" class="nav-link px-2 py-1">Hoja de Ruta</a>
            </div>

            <div class="flex items-center lg:hidden">
                <button id="mobile-menu-btn" class="p-2 text-slate-600">
                    <i class="fas fa-bars text-2xl" id="menu-icon"></i>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
        <a href="index.html" class="block w-full text-left font-bold text-slate-700">Proyecto</a>
        <a href="dataset.html" class="block w-full text-left font-bold text-slate-700">Dataset</a>
        <a href="guide.html" class="block w-full text-left font-bold text-slate-700">Guía Técnica</a>
        <a href="infra.html" class="block w-full text-left font-bold text-slate-700">Hardware</a>
        <a href="roadmap.html" class="block w-full text-left font-bold text-slate-700">Hoja de Ruta</a>
    </div>
</nav>
`;

// Insert header
const headerPlaceholder = document.getElementById("header-placeholder");
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = HEADER_HTML;
    headerPlaceholder.className = "sticky top-0 z-50";

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
            menu.classList.toggle("hidden");
            if (menu.classList.contains("hidden")) {
                icon.className = "fas fa-bars text-2xl";
            } else {
                icon.className = "fas fa-times text-2xl";
            }
        });
    }
}
