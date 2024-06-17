import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material'; 
import { styled } from '@mui/material/styles'; 

import { SocketContext } from '../socketContext';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
  },
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  width: '600px',
  margin: '35px 0',
  padding: 0,
  [theme.breakpoints.down('xs')]: {
    width: '80%',
  },
}));

const PaddingGrid = styled(Grid)({
  padding: 20,
});

const PaperStyled = styled(Paper)({
  padding: '10px 20px',
  border: '2px solid black',
});

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <ContainerStyled>
      <PaperStyled elevation={10}>
        <form noValidate autoComplete="off">
          <GridContainer container>
            <PaddingGrid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} style={{ marginBottom: 20 }}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </PaddingGrid>
            <PaddingGrid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} style={{ marginTop: 20 }}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={{ marginTop: 20 }}>
                  Call
                </Button>
              )}
            </PaddingGrid>
          </GridContainer>
        </form>
        {children}
      </PaperStyled>
    </ContainerStyled>
  );
};

export default Options;
