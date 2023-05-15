import"./jsx-runtime.9d43cec3.js";import{c as e,A as V,C as a,S as i,a as L,M}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{a as A}from"./index.0a53e796.js";import{d as O,z as q,o as D,y as $,a as c,b as v,f as z,t as C,i as B,p as N,v as j,j as P,k as u,n as X,w as E}from"./vue.esm-bundler.966918be.js";import{_ as F}from"./Button.ba44a7c6.js";import{_ as K}from"./Icon.306415ba.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./make-decorator.41c4cbef.js";const U={class:"snackbar__text"},G={key:0,class:"snackbar__action"},H={key:1,class:"snackbar__close"},h=O({__name:"Snackbar",props:{text:{default:""},actionText:{default:""},showAction:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1},left:{type:Boolean,default:!1},show:{type:Boolean,default:!1},timeout:{default:0}},emits:["click:action","click:close"],setup(s,{emit:o}){const n=s,l=q(!1),_=()=>{o("click:action")},I=()=>{l.value=!1,o("click:close")};return D(()=>{n.timeout&&setTimeout(()=>{l.value=!1,o("click:close")},n.timeout)}),$(()=>n.show,r=>{l.value=r},{immediate:!0}),(r,Y)=>(c(),v("div",{class:X({snackbar:!0,"snackbar--closed":!l.value,[n.left?"snackbar--left":"snackbar--right"]:!0})},[z("div",U,C(n.text),1),n.showAction?(c(),v("div",G,[B(r.$slots,"action"),r.$slots.action?u("",!0):(c(),N(F,{key:0,size:"small",variant:"ghost",onClick:_},{default:j(()=>[P(C(n.actionText),1)]),_:1}))])):u("",!0),n.showClose?(c(),v("div",H,[B(r.$slots,"close"),r.$slots.close?u("",!0):(c(),N(K,{key:0,name:"close",size:"14",onClick:E(I,["stop"])},null,8,["onClick"]))])):u("",!0)],2))}});h.__docgenInfo={exportName:"default",displayName:"Snackbar",description:"",tags:{},props:[{name:"text",description:"Text of the snackbar",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Snackbar text="Snackbar" />',title:"example"}]},required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actionText",description:"Action text of the snackbar",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Snackbar actionText="Action" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"showAction",description:"Show action of the snackbar",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Snackbar showAction />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showClose",description:"Show close of the snackbar",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Snackbar showClose />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"left",description:"Left of the snackbar",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Snackbar left />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:"Show of the snackbar",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Snackbar show />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"timeout",description:"Timeout of the snackbar",tags:{type:[{title:"type",description:"number"}],default:[{description:"0",title:"default"}],example:[{description:'<Snackbar timeout="1000" />',title:"example"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"click:action"},{name:"click:close"}],slots:[{name:"action"},{name:"close"}]};function x(){return x=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(s[l]=n[l])}return s},x.apply(this,arguments)}const t=s=>({components:{Snackbar:h},setup(){return{args:s,onAction:A("click:action"),onClose:A("click:close")}},template:`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  `}),S={text:{control:{type:"text"},defaultValue:"Single-line snackbar"},actionText:{control:{type:"text"},defaultValue:""},showAction:{control:{type:"boolean"},defaultValue:!1},showClose:{control:{type:"boolean"},defaultValue:!1},left:{control:{type:"boolean"},defaultValue:!1},show:{control:{type:"boolean"},defaultValue:!0},timeout:{control:{type:"number"},defaultValue:0,table:{defaultValue:{summary:"0"}},description:"If 0, the snackbar will not dismiss automatically."}},J={Default:t,defaultArgs:S},Q="wrapper";function W({components:s,...o}){return e(Q,x({},J,o,{components:s,mdxType:"MDXLayout"}),e(M,{title:"Components/Snackbar",component:h,argTypes:{...S},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Snackbar"),e("p",null,"A Snackbar is a brief message that appears at the bottom of the screen to provide feedback to the user."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h1",null,"Overview ",e("a",{id:"overview"})),e("p",null,"The Snackbar component is a short, temporary notification that appears at the bottom of the screen. It is typically used to provide feedback to the user after an action has been performed, such as a successful submission of a form or completion of a task"),e("p",null,"It is important to use the Snackbar component sparingly, as it can be disruptive if used excessively. It is generally recommended to use it only for important or time-sensitive notifications."),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Overview",argTypes:{...t.argTypes},args:{},mdxType:"Story"},t.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(L,{story:"Overview",exclude:/^(click.*|action|content|close|on.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage ",e("a",{id:"usage"})),e("h3",null,"text (required)"),e("p",null,"The text to be displayed in the Snackbar. This prop is required and should be a string."),e("h3",null,"showAction (optional)"),e("p",null,"Whether to display an action button in the Snackbar. If set to true, an action button will be displayed in the Snackbar. If set to false, the action button will not be displayed."),e("h3",null,"showClose (optional)"),e("p",null,"Whether to display a close button in the Snackbar. If set to true, a close button will be displayed in the Snackbar that allows the user to manually close it. If set to false, the close button will not be displayed."),e("h3",null,"left (optional)"),e("p",null,"Whether to align the Snackbar to the left or right side of the screen. If set to true, the Snackbar will be aligned to the left side of the screen. If set to false, the Snackbar will be aligned to the right side."),e("h3",null,"show (optional)"),e("p",null,"Whether to show or hide the Snackbar. If set to true, the Snackbar will be displayed. If set to false, the Snackbar will be hidden."),e("h3",null,"timeout (optional)"),e("p",null,"The amount of time in milliseconds that the Snackbar will be displayed before it is automatically hidden. This prop should be a number representing the number of milliseconds that the Snackbar will be displayed before it is automatically hidden."),e("h2",null,"Stories ",e("a",{id:"stories"})),e("h3",null,"Default"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Default",argTypes:{...t.argTypes},args:{},mdxType:"Story"},t.bind({}))),e("h3",null,"With Action"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"With Action",argTypes:{...t.argTypes},args:{actionText:"Action",showAction:!0,text:"Single-line snackbar with action"},mdxType:"Story"},t.bind({}))),e("h3",null,"With Action and Close Button"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"With Action and Close Button",argTypes:{...t.argTypes},args:{actionText:"Action",showAction:!0,showClose:!0,text:"Snackbar with action and close"},mdxType:"Story"},t.bind({}))),e("h3",null,"With Close Button"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"With Close Button",argTypes:{...t.argTypes},args:{showClose:!0,text:"Single-line snackbar with close"},mdxType:"Story"},t.bind({}))),e("h3",null,"Long Text"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Long Text",argTypes:{...t.argTypes},args:{text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."},mdxType:"Story"},t.bind({}))),e("h3",null,"Long Text with Action"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Long Text with Action",argTypes:{...t.argTypes},args:{actionText:"Action",showAction:!0,text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."},mdxType:"Story"},t.bind({}))),e("h3",null,"Long Text with Action and Close Button"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Long Text with Action and Close Button",argTypes:{...t.argTypes},args:{actionText:"Action",showAction:!0,showClose:!0,text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."},mdxType:"Story"},t.bind({}))),e("h3",null,"With Timeout"),e(a,{withSource:"open",mdxType:"Canvas"},e(i,{name:"With Timeout",argTypes:{...t.argTypes},args:{timeout:5e3,text:"Snackbar with timeout"},mdxType:"Story"},t.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} The Snackbar is a brief, temporary notification that should not be used excessively. Overusing the Snackbar can be disruptive and may cause users to ignore it."),e("p",null,"\u{1F4A1} The Snackbar is best used for notifications that are important or time-sensitive. For example, if a form submission is successful or a task has been completed, the Snackbar can be used to provide feedback to the user."),e("p",null,"\u{1F4A1} The Snackbar component has several props that can be used to customize its appearance and behavior. For example, you can use the left prop to align the Snackbar to the left or right side of the screen, and the timeout prop to control the amount of time it is displayed."),e("p",null,"\u{1F4A1} The Snackbar should be tested on different screen sizes to ensure that it is displayed correctly and does not overlap with other content."),e("p",null,"\u{1F4A1} The Snackbar is not the best choice for displaying critical errors or warnings. For these types of notifications, it is generally better to use a modal or an alert."))}W.isMDXComponent=!0;const d=t.bind({});d.storyName="Overview";d.argTypes={...t.argTypes};d.args={};d.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const m=t.bind({});m.storyName="Default";m.argTypes={...t.argTypes};m.args={};m.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const g=t.bind({});g.storyName="With Action";g.argTypes={...t.argTypes};g.args={actionText:"Action",showAction:!0,text:"Single-line snackbar with action"};g.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const b=t.bind({});b.storyName="With Action and Close Button";b.argTypes={...t.argTypes};b.args={actionText:"Action",showAction:!0,showClose:!0,text:"Snackbar with action and close"};b.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const y=t.bind({});y.storyName="With Close Button";y.argTypes={...t.argTypes};y.args={showClose:!0,text:"Single-line snackbar with close"};y.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const f=t.bind({});f.storyName="Long Text";f.argTypes={...t.argTypes};f.args={text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."};f.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const k=t.bind({});k.storyName="Long Text with Action";k.argTypes={...t.argTypes};k.args={actionText:"Action",showAction:!0,text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."};k.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const w=t.bind({});w.storyName="Long Text with Action and Close Button";w.argTypes={...t.argTypes};w.args={actionText:"Action",showAction:!0,showClose:!0,text:"This is a very long snackbar message that will not fit on one line. It will wrap to multiple lines and the snackbar will grow in height."};w.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const T=t.bind({});T.storyName="With Timeout";T.argTypes={...t.argTypes};T.args={timeout:5e3,text:"Snackbar with timeout"};T.parameters={storySource:{source:`args => ({
  components: {
    Snackbar
  },

  setup() {
    return {
      args,
      onAction: action('click:action'),
      onClose: action('click:close')
    };
  },

  template: \`
    <div style="position:relative; min-height: 30vh; width: 100%;">
      <Snackbar 
        v-bind="args" 
        @click:action="onAction" 
        @click:close="onClose" 
      />
    </div>
  \`
})`}};const p={title:"Components/Snackbar",parameters:{viewMode:"docs"},component:h,argTypes:{...S},includeStories:["overview","defaultStory","withAction","withActionAndCloseButton","withCloseButton","longText","longTextWithAction","longTextWithActionAndCloseButton","withTimeout"]},R={Overview:"overview",Default:"defaultStory","With Action":"withAction","With Action and Close Button":"withActionAndCloseButton","With Close Button":"withCloseButton","Long Text":"longText","Long Text with Action":"longTextWithAction","Long Text with Action and Close Button":"longTextWithActionAndCloseButton","With Timeout":"withTimeout"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(V,{mdxStoryNameToKey:R,mdxComponentAnnotations:p},e(W,null))};const ce=["Default","defaultArgs","overview","defaultStory","withAction","withActionAndCloseButton","withCloseButton","longText","longTextWithAction","longTextWithActionAndCloseButton","withTimeout"];export{t as Default,ce as __namedExportsOrder,p as default,S as defaultArgs,m as defaultStory,f as longText,k as longTextWithAction,w as longTextWithActionAndCloseButton,d as overview,g as withAction,b as withActionAndCloseButton,y as withCloseButton,T as withTimeout};
//# sourceMappingURL=Snackbar.stories.38ad0042.js.map
