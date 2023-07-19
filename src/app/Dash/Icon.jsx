import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
  } from "@fortawesome/free-solid-svg-icons";
export default function Icon() {

    function myfunc(){
        console.log("done");
    }
    return (
        <a onClick={myfunc}>

        <FontAwesomeIcon
        icon={faSearch}
        />
        </a>
    )
};
