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
			content:`[Enklu Cloud's Web Editor interface](${siteConfig.baseUrl}docs/WebEditorBasics/WebEditorInterface)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/WebEditorInterface`,
			title: `[The Web Editor](${siteConfig.baseUrl}docs/WebEditorBasics/WebEditorInterface)`
    },
    {
			content:`[Hardware and software recommendations for using the Web Editor.](${siteConfig.baseUrl}docs/WebEditorBasics/MinimumRequirements)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/MinimumRequirements`,
			title: `[Minimum Requirements](${siteConfig.baseUrl}docs/WebEditorBasics/inimumRequirements)`
    },
    {
			content:`[Accessing and sharing experiences.](${siteConfig.baseUrl}docs/WebEditorBasics/ManagingYourExperiences)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/ManagingYourExperiences`,
			title: `[Managing Your Experiences](${siteConfig.baseUrl}docs/WebEditorBasics/ManagingYourExperiences)`
    },
		{
			content:`[Hotkeys for commons actions in the Web Editor.](${siteConfig.baseUrl}docs/WebEditorBasics/KeyboardShortcuts)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/KeyboardShortcuts`,
			title: `[Keyboard Shortcuts](${siteConfig.baseUrl}docs/WebEditorBasics/KeyboardShortcuts)`
    },
		{
			content:`[How to use and position your assets in the canvas.](${siteConfig.baseUrl}docs/WebEditorBasics/PlacingAnAssetInTheScene)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/PlacingAnAssetInTheScene`,
			title: `[Placing an Asset in the Scene](${siteConfig.baseUrl}docs/WebEditorBasics/PlacingAnAssetInTheScene)`
    },
		{
			content:`[How to create and use directional, point, and spot lights.](${siteConfig.baseUrl}docs/WebEditorBasics/Lights)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/Lights`,
			title: `[Lights](${siteConfig.baseUrl}docs/WebEditorBasics/Lights)`
    },
		{
			content:`[How to adjust texture, lighting, and other quality settings.](${siteConfig.baseUrl}docs/WebEditorBasics/SceneSettings)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/SceneSettings`,
			title: `[Scene Settings](${siteConfig.baseUrl}docs/WebEditorBasics/SceneSettings)`
    },
		{
			content:`[Adding effects to fine tune your visuals.](${siteConfig.baseUrl}docs/WebEditorBasics/PostProcessing)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/WebEditorBasics/PostProcessing`,
			title: `[Post Processing](${siteConfig.baseUrl}docs/WebEditorBasics/PostProcessing)`
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
