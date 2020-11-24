const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Scripting(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const scriptingLinks = [
    {
			content:`[Using Enklu Cloud's public script library.](${siteConfig.baseUrl}docs/Scripting/PublicScripts)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/PublicScripts`,
			title: `[Public Scripts](${siteConfig.baseUrl}docs/Scripting/PublicScripts)`
    },
    {
			content:`[Scripting basics.](${siteConfig.baseUrl}docs/Scripting/IntroductionToScripting)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/IntroductionToScripting`,
			title: `[Introduction to Scripting](${siteConfig.baseUrl}docs/Scripting/IntroductionToScripting)`
    },
    {
			content:`[Using VineML in Vine scripts.](${siteConfig.baseUrl}docs/Scripting/VineScriptBasics)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/VineScriptBasics`,
			title: `[Vine Script Basics](${siteConfig.baseUrl}docs/Scripting/VineScriptBasics)`
    },
    {
			content:`[Using JavaScript in Behavior scripts.](${siteConfig.baseUrl}docs/Scripting/BehaviorScriptBasics)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/BehaviorScriptBasics`,
			title: `[Behavior Script Basics](${siteConfig.baseUrl}docs/Scripting/BehaviorScriptBasics)`
    },
		{
			content:`[Using Behavior scripts to control animations.](${siteConfig.baseUrl}docs/Scripting/ControllingAnimations)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/ControllingAnimations`,
			title: `[Controlling Animations](${siteConfig.baseUrl}docs/Scripting/ControllingAnimations)`
    },
		{
			content:`[Connecting to multiplayer via nodejs.](${siteConfig.baseUrl}docs/Scripting/NodeSDK)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Scripting/NodeSDK`,
			title: `[Multiplayer SDK](${siteConfig.baseUrl}docs/Scripting/NodeSDK)`
		},
  ];

	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>Scripting</h2>
				<p>How to script in Enklu Cloud using a combination of Vine and Behavior scripts to create custom user interfaces and interactions in AR.</p>
			</div>
			<img src={`${baseUrl}img/undraw_scripting.svg`} />
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/>
          <GridBlock contents={scriptingLinks} layout="threeColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Scripting;
