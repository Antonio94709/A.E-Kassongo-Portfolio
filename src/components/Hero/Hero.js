import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Good Day. I am Exil Kassongo <br />
          Front-end developer
        </SectionTitle>
        <SectionText>
        I am a front end developer thats actively learning and using new technologies that improve experience for developers and users. I have no bounds on what I should learn and this is evitend by my espirasion to eventually become a full-stack development.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;