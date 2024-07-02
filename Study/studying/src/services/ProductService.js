const PRODUCT_URL = "http://localhost:8080/product";

const FetchProducts = async () => {
  try {
    const response = await fetch(`${PRODUCT_URL}/getAll`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("data ", data);
    return data;
  } catch (e) {
    console.error("fetch error", e);
  }
};
const GetProduct = async (id) => {
  try {
    const response = await fetch(`${PRODUCT_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Product data:", data);
    return data;
  } catch (e) {
    console.error("fetch error", e);
  }
};


const createProduct = async (productData) => {
  try {
    const response = await fetch(`${PRODUCT_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Created product:", data);
    return data;
  } catch (e) {
    console.error("Error creating product:", e);
    throw e; // Rilancia l'errore per gestirlo nel componente chiamante se necessario
  }
};

const updateProduct = async (id, productData) => {
    try {
      const response = await fetch(`${PRODUCT_URL}/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      console.log("Updated product:", data);
      return data;
      
    } catch (e) {
        console.error("Error updating product:", e);
        throw e;
    }
};

const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${PRODUCT_URL}/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      console.log("Deleted product with id:", id);
      
    } catch (e) {
        console.error("Error deleting product:", e);
        throw e;
    }
}
export { FetchProducts, createProduct, GetProduct, updateProduct, deleteProduct };
