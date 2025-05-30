// let mahasiswa = {
//     nama: 'Lela Marlinda',
//     nim: '2217020128',
//     email: 'lelamarlinda123@gmail.com'

// }
// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText); //jsonparse untuk menjadikan json ke objek
//         console.log(mahasiswa);

//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(data){
    console.log(data);
});