import React from "react";
import { Circles } from "react-loader-spinner";

export function Loader({ status }) {
    return (
        <div className="loader-container">
            <Circles
                height={80}
                width={80}
                color="#4fa94d"
                ariaLabel="circles-loading"
                visible={status}
            />
        </div>
    );
}
