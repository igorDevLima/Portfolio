import HeadingText from "../../../typografy/HeadingText";
import SubtitleText from "../../../typografy/SubtitleText";
import { FooterTitleProps } from "./types";

function FooterTitle({ heading, subTitle, ...props }: FooterTitleProps) {
  return (
    <div className="footer-title" {...props}>
      <HeadingText variant="h6">{heading}</HeadingText>
      {subTitle && (
        <SubtitleText
          sx={{ fontWeight: "var(--weight-text-bold)" }}
          variant="subtitle1"
          className="gradient-text"
        >
          {subTitle}
        </SubtitleText>
      )}
    </div>
  );
}

export default FooterTitle;
