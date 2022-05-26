import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import SendIcon from '@mui/icons-material/Send';

export default function registerProfessional() {
    return (

        <>
            <Head>
                <Box>
                    <h1>Cadastro de profissional</h1>

                    <label>Nome: </label>
                    <Input type="text" placeholder="Nome do profissional"></Input> <br />
                    <label>E-mail: </label>
                    <Input type="text" placeholder="E-mail do profissional"></Input> <br />
                    <label>CPF: </label>
                    <Input type="number" placeholder="CPF do profissional"></Input> <br />
                    <label>Telefone: </label>
                    <Input type="number" placeholder="Telefone do profissional"></Input> <br />
                    <div className="save">
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Cadastrar
                        </Button>
                    </div>
                </Box>

            </Head>
        </>
    )
}