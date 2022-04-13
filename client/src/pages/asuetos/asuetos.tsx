import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import DateInputLong from "../../components/Inputs/DateInputLong";
import DateInput from "../../components/Inputs/DateInput";
import axios, { AxiosResponse } from "axios";
import PrimaryButton from "../../components/Buttons/PrimaryButton";


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
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="mt-10 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className = "text-xl">
                    <th scope="col" className="px-6 py-3">Fecha de Asueto</th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Borrar</span>
                    </th>
                    </tr>
                </thead>
                    {getDates.length > 0 ? (
                        getDates.map((date) => (
                            
                                <tbody>
                                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{new Date(date.date).toLocaleDateString()}</td>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            <button onClick={() => deleteA(date.idAsueto)}>
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                              </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                        ))
                    ) : (
                            <p className = "text-lg ml-4">No existen fechas de asuetos</p>
                    )}
             </table>     
            </div>
            <button className = "mt-10 ml-4 h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-red-800" onClick={() => deleteAll()}>Borrar todo</button>
          <div className = "mt-10 flex justify-center items-end">
            <DateInput label="Agregar asueto" getVal={getDate} setVal={setDate}/>
            <button className = "ml-10 h-10 px-5 m-2 rounded-full text-white transition-colors duration-150 bg-natgas-azul  focus:shadow-outline hover:bg-natgas-verde" onClick={() => upload()}> Confirmar </button>
            
          </div>    
          
         
       
        
        </div>
        
      </>
  )
}

export default Asuetos