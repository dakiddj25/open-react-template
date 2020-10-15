import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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
    title: 'Project AIM Lessons',
    paragraph: 'Simplely select an lesson that you will like to start or continue. Each lesson has a brief description about what the lesson entails!'
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

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                <Link to='/Lesson1'><p className="text-xxs text-color-primary fw-600 tt-u mb-8">Lesson 1</p></Link>
                  </div>
                  <Link to='/Lesson1'>
                    <h3 className="mt-0 mb-12" href="/ProjectAim">
                      What is Legacy?
                    </h3>
                  </Link>
               
                <p className="m-0">
                  Introduces the Project AIM (Adult Identiy Mentoring) program. Youth discuss the concepts of what it means to create a legacy for oneself, the importance of having a goal for one's futures, and begin to think about their own future selves.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://assets.entrepreneur.com/content/3x2/2000/20190715192128-GettyImages-1074061764.jpeg'
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">

                  <Link to='/Lesson2'> <p className="text-xxs text-color-primary fw-600 tt-u mb-8">Lesson 2</p></Link>

                  </div>
                  <Link to='/Lesson2'>
                    <h3 className="mt-0 mb-12" >
                      Looking Ahead to My Future
                    </h3>
                  </Link>
                
                <p className="m-0">
                  Youth are encouraged to look ahead and envision their future. They will practice self-confidence strategies to help them prepare for positive future.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://daviescpa.com/wp-content/uploads/looking-ahead.jpg'
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Link to ='/Lesson3'><p className="text-xxs text-color-primary fw-600 tt-u mb-8">Lesson 3</p></Link>
                  
                  </div>
                  <Link to ='/Lesson3'>
                    <h3 className="mt-0 mb-12">
                      Guest Speakers
                    </h3>
                  </Link>
                
                <p className="m-0">
                  Visits from young adults who have professional experience to share with youth how they overcame obstacles, and how they had to prepare for their future. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://cdn.shrm.org/image/upload/c_crop%2Ch_954%2Cw_1697%2Cx_0%2Cy_55/c_fit%2Cw_767/v1/Events/iStock_87873381_MEDIUM_mzbpu2?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjU1LCJ4MiI6MTY5NywieTIiOjEwMDgsInciOjE2OTcsImgiOjk1NH19'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;