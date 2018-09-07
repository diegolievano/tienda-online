
var item = `<div class="card col-md-3" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Cantidad: <span class="cantidad"></span></p>
  <p class="card-text">Precio: <span class="precio"></span></p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

var itemtabla =`<tr class="item-car"><td><img></td>
<td class="nombre"></td>
<td class=""><span class="cantida"></span></td>
<td class=""></td>
<td></td>
<td class=""></td></tr>`;

var todosProductos = [
{
img : 'img/1.jpg',
nombre : 'Martillo',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/2.jpg',
nombre : 'Martillo Acero',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/4.jpg',
nombre : 'Serrucho',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/77459434PDM001G.jpg',
nombre : 'Pala',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0

},
{
img : 'img/garden-machete.png',
nombre : 'Machete-garden',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/MOTOSIERA_de_gasolina_Poda.jpg',
nombre : 'Motesierra-poda',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/motosierra_STIHL.jpg',
nombre : 'Motosierra',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/pala_coa_mangoDeMadera.jpg',
nombre : 'Pala',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/tramontina-machete.jpg',
nombre : 'Machete-tremontina',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
},
{
img : 'img/serrucho_de_poda_plegable.jpg',
nombre : 'Serrucho -poda',
precio : 100,
cantidad : 2,
carrito: false,
cantidadCarrito:0
}
];

for(i=0; i < todosProductos.length; i++){
$("#productos").append(item);
card = $(".card").get(i);
$(card).find(".card-img-top").attr("src", todosProductos[i].img);
$(card).find(".card-title").html(todosProductos[i].nombre);
$(card).find(".cantidad").html(todosProductos[i].cantidad);
$(card).find(".precio").html(todosProductos[i].precio);
$(card).find(".btn").attr("onClick", "agregar("+i+")").html("Agregar");
}
//aqui va el codigo
function agregar(idProducto){
alert(todosProductos[idProducto].nombre);
alert("Cantidad "+todosProductos[idProducto].cantidad);
if(todosProductos[idProducto].cantidad >0)
{
if(todosProductos[idProducto].carrito==true)
{
todosProductos[idProducto].cantidadCarrito=todosProductos[idProducto].cantidadCarrito+1;
todosProductos[idProducto].cantidad= todosProductos[idProducto].cantidad-1;
subtotal=todosProductos[idProducto].cantidadCarrito*todosProductos[idProducto].precio;
$("#pro"+idProducto).find(".cantida").html(todosProductos[idProducto].cantidadCarrito)
$("#pro"+idProducto).find(".subtotal .subtotal").html(subtotal);
card = $(".card").get(idProducto);
$(card).find(".cantidad").html(todosProductos[idProducto].cantidad) //Actualizar stock
calculartotal();
}else {
alert("Agregar al carrito");
todosProductos[idProducto].cantidad= todosProductos[idProducto].cantidad-1;
card = $(".card").get(idProducto);
$(card).find(".cantidad").html(todosProductos[idProducto].cantidad)
//alert("candidada Disponible "+ productos[id].cantidad);

todosProductos[idProducto].cantidadCarrito=todosProductos[idProducto].cantidadCarrito+1;
//alert("cantidad en carrito "+productos[id].cantidadCarrito);

subtotal=todosProductos[idProducto].cantidadCarrito*todosProductos[idProducto].precio;
itemtabla+='<tr id="pro'+idProducto+'" class="item-car"><td><img width="50" height="50" src="'+todosProductos[idProducto].img+'"></td>'
+'<td class="nombre">'+todosProductos[idProducto].nombre+'</td>'
+'<td class="cantidad"><span class="cantida">'+todosProductos[idProducto].cantidadCarrito+'</span></td>'
+'<td class="precio">'+todosProductos[idProducto].precio+'</td>'
+'<td>'
+ '<button onclick="mas('+idProducto+')"  class="sumar-cantidad btn btn-success">+</button>'
+'<button onclick="menos('+idProducto+')"  class="restar-cantidad btn btn-danger">-</button>'
+'</td>'
+'<td class="subtotal"><span class="subtotal">'+subtotal+'</span></td></tr>'
$(".table").html(itemtabla);


calculartotal();

}
}
else
{
alert("ya no hay "+ todosProductos[idProducto].nombre +" Disponible")
}
todosProductos[idProducto].carrito=true;
//alert("Carrito "+productos[id].carrito);
}

function calculartotal(){
var subttotal=0;
var iva=0;
var total=0;

$(".subtotal .subtotal").each(function(index){
console.log(index+" : "+$( this ).text());
var subt=parseInt($(this).text());

subttotal=subttotal+subt;
});
iva=subttotal*0.16;
total=subttotal+iva;
$("#iva").html(iva);
$("#total").html(total);
}


function mas(id){
if(todosProductos[id].cantidad==0)
{
alert("ya no hay "+ todosProductos[id].nombre +" Disponible");
}else{
todosProductos[id].cantidadCarrito=todosProductos[id].cantidadCarrito+1;
todosProductos[id].cantidad= todosProductos[id].cantidad-1;
subtotal=todosProductos[id].cantidadCarrito*todosProductos[id].precio;
$("#pro"+id).find(".cantida").html(todosProductos[id].cantidadCarrito)
$("#pro"+id).find(".subtotal .subtotal").html(subtotal)

card = $(".card").get(id);
$(card).find(".cantidad").html(todosProductos[id].cantidad) //Actualizar stock

calculartotal();
}
}
function menos(id){
if(todosProductos[id].cantidadCarrito==0){
$("#pro"+id).remove();
calculartotal();
}else {
todosProductos[id].cantidad= todosProductos[id].cantidad+1;
subtotal=todosProductos[id].cantidadCarrito*todosProductos[id].precio;
$("#pro"+id).find(".cantida").html(todosProductos[id].cantidadCarrito)
$("#pro"+id).find(".subtotal .subtotal").html(subtotal)

card = $(".card").get(id);
$(card).find(".cantidad").html(todosProductos[id].cantidad) //Actualizar stock
todosProductos[id].cantidadCarrito=todosProductos[id].cantidadCarrito-1;

calculartotal();
}
}
