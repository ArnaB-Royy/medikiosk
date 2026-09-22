import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Interview from "./pages/Interview";
import Documents from "./pages/Documents";
import Summary from "./pages/Summary";
import DoctorDashboard from "./pages/DoctorDashboard";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [patientData, setPatientData] = useState({});
  const [isCaretaker, setIsCaretaker] = useState(false);
  const [mode, setMode] = useState("socrates");

  const goTo = (screen) => setScreen(screen);

  return (
    <div>
      {screen === "home" && <Home goTo={goTo} />}
      {screen === "login" && (
        <Login
          goTo={goTo}
          setIsCaretaker={setIsCaretaker}
          isCaretaker={isCaretaker}
          mode={mode}
          setMode={setMode}
          setPatientData={setPatientData}
        />
      )}
      {screen === "interview" && (
        <Interview
          goTo={goTo}
          isCaretaker={isCaretaker}
          mode={mode}
          setPatientData={setPatientData}
          patientData={patientData}
        />
      )}
      {screen === "documents" && (
        <Documents
          goTo={goTo}
          patientData={patientData}
          setPatientData={setPatientData}
        />
      )}
      {screen === "summary" && (
        <Summary
          goTo={goTo}
          patientData={patientData}
        />
      )}
      {screen === "doctor" && (
        <DoctorDashboard
          goTo={goTo}
          patientData={patientData}
        />
      )}
    </div>
  );
}