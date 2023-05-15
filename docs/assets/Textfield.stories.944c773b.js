import"./jsx-runtime.9d43cec3.js";import{c as e,A as v,C as n,S as t,a as w,M as N}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{a as o}from"./index.0a53e796.js";import{_ as x}from"./Textfield.2a75e1b3.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./make-decorator.41c4cbef.js";import"./vue.esm-bundler.966918be.js";import"./Icon.306415ba.js";import"./Label.d5d3ec69.js";function y(){return y=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var b=arguments[r];for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&(a[T]=b[T])}return a},y.apply(this,arguments)}const l=a=>({components:{Textfield:x},setup(){return{args:a,input:o("update:modelValue"),focus:o("focus"),blur:o("blur"),clickIcon:o("click:icon"),clickClear:o("click:clear")}},template:`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />`}),g={id:{control:{type:"text"},defaultValue:"textfield"},type:{control:{type:"select",options:["text","password","email","number","tel","url"]},defaultValue:"text"},label:{control:{type:"text"},defaultValue:"Textfield"},placeholder:{control:{type:"text"},defaultValue:"Placeholder"},modelValue:{control:{type:"text"},defaultValue:""},errorMsg:{control:{type:"text"},defaultValue:""},hint:{control:{type:"text"},defaultValue:"This is a hint text to help user."},prependIcon:{control:{type:"text"},defaultValue:""},appendIcon:{control:{type:"text"},defaultValue:""},iconColor:{control:{type:"color"},defaultValue:""},loading:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},clearable:{control:{type:"boolean"},defaultValue:!1}},C={Default:l,defaultArgs:g},V="wrapper";function k({components:a,...r}){return e(V,y({},C,r,{components:a,mdxType:"MDXLayout"}),e(N,{title:"Components/Textfield",component:x,argTypes:{...g},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Textfield"),e("p",null,"The Textfield component is a versatile input field that can be used for various types of data entry in a web application."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#stories"},"Stories"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h2",null,"Overview ",e("a",{id:"overview"})),e("p",null,"The Textfield component allows for the input of text, numbers, and other types of data. It includes various options for customization, such as label, placeholder, and icon. It also includes options for error handling, hinting, and disabling or loading the field."),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Overview",argTypes:{...l.argTypes},args:{id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(w,{story:"Overview",exclude:/^(change|input|focus|blur|click|on.*)/,mdxType:"ArgsTable"}),e("h2",null,"Stories"),e("h3",null,"Text"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Text",argTypes:{...l.argTypes},args:{type:"text",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Mail"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Mail",argTypes:{...l.argTypes},args:{type:"email",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Password"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Password",argTypes:{...l.argTypes},args:{type:"password",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Url"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Url",argTypes:{...l.argTypes},args:{type:"url",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Tel"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Tel",argTypes:{...l.argTypes},args:{type:"tel",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"Number"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"Number",argTypes:{...l.argTypes},args:{type:"number",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"},mdxType:"Story"},l.bind({}))),e("h3",null,"With Error"),e(n,{withSource:"open",mdxType:"Canvas"},e(t,{name:"With Error",argTypes:{...l.argTypes},args:{type:"text",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder",errorMsg:"This is an error message"},mdxType:"Story"},l.bind({}))),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"id (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"id")," prop is a unique identifier for the input field."),e("h3",null,"label (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"label")," prop is for text to be displayed as a label for the input field."),e("h3",null,"placeholder (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"placeholder")," prop is for text to be displayed as a placeholder in the input field."),e("h3",null,"type (required)"),e("p",null,"The ",e("strong",{parentName:"p"},"type"),' is the type of input field, such as "text" or "number".'),e("h3",null,"modelValue (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"modelValue")," prop is the current value of the input field."),e("h3",null,"errorMsg (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"errorMsg")," props is for the error message to be displayed if there is an error with the input."),e("h3",null,"hint (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"hint")," prop is the additional text to provide context or instructions for the input field."),e("h3",null,"prependIcon (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"prependIcon")," prop is an icon to be displayed before the input field."),e("h3",null,"iconColor (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"iconColor")," prop gives the color of the icon."),e("h3",null,"disabled (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"disabled")," prop indicates whether the input field is disabled or not."),e("h3",null,"loading (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"loading")," prop indicates whether the input field is in a loading state or not."),e("h3",null,"clearable (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"clearable")," prop indicates whether the input field can be cleared or not."),e("h2",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} The label should clearly describe what the input field is for, and should be positioned in a way that is easy for users to understand."),e("p",null,"\u{1F4A1} Placeholders can be used to provide additional context or instructions for the input field, but should not be used as a substitute for a clear label."),e("p",null,"\u{1F4A1} The type of input field should match the type of data that will be entered. For example, use a number input field for numeric data, and a password input field for sensitive information."),e("p",null,"\u{1F4A1} Error messages should clearly indicate what the problem is and how to fix it."),e("p",null,"\u{1F4A1} Icons can be used to make the Textfield component more visually appealing and to provide additional information or context."),e("p",null,"\u{1F4A1} Textfield component should be accessible to users with disabilities, including keyboard navigation, and providing appropriate ARIA attributes."),e("p",null,"\u{1F4A1} Hints can be used to provide additional context or instructions for the input field."),e("p",null,"\u{1F4A1} This will help users to clear their input easily."),e("p",null,"\u{1F4A1} Use these states to indicate that the input field is temporarily unavailable or in the process of loading data."))}k.isMDXComponent=!0;const c=l.bind({});c.storyName="Overview";c.argTypes={...l.argTypes};c.args={id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};c.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const p=l.bind({});p.storyName="Text";p.argTypes={...l.argTypes};p.args={type:"text",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};p.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const s=l.bind({});s.storyName="Mail";s.argTypes={...l.argTypes};s.args={type:"email",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};s.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const d=l.bind({});d.storyName="Password";d.argTypes={...l.argTypes};d.args={type:"password",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};d.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const u=l.bind({});u.storyName="Url";u.argTypes={...l.argTypes};u.args={type:"url",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};u.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const f=l.bind({});f.storyName="Tel";f.argTypes={...l.argTypes};f.args={type:"tel",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};f.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const m=l.bind({});m.storyName="Number";m.argTypes={...l.argTypes};m.args={type:"number",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder"};m.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const h=l.bind({});h.storyName="With Error";h.argTypes={...l.argTypes};h.args={type:"text",id:"textfield-id",label:"Textfield label",placeholder:"Textfield placeholder",errorMsg:"This is an error message"};h.parameters={storySource:{source:`args => {
  return {
    components: {
      Textfield
    },

    setup() {
      return {
        args,
        input: action('update:modelValue'),
        focus: action('focus'),
        blur: action('blur'),
        clickIcon: action('click:icon'),
        clickClear: action('click:clear')
      };
    },

    template: \`
    <Textfield 
      v-bind="args" 
      @update:modelValue="input" 
      @focus="focus" 
      @blur="blur" 
      @click:icon="clickIcon"
      @click:clear="clickClear"
    />\`
  };
}`}};const i={title:"Components/Textfield",parameters:{viewMode:"docs"},component:x,argTypes:{...g},includeStories:["overview","text","mail","password","url","tel","number","withError"]},S={Overview:"overview",Text:"text",Mail:"mail",Password:"password",Url:"url",Tel:"tel",Number:"number","With Error":"withError"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(v,{mdxStoryNameToKey:S,mdxComponentAnnotations:i},e(k,null))};const X=["Default","defaultArgs","overview","text","mail","password","url","tel","number","withError"];export{l as Default,X as __namedExportsOrder,i as default,g as defaultArgs,s as mail,m as number,c as overview,d as password,f as tel,p as text,u as url,h as withError};
//# sourceMappingURL=Textfield.stories.944c773b.js.map
