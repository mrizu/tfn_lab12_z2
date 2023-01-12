import './App.css';
import { Routes, Route } from "react-router-dom";
import { Add, Sub, Mul, Div } from "./Calculator";

export default function App() {
  return (
    <Routes>
      <Route path="add/:a/:b" element={<Add />}/>
      <Route path="sub/:a/:b" element={<Sub />}/>
      <Route path="mul/:a/:b" element={<Mul />}/>
      <Route path="div/:a/:b" element={<Div />}/>
    </Routes>
  );
}
