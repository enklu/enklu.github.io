const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Hololens(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const hololensLinks = [
    {
			content:`[Device operation and Enklu app installation.](${siteConfig.baseUrl}docs/Guide_HoloLens2Basics&Setup)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Guide_HoloLens2Basics&Setup`,
			title: `[HoloLens 2 Basics & Setup](${siteConfig.baseUrl}docs/Guide_HoloLens2Basics&Setup)`
    },
    {
			content:`[Device operation and Enklu app installation.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[HoloLens (1st gen) Basics & Setup](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Enklu app voice commands and app permissions.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Voice Commands](${siteConfig.baseUrl}docs/doc2.html)`
    },
		{
			content:`[Display live preview of in-lens content using Microsoft Connect app.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Live Preview](${siteConfig.baseUrl}docs/doc2.html)`
    },
  ];

	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>HoloLens</h2>
				<p>Guides and features specific to HoloLens (1st gen) and HoloLens 2 including device operation, spatial scans, and live preview.</p>
			</div>
			<img src={`${baseUrl}img/undesk_augmented_reality01.svg`} />
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/>  
          <GridBlock contents={hololensLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Hololens;