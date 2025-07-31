export default function Layout({children}: {children: React.ReactNode}) {

    return (

        <main>
            <nav>
                Navegación de las categorías
                {/* El children es el contedino de la pagina */}
                {children}
            </nav>
        </main>

    )
}