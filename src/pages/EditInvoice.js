import InvoiceForm from "./InvoiceForm";
import { useParams } from "react-router-dom";

const EditInvoiceComponent = () => {
  const { id } = useParams();
  const invoices = JSON.parse(localStorage.getItem("state"));
  
  const invoice = invoices.find((inv) => inv.info.id === id);

  return <InvoiceForm invoiceData={invoice} />;
};

export default EditInvoiceComponent;
