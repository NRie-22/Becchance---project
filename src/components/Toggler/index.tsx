import React from 'react';

import {
  SwitchButtonFirst,
  SwitchButtonSecond,
  SwitchFull,
  SwitchInner,
  SwitchLabel,
  SwitchOuter,
  SwitchToggle,
} from './styled';
import { Icon } from '../Icon';
import theme from '../../theme';

interface TogglerProps {
  togglePosition: boolean;
  setTogglePosition: (position: boolean) => void;
  handleDownload?: () => void;
  onToggle?: () => void;
  cvHref: string;
  coverLetterHref: string;
}

const Toggler: React.FC<TogglerProps> = ({
  togglePosition,
  setTogglePosition,
  handleDownload,
  onToggle,
  cvHref,
  coverLetterHref,
}) => {
  return (
    <SwitchFull>
      <SwitchInner>
        <SwitchLabel>CV</SwitchLabel>
        <SwitchOuter>
          <SwitchButtonFirst
            href={cvHref}
            download='Roksolana_Kushnir_CV.pdf'
            onClick={() => {
              setTogglePosition(true);
              if (onToggle) onToggle();
            }}
          />
          <SwitchToggle
            onClick={() => {
              if (onToggle) onToggle();
              if (handleDownload) handleDownload();
            }}
            togglePosition={togglePosition}
          >
            <Icon
              name='icon-download'
              width='24px'
              height='24px'
              fill={theme.colors.orange[1]}
            />
          </SwitchToggle>
          <SwitchButtonSecond
            href={coverLetterHref}
            download='Roksolana_Kushnir_Cover_Letter.pdf'
            onClick={() => {
              setTogglePosition(false);
              if (onToggle) onToggle();
            }}
          />
        </SwitchOuter>
        <SwitchLabel>Cover Letter</SwitchLabel>
      </SwitchInner>
    </SwitchFull>
  );
};

export default Toggler;
