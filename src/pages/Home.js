import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAsync, selectInvoice } from "../features/invoices/invoiceSlice";
import { InvoiceView } from "../components/index";
import { fetchAsync } from "../features/invoices/invoiceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const navigate = useNavigate();

  const createInvoice = () => {
    navigate("/create-invoice");
  };

  const actionInvoice = (id, action) => {
    switch (action) {
      case "Edit":
        navigate(`/edit-invoice/${id}`);
        break;
      case "Delete":
        dispatch(deleteAsync(id));
        break;
      case "View":
        setId(id);
        setIsOpen(true);
        break;
      default:
        break;
    }
  };
  const closeView = () => setIsOpen(false);
  const invoices = useSelector(selectInvoice);

  return (
    <div className="m-5">
      <Button variant="primary" onClick={createInvoice}>
        Create Invoice
      </Button>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Bill To (Name)</th>
            <th>Bill From (Name)</th>
            <th>Date of Issue</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.info.invoiceNumber}</td>
              <td>{invoice.info.billTo}</td>
              <td>{invoice.info.billFrom}</td>
              <td>{invoice.info.dateOfIssue}</td>
              <Button
                variant="outline-success"
                className="m-1"
                onClick={() => actionInvoice(invoice.info.id, "View")}
              >
                View
              </Button>
              <Button
                variant="outline-info"
                className="m-1"
                onClick={() => actionInvoice(invoice.info.id, "Edit")}
              >
                Edit
              </Button>{" "}
              <Button
                variant="outline-danger"
                className="m-1"
                onClick={() => actionInvoice(invoice.info.id, "Delete")}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      <InvoiceView id={id} isOpen={isOpen} closeView={closeView} />
    </div>
  );
};

export default Home;
