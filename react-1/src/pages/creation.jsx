import { useState } from "react";

export default function Creation() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title.trim()) newErrors.title = "es necesario un titulo";
    if (!description.trim()) newErrors.description;
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Tarea creada correctamente");
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <h2>Agrege una nueva tarea</h2>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
        <textarea
          placeholder="description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
        <button type="submit">create</button>
      </form>
    </div>
  );
}
