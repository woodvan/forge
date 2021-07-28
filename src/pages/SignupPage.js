import React, { useState } from 'react';
import { Container, Box, useMediaQuery, Typography, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Input, InputLabel, Checkbox, Stepper } from '../components/reuseful';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        minHeight: `100vh`,
        display: `flex`
    },
    sideBar: {
        display: 'flex',
        alignItems: 'center',
        width: 721,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(/img/Background.png)'
    },

    stepsWrapper: {
        marginLeft: 79
    },

    stepsTitle: {
        color: "#222222",
        weight: 500,
        fontSize: 20,
    },

    stepper: {
        marginTop: 28
    },
    
    siderBarTitle: {
        position: `absolute`,
        top: 35,
        left: 37,
        fontSize: 16,
        fontWeight: 700
    },

    content: {
        width: `calc(100% - 454px)`
    },

    formWrapper: {
        width: `100%`,
        maxWidth: 514,
        marginTop: 150
    },

    formTitle: {
        fontWeight: 500,
        fontSize: 28,
        color: `#333333`
    },

    formField: {
        marginTop: 15
    },

    approveCheckField: {
        marginTop: 20,
        marginLeft: -11,
        display: 'flex',
        alignItems: 'center'
    },

    approveLabel: {
        fontSize: 11,
        fontWeight: 400,
        color: "rgba(0, 0, 0, 0.54);"
    },

    buttons: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // mobileStyles
    mobileContainer: {
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        minHeight: `100vh`,
    },
    mobileSideBar: {
        display: 'none'
    },
    mobileContent: {
        width: `100%`
    }
}));

const SignupPage = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    const [activeStep, setActiveStep] = useState(1);
    const [approve, setApprove] = useState(false);

    const steps = [
        {id: 1, label: "Your email"},
        {id: 2, label: "Organization name"},
        {id: 3, label: "Organization link"}
    ]

    const handleApproveOptionChange = (e) => {
        console.log(e);
        setApprove(!approve);
    }
    return (
        <Box className={!isMobile?classes.container:classes.mobileContainer}>
            <Box className={!isMobile?classes.sideBar:classes.mobileSideBar}>
                <Typography className={classes.siderBarTitle}>DigiVax Enterprise</Typography>
                <Box className={classes.stepsWrapper}>
                    <Typography className={classes.stepsTitle}>
                        3 easy steps to setup your organization
                    </Typography>
                    <Stepper className={classes.stepper} steps={steps} activeStep={activeStep} orientation={ isMobile ? 'horizontal' : 'vertical'}/>
                </Box>
            </Box>
            <Box className={!isMobile?classes.content:classes.mobileContent}>
                <Container className={classes.formWrapper}>
                    {activeStep === 1 && <Box>
                        <Typography className={classes.formTitle}>DigiVax Partner Sign up</Typography>
                        <FormControl fullWidth className={classes.formField}>
                            <InputLabel shrink htmlFor="email">
                                E-mail
                            </InputLabel>
                            <Input defaultValue="" id="email" />
                        </FormControl>
                        <FormControl fullWidth className={classes.formField}>
                            <InputLabel shrink htmlFor="password1">
                                Password
                            </InputLabel>
                            <Input type="password" defaultValue="" id="password1" />
                        </FormControl>
                        <FormControl fullWidth className={classes.formField}>
                            <InputLabel shrink htmlFor="password2">
                                Password
                            </InputLabel>
                            <Input type="password" defaultValue="" id="password2"/>
                        </FormControl>
                        <Box className={classes.approveCheckField}>
                            <Checkbox
                                checked={approve}
                                onChange={handleApproveOptionChange}
                                name="approve"
                                color="default"
                            />
                            <Typography className={classes.approveLabel}>
                                Agree to User Privacy Policy and Terms of Service
                            </Typography>
                        </Box>
                    </Box>}
                    {activeStep === 2 && <Box>
                        <Typography className={classes.formTitle}>Enter your organization name</Typography>
                        <FormControl fullWidth className={classes.formField}>
                            <InputLabel shrink htmlFor="email">
                                Organization name
                            </InputLabel>
                            <Input defaultValue="" id="organization" />
                        </FormControl>
                    </Box>}
                    {activeStep === 3 && <Box>
                        <Typography className={classes.formTitle}>Create your organization's DigiVax registeration link</Typography>
                        <FormControl fullWidth className={classes.formField}>
                            <InputLabel shrink htmlFor="email">
                                Organization name
                            </InputLabel>
                            <Input defaultValue="" id="organization" />
                        </FormControl>
                    </Box>}
                    <Box className={classes.buttons}>
                        {activeStep > 1 && <Button variant="contained" color="primary" onClick={()=>setActiveStep(activeStep-1)} style={{marginRight: 38}}>
                            Back
                        </Button>}
                        {activeStep < steps.length && <Button variant="contained" color="primary" onClick={()=>setActiveStep(activeStep + 1)}>
                            Next
                        </Button>}
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default SignupPage;