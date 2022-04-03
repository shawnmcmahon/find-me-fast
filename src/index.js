import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers/index';

import Home from '../src/components/Home/Home';
import Error from '../src/components/Error/Error';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer, 
  devTools
);

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return  (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={ store }>
          <Routes> 
            <Route path="/" element={<App />} />
              <Route index element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>  
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AppWithCallbackAfterRender />
);


// Pre React Router v18 logic 

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={ store }>
//         <Routes> 
//           <Route path="/" element={<App />}>
//             <Route index element={<Home />} >
//             </Route>
//           </Route>
//         </Routes>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
