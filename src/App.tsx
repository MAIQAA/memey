import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import BluePillSection from "./pages/blue-pill/bluePillPage";
import RedPillSection from "./pages/red-pill/redPillPage";
import HelpSection from "./pages/help/helpPage";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicyPage";
import WalkThrough from "./pages/walkthrough/walkThroughPage";

function App() {
  return (
    <main className="mt-16 md:mt-[4.15rem]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red-pill" element={<RedPillSection />} />
        <Route path="/blue-pill" element={<BluePillSection />} />
        <Route path="/help" element={<HelpSection />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/walkthrough" element={<WalkThrough />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </main>
  );
}

export default App;
