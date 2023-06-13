import { Add, Menu } from '@mui/icons-material'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const LeftDrawer = ({isDrawerOpen, setIsDrawerOpen}) => {
  return (
    <>
    <div className='flex ml-2 w-fit h-screen items-center'>
    <div className='flex w-16 rounded-lg  bg-purple-400 opacity-75 justify-center h-5/6'>
      <div className='flex flex-col justify-between'>
      <IconButton className='bg-purple-500 h-fit flex m-2 p-2' size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
        <Menu/>
      </IconButton>
      <IconButton className='h-fit flex m-2 p-2' size='large' edge='start' color='inherit'>
        <Add/>
      </IconButton>
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
    </>
  )
}

export default LeftDrawer