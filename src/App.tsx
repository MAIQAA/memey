import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./home/home";
import BluePillSection from "./blue-pill/bluePillPage";
import RedPillSection from "./red-pill/redPillPage";
import HelpSection from "./help/helpPage";
import PrivacyPolicy from "./privacyPolicy/privacyPolicyPage";
import WalkThrough from "./walkthrough/walkThroughPage";
import FAQPage from "./faq/faqPage";

import { FaCircleChevronUp } from "react-icons/fa6";
import SmoothScrollLink from "./components/SmoothScrollLink";

function App() {
  return (
    <main className="mt-16 md:mt-[4.15rem]" id="top">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red-pill" element={<RedPillSection />} />
        <Route path="/blue-pill" element={<BluePillSection />} />
        <Route path="/help" element={<HelpSection />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/walkthrough" element={<WalkThrough />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>

      <SmoothScrollLink href="#top">
        <FaCircleChevronUp
          className="fixed bottom-10 right-7 animate-bounce z-50 bg-white"
          size={45}
        />
      </SmoothScrollLink>
    </main>
  );
}

export default App;
