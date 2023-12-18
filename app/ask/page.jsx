"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Page = ({ searchParams }) => {

    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(0);

    const handleNo = () => {
        if (hide === 0) {
            setHide(1);
        } else if (hide === 1) {
            setHide(2);
        } else if (hide === 2) {
            setHide(3);
        } else if (hide === 3) {
            setHide(4);
        } else if (hide === 4) {
            setHide(5);
        } else if (hide === 5) {
            setHide(0);
        }
    };

    return (
        <>
            <div className="p-3 flex flex-col gap-5 font-poppins pb-10 min-h-screen pt-16 justify-evenly">

                {/* Question */}
                <h1 className="self-center my-8 text-center text-white text-2xl font-bold max-w-xs flex items-center">
                    { searchParams.q }
                </h1>

                {/* Answer */}
                <div className="flex gap-2">

                    <button onClick={() => setShow(true)} className="w-full min-h-[5rem] rounded-md p-2 flex items-center justify-center border-dark-500 bg-dark-900 text-white text-lg font-medium hover:bg-dark-500 ">
                        { searchParams.y }
                    </button>

                    <button 
                        onClick={handleNo} 
                        className={`
                            ${
                                hide === 0 ? "" : 
                                hide === 1 ? "-translate-y-20" : 
                                hide === 2 ? "-translate-x-40 -translate-y-80" : 
                                hide === 3 ? "-translate-x-60 -translate-y-40" : 
                                hide === 4 ? "translate-x-20 -translate-y-80" : 
                                hide === 5 ? "translate-y-5 -translate-x-20" : ""
                            } 
                            w-full min-h-[5rem] rounded-md p-2 flex items-center justify-center border-dark-500 bg-dark-900 text-white text-lg font-medium hover:bg-dark-500 `}>
                        { searchParams.n }
                    </button>

                </div>

            </div>

            {/* Show Popup */}
            {show && (
                <>
                    <div onClick={() => setShow(false)} className="z-10 absolute w-full h-full bg-transparent top-0 left-0"></div>
                    <PopUp setShow={setShow}/>
                </>
            )}

        </>
    )
};

export default Page;

const PopUp = ({ setShow }) => {

    const searchParams = useSearchParams();

    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-black/80 px-5 top-0 left-0 font-poppins">
            <div className="z-50 bg-blue-50 w-[500px] rounded-md shadow-lg shadow-dark-900 flex flex-col p-5"> 

                <div className="w-full flex justify-between items-center border-b border-dark-900 pb-5">
                    <h1 className="font-poppins font-medium text-dark-900 text-xl">{searchParams.get("t")}</h1>
                    <button onClick={() => setShow(false)}>
                        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="mt-5">
                    <p>{searchParams.get("d")}</p>
                </div>

            </div>
        </div>
    )
}