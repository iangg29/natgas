import React, { useEffect } from "react";
import CardSolicitud from "../../components/Cards/CardSolicitud";
import CardSolicitudVac from "../../components/Cards/CardSolicitudVac";
import axios from "axios";
import Page from "../../containers/Page";
import { connect } from "react-redux";
import { MySwal } from "../../utils/AlertHandler";

const VistaSolicitud = ({ auth }: any): JSX.Element => {
  const [getVacations, setVacations] = React.useState<any[]>([]);
  const [getNatgasBlocks, setNatgasBlocks] = React.useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [myVacations, myNatgasBlocks] = await Promise.all([
          axios.get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/vacation/mypendingvacationrequests/`),
          axios.get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/natgasblock/mypendingngbrequests/`),
        ]);

        setVacations(myVacations.data.vacationrequests);
        setNatgasBlocks(myNatgasBlocks.data.natgasBlocks);
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, [auth.user]);

  const approveNGB = async (id: string) => {
    await axios
      .patch(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/natgasblock/approve/${id}`)
      .then(() => {
        setNatgasBlocks(getNatgasBlocks.filter((ngb) => ngb.id !== id));
        MySwal.fire({
          title: "¡Aprobada!",
          icon: "success",
          text: "La solicitud de NGB ha sido aprobada con éxito.",
          confirmButtonColor: "#002b49",
        });
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  const approveVac = async (id: string) => {
    await axios
      .patch(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/vacation/approvevacationrequest/${id}`)
      .then(() => {
        setVacations(getVacations.filter((vac) => vac.id !== id));
        MySwal.fire({
          title: "¡Aprobada!",
          icon: "success",
          text: "La solicitud de Vacaciones ha sido aprobada con éxito.",
          confirmButtonColor: "#002b49",
        });
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };
  const discardVac = async (id: string) => {
    await axios
      .patch(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/vacation/discardvacationrequest/${id}`)
      .then(() => {
        setVacations(getVacations.filter((vac) => vac.id !== id));
        MySwal.fire({
          title: "¡Solicitud rechazada!",
          icon: "success",
          text: "La solicitud de Vacaciones ha sido rechazada con éxito.",
          confirmButtonColor: "#002b49",  
        });
      })
      .catch((error) => {
        MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      });
  };

  return (
    <>
      <Page title="Vacaciones" headTitle="Vacaciones" padding={true}>
        <div className=" grid  grid-cols-1 gap-5 py-10 lg:grid-cols-2 xl:grid-cols-3">
          {getVacations?.length > 0 ? (
            getVacations?.map((vac: any, idx: number) => (
              <CardSolicitudVac
                id={vac.id}
                approve={approveVac}
                discard={discardVac}
                name={vac.name + " " + vac.lastname}
                department={vac.departamento}
                dateinit={new Date(vac.startdate).toLocaleDateString()}
                datefin={new Date(vac.enddate).toLocaleDateString()}
                key={idx}
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
          {getNatgasBlocks?.length > 0 ? (
            getNatgasBlocks?.map((ngb: any, idx: number) => (
              <CardSolicitud
                id={ngb.id}
                name={ngb.name + " " + ngb.lastname}
                department={ngb.departamento}
                date={new Date(ngb.date).toLocaleDateString()}
                turn={ngb.turn ? "Segunda mitad" : "Primera mitad"}
                approve={approveNGB}
                key={idx}
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
