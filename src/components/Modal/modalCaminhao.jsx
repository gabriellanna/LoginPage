import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Alert, Button, TextField } from '@mui/material';


const style = {
    display: 'flex',
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

const input = {
    margin: '10px'
}

const ModalCaminhao = () => {

    const [placa, setPlaca] = React.useState();
    const [modelo, setModelo] = React.useState();
    const [cor, setCor] = React.useState();
    const [altura, setAltura] = React.useState();
    const [comprimento, setComprimento] = React.useState();
    const [largura, setLargura] = React.useState();
    const [volume, setVolume] = React.useState();
    const [cargaMaxima, setCargaMaxima] = React.useState();

    const handleSubmit = () => {
        const usersStorage = JSON.parse(localStorage.getItem("caminhao_db"));
        const hasUser = usersStorage?.filter((c) => c.placa === placa);
        const caminhao = {placa, modelo, cor, altura, comprimento, largura, volume, cargaMaxima}

        if (hasUser?.length) {
            return Alert("Este caminhão já está cadastrado");
        }
        let newCaminhao;

        if (usersStorage) {
            newCaminhao = [...usersStorage,  caminhao ];
        } else {
            newCaminhao = [caminhao];
        }

       

        localStorage.setItem("caminhao_db", JSON.stringify(newCaminhao));
    }

    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
                Caminhão
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField sx={input} label="Placa" variant="standard" onChange={(e) => [setPlaca(e.target.value)]}/>
                <TextField sx={input} label="Modelo" variant="standard" onChange={(e) => [setModelo(e.target.value)]}/>
                <TextField sx={input} label="Cor" variant="standard" onChange={(e) => [setCor(e.target.value)]}/>
                <TextField sx={input} label="Altura" variant="standard" onChange={(e) => [setAltura(e.target.value)]}/>
                <TextField sx={input} label="Comprimento" variant="standard" onChange={(e) => [setComprimento(e.target.value)]}/>
                <TextField sx={input} label="Largura" variant="standard" onChange={(e) => [setLargura(e.target.value)]}/>
                <TextField sx={input} label="Volume" variant="standard" onChange={(e) => [setVolume(e.target.value)]}/>
                <TextField sx={input} label="Carga Máxima" variant="standard" onChange={(e) => [setCargaMaxima(e.target.value)]}/>
                <div style={{display: 'flex', justifyContent: 'right', marginTop: '30px'}}>
                    <Button variant="contained" type='submit'>Cadastrar</Button>
                </div>
            </form>
        </Box>
    )
}

export default ModalCaminhao