import React, { useState, useEffect } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const timeSpans = [
    { label: '1D', value: '1D' },
    { label: '1W', value: '1W' },
    { label: '1M', value: '1M' },
    { label: '1Y', value: '1Y' },
    { label: 'ALL', value: 'ALL' }
  ];

const BTCGraph = ({ data }) => {
    const [selectedTimeSpan, setSelectedTimeSpan] = useState('1M');
    const [filteredData, setFilteredData] = useState([]);

    
    const filterData = (timeSpan) => {
        switch (timeSpan) {
            case '1D':
                // Filter logic for 1 day
                setFilteredData(data);
                break;
            case '1W':
                // Filter logic for 1 week
                setFilteredData(data);
                break;
            case '1M':
                // Filter logic for 1 month
                setFilteredData(data);
                break;
            case '1Y':
                // Filter logic for 1 year
                setFilteredData(data);
                break;
            case 'ALL':
                // No filter, use all data
                setFilteredData(data);
                break;
            default:
                // Default to some sensible option
                setFilteredData(data);
        }
    };
   
   /*
    const filterData = (timeSpan) => {
        const endDate = new Date();
        let startDate;

        switch (timeSpan) {
            case '1D':
                startDate = new Date(endDate.getTime() - (24 * 60 * 60 * 1000));
                break;
            case '1W':
                startDate = new Date(endDate.getTime() - (7 * 24 * 60 * 60 * 1000));
                break;
            case '1M':
                startDate = new Date(endDate.setMonth(endDate.getMonth() - 1));
                break;
            case '1Y':
                startDate = new Date(endDate.setFullYear(endDate.getFullYear() - 1));
                break;
            case 'ALL':
                startDate = new Date(Math.min(...data.map(d => new Date(d.date))));
                break;
            default:
                startDate = new Date(endDate.setMonth(endDate.getMonth() - 1));
        }

        const filtered = data.filter(d => {
            const date = new Date(d.date);
            return date >= startDate && date <= endDate;
        });

        setFilteredData(filtered);
    };
    */
  
    useEffect(() => {
      filterData(selectedTimeSpan);
    }, [selectedTimeSpan, data]);
    

  return (
    <div className="my-4">
      <div className="flex justify-center space-x-2 mb-4">
        {timeSpans.map((timeSpan) => (
          <button
            key={timeSpan.value}
            className={`py-2 px-4 rounded ${selectedTimeSpan === timeSpan.value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedTimeSpan(timeSpan.value)}
          >
            {timeSpan.label}
          </button>
        ))}
      </div>
      <div className="chartContainer">
      <VictoryChart>
                <VictoryLine
                data={filteredData}
                x="date"
                y="price"
                style={{
                    data: { stroke: "#0548a8" }
        }}
        />
        <VictoryAxis
        // Customize the axis as needed
        />
        <VictoryAxis dependentAxis
        // Customize the dependent axis as needed
        />
        </VictoryChart>
        </div>
        </div>
  );
}

export default BTCGraph;
