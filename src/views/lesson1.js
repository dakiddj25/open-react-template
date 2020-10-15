import React from 'react';
// import sections
import { SectionSplitProps } from '../utils/SectionProps';
import classNames from 'classnames';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Legacy from '../components/lesson1sections/Legacy';
import Button from '../components/elements/Button';

const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }

  const Lesson1 = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
  }) => {
  
    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );
  
    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );
  
    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );
  
    const sectionHeader = {
      title: 'Lesson 1',
      paragraph: 'Recognize anyone? Can you tell me who a person is and what are they known for?'
    };
  
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
                <Legacy/>
             
            </div>
          </div>
        <Button tag="a" color="primary" wideMobile href="/Lesson2">Next Lesson</Button>
        </div>

      </section>
    );
  }
  
  Lesson1.propTypes = propTypes;
  Lesson1.defaultProps = defaultProps;
  
  export default Lesson1;