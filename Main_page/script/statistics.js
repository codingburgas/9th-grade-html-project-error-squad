document.addEventListener('DOMContentLoaded', function() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Ocotber', 'November', 'December'],
        datasets: [{
            label: 'Fires',
            data: [65, 59, 80, 81,12,12,12,2,1,21,12,12],
            backgroundColor: 'rgba(235, 120, 54, 0.5)',
            borderColor: 'rgb(235, 81, 54)',
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true, // Адаптивность
        maintainAspectRatio: false, // Отключаем авто-соотношение сторон
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: 12
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(0,0,0,0.05)'
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});