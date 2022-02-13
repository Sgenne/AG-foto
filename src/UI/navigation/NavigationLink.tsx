import { Link } from "react-router-dom";

import "./NavigationLink.css";

interface NavigationLinkProps {
  to: string;
  children: JSX.Element | string;
}

const NavigationLink = ({ to, children }: NavigationLinkProps) => {
  return (
    <span className="container">
      <Link to={to}>{children}</Link>
    </span>
  );
};

export default NavigationLink;
