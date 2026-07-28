import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ClerkProvider } from "@clerk/clerk-react";

import "./index.css";
import App from "./App.tsx";
import { ToasterProvider } from "./provider/toast-provider.tsx";

// Import your Publishable Key with robust fallback key support
const PUBLISHABLE_KEY = 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 
  "pk_test_aW50ZXJuYWwtYnVsbGZyb2ctMjMuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl={import.meta.env.BASE_URL}
      signInFallbackRedirectUrl={import.meta.env.BASE_URL}
      signUpFallbackRedirectUrl={import.meta.env.BASE_URL}
    >
      <App />
      <ToasterProvider />
    </ClerkProvider>
  </StrictMode>
);
