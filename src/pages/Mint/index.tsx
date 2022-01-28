import { useState, useEffect, useRef } from "react";
import { Container, Grid, Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  Card: {
    backgroundColor: 'rgb(21, 26, 31)',
    borderRadius: 6,
    padding: '1.5em',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  mintButton: {
    background: 'linear-gradient(rgb(96, 74, 229) 0%, rgb(129, 62, 238) 100%)',
    color: 'white',
    width: '100%',
    minHeight: '60px',
    fontSize: '16px',
    fontWeight: '900',
  },
  textTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.43',
    letterSpacing: '0.01071em',
  },
  textContent: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em'
  },
  textState: {
    color: 'white',
    margin: '8px',
    display: 'flex',
    padding: '8px',
    fontSize: '18px',
    fontWeight: '700',
    background: '#384457',
    alignItems: 'center',
    marginRight: '0',
    alignContent: 'center',
    borderRadius: '5px',
    flexDirection: 'column',
    justifyContent: 'center',
    textTransform: 'uppercase',
  }
});

const Mint: React.FC = () => {
  const [ isConnected, setIsConnected ] = useState(false);
  const [ isLive, setIsLive ] = useState(true);
  const [ availableCount, setAvailableCount ] = useState(860);
  const [ mintedCount, setMintedCount ] = useState(8028);
  const [ totalCount, setTotalCount ] = useState(8888);
  const [ mintPrice, setMintPrice ] = useState(0.88);
  const [ isLoading, setIsLoading ] = useState(false);
  const styledClasses = useStyles();

  const timer = useRef<number>();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const onConnectClick = () => {
    setIsLoading(true);
    timer.current = window.setTimeout(() => {
      setIsLoading(false);
      setIsConnected(true);
    }, 2000);
  }

  const onMintClick = () => {
    setIsLoading(true);
    timer.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Container sx={{py: 12.5, width: '600px'}}>
      <Grid container className={ styledClasses.Card }>
        { isConnected &&
          (<Grid item container sx={{ marginBottom: '0.5em' }}>
            <Grid item xs={5}>
              <div className={ styledClasses.textTitle }>Available / Minted / Total</div>
              <div className={ styledClasses.textContent }>{ availableCount } / { mintedCount } / { totalCount }</div>
            </Grid>
            <Grid item xs={5}>
              <div className={ styledClasses.textTitle }>Price</div>
              <div className={ styledClasses.textContent }>◎ { mintPrice }</div>
            </Grid>
            <Grid item xs={2}>
              <div className={ styledClasses.textState }>{isLive ? 'Live!' : 'Dead!'}</div>
            </Grid>
          </Grid>)
        }
        <Grid item xs={12}>
          { isConnected ? 
            (<Button className={ styledClasses.mintButton } disabled={ !isLive || isLoading } variant="contained" onClick={ onMintClick }>
              { !isLoading ? (<div style={{ fontSize: '16px' }}>Mint</div>) : (<CircularProgress size={32} sx={{ color: "white", zIndex: 1 }} />) }
            </Button>) :
            (<Button className={ styledClasses.mintButton } disabled={ !isLive || isLoading } variant="contained" onClick={ onConnectClick }>
            { !isLoading ? (<div style={{ fontSize: '16px' }}>Connect</div>) : (<CircularProgress size={32} sx={{ color: "white", zIndex: 1 }} />)}
            </Button>) 
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default Mint;
