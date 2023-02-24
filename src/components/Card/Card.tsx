import { CardContent, Typography } from "@mui/material"
import { ReactNode } from "react"


interface ICard {
    children: ReactNode
}


export const Card = (props: ICard) => {

    return(
        <Card>
            <CardContent>
                <Typography>
                    {props.children}
                </Typography>
            </CardContent>
        </Card>
    )
}