import React, { useEffect, useState } from "react";
import axios from "axios";
import { IEmployee } from "../../shared/interfaces/app.interface";

const Stats = ({ user }: { user: IEmployee }): JSX.Element => {
  const [usedVacations, setUsedVacations] = useState<number>(0);
  const [earnedVacations, setEarnedVacations] = useState<number>(0);
  const [usedNatgasBlocks, setUsedNatgasBlocks] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const [usedVac, usedNgB] = await Promise.all([
          axios.get(`/vacation?email=${user.email}&verifiedleader=1&status=1`),
          axios.get(`/natgasblock?email=${user.email}&status=1`),
        ]);
        setUsedVacations(usedVac.data.results);
        setUsedNatgasBlocks(usedNgB.data.results);
      } catch (error: any) {
        alert(error.message);
      }
    })();
  }, []);

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
        <div>
          Vacaciones ganadas: <span className="number-bold">4</span>
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
