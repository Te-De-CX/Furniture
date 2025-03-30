import Img1 from "../../../public/indoors-5680429_1920.jpg";
import Img2 from "../../../public/indoors-5680429_1920.jpg";
import Img3 from "../../../public/indoors-5680429_1920.jpg";


const Range = () => {

    return(
        <>
            <div className="flex flex-col text-center capitalize" >
                <h3 className="text-xl font-bold" >browse the range</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex gap-10 px-32 text-md font-semibold capitalize my-10" >
               <div>
                <img src={Img1} alt="" />
                <p>dihinig</p>
               </div>
               <div>
                <img src={Img2} alt="" />
                <p>living</p>
               </div>
               <div>
                <img src={Img3} alt="" />
                <p>bedroom</p>
               </div>
               <hr />
            </div>
        </>
    )
}

export default Range;