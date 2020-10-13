"use strict";

const fetch = require("node-fetch");
const fs = require("fs");
const AWS = require("aws-sdk");

// environment variables begin with Z to avoid collision with Netlify variables
const AWS_REGION = process.env.ZAWS_REGION;
const AWS_VERSION = process.env.ZAWS_VERSION;
const AWS_ACCESS_KEY = process.env.ZAWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.ZAWS_SECRET_KEY;

(async () => {

    const response = await fetch("https://humanwhocodes.com/feeds/firstsnippet.json");
    if (response.status !== 200) {
        throw new Error("Invalid response status: " + response.status);
    }

    const currentFirstSnippet = await response.json();
    console.log("Current first snippet is ", currentFirstSnippet.id);

    const newFirstSnippet = JSON.parse(fs.readFileSync("./_site/feeds/firstsnippet.json", { encoding: "utf8" }));
    console.log("New first snippet is ", newFirstSnippet.id);

    if (currentFirstSnippet.id !== newFirstSnippet.id) {

        console.log("New snippet detected!");

        // Set the region 
        AWS.config.update({
            accessKeyId: AWS_ACCESS_KEY,
            secretAccessKey: AWS_SECRET_KEY,
            region: AWS_REGION
        });

        // Create CloudWatchEvents service object
        var cwevents = new AWS.CloudWatchEvents({ apiVersion: AWS_VERSION });

        var params = {
            Entries: [
                {
                    Detail: JSON.stringify({
                        meta: {
                            type: "snippet"
                        },
                        snippet: newFirstSnippet
                    }),
                    DetailType: 'NewSnippet',
                    Source: 'com.humanwhocodes.snippets'
                }
            ]
        };

        cwevents.putEvents(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data.Entries);
            }
        });

    }
})();