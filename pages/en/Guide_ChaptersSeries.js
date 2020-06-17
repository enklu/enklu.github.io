const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function ChaptersSeries(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const chaptersSeriesLinks = [
    {
			content:`[Learn how to use basic hierarchy and transform tools](${siteConfig.baseUrl}docs/ChaptersSeries/Chapter1)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/ChaptersSeries/Chapter1`,
			title: `[Chapter 1: Intro to Enklu Cloud](${siteConfig.baseUrl}docs/ChaptersSeries/Chapter1)`
    },
    {
			content:`[Build a small scene using transform tools](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Chapter 2](${siteConfig.baseUrl}docs/doc2.html)`
    },
    {
			content:`[Add lighting and effects into a scene.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Chapter 3](${siteConfig.baseUrl}docs/doc2.html)`
    },
		{
			content:`[Learn how to add user interactions to a scene.](${siteConfig.baseUrl}docs/doc2.html)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/doc2.html`,
			title: `[Chapter 4](${siteConfig.baseUrl}docs/doc2.html)`
    },
  ];
	
	const Title_Splash = () => (
    <div className= "titleSplash">
			<div className="titleText">
				<h2>Chapters Series</h2>
				<p>Tutorial guides for example scenes to walk through the basics of setting up simple vignettes and user interactions in Enklu Cloud. (More Chapters are in the works!)</p>
			</div>
			<img src={`${baseUrl}img/undraw_setup.svg`} />
    </div>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/> 
          <GridBlock contents={chaptersSeriesLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = ChaptersSeries;