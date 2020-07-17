import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// import TweetList from './pages/TweetList';
import Layout from './components/Layout';


export default function Routes() {
    return (
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Layout}/>
               {/* <Route path="/layout" component={Layout}/> */}
           </Switch>
        </BrowserRouter>
    );
}


