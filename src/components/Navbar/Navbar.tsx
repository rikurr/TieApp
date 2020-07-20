import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { ArrowBack, AccountCircle, Home } from '@material-ui/icons';
import SortIcon from '@material-ui/icons/Sort';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectTheme, toggleTheme } from '../../modules/themeSlice';

type NavbarState = {
  right: boolean;
};

function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);

  const handleToggleTheme = () => {
    if (mode === 'dark') {
      localStorage.setItem('theme', 'light');
      dispatch(toggleTheme(localStorage.getItem('theme') as 'light' | 'dark'));
    } else {
      localStorage.setItem('theme', 'dark');
      dispatch(toggleTheme(localStorage.getItem('theme') as 'light' | 'dark'));
    }
  };

  const [path, setPath] = useState<string>('');
  const [state, setState] = useState<NavbarState>({
    right: false,
  });

  useEffect(() => {
    setPath(() => location.pathname);
  }, [location]);

  const toggleAuth = (login: boolean): any => {
    if (login) {
      history.push('/homeguest');
    } else {
      history.push('/signin');
    }
  };

  const toggleSlider = (slider: string, open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider: string) => (
    <SliderWrap onClick={toggleSlider('right', false)}>
      <List>
        <ListItem onClick={() => history.push('/')} button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='ホーム' />
        </ListItem>
        <ListItem onClick={() => history.push('/feed')} button>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary='フィード' />
        </ListItem>
        <ListItem onClick={() => history.push('/rating')} button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary='レーティング' />
        </ListItem>
        <ListItem onClick={() => toggleAuth(true)} button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={'hello' ? 'サインアウト' : 'サインイン'} />
        </ListItem>
      </List>
    </SliderWrap>
  );
  return (
    <>
      <Box component='nav'>
        <CustomAppBar position='fixed'>
          <CustomToobar>
            {path.replace('/', '') &&
            path !== 'create-habit' &&
            path !== 'homeguest' ? (
              <IconButton onClick={() => history.goBack()}>
                <ArrowBack />
              </IconButton>
            ) : null}
            <Typography
              style={{ flexGrow: 1 }}
              variant='h1'
            >
              TieApp
            </Typography>

            <Switch
              checked={mode === 'light' ? false : true}
              onClick={handleToggleTheme}
            />

            <IconButton onClick={toggleSlider('right', true)}>
              <MenuIcon />
            </IconButton>
            <MobilRightMenuSlider
              onClose={toggleSlider('right', false)}
              anchor='right'
              open={state.right}
            >
              {sideList('right')}
            </MobilRightMenuSlider>
          </CustomToobar>
        </CustomAppBar>
      </Box>
    </>
  );
}

const SliderWrap = styled.div`
  width: 250px;
  height: 100%;
`;

const CustomAppBar = styled(AppBar)`
  background: ${(p) => p.theme.palette.background.paper};
`;

const CustomToobar = styled(Toolbar)`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  @media (max-width: 1000px) {
    width: 94%;
  }
`;

export { Navbar };
