

 const MenuLateral = ()=>{



    return(
        <>
            <aside className="bg-[#A86523] col-span-2 pt-15">
                <ul className="flex flex-col gap-y-4.5">
                    {/*  Opción del menú 1 */}
                    <li>
                        <a href="" className="group text-[16px] font-semibold flex items-center gap-x-4.5 pl-10 py-3 hover:bg-[rgba(245,200,87,0.3)] ">
                            <i className="fa-regular fa-user text-[25px] text-[#F2B50B] group-hover:text-[#FFE100]"></i>
                            <p className=" text-[#FCEF91] group-hover:text-white ">Mi Perfil</p>
                        </a>

                    </li>

                    {/*  Opción del menú 2 */}
                    <li>
                        <a href="" className="group  text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3 hover:bg-[rgba(245,200,87,0.3)]" >
                            <i className="fa-solid fa-wrench text-[25px] text-[#F2B50B] group-hover:text-[#FFE100]"></i>
                            <p className=" text-[#FCEF91] group-hover:text-white ">Servicios Activos</p>

                        </a>
                    </li>

                    {/*  Opción del menú 3 */}
                    <li>
                        <a href="" className="group text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3 hover:bg-[rgba(245,200,87,0.3)]">
                            <i className="fa-solid fa-chart-line text-[25px] text-[#F2B50B] group-hover:text-[#FFE100]"></i>
                            <p className=" text-[#FCEF91] group-hover:text-white ">Servicios Históricos</p>
                        </a>

                    </li>

                    {/*  Opción del menú 4 */}
                    <li>
                        <a href="" className="group text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3 hover:bg-[rgba(245,200,87,0.3)]">
                            <i className="fa-regular fa-bell text-[25px] text-[#F2B50B] group-hover:text-[#FFE100]"></i>
                            <p className=" text-[#FCEF91] group-hover:text-white ">Notificaciones</p>
                        </a>
                    </li>

                    {/*  Opción del menú 5 */}
                    <li>
                        <a href="" className="group text-[16px] font-semibold flex items-center gap-x-4.5 pl-10  py-3 hover:bg-[rgba(245,200,87,0.3)]">
                            <i className="fa-regular fa-message text-[25px] text-[#F2B50B] group-hover:text-[#FFE100]"></i>
                            <p className=" text-[#FCEF91] group-hover:text-white ">Mensajes</p>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )

}

export default MenuLateral