import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./routes/Routes.jsx";
import {HelmetProvider} from "react-helmet-async";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </AuthProvider>
  </StrictMode>
);
