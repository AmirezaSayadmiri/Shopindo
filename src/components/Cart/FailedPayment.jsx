import { Error } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const FailedPayment = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center p-10 border-2 m-10'>
      <Error color='error' sx={{fontSize:"5rem"}}/>
      <h1 className='mb-5'>Somthing went wrong with your payment</h1>
      <Button color='warning'variant='contained'>Support</Button>
    </div>
  )
}

export default FailedPayment