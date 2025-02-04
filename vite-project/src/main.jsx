import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'


const clientId = import.meta.env.VITE_APP_CLIENID;
const domain = import.meta.env.VITE_APP_DOMINIO;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
