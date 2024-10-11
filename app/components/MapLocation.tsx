"use client"; // this only runs client side on next.js

import React  from "react";




const MapLocation: React.FC = () => {
    return (
    <div style={{ width: "100%", height: "100%" }}>
        <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API}
                &q=${process.env.NEXT_PUBLIC_NAME}+${process.env.NEXT_PUBLIC_ADDRESS}`}
        >
        </iframe>
    </div>
    );
};

export default MapLocation;
