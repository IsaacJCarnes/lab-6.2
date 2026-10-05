import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";

function callApi(promise: Promise<any>): Promise<any> {
  return promise
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
let products
let productReviews 
let salesReport
async function getProducts() {
  try {
    products = await callApi(fetchProductCatalog());
    if (products === false) {
      console.log("Could not get product catalog");
      return;
    }
   await getProductsRatings(products);
  } catch (e) {
    console.log(e);
  }
}

async function getProductsRatings(
  products: { id: number; name: string; price: number }[],
) {
  try {
    productReviews = await Promise.allSettled(
      products.map((product) => callApi(fetchProductReviews(product.id))),
    );
    await getSalesReport();
    return
  } catch (e) {
    console.log(e);
  }
}

async function getSalesReport() {
  try {
    salesReport = await callApi(fetchSalesReport());
    return
  } catch (e) {
    console.log(e);
  }
}

try{
    await getProducts();
} catch (e) {
    console.log(e)
} finally {
    console.log("All API calls have been attempted.")
}
