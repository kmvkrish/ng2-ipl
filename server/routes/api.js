const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Match = require("../models/match");
const Delivery = require("../models/delivery");

mongoose.connect("mongodb://localhost:27017/ipl");

router.get("/matches", (req, res) => {
    Match.find({}, (err, matches) => {
        if(err){
            res.status(204).json(err);
        }
        res.status(200).json(matches);
    })
});

router.get("/matches/season/:season", (req, res) => {
    Match.find({season: req.params.season}, (err, matches) => {
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(matches);
    })
});

router.get("/matches/season/:season/match/:match_id", (req, res) => {
    Match.find({season: req.params.season, id: req.params.match_id}, (err, match) => {
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(match);
    })
});

router.get("/matches/season/:season/match/:match_id/deliveries", (req, res) => {
    
    Match.find({season: req.params.season, id: req.params.match_id}, (err, match) => {
        if(err){
            res.status(500).json(err);
        }
        if(match == undefined || match.length < 1){
            res.status(500).json({
                message: "Match not found"
            });
        }else{
            Delivery.find({match_id: req.params.match_id}, (err, deliveries) => {
                if(err){
                    res.status(500).json(err);
                }
                res.status(200).json(deliveries);
            });
        }
        
    });
    
});

module.exports = router;