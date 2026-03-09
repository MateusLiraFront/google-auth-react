import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Pages/Login/Login.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/router.jsx";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1047821634457-m7envc5lffe6urae6bqjh05k8bf19mlj.apps.googleusercontent.com">  
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </GoogleOAuthProvider>
)
