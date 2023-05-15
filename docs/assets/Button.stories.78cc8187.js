import"./jsx-runtime.9d43cec3.js";import{c as t,A as w,C as s,S as l,a as x,M as S}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{a as T}from"./index.0a53e796.js";import{_ as p}from"./Button.ba44a7c6.js";import{_ as N}from"./Icon.306415ba.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./make-decorator.41c4cbef.js";import"./vue.esm-bundler.966918be.js";function f(){return f=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var b in r)Object.prototype.hasOwnProperty.call(r,b)&&(a[b]=r[b])}return a},f.apply(this,arguments)}const n=({content:a,...e})=>{const r=e;return{components:{Button:p},setup(){return{args:r,content:a,click:T("click")}},template:`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>`}},o=({icon:a,...e})=>{const r=e;return{components:{Button:p,Icon:N},setup(){return{args:r,icon:a,click:T("click")}},template:`
    <Button v-bind="args" @click="click">
      <template v-slot:custom-icon>
        <Icon name="fingerprint"/>
      </template>
    </Button>`}},v={variant:{control:{type:"select",options:["primary","secondary","text","outline"]},defaultValue:"primary",table:{defaultValue:{summary:"primary",detail:"primary | secondary | text | outline"}},description:"Variants of button"},loading:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"medium",table:{defaultValue:{summary:"medium",detail:"small | medium | large "}},description:"Sizes of button"},prependIcon:{control:{type:"text"},defaultValue:""},appendIcon:{control:{type:"text"},defaultValue:""},onlyIcon:{control:{type:"boolean"},defaultValue:!1},height:{control:{type:"text"},defaultValue:""},block:{control:{type:"boolean"},defaultValue:!1},backgroundColor:{control:{type:"color"}}},B={WithContentSlot:n,WithCustomIconSlot:o,defaultArgs:v},C="wrapper";function k({components:a,...e}){return t(C,f({},B,e,{components:a,mdxType:"MDXLayout"}),t(S,{title:"Components/Button",component:p,argTypes:{...v},parameters:{viewMode:"docs"},mdxType:"Meta"}),t("h1",null,"Button"),t("p",null,"Button is a clickable element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"#overview"},"Overview"))),t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"#playground"},"Playground"))),t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"#usage"},"Usage with props"))),t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"#variants"},"Variants"))),t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"#tips"},"Tips")))),t("h3",null,"Overview ",t("a",{id:"overview"})),t("p",null,"A button component is a reusable piece of code that can be used in any part of a website or application. It is typically represented by a text or an icon that represents the action that will be performed when the user clicks on it."),t(s,{mdxType:"Canvas"},t(l,{name:"Overview",argTypes:{...n.argTypes},args:{variant:"primary",content:"Button"},mdxType:"Story"},n.bind({}))),t("h3",null,"Playground ",t("a",{id:"playground"})),t(x,{story:"Overview",exclude:/^(click|content|default|custom-icon|on.*)$/,mdxType:"ArgsTable"}),t("h2",null,"Usage with props ",t("a",{id:"usage"})),t("h3",null,"variant (required)"),t("p",null,"The ",t("strong",{parentName:"p"},"variant")," prop allows you to specify the appearance of the button. The possible values for this prop are primary, secondary, text, and outline."),t("h3",null,"loading (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"loading"),` prop allows you to specify whether the button is in a loading state. When the button is in a loading state, it will display a loading indicator (e.g. a spinning spinner) instead of the button text.
To set the button to a loading state, you can pass in the value true to the loading prop.`),t("h3",null,"disabled (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"disabled"),` prop allows you to specify whether the button is disabled. A disabled button is not interactive and cannot be clicked on.
To disable a button, you can pass in the value true to the disabled prop.`),t("h3",null,"prependIcon (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"prependIcon"),` prop allows you to specify an icon that will be placed before the button text. This can be used to add visual context to the button.
To add an icon to the button, you can pass in the name of the icon as a string to the prependIcon prop.`),t("h3",null,"appendIcon (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"appendIcon"),` prop is similar to the prependIcon prop, but it allows you to specify an icon that will be placed after the button text.
To add an icon to the button, you can pass in the name of the icon as a string to the appendIcon prop.`),t("h3",null,"size (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"size")," prop allows you to specify the size of the button. The possible values for this prop are: small, medium, and large."),t("h3",null,"height (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"height"),` prop allows you to specify the height of the button. This can be useful if you want to create buttons with different heights, or if you want to match the height of the button to the height of other elements on the page.
To specify the height of the button, you can pass in a numeric value (in pixels) to the height prop.`),t("h3",null,"block (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"block"),` prop allows you to specify whether the button should be displayed as a block element. When a button is a block element, it will take up the full width of its container.
To make a button a block element, you can pass in the value true to the block prop.`),t("h3",null,"backgroundColor (optional)"),t("p",null,"The ",t("strong",{parentName:"p"},"backgroundColor"),` prop allows you to specify the background color of the button. This can be useful if you want to create buttons with different background colors, or if you want to match the background color of the button to the color scheme of your website or application.
To specify the background color of the button, you can pass in a valid CSS color value to the backgroundColor prop.`),t("h2",null,"Variants ",t("a",{id:"variants"})),t("h3",null,"Primary"),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Primary",argTypes:{...n.argTypes},args:{variant:"primary",content:"Primary"},mdxType:"Story"},n.bind({}))),t("h3",null,"Secondary"),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Secondary",argTypes:{...n.argTypes},args:{variant:"secondary",content:"Secondary"},mdxType:"Story"},n.bind({}))),t("h3",null,"Outline"),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Outline",argTypes:{...n.argTypes},args:{variant:"outline",content:"Outline"},mdxType:"Story"},n.bind({}))),t("h3",null,"Text"),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Text",argTypes:{...n.argTypes},args:{variant:"text",content:"Text"},mdxType:"Story"},n.bind({}))),t("h3",null,t("inlineCode",{parentName:"h3"},"#Custom Icon Slot")),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Custom Icon",argTypes:{...o.argTypes},args:{variant:"primary"},mdxType:"Story"},o.bind({}))),t("h3",null,"Unstyled"),t("h4",null,"*"," Not yet implemented in the library"),t(s,{withSource:"open",mdxType:"Canvas"},t(l,{name:"Unstyled",argTypes:{...o.argTypes},args:{},mdxType:"Story"},o.bind({}))),t("h3",null,"Tips ",t("a",{id:"tips"})),t("p",null,"\u{1F4A1} Use the variant prop to create buttons with different appearances, such as primary, secondary, text, and outline."),t("p",null,"\u{1F4A1} Use the loading prop to show a loading indicator on the button when it is performing an action."),t("p",null,"\u{1F4A1} Use the disabled prop to make a button non-interactive when it is not needed."),t("p",null,"\u{1F4A1} Use the prependIcon and appendIcon props to add visual context to the button."),t("p",null,"\u{1F4A1} Use the size prop to create buttons with different sizes, such as small, medium, and large."),t("p",null,"\u{1F4A1} Use the height prop to match the height of the button to the height of other elements on the page."),t("p",null,"\u{1F4A1} Use the block prop to make the button take up the full width of its container."),t("p",null,"\u{1F4A1} Use the backgroundColor prop to match the background color of the button to the color scheme of your website or application."))}k.isMDXComponent=!0;const c=n.bind({});c.storyName="Overview";c.argTypes={...n.argTypes};c.args={variant:"primary",content:"Button"};c.parameters={storySource:{source:`({
  content,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button
    },

    setup() {
      return {
        args,
        content,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>\`
  };
}`}};const u=n.bind({});u.storyName="Primary";u.argTypes={...n.argTypes};u.args={variant:"primary",content:"Primary"};u.parameters={storySource:{source:`({
  content,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button
    },

    setup() {
      return {
        args,
        content,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>\`
  };
}`}};const m=n.bind({});m.storyName="Secondary";m.argTypes={...n.argTypes};m.args={variant:"secondary",content:"Secondary"};m.parameters={storySource:{source:`({
  content,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button
    },

    setup() {
      return {
        args,
        content,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>\`
  };
}`}};const d=n.bind({});d.storyName="Outline";d.argTypes={...n.argTypes};d.args={variant:"outline",content:"Outline"};d.parameters={storySource:{source:`({
  content,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button
    },

    setup() {
      return {
        args,
        content,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>\`
  };
}`}};const h=n.bind({});h.storyName="Text";h.argTypes={...n.argTypes};h.args={variant:"text",content:"Text"};h.parameters={storySource:{source:`({
  content,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button
    },

    setup() {
      return {
        args,
        content,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:default>
        <span>{{ content }}</span>
      </template>
    </Button>\`
  };
}`}};const y=o.bind({});y.storyName="Custom Icon";y.argTypes={...o.argTypes};y.args={variant:"primary"};y.parameters={storySource:{source:`({
  icon,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button,
      Icon
    },

    setup() {
      return {
        args,
        icon,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:custom-icon>
        <Icon name="fingerprint"/>
      </template>
    </Button>\`
  };
}`}};const g=o.bind({});g.storyName="Unstyled";g.argTypes={...o.argTypes};g.args={};g.parameters={storySource:{source:`({
  icon,
  ...rest
}) => {
  const args = rest;
  return {
    components: {
      Button,
      Icon
    },

    setup() {
      return {
        args,
        icon,
        click: action('click')
      };
    },

    template: \`
    <Button v-bind="args" @click="click">
      <template v-slot:custom-icon>
        <Icon name="fingerprint"/>
      </template>
    </Button>\`
  };
}`}};const i={title:"Components/Button",parameters:{viewMode:"docs"},component:p,argTypes:{...v},includeStories:["overview","primary","secondary","outline","text","customIcon","unstyled"]},I={Overview:"overview",Primary:"primary",Secondary:"secondary",Outline:"outline",Text:"text","Custom Icon":"customIcon",Unstyled:"unstyled"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>t(w,{mdxStoryNameToKey:I,mdxComponentAnnotations:i},t(k,null))};const X=["WithContentSlot","WithCustomIconSlot","defaultArgs","overview","primary","secondary","outline","text","customIcon","unstyled"];export{n as WithContentSlot,o as WithCustomIconSlot,X as __namedExportsOrder,y as customIcon,i as default,v as defaultArgs,d as outline,c as overview,u as primary,m as secondary,h as text,g as unstyled};
//# sourceMappingURL=Button.stories.78cc8187.js.map
