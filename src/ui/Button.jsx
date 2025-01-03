import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 hover:text-stone-600 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-800";
  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-3",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-2 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-800 px-4 py-3 md:px-6 md:py-3",
    round: base + " px-1.5 py-3 md:px-2.5 md:py-1.5 text-sm",
  };
  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} className={style[type]}>
        {children}
      </button>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string.undefined,
  onClick: PropTypes.func.undefined,
};
