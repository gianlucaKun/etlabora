import React, { useState } from "react";

const CreateForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formCreate">
      <h2>Form di Creazione Prodotti</h2>
      <div className="form-group">
        <label htmlFor="title">Titolo:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imgUrl">URL dell'immagine:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Prezzo:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Crea Prodotto</button>
    </form>
  );
};

export default CreateForm;
