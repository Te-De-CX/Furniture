import { ButtonProp } from "./types/button";

const Button: React.FC<ButtonProp> = ({ text, styles }) => {

    const button = (
        <>
            <button className = {` ${styles} font-bold uppercase py-4 bg-[#054C73] text-white  px-15 rounded-full `} >
                {text}
            </button>
        </>
    )

    return button;
}

export default Button;