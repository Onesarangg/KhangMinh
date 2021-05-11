const url = 'http://localhost:3000'
const catUrl = url + '/Catalog'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getCat = async () => {
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(cat)
    }

    const res = await fetchAPI(catUrl, options)
    showCat(res)
}

const showCat = cat => {
    for (let a in cat) {
        document.getElementById('cat').innerHTML += `
            <tr style="font-size: 1vw;">
                <td> 
                    <p>Y0${cat[a].id}</p>
                </td>
                <td>
                    <p>${cat[a].nameCat}</p>
                </td>
                <td>
                    <button onclick="edit(${cat[a].id})"><i class="fa fa-edit" style="font-size:24px"></i></button>
                </td>
                <td>
                    <button onclick="deleteCat(${cat[a].id})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                </td>
            </tr>
        `
    }
}

getCat()

const addCat = async () => {
    let num = /[0-9]{3}/g
    let name = /^\S\w{10,100}/g
    let checknum = document.getElementById('IDCat').value.match(num);
    let checkname = document.getElementById('hoten').value.match(name);

    if (!checknum || !checkname){
        if(!checknum){
            document.getElementById('mes').innerHTML = 'ID loại phải là số'
        } else if (!checkname){
            document.getElementById('mesErr').innerHTML = 'Tên loại phải từ 10 đến 100 kí tự'
        }
    } else {
        let id = document.getElementById('IDCat')
        let name = document.getElementById('hoten')
        const cat = {
            "id": Number(id.value),
            "nameCat": name.value
        }
        const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cat)
        }
        const res = await fetchAPI(catUrl, options)
        document.getElementById('cart').innerHTML += `
            <tr style="font-size: 1vw;">
                <td> 
                    <p>${res.id}</p>
                </td>
                <td>
                    <p>${res.nameCat}</p>
                </td>
                <td>
                    <button onclick="edit(${res.id})"><i class="fa fa-edit" style="font-size:24px"></i></button>
                </td>
                <td>
                    <button onclick="deleteCat(${res.id})"><i class="fa fa-trash-o" style="font-size:24px"></i></button>
                </td>
            </tr>
        `
    }
    
}

const getCatById = async (id) => {
    const catUrlId = url + '/Catalog/' + id
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    }
    const res = await fetchAPI(catUrlId, options)
    return res
}

const edit = async (id) => {
    var result = confirm("Bạn muốn chỉnh sửa sản phẩm này?");
        if(result)  {
            alert("Nháy vào tab 'CHỈNH SỬA' để sửa sản phẩm");
            document.getElementById('update-tab').style.backgroundColor = '#a62c32';
            const cat = await getCatById(id)
            document.getElementById('nameCat').value = cat.nameCat
            document.getElementById('ms').value = cat.id;
        } else {
            alert("Bạn không sửa sản phẩm này!");
        }
}

const editCat = async (id) => {
    let name = /^[^\S][a-z]{5,100}/g
    let checkname = document.getElementById('nameCat').value.match(name);

    if (!checkname){
        document.getElementById('meErr').innerHTML = 'Tên loại phải từ 10 đến 100 kí tự'
    } else {
        const catUrlId = url + '/Catalog/' + id
        const cat = {
            "nameCat": document.getElementById('nameCat').value,
        }

        const options = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cat)
        }

        const res = await fetchAPI(catUrlId, options)
        alert('Bạn đã cập nhật loại thành công')
        getCat()
    }
}

const deleteCat = async (id) => {
    var result = confirm("Bạn muốn xóa loại sản phẩm này?");
        if(result)  {
            const catUrlId = url + '/Catalog/' + id
            const options = {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const res = await fetchAPI(catUrlId, options)
            alert("Bạn đã xóa thành công.")
            getCat()
        } else {
            alert("Bạn không muốn xóa loại sản phẩm.");
        }   
}