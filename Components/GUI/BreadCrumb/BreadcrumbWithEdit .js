import { BreadCrumb } from "primereact/breadcrumb";
import { useState } from "react";
import React from "react";

const BreadcrumbWithEdit = ({ items }) => {
  const [breadcrumbs, setBreadcrumbs] = useState(items);
  const [editableIndex, setEditableIndex] = useState(null);

  const handleDoubleClick = (index) => {
    setEditableIndex(index);
  };

  const handleNameChange = (event, index) => {
    const { value } = event.target;
    setBreadcrumbs((prevBreadcrumbs) => {
      const updatedBreadcrumbs = [...prevBreadcrumbs];
      updatedBreadcrumbs[index].label = value;
      return updatedBreadcrumbs;
    });
  };

  const handleBlur = () => {
    setEditableIndex(null);
  };

  return (
    <BreadCrumb model={breadcrumbs} onItemClick={handleDoubleClick}>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          {editableIndex === index ? (
            <input
              type='text'
              value={item.label}
              onChange={(event) => handleNameChange(event, index)}
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </BreadCrumb>
  );
};

export default BreadcrumbWithEdit;
