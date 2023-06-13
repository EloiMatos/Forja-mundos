import LeftDrawer from "@/components/LeftDrawer";
import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

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
        <>
        <main className="h-screen w-screen bg-indigo-500">
            <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
        </main>
        </>
    )
}

export default WorldsPage;