import { Add, Menu } from '@mui/icons-material'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ListIcon from '@mui/icons-material/List';
import React from 'react'

const LeftDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  return (
    <div className='flex w-30 items-center'>
      <div className='flex w-16 rounded-lg  bg-purple-400 opacity-75 justify-center h-5/6'>
        <div className='flex flex-col justify-between'>
          <div>
            <IconButton className='bg-purple-500 h-fit flex m-2 p-2' size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
              <ListIcon/>
            </IconButton>
            <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
              <AutoAwesomeMosaicIcon />
            </IconButton>
            <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
              <ViewInArIcon />
            </IconButton>
            <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
              <AttachFileIcon />
            </IconButton>
          </div>
          <div>
            <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
              <SettingsIcon/>
            </IconButton>
            <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
              <Add/>
            </IconButton>
          </div>
      </div>
      </div>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} anchor='left'>
        <Box p={2} width='250px' textAlign='center'>
          <Typography variant='h6' component='div'>
              SideBar
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
}

export default LeftDrawer