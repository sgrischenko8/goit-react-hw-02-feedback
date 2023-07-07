import PropTypes from 'prop-types';

const Notification = ({ message, total }) => {
  return <>{!total() && <p>{message}</p>}</>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
};

export default Notification;
