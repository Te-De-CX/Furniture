
const Mail = () => {

    return (
        <>
            <section className="bg-[#DFE9F4] flex items-center justify-center text-center gap-6 py-10 flex-col" >
                <h3 className="text-xl font-bold capitalize" >Join Our Mailing List</h3>
                <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <div className="bg-white border-black border-2 ">
                    <input type="text" />
                    <button className="h-10 px-5 bg-blue-950 text-white" >submit</button>
                </div>
            </section>
        </>
    )
}

export default Mail;