import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";

class CryptoChart3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [15, 20, 10, 45, 20, 10, 5]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 90,
                    width: '100%',
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                colors: ['#52cc99'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100]
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            }
        };
    }
    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="area"
            />
        );
    }
}

export default CryptoChart3;