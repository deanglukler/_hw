const Button = ({ as: T, ...props }) => <T {...props} />;

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Button.defaultProps = {
  as: "button"
};