import React from 'react';

class Bio extends React.Component {
  render() {
    const { theme } = this.props;
    // TODO: use glamor or something?
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `

          /**
           * Theme: Gloom Prism
           *
           * Prism theme based on Theme Gloom from Atom (https://github.com/hejrobin/gloom)
           * @author Theme Gloom Atom: hejrobin (https://github.com/hejrobin/)
           * @author Theme Prism Gloom: Luis Ramirez (https://github.com/luisramirez-m)
           */
           /*
           * Colors
           */

           /* Code blocks */
           pre[class*="language-"] {
             border-radius: 10px;
             margin: 1.75rem 0;
             overflow: auto;
             padding: 1em;
           }

           code[class*="language-"],
           pre[class*="language-"] {
             font-family: 'Fira Code', monospace;
             font-size: .88rem;
             text-align: left;
             white-space: pre;
             word-spacing: normal;
             word-break: normal;
             word-wrap: normal;
             line-height: 1.5;
             margin-bottom: 0;

             -moz-tab-size: 4;
             -o-tab-size: 4;
             tab-size: 4;

             -webkit-hyphens: none;
             -moz-hyphens: none;
             -ms-hyphens: none;
             hyphens: none;
             /* background: #292a44; */
             color: #66D9EF; }

           /* pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
           code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
             text-shadow: none;
             background: #b3d4fc; }

           pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
           code[class*="language-"]::selection, code[class*="language-"] ::selection {
             text-shadow: none;
             background: #b3d4fc; } */

             pre[class*="language-"],
           :not(pre) > code[class*="language-"] {
             background: #292a44;
           }

           .token.attr-name {
             color: rgb(173, 219, 103);
             font-style: italic;
           }

             /* Text Selection colour */
             pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
             code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
               text-shadow: none;
               background: hsla(0, 0%, 93%, 0.15);
             }

             pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
             code[class*="language-"]::selection, code[class*="language-"] ::selection {
               text-shadow: none;
               background: hsla(0, 0%, 93%, 0.15);
             }

             /* Inline code */
             :not(pre) > code[class*="language-"] {
               border-radius: .3em;
               /* background: rgba(255,229,100,0.2); */
               background: #F9F9F9;
               /* background: rgba(132,58,151,0.2); */
               /* color: #1a1a1a; */
               color: #BF616A;
               padding: .15em .2em .05em;
               white-space: normal;
             }


           @media print {
             code[class*="language-"],
             pre[class*="language-"] {
               text-shadow: none; } }

           pre[class*="language-"] {
             padding: 1em;
             margin: 3em 0;
             overflow: auto; }

           /* :not(pre) > code[class*="language-"],
           pre[class*="language-"] {
             background: #292a44; } */

           :not(pre) > code[class*="language-"] {
             padding: .1em;
             border-radius: .3em;
             white-space: normal; }

           .token.scope {
             color: #66D9EF; }

           .token.comment,
           .token.prolog,
           .token.doctype,
           .token.cdata {
             color: #6D6DB5;
             font-style: italic; }

           .token.punctuation {
             color: #d8d8d8; }

           .token.namespace {
             opacity: .7; }

           .token.tag,
           .token.operator,
           .token.number {
             color: #7AA5FF; }

           .token.property {
             color: #FF6F9F; }

           .token.function {
             color: #2DE0A7; }

           .token.tag-id,
           .token.selector,
           .token.atrule-id {
             color: #FF6F9F; }

           code.language-javascript,
           .token.attr-name {
             color: #F92672; }

           code.language-css,
           code.language-scss,
           .token.boolean,
           .token.string,
           .token.entity,
           .token.url,
           .language-css .token.string,
           .language-scss .token.string,
           .style .token.string,
           .token.attr-value,
           .token.keyword,
           .token.control,
           .token.directive,
           .token.unit,
           .token.statement,
           .token.regex,
           .token.atrule {
             color: #6DFEDF; }

           .token.placeholder,
           .token.variable {
             color: #FF6F9F; }

           .token.deleted {
             text-decoration: line-through; }

           .token.inserted {
             border-bottom: 1px dotted #eeebff;
             text-decoration: none; }

           .token.italic {
             font-style: italic; }

           .token.important,
           .token.bold {
             font-weight: bold; }

           .token.important {
             color: #c4b9fe; }

           .token.entity {
             cursor: help; }

           .token.number {
             color: #FFDB7D; }

           /*
           * Lenguage markup
           */
           .language-markup {
             color: #fff !important; }

           /*
           * Lenguage HTML
           */
           .language-html .token .tag {
             color: #FF6F9F; }

             .language-java .token.entity {
               color: #6DFEDF !important; }
               .language-java .token.function {
                 color: #c4b9fe !important; }
           /*
           * Lenguage PHP
           */
           .language-php {
             color: #6DFEDF !important; }
             .language-php .package {
               color: #c4b9fe !important; }
             .language-php .token .keyword {
               color: #F92672 !important; }
             .language-php .token .tag {
               color: #6DFEDF !important; }
               .language-php .token .tag .tag-id {
                 color: #6DFEDF !important; }
               .language-php .token .tag .punctuation {
                 color: #6DFEDF !important; }

           /*
           * Lenguage CSS
           */
           .language-css .token.atrule-id {
             color: #7AA5FF !important; }

           .language-css .token.pseudo-class {
             color: #F92672; }

           .language-css .token.property {
             color: #66D9EF !important; }

           .language-js .token.keyword {
             color: #F92672; }

           .language-js .token.variable {
             color: #FF6F9F; }

             .language-java .token.variable {
             color: #FF6F9F; }

           /*
           * Lenguage Bash
           */
           .language-bash {
             color: #fff !important; }
             .language-bash .token.operator, .language-bash .token.string, .language-bash .token.function, .language-bash .token.keyword, .language-bash .token.variable {
               color: #fff !important; }

           /*
           * Lenguage Python
           */
           .language-python {
             color: #fff !important; }
             .language-python .token.keyword {
               color: #F92672 !important; }

           .language-java {
             color: #fff !important; }
             .language-java .token.keyword {
               color: #F92672 !important; }

           .gatsby-highlight-code-line {
             background-color: rgba(62,63,87,90);
             display: block;
             margin-right: -1em;
             margin-left: -1em;
             padding-right: 1em;
             padding-left: 0.75em;
             border-left: 0.25em solid #06D7D9;
           }

       .gatsby-highlight pre[class*="language-"] {
        margin-bottom: 1.75rem;
        border-radius: 10px;
        background: #2A2D46;
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        fontFamily: 'Fira Code'
        }

        a:link {
          color: ${theme.primary.text.link};
          text-decoration: underline;
        }

        a:hover {
          color: ${theme.secondary.text.normal}
        }
        .react-toggle-track-x {
          width: 17px;
          height: 17px;
          right: 5px;
        }

        .react-toggle-track-check {
          width: 17px;
          height: 17px;
          left: 5px;
        }
        .ais-SearchBox-reset svg,
        .ais-SearchBox-submit svg {
          fill: #06D7D9;
        }
        progress {
          width: 100%;
          left: 0;
          top: 0;
          // background-color: #06D7D9;
          // color: #06D7D9;
        }
        `,
        }}
      />
    );
  }
}

export default Bio;
