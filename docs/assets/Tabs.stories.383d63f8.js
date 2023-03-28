import"./jsx-runtime.8b331685.js";import{c as e,A as k,C as r,S as b,a as _,M as A}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{d as C,z as D,l as M,a as T,b as x,f as y,n as V,u as I,F as w,e as z,p as j,i as q}from"./vue.esm-bundler.966918be.js";import{_ as B}from"./TabItem.bbeca22f.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./Icon.306415ba.js";const U={class:"tabs-wrapper"},P={class:"tab-content"},c=C({__name:"Tabs",props:{tabs:{default:()=>[]},scrollable:{type:Boolean,default:!1}},setup(t){const n=t,l=D(0),o=M(()=>({tabs:!0,"tabs--scrollable":n.scrollable}));return(N,h)=>(T(),x(w,null,[y("div",U,[y("div",{class:V(I(o))},[(T(!0),x(w,null,z(n.tabs,(i,v)=>(T(),j(B,{id:i.id,key:v,modelValue:l.value,"onUpdate:modelValue":h[0]||(h[0]=S=>l.value=S),active:v===l.value,disabled:i.disabled,icon:i.icon,label:i.label},null,8,["id","modelValue","active","disabled","icon","label"]))),128))],2)]),y("div",P,[q(N.$slots,"tab",{activeTab:l.value})])],64))}});c.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",description:"Tabs of the tabs",tags:{type:[{title:"type",description:"Tab[]"}],default:[{description:"[]",title:"default"}],example:[{description:'<Tabs :tabs="[]" />',title:"example"}]},required:!0,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"scrollable",description:"Scrollable state of the tabs",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Tabs scrollable />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"tab",scoped:!0,bindings:[{name:"activeTab",title:"binding"}]}]};function f(){return f=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},f.apply(this,arguments)}const a=t=>({components:{Tabs:c},setup(){return{args:t}},template:`
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  `}),g={tabs:{control:{type:"object"},defaultValue:[{id:0,label:"Tab 1",icon:"home"},{id:1,label:"Tab 2",icon:"add_circle",disabled:!0},{id:2,label:"Tab 3",icon:"favorite"},{id:3,label:"Tab 4",icon:"face"},{id:4,label:"Tab 5",icon:"settings"}]},scrollable:{control:{type:"boolean"},defaultValue:!1}},X={Default:a,defaultArgs:g},E="wrapper";function O({components:t,...n}){return e(E,f({},X,n,{components:t,mdxType:"MDXLayout"}),e(A,{title:"Components/Tabs",component:c,argTypes:{...g},mdxType:"Meta"}),e("h1",null,"Tabs"),e("p",null,"Tabs are a user interface component that allows users to navigate through different sections of content. They are commonly used to organize and structure content in a clear and intuitive way."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h2",null,"Overview ",e("a",{id:"overview"})),e("p",null,"Tabs are typically composed of a series of tab buttons, each of which corresponds to a different section of content. When a user clicks on one of the tab buttons, the corresponding content is displayed. Tabs can be designed in a variety of styles and configurations, but they all serve the same basic purpose: to help users navigate through different sections of content."),e(r,{mdxType:"Canvas"},e(b,{name:"Overview",argTypes:{...a.argTypes},args:{},mdxType:"Story"},a.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(_,{story:"Overview",exclude:/^(click|tab|on.*)/,mdxType:"ArgsTable"}),e("h2",null,"Usage ",e("a",{id:"usage"})),e("p",null,"To implement a Tabs component, you will need to define the tab buttons and their corresponding content sections. You can choose to include a scrollable prop which allows the user to scroll through the tabs if there are too many to fit on the screen. Additionally, you can choose to display the tabs with icon and text as a default, with icon only or text only."),e("h2",null,"Stories ",e("a",{id:"stories"})),e("h3",null,"Default"),e(r,{mdxType:"Canvas"},e(b,{name:"Default",argTypes:{...a.argTypes},args:{},mdxType:"Story"},a.bind({}))),e("h3",null,"Icon Only"),e(r,{mdxType:"Canvas"},e(b,{name:"Icon Only",argTypes:{...a.argTypes},args:{tabs:[{id:0,label:"Tab 1",icon:"home"},{id:1,label:"Tab 2",icon:"add_circle",disabled:!0},{id:2,label:"Tab 3",icon:"favorite"},{id:3,label:"Tab 4",icon:"face"},{id:4,label:"Tab 5",icon:"settings"},{id:5,label:"Tab 6",icon:"search"},{id:6,label:"Tab 7",icon:"done"},{id:7,label:"Tab 8",icon:"visibility"},{id:8,label:"Tab 9",icon:"lock"},{id:9,label:"Tab 10",icon:"language"}]},mdxType:"Story"},a.bind({}))),e("h3",null,"Text Only"),e(r,{mdxType:"Canvas"},e(b,{name:"Text Only",argTypes:{...a.argTypes},args:{tabs:[{id:0,label:"Tab 1",icon:"home"},{id:1,label:"Tab 2",icon:"add_circle",disabled:!0},{id:2,label:"Tab 3",icon:"favorite"},{id:3,label:"Tab 4",icon:"face"},{id:4,label:"Tab 5",icon:"settings"},{id:5,label:"Tab 6",icon:"search"},{id:6,label:"Tab 7",icon:"done"},{id:7,label:"Tab 8",icon:"visibility"},{id:8,label:"Tab 9",icon:"lock"},{id:9,label:"Tab 10",icon:"language"}]},mdxType:"Story"},a.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Too many tabs can make the interface confusing and overwhelming for users. Try to keep the number of tabs to a maximum of 5-7, and use sub-navigation or dropdown menus to organize additional content."),e("p",null,"\u{1F4A1} The labels on the tab buttons should be short, descriptive, and easy to understand. Avoid using technical jargon or complex language."),e("p",null,"\u{1F4A1} Icons can be a great way to add visual interest and make it easier for users to quickly identify different tabs. However, make sure that the icons are meaningful and add context to the tab's label."),e("p",null,"\u{1F4A1} All tabs should have a consistent design to make it clear that they are related to each other. This includes the color, shape, size, and font of the tabs."),e("p",null,"\u{1F4A1} Use horizontal tabs for primary navigation and vertical tabs for secondary navigation or when space is limited. Use bottom tabs for mobile navigation."),e("p",null,"\u{1F4A1} Make it clear which tab is currently selected by using a different color, bold text, or an underline."),e("p",null,"\u{1F4A1} Make sure that tabs are accessible to keyboard users and screen readers. This means providing clear labels, proper focus management, and ARIA attributes."))}O.isMDXComponent=!0;const d=a.bind({});d.storyName="Overview";d.argTypes={...a.argTypes};d.args={};d.parameters={storySource:{source:`args => ({
  components: {
    Tabs
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  \`
})`}};const p=a.bind({});p.storyName="Default";p.argTypes={...a.argTypes};p.args={};p.parameters={storySource:{source:`args => ({
  components: {
    Tabs
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  \`
})`}};const u=a.bind({});u.storyName="Icon Only";u.argTypes={...a.argTypes};u.args={tabs:[{id:0,label:"Tab 1",icon:"home"},{id:1,label:"Tab 2",icon:"add_circle",disabled:!0},{id:2,label:"Tab 3",icon:"favorite"},{id:3,label:"Tab 4",icon:"face"},{id:4,label:"Tab 5",icon:"settings"},{id:5,label:"Tab 6",icon:"search"},{id:6,label:"Tab 7",icon:"done"},{id:7,label:"Tab 8",icon:"visibility"},{id:8,label:"Tab 9",icon:"lock"},{id:9,label:"Tab 10",icon:"language"}]};u.parameters={storySource:{source:`args => ({
  components: {
    Tabs
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  \`
})`}};const m=a.bind({});m.storyName="Text Only";m.argTypes={...a.argTypes};m.args={tabs:[{id:0,label:"Tab 1",icon:"home"},{id:1,label:"Tab 2",icon:"add_circle",disabled:!0},{id:2,label:"Tab 3",icon:"favorite"},{id:3,label:"Tab 4",icon:"face"},{id:4,label:"Tab 5",icon:"settings"},{id:5,label:"Tab 6",icon:"search"},{id:6,label:"Tab 7",icon:"done"},{id:7,label:"Tab 8",icon:"visibility"},{id:8,label:"Tab 9",icon:"lock"},{id:9,label:"Tab 10",icon:"language"}]};m.parameters={storySource:{source:`args => ({
  components: {
    Tabs
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Tabs v-bind="args" >
      <template #tab={activeTab}>
        <h1>Tab {{activeTab + 1}}</h1>
        <p>Active tab {{activeTab}}</p>
      </template>
    </Tabs>
  \`
})`}};const s={title:"Components/Tabs",component:c,argTypes:{...g},includeStories:["overview","defaultStory","iconOnly","textOnly"]},L={Overview:"overview",Default:"defaultStory","Icon Only":"iconOnly","Text Only":"textOnly"};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(k,{mdxStoryNameToKey:L,mdxComponentAnnotations:s},e(O,null))};const J=["Default","defaultArgs","overview","defaultStory","iconOnly","textOnly"];export{a as Default,J as __namedExportsOrder,s as default,g as defaultArgs,p as defaultStory,u as iconOnly,d as overview,m as textOnly};
//# sourceMappingURL=Tabs.stories.383d63f8.js.map
