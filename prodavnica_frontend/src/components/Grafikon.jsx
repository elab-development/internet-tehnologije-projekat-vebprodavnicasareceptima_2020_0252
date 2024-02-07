import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import "../style/grafikon.css";

const Grafikon = () => {
    const [podaci, setPodaci] = useState([]);
    const [period, setPeriod] = useState('dan');

    useEffect(() => {
        fetchPodaci();
    }, [period]);

    const fetchPodaci = () => {
        axios.get(`http://127.0.0.1:8000/api/prihod_po_${period}`)
            .then(response => {
                const formatiraniPodaci = response.data.map(item => [new Date(item.datum), parseFloat(item.prihod)]);
                setPodaci(formatiraniPodaci);
            })
            .catch(error => {
                console.error('Greška pri dohvaćanju podataka:', error);
            });
    };

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    };

    const getXAxisFormat = () => {
        switch (period) {
            case 'dan':
                return 'd.M.yyyy H:mm';
            case 'mesec':
                return 'MMMM yyyy';
            case 'godina':
                return 'yyyy';
            default:
                return 'd.M.yyyy H:mm';
        }
    };

    return (
        <div className='grafikon_veliki'>
            <select className='grafikon_combic' value={period} onChange={handlePeriodChange}>
                <option value="dan">Po danu</option>
                <option value="mesec">Po mjesecu</option>
                <option value="godina">Po godini</option>
            </select>
            <Chart 
                width={'700px'}
                height={'500px'}
                chartType="LineChart"
                loader={<div>Učitavanje grafikona...</div>}
                data={[
                    ['Datum', 'Prihod'],
                    ...podaci
                ]}
                options={{
                    title: 'Prihod',
                    hAxis: {
                        title: 'Datum',
                        format: getXAxisFormat()
                    },
                    vAxis: {
                        title: 'Prihod',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
};

export default Grafikon;
