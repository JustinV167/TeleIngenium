"use client"
import { Box, Button, Card, CardActions, CardContent, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
        <Box component="main" sx={{ p: 3, mx: "auto" }}>
            <Toolbar />
            <Box >
                <Card sx={{ minWidth: 440, minHeight: 320 }}>
                    <CardContent >
                        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
                            ¡Ha ocurrido un error!
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
                            Error 404
                        </Typography>
                        <Box sx={{ my: 7 }}>

                            <Typography variant="body2" sx={{ textAlign: "center", mt: "auto" }}>
                                No se ha encontrado está página
                                <br />
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
                                :(
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{ ml: 2 }} onClick={() => router.push("/")}>Volver al Inicio</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}