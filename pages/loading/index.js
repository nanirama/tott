import React from "react";
import ImgLoader from "../../components/Image";
import Logo from "../../assets/images/trady-logo.png"

const Loading = () => {

    return (
        <div className="gradient-5">
            <div className="md:max-w-screen-sm w-full mx-auto h-screen flex flex-col justify-between">
                <div className="flex justify-center py-6">
                    <ImgLoader src={Logo} width={97} height={32} />
                </div>
                <div className="w-full mx-auto h-screen flex flex-col justify-between">
                    <div className="h-full pt-6 flex justify-between flex-col items-center">
                        <div></div>
                        <div className="text-center px-5">
                            <h6 className="text-xs text-green-500 font-medium mb-2">HOLD TIGHT</h6>
                            <h3 className="text-3xl text-green-500 font-bold mb-4">We’re building your new website</h3>
                            <h4 className="text-8xl text-green-500 font-bold leading-normal mb-4">5%</h4>
                        </div>
                        <div className="flex flex-col py-3 text-transparent w-full">

                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Loading