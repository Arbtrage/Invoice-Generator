import React, { useState, useEffect } from "react";
import { selectInvoice } from "../../features/invoices/invoiceSlice";
import InvoiceModal from "./InvoiceModal";
import { useSelector } from "react-redux";

const InvoiceView = ({ id, isOpen, closeView }) => {
  const invoices = useSelector(selectInvoice);
  console.log(id);
  const invoice = invoices.find((inv) => inv.info.id === id);
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  if (!id) return null;
  const closeModal = () => {
    setOpen(false);
    closeView();
  };
  return (
    <InvoiceModal
      type={3}
      showModal={open}
      closeModal={closeModal}
      info={invoice.info}
      items={invoice.items}
      currency={invoice.currency}
      subTotal={invoice.subTotal}
      taxAmmount={invoice.taxAmmount}
      discountAmmount={invoice.discountAmmount}
      total={invoice.total}
      isOpen={open}
    />
  );
};

export default InvoiceView;
