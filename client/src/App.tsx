import { RouterProvider } from "react-router-dom";
import "./App.css";
import { KeySignaturesProvider } from "./contexts/KeySignaturesContext";
import { router } from "./Router";
import { ChosenKeyProvider } from "./contexts/ChosenKeyContext";

function App() {
  return (
    <>
      <KeySignaturesProvider>
        <ChosenKeyProvider>
          <RouterProvider router={router}></RouterProvider>
        </ChosenKeyProvider>
      </KeySignaturesProvider>
    </>
  );
}

export default App;
