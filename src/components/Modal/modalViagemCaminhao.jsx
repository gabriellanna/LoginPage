import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';


const ModalViagemCaminhao = ({placa, display}) => {
        const [caminhao, setCaminhao] = React.useState();
    const [item, setItem] = React.useState();

    React.useEffect(() => {
        const usersStorage = JSON.parse(localStorage.getItem("caminhao_db"));
        const carro = usersStorage?.filter((c) => c.placa === placa);
        setCaminhao(carro);
        setItem(display);
    }, [placa, display]);

    const style = {
        display: item,
        position: 'absolute',
        flexDirection: 'column',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        borderRadius: '10px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                Dados do caminhão
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Placa</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Modelo</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Cor</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Altura</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Comprimento</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Largura</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Carga Máxima&nbsp;(kg)</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Opções</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {caminhao?.map((row) => (
                            <TableRow key={row.placa}>
                                <TableCell scope="row">{row.placa}</TableCell>
                                <TableCell align="center">{row.modelo}</TableCell>
                                <TableCell align="center">{row.cor}</TableCell>
                                <TableCell align="center">{row.altura} m</TableCell>
                                <TableCell align="center">{row.comprimento} m</TableCell>
                                <TableCell align="center">{row.largura} m</TableCell>
                                <TableCell align="center">{row.volume} m</TableCell>
                                <TableCell align="center">{row.cargaMaxima} Kg</TableCell>
                                <TableCell align="center"><Button variant="outlined"><ModeEditOutlineIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={() => setItem('none')}>Fechar</Button>
            </TableContainer>
        </Box>
    )
}

export default ModalViagemCaminhao;