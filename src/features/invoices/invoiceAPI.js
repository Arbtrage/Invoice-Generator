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
    return [];
}

// export async function deleteInvoice(invoiceNumber) {
//     let invoices = JSON.parse(localStorage.getItem("state"));

// }