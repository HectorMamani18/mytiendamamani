const DetailData = [
 {
"id"   : "1",
"Precio"  : " 30.000",
"Descripcion" : ""
    },
{
"id"   : "2",
"Precio"  : " 50.000",
"Descripcion" : ""
    },



{
"id"   : "",
"Precio"  : " 20.000",
"Descripcion" : "3"

    },
{
    "id"   : "4",
"Precio"  : " 30.000",
"Descripcion" : ""
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







