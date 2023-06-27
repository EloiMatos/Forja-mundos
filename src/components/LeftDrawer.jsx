import { Add, Menu } from '@mui/icons-material';
import { List } from "@mui/material";
import {Box} from '@mui/material';
import { IconButton, Typography } from '@mui/material'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListIcon from '@mui/icons-material/List';
import Collapse from '@mui/material/Collapse';
import React from 'react'
import {ListItemText, ListItem} from "@mui/material";

const LeftDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  return (
    <Box className='flex items-center max-w-fit'>
      <Box className='flex rounded-lg  bg-purple-400 opacity-75 justify-center flex-row'>
        <Box className='flex flex-col justify-between'>
          <List>
            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} color='white' primary='Listas'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <ListIcon  sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>

            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Modelos'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <AutoAwesomeMosaicIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>

            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Elementos'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <ViewInArIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>
          </List>
          <List>
            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Conexões'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <AttachFileIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>

            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Config'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <SettingsIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>
            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Novo'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen(previous => !previous)}}>
                <Add sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>
          </List>
      </Box>
      </Box>
    </Box>
  );
}

export default LeftDrawer