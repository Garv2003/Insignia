import { Button } from "../ui/button";
import { Download } from "lucide-react";

const Header = ({ downloadPngLogo }: { downloadPngLogo: () => void }) => {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <h1 className="text-2xl font-bold">Insignia</h1>
      <div className="flex items-center gap-3">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={downloadPngLogo}
        >
          <Download size={16} className="mr-2" />
          Download
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("Save")}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Header;
