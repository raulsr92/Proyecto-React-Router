

 const MenuLateral = ()=>{



    return(
        <>
            <aside className="bg-[#FFFDEA] col-span-2 pt-15">
                <ul className="flex flex-col gap-y-4.5">
                    {/*  Opción del menú 1 */}
                    <li>
                        <a href="" className="text-[16px] font-semibold flex items-center gap-x-4.5 pl-10 py-3">
                            <i className="fa-regular fa-user text-[25px] text-[#2050E4]  "></i>
                            Mi Perfil
                        </a>

                    </li>

                    {/*  Opción del menú 2 */}
                    <li>
                        <a href="" className="text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3" >
                            <i className="fa-solid fa-wrench text-[25px] text-[#2050E4]"></i>
                            Servicios Activos
                        </a>
                    </li>

                    {/*  Opción del menú 3 */}
                    <li>
                        <a href="" className="text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3">
                            <i className="fa-solid fa-chart-line text-[25px] text-[#2050E4]"></i>
                            Servicios Históricos
                        </a>

                    </li>

                    {/*  Opción del menú 4 */}
                    <li>
                        <a href="" className="text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3">
                            <i className="fa-regular fa-bell text-[25px] text-[#2050E4]"></i>
                            Notificaciones
                        </a>
                    </li>

                    {/*  Opción del menú 5 */}
                    <li>
                        <a href="" className="text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3">
                            <i className="fa-regular fa-message text-[25px] text-[#2050E4]"></i>
                            Mensajes
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )

}

export default MenuLateral