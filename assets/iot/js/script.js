
function createPlot(elementId, data, fieldNameY, fieldNameX) {
    const element = document.getElementById(elementId);
    const dataX = [];
    const dataY = [];
    
    data.forEach(function(item) {
        dataX.push(item[fieldNameX] || 0);
        dataY.push(item[fieldNameY] || '');
    });
    
    Plotly.plot(element,
        [{
            x: dataX,
            y: dataY,
            mode: 'lines+markers',
            type: 'scatter',
            line: {
                color: '#17BECF',
                width: 3
            },
            marker: {
                size: 6,
                color: '#178ccf'
            }
        }],
        {margin: {t: 0}},
        {responsive: true, locale: 'ru-RU'}
    );
}
