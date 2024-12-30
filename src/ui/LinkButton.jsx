import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 transition-all duration-500 hover:text-blue-700";
  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.isRequired,
  to: PropTypes.isRequireds,
};
