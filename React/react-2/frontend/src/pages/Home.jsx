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
    landlinephone: "",
    email: "",
    nationalestate: "",
  });

  // Modal de confirmación de eliminación
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Traer usuarios
  const fetchUsuarios = () => {
    fetch("http://localhost:3000/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Crear
  const handleCreate = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      surname: "",
      direction: "",
      phone: "",
      landlinephone: "",
      email: "",
      nationalestate: "",
    });
    setShowForm(true);
  };

  // Editar
  const handleEdit = (usuario) => {
    setEditingUser(usuario);
    setFormData({ ...usuario });
    setShowForm(true);
  };

  // Abrir modal de eliminación
  const handleDelete = (usuario) => {
    setUserToDelete(usuario);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    fetch(`http://localhost:3000/api/usuarios/${userToDelete.id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchUsuarios();
        setShowDeleteModal(false);
        setUserToDelete(null);
      })
      .catch((err) => console.error(err));
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  // Crear / actualizar
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Usuarios</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow"
        >
          + Crear Usuario
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
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
                Tel. Fijo
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usuarios.map((usuario) => (
              <tr
                key={usuario.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  {usuario.id}
                </td>
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
                  {usuario.landlinephone}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {usuario.email}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      usuario.nationalestate === "casado"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {usuario.nationalestate}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(usuario)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition shadow"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(usuario)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition shadow"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de creación / edición */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg animate-fadeIn"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
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
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Apellido"
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Dirección"
                value={formData.direction}
                onChange={(e) =>
                  setFormData({ ...formData, direction: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="tel"
                placeholder="Tel. Fijo"
                value={formData.landlinephone}
                onChange={(e) =>
                  setFormData({ ...formData, landlinephone: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
              <select
                value={formData.nationalestate}
                onChange={(e) =>
                  setFormData({ ...formData, nationalestate: e.target.value })
                }
                className="border px-3 py-2 rounded-lg w-full col-span-2 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              >
                <option value="">Estado</option>
                <option value="casado">Casado</option>
                <option value="soltero">Soltero</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400 transition shadow"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow"
              >
                {editingUser ? "Guardar Cambios" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md text-center animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              ¿Estás seguro de eliminar a {userToDelete.name}?
            </h3>
            <p className="text-gray-600 mb-6">
              Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg transition shadow"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition shadow"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
