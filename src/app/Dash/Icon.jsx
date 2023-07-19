import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
  } from "@fortawesome/free-solid-svg-icons";
export default function Icon() {

    function myfunc(){
        const myinput = document.querySelector('input').value
        console.log(myinput);
        window.location.href = "/results?search="+myinput
    }
    return (
        <a onClick={myfunc}>

        <FontAwesomeIcon
        icon={faSearch}
        />
        </a>
    )
};
