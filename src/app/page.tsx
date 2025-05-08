"use client"
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Box, } from '@mui/material';
import Image from 'next/image';

export default function App() {
  return (
    <Box component="main">
      <Toolbar />
      <Box sx={{ width: "100vw", height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" }, position: "relative" }}>
        <Image className="w-full h-full" width={2048} height={2048} src={"/homeBar.jpg"} alt="init" />
        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>hola</Box>
      </Box>
    </Box>
  );
}