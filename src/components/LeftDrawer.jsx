import { List } from "@mui/material";
import {Box} from '@mui/material';
import { ListItemColapse } from "./ListItemColapse";
import React from 'react'

function LeftDrawer ({isDrawerOpen, setIsDrawerOpen}) {
  return (
    <Box className='flex items-center max-w-fit'>
      <Box className='flex rounded-lg  bg-purple-400 opacity-75 justify-center flex-row'>
        <Box className='flex flex-col justify-between'>
          <List>
            <ListItemColapse 
              isDrawerOpen = {isDrawerOpen} 
              setIsDrawerOpen = {setIsDrawerOpen}
              icon = 'listas'
              text = 'Listas'
            />
            <ListItemColapse 
              isDrawerOpen = {isDrawerOpen} 
              setIsDrawerOpen = {setIsDrawerOpen}
              icon = 'modelos'
              text = 'Modelos'
            />
              <ListItemColapse 
                isDrawerOpen = {isDrawerOpen} 
                setIsDrawerOpen = {setIsDrawerOpen}
                icon = 'elementos'
                text = 'Elementos'
              />
            </List>
            <List>
              <ListItemColapse 
                isDrawerOpen = {isDrawerOpen} 
                setIsDrawerOpen = {setIsDrawerOpen}
                icon = 'conexoes'
                text = 'Conexões'
              />
              <ListItemColapse 
                isDrawerOpen = {isDrawerOpen} 
                setIsDrawerOpen = {setIsDrawerOpen}
                icon = 'config'
                text = 'Configuração'
              />
              <ListItemColapse 
                isDrawerOpen = {isDrawerOpen} 
                setIsDrawerOpen = {setIsDrawerOpen}
                icon = 'novo'
                text = 'Novo'
              />
          </List>
      </Box>
    </Box>
  </Box>
  );
}

export default LeftDrawer