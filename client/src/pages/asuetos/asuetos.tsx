import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import DateInputLong from "../../components/Inputs/DateInputLong";
import DateInput from "../../components/Inputs/DateInput";
import axios, { AxiosResponse } from "axios";


const Asuetos = () => {
    const [getDates, setDates] = useState<any[]>([]);  
    const [getDate, setDate] = useState<any>();

    useEffect(() => {
      (async () => {
        try {
          const dates = await axios.get(`/asuetos/`)
          .then((res: AxiosResponse) => {
            setDates(res.data.data.documents);
          })
          .catch((err) => {
            console.trace(err);
          });
          
        } catch (error: any) {
          alert(error.message);
        }
      })();
    }, []);
    
  const deleteA = async (id: any) => {
      try {
          await axios.delete(`/asuetos/${id}`);
          setDates(getDates.filter((date) => date.idAsueto !== id));
          alert("La fecha de asueto ha sido eliminada con éxito.");
        } catch (error: any) {
        alert(error.message);
        }
    };

    const deleteAll = async () => {
        try {
            await axios.delete(`/asuetos/`);
            setDates([]);
            alert("Las fechas de asuetos han sido eliminadas.");
          } catch (error: any) {
          alert(error.message);
          }
      };
      
  const upload = async() => {
        try {
            await axios.post("/asuetos/", {
                date: getDate,
            });
            window.location.reload();
            alert("Asueto agregado correctamente");
            setDate("");
            
            
        } catch (err: any) {
            console.log(err);
            alert(err.message);
        }
    }
  
  return (
      <>
        <div className = "mt-4">
            <Title title = "Asuetos"/>
            <table className=" mt-4 table-auto">
                <thead>
                    <tr className = "text-2xl">
                    <th >Fecha</th>
                    <th >Opciones</th>
                    </tr>
                </thead>
                    {getDates.length > 0 ? (
                        getDates.map((date) => (
                            
                                <tbody>
                                    <tr className="mt-2 text-l">
                                        <td className = "px-auto">{new Date(date.date).toLocaleDateString()}</td>
                                        <td>
                                            <button onClick={() => deleteA(date.idAsueto)}>Borrar</button>
                                        </td>
                                    </tr>
                                </tbody>
                        ))
                    ) : (
                            <p className = "text-lg">No existen fechas de asuetos</p>
                    )}
             </table>         
                
        <DateInputLong label="Fecha" getVal={getDate} setVal={setDate}/>
        <button onClick={() => upload()}>subir fecha</button>
        <button onClick={() => deleteAll()}>Borrar todo</button>
        </div>
        
      </>
  )
}

export default Asuetos