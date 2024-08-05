import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './PondsAnalytics.css';

const PondsAnalytics = () => {
    const waterQualityData = {
        dissolvedOxygen: [10, 41, 35, 51, 49, 62, 69],
        phosphite: [5, 30, 25, 45, 40, 55, 60],
        oxidationReductionPotential: [15, 35, 20, 50, 45, 60, 65],
        nitrite: [8, 25, 18, 40, 38, 50, 55],
        ammonia: [12, 38, 32, 48, 42, 58, 64],
        temperature: [20, 45, 30, 55, 50, 65, 60],
        salinity: [7, 28, 22, 41, 37, 53, 61]
    };

    const remoteSensingData = {
        coloredDissolvedOrganicMatter: [20, 35, 40, 45, 50, 55, 60],
        totalSuspendedSolid: [25, 30, 35, 40, 45, 50, 55],
        phytoplanktonChlorophyll: [30, 40, 50, 60, 69, 65, 25],
        sunInducedChlorophyllFluorescence: [15, 20, 25, 30, 35, 40, 45],
        phycocyanin: [10, 20, 30, 40, 50, 60, 65],
        aquaticMacrophytes: [5, 15, 25, 35, 45, 55, 65]
    };

    const [isWaterQuality, setIsWaterQuality] = useState(true);

    const commonOptions = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['Pond-1', 'Pond-2', 'Pond-3', 'Pond-4', 'Pond-5', 'Pond-6', 'Pond-7'],
            axisBorder: {
                show: true,
                color: '#000',
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: true,
                color: '#000',
                height: 6,
                offsetX: 0,
                offsetY: 0
            }
        },
        yaxis: {
            min: 0,
            max: 69,
            tickAmount: 10,
            labels: {
                formatter: (value) => Math.round(value),
                style: {
                    colors: ['#000'],
                    fontSize: '10px'
                }
            },
            axisBorder: {
                show: true,
                color: '#000',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: true,
                color: '#000',
                height: 6,
                offsetX: 0,
                offsetY: 0
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => val,
            offsetY: -20,
            style: {
                fontSize: '10px',
                colors: ["#304758"]
            }
        },
        title: {
            style: {
                fontSize: '14px',
                fontWeight: 'bold'
            }
        }
    };

    const cardStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
    };

    const renderCharts = (data) => (
        Object.keys(data).map((key, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            <div className="dropdown">
                                <select className="form-select small-dropdown" style={{ width: '90px' }}>
                                    <option value="7">7 Days</option>
                                    <option value="14">14 Days</option>
                                    <option value="21">21 Days</option>
                                    <option value="30">30 Days</option>
                                </select>
                            </div>
                        </div>
                        <ReactApexChart
                            options={commonOptions}
                            series={[{ data: data[key] }]}
                            type="bar"
                            height={300}
                        />
                    </div>
                </div>
            </div>
        ))
    );

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 mb-4 text-left">
                    <h1 style={{ fontSize: '1.2rem' }}>Pond Analytics:-</h1>
                </div>
                <div className="col-12 mb-4 text-left button-group">
                    <button className="btn btn-custom" onClick={() => setIsWaterQuality(true)}>Water Quality</button>
                    <button className="btn btn-custom" onClick={() => setIsWaterQuality(false)}>Remote Sensing</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {isWaterQuality ? renderCharts(waterQualityData) : renderCharts(remoteSensingData)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PondsAnalytics;
