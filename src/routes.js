import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ClienteVisualizar from './components/cliente.visualizar';
import ClienteLista from './components/cliente.lista';

const Routes= ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=><h1>Home</h1>} />
            <Route exact path="/cliente" component={ClienteLista} />          
            <Route exact path="/cliente/novo" component={ClienteVisualizar} />                 
            <Route exact path="/cliente/:id" component={ClienteVisualizar} />
        </Switch>
    </BrowserRouter>    
);
export default Routes;