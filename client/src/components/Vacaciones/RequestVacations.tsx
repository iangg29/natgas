import React, {ChangeEvent, Fragment, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import axios from "axios";
import Page from "../../containers/Page";

const RequestVacations = ({ user }: any): JSX.Element => {
    const [getStartDate, setStartdate] = useState<string>();
    const [getEndDate, setEndDate] = useState<string>();
    const [getSuplente, setSuplente] = useState<string>();

    const sendVacationsRequest = async () => {
        try {
            await axios.post("/vacations/request/", {
                StartDate: getStartDate,
                EndDate: getEndDate,
                Suplente: getSuplente,
                email: user.email,
            });
            alert("Petición de vacación creada correctamente");
            setEndDate("");
            setStartdate("");
            setSuplente("");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <Page
            title="Solicitar VAcaciones"
            headTitle="Solicitar vacaciones"
            padding={true}
        >
            <div className="py-10">
                <div className="grid grid-cols-1">
                    <div className="grid grid-rows-3">
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            </Page>
    )

    };



};