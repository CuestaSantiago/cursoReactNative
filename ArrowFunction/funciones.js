ejecutarOperacion=(fnOperacion)=>{
    let caja1=document.getElementById("txt1");
    let caja2=document.getElementById("txt2");
    caja1 = Number(caja1.value);
    caja2 = parseInt(caja2.value);
    fnOperacion(caja1,caja2);
}
sumar=function(a, b){
    let resultado = a+b;
    alert("El resultado es: "+resultado);
}

restar=(a,b)=>{
    let resultado = a-b;
    alert("El resultado es: "+resultado);
}

buscarMenor=(x,y)=>{
if (x>y) {
    alert(x+ " es mayor que "+ y);
}else{
    alert(x+ " es menor que "+ y);
}
}