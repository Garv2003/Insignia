import {
  Header,
  SideNav,
  IconController,
  BackgroundController,
  LogPreview,
} from "./components/custom";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [color, setColor] = useState<string>(
    "rgba(255, 255, 255, 1)" || localStorage.getItem("color")
  );
  const [size, setSize] = useState<number>(
    parseInt(localStorage.getItem("size") || "280")
  );
  const [rotate, setRotate] = useState<number>(
    parseInt(localStorage.getItem("rotate") || "0")
  );

  const [rounded, setRounded] = useState<number>(
    parseInt(localStorage.getItem("rounded") || "0")
  );
  const [padding, setPadding] = useState<number>(
    parseInt(localStorage.getItem("padding") || "0")
  );
  const [Bgcolor, setBgColor] = useState<string>(
    localStorage.getItem("Bgcolor") || "rgba(255, 255, 255, 1)"
  );

  const [icon, setIcon] = useState<string>("Smile");

  useEffect(() => {
    localStorage.setItem("color", color);
    localStorage.setItem("size", size.toString());
    localStorage.setItem("rotate", rotate.toString());

    localStorage.setItem("rounded", rounded.toString());
    localStorage.setItem("padding", padding.toString());
    localStorage.setItem("Bgcolor", Bgcolor);

    localStorage.setItem("icon", icon);
  }, [color, size, rotate, rounded, padding, Bgcolor, icon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogo");
    if (downloadLogoDiv) {
      html2canvas(downloadLogoDiv, {
        backgroundColor: null,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "logo.png";
        link.href = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        link.click();
      });
    }
  };

  return (
    <div className="overflow-hidden h-screen bg-gray-100 relative">
      <Header downloadPngLogo={downloadPngLogo} />
      <div className="w-64 fixed">
        <SideNav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
          {activeIndex === 0 && (
            <IconController
              color={color}
              setColor={setColor}
              size={size}
              setSize={setSize}
              rotate={rotate}
              setRotate={setRotate}
              icon={icon}
              setIcon={setIcon}
            />
          )}
          {activeIndex === 1 && (
            <BackgroundController
              rounded={rounded}
              padding={padding}
              Bgcolor={Bgcolor}
              setRounded={setRounded}
              setPadding={setPadding}
              setBgColor={setBgColor}
            />
          )}
        </div>
        <div className="md:col-span-3">
          <LogPreview
            Bgcolor={Bgcolor}
            rounded={rounded}
            padding={padding}
            color={color}
            size={size}
            rotate={rotate}
            icon={icon}
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default App;
