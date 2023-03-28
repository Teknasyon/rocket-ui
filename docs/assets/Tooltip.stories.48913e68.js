import"./jsx-runtime.8b331685.js";import{c as r,A as Gt,C as H,S as R,a as Jt,M as Qt}from"./Props.f6002e18.js";import"./iframe.fe83d79e.js";import{a as L}from"./index.b987ccb9.js";import{d as Zt,z as ot,l as Dt,D as te,b as Z,f as At,i as Ot,k as mt,w as tt,n as gt,t as ee,u as Nt,F as oe,E as ne,a as et,c as ie,h as re}from"./vue.esm-bundler.966918be.js";import{_ as ae}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as Pt}from"./Button.ba44a7c6.js";import{_ as le}from"./Icon.306415ba.js";import"./string.bb86dffe.js";import"./es.number.to-fixed.f5ab8707.js";import"./make-decorator.a7c6be5e.js";function K(t){return t.split("-")[0]}function lt(t){return t.split("-")[1]}function G(t){return["top","bottom"].includes(K(t))?"x":"y"}function bt(t){return t==="y"?"height":"width"}function Vt(t,e,o){let{reference:i,floating:n}=t;const l=i.x+i.width/2-n.width/2,a=i.y+i.height/2-n.height/2,s=G(e),p=bt(s),u=i[p]/2-n[p]/2,h=K(e),c=s==="x";let d;switch(h){case"top":d={x:l,y:i.y-n.height};break;case"bottom":d={x:l,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:a};break;case"left":d={x:i.x-n.width,y:a};break;default:d={x:i.x,y:i.y}}switch(lt(e)){case"start":d[s]-=u*(o&&c?-1:1);break;case"end":d[s]+=u*(o&&c?-1:1);break}return d}const se=async(t,e,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:l=[],platform:a}=o,s=l.filter(Boolean),p=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:c}=Vt(u,i,p),d=i,f={},g=0;for(let v=0;v<s.length;v++){const{name:m,fn:y}=s[v],{x:w,y:b,data:C,reset:x}=await y({x:h,y:c,initialPlacement:i,placement:d,strategy:n,middlewareData:f,rects:u,platform:a,elements:{reference:t,floating:e}});if(h=w!=null?w:h,c=b!=null?b:c,f={...f,[m]:{...f[m],...C}},x&&g<=50){g++,typeof x=="object"&&(x.placement&&(d=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:n}):x.rects),{x:h,y:c}=Vt(u,d,p)),v=-1;continue}}return{x:h,y:c,placement:d,strategy:n,middlewareData:f}};function ce(t){return{top:0,right:0,bottom:0,left:0,...t}}function $t(t){return typeof t!="number"?ce(t):{top:t,right:t,bottom:t,left:t}}function nt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function it(t,e){var o;e===void 0&&(e={});const{x:i,y:n,platform:l,rects:a,elements:s,strategy:p}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:d=!1,padding:f=0}=e,g=$t(f),m=s[d?c==="floating"?"reference":"floating":c],y=nt(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(m)))==null||o?m:m.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:u,rootBoundary:h,strategy:p})),w=nt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c==="floating"?{...a.floating,x:i,y:n}:a.reference,offsetParent:await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),strategy:p}):a[c]);return{top:y.top-w.top+g.top,bottom:w.bottom-y.bottom+g.bottom,left:y.left-w.left+g.left,right:w.right-y.right+g.right}}const pe=Math.min,ue=Math.max;function wt(t,e,o){return ue(t,pe(e,o))}const de=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:i=0}=t!=null?t:{},{x:n,y:l,placement:a,rects:s,platform:p}=e;if(o==null)return{};const u=$t(i),h={x:n,y:l},c=G(a),d=lt(a),f=bt(c),g=await p.getDimensions(o),v=c==="y"?"top":"left",m=c==="y"?"bottom":"right",y=s.reference[f]+s.reference[c]-h[c]-s.floating[f],w=h[c]-s.reference[c],b=await(p.getOffsetParent==null?void 0:p.getOffsetParent(o));let C=b?c==="y"?b.clientHeight||0:b.clientWidth||0:0;C===0&&(C=s.floating[f]);const x=y/2-w/2,M=u[v],$=C-g[f]-u[m],S=C/2-g[f]/2+x,k=wt(M,S,$),J=(d==="start"?u[v]:u[m])>0&&S!==k&&s.reference[f]<=s.floating[f]?S<M?M-S:$-S:0;return{[c]:h[c]-J,data:{[c]:k,centerOffset:S-k}}}}),fe={left:"right",right:"left",bottom:"top",top:"bottom"};function rt(t){return t.replace(/left|right|bottom|top/g,e=>fe[e])}function he(t,e,o){o===void 0&&(o=!1);const i=lt(t),n=G(t),l=bt(n);let a=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(a=rt(a)),{main:a,cross:rt(a)}}const me={start:"end",end:"start"};function _t(t){return t.replace(/start|end/g,e=>me[e])}const ge=["top","right","bottom","left"];function ye(t){const e=rt(t);return[_t(t),e,_t(e)]}const we=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:i,middlewareData:n,rects:l,initialPlacement:a,platform:s,elements:p}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:c,fallbackStrategy:d="bestFit",flipAlignment:f=!0,...g}=t,v=K(i),y=c||(v===a||!f?[rt(a)]:ye(a)),w=[a,...y],b=await it(e,g),C=[];let x=((o=n.flip)==null?void 0:o.overflows)||[];if(u&&C.push(b[v]),h){const{main:k,cross:q}=he(i,l,await(s.isRTL==null?void 0:s.isRTL(p.floating)));C.push(b[k],b[q])}if(x=[...x,{placement:i,overflows:C}],!C.every(k=>k<=0)){var M,$;const k=((M=($=n.flip)==null?void 0:$.index)!=null?M:0)+1,q=w[k];if(q)return{data:{index:k,overflows:x},reset:{placement:q}};let F="bottom";switch(d){case"bestFit":{var S;const J=(S=x.map(Q=>[Q,Q.overflows.filter(z=>z>0).reduce((z,Kt)=>z+Kt,0)]).sort((Q,z)=>Q[1]-z[1])[0])==null?void 0:S[0].placement;J&&(F=J);break}case"initialPlacement":F=a;break}if(i!==F)return{reset:{placement:F}}}return{}}}};function Bt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Mt(t){return ge.some(e=>t[e]>=0)}const ve=function(t){let{strategy:e="referenceHidden",...o}=t===void 0?{}:t;return{name:"hide",async fn(i){const{rects:n}=i;switch(e){case"referenceHidden":{const l=await it(i,{...o,elementContext:"reference"}),a=Bt(l,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Mt(a)}}}case"escaped":{const l=await it(i,{...o,altBoundary:!0}),a=Bt(l,n.floating);return{data:{escapedOffsets:a,escaped:Mt(a)}}}default:return{}}}}};async function be(t,e){const{placement:o,platform:i,elements:n}=t,l=await(i.isRTL==null?void 0:i.isRTL(n.floating)),a=K(o),s=lt(o),p=G(o)==="x",u=["left","top"].includes(a)?-1:1,h=l&&p?-1:1,c=typeof e=="function"?e(t):e;let{mainAxis:d,crossAxis:f,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return s&&typeof g=="number"&&(f=s==="end"?g*-1:g),p?{x:f*h,y:d*u}:{x:d*u,y:f*h}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i}=e,n=await be(e,t);return{x:o+n.x,y:i+n.y,data:n}}}};function Te(t){return t==="x"?"y":"x"}const Ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:n}=e,{mainAxis:l=!0,crossAxis:a=!1,limiter:s={fn:m=>{let{x:y,y:w}=m;return{x:y,y:w}}},...p}=t,u={x:o,y:i},h=await it(e,p),c=G(K(n)),d=Te(c);let f=u[c],g=u[d];if(l){const m=c==="y"?"top":"left",y=c==="y"?"bottom":"right",w=f+h[m],b=f-h[y];f=wt(w,f,b)}if(a){const m=d==="y"?"top":"left",y=d==="y"?"bottom":"right",w=g+h[m],b=g-h[y];g=wt(w,g,b)}const v=s.fn({...e,[c]:f,[d]:g});return{...v,data:{x:v.x-o,y:v.y-i}}}}};function qt(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function O(t){if(t==null)return window;if(!qt(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function D(t){return O(t).getComputedStyle(t)}function V(t){return qt(t)?"":t?(t.nodeName||"").toLowerCase():""}function Ft(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function A(t){return t instanceof O(t).HTMLElement}function E(t){return t instanceof O(t).Element}function ke(t){return t instanceof O(t).Node}function Ht(t){if(typeof ShadowRoot>"u")return!1;const e=O(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function st(t){const{overflow:e,overflowX:o,overflowY:i,display:n}=D(t);return/auto|scroll|overlay|hidden/.test(e+i+o)&&!["inline","contents"].includes(n)}function Se(t){return["table","td","th"].includes(V(t))}function xt(t){const e=/firefox/i.test(Ft()),o=D(t),i=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||(i?i!=="none":!1)||e&&o.willChange==="filter"||e&&(o.filter?o.filter!=="none":!1)||["transform","perspective"].some(n=>o.willChange.includes(n))||["paint","layout","strict","content"].some(n=>{const l=o.contain;return l!=null?l.includes(n):!1})}function zt(){return!/^((?!chrome|android).)*safari/i.test(Ft())}function Tt(t){return["html","body","#document"].includes(V(t))}const Rt=Math.min,I=Math.max,at=Math.round;function B(t,e,o){var i,n,l,a;e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect();let p=1,u=1;e&&A(t)&&(p=t.offsetWidth>0&&at(s.width)/t.offsetWidth||1,u=t.offsetHeight>0&&at(s.height)/t.offsetHeight||1);const h=E(t)?O(t):window,c=!zt()&&o,d=(s.left+(c&&(i=(n=h.visualViewport)==null?void 0:n.offsetLeft)!=null?i:0))/p,f=(s.top+(c&&(l=(a=h.visualViewport)==null?void 0:a.offsetTop)!=null?l:0))/u,g=s.width/p,v=s.height/u;return{width:g,height:v,top:f,right:d+g,bottom:f+v,left:d,x:d,y:f}}function _(t){return((ke(t)?t.ownerDocument:t.document)||window.document).documentElement}function ct(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function It(t){return B(_(t)).left+ct(t).scrollLeft}function De(t){const e=B(t);return at(e.width)!==t.offsetWidth||at(e.height)!==t.offsetHeight}function Ae(t,e,o){const i=A(e),n=_(e),l=B(t,i&&De(e),o==="fixed");let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(i||!i&&o!=="fixed")if((V(e)!=="body"||st(n))&&(a=ct(e)),A(e)){const p=B(e,!0);s.x=p.x+e.clientLeft,s.y=p.y+e.clientTop}else n&&(s.x=It(n));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function X(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||(Ht(t)?t.host:null)||_(t);return Ht(e)?e.host:e}function Wt(t){return!A(t)||D(t).position==="fixed"?null:t.offsetParent}function Oe(t){let e=X(t);for(;A(e)&&!Tt(e);){if(xt(e))return e;e=X(e)}return null}function Lt(t){const e=O(t);let o=Wt(t);for(;o&&Se(o)&&D(o).position==="static";)o=Wt(o);return o&&(V(o)==="html"||V(o)==="body"&&D(o).position==="static"&&!xt(o))?e:o||Oe(t)||e}function Ne(t){if(A(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=B(t);return{width:e.width,height:e.height}}function Ve(t){let{rect:e,offsetParent:o,strategy:i}=t;const n=A(o),l=_(o);if(o===l)return e;let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((n||!n&&i!=="fixed")&&((V(o)!=="body"||st(l))&&(a=ct(o)),A(o))){const p=B(o,!0);s.x=p.x+o.clientLeft,s.y=p.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+s.x,y:e.y-a.scrollTop+s.y}}function _e(t,e){const o=O(t),i=_(t),n=o.visualViewport;let l=i.clientWidth,a=i.clientHeight,s=0,p=0;if(n){l=n.width,a=n.height;const u=zt();(u||!u&&e==="fixed")&&(s=n.offsetLeft,p=n.offsetTop)}return{width:l,height:a,x:s,y:p}}function Be(t){var e;const o=_(t),i=ct(t),n=(e=t.ownerDocument)==null?void 0:e.body,l=I(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=I(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let s=-i.scrollLeft+It(t);const p=-i.scrollTop;return D(n||o).direction==="rtl"&&(s+=I(o.clientWidth,n?n.clientWidth:0)-l),{width:l,height:a,x:s,y:p}}function jt(t){const e=X(t);return Tt(e)?t.ownerDocument.body:A(e)&&st(e)?e:jt(e)}function Xt(t,e){var o;e===void 0&&(e=[]);const i=jt(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),l=O(i),a=n?[l].concat(l.visualViewport||[],st(i)?i:[]):i,s=e.concat(a);return n?s:s.concat(Xt(a))}function Me(t,e){const o=B(t,!1,e==="fixed"),i=o.top+t.clientTop,n=o.left+t.clientLeft;return{top:i,left:n,x:n,y:i,right:n+t.clientWidth,bottom:i+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function Et(t,e,o){return e==="viewport"?nt(_e(t,o)):E(e)?Me(e,o):nt(Be(_(t)))}function He(t){let e=Xt(t).filter(l=>E(l)&&V(l)!=="body"),o=null;const i=D(t).position==="fixed";let n=i?X(t):t;for(;E(n)&&!Tt(n);){const l=D(n),a=xt(n);(i?!a&&!o:!a&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position))?e=e.filter(p=>p!==n):o=l,n=X(n)}return e}function Re(t){let{element:e,boundary:o,rootBoundary:i,strategy:n}=t;const a=[...o==="clippingAncestors"?He(e):[].concat(o),i],s=a[0],p=a.reduce((u,h)=>{const c=Et(e,h,n);return u.top=I(c.top,u.top),u.right=Rt(c.right,u.right),u.bottom=Rt(c.bottom,u.bottom),u.left=I(c.left,u.left),u},Et(e,s,n));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}const We={getClippingRect:Re,convertOffsetParentRelativeRectToViewportRelativeRect:Ve,isElement:E,getDimensions:Ne,getOffsetParent:Lt,getDocumentElement:_,async getElementRects(t){let{reference:e,floating:o,strategy:i}=t;const n=this.getOffsetParent||Lt,l=this.getDimensions;return{reference:Ae(e,await n(o),i),floating:{x:0,y:0,...await l(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>D(t).direction==="rtl"},Le=(t,e,o)=>se(t,e,{platform:We,...o});function yt({value:t},{value:e},{value:o},i,n,l){!t||!e||Le(t,e,{placement:i,middleware:[xe(n),Ce({padding:l}),de({element:o}),we(),ve()]}).then(({x:a,y:s,placement:p,middlewareData:u})=>{if(Object.assign(e.style,{left:`${a}px`,top:`${s}px`}),o&&u.arrow){const{x:h,y:c}=u.arrow,d={top:W.Bottom,right:W.Left,bottom:W.Top,left:W.Right}[p.split("-")[0]];Object.assign(o.style,{left:a!=null?`${h}px`:"",top:s!=null?`${c}px`:"",right:"",bottom:"",[`${d}`]:"-4px"})}})}var W=(t=>(t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.TopStart="top-start",t.TopEnd="top-end",t.RightStart="right-start",t.RightEnd="right-end",t.BottomStart="bottom-start",t.BottomEnd="bottom-end",t.LeftStart="left-start",t.LeftEnd="left-end",t))(W||{}),N=(t=>(t.Click="click",t.Hover="hover",t.Manual="manual",t))(N||{});const Ee=["aria-disabled","onClick","onMouseenter","onMouseleave","onMousemove"],Pe=["innerHTML"],Ut=Zt({__name:"Tooltip",props:{placement:{default:W.Top},text:{default:""},dark:{type:Boolean,default:!0},light:{type:Boolean,default:!1},triggers:{default:N.Hover},autoHide:{type:Boolean,default:!0},hideDelay:{default:3e3},showDelay:{default:0},shown:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},offset:{default:0},padding:{default:2},outsideClick:{type:Boolean,default:!1},triggerContent:{default:""},resizable:{type:Boolean,default:!0}},emits:["show","hide"],setup(t,{emit:e}){const o=t;ne(m=>({"11aba73c":Nt(v)}));const i=ot(null),n=ot(null),l=ot(null);function a(){const{placement:m,offset:y,padding:w,disabled:b}=o;b||(n.value.style.display="block",e("show"),yt(i,n,l,m,y,w),p(),o.outsideClick&&u("add"))}function s(){n.value.style.display="",e("hide"),o.outsideClick&&u("remove")}const p=()=>{o.autoHide&&setTimeout(()=>{s()},o.hideDelay)},u=m=>{m==="add"&&document.addEventListener("click",s),m==="remove"&&document.removeEventListener("click",s)},h=()=>{o.disabled||o.triggers==N.Click&&(n.value.style.display==="block"?s():a())},c=()=>{o.disabled||o.triggers===N.Hover&&a()},d=()=>{if(!o.disabled)if(n.value.style.display===""&&o.triggers===N.Hover){a();return}else n.value.style.display!==""&&o.triggers===N.Hover&&s()},f=()=>{const{placement:m,offset:y,padding:w,disabled:b}=o;b||o.triggers===N.Hover&&yt(i,n,l,m,y,w)},g=Dt(()=>({tooltip:!0,"tooltip--dark":o.dark,"tooltip--light":o.light}));window.onresize=()=>{const{placement:m,offset:y,padding:w,disabled:b}=o;b||o.resizable&&yt(i,n,l,m,y,w)},te(()=>{o.disabled||o.shown&&o.triggers===N.Manual&&a()},{flush:"post"});const v=Dt(()=>`${o.showDelay}ms`);return(m,y)=>(et(),Z(oe,null,[At("div",{ref_key:"trigger",ref:i,"aria-disabled":o.disabled,class:"trigger",onClick:tt(h,["stop"]),onMouseenter:tt(c,["stop"]),onMouseleave:tt(d,["stop"]),onMousemove:tt(f,["stop"])},[Ot(m.$slots,"trigger",{},void 0,!0),m.$slots.trigger?mt("",!0):(et(),Z("div",{key:0,innerHTML:o.triggerContent},null,8,Pe))],40,Ee),At("div",{id:"tooltip",ref_key:"tooltip",ref:n,class:gt(Nt(g)),role:"tooltip"},[Ot(m.$slots,"content",{},void 0,!0),m.$slots.content?mt("",!0):(et(),Z("div",{key:0,class:gt({tooltip__content:!0,"tooltip__content--dark":o.dark,"tooltip__content--light":o.light})},ee(o.text),3)),m.$slots.content?mt("",!0):(et(),Z("div",{key:1,id:"arrow",ref_key:"arrowElement",ref:l,class:gt({tooltip__arrow:!0,"tooltip__arrow--dark":o.dark,"tooltip__arrow--light":o.light})},null,2))],2)],64))}});const P=ae(Ut,[["__scopeId","data-v-af8d63f8"]]);Ut.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"placement",description:"Placement of the tooltip",tags:{type:[{title:"type",description:"Placements"}],default:[{description:"Placement.Top",title:"default"}],example:[{description:'<Tooltip placement="top" />',title:"example"}]},required:!1,type:{name:"Placements"},defaultValue:{func:!1,value:"Placement.Top"}},{name:"text",description:"Text of the tooltip content",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Tooltip text="Tooltip" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dark",description:"Dark theme of the tooltip deneme 1 2 3",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"true",title:"default"}],example:[{description:"<Tooltip dark />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"light",description:"Light theme of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Tooltip light />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"triggers",description:"Triggers of the tooltip",tags:{type:[{title:"type",description:"Triggers"}],default:[{description:"Trigger.Hover",title:"default"}],example:[{description:'<Tooltip triggers="hover" />',title:"example"}]},required:!1,type:{name:"Triggers"},defaultValue:{func:!1,value:"Trigger.Hover"}},{name:"autoHide",description:"Auto hide of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"true",title:"default"}],example:[{description:"<Tooltip autoHide />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hideDelay",description:"Hide delay of the tooltip",tags:{type:[{title:"type",description:"number"}],default:[{description:"3000",title:"default"}],example:[{description:"<Tooltip hideDelay={3000} />",title:"example"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"showDelay",description:"Show delay of the tooltip",tags:{type:[{title:"type",description:"number"}],default:[{description:"0",title:"default"}],example:[{description:"<Tooltip showDelay={0} />",title:"example"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"shown",description:"Shown state of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Tooltip shown />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disabled state of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Tooltip disabled />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:"Offset of the tooltip",tags:{type:[{title:"type",description:"number"}],default:[{description:"0",title:"default"}],example:[{description:"<Tooltip offset={0} />",title:"example"}],link:[{description:"https://floating-ui.com/docs/tutorial#offset-middleware",title:"link"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"padding",description:"Padding of the tooltip",tags:{type:[{title:"type",description:"number"}],default:[{description:"2",title:"default"}],example:[{description:"<Tooltip padding={0} />",title:"example"}],link:[{description:"https://floating-ui.com/docs/tutorial#shift-middleware",title:"link"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"outsideClick",description:"Outside click of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"false",title:"default"}],example:[{description:"<Tooltip outsideClick />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"triggerContent",description:"Trigger content of the tooltip",tags:{type:[{title:"type",description:"string"}],default:[{description:"''",title:"default"}],example:[{description:'<Tooltip triggerContent="Trigger" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"resizable",description:"Resizable of the tooltip",tags:{type:[{title:"type",description:"boolean"}],default:[{description:"true",title:"default"}],example:[{description:"<Tooltip resizable />",title:"example"}],link:[{description:"https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event",title:"link"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"show"},{name:"hide"}],slots:[{name:"trigger"},{name:"content"}]};const $e={mounted(t,e){console.log("vTooltip"),ie({setup(){const i=ot(e.value);return()=>re(P,{...i.value})}}).mount(t)}};function vt(){return vt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},vt.apply(this,arguments)}const T=({buttonContent:t,...e})=>({components:{Tooltip:P,Button:Pt},setup(){return{args:e,show:L("show"),hide:L("hide")}},template:`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Button variant="primary">${t}</Button>
      </template>
    </Tooltip>
    `}),U=t=>({components:{Tooltip:P,Icon:le},setup(){return{args:t,show:L("show"),hide:L("hide")}},template:`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Icon name="info" />
      </template>
      <template #content>
        <span style="background: red; color: #fff; padding: 8px;">This is a tooltip</span>
      </template>
    </Tooltip>
    `}),Y=t=>({components:{Tooltip:P},setup(){return{args:t,show:L("show"),hide:L("hide")}},template:`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <span>Toggle tooltip</span>
      </template>
    </Tooltip>
    `}),Ct=()=>({components:{Button:Pt},directives:{tooltip:$e},template:`
    <Button 
      v-tooltip="{
        triggerContent: '<div>Hello World!</div>',
        text: 'Directive tooltip',
        autoHide: false,
        placement: 'right',
        offset: 30,
        }" 
    >
      This hidden
    </Button>
    `}),kt={placement:{control:{type:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"]},defaultValue:"top"},text:{control:{type:"text"},defaultValue:"Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element."},dark:{control:{type:"boolean"},defaultValue:!0},light:{control:{type:"boolean"},defaultValue:!1},triggers:{control:{type:"select",options:["hover","click","manual"]},defaultValue:"hover"},autoHide:{control:{type:"boolean"},defaultValue:!1},hideDelay:{control:{type:"number"},defaultValue:3e3},showDelay:{control:{type:"number"},defaultValue:0},shown:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},offset:{control:{type:"range"},defaultValue:12},padding:{control:{type:"range"},defaultValue:0},outsideClick:{control:{type:"boolean"},defaultValue:!1},resizable:{control:{type:"boolean"},defaultValue:!1}},qe={Default:T,WithContentSlot:U,ToggleTemplate:Y,WithDirectives:Ct,defaultArgs:kt},Fe="wrapper";function Yt({components:t,...e}){return r(Fe,vt({},qe,e,{components:t,mdxType:"MDXLayout"}),r(Qt,{title:"Components/Tooltip",component:P,argTypes:{...kt},parameters:{viewMode:"docs"},mdxType:"Meta"}),r("h1",null,"Tooltip"),r("p",null,"A tooltip is a small pop-up window that appears when the user hovers over an element. It can be used to provide additional information or context about the element."),r("ul",null,r("li",{parentName:"ul"},r("p",{parentName:"li"},r("a",{parentName:"p",href:"#overview"},"Overview"))),r("li",{parentName:"ul"},r("p",{parentName:"li"},r("a",{parentName:"p",href:"#usage"},"Usage with props"))),r("li",{parentName:"ul"},r("p",{parentName:"li"},r("a",{parentName:"p",href:"#playground"},"Playground"))),r("li",{parentName:"ul"},r("p",{parentName:"li"},r("a",{parentName:"p",href:"#stories"},"Stories"))),r("li",{parentName:"ul"},r("p",{parentName:"li"},r("a",{parentName:"p",href:"#tips"},"Tips")))),r("h2",null,"Overview ",r("a",{id:"overview"})),r("p",null,"The tooltip component allows developers to easily add tooltips to their applications."),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"Overview",argTypes:{...T.argTypes},args:{buttonContent:"Hover me"},mdxType:"Story"},T.bind({}))),r("h3",null,"Playground ",r("a",{id:"playground"})),r("blockquote",null,r("p",{parentName:"blockquote"},"Changes you make in the controls will be reflected in the example above.")),r(Jt,{story:"Overview",exclude:/^(trigger|content|click|on.*)/,mdxType:"ArgsTable"}),r("h2",null,"Stories ",r("a",{id:"stories"})),r("h3",null,"Default"),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"Default",argTypes:{...T.argTypes},args:{buttonContent:"Hover me"},mdxType:"Story"},T.bind({}))),r("h3",null,"With Click Trigger"),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"With Click Trigger",argTypes:{...Y.argTypes},args:{triggers:"click",text:"Clicked!",outsideClick:!0},mdxType:"Story"},Y.bind({}))),r("h3",null,"With Manual Trigger"),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"With Manual Trigger",argTypes:{...T.argTypes},args:{triggers:"manual",dark:!1,light:!0,text:"Manual!",buttonContent:"Toggle Shown"},mdxType:"Story"},T.bind({}))),r("h3",null,"With Content Slot"),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"With Content Slot",argTypes:{...U.argTypes},args:{text:"",triggers:"hover"},mdxType:"Story"},U.bind({}))),r("h2",null,"With Directives"),r(H,{withSource:"open",mdxType:"Canvas"},r(R,{name:"With directives",argTypes:{},parameters:{controls:{disable:!0}},mdxType:"Story"},Ct.bind({}))),r("h2",null,"Usage with props ",r("a",{id:"usage"})),r("h2",null,"placement (optional) and text (optional)"),r("p",null,"It supports various ",r("strong",{parentName:"p"},"placement")," options such as top, right, bottom, and left, as well as more specific placements like top-start, top-end, right-start, right-end, bottom-start, bottom-end, left-start, and left-end. The ",r("strong",{parentName:"p"},"text")," prop allows developers to specify the text that will be displayed in the tooltip."),r("h2",null,"light (optional) and dark (optional)"),r("p",null,"The ",r("strong",{parentName:"p"},"light")," and ",r("strong",{parentName:"p"},"dark")," props can be used to change the color scheme of the tooltip."),r("h2",null,"autoHide (optional) and hideDelay (optional)"),r("p",null,"The ",r("strong",{parentName:"p"},"autoHide")," prop allows the tooltip to automatically hide after a specified delay, while the ",r("strong",{parentName:"p"},"hideDelay")," and showDelay props can be used to control the delay before the tooltip is hidden or shown."),r("h2",null,"shown (optional) and disabled (optional)"),r("p",null,"The ",r("strong",{parentName:"p"},"shown")," prop can be used to manually control the visibility of the tooltip, while the ",r("strong",{parentName:"p"},"disabled")," prop can be used to disable the tooltip entirely."),r("h2",null,"offset (optional), padding (optional) and outsideClick (optional)"),r("p",null,"The ",r("strong",{parentName:"p"},"offset")," and ",r("strong",{parentName:"p"},"padding")," props can be used to adjust the position of the tooltip, and the ",r("strong",{parentName:"p"},"outsideClick")," prop allows developers to specify whether the tooltip should be hidden when the user clicks outside of it."),r("h2",null,"resizable (optional)"),r("p",null,"The ",r("strong",{parentName:"p"},"resizable")," prop can be used to specify whether the tooltip should be resizable."),r("h2",null,"Tips ",r("a",{id:"tips"})),r("p",null,"\u{1F4A1} Tooltips are meant to provide additional information or context, so it's important to keep the text short and to the point. Avoid using long sentences or paragraphs of text, as it can make the tooltip difficult to read and may cause the user to lose interest."),r("p",null,"\u{1F4A1} The placement of the tooltip can greatly affect its effectiveness. Use clear and consistent placement across your application to make it easy for the user to understand where the tooltip will appear."),r("p",null,"\u{1F4A1} The delay before the tooltip appears and disappears can greatly affect the user's experience. Experiment with different values for the showDelay and hideDelay props to find the right balance between making the tooltip appear quickly enough to be useful but not so quickly that it becomes distracting."),r("p",null,"\u{1F4A1} Use the light and dark props to match the tooltip color scheme with the overall theme of your application. This will make the tooltip feel like a natural part of the interface."),r("p",null,"\u{1F4A1} The offset prop allows you to adjust the position of the tooltip relative to the trigger element. Use it to fine-tune the placement of the tooltip and make it feel more natural."),r("p",null,"\u{1F4A1} The padding prop can be used to add space around the tooltip text, which can make it easier to read."),r("p",null,"\u{1F4A1} This can improve the user experience by preventing the tooltip from staying visible when the user is no longer interacting with the trigger element."),r("p",null,"\u{1F4A1} Always test the tooltip with real users to see how it works in practice and to gather feedback on how it can be improved."))}Yt.isMDXComponent=!0;const pt=T.bind({});pt.storyName="Overview";pt.argTypes={...T.argTypes};pt.args={buttonContent:"Hover me"};pt.parameters={storySource:{source:`({
  buttonContent,
  ...args
}) => {
  return {
    components: {
      Tooltip,
      Button
    },

    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide')
      };
    },

    template: \`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Button variant="primary">\${buttonContent}</Button>
      </template>
    </Tooltip>
    \`
  };
}`}};const ut=T.bind({});ut.storyName="Default";ut.argTypes={...T.argTypes};ut.args={buttonContent:"Hover me"};ut.parameters={storySource:{source:`({
  buttonContent,
  ...args
}) => {
  return {
    components: {
      Tooltip,
      Button
    },

    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide')
      };
    },

    template: \`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Button variant="primary">\${buttonContent}</Button>
      </template>
    </Tooltip>
    \`
  };
}`}};const dt=Y.bind({});dt.storyName="With Click Trigger";dt.argTypes={...Y.argTypes};dt.args={triggers:"click",text:"Clicked!",outsideClick:!0};dt.parameters={storySource:{source:`args => {
  return {
    components: {
      Tooltip
    },

    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide')
      };
    },

    template: \`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <span>Toggle tooltip</span>
      </template>
    </Tooltip>
    \`
  };
}`}};const ft=T.bind({});ft.storyName="With Manual Trigger";ft.argTypes={...T.argTypes};ft.args={triggers:"manual",dark:!1,light:!0,text:"Manual!",buttonContent:"Toggle Shown"};ft.parameters={storySource:{source:`({
  buttonContent,
  ...args
}) => {
  return {
    components: {
      Tooltip,
      Button
    },

    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide')
      };
    },

    template: \`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Button variant="primary">\${buttonContent}</Button>
      </template>
    </Tooltip>
    \`
  };
}`}};const ht=U.bind({});ht.storyName="With Content Slot";ht.argTypes={...U.argTypes};ht.args={text:"",triggers:"hover"};ht.parameters={storySource:{source:`args => {
  return {
    components: {
      Tooltip,
      Icon
    },

    setup() {
      return {
        args,
        show: action('show'),
        hide: action('hide')
      };
    },

    template: \`
    <Tooltip
      v-bind="args"
      @show="show"
      @hide="hide"
    >
      <template #trigger>
        <Icon name="info" />
      </template>
      <template #content>
        <span style="background: red; color: #fff; padding: 8px;">This is a tooltip</span>
      </template>
    </Tooltip>
    \`
  };
}`}};const St=Ct.bind({});St.storyName="With directives";St.argTypes={};St.parameters={storySource:{source:`() => {
  return {
    components: {
      Button
    },
    directives: {
      tooltip: vTooltip
    },
    template: \`
    <Button 
      v-tooltip="{
        triggerContent: '<div>Hello World!</div>',
        text: 'Directive tooltip',
        autoHide: false,
        placement: 'right',
        offset: 30,
        }" 
    >
      This hidden
    </Button>
    \`
  };
}`},controls:{disable:!0}};const j={title:"Components/Tooltip",parameters:{viewMode:"docs"},component:P,argTypes:{...kt},includeStories:["overview","defaultStory","withClickTrigger","withManualTrigger","withContentSlot","withDirectives"]},ze={Overview:"overview",Default:"defaultStory","With Click Trigger":"withClickTrigger","With Manual Trigger":"withManualTrigger","With Content Slot":"withContentSlot","With directives":"withDirectives"};j.parameters=j.parameters||{};j.parameters.docs={...j.parameters.docs||{},page:()=>r(Gt,{mdxStoryNameToKey:ze,mdxComponentAnnotations:j},r(Yt,null))};const eo=["Default","WithContentSlot","ToggleTemplate","WithDirectives","defaultArgs","overview","defaultStory","withClickTrigger","withManualTrigger","withContentSlot","withDirectives"];export{T as Default,Y as ToggleTemplate,U as WithContentSlot,Ct as WithDirectives,eo as __namedExportsOrder,j as default,kt as defaultArgs,ut as defaultStory,pt as overview,dt as withClickTrigger,ht as withContentSlot,St as withDirectives,ft as withManualTrigger};
//# sourceMappingURL=Tooltip.stories.48913e68.js.map
