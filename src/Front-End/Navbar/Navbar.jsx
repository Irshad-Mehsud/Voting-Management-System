import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import DarkLightSwitch from '../components/Switch.jsx';
import { FaBars } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar({ onToggleSidebar }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(145deg, #F5B7B1, #FAD0C4)',
        color: '#3E2723',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #f8d7da',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onToggleSidebar}
            >
              <FaBars />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ mr: 4 }}>
            <DarkLightSwitch />
          </Box>

          <Box sx={{ flexGrow: 0, mr: 4 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '53px', ml: 4 }}
              id="user-menu"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
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
      </Container>
    </AppBar>
  );
}

export default Navbar;
