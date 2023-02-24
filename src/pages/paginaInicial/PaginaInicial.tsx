import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"




export const PaginaInicial = () => {


    return(

        <Card sx={{width: '60%', margin: '5% auto auto auto', backgroundColor: 'black', borderRadius: '20px'}}>
            <CardContent>
                <Typography align='center' variant="h3" color='white'>
                    Seja bem vindo ao projeto <Typography variant="h2" color='green'>NUTRI+</Typography>
                </Typography>
            </CardContent>
        </Card>
    )
}