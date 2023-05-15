import"./jsx-runtime.9d43cec3.js";import{c as e,A as k,C as a,S as r,a as T,M as w}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{a as v}from"./index.0a53e796.js";import{_ as f}from"./Chip.f643a2c9.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./make-decorator.41c4cbef.js";import"./vue.esm-bundler.966918be.js";import"./Icon.306415ba.js";function g(){return g=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var m=arguments[t];for(var y in m)Object.prototype.hasOwnProperty.call(m,y)&&(o[y]=m[y])}return o},g.apply(this,arguments)}const n=o=>({components:{Chip:f},setup(){return{args:o,clickChip:v("click:chip"),clickClose:v("click:close")}},template:`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  `}),C={variant:{control:{type:"select",options:["primary","secondary","success","error","warning","info"]},defaultValue:"primary"},size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"medium"},label:{control:{type:"text"},defaultValue:"Chip"},disabled:{control:{type:"boolean"},defaultValue:!1},prependIcon:{control:{type:"text"},defaultValue:""},appendIcon:{control:{type:"text"},defaultValue:"close"},ghost:{control:{type:"boolean"},defaultValue:!1}},x={Default:n,defaultArgs:C},S="wrapper";function b({components:o,...t}){return e(S,g({},x,t,{components:o,mdxType:"MDXLayout"}),e(w,{title:"Components/Chips",component:f,argTypes:{...C},parameters:{viewMode:"docs",layout:"centered"},mdxType:"Meta"}),e("h1",null,"Chip"),e("p",null,"A Chip component is a small, compact element that is used to represent a complex piece of information, an attribute, or a status in a small space. Chips are often used in lists, grids, and other data-heavy layouts to help users easily identify and understand important information."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h3",null,"Overview ",e("a",{id:"overview"})),e("p",null,`Chips are typically displayed as small, rectangular elements with a small amount of text or an icon inside. They may have a border, a background color, and/or a drop shadow to visually distinguish them from the rest of the layout.
They can be interactable, meaning that users can click or tap on them to trigger an action. For example, a Chip might open a detailed view of the information it represents, delete itself from a list, or mark itself as selected. Chips can come in various types, depending on the information or status they represent.`),e(a,{mdxType:"Canvas"},e(r,{name:"Overview",argTypes:{...n.argTypes},args:{prependIcon:"face"},mdxType:"Story"},n.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(T,{story:"Overview",exclude:/^(click.*|on.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h2",null,"prependIcon (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"prependIcon"),' prop allows you to specify an icon to be displayed at the beginning (or "prepend") of the Chip. This can help to visually distinguish the Chip or to add additional context or meaning.'),e("h2",null,"variant (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"variant"),' prop allows you to specify the appearance of the Chip. Possible values for this prop might include "primary", "secondary", "success", "error", "warning" or "info". The variant determines the visual styles of the Chip.'),e("h2",null,"size (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"size"),' prop allows you to specify the size of the Chip. Possible values for this prop might include "small", "medium", or "large". The size determines the height and width of the Chip.'),e("h2",null,"label (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"label")," prop allows you to specify the text label of the Chip. This is the main content of the Chip and should be concise and informative."),e("h2",null,"disabled (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"disabled")," prop allows you to specify whether the Chip is disabled or not. A disabled Chip cannot be interacted with and may have a different appearance to indicate this."),e("h2",null,"appendIcon (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"appendIcon"),' prop allows you to specify an icon to be displayed at the end (or "append") of the Chip. This can be used for actions such as deleting the Chip or opening a detailed view.'),e("h2",null,"ghost (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"ghost"),' prop allows you to specify whether the Chip should have a transparent background. A ghost Chip appears "hollow" and may be used for overlaid or partially transparent layouts.'),e("h2",null,"Stories ",e("a",{id:"stories"})),e("h3",null,"Primary"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Primary",argTypes:{...n.argTypes},args:{},mdxType:"Story"},n.bind({}))),e("h3",null,"Secondary"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Secondary",argTypes:{...n.argTypes},args:{variant:"secondary"},mdxType:"Story"},n.bind({}))),e("h3",null,"Success"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Success",argTypes:{...n.argTypes},args:{variant:"success"},mdxType:"Story"},n.bind({}))),e("h3",null,"Error"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Error",argTypes:{...n.argTypes},args:{variant:"error"},mdxType:"Story"},n.bind({}))),e("h3",null,"Warning"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Warning",argTypes:{...n.argTypes},args:{variant:"warning"},mdxType:"Story"},n.bind({}))),e("h3",null,"Info"),e(a,{withSource:"open",mdxType:"Canvas"},e(r,{name:"Info",argTypes:{...n.argTypes},args:{variant:"info"},mdxType:"Story"},n.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Chips are best used to represent specific, atomic pieces of information or actions, such as labels, categories, metadata, or buttons. Avoid using chips for long or complex pieces of text, as they are designed to be compact and concise."),e("p",null,"\u{1F4A1} Make sure that the labels on your chips are clear and descriptive, as they are the main content of the chips and the primary means of communicating information to users. Avoid using abbreviations or jargon unless they are widely understood by your target audience."),e("p",null,"\u{1F4A1} Choose the appropriate type and variant of chip for the information or action it represents."),e("p",null,"\u{1F4A1} Choose the appropriate size of chip for the context in which it will be used. Small chips are best for dense layouts with many chips, while medium or large chips are better for more spacious layouts or for emphasis."),e("p",null,"\u{1F4A1} Make sure that your chips are accessible to all users, including those using assistive technologies. This means that chips should have clear, descriptive text labels, and that the actions they trigger should be clearly announced to screen reader users. Chips should also be keyboard-navigable, meaning that users should be able to focus on them and trigger their actions using the keyboard."))}b.isMDXComponent=!0;const s=n.bind({});s.storyName="Overview";s.argTypes={...n.argTypes};s.args={prependIcon:"face"};s.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const c=n.bind({});c.storyName="Primary";c.argTypes={...n.argTypes};c.args={};c.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const p=n.bind({});p.storyName="Secondary";p.argTypes={...n.argTypes};p.args={variant:"secondary"};p.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const l=n.bind({});l.storyName="Success";l.argTypes={...n.argTypes};l.args={variant:"success"};l.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const h=n.bind({});h.storyName="Error";h.argTypes={...n.argTypes};h.args={variant:"error"};h.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const u=n.bind({});u.storyName="Warning";u.argTypes={...n.argTypes};u.args={variant:"warning"};u.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const d=n.bind({});d.storyName="Info";d.argTypes={...n.argTypes};d.args={variant:"info"};d.parameters={storySource:{source:`args => ({
  components: {
    Chip
  },

  setup() {
    return {
      args,
      clickChip: action('click:chip'),
      clickClose: action('click:close')
    };
  },

  template: \`
    <Chip v-bind="args" @click:chip="clickChip" @click:close="clickClose"/>
  \`
})`}};const i={title:"Components/Chips",parameters:{viewMode:"docs",layout:"centered"},component:f,argTypes:{...C},includeStories:["overview","primary","secondary","success","error","warning","info"]},N={Overview:"overview",Primary:"primary",Secondary:"secondary",Success:"success",Error:"error",Warning:"warning",Info:"info"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(k,{mdxStoryNameToKey:N,mdxComponentAnnotations:i},e(b,null))};const j=["Default","defaultArgs","overview","primary","secondary","success","error","warning","info"];export{n as Default,j as __namedExportsOrder,i as default,C as defaultArgs,h as error,d as info,s as overview,c as primary,p as secondary,l as success,u as warning};
//# sourceMappingURL=Chip.stories.b7958444.js.map
