// function showPro(){
//     firebase.database().ref('Product').orderByKey().once('value', function(snapshot){
//         let listPro = snapshot.val();
//         console.log(listPro)
  
//         for (let a in listPro) {
//             document.getElementById('pro').innerHTML += 
//             `
//             <div class="box-pro-pro mar">
//                 <div class="five-pro">
//                     <div class="five-pro- five-border">
//                         <div class="five-pro-image">
//                             <a href="./detail.html?${a}">
//                                 <img src="./img/${listPro[a].imagePro}" alt="">
//                             </a>
//                         </div>
//                     <div>
//                         <div class="pro-name" style="text-transform: uppercase;">
//                             <a href="./detail.html?${a}">${listPro[a].namePro}</a>
//                         </div>
                        
//                         <div class="pro-price-new">
//                             <p>${listPro[a].pricePro} VNĐ/ ${listPro[a].weiPro}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="five-button">
//                     <a href="./shopping.html?id=${a}&idPro=${listPro[a].IDPro}"><i class="fa fa-shopping-cart" style="font-size:2vw"></i> Thêm vào giỏ hàng</a>
//                 </div>
//             </div>`
//         }

//         // // snapshot.forEach(childSnapshot => {
//         // //     document.getElementById('pro-name').innerHTML = childSnapshot.val().namePro;
//         // // });
//     })
// }
// showPro();

// database.ref('Catalogies').orderByKey().once('value').then(function(snapshot){
         
//     var listCatalog = snapshot.val()
   
//       let listCatalogView = document.querySelector('#list-catalog')
   
//       console.log(listCatalog)
//       for(let index in listCatalog) {
//            console.log(listCatalog[index])
//            let catalog = `<tr><td>${listCatalog[index].ID}</td>
//                                    <td>${listCatalog[index].name}</td>
//                                    <td>${listCatalog[index].Price}</td>
//                                    <td>${listCatalog[index].image}</td>
//                                    <td>${listCatalog[index].detail}</td>
//                            </tr> `
           
//            listCatalogView.innerHTML+=catalog
//            }
//    })

const url = 'https://www.gov.uk/bank-holidays.json'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getNews = async () => {
    // const proUrl = url
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // }
    // const res = await fetchAPI(proUrl, options)
    // showNews(res.events)
    const endpoint = 'https://www.gov.uk/bank-holidays.json';
    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => handleData(data))

function handleData(data){
    let bankHolidays = data; //For ease
    let england = bankHolidays["england-and-wales"].events;
   // Bây giờ chúng ta ánh xạ từng object bên trong'england'
   // có thể là kiểu mảng array hoặc đối tượng object
   // Gán cho biến html để thêm từng object vào.
   england.map((items) =>{
   document.getElementById('news').innerHTML += `
    <tr style="font-size: 1vw;">
        <td> 
            <p>${items.date}</p>
        </td>
        <td>
            <p>${items.title}</p>
        </td>
    </tr> 
                 `;
                 
               }).join('');
    };

}
// const showNews = listNews => {
//     for (let a in listNews) {
//         document.getElementById('news').innerHTML += 
//          `
//         <div class="news-image">
//             <img src="" alt="" srcset="">
//         </div>
//         <div class="news-text mt">
//             <div class="box-date">
//                 <div class="month">
//                     <p>${listNews[a].title}</p>
//                 </div>
//                 <div class="t-month">
//                     <p></p>
//                 </div>
//             </div>
//             <div class="box-tittle">
//                 <a href="news-detail.html" style="color: black; font-weight: bolder;"></a>
//                 <p style="margin-bottom: 0.8px; color: #a62c32;"> VNĐ</p>
//                 <p style="color: #bdb6b6;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean .... </p>
//             </div>    
//         </div>
//      `
//     }
// }
getNews()