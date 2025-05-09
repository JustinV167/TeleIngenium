"use client"
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Box, Typography, } from '@mui/material';
import Image from 'next/image';

export default function App() {
  return (
    <Box >
      <Toolbar />
      <Box sx={{ width: "100vw", height: { xs: "50vh", sm: "60vh", md: "65vh", lg: "80vh" }, position: "relative", backgroundImage: "linear-gradient(to bottom, #023146, #05548B)" }}>
        <Box sx={{ position: "absolute", bottom: { xs: "80%", md: "60%" }, left: { xs: "50%", md: "5%" }, transform: { xs: "translate(-50%, -50%)", md: "none" }, zIndex: 1 }}>
          <Typography sx={{ fontSize: { xs: 35, sm: 50 }, color: "white", fontWeight: "bold" }}>
            TeleIngenium
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: { xs: "75%", md: "55%" }, left: { xs: "50%", md: "5%" }, transform: { xs: "translate(-50%, -50%)", md: "none" }, zIndex: 1 }}>
          <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "#F8FAFC", opacity: 0.9, minWidth: 260 }}>
            &apos;Ingenio joven, salud para el pueblo&apos;
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: 0, right: { xs: "50%", md: "6%", lg: "10%" }, transform: { xs: "translate(50%, 0%)", md: "none" }, width: { xs: 300, md: 500, lg: 600 } }}>
          <Image className="w-full h-full" src={"/phoneDoctors.png"} alt='phone' width={512} height={512}></Image>
        </Box>
        <Box sx={{ position: "absolute", bottom: "5%", left: "0%", transform: { md: "rotate(10deg)" }, width: { xs: 0, md: 300, lg: 400 } }}>
          <Image className="w-full h-full" src={"/fly.png"} alt='phone' width={512} height={512}></Image>
        </Box>
      </Box>
      <Box sx={{ width: "100vw", padding: 5, display: "flex", flexDirection: { xs: "column", md: "initial" } }}>
        <Box sx={{ width: "30%", display: "flex", justifyContent: "center", "alignItems": "center", marginX: "auto" }}>
          <Image className="w-full " src={"/computerDoctor.png"} alt='phone' width={512} height={512}></Image>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: { xs: 24, md: 28 }, opacity: 0.9, textAlign: "center" }}>
            ¿Que es TeleIngenium?
          </Typography>
          <Typography sx={{ fontSize: { md: 16 }, opacity: 0.9, marginX: { sm: 5, md: "auto" }, paddingX: { md: 10 }, marginY: 2, maxWidth: 900 }}>
            Teleingenium es una aplicación innovadora diseñada para facilitar servicios de telemedicina, permitiendo a pacientes y profesionales de la salud conectarse de manera remota mediante tecnologías digitales. Su objetivo es eliminar barreras geográficas y mejorar el acceso a atención médica de calidad, especialmente en situaciones donde la consulta presencial no es viable o práctica
          </Typography>
          <Typography sx={{ fontSize: { xs: 24, md: 28 }, opacity: 0.9, textAlign: "center", marginTop: { xs: 4, md: 10 } }}>
            ¿Que es la Telemedicina?
          </Typography>
          <Typography sx={{ fontSize: { md: 16 }, opacity: 0.9, marginX: { sm: 5, md: "auto" }, paddingX: { md: 10 }, marginY: 2, maxWidth: 900 }}>
            La telemedicina es el uso de tecnologías digitales (como internet, videollamadas y dispositivos móviles) para brindar servicios médicos a distancia. Permite que médicos y pacientes interactúen sin necesidad de estar físicamente en el mismo lugar, revolucionando el acceso a la salud, especialmente en áreas remotas o con limitaciones de recursos.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}