import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Sidebar from "./components/radix/Sidebar";
import Dashboard from "./components/radix/Dashboard";
import Users from "./components/radix/Users";
import Form from "./components/radix/Form";
import "./index.css";
import "@radix-ui/themes/styles.css";

export default function RadixApp() {
  return (
    <Theme accentColor="jade" grayColor="sand" panelBackground="solid" radius="small" scaling="90%">
      <ThemePanel />
      <Router>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <div style={{ flexGrow: 1, padding: "20px" }}>
            <Routes>
              <Route path="/radix" element={<Dashboard />} />
              <Route path="/radix/users" element={<Users />} />
              <Route path="/radix/settings" element={<Form />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Theme>
  );
}
