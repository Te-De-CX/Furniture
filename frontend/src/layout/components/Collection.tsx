import { Mask1,Mask2, Mask3 } from "../../libs/utils/images";

const Collections = () => {

    return (
        <>
        <div className="flex flex-col text-center gap-4 my-5" >
            <h2 className="text-4xl font-bold capitalize  text-black">inspiration collection</h2>
            <p className="text-xl" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div className="flex items-center justify-center" >
        <div className="flex justify-center items-center gap-5 px-5"  >
            <img src={ Mask1} alt="img1" className="w-10"/>
            <img src={ Mask2 } alt="img1"  className="w-10"/>
            <img src={ Mask3 } alt="img1" className="w-10" />
        </div>
        </div>
        
        </>
    )
}

export default Collections;