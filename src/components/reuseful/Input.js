import {
  alpha,
  withStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const ForgeInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.primary.lightGray,
    border: '1px solid #ced4da',
    fontSize: 14,
    fontWeight: 400,
    color: '#333333',
    letterSpacing: '0.01em',
    width: '100%',
    padding: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default ForgeInput;