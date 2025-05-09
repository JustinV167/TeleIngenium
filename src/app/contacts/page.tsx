"use client"
import { Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const iconsList = [{ name: "Whatsapp", link: "https://whatsapp.com/channel/0029Vb66w5b0rGiHDXgp8v3u" }, { name: "X", link: "https://x.com/Telegenium?t=s9WQYL2YmtzgtUfYKX9zMA&s=08" }, { name: "Instagram", link: "https://www.instagram.com/telegenium?utm_source=qr&igsh=OHczbGdhcTJtZ21y" }, { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61575734597004" }]
export default function App() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", }}>
            <Toolbar sx={{ height: { xs: 24, sm: 64, }, width: "100%", }} ></Toolbar>
            <Box sx={{
                width: "100vw", flex: 1, backgroundImage: "linear-gradient(to bottom, #023146, #05548B)", color: "white",
                display: "flex", flexDirection: "column", justifyContent: { sm: "center" }
            }}>
                <Typography sx={{ textAlign: "center", my: 4, mx: 2, fontSize: { xs: 24, sm: 32, md: 36, lg: 48 } }}>
                    ¡Contactanos a través de nuestras redes sociales!
                </Typography>
                <Toolbar sx={{ marginX: "auto", width: "90%", justifyContent: "space-around", flexWrap: "wrap", gap: 4, }}>
                    {iconsList.map((item) => <Link target="_blank" href={item.link} key={item.name} > <Box sx={{
                        width: { xs: 80, sm: 98, md: "auto" }, '&:hover': { transform: 'scale(1.05)', }, cursor: "pointer"
                    }}>
                        <Image src={`/icons/${item.name}.svg`} alt={item.name} width={128} height={128}></Image>
                        <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                            {item.name}
                        </Typography>
                    </Box></Link>)}
                </Toolbar>
                <Typography sx={{ textAlign: "center", my: 6, mx: 2, fontSize: { sm: 16, md: 20, lg: 24 }, mb: { xs: 0, sm: 25, md: 30 } }}>
                    Tu aliado en telesalud  para una vida mas sana y feliz
                </Typography>
            </Box>
        </Box>
    )
}
