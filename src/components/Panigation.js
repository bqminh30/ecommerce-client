import React from 'react'
import usePagination from '../hooks/usePagination'
import {Pagitem} from './'


const Panigation = ({totalCount}) => {
    const pagination = usePagination(totalCount, 2)
  return (
    <div className='flex items-center'>
        {
            pagination?.map(el => (
                <Pagitem key={el}>
                    {el}
                </Pagitem>
            ))
        }
    </div>
  )
}

export default Panigation