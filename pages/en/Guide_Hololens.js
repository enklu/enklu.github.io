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
			content:`[Device operation and Enklu app installation.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[HoloLens 2 Basics & Setup](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Device operation and Enklu app installation.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[HoloLens (1st gen) Basics & Setup](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Enklu app voice commands and app permissions.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Voice Commands](${siteConfig.baseUrl}docs/doc1.html)`
    },
		{
			content:`[Display live preview of in-lens content using Microsoft Connect app.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Live Preview](${siteConfig.baseUrl}docs/doc1.html)`
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <div className="postFlex">
            <div className="postLogo">
              <img src={`${baseUrl}img/undesk_augmented_reality01.svg`}/>
            </div>
            <div>
              <header className="postHeader">
                <h1>HoloLens</h1>
              </header>
              <p>Guides and features specific to HoloLens.</p>
            </div>
          </div>  
          <GridBlock contents={hololensLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Hololens;