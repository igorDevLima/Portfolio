import Button from "../../components/Button";
import HeadingText from "../../components/HeadingText";
import BodyText from "../../components/BodyText";
import { useTheme } from "../../hooks/useTheme";
import SubtitleText from "../../components/SubtitleText";

function Home() {
  const { handleChangeTheme } = useTheme();

  return (
    <>
      <div>
        <Button variant="contained" onClick={() => handleChangeTheme()}>
          Click
        </Button>
      </div>
      <HeadingText className="gradient-text" variant="h1">Vite + React</HeadingText>
      <SubtitleText className="gradient-text">Vite + React</SubtitleText>
      <div className="card">
        <p>
          Edit <code>src/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <BodyText>Click on the Vite and React logos to learn more</BodyText>
    </>
  );
}

export default Home;
