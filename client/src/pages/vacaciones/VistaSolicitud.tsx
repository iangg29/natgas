import React, { useEffect } from "react";
import CardSolicitud from "../../components/Cards/CardSolicitud";
import CardSolicitudVac from "../../components/Cards/CardSolicitudVac";
import axios, { AxiosPromise } from "axios";
import Page from "../../containers/Page";
import { connect } from "react-redux";

const VistaSolicitud = ({ auth }: any): JSX.Element => {
  const [getVacations, setVacations] = React.useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = React.useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(`/vacation/mypendingvacationrequests/${auth.user.email}`),
          axios.get(`/natgasblock/mypendingngbrequests/${auth.user.email}`),
        ]);

        setVacations(myVacations.data.vacationrequests);
        setNatgasBlocks(myNatgasBlocks.data.natgasBlocks);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, [auth.user]);

  const approveNGB = async (id: string) => {
    try {
      await axios.patch(`/natgasblock/approve/${id}`);
      setNatgasBlocks(getNatgasBlocks.filter((ngb) => ngb.id !== id));

      alert("La solicitud de NGB ha sido aprobada con éxito.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const approveVac = async (id: string) => {
    try {
      await axios.patch(`/vacation/approvevacationrequest/${id}`);
      setVacations(getVacations.filter((vac) => vac.id !== id));

      alert("La solicitud de Vacaciones ha sido aprobada con éxito.");
    } catch (error: any) {
      alert(error.message);
    }
  };
  const discardVac = async (id: string) => {
    try {
      await axios.patch(`/vacation/discardvacationrequest/${id}`);
      setVacations(getVacations.filter((vac) => vac.id !== id));

      alert("La solicitud de Vacaciones ha sido rechazada con éxito.");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <Page title="Vacaciones" headTitle="Vacaciones" padding={true}>
        <div className=" grid  grid-cols-1 gap-5 py-10 lg:grid-cols-2 xl:grid-cols-3">
          {getVacations.length > 0 ? (
            getVacations.map((vac) => (
              <CardSolicitudVac
                id={vac.id}
                approve={approveVac}
                discard={discardVac}
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
              />
            ))
          ) : (
            <p>
              No cuentas con solicitudes de vacaciones pendientes de aprobar
            </p>
          )}
        </div>
      </Page>
      <Page title="NatGas Blocks" headTitle="NatGas Blocks" padding={true}>
        <div className=" grid  gap-5 py-10 md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {getNatgasBlocks.length > 0 ? (
            getNatgasBlocks.map((ngb) => (
              <CardSolicitud
                id={ngb.id}
                name={ngb.name + " " + ngb.lastname}
                department={ngb.departamento}
                date={new Date(ngb.date).toLocaleDateString()}
                turn={ngb.turn ? "Segunda mitad" : "Primera mitad"}
                approve={approveNGB}
              />
            ))
          ) : (
            <p>
              No cuentas con solicitudes de Natgas Blocks pendientes de aprobar
            </p>
          )}
        </div>
      </Page>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authState,
  };
};

export default connect(mapStateToProps, null)(VistaSolicitud);
