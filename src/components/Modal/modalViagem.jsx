import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import Maps from '../Maps';


const style = {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    borderRadius: '10px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const input = {
    margin: '10px'
}

const ModalViagem = () => {

    const [rotas, setRotas] = React.useState();
    const [placa, setPlaca] = React.useState();
    const [desvioMaximo, setDesvioMaximo] = React.useState();
    const [volume, setVolume] = React.useState();
    const [altura, setAltura] = React.useState();
    const [comprimento, setComprimento] = React.useState();
    const [largura, setLargura] = React.useState();
    const [cargaMaxima, setCargaMaxima] = React.useState();

    const [qntRotas, setQntRotas] = React.useState([1]);

    const handleSubmit = () => {
        const usersStorage = JSON.parse(localStorage.getItem("viagem_db"));
        const viagem = { rotas, placa, desvioMaximo, volume, altura, comprimento, largura, cargaMaxima }


        let newViagem;

        if (usersStorage) {
            newViagem = [...usersStorage, viagem];
        } else {
            newViagem = [viagem];
        }



        localStorage.setItem("viagem_db", JSON.stringify(newViagem));
    }

    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
                Adicionar Viagem
            </Typography>
            <form onSubmit={handleSubmit}>
                <Button variant="contained" onClick={() => setQntRotas([...qntRotas,qntRotas.length+1])}>+</Button>
                <div><TextField sx={input} label="Local de partida" variant="standard" onChange={(e) => [setRotas(e.target.value)]} /></div>

                {qntRotas.map((qnt) => (
                  <div><TextField sx={input} label="Local de entrega" variant="standard" onChange={(e) => [setRotas(e.target.value)]} /></div>
                ))}
                
                <Maps />                
                <TextField sx={input} label="Placa" variant="standard" onChange={(e) => [setPlaca(e.target.value)]} />
                <TextField sx={input} label="Desvio Máximo" variant="standard" onChange={(e) => [setDesvioMaximo(e.target.value)]} />
                <TextField sx={input} label="Volume" variant="standard" onChange={(e) => [setVolume(e.target.value)]} />
                <TextField sx={input} label="Altura" variant="standard" onChange={(e) => [setAltura(e.target.value)]} />
                <TextField sx={input} label="Comprimento" variant="standard" onChange={(e) => [setComprimento(e.target.value)]} />
                <TextField sx={input} label="Largura" variant="standard" onChange={(e) => [setLargura(e.target.value)]} />
                <TextField sx={input} label="Carga Máxima" variant="standard" onChange={(e) => [setCargaMaxima(e.target.value)]} />
                <div style={{ display: 'flex', justifyContent: 'right', marginTop: '30px' }}>
                    <Button variant="contained" type='submit'>Cadastrar</Button>
                </div>
            </form>
        </Box>
    )
}

export default ModalViagem;