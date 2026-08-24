import React from "react";
import StudentCard from "./components/studentcard.jsx";

function App() {
  return (
    // Changed bg-gray-50 to bg-slate-950 to make the whole app dark theme
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <StudentCard
        name="Mari"
        studname="Chillz"
        age={20}
        bday="09/28/2005"
        course="BSIT"
      />
    </div>
  );
}

export default App;
