import Image from "next/image"

const PLACE_HOLDER_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNg4REJi0qycXIXEBRniE3Kev7hS0RckqiUHINPWPKRc1cv3nqoY2wFAOIoDh6Gue1OAAAAAElFTkSuQmCC"

export const Description = () => {
    return(
        <section className="flex gap-8 w-2/3 mt-18 ">
            <figure className="w-[600px] h-[200px] relative">
                <Image src="/images/descriptionimage.webp" alt="Products marketplace"  fill placeholder="blur" blurDataURL={PLACE_HOLDER_IMAGE} />
            </figure>
            
            <div className="flex flex-col justify-around gap-4">
                <h3 className="text-xl font-bold">Bring the future today</h3>
                <p className="text-md">Future world: Your gateway to tomorrow´s tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>

        </section>
    )
}