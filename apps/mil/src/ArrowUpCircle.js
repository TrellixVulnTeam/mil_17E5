import * as React from "react";

const SvgArrowUpCircle = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-up-circle_svg__feather arrow-up-circle_svg__feather-arrow-up-circle"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={12} r={10} />
    <path d="m16 12-4-4-4 4M12 16V8" />
  </svg>
);

export default SvgArrowUpCircle;
