import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App
  } from 'containers';

export default ( ) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={()=> <p>INDEX</p>} />
      <Route path="/2" component={()=> <p>SOU 2</p>} />
      <Route path="*" component={()=> <h1>'NOT FOUND'</h1>} status={404} />
    </Route>
  );
};
