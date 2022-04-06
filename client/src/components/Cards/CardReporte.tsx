import React from "react";
import axios from "axios";
import {IDepartment} from "../../shared/interfaces/app.interface"

type Props = {
    report:any
}

const CardReporte = ({report:{idReporte, name}}: Props): JSX.Element => {
  const [getRows, setRows] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {  
        const departments = await axios.get(`report/getRowsFromReport/${idReporte}`);
        console.log(departments);
        setRows(departments.data.data.document);
      } catch (error: any) {
        alert(error.response.message);
      }
    })();
  }, []);

  return (
    <>
    <div>{name}</div>
    </>
  );
};

export default CardReporte;
