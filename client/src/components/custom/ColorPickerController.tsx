import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({
  hideController = false,
  color,
  setColor,
}: {
  hideController?: boolean;
  color: string;
  setColor: (color: string) => void;
}) => {
  return (
    <div>
      <ColorPicker
        width={300}
        height={300}
        value={color}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
        className="mb-20"
        onChange={(color) => setColor(color)}
      />
    </div>
  );
};

export default ColorPickerController;
