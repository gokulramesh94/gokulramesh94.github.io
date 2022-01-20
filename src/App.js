import React from 'react';
import Loadable from 'react-loadable';
import Preloader from './components/preloader/Pre';

const App = () => {
  const LoadableComponent = Loadable({
    loader: () => import('./routes'),
    loading: () => <Preloader load={true} />
  });
  return <LoadableComponent />;
};

export default App;
