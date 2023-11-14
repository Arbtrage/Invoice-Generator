import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { Home, InvoiceForm } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/create-invoice",
    element: <InvoiceForm />,
  },
]);

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <RouterProvider router={router} />
          {/* <InvoiceForm/> */}
        </Container>
      </div>
    );
  }
}

export default App;
