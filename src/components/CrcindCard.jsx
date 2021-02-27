import React from "react"
function CrcindCard({id="", nombre="", dob="", ssn=""}){
    return(
        <div className="col-12 col-md-4 mb-3 mt-3 d-flex align-items-stretch">
            <div className="alert alert-dark col-12" role="alert">
                <ul>
                    <li>ID: {id}</li>
                    <li>Nombre: {nombre}</li>
                    <li>Nacimiento: {dob}</li>
                    <li>Seguro Social: {ssn}</li>
                </ul>
            </div>
        </div>
    )
}
export default CrcindCard