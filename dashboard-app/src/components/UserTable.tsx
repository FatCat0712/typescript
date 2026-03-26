import { useMemo } from "react";
import { useTasks } from "../hooks/useTasks";

type Props = {
  search?: string;
};

const UserTable = ({ search }: Props) => {
  const {
    state: { users },
  } = useTasks();

  const filteredUsers = useMemo(() => {
    if (!search) return users;
    const lowerSearch = search.toLowerCase();
    return users.filter((user) =>
      user.name.toLowerCase().includes(lowerSearch),
    );
  }, [users, search]);

  return (
    <div className="overflow-x-auto bg-gray-800 rounded shadow">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700">ID</th>
            <th className="px-4 py-2 border-b border-gray-700">Name</th>
            <th className="px-4 py-2 border-b border-gray-700">Email</th>
            <th className="px-4 py-2 border-b border-gray-700">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-b border-gray-700">
                  {user.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  {user.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  {user.role}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 border-b border-gray-700" colSpan={4}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
