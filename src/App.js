import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertyList from "./pages/PropertyList/PropertyList";
import BookingForm from "./pages/BookingForm/BookingForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={PropertyList} />
        <Route path="/booking/:propertyID" Component={BookingForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
