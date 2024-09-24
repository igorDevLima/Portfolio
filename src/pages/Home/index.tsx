import Button from "../../components/ui/Button";
import HeadingText from "../../components/typografy/HeadingText";
import { useTheme } from "../../hooks/style/useTheme";
import SubtitleText from "../../components/typografy/SubtitleText";
import BodyText from "../../components/typografy/BodyText";
import Section from "../../components/ui/Section";

function Home() {
  const { handleChangeTheme } = useTheme();

  return (
    <>
      <Section>
        <div>
          <Button variant="contained" onClick={() => handleChangeTheme()}>
            Click
          </Button>
        </div>
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
