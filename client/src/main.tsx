import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Toaster } from 'react-hot-toast'

import { useAxiosInterceptors } from '@/interceptors'

useAxiosInterceptors()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Toaster
      toastOptions={{
        style: {
          boxShadow: '0 4px 30px rgb(0, 0, 0, 0.05)',
          border: '1px solid rgb(242 245 250)',
        },
      }}
    />
  </React.StrictMode>
)
