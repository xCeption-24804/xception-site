import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { MembersPage } from "./pages/MembersPage";
import { HardwarePage } from "./pages/HardwarePage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/robot" element={<HardwarePage />} />
      </Route>
    </Routes>
  );
}
