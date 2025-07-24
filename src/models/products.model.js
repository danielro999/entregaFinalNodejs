import { db } from "../data/data.js";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  enableNetwork,
  setDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "productos");

export async function getAllProducts() {
  const querySnapshot = await getDocs(productsCollection);
  // console.log(querySnapshot)
  const products = [];
  querySnapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
  /*   {        
        console.log(doc.data() + doc.id)
    }) */
  console.log(products);
  return products;
}

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const productDoc = await getDoc(productRef);
    if (productDoc.exists) {
      return productDoc.data(); // el objeto sin el id, con id => { productDoc.id, product.data()}
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createProductModel = async (product) => {
  try {
    await addDoc(productsCollection, product);
    return product;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const productDoc = await getDoc(productRef);
    if (productDoc.exists) {
      await deleteDoc(productRef);
      return productDoc.data(); // el objeto sin el id, con id => { productDoc.id, product.data()}
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

//put
export const updarteProduct = async (id, product) => {
  try {
    const productRef = doc(productsCollection, id);
    const productDoc = await getDoc(productRef);
    if (productDoc.exists()) {
      await setDoc(productRef, product);
      return { id, ...product };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
