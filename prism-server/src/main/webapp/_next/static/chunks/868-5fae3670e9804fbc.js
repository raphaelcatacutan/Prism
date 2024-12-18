"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[868],{61786:(e,r,t)=>{t.d(r,{q:()=>o});function o(e,[r,t]){return Math.min(t,Math.max(r,e))}},21868:(e,r,t)=>{t.d(r,{LM:()=>q,OK:()=>K,VM:()=>C,bL:()=>G,lr:()=>H});var o=t(12115),n=t(23360),l=t(17028),i=t(18166),a=t(88068),s=t(41524),c=t(4256),d=t(46611),u=t(61786),p=t(93610),f=t(95155),h="ScrollArea",[v,w]=(0,i.A)(h),[b,g]=v(h),m=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:i,scrollHideDelay:s=600,...d}=e,[u,p]=o.useState(null),[h,v]=o.useState(null),[w,g]=o.useState(null),[m,S]=o.useState(null),[E,x]=o.useState(null),[C,y]=o.useState(0),[T,R]=o.useState(0),[L,P]=o.useState(!1),[_,j]=o.useState(!1),D=(0,a.s)(r,e=>p(e)),A=(0,c.jH)(i);return(0,f.jsx)(b,{scope:t,type:l,dir:A,scrollHideDelay:s,scrollArea:u,viewport:h,onViewportChange:v,content:w,onContentChange:g,scrollbarX:m,onScrollbarXChange:S,scrollbarXEnabled:L,onScrollbarXEnabledChange:P,scrollbarY:E,onScrollbarYChange:x,scrollbarYEnabled:_,onScrollbarYEnabledChange:j,onCornerWidthChange:y,onCornerHeightChange:R,children:(0,f.jsx)(n.sG.div,{dir:A,...d,ref:D,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":T+"px",...e.style}})})});m.displayName=h;var S="ScrollAreaViewport",E=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,children:l,nonce:i,...s}=e,c=g(S,t),d=o.useRef(null),u=(0,a.s)(r,d,c.onViewportChange);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:i}),(0,f.jsx)(n.sG.div,{"data-radix-scroll-area-viewport":"",...s,ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,f.jsx)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});E.displayName=S;var x="ScrollAreaScrollbar",C=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,l=g(x,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return o.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,f.jsx)(y,{...n,ref:r,forceMount:t}):"scroll"===l.type?(0,f.jsx)(T,{...n,ref:r,forceMount:t}):"auto"===l.type?(0,f.jsx)(R,{...n,ref:r,forceMount:t}):"always"===l.type?(0,f.jsx)(L,{...n,ref:r}):null});C.displayName=x;var y=o.forwardRef((e,r)=>{let{forceMount:t,...n}=e,i=g(x,e.__scopeScrollArea),[a,s]=o.useState(!1);return o.useEffect(()=>{let e=i.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),s(!0)},o=()=>{r=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",o),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",o)}}},[i.scrollArea,i.scrollHideDelay]),(0,f.jsx)(l.C,{present:t||a,children:(0,f.jsx)(R,{"data-state":a?"visible":"hidden",...n,ref:r})})}),T=o.forwardRef((e,r)=>{var t,n;let{forceMount:i,...a}=e,s=g(x,e.__scopeScrollArea),c="horizontal"===e.orientation,d=V(()=>h("SCROLL_END"),100),[u,h]=(t="hidden",n={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},o.useReducer((e,r)=>{let t=n[e][r];return null!=t?t:e},t));return o.useEffect(()=>{if("idle"===u){let e=window.setTimeout(()=>h("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,s.scrollHideDelay,h]),o.useEffect(()=>{let e=s.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],o=()=>{let o=e[r];t!==o&&(h("SCROLL"),d()),t=o};return e.addEventListener("scroll",o),()=>e.removeEventListener("scroll",o)}},[s.viewport,c,h,d]),(0,f.jsx)(l.C,{present:i||"hidden"!==u,children:(0,f.jsx)(L,{"data-state":"hidden"===u?"hidden":"visible",...a,ref:r,onPointerEnter:(0,p.m)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,p.m)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})})}),R=o.forwardRef((e,r)=>{let t=g(x,e.__scopeScrollArea),{forceMount:n,...i}=e,[a,s]=o.useState(!1),c="horizontal"===e.orientation,d=V(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;s(c?e:r)}},10);return B(t.viewport,d),B(t.content,d),(0,f.jsx)(l.C,{present:n||a,children:(0,f.jsx)(L,{"data-state":a?"visible":"hidden",...i,ref:r})})}),L=o.forwardRef((e,r)=>{let{orientation:t="vertical",...n}=e,l=g(x,e.__scopeScrollArea),i=o.useRef(null),a=o.useRef(0),[s,c]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=Y(s.viewport,s.content),u={...n,sizes:s,onSizesChange:c,hasThumb:!!(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function p(e,r){return function(e,r,t){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",n=k(t),l=r||n/2,i=t.scrollbar.paddingStart+l,a=t.scrollbar.size-t.scrollbar.paddingEnd-(n-l),s=t.content-t.viewport;return M([i,a],"ltr"===o?[0,s]:[-1*s,0])(e)}(e,a.current,s,r)}return"horizontal"===t?(0,f.jsx)(P,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=U(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=p(e,l.dir))}}):"vertical"===t?(0,f.jsx)(_,{...u,ref:r,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=U(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=p(e))}}):null}),P=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=g(x,e.__scopeScrollArea),[s,c]=o.useState(),d=o.useRef(null),u=(0,a.s)(r,d,i.onScrollbarXChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,f.jsx)(A,{"data-orientation":"horizontal",...l,ref:u,sizes:t,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":k(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollLeft+r.deltaX;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&n({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}})}),_=o.forwardRef((e,r)=>{let{sizes:t,onSizesChange:n,...l}=e,i=g(x,e.__scopeScrollArea),[s,c]=o.useState(),d=o.useRef(null),u=(0,a.s)(r,d,i.onScrollbarYChange);return o.useEffect(()=>{d.current&&c(getComputedStyle(d.current))},[d]),(0,f.jsx)(A,{"data-orientation":"vertical",...l,ref:u,sizes:t,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":k(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(i.viewport){let o=i.viewport.scrollTop+r.deltaY;e.onWheelScroll(o),function(e,r){return e>0&&e<r}(o,t)&&r.preventDefault()}},onResize:()=>{d.current&&i.viewport&&s&&n({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}})}),[j,D]=v(x),A=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:u,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:w,onResize:b,...m}=e,S=g(x,t),[E,C]=o.useState(null),y=(0,a.s)(r,e=>C(e)),T=o.useRef(null),R=o.useRef(""),L=S.viewport,P=l.content-l.viewport,_=(0,s.c)(w),D=(0,s.c)(h),A=V(b,10);function N(e){T.current&&v({x:e.clientX-T.current.left,y:e.clientY-T.current.top})}return o.useEffect(()=>{let e=e=>{let r=e.target;(null==E?void 0:E.contains(r))&&_(e,P)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[L,E,P,_]),o.useEffect(D,[l,D]),B(E,A),B(S.content,A),(0,f.jsx)(j,{scope:t,scrollbar:E,hasThumb:i,onThumbChange:(0,s.c)(c),onThumbPointerUp:(0,s.c)(d),onThumbPositionChange:D,onThumbPointerDown:(0,s.c)(u),children:(0,f.jsx)(n.sG.div,{...m,ref:y,style:{position:"absolute",...m.style},onPointerDown:(0,p.m)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),T.current=E.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),N(e))}),onPointerMove:(0,p.m)(e.onPointerMove,N),onPointerUp:(0,p.m)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,S.viewport&&(S.viewport.style.scrollBehavior=""),T.current=null})})})}),N="ScrollAreaThumb",H=o.forwardRef((e,r)=>{let{forceMount:t,...o}=e,n=D(N,e.__scopeScrollArea);return(0,f.jsx)(l.C,{present:t||n.hasThumb,children:(0,f.jsx)(z,{ref:r,...o})})}),z=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,style:l,...i}=e,s=g(N,t),c=D(N,t),{onThumbPositionChange:d}=c,u=(0,a.s)(r,e=>c.onThumbChange(e)),h=o.useRef(void 0),v=V(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{let e=s.viewport;if(e){let r=()=>{if(v(),!h.current){let r=F(e,d);h.current=r,d()}};return d(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[s.viewport,v,d]),(0,f.jsx)(n.sG.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,p.m)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,o=e.clientY-r.top;c.onThumbPointerDown({x:t,y:o})}),onPointerUp:(0,p.m)(e.onPointerUp,c.onThumbPointerUp)})});H.displayName=N;var W="ScrollAreaCorner",O=o.forwardRef((e,r)=>{let t=g(W,e.__scopeScrollArea),o=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&o?(0,f.jsx)(I,{...e,ref:r}):null});O.displayName=W;var I=o.forwardRef((e,r)=>{let{__scopeScrollArea:t,...l}=e,i=g(W,t),[a,s]=o.useState(0),[c,d]=o.useState(0),u=!!(a&&c);return B(i.scrollbarX,()=>{var e;let r=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(r),d(r)}),B(i.scrollbarY,()=>{var e;let r=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(r),s(r)}),u?(0,f.jsx)(n.sG.div,{...l,ref:r,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function X(e){return e?parseInt(e,10):0}function Y(e,r){let t=e/r;return isNaN(t)?0:t}function k(e){let r=Y(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function U(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",o=k(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,i=r.content-r.viewport,a=(0,u.q)(e,"ltr"===t?[0,i]:[-1*i,0]);return M([0,i],[0,l-o])(a)}function M(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let o=(r[1]-r[0])/(e[1]-e[0]);return r[0]+o*(t-e[0])}}var F=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},t={left:e.scrollLeft,top:e.scrollTop},o=0;return!function n(){let l={left:e.scrollLeft,top:e.scrollTop},i=t.left!==l.left,a=t.top!==l.top;(i||a)&&r(),t=l,o=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(o)};function V(e,r){let t=(0,s.c)(e),n=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(n.current),[]),o.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,r)},[t,r])}function B(e,r){let t=(0,s.c)(r);(0,d.N)(()=>{let r=0;if(e){let o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,t])}var G=m,q=E,K=O}}]);