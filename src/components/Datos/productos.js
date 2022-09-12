import {DB} from './productosFireBase'
import { collection,getDocs,where,query } from 'firebase/firestore';




  async  function prodData(DB){
    const getCollection = collection(DB, 'productos');
    const data = await getDocs(getCollection);
    const firestoreData = data.docs.map(item => item.data());
    return firestoreData;
}
export const getFetch = new Promise( (res, rej) => { 
    let condition = true
    if (condition) {
        res(prodData(DB))
    } else {
        rej(console.log('Ocurrio un error, reinicie la pagina.'))
    }
});

export const getItemById = async (idItem) => {

    const q = query(collection(DB, "productos"), where("id", "==", idItem));

    const querySnapshot = await getDocs(q);

    const firestoreData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));


    return new Promise ((resolve, reject) => { 

        resolve(firestoreData)

    })
}

export const getItemByCategory = async (idCategory) => {

    const q = query(collection(DB, "productos"), where("categoria", "==", idCategory));

    const querySnapshot = await getDocs(q);

    const firestoreData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));


    return new Promise ((resolve, reject) => { 

        resolve(firestoreData)

    })
}