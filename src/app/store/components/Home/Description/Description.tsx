import Image from "next/image"
export const Description = () => {
    return(
        <section className="flex gap-8 w-2/3 mt-18 ">
            <Image src="/images/descriptionimage.jpg" alt="Products marketplace" width={300} height={300}  />
            <div className="flex flex-col justify-around gap-4">
                <h3 className="text-xl font-bold">Bring the future today</h3>
                <p className="text-md">Future world: Your gateway to tomorrow´s tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>

        </section>
    )
}