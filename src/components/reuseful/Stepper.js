import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';
import DoneIcon from '@material-ui/icons/Done';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  stepper: {
    backgroundColor: 'transparent',
    padding: theme.spacing(0)
  },
}));

const ColorlibConnector = withStyles({
  root: {
    marginLeft: 15
  },
  alternativeLabel: {
    top: 22,
  },
  // active: {
  //   '& $line': {
  //     backgroundImage:
  //       'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  //   },
  // },
  // completed: {
  //   '& $line': {
  //     backgroundImage:
  //       'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  //   },
  // },
  // line: {
  //   height: 3,
  //   border: 0,
  //   backgroundColor: '#eaeaf0',
  //   borderRadius: 1,
  // },
})(StepConnector);

const useForgeStepIconStyles = makeStyles({
  root: {
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.33)',
    color: '#4A4A4A',
    border: '0.5px solid #8AA9A4',
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #222222'
  },
  completed: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #FFFFFF'
  },
});

function ForgeStepIcon(props) {
  const classes = useForgeStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed? <DoneIcon color="primary"/>:icon}
    </div>
  );
}


export default function ForgeStepper({className, steps, activeStep, orientation}) {
  const classes = useStyles();

  return (
    <Stepper
      className={clsx(classes.stepper, className)}
      activeStep = {activeStep}
      orientation = {orientation}
      alternativeLabel = { orientation === 'horizontal' }
      connector={<ColorlibConnector />}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel StepIconComponent={ForgeStepIcon}>{step.label}</StepLabel>
          <StepContent>
            <Typography></Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}