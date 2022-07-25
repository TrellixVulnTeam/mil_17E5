import * as React from "react";

const SvgBarChart2 = ({ title, titleId, ...props }) => (
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
    className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

export default SvgBarChart2;
