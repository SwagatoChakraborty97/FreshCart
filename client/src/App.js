import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleCategory from "./components/SingleCategory/SingleCategory";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/category/:id" element={<SingleCategory/>}></Route>
                <Route path="/product/:id" element={<SingleProduct/>}></Route>
            </Routes>
            <Newsletter></Newsletter>
            <Footer></Footer>
            </AppContext>
        </BrowserRouter>
    );
}
export default App;


