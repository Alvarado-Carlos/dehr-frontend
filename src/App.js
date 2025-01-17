import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    About,
    Patients,
    DoctorsForm,
} from "./components";
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route
                        path="/patients"
                        exact
                        component={() => <Patients />}
                    />
                    <Route
                        path="/doctors"
                        exact
                        component={() => <DoctorsForm />}
                    />
                    <Route path="/about" exact component={() => <About />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
