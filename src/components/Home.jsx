import MiPerfil from "./homeSubComponents/MiPerfil"
import ServiciosActivos from "./homeSubComponents/ServiciosActivos"

import MenuLateral from "./MenuLateral"
import {Route, Routes} from 'react-router-dom'


 const Home = ()=>{



    return(
        <>
            <main className="bg-amber-100 min-h-screen grid grid-cols-12 ">
                <MenuLateral/> {/* Ancho: 2 columnas*/ }

                <div className="col-span-10">  {/* Ancho: 10 columnas*/ }
                    <Routes>

                        <Route index element={<MiPerfil/>}/>
                        <Route path="activos" element={<ServiciosActivos/>}/>

                    </Routes>
                </div>
            </main>        
        </>
    )

}

export default Home