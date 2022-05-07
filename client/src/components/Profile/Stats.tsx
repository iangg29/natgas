import React, { useEffect, useState } from "react";
import axios from "axios";
import { iEmployee } from "../../shared/interfaces/app.interface";
import { MySwal } from "../../utils/AlertHandler";

const Stats = ({ user }: { user: iEmployee }): JSX.Element => {
  const [usedVacations, setUsedVacations] = useState<number>(0);
  const [usedNatgasBlocks, setUsedNatgasBlocks] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const [usedVac, usedNgB] = await Promise.all([
          axios.get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/vacation?email=${user.email}&verifiedleader=1&status=1`),
          axios.get(`https://natgas-server-bynv2pe5gq-uc.a.run.app/api/natgasblock?email=${user.email}&status=1`),
        ]);
        setUsedVacations(usedVac.data.results);
        setUsedNatgasBlocks(usedNgB.data.results);
      } catch (error: any) {
        await MySwal.fire({
          title: "¡Error!",
          icon: "error",
          text: error.message,
          confirmButtonColor: "#002b49",
        });
      }
    })();
  }, [user.email]);

  return (
    <div className="grid grid-cols-1 py-10 text-gray-600 dark:text-gray-200 md:grid-cols-2">
      <div className="flex flex-col space-y-10">
        <div>
          Vacaciones usadas:{" "}
          <span className="number-bold">{usedVacations}</span>
        </div>
        <div>
          Vacaciones disponibles:{" "}
          <span className="number-bold">{user.vacations}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        <div>
          Natgas Blocks usados:{" "}
          <span className="number-bold">{usedNatgasBlocks}</span>
        </div>
        <div>
          Natgas Blocks disponibles:{" "}
          <span className="number-bold">{user.ngBlocks}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
