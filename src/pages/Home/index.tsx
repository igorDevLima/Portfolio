import HeadingText from "../../components/typografy/HeadingText";
import { useTheme } from "../../hooks/style/useTheme";
import SubtitleText from "../../components/typografy/SubtitleText";
import BodyText from "../../components/typografy/BodyText";
import Section from "../../components/ui/Section";
import DownloadIcon from "@mui/icons-material/Download";
import LabelButton from "../../components/ui/Button/LabelButton";
import ContainedButton from "../../components/ui/Button/ContainedButton";
import Row from "../../components/ui/Row";

function Home() {
  const { handleChangeTheme } = useTheme();

  return (
    <>
      <Section>
        <Row gap={3}>
          <ContainedButton label="Click" onClick={() => handleChangeTheme()} />
          <LabelButton label="Baixe meu currículo" sx={{ gap: "1rem" }}>
            <DownloadIcon sx={{ color: "var(--color-text-primary)" }} />
          </LabelButton>
        </Row>
        <HeadingText className="gradient-text" variant="h1">
          Vite + React
        </HeadingText>
        <SubtitleText className="gradient-text">Vite + React</SubtitleText>
        <div className="card">
          <p>
            Edit <code>src/Home.tsx</code> and save to test HMR
          </p>
        </div>
        <BodyText>Click on the Vite and React logos to learn more</BodyText>
      </Section>
    </>
  );
}

export default Home;
