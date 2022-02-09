import "./CloseButton.css";
import CloseImage from "../icons/CloseImage";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CloseImage />
      </span>
    </button>
  );
};

export default CloseButton;
