export async function addInvoice(data) {
  let invoices = JSON.parse(localStorage.getItem("state"));
  console.log("API call");
  if (!invoices) {
    localStorage.setItem("state", JSON.stringify([data]));
    return { message: "New object created" };
  }

  invoices.push(data);
  localStorage.setItem("state", JSON.stringify(invoices));
  return { message: "Old object modified" };
}

export async function fetchInvoices() {
    const invoices = JSON.parse(localStorage.getItem("state"));
    if (invoices) return invoices;
    return ["hello"];
}

export async function modifyInvoice(data) {
  let invoices = JSON.parse(localStorage.getItem("state"));
  const updatedInvoices = invoices.filter((invoice) => invoice.info.id !== data.info.id);
  updatedInvoices.push(data);
  localStorage.setItem("state", JSON.stringify(updatedInvoices));
  return { message: "Done" };
}


export async function getInvoice(id) {
  console.log(id);
  const invoices = JSON.parse(localStorage.getItem("state"));
  const invoice = await invoices.find((invoice) => invoice.info.id === id);
  return invoice;
}
// export async function deleteInvoice(invoiceNumber) {
//     let invoices = JSON.parse(localStorage.getItem("state"));

// }