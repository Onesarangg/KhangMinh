let url = 'http://localhost:3000'
const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}
const submitCart = async () => {
    let name = document.getElementById('name')
    let diachi = document.getElementById('diachi')
    let phone = document.getElementById('phone')
    let note = document.getElementById('note')
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }
    let sum = 0
    let quantity = 0
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index]
        sum += item.product.pricePro * item.quantity
        quantity += item.quantity     
    }
    console.log(sum)
    let dt = /^0[0-9]{8}/g; 
    let check = phone.value.match(dt);
    let checkname = /^[a-z]{1,100}/g

    let checkadd = diachi.value.match(checkname);
    let checkna = name.value.match(checkname);
    if (!check || !checkadd || !checkna){
        if(!check){
            document.getElementById('pho').innerHTML = 'Bạn cần nhập lại số điện thoại'
        }
        if (!checkadd){
            document.getElementById('add').innerHTML = 'Bạn cần nhập lại địa chỉ'
        } 
        if (!checkna){
            document.getElementById('ten').innerHTML = 'Bạn cần nhập lại tên người nhận'
        }
    } else {
        const data = { 
            "Address": diachi.value,
            "namePer": name.value,
            "note": note.value,
            "phone": phone.value,
            "quantity": quantity,
            "price": Number(sum),
            "status": "Đang chuẩn bị hàng",
        }
        const OrderUrl = url + '/Order'
        const option = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetchAPI(OrderUrl, option)
        submitOrderDetail(res.id)
        alert('Đặt hàng thành công.')
    }
}

const submitOrderDetail = async (id) => {
    let storage = localStorage.getItem('cart')
    if (storage) {
        cart = JSON.parse(storage)
    }
    let orderDetails = []
    for (let index = 0; index < cart.length; index++) {
        const item = cart[index]
        let orderDetail = {
            order_id: id,
            product_id: item.product.id,
            quantity: item.quantity,
            unit_price: item.product.pricePro * item.quantity
        }
        orderDetails.push(orderDetail)
    }
    let promies = orderDetails.map((item, index) => {
        return postOrderDetail(item)
    })
    await Promise.all(promies)
    localStorage.removeItem('cart')
    cart = []
}

const postOrderDetail = async (data) => {
    const productsUrl = url + '/Order_details'
    const option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    await fetchAPI(productsUrl, option)
}
