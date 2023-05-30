import UploadModule from "./UploadModule";
import Albums from "./Albums";
import Address from "./Address";
import Navbar from "./NavBar";

import "./OrderNow.css";

function OrderNow() {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="welcome">Welcome to the ordering page!</h1>
            <h2>Please, upload the desired photos for your dream album:</h2>
            <UploadModule></UploadModule>
            <h2>Please, indicate the type of album and the number of the uploaded photos:</h2>
            <Albums></Albums>
            <h2>Please, indicate the name and the address of the person where you want us to send the album(s):</h2>
            <Address></Address>

        </div>

    )
};

export default OrderNow;