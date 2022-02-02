function task1() {

    let pascal = +prompt("Введіть тиск в Паскалях: ");
    if(isNaN(pascal)){
        alert("Error!!")
    }
    else {
    let bar =  pascal * 0.000010;
    let atm = pascal * 0.0000098692326671601;
    let mmHg = pascal * 0.0075006375541921;
    alert(pascal + "Па = " + bar +  " bar = " + atm + " atm = " + mmHg + " mmHg");
   
    console.log(`${pascal}` + "Па = " + `${bar}` +  " bar = " + `${atm}` + " atm = " + `${mmHg}` + " mmHg");
    }
}
function task2() {
    let a, b, percent;
    a = +prompt("Перше число");
    b = +prompt("Друге число");
    percent = a % b;
    if (isNaN(a) || isNaN(b) || b == 0){
        alert("Error!!")
    }
    else if(percent == 0)
    {
        alert("Числа діляться без остачі," + " частка від ділення = " + a / b);
        console.log("Числа діляться без остачі," + " частка від ділення = " + a / b);
    }
    else if(percent){
        alert("Числа діляться з остачею = " + percent + ", " + " частка від ділення = " + a / b);
        console.log("Числа діляться з остачею = " + percent + ", " + " частка від ділення = " + a / b);
    }
   
}