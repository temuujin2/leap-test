const axios = require('axios');
// const fs = require("fs");
const url = "https://www.poemist.com/api/v1/randompoems";
// const http = require("http");

const getData = async () => {
    try {
    const poems = await axios.get(url);
    const poem = await axios.get(poems.data[0].url)
    let arr = []
    poems.data.forEach(item => {
        arr.push(axios.get(item.url))
    })
    const allUrl = await Promise.all(arr);
    
    const totalRead = allUrl.map()
    //     .map((url) => url.data.split("\n"))
    //     .forEach((array) => {
    //         if (array.includes("Total read")) {
    //             return totalRead.push(item);
    //         }
    //     })
    //     .map(item => item.split(" "))[item.lenght - 3]
        
    // row.forEach((item) => {
    //     if (item.includes("Total read")) {
    //         totalRead.push(item);
    //     }
    // });
    console.log(totalRead)
    // const poem = await
    } catch (error) {
        console.log(error.message)
    }
    // let json = await response.json();
    // let title = json[0].title
    // // console.log(title);
    // return title;
};

// const poe = Promise.all([poems, poem]).then((values) => {
//     console.log(values)
// })
getData();