import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Home, InvoiceForm, EditInvoice,Error } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Error/>
  },
  {
    path: "/create-invoice",
    element: <InvoiceForm />,
    errorElement:<Error/>,
  },
  {
    path: "/edit-invoice/:id",
    element: <EditInvoice />,
    errorElement:<Error/>,
  },
]);

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center w-100">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
};

export default App;
