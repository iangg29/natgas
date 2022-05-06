import React from 'react';
import { connect } from "react-redux";
import ActualizaPerfil from "../pages/perfil/ActualizaPerfil";

type Props = {
    children: JSX.Element;
    auth: any;
}

const VerifiedContainer = ({children, auth}:Props) : JSX.Element => {
    const {user: {verified}} = auth;
    return(
        <>
            {verified === 1 ? children : <div>
                <ActualizaPerfil/>
            </div>}
        </>

    )


}
const mapStateToProps = (state: any) => {
    return {
        auth: state.authState,
    };
};



export default connect(mapStateToProps)(VerifiedContainer);