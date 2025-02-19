import React from 'react'
import Image from "next/image";

function Gallery() {
    return (
        <div>
            <Image
            src={"https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw9e81cadd/images/P18985481/P18985481-23-21.jpg"}
            width={1000}
            height={1000}
            alt=""
            className="w-1/4"
            />
        </div>
    )
}

export default Gallery
