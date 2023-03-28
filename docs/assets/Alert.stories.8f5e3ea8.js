import"./jsx-runtime.8b331685.js";import{c as e,A as q,C as r,S as o,a as W,M as B}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{a as C}from"./index.b987ccb9.js";import{d as E,l as f,a as v,b as k,f as p,g as O,u as b,t as S,p as D,i as M,k as U,n as $}from"./vue.esm-bundler.966918be.js";import{_ as T}from"./Icon.306415ba.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./make-decorator.a7c6be5e.js";const P={class:"icon"},X={class:"texts"},j={class:"texts__title"},K={class:"texts__description"},R={key:0,class:"close"},c=E({__name:"Alert",props:{type:{default:"info"},title:{default:""},description:{default:""},size:{default:"medium"},closable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:a}){const n=s,i=f(()=>({alert:!0,[`alert--${n.type}`]:!0,[`alert--${n.size}`]:!0})),I=f(()=>({success:"check_circle",error:"error",warning:"warning",info:"info"})[n.type]),V=f(()=>({small:12,medium:16,large:20})[n.size]),z=()=>{a("close")};return(x,H)=>(v(),k("div",{class:$(b(i))},[p("div",P,[O(T,{name:b(I),size:b(V)},null,8,["name","size"])]),p("div",X,[p("p",j,S(n.title),1),p("p",K,S(n.description),1)]),n.closable?(v(),k("div",R,[x.$slots.close?M(x.$slots,"close",{key:1}):(v(),D(T,{key:0,class:"close__button",name:"close",size:"16",onClick:z}))])):U("",!0)],2))}});c.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"type",description:"Type of the Alert",tags:{type:[{title:"type",description:"'success' | 'error' | 'warning' | 'info'"}],default:[{description:"'info'",title:"default"}],example:[{description:'<Alert type="success" />',title:"example"}]},required:!0,type:{name:"union",elements:[{name:'"success"'},{name:'"error"'},{name:'"warning"'},{name:'"info"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"title",description:"Title of the Alert",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Alert title="Title" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",description:"Description of the Alert",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Alert description="Description" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",description:"Size of the Alert",tags:{type:[{title:"type",description:"'small' | 'medium' | 'large'"}],default:[{description:"'medium'",title:"default"}],example:[{description:'<Alert size="small" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"closable",description:"Allow to close the Alert",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"true",title:"default"}],example:[{description:"<Alert closable />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"}],slots:[{name:"close"}]};function A(){return A=Object.assign?Object.assign.bind():function(s){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},A.apply(this,arguments)}const t=s=>({components:{Alert:c},setup(){return{args:s,click:C("close")}},template:'<Alert v-bind="args" @close="click"/>'}),N=s=>({components:{Alert:c,Icon:T},setup(){return{args:s,onClick:C("close")}},template:`
  <Alert v-bind="args">
    <template #close>
      <Icon name="logout" @click="onClick" />
    </template>
  </Alert>`}),w={type:{control:{type:"select",options:["success","info","warning","error"]},defaultValue:"success",table:{defaultValue:{summary:"success",detail:"success | info | warning | error"}},description:"Type of alert"},title:{control:{type:"text"},defaultValue:"Alert Title"},description:{control:{type:"text"},defaultValue:"A type of alert which appears in a layer above other content, visually similar to a mobile or desktop push notification."},size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"medium",table:{defaultValue:{summary:"medium",detail:"small | medium | large "}},description:"Sizes of alert"},closable:{control:{type:"boolean"},defaultValue:!0},closeText:{control:{type:"text"},defaultValue:"Close"}},L={Default:t,DefaultWithSlots:N,defaultArgs:w},F="wrapper";function _({components:s,...a}){return e(F,A({},L,a,{components:s,mdxType:"MDXLayout"}),e(B,{title:"Components/Alert",component:c,argTypes:{...w},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Alert"),e("p",null,"Alert is a component that displays a message to the user. It is often used to display information, warning, error, or success messages."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#variants"},"Variants"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#customizable-slots"},"Customizable Slots"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h2",null,"Overview ",e("a",{id:"overview"})),e("p",null,"An Alert component is a user interface (UI) element that is used to display important information to the user. It can be used to provide feedback, success or error messages, or to simply draw the user's attention to something. Alert components are typically used in situations where the user needs to be notified of something immediately, or where the information being displayed is important and requires the user's attention."),e("p",null,"For example, an Alert component could be used to display a success message after the user has completed a form or submitted some data, to display an error message if there is a problem with the user's input, to display a warning if the user is about to perform an action that could have unintended consequences, or just to pass important information to the user."),e("p",null,"In general, Alert components should be used sparingly, as overusing them can make your UI cluttered and difficult to read. It's important to use Alert components only when necessary, and to provide clear and concise messages that help the user understand what is happening."),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Overview",argTypes:{...t.argTypes},args:{type:"success"},mdxType:"Story"},t.bind({}))),e("h2",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above. Try it yourself!")),e(W,{story:"Overview",exclude:/^(click|close|on.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"type (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"type")," prop determines the variant of the Alert component. The following values are accepted:"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"},"success"),": Indicates that a successful action has occurred."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"error"),": Indicates that an error has occurred."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"warning"),": Indicates that the user should be cautious about something."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"info"),": Provides additional information to the user.")),e("h3",null,"title (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"title")," prop specifies the title of the Alert component. It should be short and concise, and should clearly convey the purpose of the Alert."),e("h2",null,"description (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"description")," prop provides a longer description of the Alert component. It can be used to provide more detailed information or instructions to the user."),e("h3",null,"size (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"size")," prop determines the size of the Alert component. The following values are accepted:"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"},"small"),": Renders a small Alert component."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"medium"),": Renders a medium-sized Alert component."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"large"),": Renders a large Alert component.")),e("h3",null,"closable (optional)"),e("p",null,"If ",e("strong",{parentName:"p"},"closable")," prop is set to true, the Alert component will include a close button that the user can use to dismiss the Alert."),e("h2",null,"Variants ",e("a",{id:"variants"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Our system has 4 Alert variants: ",e("strong",{parentName:"p"},"Success"),", ",e("strong",{parentName:"p"},"Error"),", ",e("strong",{parentName:"p"},"Information")," and ",e("strong",{parentName:"p"},"Warning"),".")),e("h3",null,"Success"),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Success",argTypes:{...t.argTypes},args:{type:"success",title:"Success",description:"Success Variant! This is a short but descriptive message that indicates a successful action."},mdxType:"Story"},t.bind({}))),e("h3",null,"Error"),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Error",argTypes:{...t.argTypes},args:{type:"error",title:"Error",description:"Error Variant! This is a short but descriptive message that indicates a negative action."},mdxType:"Story"},t.bind({}))),e("h3",null,"Information"),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Information",argTypes:{...t.argTypes},args:{type:"info",title:"Info",description:"Info Variant! This is a short but descriptive message that indicates a neutral informative action."},mdxType:"Story"},t.bind({}))),e("h3",null,"Warning"),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Warning",argTypes:{...t.argTypes},args:{type:"warning",title:"Warning",description:"Warning Variant! This is a short but descriptive message that indicates a negative or dangerous action."},mdxType:"Story"},t.bind({}))),e("h2",null,"Customizable Slots ",e("a",{id:"customizable-slots"})),e("h3",null,e("inlineCode",{parentName:"h3"},"#close")),e("blockquote",null,e("p",{parentName:"blockquote"},"This ",e("inlineCode",{parentName:"p"},"close")," slot can be used for creating your own custom close buttons like this one example below \u{1F447}")),e(r,{withSource:"open",mdxType:"Canvas"},e(o,{name:"Custom Close Button",argTypes:{...t.argTypes},args:{type:"info",title:"With a custom button",description:"This alert box looks very similar to our default examples but it contains a custom close button in it!"},mdxType:"Story"},N.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Use the title prop to provide a clear and concise message to the user."),e("p",null,"\u{1F4A1} Use the description prop to provide more detailed information or instructions, if necessary."),e("p",null,"\u{1F4A1} Choose the appropriate variant (success, error, warning, or info) for the Alert based on the content it is displaying."),e("p",null,"\u{1F4A1} Keep the Alert small and concise. If you need to provide a lot of information, consider using a separate component or modal instead of trying to cram everything into the Alert."),e("p",null,`\u{1F4A1} If the Alert is closable, make sure to provide clear instructions on how to dismiss it (e.g. "Click the 'X' to close this Alert").`))}_.isMDXComponent=!0;const u=t.bind({});u.storyName="Overview";u.argTypes={...t.argTypes};u.args={type:"success"};u.parameters={storySource:{source:`args => ({
  components: {
    Alert
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Alert v-bind="args" @close="click"/>\`
})`}};const m=t.bind({});m.storyName="Success";m.argTypes={...t.argTypes};m.args={type:"success",title:"Success",description:"Success Variant! This is a short but descriptive message that indicates a successful action."};m.parameters={storySource:{source:`args => ({
  components: {
    Alert
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Alert v-bind="args" @close="click"/>\`
})`}};const d=t.bind({});d.storyName="Error";d.argTypes={...t.argTypes};d.args={type:"error",title:"Error",description:"Error Variant! This is a short but descriptive message that indicates a negative action."};d.parameters={storySource:{source:`args => ({
  components: {
    Alert
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Alert v-bind="args" @close="click"/>\`
})`}};const g=t.bind({});g.storyName="Information";g.argTypes={...t.argTypes};g.args={type:"info",title:"Info",description:"Info Variant! This is a short but descriptive message that indicates a neutral informative action."};g.parameters={storySource:{source:`args => ({
  components: {
    Alert
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Alert v-bind="args" @close="click"/>\`
})`}};const h=t.bind({});h.storyName="Warning";h.argTypes={...t.argTypes};h.args={type:"warning",title:"Warning",description:"Warning Variant! This is a short but descriptive message that indicates a negative or dangerous action."};h.parameters={storySource:{source:`args => ({
  components: {
    Alert
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Alert v-bind="args" @close="click"/>\`
})`}};const y=N.bind({});y.storyName="Custom Close Button";y.argTypes={...t.argTypes};y.args={type:"info",title:"With a custom button",description:"This alert box looks very similar to our default examples but it contains a custom close button in it!"};y.parameters={storySource:{source:`args => ({
  components: {
    Alert,
    Icon
  },

  setup() {
    return {
      args,
      onClick: action('close')
    };
  },

  template: \`
  <Alert v-bind="args">
    <template #close>
      <Icon name="logout" @click="onClick" />
    </template>
  </Alert>\`
})`}};const l={title:"Components/Alert",parameters:{viewMode:"docs"},component:c,argTypes:{...w},includeStories:["overview","success","error","information","warning","customCloseButton"]},G={Overview:"overview",Success:"success",Error:"error",Information:"information",Warning:"warning","Custom Close Button":"customCloseButton"};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(q,{mdxStoryNameToKey:G,mdxComponentAnnotations:l},e(_,null))};const re=["Default","DefaultWithSlots","defaultArgs","overview","success","error","information","warning","customCloseButton"];export{t as Default,N as DefaultWithSlots,re as __namedExportsOrder,y as customCloseButton,l as default,w as defaultArgs,d as error,g as information,u as overview,m as success,h as warning};
//# sourceMappingURL=Alert.stories.8f5e3ea8.js.map
