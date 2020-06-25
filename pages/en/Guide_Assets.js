const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Assets(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const assetLinks = [
    {
			content:`[Upload 3D models, image assets, and audio files.](${siteConfig.baseUrl}docs/Assets/ImportYourOwnAssets)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/ImportYourOwnAssets`,
			title: `[Import Your Own Assets](${siteConfig.baseUrl}docs/Assets/ImportYourOwnAssets)`
    },
    {
			content:`[Using Enklu Cloud's public asset library.](${siteConfig.baseUrl}docs/Assets/PublicAssets)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/PublicAssets`,
			title: `[Public Assets](${siteConfig.baseUrl}docs/Assets/PublicAssets)`
    },
		{
			content:`[How to use Unity Prefabs with Enklu Cloud.](${siteConfig.baseUrl}docs/Assets/ExportingUnityPrefabs)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/ExportingUnityPrefabs`,
			title: `[ExportingUnityPrefabs](${siteConfig.baseUrl}docs/Assets/ExportingUnityPrefabs)`
    },
		{
			content:`[Using assets with animations in Enklu Cloud.](${siteConfig.baseUrl}docs/Assets/AddingAnimationsFromUnity)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/AddingAnimationsFromUnity`,
			title: `[Adding Animations from Unity](${siteConfig.baseUrl}docs/Assets/AddingAnimationsFromUnity)`
    },
		{
			content:`["What is the recommended number of polygons for assets?"](${siteConfig.baseUrl}docs/Assets/SceneComplexityRecommendations)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/SceneComplexityRecommendations`,
			title: `[Scene Complexity Recommendations](${siteConfig.baseUrl}docs/Assets/SceneComplexityRecommendations)`
    },
		{
			content:`[How to add and use audio in Enklu Cloud.](${siteConfig.baseUrl}docs/Assets/Audio)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/Audio`,
			title: `[Audio](${siteConfig.baseUrl}docs/Assets/Audio)`
    },
		{
			content:`[How to use Physically Based Shading (PBR) in Enklu Cloud.](${siteConfig.baseUrl}docs/Assets/PBRPipeline)`,
			image: '',
			imageAlign: 'top',
			imageLink: `${siteConfig.baseUrl}docs/Assets/PBRPipeline`,
			title: `[PBR Pipeline](${siteConfig.baseUrl}docs/Assets/PBRPipeline)`
    },
  ];

		const Title_Splash = () => (
      <div className= "titleSplash">
				<div className="titleText">
					<h2>Assets</h2>
					<p>Asset guides related to importing your own assets, using Enklu's public assets, adding animations, exporting Unity prefabs, and more.</p>
				</div>
				<img src={`${baseUrl}img/undraw_3d_modeling_h60h.svg`} />
      </div>
    );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
					<Title_Splash/>  
          <GridBlock contents={assetLinks} layout="fourColumn" align="center"/>
        </div>
      </Container>
    </div>
  );
}

module.exports = Assets;