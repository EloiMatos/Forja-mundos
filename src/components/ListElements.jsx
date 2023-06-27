import { Collapse, IconButton, ListItem, ListItemText } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import React from 'react'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import { Add } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';

function ListElements({isDrawerOpen, setIsDrawerOpen}){
  return (
    <list>
      <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
          <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
            <ListItemText sx={{color: "#fff"}} primary='Conexões'/>
          </Collapse>
          <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
            <AttachFileIcon sx={{color: "#fff"}}/>
          </IconButton>
      </ListItem>
      <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
          <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
            <ListItemText sx={{color: "#fff"}} primary='Elementos'/>
          </Collapse>
          <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
            <ViewInArIcon sx={{color: "#fff"}}/>
          </IconButton>
      </ListItem>
      <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Conexões'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
                <AttachFileIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>

            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Config'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
                <SettingsIcon sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>
            <ListItem sx={{display: "flex", justifyContent: "space-between"}}>
              <Collapse in={isDrawerOpen} timeout="auto" unmountOnExit orientation='horizontal'>
                <ListItemText sx={{color: "#fff"}} primary='Novo'/>
              </Collapse>
              <IconButton size='small' color='inherit' onClick={()=>{setIsDrawerOpen((previous) => !previous)}}>
                <Add sx={{color: "#fff"}}/>
              </IconButton>
            </ListItem>
    </list>
  )
}

export default ListElements