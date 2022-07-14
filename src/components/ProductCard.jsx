import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export default function ProductCard (data) {
    return (
        <>
            <Card sx={{ width: 300, height: 330 }}>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end'}} >
                        <IconButton aria-label='Edit' onClick={() => {console.log('edit')}}>
                            <ModeEditOutlineOutlinedIcon />
                        </IconButton>

                        <IconButton aria-label="Delete" onClick={() => {console.log('delete')}}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Box>
                    <CardMedia 
                        component='img'
                        height='200'
                        image={data.imageurl}
                        alt={data.name}
                    />
                    
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