const url = 'http://localhost:3000'
const urlOr = url + '/Order_details'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getChart = async () => {
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(cat)
    }
    const res = await fetchAPI(urlOr, options)
    return res
}

// const showChart = listChart => {
//     let amount = 0
//     const arr = []
//     // for (let i in listChart){
//     //     if(listChart[i].product_id == listChart[i].product_id){
//     //         amount += 1
//     //     }
//     //     arr.push({or : amount})
//     // }
//     // var count = 0;
//     // for(var i = 0; i < listChart.length; ++i){ 
//     //     if(listChart[i].product_id == 2) count++; 
//     // } 
//     // var map = listChart.reduce(function(prev, cur) {
//     //     prev[cur] = (prev[cur] || 0) + 1;
//     //     return prev;
//     //   }, {}); 
//     // console.log(JSON.stringify(map));
//     // console.log(count)    
//     // }
//     // uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
//     for (let i in listChart){
//         let or = listChart[i].product_id
//             arr.push(or)
//             // listChart[i].product_id.forEach(function(i) { 
//             //     count[i] = (count[i]||0) + 1;
//             // });
            
//         }console.log(arr);
//     var  count = {};
//     arr.forEach(function(i) { 
//        count[i] = (count[i]||0) + 1;
//     });
//     console.log(count);
//     // console.log(arr)
// }

// // getChart()