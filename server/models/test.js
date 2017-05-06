const mongoose = require("mongoose");
const Match = require("./match");
const Delivery = require("./delivery");

mongoose.connect("mongodb://localhost:27017/ipl-calendar");

var match1 = new Match({
    id: 1,
    season: 2008,
    city: "Hyderabad",
    date: "2008-06-12",
    team1: "Deccan Chargers",
    team2: "Royal Challengers Bangalore",
    toss_winner: "Deccan Chargers",
    toss_decision: "field",
    result: "normal",
    dl_applied: 0,
    winner: "Deccan Chargers",
    win_by_runs: 15,
    win_by_wickets: 0,
    player_of_match: "Symonds",
    venue: "Rajiv Gandhi International Stadium",
    umpire1: "Simn Tauffel",
    umpire2: "Billy Bowden",
    umpire3: ""
});

match1.save(function(err){
    if(err){
        console.log(err);
    }
});