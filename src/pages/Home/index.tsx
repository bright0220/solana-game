import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, Container, CssBaseline, Fab, Grid, IconButton, ImageList, ImageListItem, Menu, MenuItem, Toolbar, Typography, Zoom } from "@mui/material"
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from "@mui/icons-material/Menu"
import { styled } from '@mui/material/styles';
import KeyboardArrowUpIcon  from "@mui/icons-material/KeyboardArrowUp"

const pages = [ 'Home', 'About', 'Team', 'Roadmap', 'FAQ', 'Discord', 'Twitter' ];

const imageData = [
  {
    img: '/images/33.png',
    title: 'Breakfast',
  },
  {
    img: '/images/4.png',
    title: 'Breakfast',
  },
];

const teamData = [
  {
    img: '/images/team/5915-1.png',
    name: 'LUMHUI',
    role: 'Art Director',
    detail: 'Visual artist Co-founder of SDA'
  },
  {
    img: '/images/team/173.png',
    name: 'GUMYSS',
    role: 'Developer',
    detail: 'App designer Co-founder of SDA'
  },
  {
    img: '/images/team/6275-1.png',
    name: 'SLOTHYSEMEN',
    role: 'Core team',
    detail: 'Solana Doodle Apes whale'
  },
  {
    img: '/images/team/7614.png',
    name: 'WHALE APE ANGEL',
    role: 'Core team',
    detail: 'Solana Doodle Apes whale'
  },
];

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Home() {
  const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
  return (
    <>
      <CssBaseline />
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
      <AppBar position="static" sx={{ my: 12.5 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters id="back-to-top-anchor">
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <Avatar alt="" src="/logo.png" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              <Avatar alt="" src="/logo.png" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white' }}>
                  <Typography textAlign="center">{page}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{py: 4}}>
        <Grid container spacing={2}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs={7}>
              <Typography style={{ color: "white", fontSize: '70px', lineHeight: '60px' }}>
                70% OF ALL ROYALTIES FROM TRADING FEES ARE SENT BACK TO HOLDERS ONCE A MONTH.
              </Typography>
              <Button style={{ marginTop: '2em', width: '160px', height: '80px'}} variant="contained">Mint</Button>
              <hr style={{ marginTop: '2em', marginBottom: '2em' }}/>
              <Typography style={{ color: "white", fontSize:"25px" }}>
                MINT TIME <br/>
              </Typography>
              <Typography style={{ color: "white", fontSize:"44px" }}>
                MINT IS LIVE!<br/>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <ButtonBase>
              <Img src="/images/banner-image-1.png" alt="" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Container>
      <Container style={{ maxWidth: "100%" }}>
        <Box>
          <Grid container style={{color: "white", fontSize: '16px'}}>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <strong style={{fontSize: '25px'}}>SDA FLOOR SWEEPING TIME</strong><br/>
              Countdown Expired!
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <strong style={{fontSize: '25px'}}>SDA ROYALTIES TIME</strong><br/>
              Countdown Expired!
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              <strong style={{fontSize: '25px'}}>GEN2 AIRDROP TIME</strong><br/>
              Countdown Expired!
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container style={{ maxWidth: "100%" }}>
        <ImageList cols={2}>
          {imageData.map((item) => (
            <ImageListItem key={item.img}>
              <ButtonBase style={{ border: '1px solid white', margin: '0.5em', padding: '1em'}}>
                <Img src={item.img} srcSet={item.img} loading="lazy" alt="" />
              </ButtonBase>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Container style={{ maxWidth: "100%" }}>
        <ImageList cols={2}>
          <ButtonBase>
            <Img src='/images/MDA-web-02.png' srcSet='/images/MDA-web-02.png' loading="lazy" alt="" />
          </ButtonBase>
          <Typography style={{ color: "white", fontSize: '50px', lineHeight: '1.125em', marginLeft: '1em', alignSelf: 'center' }}>
            WE ARE NOT JUST AN NFT PRODUCT. WE STRIVE TO FOCUS ON THE FUTURE DEVELOPMENT OF OUR MDA AND BUILD A STRONG CREATIVE COMMUNITY.
            HOLDING A DOODLE APE ALLOWS YOU TO PARTICIPATE IN COORDINATING THE SOLANA DOODLE APES COMMUNITY TREASURY.
          </Typography>
        </ImageList>
      </Container>
      <Container style={{ maxWidth: "100%" }}>
        <Grid>
          <Typography style={{ color: "white", textAlign: "center", margin: '2em 0em', fontSize: '80px', lineHeight: '85px' }}>
            EARN FROM HOLDING 8888 <br/> MUTANT DOODLE APES!
          </Typography>
        </Grid>
      </Container>
      <Container style={{ maxWidth: "100%" }}>
        <ImageList cols={4}>
          {teamData.map((item) => (
            <ImageListItem key={item.img}>
              <ButtonBase>
                <Img src={item.img} srcSet={item.img} loading="lazy" alt="" />
              </ButtonBase>
              <Typography style={{ color: 'white', fontSize: '35px', lineHeight: '1.114em'}}>{item.name}</Typography>
              <Typography style={{ color: 'white', fontSize: '35px', lineHeight: '1.114em'}}>{item.role}</Typography>
              <Typography style={{ color: 'white', fontSize: '35px', lineHeight: '1.114em'}}>{item.detail}</Typography>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  )
}

export default Home;