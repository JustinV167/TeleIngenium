"use client"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, } from "@mui/material";
function App() {
    return (
        <Box component="main" sx={{ p: 3, }}>
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mb: 4 }}>
                <Card sx={{ maxWidth: { xs: "100%", md: "80%", lg: "60%" }, }}>
                    <CardActionArea sx={{ p: { xs: 1, sm: 2, lg: 6 } }}>
                        <CardMedia sx={{ maxWidth: 250, mx: "auto", }}
                            component="img"
                            image="/tele.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: 40 }}>
                                ¿Quienes somos?
                            </Typography>
                            <Typography variant="body2" sx={{ color: "black" }}>
                                Nacida bajo el lema &apos;Ingenio joven, salud para el pueblo&apos;, nuestra iniciativa surge ante la crítica falta de acceso a atención sanitaria en zonas rurales, donde la escasez de infraestructura y profesionales agrava la crisis social. A través de soluciones innovadoras basadas en tecnologías de información y comunicación (TICS), conectamos a pacientes con especialistas de salud, democratizando la medicina con un enfoque técnico y humano.
                                <br />TELESALUD INGENIUM R.L. nace en el año 2025 como iniciativa de seis estudiantesde ingeniería de la Universidad Nacional Experimental Rómulo Gallegos (UNERG), movidospor la necesidad de aplicar sus conocimientos técnicos para mejorar la calidad de vidaencomunidades vulnerables. <br /><span className='px-4'></span>Durante su formación, los fundadores detectaron un problema común: la falta de accesoa atención médica en sectores rurales del país, donde no existen centros asistenciales, ni
                                médicos disponibles, ni infraestructura adecuada. <br />Esta situación, agravada por la crisis económica y social que atraviesa Venezuela, motivó la creación de una empresa de producción social orientada a utilizar las tecnologíasdela información y comunicación (TICS) como puente entre los pacientes y los profesionalesdesalud.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", my: 4 }}>
                <Card sx={{ maxWidth: { xs: "100%", md: "80%", lg: "60%" }, }}>
                    <CardActionArea sx={{ p: { xs: 1, sm: 2, lg: 6 } }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: 40 }}>
                                Misión de la Empresa
                            </Typography>
                            <Typography variant="body2" sx={{ color: "black" }}>
                                <span className='px-4'></span> Nuestra misión es desarrollar soluciones tecnológicas que permitan el acceso equitativo, oportuno y eficiente a servicios de salud a través de la telemedicina, enfocándonosespecialmente en comunidades desatendidas o de difícil acceso. Brindamos una plataformadigital inclusiva que conecta pacientes con profesionales de la salud en tiemporeal, reduciendo las barreras geográficas, económicas y sociales. Como empresa de producciónsocial, priorizamos el bienestar colectivo sobre el lucro, utilizando nuestras capacidades comoestudiantes de ingeniería al servicio de las necesidades reales del pueblo venezolano, contribuyendo así a un sistema de salud más justo, solidario y humanista.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", my: 4 }}>
                <Card sx={{ maxWidth: { xs: "100%", md: "80%", lg: "60%" }, }}>
                    <CardActionArea sx={{ p: { xs: 1, sm: 2, lg: 6 } }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: 40 }}>
                                Visión de la Empresa
                            </Typography>
                            <Typography variant="body2" sx={{ color: "black" }}>
                                Nos proyectamos como una empresa de referencia nacional e internacional en el áreadetelemedicina, reconocida por su compromiso con la salud pública, la equidad social ylainnovación tecnológica. Visualizamos un futuro donde cada ciudadano venezolano, sinimportar su ubicación o condición socioeconómica, tenga acceso a servicios de saluddecalidad mediante herramientas digitales. Aspiramos a escalar nuestras soluciones haciaunared integrada de atención médica que fortalezca el Sistema Público Nacional de Salud, contribuyendo al desarrollo sustentable del país en concordancia con el Plan de la Patria.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", my: 4 }}>
                <Card sx={{ maxWidth: { xs: "100%", md: "80%", lg: "60%" }, width: "100%" }}>
                    <CardActionArea sx={{ p: { xs: 1, sm: 2, lg: 6 } }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: 40 }}>
                                Valores que Fomentamos
                            </Typography>
                            <Typography variant="body2" sx={{ color: "black", mx: "auto", width: "fit-content" }}>
                                • Innovación: Impulsamos el uso de la tecnología para mejorar la salud.
                                <br /> • Responsabilidad Social: Trabajamos para comunidades vulnerables.
                                <br /> • Ética: Actuamos con transparencia y respeto por la vida humana.
                                <br /> • Compromiso: Estamos dedicados al bienestar colectivo.
                                <br /> • Accesibilidad: Democratizamos el acceso a la atención médica.
                                <br /> • Colaboración: Valoramos el trabajo en equipo interdisciplinario.
                                <br /> • Sustentabilidad: Buscamos un impacto positivo a largo plazo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>

    )
}

export default App