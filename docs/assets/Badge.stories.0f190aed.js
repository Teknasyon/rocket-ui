import"./jsx-runtime.8b331685.js";import{c as e,A as T,C as r,S as l,a as w,M as N}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{a as x}from"./index.b987ccb9.js";import{d as k,l as C,a as S,b as I,f as _,t as V,n as O,u as M,i as $}from"./vue.esm-bundler.966918be.js";import{_ as q}from"./Icon.306415ba.js";import{_ as A}from"./Button.ba44a7c6.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./make-decorator.a7c6be5e.js";const z={class:"badge-wrapper group"},m=k({__name:"Badge",props:{variant:{default:"primary"},placement:{default:"right"},overlap:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},content:{default:""},outside:{type:Boolean,default:!1}},emits:["click"],setup(n){const a=n,s=C(()=>({badge:!0,badge__content:a.content,[`badge--overlap-${a.placement}`]:a.overlap,[`badge--${a.placement}`]:a.placement,[`badge--outside-${a.placement}`]:a.outside,"badge--hover":a.hover,"badge--no-content":!a.content,[`badge--${a.variant}`]:a.variant}));return(o,v)=>(S(),I("div",z,[_("span",{class:O(M(s)),onClick:v[0]||(v[0]=P=>o.$emit("click"))},V(a.content),3),$(o.$slots,"default")]))}});m.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",description:"Variant of the Badge",tags:{type:[{title:"type",description:"'primary' | 'success' | 'warning' | 'error' | 'neutral'"}],default:[{description:"'primary'",title:"default"}],example:[{description:'<Badge variant="primary" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"placement",description:"Placement of the Badge",tags:{type:[{title:"type",description:"'right' | 'bottom' | 'left'"}],default:[{description:"'right'",title:"default"}],example:[{description:'<Badge placement="right" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"right"'},{name:'"bottom"'},{name:'"left"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"overlap",description:"Overlap the Badge",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Badge overlap />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hover",description:"Show the Badge on hover",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Badge hover />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"content",description:"Content of the Badge",tags:{type:[{title:"type",description:"string | number"}],default:[{description:"''",title:"default"}],example:[{description:'<Badge content="1" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"outside",description:"Show the Badge outside",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Badge outside />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}]};function y(){return y=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n},y.apply(this,arguments)}const t=n=>({components:{Badge:m,Icon:q},setup(){return{args:n,click:x("click")}},template:`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    `}),p=n=>({components:{Badge:m,Button:A},setup(){return{args:n}},template:`
    <Badge v-bind="args">
      <template v-slot:default>
        <Button icon="add" variant="primary">Hello World</Button>
      </template>
    </Badge>
    `}),b={variant:{control:{type:"select",options:["primary","success","error","warning","neutral"]}},placement:{control:{type:"select",options:["right","bottom","left"]},defaultValue:"right"},overlap:{control:{type:"boolean"},defaultValue:!1},hover:{control:{type:"boolean"},defaultValue:!1},content:{control:{type:"text"},defaultValue:"3"},outside:{control:{type:"boolean"},defaultValue:!1}},D={Default:t,ButtonTemplate:p,defaultArgs:b},H="wrapper";function B({components:n,...a}){return e(H,y({},D,a,{components:n,mdxType:"MDXLayout"}),e(N,{title:"Components/Badge",component:m,argTypes:{...b},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Badge"),e("p",null,"A badge is a small, customizable component that is often used to display a notification, count, or status."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#variants"},"Variants"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h3",null,"Overview ",e("a",{id:"overview"})),e("p",null,"A badge is a small visual element that is used to communicate a value or a status. It is typically used to show the number of items in a list, the status of a process, or a notification. Badges are often used in conjunction with buttons, icons, or other elements to provide additional information to the user."),e("p",null,"Badges should be used when it is important to quickly and clearly communicate a value or a status to the user. They are often used to show the number of unread items in a list, the status of a process, or to indicate that an element has been updated."),e("p",null,"Badges can be used in a variety of different contexts, but they are most commonly used in web and mobile applications. Some examples of where badges might be used include:"),e("ul",null,e("li",{parentName:"ul"},"In a messaging app to indicate the number of unread messages"),e("li",{parentName:"ul"},"In a social media app to show the number of likes or comments on a post"),e("li",{parentName:"ul"},"In a task management app to indicate the number of tasks that are overdue or incomplete")),e("p",null,"Our badge component has a ",e("inlineCode",{parentName:"p"},"default")," slot that can be used to display any content."),e(r,{mdxType:"Canvas"},e(l,{name:"Overview",argTypes:{...t.argTypes},args:{placement:"right"},mdxType:"Story"},t.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(w,{story:"Overview",exclude:/^(click|default|on.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"placement (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"placement")," prop is used to specify the position of the badge relative to its parent element. It can be set to ",e("em",{parentName:"p"},"right"),", ",e("em",{parentName:"p"},"bottom")," or ",e("em",{parentName:"p"},"left"),"."),e("h3",null,"variant (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"variant")," prop is used to specify the color and styling of the badge. In the example above, it is set to primary, which will apply the default primary color and style to the badge. It can be set to ",e("em",{parentName:"p"},"primary"),", ",e("em",{parentName:"p"},"success"),", ",e("em",{parentName:"p"},"error"),", ",e("em",{parentName:"p"},"warning"),", or ",e("em",{parentName:"p"},"neutral"),"."),e("h3",null,"overlap (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"overlap")," prop is used to specify the overlapping status of the badge. In the example above, it is set to ",e("em",{parentName:"p"},"false"),", which will apply the default position of the badge."),e("h3",null,"hover (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"hover")," prop is a boolean value that specifies whether the badge should be visible only on hover. If it is set to true, the badge will only be visible when the user hovers over its parent element."),e("h3",null,"content (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"content")," prop is used to specify the text or number that should be displayed inside the badge. In this example, it is set to 3."),e("h3",null,"outside (optional)"),e("p",null,"Finally, the ",e("strong",{parentName:"p"},"outside")," prop is a boolean value that specifies whether the badge should be displayed outside of its parent element, rather than inside it. In this example, it is set to false, so the badge will be displayed inside its parent element."),e("h2",null,"Variants ",e("a",{id:"variants"})),e("h3",null,"Right"),e(r,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Right",argTypes:{...t.argTypes},args:{placement:"right"},mdxType:"Story"},t.bind({}))),e("h3",null,"With Content"),e(r,{withSource:"open",mdxType:"Canvas"},e(l,{name:"With Content",argTypes:{...p.argTypes},args:{content:"32"},mdxType:"Story"},p.bind({}))),e("h3",null,"Hover"),e(r,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Hover",argTypes:{...t.argTypes},args:{hover:!0},mdxType:"Story"},t.bind({}))),e("h3",null,"Bottom"),e(r,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Bottom",argTypes:{...t.argTypes},args:{placement:"bottom"},mdxType:"Story"},t.bind({}))),e("h3",null,"Left"),e(r,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Left",argTypes:{...t.argTypes},args:{placement:"left"},mdxType:"Story"},t.bind({}))),e("h2",null,"Tips"),e("p",null,"\u{1F4A1} Keep the badge small and simple. The badge should be small enough to not distract from the rest of the interface, but large enough to be easily readable."),e("p",null,"\u{1F4A1} Use a clear and concise label. The label on the badge should be short and to the point, and should accurately convey the information that it is intended to communicate."),e("p",null,"\u{1F4A1} Use color to convey meaning. Different colors can be used to indicate different types of information, such as red for error messages and green for success messages."),e("p",null,"\u{1F4A1} Position the badge carefully. The badge should be positioned in a way that is easily visible and does not obstruct other elements in the interface."),e("p",null,"\u{1F4A1} Use badges sparingly. Overuse of badges can make the interface cluttered and difficult to read, so use them only when necessary to communicate important information to the user."))}B.isMDXComponent=!0;const d=t.bind({});d.storyName="Overview";d.argTypes={...t.argTypes};d.args={placement:"right"};d.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Icon
  },

  setup() {
    return {
      args,
      click: action('click')
    };
  },

  template: \`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    \`
})`}};const c=t.bind({});c.storyName="Right";c.argTypes={...t.argTypes};c.args={placement:"right"};c.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Icon
  },

  setup() {
    return {
      args,
      click: action('click')
    };
  },

  template: \`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    \`
})`}};const u=p.bind({});u.storyName="With Content";u.argTypes={...p.argTypes};u.args={content:"32"};u.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Button
  },

  setup() {
    return {
      args
    };
  },

  template: \`
    <Badge v-bind="args">
      <template v-slot:default>
        <Button icon="add" variant="primary">Hello World</Button>
      </template>
    </Badge>
    \`
})`}};const g=t.bind({});g.storyName="Hover";g.argTypes={...t.argTypes};g.args={hover:!0};g.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Icon
  },

  setup() {
    return {
      args,
      click: action('click')
    };
  },

  template: \`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    \`
})`}};const h=t.bind({});h.storyName="Bottom";h.argTypes={...t.argTypes};h.args={placement:"bottom"};h.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Icon
  },

  setup() {
    return {
      args,
      click: action('click')
    };
  },

  template: \`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    \`
})`}};const f=t.bind({});f.storyName="Left";f.argTypes={...t.argTypes};f.args={placement:"left"};f.parameters={storySource:{source:`args => ({
  components: {
    Badge,
    Icon
  },

  setup() {
    return {
      args,
      click: action('click')
    };
  },

  template: \`
    <Badge v-bind="args" @click="click">
      <template v-slot:default>
        <Icon name="email" size="24" />
      </template>
    </Badge>
    \`
})`}};const i={title:"Components/Badge",parameters:{viewMode:"docs"},component:m,argTypes:{...b},includeStories:["overview","right","withContent","hover","bottom","left"]},L={Overview:"overview",Right:"right","With Content":"withContent",Hover:"hover",Bottom:"bottom",Left:"left"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(T,{mdxStoryNameToKey:L,mdxComponentAnnotations:i},e(B,null))};const Q=["Default","ButtonTemplate","defaultArgs","overview","right","withContent","hover","bottom","left"];export{p as ButtonTemplate,t as Default,Q as __namedExportsOrder,h as bottom,i as default,b as defaultArgs,g as hover,f as left,d as overview,c as right,u as withContent};
//# sourceMappingURL=Badge.stories.0f190aed.js.map
