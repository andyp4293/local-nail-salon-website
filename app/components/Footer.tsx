

import MapLocation from "./MapLocation";

export default function Footer() {
    
    return (
        <div>
            <div className="w-full bg-black p-14 text-white flex flex-col md:flex-row md:justify-between align-between" >
                <div className =''>
                    <h1 className="text-[35px] font-bold">Contact Us</h1>
                    <div className = 'text-[20px]'>
                        <p>{process.env.NEXT_PUBLIC_ADDRESS}</p>
                        <p>{process.env.NEXT_PUBLIC_NUMBER}</p>
                    </div>

                    <h1 className="text-[35px] mt-4 font-bold">Business Hours</h1>
                    <div className = 'text-[20px]'>
                        <p>Monday - Fri: 9:30 AM-6PM</p>
                        <p>Saturdy: 9 AM -4 PM </p>
                        <p>Sunday: Closed</p>
                    </div>

                </div>
                
                <div className = "md:w-1/2 p-0 m-0 h-full w-full mt-4 md:mt-0">
                    <h1 className="text-[35px] mb-5 font-bold">Our Location</h1>
                    <div className="w-full h-[400px]">
                        <MapLocation />
                    </div>
                </div>
            </div>
            <div className="w-full bg-white pt-2 p-10 text-black">
                <p> {`© 2024 ${process.env.NEXT_PUBLIC_NAME}. All Rights Reserved.`}</p>
                <p>{`${process.env.NEXT_PUBLIC_NAME} - Nail salon in ${process.env.NEXT_PUBLIC_ADDRESS} `}</p>
            </div>



        </div>
    );
}
