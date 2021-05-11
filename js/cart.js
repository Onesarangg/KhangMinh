// const showProbyId = async (id) => {
//     firebase.database().ref('Product/' + id).on('value',function(snapshot){
//         // console.log(snapshot.val().IDPro)
//         // let proCart = snapshot.val()
//        return snapshot.val() 
//     });
// }
const urlParams = new URLSearchParams(window.location.search);

// // let b = window.location.search;
// //console.log();
// addCart(urlParams.get('id'))
  
// function addCart(id){
//     let cart = [] 
//     let storage = localStorage.getItem('cart')
//     if (storage) {
//         cart = JSON.parse(storage)
//     }
//     firebase.database().ref('Product/' + id).on('value',function(snapshot){
//         console.log(snapshot.val().IDPro)
        
        
//         // let item = cart.find(pro => pro['proCart'].IDPro === snapshot.val())
//         // console.log(item)
//         for(let i = 0; i <= cart.length; i++){
//             let item = cart[i]
//             console.log(item.IDPro)
//             if (item.IDPro === snapshot.val()) {
//                 item.quantity += 1
//                 // console.log(snapshot.val())
//                 console.log("true")
//             } else {
//                 let proCart = snapshot.val()
//                 cart.push({proCart, quantity: 1})
//             // console.log(snapshot.val())
//                 // console.log("false")
//             } 
//         }
        
//         localStorage.setItem('cart', JSON.stringify(cart))

//         cart.forEach(item => {
//             text = `
//                 <tr>
//                     <td><div><i class="fa fa-close"></i></div></td>
//                     <td colspan="2"> 
//                         <div class="td-image">
//                             <a href="detail.html"><img src="./img/${item.imagePro}" alt="" srcset=""></a> 
//                         </div>    
//                     <!-- </td>
//                     <td> -->
//                         <div class="td-text">
//                             <a href="detail.html">${item.namePro}</a> 
//                             <p href="">Còn hàng</p>
//                         </div>
//                     </td>
//                     <td>
//                         <div class="td-price">
//                             <p name="price">${item.pricePro}</p>
//                         </div>
//                     </td>
//                     <td class="name-num">
//                         <div class="td-num">
//                             <input type="number" name="number" id="" min="1" onchange="join_num()" value="${item.quantity}"></td>
//                         </div>
//                     <td>
//                         <div class="td-price">
//                             <p name="cost">0</p>
//                         </div>
//                     </td>
//                 </tr>
//                 `;
//                 // console.log(proCart)
//                 document.getElementById('cart').innerHTML += text
//         })
//     }) 
// }

// let id = localStorage.getItem('id')

// addToCart = async (product_id) => {

//     let cart = await getUserCart()

//     cart.id = cart.id === undefined ? id : cart.id

//     let cart_prods = cart.products !== undefined ? cart.products : []

//     if (cart_prods.some(e => e.product_id === product_id)) {
//         // product already in cart
//         let prod = cart_prods.filter(e => e.product_id === product_id)[0]

//         // update quantity
//         prod.quantity++
//         return await firebase.database().ref('Product/' + urlParams.get('id')).update(cart, (error) => {
//             if (error) {
//                 console.log('error')
//             } else {
//                 console.log('Đã thêm vào giỏ hàng')
//             }
//         });
//     } else {
//         // add new item to cart
//         cart_prods.push({
//             product_id: product_id,
//             quantity: 1
//         })
//         cart.products = cart_prods
//         return await firebase.database().ref('Order/' + id).update(cart, (error) => {
//             if (error) {
//                 console.log('error')
//             } else {
//                 console.log('Đã thêm vào giỏ hàng')
//             }
//         });
//     }
// }

// updateCart = (product_id, quantity) => {
//     let cart = {
//         id: id,
//         products: [
//             {
//                 product_id: product_id,
//                 quantity: quantity
//             }
//         ]
//     }
//     firebase.database().ref('Order/' + id).set(cart, (error) => {
//         if (error) {
//             console.log('error')
//         } else {
//             console.log('add cart success')
//         }
//     });
// }

// getUserCart = async () => {
//     let res = await firebase.database().ref('Product/' + id).once('value')
//     return res.val() || {}
// }

// deleteCartItem = async (id) => {
//     // database.ref('carts/'+id).remove()
//     // console.log('Da xoa');
//     // location.reload();

//     let cart = await getUserCart()

//     cart.products = cart.products.filter(e => e.product_id !== id)

//     database.ref('Order/' + id).update(cart, (error) => {
//         if (error) {
//             console.log('error')
//         } else {
//             console.log('Đã xóa item giỏ hàng')
//             // remove tr
//             let cart_table = document.querySelector('#cart-table > tbody')
//             cart_table.querySelector(`#cart-item-${id}`).remove()
//         }
//     });
// }

// renderCartTable = async () => {
//     let cart = await getUserCart()

//     let cart_prods = cart.products !== undefined ? cart.products : []

//     let cart_table = document.querySelector('#cart')

//     if (cart_prods.length === 0 ) {
//         let p = document.createElement('p')
//         p.innerHTML = 'Không có sản phẩm nào trong giỏ hàng'

//         cart_table.appendChild(p);

//         return;
//     }

