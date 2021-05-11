const url = 'http://localhost:3000'
const proUrl = url + '/Product'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getPro = async () => {
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(cat)
    }

    const res = await fetchAPI(proUrl, options)
    showPro(res)
}

const showPro = pro => {
    for (let a in pro) {
        document.getElementById('pro').innerHTML += `
        <tr style="font-size: 1vw;">
            <td> 
                <p>SP${pro[a].id}</p>
            </td>
            <td>
                <div class="td-ad-image">
                    <a href=""><img src="../img/${pro[a].imagePro}" alt="" srcset=""></a> 
                </div>
            </td>
            <td> 
                <p  style="text-transform: uppercase;">${pro[a].namePro}</p>
            </td>
            <td>
                <p style="font-weight: bolder; color: #a62c32">${pro[a].pricePro.toLocaleString()} VNĐ</p> <br> <p>~</p> <br> <p>${pro[a].weiPro}</p>
            </td>
            <td>
                <p>${pro[a].desPro}</p>
            </td>
            <td>
                <button onclick="edit(${pro[a].id})"><a href="#update-tab"><i class="fa fa-edit" style="font-size:24px"></i></a></button>    
            </td>
            <td>
                <button onclick="deletePro(${pro[a].id})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>         
            </td>
        </tr>
        `
    }
}

getPro()

const addPro = async () => {
    let id = document.getElementById('id')
    let name = document.getElementById('name')
    let price = document.getElementById('price')
    let loai = document.getElementById('loai')
    let image = document.getElementById('image')
    let des = document.getElementById('des')
    let wei = document.getElementById('wei')

    let checkid = /^\S[0-9]{3}/g
    let checkprice = /^[^0\S][0-9]/g
    let checkname = /^(\S\D[A-Z])[a-z][0-9]{10,100}/g

    let checknum = id.value.match(checkid);
    let checkpri = price.value.match(checkprice);
    let checkna = name.value.match(checkname);
    let checkdes = des.value.match(checkname)
    if (!checknum || !checkna || !checkpri || image.value.length == 0 || !checkdes || wei.value.length == 0){
        if(!checkna){
            document.getElementById('mes').innerHTML = 'Bạn cần nhập lại tên sản phẩm'
        }
        if (!checknum){
            document.getElementById('IdPro').innerHTML = 'ID loại phải là số có 3 chữ số'
        } 
        if (!checkpri){
            document.getElementById('pri').innerHTML = 'Giá phải là số dương'
        }
        if (!checkdes){
            document.getElementById('desc').innerHTML = 'Bạn hãy thêm mô tả cho sản phẩm'
        }
        if (image.value.length == 0){
            document.getElementById('fil').innerHTML = 'Thêm hình cho sản phẩm'
        }
        if (wei.value.length == 0){
            document.getElementById('weiE').innerHTML = 'Thêm khối lượng thịnh cho sản phẩm'
        }
    } else {
        const pro = {
            "id": Number(id.value),
            "namePro": name.value,
            "desPro": des.value,
            "imagePro": image.value,
            "pricePro": Number(price.value),
            "weiPro": wei.value
        }
        const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pro)
        }
        const res = await fetchAPI(proUrl, options)
        alert('Đã thêm thành công sản phẩm mới.')
        document.getElementById('pro').innerHTML += `
            <tr style="font-size: 1vw;">
                <td> 
                    <p>SP${res.id}</p>
                </td>
                <td>
                    <div class="td-ad-image">
                        <a href=""><img src="../img/${res.imagePro}" alt="" srcset=""></a> 
                    </div>
                </td>
                <td> 
                    <p  style="text-transform: uppercase;">${res.namePro}</p>
                </td>
                <td>
                    <p>${res.pricePro} VNĐ</p>
                </td>
                <td> 
                    <p>${res.weiPro}</p>
                </td>
                <td>
                    <p>${res.desPro}</p>
                </td>
                <td>
                    <button onclick="edit(${res.id})"><i class="fa fa-edit" style="font-size:24px"></i></button>    
                </td>
                <td>
                    <button onclick="deletePro(${res.id})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>         
                </td>
            </tr>
        `
    }
}

const getProById = async (id) => {
    const proUrlId = url + '/Product/' + id
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    }
    const res = await fetchAPI(proUrlId, options)
    return res
}

const edit = async (id) => {
    var result = confirm("Bạn muốn sửa sản phẩm này?");
        if(result)  {
            alert("Nháy vào tab 'CHỈNH SỬA' để sửa sản phẩm");
            document.getElementById('update-tab').style.backgroundColor = '#a62c32';
            const pro = await getProById(id)
            document.getElementById('idPro').value = pro.id
            document.getElementById('namePro').value = pro.namePro
            document.getElementById('pricePro').value = pro.pricePro
            document.getElementById('desPro').value = pro.desPro
            document.getElementById('weiPro').value = pro.weiPro 
        } else {
            alert("Bạn không muốn sửa sản phẩm.");
        }
}

const updateSP = async (id) => {
    let name = document.getElementById('name')
    let price = document.getElementById('price')
    let loai = document.getElementById('loai')
    let image = document.getElementById('image')
    let des = document.getElementById('des')
    let wei = document.getElementById('wei')

    let checkprice = /^[^0\S][0-9]/g
    let checkname = /^(\S\D[A-Z])[a-z][0-9]{10,100}/g

    let checkpri = price.value.match(checkprice);
    let checkna = name.value.match(checkname);
    let checkdes = des.value.match(checkname)
    if (!checkna || !checkpri || image.value.length == 0 || !checkdes || wei.value.length == 0){
        if(!checkna){
            document.getElementById('umes').innerHTML = 'Bạn cần nhập lại tên sản phẩm'
        }
        if (!checkpri){
            document.getElementById('upri').innerHTML = 'Giá phải là số dương'
        }
        if (!checkdes){
            document.getElementById('udesc').innerHTML = 'Bạn hãy thêm mô tả cho sản phẩm'
        }
        if (image.value.length == 0){
            document.getElementById('ufil').innerHTML = 'Thêm hình cho sản phẩm'
        }
        if (wei.value.length == 0){
            document.getElementById('uweiE').innerHTML = 'Thêm khối lượng thịnh cho sản phẩm'
        }
    } else {
        const proUrlId = url + '/Product/' + id
        const pro = {
            "id": Number(document.getElementById('idPro').value),
            "namePro": document.getElementById('namePro').value,
            "desPro": document.getElementById('desPro').value,
            "imagePro": document.getElementById('imagePro').value,
            "pricePro": Number(document.getElementById('pricePro').value),
            "weiPro": document.getElementById('weiPro').value    
        }

        const options = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pro)
        }

        const res = await fetchAPI(proUrlId, options)
        getPro()
        alert('Đã chỉnh sửa thành công sản phẩm')
    }
}

const deletePro = async (id) => {
    var result = confirm("Bạn muốn xóa sản phẩm này?");
    if(result)  {
        const proUrlId = url + '/Product/' + id
        const options = {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const res = await fetchAPI(proUrlId, options)
        getPro()
    } else {
        alert("Bạn không muốn xóa sản phẩm.");
    }
}