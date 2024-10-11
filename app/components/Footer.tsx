import { PhoneIcon } from "@heroicons/react/24/solid";
import PlaceIcon from "@mui/icons-material/Place";

import MapLocation from "./MapLocation";

export default function Footer() {
    
    return (
        <div>
            <div className="w-full bg-black p-14 text-white flex flex-col md:flex-row md:justify-between align-between md:gap-10" >
                <div className =''>
                    <h1 className="text-[35px] font-bold gap-1 mb-5">Contact Us</h1>
                    <div className = 'text-[20px]'>
                        <p className = 'flex items-center gap-1'><PlaceIcon className = 'h-5 w-5'/>{process.env.NEXT_PUBLIC_ADDRESS}</p>
                        <p className = 'flex items-center gap-1'><PhoneIcon className = 'h-5 w-5'/>{process.env.NEXT_PUBLIC_NUMBER}</p>
                    </div>

                    <h1 className="text-[35px] mt-4 font-bold mb-5">Business Hours</h1>
                    <div className = 'text-[20px]'>
                        <p><strong>Monday - Fri: </strong>9:30 AM-6PM</p>
                        <p><strong>Saturday: </strong>9 AM -4 PM </p>
                        <p><strong>Sunday: </strong> Closed</p>
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
