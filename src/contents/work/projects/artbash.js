import React from "react";
import { useSelector } from "react-redux";
import Brief from "../../../components/brief";

const Artbash = () => {
    const artbash = useSelector((state) => state.work.work[0]);

    return (
        <>
            <Brief
                name='ArtBash 2023'
                work={artbash} 
                brief='Department of Contemporary Practices commissioned the Visual Communication Design students to create an identity and promotional materials for ArtBash, the freshman art exhibition.'
                role='Designer (solo work)'
                date='September - November 2022 (3 months)'
            />
            <div>
            </div>
        </>
    );
};

export default Artbash;