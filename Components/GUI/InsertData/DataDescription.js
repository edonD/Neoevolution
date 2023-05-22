import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { CustomerService } from "./data/CustomerService";
import { SoftwareService } from "./data/SoftwareService";
import styled from "styled-components";

export default function BasicFilterDemo() {
  const [customers, setCustomers] = useState(null);
  const [software, setSoftware] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [statuses] = useState(["running", "done", "not started"]);

  const getSeverity = (status) => {
    switch (status) {
      case "running":
        return "danger";

      case "done":
        return "success";

      case "not started":
        return "info";
    }
  };

  useEffect(() => {
    SoftwareService.getCustomersSmall().then((data) => {
      setCustomers(getCustomers(data));
      setLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
      d.date = new Date(d.date);

      return d;
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className='flex justify-content-end'>
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder='Keyword Search'
          />
        </span>
      </div>
    );
  };

  const countryBodyTemplate = (rowData) => {
    return (
      <div className='flex align-items-center gap-2'>
        <span>{rowData.Description}</span>
      </div>
    );
  };

  const representativeBodyTemplate = (rowData) => {
    return (
      <div className='flex align-items-center gap-2'>
        <span>{rowData.Version}</span>
      </div>
    );
  };

  const idBodyTemplate = (rowData) => {
    return (
      <div className='flex align-items-center gap-2'>
        <span>{rowData.ID}</span>
      </div>
    );
  };
  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const formatDate = (value) => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date);
  };

  const header = renderHeader();

  return (
    <Container>
      <DataTable
        value={customers}
        paginator
        rows={5}
        dataKey='id'
        filters={filters}
        responsiveLayout='stack'
        editMode='row'
        // filterDisplay='row'
        loading={loading}
        globalFilterFields={["ID", "date", "Version", "Description", "status"]}
        header={header}
        emptyMessage='No customers found.'
        style={{ width: "80%", height: "100%" }}
        scrollHeight='100%'
        showGridlines
        breakpoint='900px'
      >
        <Column
          header='ID'
          filterField='ID'
          style={{ minWidth: "10rem" }}
          body={idBodyTemplate}
        />
        <Column
          header='Date'
          filterField='date'
          dataType='date'
          style={{ minWidth: "10rem" }}
          body={dateBodyTemplate}
        />
        <Column
          header='Version'
          filterField='Version'
          showFilterMenu={false}
          filterMenuStyle={{ width: "6rem" }}
          style={{ minWidth: "6rem" }}
          body={representativeBodyTemplate}
          //   filter
          //   filterElement={representativeRowFilterTemplate}
        />
        <Column
          header='Description'
          filterField='country.name'
          style={{ minWidth: "12rem" }}
          body={countryBodyTemplate}
          //   filter={false}
          //   filterPlaceholder='Search by country'
        />
        <Column
          field='status'
          header='Status'
          showFilterMenu={false}
          filterMenuStyle={{ width: "14rem" }}
          style={{ minWidth: "12rem" }}
          body={statusBodyTemplate}
          //   filter
          //   filterElement={statusRowFilterTemplate}
        />
      </DataTable>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
