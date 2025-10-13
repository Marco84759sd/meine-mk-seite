// Charts werden erst geladen, wenn die Seite vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Chart.js Common Options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
                labels: {
                    font: {
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                        size: 13
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false
                },
                ticks: {
                    font: {
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false
                },
                ticks: {
                    font: {
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                    }
                }
            }
        }
    };

    // Saisonaler Kalender
    const seasonalCtx = document.getElementById('seasonalLineChart');
    if (seasonalCtx) {
        new Chart(seasonalCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Saisonaler Kursverlauf',
                    data: [10, 15, 12, 18, 20, 22, 19, 16, 14, 17, 25, 30],
                    borderColor: '#0071e3',
                    backgroundColor: 'rgba(0, 113, 227, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#0071e3',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: chartOptions
        });
    }

    // Historische Endjahresrally
    const barCtx = document.getElementById('yearEndBarChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Endjahresrally Performance (%)',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                        'rgba(0, 113, 227, 0.8)',
                        'rgba(0, 113, 227, 0.8)',
                        'rgba(0, 113, 227, 0.8)',
                        'rgba(0, 113, 227, 0.8)',
                        'rgba(0, 113, 227, 0.8)'
                    ],
                    borderColor: '#0071e3',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: chartOptions
        });
    }

    // Kerzenchart
    const candleCtx = document.getElementById('candleChart');
    if (candleCtx) {
        new Chart(candleCtx, {
            type: 'bar',
            data: {
                labels: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'],
                datasets: [{
                    label: 'Open',
                    data: [10, 15, 12, 18, 20],
                    backgroundColor: 'rgba(52, 199, 89, 0.8)',
                    borderColor: '#34c759',
                    borderWidth: 2,
                    borderRadius: 8
                }, {
                    label: 'Close',
                    data: [12, 14, 13, 17, 21],
                    backgroundColor: 'rgba(255, 59, 48, 0.8)',
                    borderColor: '#ff3b30',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                ...chartOptions,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                size: 13
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Performance-Vergleich
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'radar',
            data: {
                labels: ['Risiko', 'Ertrag', 'Stabilität', 'Komplexität', 'Zeitaufwand'],
                datasets: [{
                    label: 'Easy-Strategie',
                    data: [65, 70, 80, 30, 40],
                    backgroundColor: 'rgba(0, 113, 227, 0.2)',
                    borderColor: '#0071e3',
                    pointBackgroundColor: '#0071e3',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#0071e3',
                    borderWidth: 2
                }, {
                    label: 'Advance-Strategie',
                    data: [80, 90, 70, 85, 75],
                    backgroundColor: 'rgba(52, 199, 89, 0.2)',
                    borderColor: '#34c759',
                    pointBackgroundColor: '#34c759',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#34c759',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                size: 13
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                size: 13,
                                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                            }
                        },
                        ticks: {
                            backdropColor: 'transparent'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
});
