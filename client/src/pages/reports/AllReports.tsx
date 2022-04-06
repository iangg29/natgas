import Page from "../../containers/Page";
import React from "react";
import axios from "axios";

const Reports = (): JSX.Element => {
  const [getReports, setReports] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const departments = await axios.get("/report");
        console.log(departments);
        setReports(departments.data.data.documents);
      } catch (error: any) {
        alert(error.response.message);
      }
    })();
  }, []);

  return (
    <>
      <Page title="Reportes" headTitle="Reportes">
        <></>
      </Page>
      <div>
        {getReports.map((dpt: any) => (
          <div>{dpt.name}</div>
        ))}
      </div>
    </>
  );
};

export default Reports;
