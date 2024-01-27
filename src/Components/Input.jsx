import { TextField } from '@mui/material'
import React from 'react'

export const Input = (props) => {
    const {placeholder,type, id, onChange,required } = props
  return (
    <TextField sx={{ width: '650px',
        marginLeft:'20px',
        height: '40px',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        outline: '0',
        marginBottom:'30px',}}
    required={required}
    placeholder={placeholder}
    type={type}
    id={id}
    onChange={onChange}
     />
  )
}