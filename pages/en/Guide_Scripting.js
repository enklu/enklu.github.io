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
			content:`[Scripting basics.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Introduction to Scripting](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Using VineML in Vine scripts.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Vine Script Basics](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Using JavaScript in Behavior scripts.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Behavior Script Basics](${siteConfig.baseUrl}docs/doc2.html)`
    },
		{
			content:`[Using Behavior scripts to control animations.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Controlling Animations](${siteConfig.baseUrl}docs/doc2.html)`
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
          <GridBlock contents={scriptingLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Scripting;