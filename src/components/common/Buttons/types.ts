export interface CustomButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}
