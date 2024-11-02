import { NavLink } from "react-router-dom";
import { Button, Box } from "@radix-ui/themes";

export default function Sidebar() {
  return (
    <Box
      style={{
        width: "250px",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <NavLink to="/radix" style={{ textDecoration: "none" }}>
          <Button variant="ghost" style={{ width: "100%" }}>
            Dashboard
          </Button>
        </NavLink>
        <NavLink to="/radix/users" style={{ textDecoration: "none" }}>
          <Button variant="ghost" style={{ width: "100%" }}>
            Users
          </Button>
        </NavLink>
        <NavLink to="/radix/settings" style={{ textDecoration: "none" }}>
          <Button variant="ghost" style={{ width: "100%" }}>
            Form
          </Button>
        </NavLink>
      </nav>
    </Box>
  );
}
