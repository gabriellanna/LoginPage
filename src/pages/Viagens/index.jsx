import * as React from 'react';
import Body from '../../components/Body/Body';
import { ContentBar } from '../Caminhao/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import ModalViagem from '../../components/Modal/modalViagem';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ListItemIcon from '@mui/material';
import BottonMenu from '../../components/Menu/menuPrincipal';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ButtonCaminhaoViagem from '../../components/Button';
import ModalViagemCaminhao from '../../components/Modal/modalViagemCaminhao';
import useAuth from '../../hooks/useAuth';




const ViagensPage = () => {

    const [open1, setOpen1] = React.useState(false);
    const [placa, setPlaca] = React.useState(false);
    const [visible, setVisible] = React.useState('none');

    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [viagem, setViagem] = React.useState();

    const IconViagemStyle = {
        width: '30px',
        height: '30px',
    };




    React.useEffect(() => {
        const list = JSON.parse(localStorage.getItem('viagem_db'));
        setViagem(list);
    }, [])

    const handleDelete = (placa) => {
        if (viagem != null) {
            const list = viagem;
            for (var i = 0; i < list.length; i++) {
                if (list[i].placa === placa) {
                    list.splice(i, 1);
                }
            }
            localStorage.setItem('viagem_db', JSON.stringify(list));
            setViagem(list)
        }
    }

    const handleModal = (id) => {

        setPlaca(id);
        setVisible('visible')
    }

    return (
        <Body>
            <ContentBar>
                <Button variant="contained" onClick={handleOpen1}><AddBoxIcon /></Button>
                <Modal
                    open={open1}
                    onClose={handleClose1}
                >
                    <ModalViagem />
                </Modal>
            </ContentBar>
            <ContentBar>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Rotas</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Placa</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Desvio Máximo&nbsp;(km)</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Volume Disponível</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Altura Disp.</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Comprimento Disp.</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Largura Disp.</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Carga Máxima Disp.&nbsp;(kg)</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {viagem?.map((row) => (
                                <TableRow key={row.placa}>
                                    <TableCell scope="row"><PinDropIcon style={IconViagemStyle} />{row.rotas}</TableCell>
                                    <TableCell align="center">{row.placa}<Button onClick={() => handleModal(row.placa)}><LocalShippingIcon /></Button></TableCell>
                                    <TableCell align="center">{row.desvioMaximo}</TableCell>
                                    <TableCell align="center">{row.volume} m</TableCell>
                                    <TableCell align="center">{row.altura} m</TableCell>
                                    <TableCell align="center">{row.comprimento} m</TableCell>
                                    <TableCell align="center">{row.largura} m</TableCell>
                                    <TableCell align="center">{row.cargaMaxima} Kg</TableCell>
                                    <TableCell align="center"><Button variant="outlined"><ModeEditOutlineIcon /></Button> <Button variant="outlined" color="error" onClick={() => handleDelete()}><DeleteForeverIcon /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <ModalViagemCaminhao display={visible} placa={placa}/>
                    </Table>
                </TableContainer>
            </ContentBar>


        </Body>
    )
}

export default ViagensPage;