import React from "react";
import PropTypes from "prop-types";
import { Conteiner } from './styled'

import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loading({ isLoading }) {
     if (!isLoading) return <></>

    return (
        <Conteiner>
            <div />
            <span>
                <Spinner
                    color="primary"
                    style={{
                        height: '3rem',
                        width: '3rem'
                    }}
                />
            </span>
        </Conteiner>
    )
}

Loading.defaultProps = {
    isloading: false,
}
// eslint-disable-next-line react/no-typos
Loading.propTypes = {
    isloading: PropTypes.bool,
}
