import { useEffect, useState } from "react";

export default function UsuariosABMLC() {
  const [usuarios, setUsuarios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    direction: "",
    phone: "",
    personalphone: "",
    email: "",
    nacionalestate: "",
  });

  const fetchUsuarios = () => {
    fetch("http://localhost:3000/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleCreate = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      surname: "",
      direction: "",
      phone: "",
      personalphone: "",
      email: "",
      nacionalestate: "",
    });
    setShowForm(true);
  };

  const handleEdit = (usuario) => {
    setEditingUser(usuario);
    setFormData({ ...usuario });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("¿Seguro que querés eliminar este usuario?")) return;
    fetch(`http://localhost:3000/api/usuarios/${id}`, { method: "DELETE" })
      .then(() => fetchUsuarios())
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editingUser ? "PUT" : "POST";
    const url = editingUser
      ? `http://localhost:3000/api/usuarios/${editingUser.id}`
      : "http://localhost:3000/api/usuarios";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        fetchUsuarios();
        setShowForm(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Usuarios</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Crear Usuario
        </button>
      </div>

      <table className="min-w-full border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Apellido
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Dirección
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Teléfono
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Tel. Personal
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {usuarios.map((usuario) => (
            <tr
              key={usuario.id}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.id}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-800">
                {usuario.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {usuario.surname}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {usuario.direction}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {usuario.phone}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {usuario.personalphone}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {usuario.email}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    usuario.nacionalestate === "casado"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {usuario.nacionalestate}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-2">
                <button
                  onClick={() => handleEdit(usuario)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(usuario.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
          >
            <h3 className="text-xl font-bold mb-4">
              {editingUser ? "Editar Usuario" : "Crear Usuario"}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
                required
              />
              <input
                type="text"
                placeholder="Dirección"
                value={formData.direction}
                onChange={(e) =>
                  setFormData({ ...formData, direction: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Tel. Personal"
                value={formData.personalphone}
                onChange={(e) =>
                  setFormData({ ...formData, personalphone: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border px-3 py-2 rounded w-full"
                required
              />
              <select
                value={formData.nacionalestate}
                onChange={(e) =>
                  setFormData({ ...formData, nacionalestate: e.target.value })
                }
                className="border px-3 py-2 rounded w-full col-span-2"
                required
              >
                <option value="">Estado</option>
                <option value="casado">Casado</option>
                <option value="soltero">Soltero</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {editingUser ? "Guardar Cambios" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
