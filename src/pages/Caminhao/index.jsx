import * as React from 'react';
import Body from '../../components/Body/Body';
import { ContentBar } from './styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import ModalCaminhao from '../../components/Modal/modalCaminhao';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';



const CaminhaoPage = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [caminhao, setCaminhao] = React.useState();

    React.useEffect(() => {
        const list = JSON.parse(localStorage.getItem('caminhao_db'));
        setCaminhao(list);
    }, [])

    const handleDelete = (placa) => {
        if (caminhao != null) {
            const list = caminhao;
            for (var i = 0; i < list.length; i++) {
                if (list[i].placa === placa) {
                    list.splice(i, 1);
                }
            }
            localStorage.setItem('caminhao_db', JSON.stringify(list));
            setCaminhao(list)
        }
    }

    return (
        <Body>
            <ContentBar>
                <Button variant="contained" onClick={handleOpen}><AddBoxIcon /></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalCaminhao />
                </Modal>
            </ContentBar>
            <ContentBar>
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
                                    <TableCell align="center"><Button variant="outlined"><ModeEditOutlineIcon /></Button> <Button variant="outlined" color="error" onClick={() => handleDelete()}><DeleteForeverIcon /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ContentBar>


        </Body>
    )
}

export default CaminhaoPage;