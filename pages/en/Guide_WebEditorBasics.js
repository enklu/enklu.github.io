const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function WebEditorBasics(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const webEditorBasicsLinks = [
    {
			content:`[Enklu Cloud's Web Editor interface](${siteConfig.baseUrl}docs/Guide_WebEditorInterface)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Guide_WebEditorInterface`,
			title: `[The Web Editor](${siteConfig.baseUrl}docs/Guide_WebEditorInterface)`
    },
    {
			content:`[Hardware and software recommendations for using the Web Editor.](${siteConfig.baseUrl}docs/Guide_MinimumRequirements)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Guide_MinimumRequirements`,
			title: `[Minimum Requirements](${siteConfig.baseUrl}docs/Guide_MinimumRequirements)`
    },
    {
			content:`[Accessing and sharing experiences.](${siteConfig.baseUrl}docs/Guide_ManagingYourExperiences)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Guide_ManagingYourExperiences`,
			title: `[Managing Your Experiences](${siteConfig.baseUrl}docs/Guide_ManagingYourExperiences)`
    },
		{
			content:`[Hotkeys for commons actions in the Web Editor.](${siteConfig.baseUrl}docs/Guide_KeyboardShortcuts)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Guide_KeyboardShortcuts`,
			title: `[Keyboard Shortcuts](${siteConfig.baseUrl}docs/Guide_KeyboardShortcuts)`
    },
  ];

	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>Web Editor Basics</h2>
				<p>Guides related to the Web Editor interface, creating and managing experiences, and using keyboard shortcuts.</p>
			</div>
			<img src={`${baseUrl}img/undraw_design_layout.svg`} />
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/>
          <GridBlock contents={webEditorBasicsLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = WebEditorBasics;