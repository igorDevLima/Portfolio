import Section from "../../../../../../components/ui/Section";
import Column from "../../../../../../components/ui/Column";
import HeadingText from "../../../../../../components/typografy/HeadingText";
import SubtitleText from "../../../../../../components/typografy/SubtitleText";
import BodyText from "../../../../../../components/typografy/BodyText";
import Row from "../../../../../../components/ui/Row";
import DownloadButton from "./components/DownloadButton";
import ContainedButton from "../../../../../../components/ui/Button/ContainedButton";
import { TextHeroSectionProps } from "./types";
import useFromLeftGsapAnimation from "../../../../../../hooks/animations/useFromLeftGsapAnimation";
import useFromRightGsapAnimation from "../../../../../../hooks/animations/useFromRightGsapAnimation";

function TextHeroSection({ ...props }: TextHeroSectionProps) {
  useFromLeftGsapAnimation(
    [".heading", ".subtitle", ".hero-text", ".button-container"],
    {
      duration: 1,
    }
  );

  useFromRightGsapAnimation([".card"], {
    duration: 2,
  });

  return (
    <Section {...props}>
      <Column gap={5}>
        <Column columns={2}>
          <HeadingText
            className="gradient-text heading"
            variant="h1"
            fontWeight="bold"
          >
            Sou um desenvolvedor
          </HeadingText>
          <SubtitleText
            className="subtitle"
            variant="subtitle1"
            fontWeight="bold"
          >
            não apenas de código, mas também de experiências.
          </SubtitleText>
          <BodyText className="hero-text">
            Desenvolvedor focado em entregar soluções ágeis e de qualidade.
            Especialista em Vite, React e arquitetura limpa, com uma abordagem
            centrada em código eficiente e experiência do usuário.
          </BodyText>
        </Column>
        <Row gap={3} className="button-container">
          <ContainedButton label="Click" />
          <DownloadButton
            label="Baixe meu currículo"
            path="public\pdf\CV - Igor Lima Pereira - Fullstack.pdf"
            textColor="var(--color-text-primary)"
          />
        </Row>
      </Column>

      <div className="card">
        <p>
          Edit <code>src/Home.tsx</code> and save to test HMR
        </p>
      </div>
    </Section>
  );
}

export default TextHeroSection;
