"use client"
import React from 'react'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
const drawerWidth = 240;
const navItems = [{ name: 'Inicio', link: "/" }, { name: 'Nosotros', link: "/about" }, { name: 'Contactos', link: "/contacts" }];
const itemsNotShadow = ["/", "/contacts"]
interface Props {
    children: React.ReactNode;
    window?: () => Window;
}
function Navbar(props: Props) {
    const { window } = props;
    const router = useRouter()
    const path = usePathname()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div className='cursor-pointer' onClick={() => router.push("/")}>
                <Toolbar>
                    <Image className="mx-2" src={"/tele.png"} alt="" width={40} height={40} />
                    <Typography variant="h6" sx={{ my: 2 }}>
                        TeleIngenium
                    </Typography>
                </Toolbar>
            </div>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(item.link)} >
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', padding: 0, margin: 0 }}>
            <AppBar component="nav" sx={{ backgroundColor: "#023146", ...(itemsNotShadow.includes(path) ? { boxShadow: "none" } : {}) }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flex-grow cursor-pointer' onClick={() => router.push("/")}>
                        <Toolbar sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: { xs: 'none', sm: 'block' }, }} >
                                <Image className="mx-2" src={"/tele.png"} alt="" width={40} height={40} />
                            </Box>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                TeleIngenium
                            </Typography>
                        </Toolbar>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        {navItems.map((item) => (
                            <Button key={item.name} sx={{ color: '#fff', ":hover": { opacity: 0.8 } }} onClick={() => router.push(item.link)}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            {props.children}
        </Box>

    )
}

export default Navbar