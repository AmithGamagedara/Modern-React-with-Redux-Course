import { useState } from "react";
import DropDown from "./components/DropDown";
import AccordionPage from "./pages/AccordionPage";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <div className="p-3 text-2xl text-center font-bold text-gray-700">
        DropDown Application
      </div>
      <div className="mb-8">
        <AccordionPage />
      </div>
      <div className="flex">
        <DropDown
          options={options}
          selection={selection}
          onSelect={handleSelection}
        />
        <DropDown
          options={options}
          selection={selection}
          onSelect={handleSelection}
        />
      </div>
    </div>
  );
}

export default App;
