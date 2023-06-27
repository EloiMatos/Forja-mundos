import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { EastList } from "./list/EastList";

export function EastContainer () {
    return (
        <Container maxWidth={false} className="bg-indigo-400 border-indigo-400 rounded-xl w-full ml-10">
            <Typography variant="h4" align="center">Modulo Name</Typography>
            <EastList  />
        </Container>
    );
}