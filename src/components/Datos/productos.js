 const  Datos = [{
    
    id : 1,
    categoria: 2,
    Precio: 30.000,
    articulo :  "Conjunto a Cuadros ",
    Stock : 15,
    imagen  : [{
        id:0,
        src: 'https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/cuadros.jpg' } ]
    
},
{
    id  :2,
    categoria:1,
    Precio: 30.000,
    articulo :  "Estilo Tradicional ",
    Stock  : 10,
    imagen : [{
        id:0,
        src:"https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Tradicional.jpg"}]
},
{
    id  : 3,
    categoria:1,
    Precio: 30.000,
    articulo :  "Saco largo ",
    Stock  : 12,
    imagen  : [{
        id:0,
        src:"https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/9c213c12dfe2d92aeda21d5e5d6dc127--hombre-casual-look.jpg"}]
},
{
    id  : 4,
    categoria:2,
    Precio: 30.000,
    articulo :  "Smoking Negro ",
    Stock  : "30",
    imagen  : [{
        id:0,
        src:"https://raw.githubusercontent.com/HectorMamani18/mytiendamamani/master/public/img/Smoking.jpg"}]
},

]


export default Datos ;


export function prodData(category){
    console.log('>Category',category)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (category){
                resolve(Datos.filter(prod=> prod.categoria === category));

            }else {
                resolve(Datos);
            }
        })
    })

}

export function  getItem (id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Datos.find(prod=>prod.id===id));
        }, 2000);
    });
}

