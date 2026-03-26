const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 shadow px-6 py-3">
      <h1 className="text-xl font-bold text-white">Dashboard App</h1>
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />

        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
