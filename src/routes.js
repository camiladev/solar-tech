import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateClient from "./pages/createClient";
import Home from "./pages/listingClient";

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cadastro' component={CreateClient} />

            </Switch>
        </BrowserRouter>
    )
}