import Link from "next/link"


export const Header = () => {


    return(
        <header className="w-full ">
          <nav className="" >
            <ul className="flex justify-center gap-8 p-4">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>Store</li>
              </Link>
              
            </ul>
          </nav>
        </header>
    )

}