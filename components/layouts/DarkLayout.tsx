import { FC } from "react"


type Props = {
  children: React.ReactNode
}


export const DarkLayout : FC<Props> = ({children}) => {
  return (
    <div style={{backgroundColor:'gray',padding:'10px',borderRadius:'5px'}}>
        <h3>Dark layout</h3>

        <div>
            {children}
        </div>
       
    </div>
  )
}
