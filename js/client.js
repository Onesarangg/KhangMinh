// function check(){
//     let email = document.getElementsById('txtUser').value;
//     let pass = document.getElementsById('txtPass').value;
//     if (email == 0 || pass == 0){
//         alert('Bạn cần kiểm tra lại Email hoặc Password');
//     } else {
//         alert('Bạn đăng nhập thành công');
//     }
// }

function join_num(){
    var t = document.getElementsByName("cost");
    // for (var i = 0; i < x.length; i++){
    //     if (x[i].checked == true){
    //         y[i].disabled = false;
    //     } else {
    //         y[i].disabled = true;
    //         y[i].value = 0;
    //         alert('Bỏ chọn mua hàng');
    //         t[i].innerHTML = "0 VNĐ";
    //         document.getElementById("sum").innerHTML =  "0 VNĐ";     
    //     }
    // }
    
    for (var i = 0; i < t.length; i++){
        var sum = 0;
        var tong = Number(y[i].value);
        sum += tong;
    }

    document.getElementById("sum").innerHTML = sum.toLocaleString() + " VNĐ";
   //document.getElementById("sum").innerHTML = 
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 3000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
        },

    autoplay: {
        delay: 5000,
    },
    transform: {
        duration: 5000
    }

});




