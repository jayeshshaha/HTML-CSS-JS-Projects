let item = document.getElementsByClassName('container');
console.log(item);

let show =  document.getElementsByClassName('show');
let hide =  document.getElementsByClassName('hide');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click',()=>{
        // item[i].classList.toggle('active');
        let result = item[i].classList.toggle('active');
        if(result == true){
            show[i].style.display='none';
            hide[i].style.display='block';
        }
        else{
            show[i].style.display='block';
            hide[i].style.display='none';
        }
    })
}

// let item = document.querySelector('.container'); // Select the element with class 'container'

// item.addEventListener('click', () => {
//     item.classList.toggle('active');
// });