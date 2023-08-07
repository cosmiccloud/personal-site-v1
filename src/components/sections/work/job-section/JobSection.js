import React from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Heading, Text } from 'theme-ui';
import PropTypes from 'prop-types';
import TECH from 'constants/tech';
import JobSectionImgTrio from './JobSectionImgTrio';

const propTypes = {
  className: PropTypes.string,
  companyName: PropTypes.string.isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgConfigs: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  })).isRequired,
};

const defaultProps = {
  className: '',
};

function JobSection({ children, ...props }) {
  const {
    className,
    companyName,
    title,
    subtitle,
    date,
    imgConfigs,
    techKeys,
  } = props;

  return (
    <div
      className={className}
      sx={{
        gridColumnStart: 'content-start',
        maxWidth: '850rem',
      }}
    >
      <Fade>
        <div
          className="u-glass"
          sx={{
            pt: 5,
            pb: 4,
            px: [3, 4, 4],
            textAlign: ['center', 'left', 'left'],
          }}
        >
          <Heading
            as="h2"
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: ['block', 'block', 'inline-block'],
            pr: [0, 0, 3],
            letterSpacing: ['-0.5rem', '3rem', '3rem'],
            color: (t) => t.colors.workHeader,
          }}
          >
            {title}
          </Heading>

          <Heading
            as="h2"
            sx={{
            fontFamily: 'heading2',
            variant: 'text.shadow',
            display: ['block', 'block', 'inline-block'],
            pt: [1, 0, 0],
            color: (t) => t.colors.workHeader,
          }}
          >
            <small>{subtitle}</small>
          </Heading>

          <Heading
            as="h4"
            sx={{
            display: 'block',
            pt: [3, 4, 4],
            pb: 2,
            color: (t) => t.colors.workSubHeader,
          }}
          >
            {companyName}
          </Heading>

          <Heading as="h5" sx={{ color: (t) => t.colors.workHeader }}>
            {date}
          </Heading>

          <Text as="p" sx={{ py: 4, textAlign: 'left' }}>
            {children}
          </Text>

          <div sx={{
            pt: [3, 3, 2],
            pb: [3, 3, 4],
            textAlign: 'left',
          }}
          >
            {techKeys.map((techKey) => (
              <Button
                variant="tag"
                key={`${companyName}-tech-${techKey}`}
              >
                <a href={TECH[techKey].href} target="_blank" rel="noopener noreferrer">
                  {TECH[techKey].displayName}
                </a>
              </Button>
            ))}
          </div>

          <JobSectionImgTrio imgConfigs={imgConfigs} />

        </div>
      </Fade>
    </div>
  );
}

JobSection.propTypes = propTypes;
JobSection.defaultProps = defaultProps;

export default JobSection;
