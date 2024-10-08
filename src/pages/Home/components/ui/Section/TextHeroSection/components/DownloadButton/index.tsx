import ButtonText from "../../../../../../../../components/typografy/ButtonText";
import Button from "../../../../../../../../components/ui/Button";
import Icon from "../../../../../../../../components/ui/Icon";
import { DownloadButtonProps } from "./types";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadButton({
  path,
  label,
  textColor,
  ...props
}: DownloadButtonProps) {
  return (
    <Button variant="text" {...props}>
      <a
        href={path}
        target="_blank"
        download
        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        {label && <ButtonText sx={{ color: textColor }}>{label}</ButtonText>}
        <Icon iconElement={DownloadIcon}/>
      </a>
    </Button>
  );
}

export default DownloadButton;
