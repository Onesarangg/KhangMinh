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

const url = 'http://localhost:3000'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getProducts = async () => {
    const proUrl = url + '/Product'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const res = await fetchAPI(proUrl, options)
    showPro(res)
}

const showPro = listPro => {
    for (let a in listPro) {
        document.getElementById('pro').innerHTML += 
         `
        <div class="box-pro-pro mar">
            <div class="five-pro">
                <div class="five-pro- five-border">
                    <div class="five-pro-image">
                        <a href="./detail.html?${listPro[a].id}"><img src="./img/${listPro[a].imagePro}" alt=""></a>
                    </div>
                    <div>
                        <div class="pro-name" style="text-transform: uppercase;">
                            <a href="./detail.html?${listPro[a].id}">${listPro[a].namePro}</a>
                        </div>
                                            
                        <div class="pro-price-new">
                            <p>${listPro[a].pricePro.toLocaleString()} VNĐ/ ${listPro[a].weiPro}</p>
                        </div>
                </div>
            </div>
            <div class="five-button">
                <a href="./shopping.html?${listPro[a].id}"><i class="fa fa-shopping-cart" style="font-size:2vw"></i> Thêm vào giỏ hàng</a>
            </div>
        </div>`
    }
}
getProducts()