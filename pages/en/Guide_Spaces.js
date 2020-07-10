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
			content:`[Creating new space scans using a HoloLens.](${siteConfig.baseUrl}docs/Spaces/CreatingSpace)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Spaces/CreatingSpace`,
			title: `[Creating Space Scans](${siteConfig.baseUrl}docs/Spaces/CreatingSpace)`
    },
    {
			content:`[Updating existing space scans.](${siteConfig.baseUrl}docs/Spaces/UpdatingSpace)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Spaces/UpdatingSpace`,
			title: `[Updating Space Scans](${siteConfig.baseUrl}docs/Spaces/UpdatingSpace)`
    },
    {
			content:`[Manually adding anchors to a space scan.](${siteConfig.baseUrl}docs/Spaces/AddingAnchors)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Spaces/AddingAnchors`,
			title: `[Adding Anchors](${siteConfig.baseUrl}docs/Spaces/AddingAnchors)`
    },
		{
			content:`[Downloading space scans from the Web Editor.](${siteConfig.baseUrl}docs/Spaces/DownloadingScan)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Spaces/DownloadingScan`,
			title: `[Downloading Scans](${siteConfig.baseUrl}docs/Spaces/DownloadingScan)`
    },
  ];

	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>Spaces</h2>
				<p>Learn how to anchor content to your physical environment. Information on creating Spaces, updating them, and exporting the mesh data can be found here.</p>
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
