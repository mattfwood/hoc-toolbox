(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/index.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");t("./node_modules/docz/dist/index.m.js");function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components;s(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"higher-order-component-toolbox"}},"Higher Order Component Toolbox"),a.a.createElement(r.MDXTag,{name:"p",components:n},"This library is designed to encourage cleaner React codebases by avoiding some of the less readable hacks that React developers use frequently."),a.a.createElement(r.MDXTag,{name:"p",components:n},"Instead of doing this:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"  <div>\n    {true && (\n      <div>Some conditional text</div>\n    )}\n  </div>\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"It makes code much more readable and reusable to use smarter components like this:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"  <If condition={true}>\n    <div>Some conditional text</div>\n  </If>\n")))}}}]);