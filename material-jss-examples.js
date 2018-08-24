const inputStyles = theme => ({
  root: {
    fontSize: '15px',
    border: 'solid 2px #D7DDE2',
    borderRadius: '4px',
    width: '330px',
    '@media(max-width: 330px)': {
      width: '100%',
    },
    // must also clear the underline styles for this to apply, see below
    '&$underline': {
      '&:before': {
        height: '0px',
      },
      '&:after': {
        height: '0px',
      },
      '&:hover': {
        '&:not($disabled)': {
          '&:before': {
            height: '0px',
          },
        },
      },
    },
  },
  focused: {
    borderColor: '#6F8090',
  },
  input: {
    padding: '9px',
  },
  error: {
    borderColor: '#D7553F',
  },
  disabled: {
    backgroundColor: '#F7F8F9',
    border: 'none',
  },
  //clear the underline styles
  underline: {},
});

const inputStyles = theme => ({
  root: {
    ...margins,
    fontSize: '15px',
    width: '330px',
    border: 'solid 2px #D7DDE2',
    borderRadius: '4px',
    '&$underline': {
      '&:before': {
        height: '0px',
      },
      '&:after': {
        height: '0px',
      },
      '&:hover': {
        '&:not($disabled)': {
          '&:before': {
            height: '0px',
          },
        },
      },
    },
  },
  focused: {
    borderColor: '#6F8090',
  },
  input: {
    height: '95px',
    width: '100%',
    resize: 'none',
    padding: '9px',
  },
  error: {
    borderColor: '#D7553F',
  },
  disabled: {
    backgroundColor: '#F7F8F9',
    border: 'none',
  },
  underline: {},
});

const helperTextStyles = theme => ({
  root: {
    margin: '0px',
    '& > span': {
      ...margins,
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
});

const typoStyles = theme => ({
  root: {
    color: '#5C6975',
    margin: '0px',
    fontSize: '13px',
  },
});

const styles = theme => ({
  input: {
    ...theme.spacing.textInputMargins,
    padding: '9px',
    fontSize: '15px',
    border: `solid 2px ${theme.palette.blueGreyScale[25]}`,
    borderRadius: '4px',
    width: 'initial',
  },
  error: {
    '& $input': {
      borderColor: '#D7553F',
    },
  },
  focused: {
    '& $input': {
      borderColor: theme.palette.blueGreyScale[65],
    },
  },
  disabled: {
    backgroundColor: theme.palette.blueGreyScale[5],
    border: 'none',
  },
  underline: {
    borderBottom: 'none',
    '&$disabled': {
      '&:before': {
        borderBottom: 'none',
      },
    },
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
    '&:hover': {
      '&:not($disabled):not($focused):not($error)': {
        '&:before': {
          borderBottom: 'none',
        },
      },
    },
  },
});


const styles = theme => ({
  profileMenuContent: {
    [`${mediaRules('md')}`]: {
      width: '308px',
    },
    display: 'flex',
    flexDirection: 'column',
    background: 'none',
    overflow: 'hidden',
  },
  privacyNavLink: {
    '&$privacyNavLink': {
      textDecoration: 'none',
    },
  },
  buttonRoot: {
    padding: '0 0 0 15px',
  },
  // to be used like this..
  // <Button
  //   classes={{ root: classes.buttonRoot }}
  //   onClick={onClickManageAccount}
  // >
});


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// get specific

  vertStepperAvatarContainer: {
    display: 'flex',
    alignItems: 'center',
    '& $vertStepperAvatarContainerAvatar': {
      marginRight: '10px',
    },
  },
  vertStepperAvatarContainerAvatar: {},


























