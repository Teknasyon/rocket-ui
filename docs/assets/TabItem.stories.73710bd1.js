import"./jsx-runtime.8b331685.js";import{c as e,A as T,C as r,S as s,a as g,M as v}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{a as f}from"./index.b987ccb9.js";import{_ as y}from"./TabItem.bbeca22f.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./make-decorator.a7c6be5e.js";import"./vue.esm-bundler.966918be.js";import"./Icon.306415ba.js";function d(){return d=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var u=arguments[n];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(a[m]=u[m])}return a},d.apply(this,arguments)}const t=a=>({components:{TabItem:y},setup(){return{args:a,click:f("select")}},template:`
    <TabItem v-bind="args" @select="click"/>
  `}),h={id:{control:{type:"text"},defaultValue:"tab-1"},label:{control:{type:"text"},defaultValue:"Tab 1"},icon:{control:{type:"text"},defaultValue:"home"},disabled:{control:{type:"boolean"},defaultValue:!1},variant:{control:{type:"select",options:["default","icon-only","text-only"]},defaultValue:"default"},active:{control:{type:"boolean"},defaultValue:!1}},w={Default:t,defaultArgs:h},x="wrapper";function b({components:a,...n}){return e(x,d({},w,n,{components:a,mdxType:"MDXLayout"}),e(v,{title:"Components/TabItem",component:y,argTypes:{...h},parameters:{viewMode:"docs",layout:"centered"},mdxType:"Meta"}),e("h1",null,"TabItem"),e("p",null,"The TabItem component is a child component of the Tabs component. It is used to create a single tab within a set of tabs."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h2",null,"Overview ",e("a",{id:"overview"})),e("p",null,"The TabItem component is responsible for displaying the content associated with a specific tab. It accepts a variety of props, including variant, id, label, disabled, and active, which can be used to customize the appearance and behavior of the tab."),e("p",null,"\u{1F4A1} To use the TabItem component, it is first necessary to wrap it within a Tabs component. The TabItem component should then be passed a unique id prop, which is used to identify the tab and its associated content."),e(r,{withSource:"open",mdxType:"Canvas"},e(s,{name:"Overview",argTypes:{...t.argTypes},args:{variant:"default"},mdxType:"Story"},t.bind({}))),e("h3",null,"Playground"),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(g,{story:"Overview",exclude:/^(select|icon|on.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"variant (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"variant")," props allows to change the style of the tab item."),e("h3",null,"id (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"id")," props is a unique identifier for the tab."),e("h3",null,"label (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"label")," props is the text to be displayed on the tab."),e("h3",null,"disabled (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"disabled")," props indicates whether the tab should be disabled or not."),e("h3",null,"active (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"active")," props indicated whether the tab should be set as active or not."),e("h2",null,"Stories ",e("a",{id:"stories"})),e("h3",null,"Default"),e(r,{withSource:"open",mdxType:"Canvas"},e(s,{name:"Default",argTypes:{...t.argTypes},args:{variant:"default"},mdxType:"Story"},t.bind({}))),e("h3",null,"Icon Only"),e(r,{withSource:"open",mdxType:"Canvas"},e(s,{name:"Icon Only",argTypes:{...t.argTypes},args:{variant:"icon-only"},mdxType:"Story"},t.bind({}))),e("h3",null,"Text Only"),e(r,{withSource:"open",mdxType:"Canvas"},e(s,{name:"Text Only",argTypes:{...t.argTypes},args:{variant:"text-only"},mdxType:"Story"},t.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Make sure to provide a unique id prop for each TabItem, as this is used to identify the tab and its associated content."),e("p",null,"\u{1F4A1} Use the label prop to clearly label each tab, making it easy for users to understand the purpose of each tab."),e("p",null,"\u{1F4A1} Use the active prop to set the default active tab when the component is first rendered."),e("p",null,"\u{1F4A1} Use the disabled prop to disable tabs that are not currently in use or that the user should not have access to."),e("p",null,"\u{1F4A1} The variant prop can be used to change the visual style of the tab."),e("p",null,"\u{1F4A1} Use the onClick event to handle when the user clicks on a tab, if you want to perform some action in this event."),e("p",null,"\u{1F4A1} Using the TabItem component within Tabs component will give you a better accessibility, by providing the necessary ARIA roles and attributes."))}b.isMDXComponent=!0;const l=t.bind({});l.storyName="Overview";l.argTypes={...t.argTypes};l.args={variant:"default"};l.parameters={storySource:{source:`args => ({
  components: {
    TabItem
  },

  setup() {
    return {
      args,
      click: action('select')
    };
  },

  template: \`
    <TabItem v-bind="args" @select="click"/>
  \`
})`}};const i=t.bind({});i.storyName="Default";i.argTypes={...t.argTypes};i.args={variant:"default"};i.parameters={storySource:{source:`args => ({
  components: {
    TabItem
  },

  setup() {
    return {
      args,
      click: action('select')
    };
  },

  template: \`
    <TabItem v-bind="args" @select="click"/>
  \`
})`}};const p=t.bind({});p.storyName="Icon Only";p.argTypes={...t.argTypes};p.args={variant:"icon-only"};p.parameters={storySource:{source:`args => ({
  components: {
    TabItem
  },

  setup() {
    return {
      args,
      click: action('select')
    };
  },

  template: \`
    <TabItem v-bind="args" @select="click"/>
  \`
})`}};const c=t.bind({});c.storyName="Text Only";c.argTypes={...t.argTypes};c.args={variant:"text-only"};c.parameters={storySource:{source:`args => ({
  components: {
    TabItem
  },

  setup() {
    return {
      args,
      click: action('select')
    };
  },

  template: \`
    <TabItem v-bind="args" @select="click"/>
  \`
})`}};const o={title:"Components/TabItem",parameters:{viewMode:"docs",layout:"centered"},component:y,argTypes:{...h},includeStories:["overview","defaultStory","iconOnly","textOnly"]},N={Overview:"overview",Default:"defaultStory","Icon Only":"iconOnly","Text Only":"textOnly"};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:()=>e(T,{mdxStoryNameToKey:N,mdxComponentAnnotations:o},e(b,null))};const V=["Default","defaultArgs","overview","defaultStory","iconOnly","textOnly"];export{t as Default,V as __namedExportsOrder,o as default,h as defaultArgs,i as defaultStory,p as iconOnly,l as overview,c as textOnly};
//# sourceMappingURL=TabItem.stories.73710bd1.js.map
