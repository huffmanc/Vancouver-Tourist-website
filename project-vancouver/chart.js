var ctx = document.getElementById("myChart");
    var chartObj = new Chart(ctx, {
        type: "bar",
        data: {
        labels: ["Arbutus Ridge", "Downtown", "Downtown Eastside", "Dunbar Southlands", "Fairview", "Grandview-Woodland", "Hastings-Sunrise", "Kensington-Cedar Cottage", "Kerrisdale", "Killarney", "Kitsilano", "Marpole", "Mount Pleasant", "Oakridge", "Renfrew-Collingwood", "Riley Park", "Shaughnessy", "South Cambie", "Strathcona", "Sunset", "Victoria-Fraserview", "West End", "West Point Grey"],
        datasets: [
            {
                label:  "Median Number of Guests for Airbnb's",
                data: [3, 3, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 4, 2, 2, 4],
                backgroundColor: "blue",
            },
            {
                label:  "Average Number of Bedrooms for Airbnb's",
                data: [1.7, 1.2, 1.2, 1.8, 1.2, 1.4, 1.4, 1.5, 1.7, 1.2, 1.4, 1.4, 1.3, 1.4, 1.4, 1.5, 1.4, 1.4, 1.3, 1.6, 1.4, 1, 1.7],
                backgroundColor: "gray",
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Median Guests and Average Bedrooms",
            fontSize: 24
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Number",
                    fontSize: 16
                },
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Neighborhoods in Vancouver",
                    fontSize: 16
                },
                ticks: {
                    autoSkip: false
                }
            }]
        },
        maintainAspectRatio: true,
        responsive: true
    }
});

var ctx1 = document.getElementById("myChart2");
    var chartObj = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Arbutus Ridge", "Downtown", "Downtown Eastside", "Dunbar Southlands", "Fairview", "Grandview-Woodland", "Hastings-Sunrise", "Kensington-Cedar Cottage", "Kerrisdale", "Killarney", "Kitsilano", "Marpole", "Mount Pleasant", "Oakridge", "Renfrew-Collingwood", "Riley Park", "Shaughnessy", "South Cambie", "Strathcona", "Sunset", "Victoria-Fraserview", "West End", "West Point Grey"],
            datasets: [
                {
                    label: "Price per Night ($)",
                    data: [175, 192.46, 163.97, 168.06, 175.39, 117.63, 136.96, 114.04, 162.18, 74.5, 157.57, 110.6, 137.07, 128.93, 91.26, 140.45, 156.97, 158.12, 153.54, 121.78, 89.06, 169.18, 154.48],
                    backgroundColor: "darkgrey",
                },
                {
                    label: "Average Cost Per Extra Person for each Night ($)",
                    data: [13.14, 17.55, 15.84, 11.71, 13.2, 14.13, 12.7, 14.5, 14.25, 12.81, 12.97, 11.39, 13.76, 14.28, 12.13, 11.81, 10.84, 13.42, 15.75, 12.05, 11.27, 13.3, 12.09],
                    backgroundColor: "#304e58",
                }
            ]
        },
    options: {
        title: {
            display: true,
            text: "Price Per Night and Cost Per Extra Person",
            fontSize: 24
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Cost ($)",
                    fontSize: 16
                },
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Neighborhoods in Vancouver",
                    fontSize: 16
                },
                ticks: {
                    autoSkip: false
                }
            }]
        },
        maintainAspectRatio: true,
        responsive: true
    }
});