import {
    withStyles,
  } from '@material-ui/core/styles';
  import Checkbox from '@material-ui/core/Checkbox';
  
  const ForgeCheckbox = withStyles((theme) => ({
      root: {
        fontSize: 14,
        fontWeight: 400,
      },
    }))(Checkbox);
  
    export default ForgeCheckbox;