

 const MenuLateral = ()=>{



    return(
        <>
            <aside className="bg-green-300 col-span-2 pt-15">
                <ul className="flex flex-col gap-y-4.5">
                    {/*  Opción del menú 1 */}
                    <li>
                        <a href="">
                            <i class="fa-regular fa-user"></i>
                            Mi Perfil
                        </a>

                    </li>

                    {/*  Opción del menú 2 */}
                    <li>
                        <a href="">
                            <i class="fa-solid fa-wrench"></i>
                            Servicios Activos
                        </a>
                    </li>

                    {/*  Opción del menú 3 */}
                    <li>
                        <a href="">
                            <i class="fa-solid fa-chart-line"></i>
                            Servicios Históricos
                        </a>

                    </li>

                    {/*  Opción del menú 4 */}
                    <li>
                        <a href="">
                            <i class="fa-regular fa-bell"></i>
                            Notificaciones
                        </a>
                    </li>

                    {/*  Opción del menú 5 */}
                    <li>
                        <a href="">
                            <i class="fa-regular fa-message"></i>
                            Mensajes
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )

}

export default MenuLateral