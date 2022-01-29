import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, Container, CssBaseline, Fab, Grid, IconButton, ImageList, ImageListItem, Menu, MenuItem, TextField, Toolbar, Typography, Zoom } from "@mui/material"
import { Link } from 'react-router-dom'
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

const roadMapData = [
  {
    id: 1,
    title: 'AIRDROP',
    img: '/images/font-back/7681.png',
    detail: ['Drawing the mutant doodle apes', 'Generating 8888 unique apes', 'Launching Discord, & website', 'Launching giveaways'],
  },
  {
    id: 2,
    title: 'PUBLIC MINT',
    img: '/images/font-back/8072.png',
    detail: ['Public mint', 'Getting listed on marketplaces (Magiceden, Solsea etc.) ', 'Publishing the rarity tool'],
  },
  {
    id: 3,
    title: '%70 ROYALTIES',
    img: '/images/font-back/7657.png',
    detail: ['Releasing MDA DAO for our holders', '70% of all royalties from trading fees are sent back to holders once a month. (You can earn more by holding multiple apes.)'],
  },
  {
    id: 4,
    title: 'GEN3',
    img: '/images/font-back/7630.png',
    detail: ['Making the GEN3 apes', 'Airdropping GEN3 apes to all holders (GEN1 & GEN2 holders)'],
  },
];

const faqData = [
  {
    qus: `WHAT IS MDA?`,
    ans: `MDA is a gen2 project. MDA NFTs are made up with over a hundred exciting traits of faces, hair, hats, body and backgrounds. Each MDA is a unique, non-fungible token (NFT) on the Solana blockchain.`,
    subqus: `WHAT IS THE SALE PRICE AND DATE?`,
    subans: `0,88 SOL, Jan. 18th 20:00 UTC`,
  },
  {
    qus: `WHY SHOULD I BUY MDA NFT'S?`,
    ans: `70% of all royalties from trading fees are sent back to holders once a month and this will go unlimited. With this way you can get passive earnings just by holding.`,
    subqus: `WHAT IS THE ROYALTY PERCENTAGE?`,
    subans: `%5`,
  },
];

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
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
              <Link to="/mint"><Button style={{ marginTop: '2em', width: '160px', height: '80px'}} variant="contained">Mint</Button></Link>
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
              <Grid style={{margin: '1em 2em'}}>
                <Typography style={{ margin: '1em 0 0', color: 'white', fontSize: '35px', lineHeight: '1.114em', fontWeight: '700'}}>{item.name}</Typography>
                <Typography style={{ margin: '1em 0', color: 'white', fontSize: '16px', lineHeight: '1.114em'}}>{item.role}</Typography>
                <Typography style={{ margin: '1em 0', color: 'white', fontSize: '13px', lineHeight: '1.114em'}}>{item.detail}</Typography>
              </Grid>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Container style={{ maxWidth: "100%", margin: "3em 0" }}>
        <Img src="/images/MDA-BANNER-4-04-1.jpg" srcSet="/images/MDA-BANNER-4-04-1.jpg" loading="lazy" alt="" />
      </Container>
      <Container style={{ maxWidth: "80%" }}>
        <Grid container style={{color: "white", fontSize: '16px'}}>
          {roadMapData.map((item) => (
            <Grid item xs={3} style={{ textAlign: 'center' }}>
              <Typography style={{ fontSize: '100px', fontWeight: '700', color: 'transparent', backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundClip: 'text' }}>{item.id}</Typography>
              <Typography style={{ fontSize: '35px', fontWeight: '700'}}>{item.title}</Typography>
              <ul style={{ textAlign:'left', color: '#7a7a7a' }}>
                {item.detail.map((txt) => (
                  <li>{ txt }</li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container style={{ maxWidth: "98%", border: "1px solid white", margin: '0 1%'}}>
        <Grid container style={{color: "white", fontSize: '16px', padding: '10em 20em'}}>
          {faqData.map((item) => (
            <Grid item xs={6}>
              <Typography style={{ fontSize: '50px', fontWeight: '700', margin: '0.5em 0em'}}>{item.qus}</Typography>
              <Typography>{item.ans}</Typography>
              <Typography style={{ fontSize: '25px', fontWeight: '700', margin: '0.75em 0em 0.25em'}}>{item.subqus}</Typography>
              <Typography>{item.subans}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container style={{ maxWidth: "98%", border: "1px solid white", borderTop: 'none', margin: '0 1%'}}>
        <Grid container style={{color: "white", padding: '10em 2em'}}>
          <Grid item xs={1}><Img src="/logo.png" srcSet="/logo.png" alt=""/></Grid>
          <Grid item xs={3} style={{ alignSelf: "center" }}>Join the community</Grid>
          <Grid item xs={3} style={{ alignSelf: "center" }}>
            <Typography style={{ alignSelf: "center" }}>hello@solanadoodleapes.com</Typography>
            <Typography style={{ fontWeight: '700', alignSelf: "center" }}>Dc.Tw.</Typography>
          </Grid>
          <Grid item xs={5} style={{ alignSelf: "center" }}><CssTextField id="standard-basic" label="Need your email here..." variant="standard" /><Button >Sign Up</Button></Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home;