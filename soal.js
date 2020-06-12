let array1 = ['Math' , 'English' , 'Programming'];
let array2 = ['Geography' , 'Spanish' , 'Programming'];

function check (){
    array1.forEach((e) => 
    array2.forEach((i) => {
       if (e === i) {
           let result = true;
           console.log(result);
       } else {
           return false;
       } 
    }));
    
}

check();