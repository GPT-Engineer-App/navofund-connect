import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ProjectsPage from "./pages/ProjectsPage";
import ChatboxPage from "./pages/ChatboxPage";
import SettingsPage from "./pages/SettingsPage";
import NewProjectPage from "./pages/NewProjectPage";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <Router>
      <Sidebar onToggle={toggleSidebar} isOpen={isSidebarOpen} />
      <Box ml={{ base: 0, md: 60 }} transition="margin-left 0.2s, background-color 0.2s" bg={isSidebarOpen ? "blue.800" : "transparent"}>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/chatbox" element={<ChatboxPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/new-project" element={<NewProjectPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
