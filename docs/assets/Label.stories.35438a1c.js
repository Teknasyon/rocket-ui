import"./jsx-runtime.9d43cec3.js";import{c as e,A as u,C as h,S as c,M as f,a as b}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{_ as p}from"./Label.d5d3ec69.js";import{_ as y}from"./Textfield.2a75e1b3.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./vue.esm-bundler.966918be.js";import"./Icon.306415ba.js";function i(){return i=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},i.apply(this,arguments)}const o=t=>({components:{Label:p,Textfield:y},setup(){return{args:t}},template:`
    <Label 
      v-bind="args" 
    />
    <Textfield id="label-for" />
    `}),d={id:{control:{type:"text"},defaultValue:"label"},for:{control:{type:"text"},defaultValue:"input"},text:{control:{type:"text"},defaultValue:"Label"}},g={Default:o,defaultArgs:d},v="wrapper";function m({components:t,...a}){return e(v,i({},g,a,{components:t,mdxType:"MDXLayout"}),e(f,{title:"Components/Label",component:p,argTypes:{...d},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Label"),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h3",null,"Overview ",e("a",{id:"overview"})),e("p",null,"The Label component is a UI element that is used to display a label for a form element or other component. It is typically used in conjunction with form elements such as input fields, checkboxes, and radio buttons, as well as other components like sliders and switches. The Label component can be used to provide a clear and concise description of the associated form element or component, helping users understand its purpose and how to use it."),e(h,{withSource:"open",mdxType:"Canvas"},e(c,{name:"Overview",argTypes:{...o.argTypes},args:{id:"label-id",for:"label-for"},mdxType:"Story"},o.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e(b,{story:"Overview",mdxType:"ArgsTable"}),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"id (required)"),e("p",null,"The id prop is a unique identifier for the label element. It should be set to the same value as the id prop of the form element or component that the label is associated with."),e("h3",null,"for (required)"),e("p",null,"The for prop is used to associate the label with a form element or component. It should be set to the same value as the id prop of the form element or component that the label is associated with."),e("h3",null,"text (required)"),e("p",null,"The text prop is the text that will be displayed within the label element. It can be a string or a number."),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Use clear and concise text for the text prop: Make sure that the text within the label accurately and clearly describes the associated form element or component. Avoid using jargon or technical terms that may be unfamiliar to some users."),e("p",null,"\u{1F4A1} Use the for and id props correctly: The for prop should be set to the id of the form element or component that the label is associated with, and the id prop should be a unique identifier for the label element. This ensures that the label is properly associated with the correct form element or component, and helps screen readers and other assistive technologies correctly interpret the label."),e("p",null,"\u{1F4A1} Consider using aria-label or aria-labelledby: If the label text is not visually displayed (e.g. because it is hidden using CSS), you may need to use the aria-label or aria-labelledby attributes to provide an accessible label for screen readers and other assistive technologies."),e("p",null,"\u{1F4A1} Use label elements for all form elements: It is important to use label elements for all form elements, even if the form element is already described by surrounding text. This ensures that the form element is properly labeled and easier to use for all users, including those using assistive technologies."))}m.isMDXComponent=!0;const n=o.bind({});n.storyName="Overview";n.argTypes={...o.argTypes};n.args={id:"label-id",for:"label-for"};n.parameters={storySource:{source:`args => {
  return {
    components: {
      Label,
      Textfield
    },

    setup() {
      return {
        args
      };
    },

    template: \`
    <Label 
      v-bind="args" 
    />
    <Textfield id="label-for" />
    \`
  };
}`}};const r={title:"Components/Label",parameters:{viewMode:"docs"},component:p,argTypes:{...d},includeStories:["overview"]},w={Overview:"overview"};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:w,mdxComponentAnnotations:r},e(m,null))};const A=["Default","defaultArgs","overview"];export{o as Default,A as __namedExportsOrder,r as default,d as defaultArgs,n as overview};
//# sourceMappingURL=Label.stories.35438a1c.js.map
