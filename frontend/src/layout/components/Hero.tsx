import Button from "../../libs/button";
import { Ri24HoursLine } from "react-icons/ri";

const Hero = () => {

    const hero = (
        <>
            <section className="bg-[url('./assets/img1.jpg')] h-screen bg-center flex justify-end items-center px-20" >
                <div className="bg-[#DFE9F4] rounded-xl px-10 py-10">
                    <p className="text-sm font-semibold capitalize mb-3" >new arrive</p>
                    <h3 className="text-5xl font-bold capitalize text-[#054C73] mb-3" >discover our <br/> new collection</h3>
                    <p className="text-xm w-11/12 leading-[2rem] my-5" >lorem ipsum some tjting tsotee tehe the lorec rrcdiscover our new collection</p>
                    <Button text="buy now" styles="mt-2" />
                </div>
            </section>
            <div className="bg-[#DFE9F4] flex justify-between items-center px-10 py-5" >
                <div className="flex items-center gap-5 " >
                    <Ri24HoursLine className="text-5xl" />
                    <div className="flex items-start flex-col gap-1 " >
                        <h5 className="text-2xl font-semibold" >Support 24/7</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 " >
                    <Ri24HoursLine className="text-5xl" />
                    <div className="flex items-start flex-col gap-1 " >
                        <h5 className="text-2xl font-semibold" >Support 24/7</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 " >
                    <Ri24HoursLine className="text-5xl" />
                    <div className="flex items-start flex-col gap-1 " >
                        <h5 className="text-2xl font-semibold" >Support 24/7</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </>
    )

    return hero;
}

export default Hero;