import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Box, Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterControls from "./components/FilterControls";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />

        <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>

          {/* Show filters only on the dashboard */}
          <Routes>
            <Route path="/admin-dashboard" element={<FilterControls />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;
