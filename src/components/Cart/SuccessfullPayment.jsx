import { Check, CheckCircle } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const SuccessfullPayment = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center p-10 border-2 m-10'>
      <CheckCircle color='success' sx={{fontSize:"5rem"}}/>
      <h1 className='mb-5'>Your order(200848145) is being proccessing</h1>
      <Button color='primary'variant='contained'>See all my orders</Button>
    </div>
  )
}

export default SuccessfullPayment