// Uncaught TypeError: Cannot call a class as a function

const ButtonInternal = props => {
  const styles = theme => ({
    disabled: {
      color: 'green',
      backgroundColor: 'pink',
    },
  });

  // Note that when the higher order component withStyles is ran
  // it returns a new Class ie a react Component (i think)
  const ButtonOut = withStyles(styles)(() => <Button {...props} />);

  // Attempt to create a new React Component by calling the withStyles function
  // which returns a Class..
  return ButtonOut();

  // This is the solution..
  return <ButtonOut />;
};

export default ButtonInternal;