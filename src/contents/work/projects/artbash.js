import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Artbash = () => {
    const artbash = useSelector((state) => state.work.work[0]);

    return (
        <>
            <Brief
                work={artbash}
            />
            <div>

            </div>
        </>
    );
};

export default Artbash;