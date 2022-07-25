import * as React from "react";

const SvgChevronsUp = ({ title, titleId, ...props }) => (
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
    className="chevrons-up_svg__feather chevrons-up_svg__feather-chevrons-up"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m17 11-5-5-5 5M17 18l-5-5-5 5" />
  </svg>
);

export default SvgChevronsUp;
