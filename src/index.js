import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

import { USER, GET_STORAGE, REFER_URL, SET_STORAGE, REMOVE_STORAGE, AJAX_REQUEST, GET_COOKIE, DELETE_LOGIN_COOKIE } from "./Constants/AppConstants";
import { setCurrentUser } from "./Store/actions/loginActions";
import reducer from "./Store/reducers/reducer";
import history from "./history";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

const cur_storage = JSON.parse(GET_STORAGE(USER));
// if (cur_storage) {
//   if (cur_storage.token) {
//     const request_result = AJAX_REQUEST("POST", "user/details", {
//       user_token: cur_storage.token,
//       api_key: API_KEY,
//     });
//     request_result.then(results => {
//       if (results.response.code === 1000) {
//         let user_data = results.response.data;
//         user_data.remember = cur_storage.remember;
//         if (results.response.data.hasOwnProperty('site')) {
//           if (results.response.data.site === 'refer') {
//             window.location.href = REFER_URL + 'serviceLogin?token=' + results.response.data.token;
//           }
//         }
//         SET_STORAGE(USER, JSON.stringify(user_data));
//         store.dispatch(setCurrentUser(JSON.parse(GET_STORAGE(USER))));

//       } else {
//         REMOVE_STORAGE(USER);
//         DELETE_LOGIN_COOKIE();
//         store.dispatch(setCurrentUser({}));
//       }
//     });
//   } else {
//     REMOVE_STORAGE(USER);
//     store.dispatch(setCurrentUser({}));
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <div className="container">
          <App />
        </div>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
