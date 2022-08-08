 const  Datos= [{
    "id"  : "1",
    "articulo" :  "Conjunto a Cuadros ",
    "Precio"  : " 30.000",
    "Stock"  : "15",
    "imagen"  : "public\img\cuadros.jpg"
},
{
    "id"  : "2",
    "articulo" :  "Estilo Tradicional ",
    "Precio"  : " 50.000",
    "Stock"  : "10",
    "imagen"  : ""
},
{
    "id"  : "3",
    "articulo" :  "Saco largo ",
    "Precio"  : " 20.000",
    "Stock"  : "12",
    "imagen"  : ""
},
{
    "id"  : "4",
    "articulo" :  "Smoking Negro ",
    "Precio"  : " 30.000",
    "Stock"  : "30",
    "imagen"  : ""
},

]

const getFetch = new Promise ((resolver, rechazar)=>{
    let condition=true
if(condition){
    setTimeout(()=>{
        resolver(Datos)
    },2000);
}
else{
    rechazar(console.log("No se Encontraron Datos"))
}
})
export default getFetch ;
