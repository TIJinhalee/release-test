import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
    defaultOptions: {
            queries:
                {
                    gcTime: 1000 * 60 * 60,
                    retry: 0,
                    suspense: true,
                    refetchOnWindowFocus: false,
                }
            }
});

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Suspense fallback={<h1>loading...</h1>}>
              <ReactQueryDevtools initialIsOpen={false}/>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Suspense>
      </QueryClientProvider>
  </React.StrictMode>
);
