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
        saveHistory();
        document.form.screen.value = eval(exp);
    }
}

function saveHistory() {
    const list = document.getElementById("history");
    let exp = document.form.screen.value + "=" + eval(document.form.screen.value);
    if(exp){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(exp));
        list.appendChild(li);
    }
}
