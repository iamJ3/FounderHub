import React, { ReactNode } from 'react'

const layoutofroot = ({children}:{children:ReactNode}) => {
  return (<>
   <h1>navbar</h1>
   {children}
  </>
  )
}

export default layoutofroot