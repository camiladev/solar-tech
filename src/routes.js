import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/listingClient";

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cadastro' component={() => <h1>Cadastro de clientes</h1>} />

            </Switch>
        </BrowserRouter>
    )
}