import React from "react";

 

export const data ={
    number :10,
    text :"context insulinado..."
} 

const DataContext = React.createContext(data);
export default DataContext; 