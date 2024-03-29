import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    	--color-color-primary: #27ae60;
    	--color-color-secondary: #eb5757;
		--color-white: #ffffff;
		--color-header-gray: #f5f5f5;
    	--color-grey-600: #333333;
    	--color-grey-300: #828282;
    	--color-grey-100: #e0e0e0;
    	--color-grey-0: #f5f5f5;
    	--color-negative: #e60000;
    	--color-warning: #ffcd07;
    	--color-sucess: #168821;
    	--color-information: #155bcb;

		--input-font-size: 1.6rem;

		--radius: 5px;
		
		font-size: 62.5%;
    }

	*{
		box-sizing: border-box;
	}
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		
		font: inherit;
		vertical-align: baseline;
		font-family: "Inter";
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section, button {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button{
		cursor: pointer;
	}
`