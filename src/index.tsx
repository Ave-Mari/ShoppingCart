import * as React from 'react';
import * as ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>,
    document.getElementById('app')
  );
