import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './EachPondAnalytics.css';

const waterQualityData = {
    dissolvedOxygen: [40, 41, 35, 51, 49, 62, 69],
    phosphite: [5, 30, 25, 45, 40, 55, 60],
    oxidationReductionPotential: [15, 35, 20, 50, 45, 60, 65],
    nitrite: [8, 25, 18, 40, 38, 50, 55],
    ammonia: [12, 38, 32, 48, 42, 58, 64],
    temperature: [20, 45, 30, 55, 50, 65, 60],
    salinity: [7, 28, 22, 41, 37, 53, 61]
};

const remoteSensingData = {
    coloredDissolvedOrganicMatter: [20, 35, 40, 40, 50, 20, 60],
    totalSuspendedSolid: [25, 30, 15, 40, 45, 50, 60],
    phytoplanktonChlorophyll: [30, 40, 50, 60, 69, 65, 35],
    sunInducedChlorophyllFluorescence: [15, 20, 25, 30, 35, 40, 45],
    phycocyanin: [10, 5, 20, 35, 50, 20, 60],
    aquaticMacrophytes: [25, 15, 5, 25, 45, 35, 29],
    salinity: [7, 28, 22, 41, 37, 53, 61]
};

const waterQualityCharts = [
    "Dissolved Oxygen",
    "Phosphate",
    "Oxidation-Reduction Potential",
    "Nitrite",
    "Ammonia",
    "Temperature",
    "Salinity"
];

const remoteSensingCharts = [
    "Colored Dissolved Organic Matter",
    "Total Suspended Solid",
    "Phytoplankton Chlorophyll",
    "Sun-Induced Chlorophyll Fluorescence",
    "Phycocyanin",
    "Aquatic Macrophytes",
    "Salinity"
];

const EachPondAnalytics = () => {
    const [isWaterQuality, setIsWaterQuality] = useState(true);

    const chartOptions = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
            axisBorder: {
                show: true,
                color: '#000'
            },
            axisTicks: {
                show: true,
                color: '#000'
            }
        },
        yaxis: {
            min: 0,
            max: 69,
            tickAmount: 9,
            labels: {
                formatter: (value) => Math.round(value),
                style: {
                    colors: ['#000'],
                    fontSize: '10px'
                }
            },
            axisBorder: {
                show: true,
                color: '#000'
            },
            axisTicks: {
                show: true,
                color: '#000'
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        grid: {
            borderColor: '#e0e0e0'
        }
    };

    const renderImages = () => (
        <div className="image-section">
            <h5 className="image-heading">Pond-1</h5>
            <div className="image-grid">
                <div className="image-card">
                    <img
                        src="./images/stockimage.jpg"
                        alt="Pond 1"
                        className="img-fluid"
                    />
                    <p>(checktray1)</p>
                </div>
                <div className="image-card">
                    <img
                        src="./images/stockimage.jpg"
                        alt="Pond 2"
                        className="img-fluid"
                    />
                    <p>(checktray2)</p>
                </div>
                <div className="image-card">
                    <img
                        src="./images/stockimage.jpg"
                        alt="Pond 3"
                        className="img-fluid"
                    />
                    <p>(checktray3)</p>
                </div>
                <div className="image-card">
                    <img
                        src="./images/stockimage.jpg"
                        alt="Pond 4"
                        className="img-fluid"
                    />
                    <p>(checktray4)</p>
                </div>
                <div className="image-card">
                    <img
                        src="./images/3item.jpg"
                        alt="Pond 5"
                        className="img-fluid"
                    />
                    <p>(stockdensity10)</p>
                </div>
            </div>
        </div>
    );

    const cardStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
    };

    const renderCharts = (data, chartTitles) => (
        chartTitles.map((title, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="card-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>{title}</div>
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
                            options={chartOptions}
                            series={[{ data: data[Object.keys(data)[index]] }]}
                            type="area"
                            height={350}
                        />
                    </div>
                </div>
            </div>
        ))
    );

    return (
        <div className="container mt-4">
            {renderImages()}
            <div className="row">
                <div className="col-12 mb-4 text-left button-group">
                    <button className="btn btn-custom" onClick={() => setIsWaterQuality(true)}>Water Quality</button>
                    <button className="btn btn-custom" onClick={() => setIsWaterQuality(false)}>Remote Sensing</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {isWaterQuality
                            ? renderCharts(waterQualityData, waterQualityCharts)
                            : renderCharts(remoteSensingData, remoteSensingCharts)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachPondAnalytics;
