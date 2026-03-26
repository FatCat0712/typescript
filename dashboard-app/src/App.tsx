import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserTable from "./components/UserTable";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-4 overflow-y-auto flex-1">
            <UserTable />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
