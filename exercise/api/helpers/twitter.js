 const url = "https://api/twitter.com/1.1/search/tweets.json";
 const axios = require('axios');


 class Twitter {

     get(query, count) {
         return axios.get(url, {
             params: {
                 q: query,
                 count: count
             },
             headers: {
                 "Authorization": `${process.env.TWITTER_API_TOKEN}`
             }
         })
     }
 }



 module.exports = Twitter;