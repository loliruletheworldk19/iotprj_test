

// load-data-circle

let circle_data = document.getElementById('circle_data');
let count_data = 69;
let count = 0;
setInterval (() => {
    if(count == count_data){
        clearInterval();  
    }else {
        count += 1;
        circle_data.innerHTML = count + "%";
    } 
},28);