<template>
    <main>
            <div class="row mt-5 m-0">
                <div class="col-xl-11 m-auto">
                    <h2 class="mb-4">Dashboard</h2>
                    <div class="row">
                        <div class="col-xl-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="mb-4">
                                       Tops Played Game
                                    </h6>

                                    <div class="row">
                                        <div class="col-6">
                                                <h6 class="text-danger">Penalty Kick</h6>
                                        </div>
                                        <div class="col-6">
                                            <div>
                                                <apexchart
                                                        class="apex-charts"
                                                        height="40"
                                                        type="area"
                                                        dir="ltr"
                                                        :series="top_players.series"
                                                        :options="top_players.chartOptions"
                                                ></apexchart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="mb-4">
                                        Total Gains
                                    </h6>

                                    <div class="row">
                                        <div class="col-6">
                                                <h6 class="text-info">1,050,250 €</h6>
                                        </div>
                                        <div class="col-6">
                                            <div>
                                                <apexchart
                                                        class="apex-charts"
                                                        height="40"
                                                        type="area"
                                                        dir="ltr"
                                                        :series="total_gains.series"
                                                        :options="total_gains.chartOptions"
                                                ></apexchart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="mb-4">
                                      Online People
                                    </h6>

                                    <div class="row">
                                        <div class="col-4">
                                                <h6 class="text-success">70 %</h6>
                                        </div>
                                        <div class="col-8">
                                            <div>
                                                <apexchart
                                                        class="apex-charts"
                                                        height="40"
                                                        type="area"
                                                        dir="ltr"
                                                        :series="online_people.series"
                                                        :options="online_people.chartOptions"
                                                ></apexchart>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="row">
                       <div class="col-xl-6 mb-2">
                           <div class="card">
                               <div class="card-body">
                                   <apexchart
                                           class="apex-charts"
                                           height="340"
                                           type="line"
                                           dir="ltr"
                                           :series="dashedLineChart.series"
                                           :options="dashedLineChart.chartOptions"
                                   ></apexchart>
                               </div>
                           </div>
                       </div>
                       <div class="col-xl-6">
                           <div class="card">
                               <div class="card-body">
                                   <h4 class="card-title mb-4">Categorys</h4>
                                   <!-- Pie Chart -->
                                   <apexchart
                                           class="apex-charts"
                                           height="320"
                                           type="pie"
                                           dir="ltr"
                                           :series="pieChart.series"
                                           :options="pieChart.chartOptions"
                                   ></apexchart>
                               </div>
                           </div>
                       </div>
                   </div>

                </div>

            </div>


    </main>
</template>

<script>

    export default {
        name: "Dashboard",

        data(){
            return{
                top_players : {
                    series: [{
                        name: 'Player',
                        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
                    }],
                    chartOptions: {
                        chart: {
                            type: 'area',
                            height: 40,
                            sparkline: {
                                enabled: true
                            }
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                        },
                        colors: ['#f00'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [25, 100, 100, 100]
                            },
                        },
                        tooltip: {
                            fixed: {
                                enabled: false
                            },
                            x: {
                                show: false
                            },
                            marker: {
                                show: false
                            }
                        }
                    }
                },

                 total_gains : {
                    series: [{
                        name: '€',
                        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
                    }],
                    chartOptions: {
                        chart: {
                            type: 'area',
                            height: 40,
                            sparkline: {
                                enabled: true
                            }
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                        },
                        colors: ['#50a5f1'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [25, 100, 100, 100]
                            },
                        },
                        tooltip: {
                            fixed: {
                                enabled: false
                            },
                            x: {
                                show: false
                            },
                            marker: {
                                show: false
                            }
                        }
                    }
                },
                online_people : {
                    series: [{
                        name: 'Pts',
                        data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
                    }],
                    chartOptions: {
                        chart: {
                            type: 'area',
                            height: 40,
                            sparkline: {
                                enabled: true
                            }
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                        },
                        colors: ['#0f0'],
                        fill: {
                            type: 'gradient',
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [25, 100, 100, 100]
                            },
                        },
                        tooltip: {
                            fixed: {
                                enabled: false
                            },
                            x: {
                                show: false
                            },
                            marker: {
                                show: false
                            }
                        }
                    }
                },
                dashedLineChart :{
                    series: [{
                        name: "Tournament played by day",
                        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                    },
                        {
                            name: "Duels played by day",
                            data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                        }],
                    chartOptions: {
                        chart: {
                            zoom: {
                                enabled: false
                            },
                            toolbar: {
                                show: false,
                            }
                        },
                        colors: ['#f5b44c','#34c38f'],
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                        },
                        // title: {
                        //     text: 'Page Statistics',
                        //     align: 'left'
                        // },
                        markers: {
                            size: 0,

                            hover: {
                                sizeOffset: 6
                            }
                        },
                        xaxis: {
                            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                                '10 Jan', '11 Jan', '12 Jan'
                            ],
                        },
                        tooltip: {
                            y: [{
                                title: {
                                    formatter: function (val) {
                                        return val + " (mins)"
                                    }
                                }
                            }, {
                                title: {
                                    formatter: function (val) {
                                        return val + " per session"
                                    }
                                }
                            }, {
                                title: {
                                    formatter: function (val) {
                                        return val;
                                    }
                                }
                            }]
                        },
                        grid: {
                            borderColor: '#f1f1f1',
                        }
                    }
                },
                pieChart : {
                    series: [44, 55, 41],
                    chartOptions: {
                        labels: ["Adventure", "Racing", "Sport"],
                        colors: ["#34c38f", "#556ee6", "#f46a6a"],
                        legend: {
                            show: true,
                            position: 'bottom',
                            horizontalAlign: 'center',
                            verticalAlign: 'middle',
                            floating: false,
                            fontSize: '14px',
                            offsetX: 0,
                            offsetY: -10
                        },
                        responsive: [{
                            breakpoint: 600,
                            options: {
                                chart: {
                                    height: 240
                                },
                                legend: {
                                    show: false
                                },
                            }
                        }]
                    }
                },



            }
        },

        methods:{

        }
    }
</script>

<style scoped></style>