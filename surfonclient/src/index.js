import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/NothingYouCouldDo/NothingYouCouldDo-Regular.ttf';
import './fonts/Heebo/static/Heebo-Regular.ttf';
import store from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App store={store} />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
