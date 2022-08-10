 const  Datos= [{
    "id"  : "1",
    "articulo" :  "Conjunto a Cuadros ",
    
    "Stock"  : "15",
    "imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/cuadros.jpg"
    
},
{
    "id"  : "2",
    "articulo" :  "Estilo Tradicional ",
    
    "Stock"  : "10",
    "imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Tradicional.jpg"
},
{
    "id"  : "3",
    "articulo" :  "Saco largo ",
    
    "Stock"  : "12",
    "imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/9c213c12dfe2d92aeda21d5e5d6dc127--hombre-casual-look.jpg"
},
{
    "id"  : "4",
    "articulo" :  "Smoking Negro ",
    
    "Stock"  : "30",
    "imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Smoking.jpg"
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
