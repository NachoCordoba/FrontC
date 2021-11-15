import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Post from './pages/Post';
import {store, persistor} from './store';
import Photo from './pages/Photo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/post' element={<Post/>}></Route>
          <Route path='/photo' element={<Photo/>}></Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
