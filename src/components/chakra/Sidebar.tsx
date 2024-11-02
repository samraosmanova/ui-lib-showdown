// src/components/Sidebar.tsx
import { Box, VStack,  Text,} from "@chakra-ui/react";
import { FiClipboard, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Switch } from "../ui/switch";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box as="nav" w="250px" p="5"  borderRight="1px solid" borderColor="gray.200" height="100vh">
      <Text fontSize="xl" fontWeight="bold" mb="5">
        Chakra UI
      </Text>
      <VStack align="start">
        <div
          onClick={() => {
            navigate("/chakra/dashboard");
          }}
          style={{display: "flex", gap: "1rem", alignItems:"center", cursor: "pointer"}}
        >
          <FiHome />
          Dashboard
        </div>
        <div
          onClick={() => {
            navigate("/chakra/form");
          }}
          style={{display: "flex", gap: "1rem", alignItems:"center", cursor: "pointer"}}
        >
          <FiClipboard />
          Form
        </div>
      </VStack>

      <Switch marginTop={4}>Dark</Switch>
    </Box>
  );
};

export default Sidebar;
