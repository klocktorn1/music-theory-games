import { RouterProvider } from "react-router-dom";
import "./App.css";
import { KeySignaturesProvider } from "./contexts/KeySignaturesContext";
import { router } from "./Router";

function App() {
  return (
    <>
      <KeySignaturesProvider>
        <RouterProvider router={router}></RouterProvider>
      </KeySignaturesProvider>
    </>
  );
}

export default App;
