import Page from "../../containers/Page";
import React from "react";
import axios from "axios";
import CardReporte from "../../components/Cards/CardReporte";

const Reports = (): JSX.Element => {
  const [getReports, setReports] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const reports = await axios.get("/report");
        console.log(reports);
        setReports(reports.data.data.documents);
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
      <div className="flex-col">
        {getReports.map((rpt: any) => (
          <CardReporte report={rpt} />
        ))}
      </div>
    </>
  );
};

export default Reports;
