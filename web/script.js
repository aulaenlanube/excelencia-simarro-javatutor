

// --- CHART JS ---
let vramChartInstance;
let trainingTimeChartInstance;

function initCharts() {
    // 1. VRAM Doughnut Chart
    const vramCtx = document.getElementById('vramChart');
    if (vramCtx) {
        if (vramChartInstance) vramChartInstance.destroy();
        vramChartInstance = new Chart(vramCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['SFT Model Qwen3 (65GB)', 'RAG Context Vector (15GB)', 'Reserve / Future (16GB)'],
                datasets: [{
                    data: [65, 15, 16],
                    backgroundColor: ['#4f46e5', '#10b981', '#f1f5f9'],
                    borderWidth: 0,
                    hoverOffset: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: { label: (context) => `${context.label}: ${context.raw} GB` }
                    }
                },
                cutout: '80%'
            }
        });
    }

    // 2. Training Time Bar Chart
    const timeCtx = document.getElementById('trainingTimeChart');
    if (timeCtx) {
        if (trainingTimeChartInstance) trainingTimeChartInstance.destroy(); // Prevent memory leaks
        trainingTimeChartInstance = new Chart(timeCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['7B (Estándar)', '32B (Qwen3-Coder)'],
                datasets: [{
                    label: 'Horas (Menos es Mejor)',
                    data: [4.5, 18], // 4.5h for 7B, 18h for 32B on 4 GPUs
                    backgroundColor: ['#cbd5e1', '#4f46e5'],
                    borderRadius: 8,
                    barThickness: 40
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { display: false },
                        title: { display: true, text: 'Horas de Entrenamiento' }
                    },
                    x: {
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
});
