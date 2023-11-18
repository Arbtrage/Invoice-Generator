export async function addInvoice(data) {
  let invoices = JSON.parse(localStorage.getItem("state"));
  console.log("API call");
  if (!invoices) {
    localStorage.setItem("state", JSON.stringify([data]));
    return { message: "New object created" };
  }

  invoices.push(data);
  localStorage.setItem("state", JSON.stringify(invoices));
  return invoices;
}

export async function fetchInvoices() {
  const invoices = JSON.parse(localStorage.getItem("state"));
  if (invoices) return invoices;
  return [];
}

export async function modifyInvoice(data) {
  let invoices = JSON.parse(localStorage.getItem("state"));
  const updatedInvoices = invoices.filter(
    (invoice) => invoice.info.id !== data.info.id
  );
  updatedInvoices.push(data);
  localStorage.setItem("state", JSON.stringify(updatedInvoices));
  return updatedInvoices;
}

export async function getInvoice(id) {
  console.log(id);
  const invoices = JSON.parse(localStorage.getItem("state"));
  const invoice = await invoices.find((invoice) => invoice.info.id === id);
  return invoice;
}

export async function copyInvoice(data) {
  const invoices = JSON.parse(localStorage.getItem("state")) || [];

  const copiedInvoice = JSON.parse(JSON.stringify(data)); ;
  copiedInvoice.info.id = (
    +new Date() + Math.floor(Math.random() * 999999)
  ).toString(36);
  copiedInvoice.info.invoiceNumber = invoices.length + 1;
  const { items } = copiedInvoice;
  items.forEach((item) => {
    item.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  });

  invoices.push(copiedInvoice);
  localStorage.setItem("state", JSON.stringify(invoices));
  return invoices;
}

export async function deleteInvoice(id) {
    let invoices = JSON.parse(localStorage.getItem("state"));
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.info.id !== id
  );
  localStorage.setItem("state", JSON.stringify(updatedInvoices));
  return updatedInvoices;
}
