import LeftDrawer from "@/components/west/LeftDrawer";
import { EastContainer } from "../components/east/list/EastContainer"
import { useState } from "react";
import {Container} from "@mui/material";
import { Navbar } from "@/components/Navbar";

function WorldsPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return(
        <main className="p-1 items-center w-full h-full bg-indigo-500 ">
            <Navbar/>
            <Container 
                maxWidth={false} 
                className='h-full'
                sx={{display: "flex", flexDirection: "row",justifyContent:"space-between"}}
            >
                <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
                <EastContainer/>
            </Container>
        </main>
    )
}

export default WorldsPage;