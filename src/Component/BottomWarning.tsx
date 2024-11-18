import { Link } from "react-router-dom";

interface BottomProps {
  label: string;
  to: string;
  buttonText: string;
}

const BottomWarning: React.FC<BottomProps> = ({ label, buttonText, to }) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
export default BottomWarning;
