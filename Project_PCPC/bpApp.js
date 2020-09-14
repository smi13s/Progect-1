// Run function to take search term and call API based on companyName
$("#run-search").on("click", function (event) {
    event.preventDefault()
    var companyName = document.getElementById("search-term").value;
    var queryAVURL = "http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=DJDSJE5UWVWWSSAJ"
    var queryFECURL = "https://api.open.fec.gov/v1/legal/search/?api_key=v6UUEXzZZHETBtk9tL47MIC9BKmRPK5CQV5iX3sa"

    $.ajax({
        url: queryAVURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log("meta data", response["Meta Data"])
        $("#stock-section").append("<p> Price: $" + response["Time Series (Daily)"]["2020-08-13"]["1. open"] +"</p>") 
        $("#stock-section").append("<p> Shares Bought/Sold: " + ["Time Series (Daily)"]["2020-08-13"] + "</p>")

    $.ajax({
        url: queryFECURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#campaign-section").append("<p> Candidate: "+response.admin_fines + "</p>")
        $("#campaign-section").append("<p> Contribution: "+response.adrs + "$" + "</p>")
    })

    })
})

// .on("click"), function associated with the clear button
// $("#clear-all").on("click", clear)