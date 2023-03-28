import"./jsx-runtime.8b331685.js";import{c as e,A as M,C as r,S as i,a as N,M as _}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{a as z}from"./index.b987ccb9.js";import{d as C,r as A,l as L,y as E,a as w,b as y,f as o,n as v,u as U,t as b}from"./vue.esm-bundler.966918be.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./make-decorator.a7c6be5e.js";const I={class:"switch-container"},O=["id","checked"],q=o("span",{class:"slider round"},null,-1),H=["id","for"],W={key:0,class:"switch-texts__error"},D={key:1,class:"switch-texts__hint"},u=C({__name:"Switch",props:{id:{default:"switch"},modelValue:{default:!1},disabled:{default:!1},label:{default:""},hint:{default:""},errorMsg:{default:""},size:{default:"medium"}},emits:["update:modelValue"],setup(n,{emit:l}){const a=n,s=A({checked:!1}),V=L(()=>({switch:!0,"switch--disabled":a.disabled,[`switch--${a.size}`]:a.size,"switch--error":a.errorMsg})),k=d=>{a.disabled||(s.checked=d.target.checked,l("update:modelValue",s.checked))};return E(()=>a.modelValue,d=>{s.checked=d},{immediate:!0}),(d,B)=>(w(),y("div",I,[o("div",{class:v(U(V))},[o("input",{id:a.id,checked:s.checked,class:"switch__input",type:"checkbox",onChange:k},null,40,O),q],2),o("div",{class:v({"switch-texts":!0,[`switch-texts--${a.size}`]:!0})},[o("label",{id:a.id,class:"switch-texts__label",for:a.id},b(a.label),9,H),a.errorMsg?(w(),y("p",W,b(a.errorMsg),1)):(w(),y("p",D,b(a.hint),1))],2)]))}});u.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"id",description:"id of the checkbox",tags:{type:[{title:"type",description:"HTMLAttributes['id']"}],default:[{description:"''",title:"default"}],example:[{description:'<Checkbox id="checkbox" />',title:"example"}],link:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",title:"link"}]},required:!0,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'switch'"}},{name:"modelValue",description:"Input checked state",tags:{type:[{title:"type",description:"InputHTMLAttributes['checked']"}],default:[{description:"false",title:"default"}],example:[{description:'<Checkbox modelValue="true" />',title:"example"}],link:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#checked",title:"link"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Input disabled state",tags:{type:[{title:"type",description:"InputHTMLAttributes['disabled']"}],default:[{description:"false",title:"default"}],example:[{description:'<Checkbox disabled="true" />',title:"example"}],link:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#disabled",title:"link"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}},{name:"label",description:"label of the checkbox",tags:{type:[{title:"type",description:"LabelHTMLAttributes['label']"}],default:[{description:"''",title:"default"}],example:[{description:'<Checkbox label="Checkbox" />',title:"example"}],link:[{description:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",title:"link"}]},required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"''"}},{name:"hint",description:"Hint text",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Checkbox hint="This is a hint" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMsg",description:"Error message",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Checkbox errorMsg="This is an error" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",description:"Size of the checkbox",tags:{type:[{title:"type",description:"'small' | 'medium' | 'large'"}],default:[{description:"'medium'",title:"default"}],example:[{description:'<Checkbox size="small" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}}],events:[{name:"update:modelValue"}]};function T(){return T=Object.assign?Object.assign.bind():function(n){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},T.apply(this,arguments)}const t=n=>({components:{Switch:u},setup(){return{args:n,change:z("update:modelValue")}},template:'<Switch v-bind="args" @update:modelValue="change"/>'}),x={id:{control:{type:"text"},defaultValue:"switch"},modelValue:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select",options:["small","medium","large"]},defaultValue:"medium"},disabled:{control:{type:"boolean"},defaultValue:!1},label:{control:{type:"text"},defaultValue:"Switch"},hint:{control:{type:"text"},defaultValue:"A control used to switch between two states: often on or off."}},j={Default:t,defaultArgs:x},P="wrapper";function S({components:n,...l}){return e(P,T({},j,l,{components:n,mdxType:"MDXLayout"}),e(_,{title:"Components/Switch",component:u,argTypes:{...x},parameters:{viewMode:"docs",layout:"centered"},mdxType:"Meta"}),e("h1",null,"Switch"),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h3",null,"Overview ",e("a",{id:"overview"})),e("p",null,"The Switch component is a simple toggle that allows the user to switch between two states: on and off. It is designed to be used as a controlled component, meaning that the value prop must be provided and will determine the current state of the switch."),e(r,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Overview",argTypes:{...t.argTypes},args:{modelValue:!1,size:"small"},mdxType:"Story"},t.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(N,{story:"Overview",exclude:/^(on|change|onChange.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"modelValue (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"modelValue"),' prop determines the current state of the switch. When the modelValue prop is true, the switch will be in the "on" state, and when it is false, the switch will be in the "off" state.'),e("h3",null,"size (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"size")," prop setermines the size of the switch. Accepts the values small, medium (default), and large."),e("h3",null,"id (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"id")," prop sets the HTML id attribute on the switch element. This can be useful for connecting the switch to a label element using the for attribute."),e("h3",null,"disabled (optional)"),e("p",null,"If the ",e("strong",{parentName:"p"},"disabled")," prop is true, the switch will be disabled and the user will not be able to toggle it."),e("h3",null,"label (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"label")," prop sets the label text for the switch. This can be used to provide additional context or instructions for the switch."),e("h3",null,"hint (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"hint")," prop sets a hint text for the switch. This can be used to provide additional information about the switch, such as its purpose or how it is used."),e("h3",null,"errorMsg (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"errorMsg")," prop sets an error message for the switch. This can be used to display an error message when the switch is in an invalid state or when it has been used in an incorrect way."),e("h2",null,"Stories ",e("a",{id:"stories"})),e("h3",null,"Small"),e(r,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Small",argTypes:{...t.argTypes},args:{modelValue:!1,size:"small"},mdxType:"Story"},t.bind({}))),e("h3",null,"Medium"),e(r,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Medium",argTypes:{...t.argTypes},args:{modelValue:!1,size:"medium"},mdxType:"Story"},t.bind({}))),e("h3",null,"Large"),e(r,{withSource:"open",mdxType:"Canvas"},e(i,{name:"Large",argTypes:{...t.argTypes},args:{modelValue:!1,size:"large"},mdxType:"Story"},t.bind({}))),e("h3",null,"With Error"),e(r,{withSource:"open",mdxType:"Canvas"},e(i,{name:"With Error",argTypes:{...t.argTypes},args:{modelValue:!1,size:"medium",errorMsg:"This is an error message"},mdxType:"Story"},t.bind({}))),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Use the label prop to provide context or instructions for the switch. This can help the user understand what the switch is for and how to use it."),e("p",null,"\u{1F4A1} Use the hint prop to provide additional information about the switch. This can be helpful if the switch is being used for a less common or more complex feature."),e("p",null,"\u{1F4A1} Use the errorMsg prop to display an error message when the switch is in an invalid state or when it has been used in an incorrect way. This can help the user understand why the switch is not working as expected."),e("p",null,"\u{1F4A1} Use the size prop to adjust the size of the switch to fit the layout and design of your application."),e("p",null,"\u{1F4A1} Use the disabled prop to disable the switch when it is not needed or when it should not be used."),e("p",null,"\u{1F4A1} Use the onChange prop to update the state of the switch and control its behavior. This is especially important when using the Switch component as a controlled component."),e("p",null,"\u{1F4A1} Consider using the Switch component as a controlled component, which means that the value prop must be provided and will determine the current state of the switch. This can help ensure that the state of the switch is always in sync with the rest of your application."))}S.isMDXComponent=!0;const c=t.bind({});c.storyName="Overview";c.argTypes={...t.argTypes};c.args={modelValue:!1,size:"small"};c.parameters={storySource:{source:`args => {
  return {
    components: {
      Switch
    },

    setup() {
      return {
        args,
        change: action('update:modelValue')
      };
    },

    template: \`<Switch v-bind="args" @update:modelValue="change"/>\`
  };
}`}};const h=t.bind({});h.storyName="Small";h.argTypes={...t.argTypes};h.args={modelValue:!1,size:"small"};h.parameters={storySource:{source:`args => {
  return {
    components: {
      Switch
    },

    setup() {
      return {
        args,
        change: action('update:modelValue')
      };
    },

    template: \`<Switch v-bind="args" @update:modelValue="change"/>\`
  };
}`}};const m=t.bind({});m.storyName="Medium";m.argTypes={...t.argTypes};m.args={modelValue:!1,size:"medium"};m.parameters={storySource:{source:`args => {
  return {
    components: {
      Switch
    },

    setup() {
      return {
        args,
        change: action('update:modelValue')
      };
    },

    template: \`<Switch v-bind="args" @update:modelValue="change"/>\`
  };
}`}};const g=t.bind({});g.storyName="Large";g.argTypes={...t.argTypes};g.args={modelValue:!1,size:"large"};g.parameters={storySource:{source:`args => {
  return {
    components: {
      Switch
    },

    setup() {
      return {
        args,
        change: action('update:modelValue')
      };
    },

    template: \`<Switch v-bind="args" @update:modelValue="change"/>\`
  };
}`}};const f=t.bind({});f.storyName="With Error";f.argTypes={...t.argTypes};f.args={modelValue:!1,size:"medium",errorMsg:"This is an error message"};f.parameters={storySource:{source:`args => {
  return {
    components: {
      Switch
    },

    setup() {
      return {
        args,
        change: action('update:modelValue')
      };
    },

    template: \`<Switch v-bind="args" @update:modelValue="change"/>\`
  };
}`}};const p={title:"Components/Switch",parameters:{viewMode:"docs",layout:"centered"},component:u,argTypes:{...x},includeStories:["overview","small","medium","large","withError"]},X={Overview:"overview",Small:"small",Medium:"medium",Large:"large","With Error":"withError"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(M,{mdxStoryNameToKey:X,mdxComponentAnnotations:p},e(S,null))};const Z=["Default","defaultArgs","overview","small","medium","large","withError"];export{t as Default,Z as __namedExportsOrder,p as default,x as defaultArgs,g as large,m as medium,c as overview,h as small,f as withError};
//# sourceMappingURL=Switch.stories.1ef27abb.js.map
