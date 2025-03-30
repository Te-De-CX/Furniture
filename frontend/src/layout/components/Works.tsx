import Img1 from "../../../public/indoors-5680429_1920.jpg";

const Works = () => {

    return (
        <>
            <section>
                <h3>how it works</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className="flex gap-5 px-20" >
                    <div>
                        <img src={Img1} alt="" />
                        <p>1</p>
                        <div>
                            <h3>purchase security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div>
                        <img src={Img1} alt="" />
                        <p>1</p>
                        <div>
                            <h3>purchase security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div>
                        <img src={Img1} alt="" />
                        <p>1</p>
                        <div>
                            <h3>purchase security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works;