import type { TPage } from "../Types";

type Props = {
  onNavigate: (page: TPage) => void;
};

const Sidebar = ({ onNavigate }: Props) => {
  return (
    <aside className="bg-gray-900 text-white w-60 p-4 space-y-4 h-screen">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <button
          className="hover:bg-gray-700 px-3 py-2 rounded text-left"
          onClick={() => onNavigate("tasks")}
        >
          📑Tasks
        </button>
        <button
          className="hover:bg-gray-700 px-3 py-2 rounded text-left"
          onClick={() => onNavigate("users")}
        >
          👩🏻‍💼Users
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
