import { List } from "@mui/material";
import {Box} from '@mui/material';
import React from 'react'
import ListElement from './ListElements';

function LeftDrawer ({isDrawerOpen, setIsDrawerOpen}) {
  return (
    <Box className='flex items-center max-w-fit'>
      <Box className='flex rounded-lg  bg-purple-400 opacity-75 justify-center flex-row'>
        <Box className='flex flex-col justify-between'>
          <List>
            <ListElement isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
          </List>
      </Box>
      </Box>
    </Box>
  );
}

export default LeftDrawer