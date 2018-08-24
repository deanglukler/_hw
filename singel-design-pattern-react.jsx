const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

const internalOnLoad = () => console.log("loaded");

const Avatar = ({ className, style, onLoad, ...props }) => (
  <img
    className={`avatar ${className}`}
    style={{ borderRadius: "50%", ...style }}
    onLoad={callAll(internalOnLoad, onLoad)}
    {...props}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onLoad: PropTypes.func
};