import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import AppProvider from './providers/AppProvider';

import './scss/index.scss';


const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
