//alert("hgmntr");

//alert(a);


function guess() {
    var a = prompt("Введите число");
    if (a > 5) {
        alert("chislo menshe ");
        return guess();
    } else if (a == 5) {
        return alert("molodets");
    } else {
        alert("chislo bolshe ");
        return guess();
    }
}

guess();
