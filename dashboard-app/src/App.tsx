import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import TaskProvider from "./context/TaskContext";

function App() {
  const [userQuery, setUserQuery] = useState("");

  return (
    <TaskProvider>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <Searchbar
            onDebounceChange={setUserQuery}
            placeholder="Search user by name"
          />
          <main className="p-4 overflow-y-auto flex-1">
            <UserTable search={userQuery} />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
