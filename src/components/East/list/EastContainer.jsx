import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { EastList } from "./EastList";

export function EastContainer () {
    return (
        <Container maxWidth={false} className="bg-indigo-400 rounded-xl w-full ml-10">
            <Typography className='text-white p-2' variant="h4" align="center">Lobby de mundos</Typography>
            <EastList  />
        </Container>
    );
}