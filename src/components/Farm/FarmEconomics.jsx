import React, { useState } from "react";
import Chart from "react-apexcharts";
import './FarmEconomics.css';

const FarmEconomics = () => {
  const [selectedCategory, setSelectedCategory] = useState("Feed");

  const dataMap = {
    Feed: [35, 65, 30],
    Energy: [50, 60, 40],
    Maintenance: [45, 55, 35],
    Labour: [25, 35, 20],
  };

  const commonAxisStyles = {
    axisBorder: {
      show: true,
      color: "#000",
    },
    axisTicks: {
      show: true,
      color: "#000",
    },
  };

  const capexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["Farm-1", "Farm-2", "Farm-3"],
      ...commonAxisStyles,
    },
    yaxis: {
      title: {
        text: "Cost",
      },
      ...commonAxisStyles,
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          borderColor: "transparent",
          label: {
            text: "Capex",
            style: {
              color: "#000",
              background: "transparent",
              fontSize: "12px",
              padding: "10px"
            },
            offsetX: 30,
            offsetY: -245,
            orientation: "horizontal",
            position: "top",
          },
        },
      ],
    },
    grid: {
      borderColor: "#e7e7e7",
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
  };

  const getSecondChartOptions = (selectedCategory) => {
    const yAxisTitle =
    selectedCategory === 'Energy'
      ? 'kilowatt '
      : (selectedCategory === 'Feed')
      ? 'Tonnes'
      : 'Cost';

    return {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: ["Farm-1", "Farm-2", "Farm-3"],
        ...commonAxisStyles,
      },
      yaxis: {
        title: {
          text: yAxisTitle,
        },
        ...commonAxisStyles,
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            borderColor: "transparent",
            label: {
              text: selectedCategory,
              style: {
                color: "#000",
                background: "transparent",
                fontSize: "12px",
                padding: "10px",
              },
              offsetX: 45,
              offsetY: -245,
              orientation: "horizontal",
              position: "top",
            },
          },
        ],
      },
      grid: {
        borderColor: "#e7e7e7",
        strokeDashArray: 4,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
      },
    };
  };

  const capexSeries = [
    {
      name: "Capex",
      data: [30, 70, 40],
    },
  ];

  const secondSeries = [
    {
      name: selectedCategory,
      data: dataMap[selectedCategory],
    },
  ];

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {["Farm-1", "Farm-2", "Farm-3"].map((farm, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "267px", height: "281px" }}>
              <img
                className="card-img-top"
                src="./images/Farm1.jpg"
                alt={farm}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="card-body d-flex justify-content-center align-items-center" style={{ height: "20%" }}>
                <h5 className="card-title text-center">{farm}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-4">
        <div className="col">
          <h5>Farm Economics:-</h5>
          <div className="btn-group mb-3">
            <button
              type="button"
              className={`btn ${selectedCategory === 'Feed' ? 'btn-secondary' : 'btn-light'} me-5`}
              style={{ borderRadius: '15px' }}
              onClick={() => setSelectedCategory('Feed')}
            >
              Feed
            </button>
            <button
              type="button"
              className={`btn ${selectedCategory === 'Energy' ? 'btn-secondary' : 'btn-light'} me-5`}
              style={{ borderRadius: '15px' }}
              onClick={() => setSelectedCategory('Energy')}
            >
              Energy
            </button>
            <button
              type="button"
              className={`btn ${selectedCategory === 'Maintenance' ? 'btn-secondary' : 'btn-light'} me-5`}
              style={{ borderRadius: '15px' }}
              onClick={() => setSelectedCategory('Maintenance')}
            >
              Maintenance
            </button>
            <button
              type="button"
              className={`btn ${selectedCategory === 'Labour' ? 'btn-secondary' : 'btn-light'}`}
              style={{ borderRadius: '15px' }}
              onClick={() => setSelectedCategory('Labour')}
            >
              Labour
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Chart
            options={capexOptions}
            series={capexSeries}
            type="bar"
            height={300}
          />
        </div>
        <div className="col">
          <Chart
            options={getSecondChartOptions(selectedCategory)}
            series={secondSeries}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default FarmEconomics;
