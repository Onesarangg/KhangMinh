// function showProbyId(id){
//     firebase.database().ref('Product/' + id).on('value',function(snapshot){
//         // document.getElementById('name').value = snapshot.val().nameCate;
//         // document.getElementById('id').value = snapshot.val().IDCate;
//         document.getElementById('detail-image').innerHTML = `
//         <div class="de-image">
//             <img src="./img/${snapshot.val().imagePro}" alt="" srcset="">
//         </div>
//         `
//             text = `
//                 <div class="text-detail">
//                     <h4>${snapshot.val().namePro}</h4> <hr>
//                     <a>Giá: <span>${snapshot.val().pricePro} VNĐ/hộp</span></a> <hr>
//                     <p style="font-weight: bolder;float: left; margin-right: 5%;">Dung tích:</p><p > ${snapshot.val().weiPro} <hr>
//                     <a>Số lượng: <input type="number" name="" id="" value="1" min="1" style="margin-left: 7%"></a>
//                 </div>
//                 <div class="btn-detail">
//                     <input type="button" value="MUA NGAY" class="buy">
//                     <button class="car"><a href="./shopping.html?id=${id}&idPro=${snapshot.val().IDPro}">THÊM VÀO GIỎ</a></button>
//                     <input type="button" value="THÍCH" class="like">
//                 </div>
//             `;
//             document.getElementById('detail').innerHTML = text       
        
//         document.getElementById('protect').innerHTML = `
//             <p style="margin-left: 5%;">
//                 ${snapshot.val().desPro}
//             </p>
//         `
//         document.getElementById('wei').innerHTML = snapshot.val().weiPro
//      });
// }
// let b = window.location.search;
// //console.log();
// showProbyId(b.slice(1, b.length))
let b = window.location.search;
console.log(b.slice(1, b.length));
// showProbyId(b.slice(1, b.length))
const url = 'http://localhost:3000'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getProID = async (id) => {
    const proIdUrl = url + '/Product/' + id
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    }
    const res = await fetchAPI(proIdUrl, options)
    return res
}

// const edit = async (id) => {
//     var result = confirm("Bạn có muốn sửa sản phẩm này?");
//     if (result == true) {
//         const sv = await getSVID(id)
//         document.getElementById('id').value = sv.id
//         document.getElementById('name').value = sv.name
//         document.getElementById('address').value = sv.diachi
//         document.getElementById('date').value = sv.date
//         document.getElementById('class').value = sv.class
//     } else {
//         alert("Bạn không muốn sửa sản phẩm");
//     } 
// }

const showProById = async (id) => {
    const proID = await getProID(id)
    document.getElementById('detail-image').innerHTML = `
        <div class="de-image">
            <img src="./img/${proID.imagePro}" alt="" srcset="">
        </div>`

        document.getElementById('detail').innerHTML = `
           <div class="text-detail">
                <h4>${proID.namePro}</h4> <hr>
                <a>Giá: <span>${proID.pricePro} VNĐ/hộp</span></a> <hr>
                <p style="font-weight: bolder;float: left; margin-right: 5%;">Dung tích:</p><p> ${proID.weiPro} <hr>
                <a>Số lượng: <input type="number" name="" id="" value="1" min="1" style="margin-left: 7%"></a>
            </div>
            <div class="btn-detail">
                <input type="button" value="MUA NGAY" class="buy">
                <button class="car"><a href="./shopping.html?${proID.id}">THÊM VÀO GIỎ</a></button>
                <input type="button" value="THÍCH" class="like">
            </div>
        `
        document.getElementById('protect').innerHTML = `
            <p style="margin-left: 5%;">
                 ${proID.desPro}
            </p>
        `

        document.getElementById('wei').innerHTML = proID.weiPro
} 

showProById(b.slice(1, b.length))