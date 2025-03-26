
const Nav = () => {

    const nav = (
        <>
            <nav className="py-8 px-20 flex justify-between items-center bg-white text-white capitalize" >
                <h2 className="text-4xl font-bold text-blue-900" >furniture</h2>
                <ul className="flex gap-14 font-semibold text-xm text-black" >
                    <li>home</li>
                    <li>services</li>
                    <li>doctors</li>
                    <li>products</li>
                    <li>gallery</li>
                </ul>
            </nav>
        </>
    )

    return nav;
}

export default Nav;