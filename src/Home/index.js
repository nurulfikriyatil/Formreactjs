import React from 'react';
import { Route } from 'react-router-dom';
import ProfileInput from './Stateful Component/ProfileInput'
//import ProfileInput from './Stateless Component/ProfileInput'


const Main = ({ match }) => (
    <div>
        <Route path={`${match.url}/profile`} component={ProfileInput} />
    </div>
);

export default Main;