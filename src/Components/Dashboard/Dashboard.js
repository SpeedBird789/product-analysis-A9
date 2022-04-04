
import { Bar, BarChart, Label, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {

    const data =  
    [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ];
    return (
        <div className='dashboard'>
            <div>
                <h2>Monthly Investment</h2>
                <LineChart width={600} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Legend/>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div>
                <h2>Monthly Sales</h2>
                <BarChart  width={580} height={300} data={data}>
                    <Bar dataKey={'sell'} fill="#8884d8"></Bar>
                    <XAxis dataKey={'month'} />
                    <YAxis/>
                    <Legend/>
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;