//     cart_prods.forEach(async (e, index) => {
//         let prod = await firebase.database().ref('Product/' + e.product_id).once('value')

//         // let all_prods = await database.ref('product').orderByKey().once('value')

//         let tr = document.createElement('tr')

//         tr.id = `cart-item-${e.product_id}`

//         tr.innerHTML = `<td>${index + 1}</td>
//                     <td>${prod.val().name}</td>
//                     <td><img src="images/${prod.val().images}" alt=""></td>
//                     <td>${e.quantity}</td>
//                     <td>${numberToMoney(prod.val().price)}</td>
//                     <td>${numberToMoney(prod.val().price*e.quantity)}</td>
//                     <td><button onClick="deleteCartItem(${e.product_id})" >Xóa</button></td>`

//         cart_table.appendChild(tr)
//     })
// }

// init = async () => {
//     await addToCart()
//     // let cart = await getUserCart()
//     // console.log(cart)
//     // await renderCartTable()
// }

// // updateCart(1, 2)

// init()

// // GET ALL CARTS
// // database.ref('carts').orderByKey().once('value').then(function(snapshot) {
// //     var carts = snapshot.val()
// //     for(let index in carts) {
// //         console.log(carts[index])
// //     }
// // })

const url = 'http://localhost:3000'

const fetchAPI = async (url, option) => {
    const res = await fetch(url, option)
    return res.json()
}

const getProductById = async (id) => {
    const productUrl = url + '/Product/' + id
    const option = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    }
    const res = await fetchAPI(productUrl, option)
    return res
}

let cart = []
const addCart = async (id) => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }
    let product = await getProductById(id)
    let item = cart.find(sp => sp.product.id == id)
    if (item) {
        item.quantity = item.quantity + 1
    } else {
        cart.push({product, quantity: 1})
    }   
    localStorage.setItem('cart', JSON.stringify(cart))
    // show cart ra view
    let cartBody = document.getElementById('cart')
    let sum = 0
    cartBody.innerHTML = ''
    cart.forEach(item => {
        cartBody.innerHTML += `
            <tr>
                <td>
                    <button onclick="removeItem(${item.product.id})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                </td>
                <td colspan="2"> 
                    <div class="td-image">
                        <a href="./detail.html?${item.product.id}"><img src="./img/${item.product.imagePro}" alt="" srcset=""></a> 
                    </div>    
                    <div class="td-text">
                        <a href="./detail.html?${item.product.id}">${item.product.namePro}</a> 
                    </div>
                </td>
                <td>
                    <div class="td-price">
                        <p name="price">${item.product.pricePro}</p>
                    </div>
                </td>
                <td class="name-num">
                    <div class="td-num">
                        <input type="number" name="number" id="" min="1" value="${item.quantity}" onchange="join_num()"></td>
                    </div>
                <td>
                    <div class="td-price">
                    <p name="cost">${(item.product.pricePro * item.quantity).toLocaleString()}</p>
                    </div>
                </td>    
            </tr>
        `
        
        sum += item.product.pricePro * item.quantity
    })
    document.getElementById('sum').innerHTML = sum.toLocaleString() + " VNĐ"
}

const removeItem = id => {
    var result = confirm("Bạn có muốn xóa sản phẩm này?");
    if (result == true) {
        let storage = localStorage.getItem('cart')
        if (storage) {
            cart = JSON.parse(storage)
        }
        cart = cart.filter(item => item.product.id != id)
        localStorage.setItem('cart', JSON.stringify(cart))
        // show cart ra view
        let cartBody = document.getElementById('cart')
        cartBody.innerHTML = ''
        cart.forEach(item => {
            cartBody.innerHTML += `
                <tr>
                    <td>
                        <button onclick="removeItem(${item.product.id})">Xóa</button>
                    </td>                
                    <td colspan="2"> 
                        <div class="td-image">
                            <a href="detail.html"><img src="./img/${item.product.imagePro}" alt="" srcset=""></a> 
                        </div>    
                        <div class="td-text">
                            <a href="detail.html">${item.product.namePro}</a> 
                        </div>
                    </td>
                    <td>
                        <div class="td-price">
                            <p name="price">${item.product.pricePro}</p>
                        </div>
                    </td>
                    <td class="name-num">
                        <div class="td-num">
                            <input type="number" name="number" id="" min="1" value="${item.quantity}" onchange="join_num()"></td>
                        </div>
                    <td>
                        <div class="td-price">
                            <p name="cost">${(item.product.pricePro * item.quantity).toLocaleString()}</p>
                        </div>
                    </td>
                </tr>
            `
            sum += item.product.pricePro * item.quantity
        })
        document.getElementById('sum').innerHTML = sum.toLocaleString() + " VNĐ"
    } else {
        alert("Bạn không muốn xóa sản phẩm");
    } 
    
}

// const removeAll = () =>{
//     var result = confirm("Bạn có muốn xóa giỏ hàng này?");
//     if (result == true) {  
//         localStorage.removeItem('cart')
//         cart = []
//         window.load('home.html')
//     } else {
//         alert('Bạn không xóa giỏ hàng!');
//     }
// }

let b = window.location.search;
addCart(b.slice(1, b.length));
