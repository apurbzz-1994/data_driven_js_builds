/*
This is a backend api that stores date, day, time and score for 
an event that involves remembering you-know-who.
*/
const express = require('express');

// importing the file system
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));

const app = express();
const server = app.listen(3000,()=>{
    console.log("server is on...");

    // query all datapoints from API
    app.get("/all/", (request, response)=>{
        response.send(data);
    });

    // write data to api
    app.get("/add/:date/:time/:day/:level", (request, response) => {
        let date = request.params. date;
        let time = request.params.time;
        let day = request.params.day;
        let level = request.params.level;

        // generate new key based on the number of the last key
        let newKey = (Object.keys(data).length) + 1;
        data[newKey] = {"date": date, "time": time, "day": day, "level": level};
        let stringData = JSON.stringify(data);
        fs.writeFile('data.json', stringData, () => {
            response.send("Saved!");
        });

    });
});
