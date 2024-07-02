import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  GetProduct,
  updateProduct,
  deleteProduct,
} from "../../services/ProductService";
import { useEffect, useState } from "react";
const EditPage = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    imgUrl: "",
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetProduct(id);
        setProduct(data);
        // Inizializza formData con i valori del prodotto
        setFormData({
          title: data.title,
          imgUrl: data.imgUrl,
          price: data.price,
          quantity: data.quantity,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = await updateProduct(id, formData);
      console.log("Product updated successfully:", updatedProduct);
      // Gestisci la navigazione o aggiorna lo stato del componente se necessario
    } catch (error) {
      console.error("Error updating product:", error);
      // Gestisci l'errore o fornisci feedback all'utente
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      console.log("Product deleted successfully");
      setRedirect(true);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!product) {
    console.log("product", product);
    return <div>Caricamento...</div>;
  }
  if (redirect) {
    console.log("redirect", redirect);
    return <Navigate to="/create" />;
  }

  return (
    <div>
      <button onClick={handleDelete}>X</button>
      <h1>Modifica Prodotto #{id}</h1>

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Immagine:</label>
        <input
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
        />

        <label>Prezzo:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Quantità:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <button type="submit">Salva modifiche</button>
      </form>
    </div>
  );
};

export default EditPage;
