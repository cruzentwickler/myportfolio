import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Spacer from '@/components/Spacer'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 2rem 0;
  width: 100%;
`

const Hero = () => {
  return (
    <StyledHeroSection>
      <div>
        <Paragraph color="primary">Hi, my name is</Paragraph>
        <Spacer size={20} />
        <Heading level={1} className="hero-heading">
          William Cruz
        </Heading>
        <Heading level={2} className="hero-heading">
          I build things for the web.
        </Heading>
        <Spacer size={40} />
        <Paragraph maxW={45}>
          I'm a Front-end and JavaScript developer based in Switzerland, Basel
          specializing in building and designing exceptional websites,
          applications, and everything in between.
        </Paragraph>
        <Spacer size={40} />
        <a href={`mailto:pequeno@williamcruz.ch`}>
          <Button>Get In Touch</Button>
        </a>
      </div>
    </StyledHeroSection>
  )
}

export default Hero
