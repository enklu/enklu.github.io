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
			content:`[Creating a space scan.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Creating a space scan.](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Updating a space scan.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Updating a space scan](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Manually adding anchors to a space.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Manually adding anchors to a space](${siteConfig.baseUrl}docs/doc2.html)`
    },
		{
			content:`[Downloading a space scan.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Downloading a space scan](${siteConfig.baseUrl}docs/doc2.html)`
    },
  ];

	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>Spaces</h2>
				<p>Guides related to creating and editing space scans, linking spaces to experiences, and downloading scans to use in Unity.</p>
			</div>
			<img src={`${baseUrl}img/undraw_working_late_spaces.svg`} />
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/> 
          <GridBlock contents={spacesLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Spaces;