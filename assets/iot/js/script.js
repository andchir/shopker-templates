
function createPlot(elementId, data, fieldNameY, fieldNameX, locale) {
    const element = document.getElementById(elementId);
    const dataX = [];
    const dataY = [];
    
    data.forEach(function(item) {
        dataX.push(typeof item[fieldNameX] !== 'undefined' ? item[fieldNameX] : null);
        dataY.push(typeof item[fieldNameY] !== 'undefined' ? item[fieldNameY] : null);
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
                size: 7,
                color: '#17BECF'
            }
        }],
        {margin: {t: 0}},
        {responsive: true, locale: locale}
    );
}
