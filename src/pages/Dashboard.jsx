import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Welcome back, Alchemist ✨
          </h2>
          <DashboardCards />
        </main>
      </div>
    </div>
  );
}
