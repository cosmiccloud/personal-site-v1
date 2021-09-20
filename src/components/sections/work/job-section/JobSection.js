import React from 'react';
import { Button, Themed } from 'theme-ui';
import PropTypes from 'prop-types';
import TECH from 'constants/tech';

const propTypes = {
  className: PropTypes.string,
  descriptionSide: PropTypes.string,
  companyName: PropTypes.string.isRequired,
  techKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
};

const defaultProps = {
  className: '',
  descriptionSide: 'left',
};

function JobSection({ children, ...props }) {
  const {
    className,
    companyName,
    title,
    subtitle,
    date,
    img,
    techKeys,
  } = props;

  return (
    <div
      className={className}
      sx={{
        gridColumnStart: 'content-start',
        maxWidth: '850rem',
        variant: 'glass',
        pt: 5,
        pb: 4,
        px: 4,
      }}
    >
      <Themed.h2 sx={{
        fontFamily: 'heading2',
        variant: 'text.shadow',
        display: ['block', 'block', 'inline-block'],
        pr: [0, 0, 3],
        color: (t) => t.colors.workHeader,
      }}
      >
        {title}
      </Themed.h2>

      <Themed.h2 sx={{
        fontFamily: 'heading2',
        variant: 'text.shadow',
        display: ['block', 'block', 'inline-block'],
        pt: [1, 0, 0],
        color: (t) => t.colors.workHeader,
      }}
      >
        <small>{subtitle}</small>
      </Themed.h2>

      <Themed.h4 sx={{
        display: 'block',
        pt: 4,
        pb: [1, 2, 2],
        color: (t) => t.colors.workSubHeader,
      }}
      >
        {companyName}
      </Themed.h4>

      <Themed.h5 sx={{ color: (t) => t.colors.workHeader }}>
        {date}
      </Themed.h5>

      <Themed.p sx={{ py: 4 }}>
        {children}
      </Themed.p>

      <div sx={{
        pt: [3, 3, 2],
        pb: [3, 3, 4],
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

      {img}

    </div>
  );
}

JobSection.propTypes = propTypes;
JobSection.defaultProps = defaultProps;

export default JobSection;
