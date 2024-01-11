import { MouseEvent, Suspense, useState } from 'react';

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';

import { Navigation } from '@/components/ui/navigation';
import { useDisclosure } from '@/hooks/use-disclosure';

import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const MainLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton aria-label="menu" color="inherit" edge="start" size="large" sx={{ mr: 2 }} onClick={onOpen}>
              <MenuIcon />
            </IconButton>
            <Link color="common.white" component={RouterLink} to="/" underline="none">
              <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
                Dashboard
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 0, ml: 'auto' }}>
              <IconButton aria-label="show 4 new mails" color="inherit" size="large">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit" size="large">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://iconape.com/wp-content/png_logo_vector/avatar-6.png"
                    sx={{ width: 48, height: 48 }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                keepMounted
                anchorEl={anchorElUser}
                id="menu-appbar"
                open={Boolean(anchorElUser)}
                sx={{ mt: '45px' }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack direction="row" p={2} spacing={2}>
        <Paper sx={{ width: 280, maxWidth: '100%' }}>
          <Navigation />
        </Paper>

        <Box component="main" sx={{ minWidth: 'calc(100% - 288px)' }}>
          <Suspense fallback={<Box>Loading...</Box>}>
            <Outlet />
          </Suspense>
        </Box>
      </Stack>

      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <Box minWidth={360} p={2} role="presentation">
          <h3>Navigation</h3>
          <Navigation />
        </Box>
      </Drawer>
    </>
  );
};
