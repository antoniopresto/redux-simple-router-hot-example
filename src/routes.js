import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    NotFound,
  } from 'containers';

export default ( ) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={()=> <p>INDEX</p>} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
