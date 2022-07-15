import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import EditForm from './EditForm';
import DeleteForm from './DeleteForm';

export default function ProductCard ({data}) {
    return (
        <>
            <Card sx={{ width: 300, height: 330 }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end'}} >
                        <EditForm />

                        <DeleteForm />
                    </Box>
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            height='200'
                            src={data.imageurl}
                            alt={data.name}
                        />
                    </CardActionArea>

                    <Box>
                        <CardContent>
                            <Typography variant='h5'>{data.name}</Typography>
                            <Typography variant='body1'>{data.price}</Typography>
                        </CardContent>
                    </Box>
                </Box>
            </Card>
        </>
    )
}