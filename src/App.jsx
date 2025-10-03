import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Reminders from "./pages/Reminders";
// import Wellness from "./pages/Wellness";
// import Settings from "./pages/Settings";

function App() {
  return (
    // <Routes>
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/reminders" element={<Reminders />} />
    //   <Route path="/wellness" element={<Wellness />} />
    //   <Route path="/settings" element={<Settings />} />
    // </Routes>
    <div>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App;
