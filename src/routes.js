import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ClientProvider } from "./contexts/ClientContext";
import CreateClient from "./pages/createClient";
import UpdateClient from "./pages/editClient";
import Home from "./pages/listingClient";

export default function Routes(){

    return(
        <BrowserRouter>
        <ClientProvider>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cadastro' component={CreateClient} />
                <Route path='/editar' component={UpdateClient} />

            </Switch>
        </ClientProvider>
        </BrowserRouter>
    )
}