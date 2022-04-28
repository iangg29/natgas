import React, {useEffect, useState} from 'react';
import Title from "../../components/Title/Title";
import CardCompletarUsuario from "../../components/Cards/CardCompletarUsuario";
import axios from "axios";
import {MySwal} from "../../utils/AlertHandler";
import Loading from "../../utils/Loading";


const RegistrosPendientes = (): JSX.Element => {
    const [pendingRegisters, setPendingRegisters] = useState<any[]>();

    useEffect(() => {
        (async () => {
            try {
                await axios.get(`/user/employment?verified=0`).then(res => {
                    setPendingRegisters(res.data.data.documents);
                }).catch(error => {
                    MySwal.fire({
                        title: "¡Error!",
                        icon: "error",
                        text: error.message,
                        confirmButtonColor: "#002b49",
                    });
                });
            } catch (error: any) {
                await MySwal.fire({
                    title: "¡Error!",
                    icon: "error",
                    text: error.message,
                    confirmButtonColor: "#002b49",
                });
            }
        })();
    }, []);

    if (pendingRegisters === undefined) {
        return <Loading/>;
    }

    return (
        <>
            <div className="mt-4"><Title title="Registros pendientes"/></div>
            <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {pendingRegisters.length > 0 ? (
                    pendingRegisters?.map((card) => (
                        <CardCompletarUsuario
                            name={card.name}
                            email={card.email}
                        />
                    ))
                ) : (
                    <p>
                        No cuentas hay cuentas pendientes de aprobar
                    </p>
                )}

            </div>
        </>

    );
}


export default RegistrosPendientes;