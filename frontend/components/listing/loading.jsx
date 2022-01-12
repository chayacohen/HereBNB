import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch  } from "@fortawesome/free-solid-svg-icons";


export default function Loading() {
    return (
        <div className="loading-div">
            <p>CREATING YOUR LISTING</p>
            <FontAwesomeIcon icon={faCircleNotch}  className="fa-spin"></FontAwesomeIcon>
        </div>
    )
}