/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_book_lover.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Lights</Button>
            <Button href={docUrl('doc1.html')}>HoloLens 2 Basics & Setup</Button>
            <Button href={docUrl('doc2.html')}>Import Your Own Assets</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={[]}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
	/*
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );*/
	/*
    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );*/
	/*
    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );*/
	/*
    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );
	*/
    const Features = () => (
			<React.Fragment>
				<Block layout="threeColumn">
				{[
					{
					content:`[Getting started with Enklu Cloud.](${siteConfig.baseUrl}en/Guide_WebEditorBasics.html)`,
					image: `${baseUrl}img/undraw_design_layout.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_WebEditorBasics.html`,
					title: `[Web Editor Basics](${siteConfig.baseUrl}en/Guide_WebEditorBasics.html)`,
					},
					{
					content: `[Features specific to HoloLens.](${siteConfig.baseUrl}en/Guide_Hololens.html)`,
					image: `${baseUrl}img/undesk_augmented_reality01.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_Hololens.html`,
					title: `[HoloLens](${siteConfig.baseUrl}en/Guide_Hololens.html)`,
					},
					{
					content: `[Tutorial guides for example scenes.](${siteConfig.baseUrl}en/Guide_ChaptersSeries.html)`,
					image: `${baseUrl}img/undraw_setup.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_ChaptersSeries.html`,
					title: `[Chapters Series](${siteConfig.baseUrl}en/Guide_ChaptersSeries.html)`,
					},
					{
					content: `[Asset creation, management, and placement.](${siteConfig.baseUrl}en/Guide_Assets.html)`,
					image: `${baseUrl}img/undraw_3d_modeling_h60h.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_Assets.html`,
					title: `[Assets](${siteConfig.baseUrl}en/Guide_Assets.html)`,
					},
					{
					content: `[Creating and editing space scans.](${siteConfig.baseUrl}en/Guide_Spaces.html)`,
					image: `${baseUrl}img/undraw_working_late_spaces.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_Spaces.html`,
					title: `[Spaces](${siteConfig.baseUrl}en/Guide_Spaces.html)`,
					},
					{
					content: `[How to script in Enklu Cloud.](${siteConfig.baseUrl}en/Guide_Scripting.html)`,
					image: `${baseUrl}img/undraw_scripting.svg`,
					imageAlign: 'top',
					imageLink: `${siteConfig.baseUrl}en/Guide_Scripting.html`,
					title: `[Scripting](${siteConfig.baseUrl}en/Guide_Scripting.html)`,
					},
				]}
				</Block>
			</React.Fragment>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
	/*<LearnHow /> <Description /> <TryOut /> <FeatureCallout /> <Showcase />*/
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
