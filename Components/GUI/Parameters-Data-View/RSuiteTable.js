// import React from "react";
// import ReactDOM from "react-dom";

// import { Table, Button } from "rsuite";
// import { useState, useEffect } from "react";
// const { Column, HeaderCell, Cell } = Table;
// import {
//   columnExtractor,
//   scientificNotation,
//   convertToFormat,
// } from "./CSVProcessor";

// const EditableCell = ({ rowData, dataKey, onChange, ...props }) => {
//   if (dataKey === "mode") {
//     const handleClick = () => {
//       const currentValue = rowData[dataKey];
//       const updatedValue = currentValue === "variable" ? "fixed" : "variable";
//       onChange && onChange(rowData.id, dataKey, updatedValue);
//     };

//     return (
//       <Cell {...props} className='table-content-editing' onClick={handleClick}>
//         <button className='table-button'>{rowData[dataKey]}</button>
//       </Cell>
//     );
//   }

//   if (dataKey === "scale") {
//     const handleClick = () => {
//       const currentValue = rowData[dataKey];
//       const updatedValue = currentValue === "lin" ? "log" : "lin";
//       onChange && onChange(rowData.id, dataKey, updatedValue);
//     };

//     return (
//       <Cell {...props} className='table-content-editing' onClick={handleClick}>
//         <button className='table-button'>{rowData[dataKey]}</button>
//       </Cell>
//     );
//   }
//   if (dataKey === "name") {
//     const [editing, setEditing] = useState(false);
//     const [displayValue, setDisplayValue] = useState(rowData[dataKey]);

//     const handleClick = () => {
//       setEditing(true);
//     };

//     const handleBlur = () => {
//       setEditing(false);
//       onChange && onChange(rowData.id, dataKey, displayValue);
//     };

//     const handleChange = (event) => {
//       setDisplayValue(event.target.value);
//     };

//     return (
//       <Cell
//         {...props}
//         className={editing ? "table-content-editing" : ""}
//         onClick={handleClick}
//       >
//         {editing ? (
//           <input
//             className='rs-input'
//             value={displayValue}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             autoFocus
//           />
//         ) : (
//           <span className='table-content-edit-span'>{rowData[dataKey]}</span>
//         )}
//       </Cell>
//     );
//   }

//   const [editing, setEditing] = useState(false);
//   const [displayValue, setDisplayValue] = useState(rowData[dataKey]);

//   const formatSmallNumbers = (number) => {
//     console.log("SMALL NUMBER");
//     const formatted = number.toLocaleString(undefined, {
//       minimumFractionDigits: 10,
//     });
//     return formatted.replace(/\.?0+$/, "");
//     return value;
//   };
//   const handleClick = () => {
//     if (!editing) {
//       const value = Number(rowData[dataKey]);

//       const display =
//         (value < 0.001 && value > 0.0000000001) ||
//         (value > -0.001 && value < -0.0000000001)
//           ? formatSmallNumbers(value)
//           : scientificNotation(value);
//       setDisplayValue(display);
//       setEditing(true);
//     }
//   };

//   return (
//     <Cell
//       {...props}
//       className={editing ? "table-content-editing" : ""}
//       onClick={handleClick}
//     >
//       {editing ? (
//         <input
//           className='rs-input'
//           value={displayValue}
//           onChange={(event) => {
//             setDisplayValue(event.target.value);
//           }}
//           onBlur={() => {
//             setEditing(false);
//             const formattedValue =
//               dataKey === "name"
//                 ? displayValue
//                 : scientificNotation(Number(displayValue));
//             onChange && onChange(rowData.id, dataKey, formattedValue);
//           }}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") {
//               setEditing(false);
//               const formattedValue =
//                 dataKey === "name"
//                   ? displayValue
//                   : scientificNotation(Number(displayValue));
//               onChange && onChange(rowData.id, dataKey, formattedValue);
//             }
//           }}
//           autoFocus
//         />
//       ) : (
//         <span className='table-content-edit-span'>{rowData[dataKey]}</span>
//       )}
//     </Cell>
//   );
// };

// function RSuiteTable() {
//   columnExtractor(csvData);
//   const [columns, setColumns] = useState([]);
//   const [parameters, setParameters] = useState([]);
//   const productsData = convertToFormat(csvData);
//   useEffect(() => {
//     setColumns(columnExtractor(csvData));
//   }, []);

//   useEffect(() => {
//     setParameters(productsData);
//   }, []);

//   const [cellEditing, setCellEditing] = useState({});

//   const handleCellChange = (id, key, value) => {
//     console.log("Item", value);
//     const nextData = parameters.map((item) => {
//       if (item.id === id) {
//         return { ...item, [key]: value };
//       }

//       return item;
//     });
//     setParameters(nextData);
//   };

//   const handleSaveChanges = () => {
//     // Format the values with scientific notation before saving changes
//     const formattedData = parameters.map((item) => ({
//       ...item,
//       min: scientificNotation(Number(item.min)),
//       default: scientificNotation(Number(item.default)),
//       max: scientificNotation(Number(item.max)),
//     })); // Update the parameters state with the formatted data
//     setParameters(formattedData);

//     // Save changes logic
//     console.log("Saving changes:", formattedData);
//   };

//   return (
//     <>
//       <Table
//         height={500}
//         cellBordered={true}
//         data={parameters}
//         bordered
//         // rowHeight={150}
//         //   affixHeader
//         affixHorizontalScrollbar
//         // onRowClick={(rowData) => {
//         //   console.log(rowData);
//         // }}
//       >
//         {columns &&
//           columns.map((column, index) => (
//             <Column key={index} width={120} align='center' fixed>
//               <HeaderCell>{column.headerName}</HeaderCell>
//               <EditableCell
//                 dataKey={column.field}
//                 data={parameters}
//                 onChange={handleCellChange}
//                 // editing={cellEditing[`${row.id}_${column.field}`]}
//               />
//             </Column>
//           ))}

//         {/* <Column flexGrow={1}>
//         <HeaderCell>...</HeaderCell>
//         <ActionCell dataKey='id' onClick={handleEditState} />
//       </Column> */}
//       </Table>
//       <Button appearance='primary' onClick={handleSaveChanges}>
//         Save Changes
//       </Button>
//     </>
//   );
// }

// export default RSuiteTable;
