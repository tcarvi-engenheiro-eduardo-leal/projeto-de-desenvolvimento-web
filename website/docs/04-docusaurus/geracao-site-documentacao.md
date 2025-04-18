## Geracao de Tutorial
- Comando usado para gerar website:
	- npx create-docusaurus@latest [name] [template] [rootDir]
		- npx create-docusaurus@latest nome-projeto classic website --typescript
- Versões Utilizadas:
	- nodejs: 22.12.0
	- npm: 10.9.0
	- npx: 10.9.0
	- create-docusaurus: 3.7.0

## Alteração da template:
- Substitua arquivos markdowns do diretório website/docs/, para que tenha apenas os arquivos:
	- /docs/00-conceitos-gerais/_category_.json
	- /docs/00-conceitos-gerais/00-conceitos.md

## Alteração de texts:
- My Site
	- SEUSITE

- Dinosaurs are cool
	- Tutoriais de SEUSITE

- Docusaurus Tutorial - 5min
	- Tutoriais - 10 min

- https://your-docusaurus-site.example.com
	- https://tcarvi.com.br

- https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/
	- https://github.com/tcarvi-engenheiro-eduardo-leal/pesquisa-sobre-seusite/tree/main/

- Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.
	- atualizado em  ${new Date().toLocaleDateString("pt-BR")} ©TCARVI

- https://x.com/docusaurus
	- https://x.com/tcarvi_eduardo

- https://stackoverflow.com/questions/tagged/docusaurus		
	- https://stackoverflow.com/users/26135239/tcarvi-engenheiro-eduardo-leal?tab=questions

- https://discordapp.com/invite/docusaurus
	- https://www.youtube.com/channel/UCWA39JV7f68QQ6lZEpMOqIA

- Discord
	- YouTube

- Hello from $
	- $

- Se você não usar uma rede social pessoal, exclua textos e links do Facebook.
	- organizationName: 'facebook'
		- organizationName: 'TCARVI'
	- https://github.com/facebook/docusaurus
		- https://github.com/tcarvi-engenheiro-eduardo-leal/pesquisa-sobre-algebra

- Substitua arquivos markdowns do diretório website/docs/, conforme padrão desta formatação de textos e conforme seus conteúdos.
	- /docs/intro
		- /docs/conceitos-gerais/conceitos

- Apague o direteorio blog e use o seu.

## Execução do site
- http://localhost:3000
- ```bash
	cd website/nome-projeto
	```    
- ```bash
	yarn install
	```  
- ```bash
	yarn start
	```  
