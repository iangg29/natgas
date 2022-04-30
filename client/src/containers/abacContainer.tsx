import React, {useEffect} from 'react';
import {connect} from "react-redux";

type Props = {
    children: JSX.Element | JSX.Element[];
    required_role: string;
    auth: any;
}

const AbacContainer = ({children, required_role, auth}: Props): JSX.Element => {
    const {user: {roles}} = auth;

    useEffect(() => {
        console.log(roles);
    });

    return (
        <>
            {roles.includes(required_role) ? children : <div></div>}
        </>

    )


}
const mapStateToProps = (state: any) => {
    return {
        auth: state.authState,
    };
};


export default connect(mapStateToProps)(AbacContainer);