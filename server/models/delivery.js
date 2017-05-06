const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var delivery = new Schema({
    match_id: Number,
    inning: Number,
    batting_team: String,
    bowling_team: String,
    over: Number,
    ball: Number,
    batsman: String,
    non_striker: String,
    bowler: String,
    is_super_over: Number,
    wide_runs: Number,
    bye_runs: Number,
    legbye_runs: Number,
    noball_runs: Number,
    penalty_runs: Number,
    batsman_runs: Number,
    extra_runs: Number,
    total_runs: Number,
    player_dismissed: String,
    dismissal_kind: String,
    fielder: String
});

module.exports = mongoose.model("deliveries", delivery);