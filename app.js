function insert(number){
    document.form.screen.value = document.form.screen.value + number;
}

function remove(){
    document.form.screen.value = document.form.screen.value.slice(0, -1);
}

function clearing(){
    document.form.screen.value = "";
}

function calculate(){
    let exp = document.form.screen.value;
    if(exp){
        document.form.screen.value = eval(exp);
    }
}