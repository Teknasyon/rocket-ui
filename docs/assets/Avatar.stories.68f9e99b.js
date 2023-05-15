import"./jsx-runtime.9d43cec3.js";import{c as e,A as C,C as i,S as l,a as z,M as O}from"./Props.d84e7809.js";import"./iframe.4cbf6e81.js";import{a as V}from"./index.0a53e796.js";import{d as M,l as x,a as u,b as c,f as q,n as m,t as D,u as T,k as I}from"./vue.esm-bundler.966918be.js";import"./string.65bb449a.js";import"./es.number.to-fixed.75e06cee.js";import"./make-decorator.41c4cbef.js";const _="/assets/blank-avatar.9ba73f5d.svg",$={class:"avatar__wrapper"},U=["alt","src"],d=M({__name:"Avatar",props:{type:{default:"image"},src:{default:_},alt:{default:"Avatar"},size:{default:"2xl"},online:{type:Boolean,default:!1},text:{default:""}},setup(n){const a=n,s=x(()=>({avatar:!0,[`avatar--${a.size}`]:!0})),r=x(()=>a.type==="image"&&!a.src),k=x(()=>r.value?_:a.src),S=w=>{const o=w.split(" ");return o.length===1?o[0].substring(0,2):`${o[0].charAt(0)}${o[1].charAt(0)}`};return(w,o)=>(u(),c("div",$,[q("div",{class:m(T(s))},[a.type==="text"?(u(),c("p",{key:0,class:m({avatar__text:!0,[`avatar__text--${a.size}`]:!0})},D(S(a.text)),3)):(u(),c("img",{key:1,alt:a.alt,class:m({avatar__image:!0,[`avatar__image--${a.size}`]:!0,"avatar__image--anonymous":T(r)}),src:T(k)},null,10,U))],2),a.online?(u(),c("span",{key:0,class:m({avatar__online:!0,[`avatar__online--${a.size}`]:!0})},null,2)):I("",!0)]))}});d.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"type",description:"Type of the Avatar",tags:{type:[{title:"type",description:"'image' | 'text'"}],default:[{description:"'image'",title:"default"}],example:[{description:'<Avatar type="text" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"image"'},{name:'"text"'}]},defaultValue:{func:!1,value:"'image'"}},{name:"src",description:"Source of the Avatar",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Avatar src="https://source.unsplash.com/random" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"blank"}},{name:"alt",description:"Alt of the Avatar",tags:{type:[{title:"type",description:"string"}],default:[{description:"'Avatar'",title:"default"}],example:[{description:'<Avatar alt="Avatar" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Avatar'"}},{name:"size",description:"Size of the Avatar",tags:{type:[{title:"type",description:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'"}],default:[{description:"'2xl'",title:"default"}],example:[{description:'<Avatar size="xs" />',title:"example"}]},required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'}]},defaultValue:{func:!1,value:"'2xl'"}},{name:"online",description:"Show online status",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Avatar online />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",description:"Text to show when type is text",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Avatar type="text" text="John Doe" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};function b(){return b=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},b.apply(this,arguments)}const t=n=>({components:{Avatar:d},setup(){return{args:n,click:V("close")}},template:'<Avatar v-bind="args" @close="click"/>'}),A={type:{control:{type:"select",options:["image","text"]},defaultValue:"image"},size:{control:{type:"select",options:["xs","sm","md","lg","xl","2xl"]},defaultValue:"md"},src:{control:{type:"text"},defaultValue:""},alt:{control:{type:"text"},defaultValue:"Avatar"},online:{control:{type:"boolean"},defaultValue:!1},text:{control:{type:"text"},defaultValue:""}},B={Default:t,defaultArgs:A},F="wrapper";function N({components:n,...a}){return e(F,b({},B,a,{components:n,mdxType:"MDXLayout"}),e(O,{title:"Components/Avatar",component:d,argTypes:{...A},parameters:{viewMode:"docs"},mdxType:"Meta"}),e("h1",null,"Avatar"),e("p",null,"Avatar component displays a visual representation of a user or an entity."),e("ul",null,e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#overview"},"Overview"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#playground"},"Playground"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#usage"},"Usage with props"))),e("li",{parentName:"ul"},e("p",{parentName:"li"},e("a",{parentName:"p",href:"#tips"},"Tips")))),e("h3",null,"Overview ",e("a",{id:"overview"})),e("p",null,"Avatar is typically used to identify a user or entity within a user interface, and can be displayed in various forms such as an image, text, or initials."),e("p",null,"To use an Avatar component, you can pass the necessary props to configure it to display the avatar in the desired way. For example, you can specify the type of avatar to display (e.g. image or text), the size of the avatar, and any additional props such as the source of the image or the text to display."),e(i,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Overview",argTypes:{...t.argTypes},args:{},mdxType:"Story"},t.bind({}))),e("h3",null,"Playground ",e("a",{id:"playground"})),e("blockquote",null,e("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),e(z,{story:"Overview",exclude:/^(click|close.*)$/,mdxType:"ArgsTable"}),e("h2",null,"Stories"),e("h3",null,"Image"),e(i,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Image",argTypes:{...t.argTypes},args:{type:"image",src:"https://avatars.githubusercontent.com/u/12534660?v=4"},mdxType:"Story"},t.bind({}))),e("h3",null,"Text"),e(i,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Text",argTypes:{...t.argTypes},args:{type:"text",text:"Avatar Text"},mdxType:"Story"},t.bind({}))),e("h3",null,"Anonymous"),e(i,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Anonymous",argTypes:{...t.argTypes},args:{},mdxType:"Story"},t.bind({}))),e("h3",null,"Online"),e(i,{withSource:"open",mdxType:"Canvas"},e(l,{name:"Online",argTypes:{...t.argTypes},args:{online:!0,src:"https://avatars.githubusercontent.com/u/12534660?v=4"},mdxType:"Story"},t.bind({}))),e("h2",null,"Usage with props ",e("a",{id:"usage"})),e("h3",null,"type (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"type"),' props is for the type of avatar to display. Can be either "image" or "text".'),e("h3",null,"src (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"src"),' props is for the source of the image to display. This prop is only used when type is set to "image".'),e("h3",null,"alt (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"alt"),' props is for the alt text for the image. This prop is only used when type is set to "image".'),e("h3",null,"size (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"size"),' props is for the size of the avatar. Can be one of "xs", "sm", "md", "lg", "xl", or "2xl".'),e("h3",null,"online (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"online")," props is for whether to show a green circle indicator to signify that the user is online."),e("h3",null,"text (optional)"),e("p",null,"The ",e("strong",{parentName:"p"},"text"),' props is for the text to display when type is set to "text".'),e("h3",null,"Tips ",e("a",{id:"tips"})),e("p",null,"\u{1F4A1} Use appropriate sizes for different contexts: The size of the avatar should be appropriate for the context in which it is being used. For example, a small avatar might be suitable for a list of users, while a larger avatar might be more suitable for a profile page."),e("p",null,"\u{1F4A1} Use initials for text avatars: If you are using a text avatar, it is a good idea to use the user's initials rather than their full name. This can help to keep the avatar compact and easy to read."),e("p",null,"\u{1F4A1} Use images sparingly: If you are using an image avatar, be mindful of the number of images you are loading on the page. If you are displaying a large number of avatars, it may be more efficient to use text avatars instead."),e("p",null,"\u{1F4A1} Use alternative text for accessibility: When using an image avatar, make sure to include alt text to provide a textual representation of the image for screen readers and other assistive technologies."),e("p",null,"\u{1F4A1} Consider the context of use: Think about the context in which the avatar will be used and design it accordingly. For example, if the avatar is being used in a chat application, you might want to include an online status indicator."))}N.isMDXComponent=!0;const g=t.bind({});g.storyName="Overview";g.argTypes={...t.argTypes};g.args={};g.parameters={storySource:{source:`args => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Avatar v-bind="args" @close="click"/>\`
})`}};const y=t.bind({});y.storyName="Image";y.argTypes={...t.argTypes};y.args={type:"image",src:"https://avatars.githubusercontent.com/u/12534660?v=4"};y.parameters={storySource:{source:`args => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Avatar v-bind="args" @close="click"/>\`
})`}};const v=t.bind({});v.storyName="Text";v.argTypes={...t.argTypes};v.args={type:"text",text:"Avatar Text"};v.parameters={storySource:{source:`args => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Avatar v-bind="args" @close="click"/>\`
})`}};const f=t.bind({});f.storyName="Anonymous";f.argTypes={...t.argTypes};f.args={};f.parameters={storySource:{source:`args => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Avatar v-bind="args" @close="click"/>\`
})`}};const h=t.bind({});h.storyName="Online";h.argTypes={...t.argTypes};h.args={online:!0,src:"https://avatars.githubusercontent.com/u/12534660?v=4"};h.parameters={storySource:{source:`args => ({
  components: {
    Avatar
  },

  setup() {
    return {
      args,
      click: action('close')
    };
  },

  template: \`<Avatar v-bind="args" @close="click"/>\`
})`}};const p={title:"Components/Avatar",parameters:{viewMode:"docs"},component:d,argTypes:{...A},includeStories:["overview","image","text","anonymous","online"]},P={Overview:"overview",Image:"image",Text:"text",Anonymous:"anonymous",Online:"online"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>e(C,{mdxStoryNameToKey:P,mdxComponentAnnotations:p},e(N,null))};const H=["Default","defaultArgs","overview","image","text","anonymous","online"];export{t as Default,H as __namedExportsOrder,f as anonymous,p as default,A as defaultArgs,y as image,h as online,g as overview,v as text};
//# sourceMappingURL=Avatar.stories.68f9e99b.js.map
