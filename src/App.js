// import ProfileInput from './Home/Stateful Component/ProfileInput.js';
// import Main from './Home/index'
import './Home/Stateful Component/kartunama.css';
import { Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';
import Loader from 'react-loader'
const Main = lazy(() => import('../src/Home/index'));

function App() {
  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
            </div>
          </div>
        }>
          <Route path="/main" component={Main} />
        </Suspense>

        <Route exact path="/" render={() => (
          <Redirect to="/main/profile" />
        )} />
        {/* <Main /> */}
      </div>
    </Fragment>
  );
}

export default App;
