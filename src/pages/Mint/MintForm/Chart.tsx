/* eslint-disable prettier/prettier */
import * as React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Chart = () => {
    const data = [
        { name: 'martie', price: 214 },
        { name: 'aprilie', price: 202 },
        { name: 'mai', price: 140},
        { name: 'iunie', price: 86},
        { name: 'iulie', price: 58},
    ];
    return <div >
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>;
};

export default Chart;
