const url = 'http://localhost:3000'
const orUrl = url + '/Order'

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const getOr = async () => {
    const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(cat)
    }

    const res = await fetchAPI(orUrl, options)
    showOr(res)
}

const showOr = or => {
    for (let a in or) {
        document.getElementById('order').innerHTML += `
            <tr style="font-size: 1vw;">
                <td>
                    <p>DH${or[a].id}</p>
                </td>
                <td>
                    <p>${or[a].namePer}</p>
                </td>
                <td>
                    <p>${or[a].phone}</p>
                </td>
                <td>
                    <p>${or[a].quantity}</p>
                </td>
                <td>
                    <p style="font-weight: bolder; color: #a62c32;">${or[a].price.toLocaleString()} VNĐ</p>
                </td>
                <td>
                    <p>${or[a].Address}</p>
                </td>
                <td>
                    <p>${or[a].note}</p>
                </td>
                <td style="font-weight: bolder; color: #a62c32;">${or[a].status}</td>
            </tr>
        `
    }
}

getOr()