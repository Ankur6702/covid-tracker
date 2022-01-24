import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChart( { data: { confirmed, recovered, deaths }, country } ) {
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#ffa500', 'red'],
                        data: [confirmed.value, deaths.value]
                    }]
                }}
                // data={{
                //     labels: ['Infected', 'Recovered', 'Deaths'],
                //     datasets: [{
                //         label: 'People',
                //         backgroundColor: ['#ffa500', 'green', 'red'],
                //         data: [confirmed.value, recovered.value, deaths.value]
                //     }]
                // }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );
    return barChart;
}

export default BarChart;