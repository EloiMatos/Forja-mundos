import { Collapse, IconButton, ListItem, ListItemText } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import React from 'react'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import { Add } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import { AutoAwesomeMosaic } from '@mui/icons-material';
export function ListItemColapse ({isDrawerOpen, setIsDrawerOpen, icon, text}) {
    const styleIcon = {
        color: "#fff"
    };
    const iconesBotoes = {
        listas: <ListIcon sx={styleIcon}/>,
        modelos: <AutoAwesomeMosaic sx={styleIcon}/>,
        conexoes: <AttachFileIcon sx={styleIcon}/>,
        elementos: <ViewInArIcon sx={styleIcon}/>,
        config: <SettingsIcon sx={styleIcon}/>,
        novo: <Add sx={styleIcon}/>
    };
    const Icon = function () {
        return iconesBotoes[icon];
    };

    return (
        <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
            <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary={text}/>
            </Collapse>
            <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
                <Icon/>
            </IconButton>
        </ListItem>
    );
}