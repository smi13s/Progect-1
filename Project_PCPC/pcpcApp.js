// Run function to take search term and call API based on tickerSymbol

$("#candidate-search").on("click", function (event) {
        event.preventDefault()
        var candidateName = document.getElementById("candidate-term").value;
        var queryCandidateURL = "https://api.open.fec.gov/v1/candidates/search/?name=" + candidateName + "&api_key=v6UUEXzZZHETBtk9tL47MIC9BKmRPK5CQV5iX3sa";

        $.ajax({
            url: queryCandidateURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#campaign-section").append($("<p> Office Sought: " + JSON.stringify(response.results[0].office_full) + "</p>"))
            $("#campaign-section").append($("<p> Political Party: " + JSON.stringify(response.results[0].party_full) + "</p>"))
            $("#campaign-section").append($("<p> State: " + JSON.stringify(response.results[0].state) + "</p>"))
        })
 })

$("#contributor-search").on("click", function (event) {
        event.preventDefault()
        var contributorName = document.getElementById("contributor-term").value;
        var queryContributorURL = "https://api.open.fec.gov/v1/schedules/schedule_a/by_employer=" + contributorName + "?api_key=v6UUEXzZZHETBtk9tL47MIC9BKmRPK5CQV5iX3sa&contributor_name="; 
    
        $.ajax({
            url: queryContributorURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#campaign-section").append("<p> Candidate: " + JSON.stringify(response.results[0]) + "</p>")
            $("#campaign-section").append("<p> Candidate: " + JSON.stringify(response.results[0]) + "</p>")
        })  
})

$("#company-search").on("click", function (event) {
        event.preventDefault()
        var tickerSymbol = document.getElementById("ticker-term").value;
        var queryAVURL = "http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + tickerSymbol + "&apikey=DJDSJE5UWVWWSSAJ"
    
        $.ajax({
            url: queryAVURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#company-section").append("<p> Price: $" + response["Time Series (Daily)"]["2020-08-13"]["1. open"] + "</p>") 
            $("#company-section").append("<p> Shares Bought/Sold: " + response["Time Series (Daily)"]["2020-08-13"]["5. volume"] + "</p>")
        })
})

$("#stock-search").on("click", function (event) {
        event.preventDefault()
        var tickerSymbol = document.getElementById("symbol-term").value;
        var queryCompanyURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol="+ tickerSymbol + "&apikey=DJDSJE5UWVWWSSAJ";
        console.log(queryCompanyURL)
        $.ajax({
            url: queryCompanyURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $("#stock-section").append("<p> Name:" + JSON.stringify(response.Name) + "</p>")
            $("#stock-section").append("<p> Description:" + response.Description + "</p>")
            $("#stock-section").append("<p> Address:" + response.Address + "</p>")
        })
})
// .on("click"), function associated with the clear button
// $("#clear-all").on("click", clear)