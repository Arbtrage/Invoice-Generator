import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
// import { Table } from "../components/index";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectInvoice } from "../features/invoices/invoiceSlice";
import { fetchAsync } from "../features/invoices/invoiceSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  const navigate = useNavigate();

  const createInvoice = () => {
    navigate("/create-invoice");
  };

  const invoices = useSelector(selectInvoice);

  return (
    <div className="m-5">
      <Button variant="primary" onClick={createInvoice}>
        Create Invoice
      </Button>
      {console.log(invoices)}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{invoice.info.billTo}</td>
              <td>{invoice.info.billFrom}</td>
              <td>{invoice.info.dateOfIssue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
