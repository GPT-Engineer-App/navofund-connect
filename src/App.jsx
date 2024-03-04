import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <Box ml={{ base: 0, md: 60 }}>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
