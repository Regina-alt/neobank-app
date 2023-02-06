import React, { useState, useEffect } from "react";

const Table = () => {
  const pathname = window.location.pathname;
  let id = pathname.split("/");
  id = id[2];

  const columns = [
    { label: "NUMBER", accessor: "number", sortable: true },
    { label: "DATE", accessor: "date", sortable: true },
    { label: "TOTAL PAYMENT", accessor: "totalPayment", sortable: true },
    { label: "INTEREST PAYMENT", accessor: "interestPayment", sortable: true },
    { label: "DEBT PAYMENT", accessor: "debtPayment", sortable: true },
    { label: "REMAINING DEBT", accessor: "remainingDebt", sortable: true },
  ];
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/admin/application/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((arr) => {
        setTableData(arr.credit.paymentSchedule);
      });
  }, []);

  const handleSortingChange = (column) => {
    const sortOrder = column === sortField && order === "asc" ? "desc" : "asc";
    setSortField(column);
    setOrder(sortOrder);
    handleSorting(column, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return (
    <>
      <table className="payment_table">
        <thead className="payment_header">
          <tr>
            {columns.map(({ label, accessor, sortable }) => {
              const cl = sortable
                ? sortField === accessor && order === "asc"
                  ? "up"
                  : sortField === accessor && order === "desc"
                  ? "down"
                  : "default"
                : "";
              return (
                <th
                  key={accessor}
                  onClick={
                    sortable ? () => handleSortingChange(accessor) : null
                  }
                  className={cl}
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody id="table">
          {tableData.map((data) => {
            return (
              <tr key={data.id}>
                {columns.map(({ accessor }) => {
                  const tData = data[accessor] ? data[accessor] : "0";
                  return <td key={accessor}>{tData}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
