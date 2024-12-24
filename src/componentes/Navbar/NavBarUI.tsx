import React, { useState, ReactNode } from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaBoxes } from 'react-icons/fa';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { IoExitOutline } from "react-icons/io5";
import { HiOutlineBars3BottomRight, HiOutlineBars3 } from "react-icons/hi2";
import Avatar from '@mui/material/Avatar';
import NavBarCss from '../CSS/NavBarView.module.css';

interface MenuItem {
    key: string;
    icon: ReactNode;
    label: string;
    path: string;
}

interface NavBarViewProps {
    children: ReactNode;
}

const items: MenuItem[] = [
    { key: '1', icon: <MdSpaceDashboard />, label: 'Dashboard', path: '/painel/dashboard' },
    { key: '2', icon: <FaBoxes />, label: 'Produtos', path: '/painel/produto' },
];

const NavBarView: React.FC<NavBarViewProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className={NavBarCss.container}>
            <Drawer
                variant="permanent"
                open={!collapsed}
                sx={{
                    width: collapsed ? 60 : 240,
                    '& .MuiDrawer-paper': {
                        width: collapsed ? 60 : 240,
                    },
                }}
                classes={{ paper: NavBarCss.drawerPaper }}
            >
                <div>
                    <Container className={NavBarCss.logoContainer}>
                        {!collapsed ? (
                            <Box
                                component="img"
                                className={NavBarCss.logo}
                                alt="Logo da empresa"
                                src={logo}
                            />
                        ) : null}
                        <IconButton onClick={toggleCollapsed} color="primary">
                            {collapsed ? (
                                <HiOutlineBars3 style={{ color: 'white' }} />
                            ) : (
                                <HiOutlineBars3BottomRight style={{ color: 'white' }} />
                            )}
                        </IconButton>
                    </Container>
                    <hr className={NavBarCss.divider} />
                    <List>
                        {items.map((item) => (
                            <ListItem key={item.key} className={NavBarCss.listItem} onClick={() => handleNavigation(item.path)}>
                                <ListItemIcon className={NavBarCss.listIcon}>{item.icon}</ListItemIcon>
                                {!collapsed && <ListItemText primary={item.label} />}
                            </ListItem>
                        ))}
                    </List>
                </div>

                <Container className={NavBarCss.footerContainer}>
                    <Avatar alt="Remy Sharp" src={avatar} />
                    {!collapsed && (
                        <>
                            <div style={{ flexDirection: 'column', display: 'flex' }}>
                                <label>Samuel Alves</label>
                                <label>Tech Lead</label>
                            </div>
                            <IconButton>
                                <IoExitOutline />
                            </IconButton>
                        </>
                    )}
                </Container>
            </Drawer>
            <div className={NavBarCss.content}>
                <div className={NavBarCss.innerContent}>{children}</div>
            </div>
        </div>
    );
};

export default NavBarView;
