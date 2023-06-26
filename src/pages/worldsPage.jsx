import LeftDrawer from "@/components/LeftDrawer";
import { EastContainer } from "../components/East/EastContainer"
import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import {Container} from "@mui/material";
import  Navbar  from "@/components/Navbar";

function WorldsPage() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() =>{
        <span>
            <Alert severity="info">
                <AlertTitle>É HORA DO SHOW PORRA!</AlertTitle>
            </Alert>
        </span>

    }, [])

    return(
        <main className="pb-20 items-center w-full h-screen bg-indigo-500 ">
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