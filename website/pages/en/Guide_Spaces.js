const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Spaces(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const spacesLinks = [
    {
			content:`[Creating a space scan.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Creating a space scan.](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Updating a space scan.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Updating a space scan](${siteConfig.baseUrl}docs/doc1.html)`
    },
    {
			content:`[Manually adding anchors to a space.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Manually adding anchors to a space](${siteConfig.baseUrl}docs/doc1.html)`
    },
		{
			content:`[Downloading a space scan.](${siteConfig.baseUrl}docs/doc1.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc1.html`,
			title: `[Downloading a space scan](${siteConfig.baseUrl}docs/doc1.html)`
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <div className="postFlex">
            <div className="postLogo">
              <img src={`${baseUrl}img/undraw_working_late_spaces.svg`}/>
            </div>
            <div>
              <header className="postHeader">
                <h1>Spaces</h1>
              </header>
              <p>Creating and editing space scans.</p>
            </div>
          </div>  
          <GridBlock contents={spacesLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Spaces;