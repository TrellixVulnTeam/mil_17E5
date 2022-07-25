import * as React from "react";

const SvgArrowUpLeft = ({ title, titleId, ...props }) => (
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
    className="arrow-up-left_svg__feather arrow-up-left_svg__feather-arrow-up-left"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17 17 7 7M7 17V7h10" />
  </svg>
);

export default SvgArrowUpLeft;
