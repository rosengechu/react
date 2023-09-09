import React from "react";
import NavigationBar from "./components/navigationbar";
import MainSection from "./components/mainsection";
import Footer from "./components/footer";

const App = () => {
    return(
        <div>
            <NavigationBar/>
            <MainSection/>
            <Footer/>
        </div>
    )
}

export default App;