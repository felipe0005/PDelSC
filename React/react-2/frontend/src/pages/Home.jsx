import { useEffect, useState } from 'react';

export default function UsuariosTable() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('/api/usuarios')
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Usuarios</h2>
      <table className="min-w-full border border-gray-200 shadow-lg rounded-2xl overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Apellido</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Dirección</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Teléfono</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Tel. Personal</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Estado</th>
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
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.surname}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.direction}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.phone}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.personalphone}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{usuario.email}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    usuario.nacionalestate === 'Activo'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {usuario.nacionalestate}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
