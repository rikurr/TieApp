import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './modules/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundary } from './components/UIKit/ErrorBoundary';
import ThemeProviderWrap from './ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderWrap>
        <Router>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Router>
      </ThemeProviderWrap>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
