import React from "react";
import CreateForm from "../../components/form/CreateForm";
import { createProduct } from "../../services/ProductService"; 
import './CreatePage.css'
const CreatePage = () => {
  const initialValues = {
    title: "",
    imgUrl: "",
    price: 0,
  };

  const handleSubmit = async (formData) => {
    try {
      const createdProduct = await createProduct(formData);
      console.log("Prodotto creato con successo:", createdProduct);
  
    } catch (error) {
      console.error("Errore durante la creazione del prodotto:", error);
    }
  };

  return (
    <div className="pageContainer">
    <div className="containerCreate">
      <CreateForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
    </div>
  );
};

export default CreatePage;
