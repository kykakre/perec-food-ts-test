import React from 'react';
import "./style/style.scss";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Title from "./components/Titile/Title";
import ProductContainer from "./components/ProductContainer/ProductContainer"
import FormAddProduct from "./components/FormAddProduct/FormAddProduct";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <FormAddProduct/>
                <Title/>
                <ProductContainer/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
