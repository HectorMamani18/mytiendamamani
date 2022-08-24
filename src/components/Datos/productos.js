import {DB} from './productosFireBase'
import { collection,getDocs } from 'firebase/firestore';

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
   
    return new Promise((resolve, reject) => {
        const colRef= collection(DB,'productos');
        getDocs(colRef).then((snapshot)=>{
            console.log('>> snapshot.docs',snapshot.docs)
        const formatprod = snapshot.docs.map((rawDoc)=>{
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        });
    console.log('>> productos:', formatprod);
    resolve(formatprod);    
    
    }, (error)=>{
        reject('>> error:', error)
    });
    });

}
export async function prodDataid (category) {

    let response = [];
  
    const colRef = collection(DB,'productos');

    try {
        const snapshot = await getDocs(colRef); 

        response = snapshot.docs.map((rawDoc) => {
            return {
                id: rawDoc.id,
                ...rawDoc.Datos()
            }
        });
        
    } catch (err) {
        console.log('>> Error al intentar traer los docs: ', err);
    } 
    return response;
}

export function  getItem (id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Datos.find(prod=>prod.id===id));
        }, 2000);
    });
}


