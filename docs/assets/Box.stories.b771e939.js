import"./jsx-runtime.9d43cec3.js";import{c as e,A as c,C as d,S as y,M as x,a as g}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{_ as p}from"./Box.d49e7134.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./vue.esm-bundler.966918be.js";/* empty css              */function i(){return i=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},i.apply(this,arguments)}const a=t=>({components:{Box:p},setup(){return{args:t}},template:`<Box v-bind="args">
  hello world
  </Box>`}),u={is:{control:{type:"select",options:["div","span","p","h1","h2","h3","h4","h5","h6"]},defaultValue:"div"},display:{control:{type:"select",options:["block","inline-block","inline","flex","inline-flex","grid","inline-grid","table","inline-table","contents","list-item","none"]},defaultValue:"block"},width:{control:{type:"text"},defaultValue:"auto"},height:{control:{type:"text"},defaultValue:"auto"},minWidth:{control:{type:"text"},defaultValue:"auto"},minHeight:{control:{type:"text"},defaultValue:"auto"},maxWidth:{control:{type:"text"},defaultValue:"auto"},maxHeight:{control:{type:"text"},defaultValue:"auto"}},v={Default:a,defaultArgs:u},f="wrapper";function m({components:t,...o}){return e(f,i({},v,o,{components:t,mdxType:"MDXLayout"}),e(x,{title:"Layout/Box",component:p,argTypes:{...u},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Box"),e("p",null,"Box is the most abstract component on top of which all other Rocket UI components are built. By default, it renders a ",e("inlineCode",{parentName:"p"},"div")," element"),e("blockquote",null,e("p",{parentName:"blockquote"},"A simple box Components")),e(d,{mdxType:"Canvas"},e(y,{name:"Overview",argTypes:{...a.argTypes},args:{},mdxType:"Story"},a.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(g,{story:"Overview",exclude:/^(click|default|on.*)$/,mdxType:"ArgsTable"}))}m.isMDXComponent=!0;const r=a.bind({});r.storyName="Overview";r.argTypes={...a.argTypes};r.args={};r.parameters={storySource:{source:`args => ({
  components: {
    Box
  },

  setup() {
    return {
      args
    };
  },

  template: \`<Box v-bind="args">
  hello world
  </Box>\`
})`}};const n={title:"Layout/Box",parameters:{viewMode:"docs"},component:p,argTypes:{...u},includeStories:["overview"]},h={Overview:"overview"};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(c,{mdxStoryNameToKey:h,mdxComponentAnnotations:n},e(m,null))};const A=["Default","defaultArgs","overview"];export{a as Default,A as __namedExportsOrder,n as default,u as defaultArgs,r as overview};
//# sourceMappingURL=Box.stories.b771e939.js.map
