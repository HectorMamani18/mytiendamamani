const DetailData = [
 {
"id"   : "1",
"Precio"  : " 30.000",
"imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/cuadros.jpg"
    },
{
"id"   : "2",
"Precio"  : " 50.000",
"imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Tradicional.jpg"
    },
{
"id"   : "",
"Precio"  : " 20.000",
"imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/9c213c12dfe2d92aeda21d5e5d6dc127--hombre-casual-look.jpg"

    },
{
    "id"   : "4",
"Precio"  : " 30.000",
"imagen"  : "https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Smoking.jpg"
    }

]
const getFetc = new Promise ((resolver, rechazar)=>{
    let condition=true
if(condition){
    setTimeout(()=>{
        resolver(DetailData)
    },2000);
}
else{
    rechazar(console.log("No se Encontraron Datos"))
}
})
export default getFetc ;







