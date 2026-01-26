import { IconProps } from "./types";

/**
 * BurgerMenu Icon
 * @param props Props
 * @param props.className Additional css classes
 * @param props.color Color of the icon
 * @param props.size Size of the icon
 * @returns JSX element representing the icon
 */
export function BurgerMenu({
  className = "",
  color = "currentColor",
  size = 24,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 5H22V7H2V5Z" fill={color} />
      <path d="M2 11H15V13H2V11Z" fill={color} />
      <path d="M22 17H2V19H22V17Z" fill={color} />
    </svg>
  );
}
