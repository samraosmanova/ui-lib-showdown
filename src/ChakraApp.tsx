import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import { Theme } from "@chakra-ui/react";
import Sidebar from "./components/chakra/Sidebar";
import Form from "./components/chakra/Form";
import Dashboard from "./components/chakra/Dashboard";
import Users from "./components/chakra/Users";

export default function ChakraApp() {
  return (
    <Provider>
      <Theme >
        <Router>
          <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar />
            <div style={{ flexGrow: 1, padding: "20px", overflowY: "scroll" }}>
              <Routes>
                <Route path="/chakra/dashboard" element={<Dashboard />} />
                <Route path="/chakra/users" element={<Users />} />
                <Route path="/chakra/form" element={<Form />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Theme>
    </Provider>
  );
}


