import { useState } from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import TaskProvider from "./context/TaskContext";
import type { TPage } from "./Types";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [taskQuery, setTaskQuery] = useState("");

  const [page, setPage] = useState<TPage>();

  return (
    <TaskProvider>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar onNavigate={setPage} />
        <div className="flex flex-col flex-1">
          <Header />
          {page === "users" && (
            <Searchbar
              onDebounceChange={setUserQuery}
              placeholder="Search user by name"
            />
          )}

          {page === "tasks" && (
            <>
              <TaskForm />
              <Searchbar
                onDebounceChange={setTaskQuery}
                placeholder="Search tasks"
              />
              <TaskList taskQuery={taskQuery} />
            </>
          )}

          <main className="p-4 overflow-y-auto flex-1">
            {page === "users" && <UserTable search={userQuery} />}
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
