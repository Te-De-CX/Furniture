import Button from "../../libs/button";
import { Img } from "../../libs/utils/images";

const Beautify = () => {

    return (
        <>
            <section className="flex bg-[#DFE9F4] justify-between py-8" >
                <div className="flex flex-col justify-center items-start gap-5 px-20 py-10 w-5/12" >
                    <h3 className="capitalize text-xl font-bold ">beautify your space </h3>
                    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <Button text="learn more" />
                </div>
                <div className="w-6/12 relative content-center">  
                <div className="absolute w-88 h-88 rounded-full bg-white z-10" 
                    style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}></div>
                <img src={Img} alt="" className="w-7/12 relative z-20" /> 
                </div>
            </section>
        </>
    )
}

export default Beautify;