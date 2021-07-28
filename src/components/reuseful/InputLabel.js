import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
  
const ForgeInputLabel = withStyles((theme) => ({
  root: {
    fontSize: 14,
    fontWeight: 400,
  },
}))(InputLabel);

export default ForgeInputLabel;