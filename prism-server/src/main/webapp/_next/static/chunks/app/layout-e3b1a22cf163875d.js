(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8843:(e,t,a)=>{Promise.resolve().then(a.bind(a,57562))},57562:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>e4});var r=a(95155),s=a(27731),i=a.n(s);a(19324);let n=[{title:"Dashboard",url:"/Prism/",icon:"dashboard",isActive:!1,shortcut:["d","d"],items:[]},{title:"Employee",url:"/Prism/personal/",icon:"user",shortcut:["e","e"],isActive:!1,items:[]}];var d=a(98263),l=a(76046),o=a(12115);let c=o.forwardRef((e,t)=>{var a;let{action:s,active:i,currentRootActionId:n}=e,d=o.useMemo(()=>{if(!n)return s.ancestors;let e=s.ancestors.findIndex(e=>e.id===n);return s.ancestors.slice(e+1)},[s.ancestors,n]);return(0,r.jsxs)("div",{ref:t,className:"relative z-10 flex cursor-pointer items-center justify-between px-4 py-3",children:[i&&(0,r.jsx)("div",{id:"kbar-result-item",className:"absolute inset-0 !z-[-1] border-l-4 border-sidebar-primary bg-sidebar-accent"}),(0,r.jsxs)("div",{className:"relative z-10 flex items-center gap-2",children:[s.icon&&s.icon,(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{children:[d.length>0&&d.map(e=>(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2 opacity-50",children:e.name}),(0,r.jsx)("span",{className:"mr-2",children:"›"})]},e.id)),(0,r.jsx)("span",{children:s.name})]}),s.subtitle&&(0,r.jsx)("span",{className:"text-sm text-muted-foreground",children:s.subtitle})]})]}),(null===(a=s.shortcut)||void 0===a?void 0:a.length)?(0,r.jsx)("div",{className:"relative z-10 grid grid-flow-col gap-1",children:s.shortcut.map((e,t)=>(0,r.jsx)("kbd",{className:"flex items-center gap-1 rounded-md border px-1.5 py-1 text-xs font-medium  shadow",children:e},e+t))}):null]})});function u(){let{results:e,rootActionId:t}=(0,d.useMatches)();return(0,r.jsx)(d.KBarResults,{items:e,onRender:e=>{let{item:a,active:s}=e;return"string"==typeof a?(0,r.jsx)("div",{className:"px-4 py-2 text-sm uppercase text-primary-foreground opacity-50",children:a}):(0,r.jsx)(c,{action:a,active:s,currentRootActionId:null!=t?t:""})}})}c.displayName="KBarResultItem";var m=a(28872);let f=()=>{let{theme:e,setTheme:t}=(0,m.D)();(0,d.useRegisterActions)([{id:"toggleTheme",name:"Toggle Theme",shortcut:["t","t"],section:"Theme",perform:()=>{t("light"===e?"dark":"light")}},{id:"setLightTheme",name:"Set Light Theme",section:"Theme",perform:()=>t("light")},{id:"setDarkTheme",name:"Set Dark Theme",section:"Theme",perform:()=>t("dark")}],[e])};function p(e){let{children:t}=e,a=(0,l.useRouter)(),s=e=>{a.push(e)},i=(0,o.useMemo)(()=>n.flatMap(e=>{var t,a;let r="#"!==e.url?{id:"".concat(e.title.toLowerCase(),"Action"),name:e.title,shortcut:e.shortcut,keywords:e.title.toLowerCase(),section:"Navigation",subtitle:"Go to ".concat(e.title),perform:()=>s(e.url)}:null,i=null!==(a=null===(t=e.items)||void 0===t?void 0:t.map(t=>({id:"".concat(t.title.toLowerCase(),"Action"),name:t.title,shortcut:t.shortcut,keywords:t.title.toLowerCase(),section:e.title,subtitle:"Go to ".concat(t.title),perform:()=>s(t.url)})))&&void 0!==a?a:[];return r?[r,...i]:i}),[]);return(0,r.jsx)(d.KBarProvider,{actions:i,children:(0,r.jsx)(h,{children:t})})}let h=e=>{let{children:t}=e;return f(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.KBarPortal,{children:(0,r.jsx)(d.KBarPositioner,{className:"scrollbar-hide fixed inset-0 z-[99999] bg-black/80  !p-0 backdrop-blur-sm",children:(0,r.jsx)(d.KBarAnimator,{className:"relative !mt-64 w-full max-w-[600px] !-translate-y-12 overflow-hidden rounded-lg border bg-background text-foreground shadow-lg",children:(0,r.jsxs)("div",{className:"bg-background",children:[(0,r.jsx)("div",{className:"border-x-0 border-b-2",children:(0,r.jsx)(d.KBarSearch,{className:"w-full border-none bg-background px-6 py-4 text-lg outline-none focus:outline-none focus:ring-0 focus:ring-offset-0"})}),(0,r.jsx)(u,{})]})})})}),t]})};var b=a(18369);let x=b.bL,g=b.R6,v=b.Ke;var w=a(12317),j=a(31027),N=a(13017),y=a(29602),k=a(14085),z=a(9955),R=a(89282),A=a(46020),S=a(40767);let C=A.bL;A.l9,A.bm;let _=A.ZL,L=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(A.hJ,{className:(0,y.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});L.displayName=A.hJ.displayName;let M=(0,j.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),B=o.forwardRef((e,t)=>{let{side:a="right",className:s,children:i,...n}=e;return(0,r.jsxs)(_,{children:[(0,r.jsx)(L,{}),(0,r.jsxs)(A.UC,{ref:t,className:(0,y.cn)(M({side:a}),s),...n,children:[(0,r.jsxs)(A.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(S.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]}),i]})]})});function D(e){let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,y.cn)("animate-pulse rounded-md bg-primary/10",t),...a})}B.displayName=A.UC.displayName,o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(A.hE,{ref:t,className:(0,y.cn)("text-lg font-semibold text-foreground",a),...s})}).displayName=A.hE.displayName,o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(A.VY,{ref:t,className:(0,y.cn)("text-sm text-muted-foreground",a),...s})}).displayName=A.VY.displayName;var P=a(19710);let T=P.Kq,E=P.bL,I=P.l9,K=o.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...i}=e;return(0,r.jsx)(P.ZL,{children:(0,r.jsx)(P.UC,{ref:t,sideOffset:s,className:(0,y.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})})});K.displayName=P.UC.displayName;let F=o.createContext(null);function O(){let e=o.useContext(F);if(!e)throw Error("useSidebar must be used within a SidebarProvider.");return e}let U=o.forwardRef((e,t)=>{let{defaultOpen:a=!0,open:s,onOpenChange:i,className:n,style:d,children:l,...c}=e,u=function(){let[e,t]=o.useState(void 0);return o.useEffect(()=>{let e=window.matchMedia("(max-width: ".concat(767,"px)")),a=()=>{t(window.innerWidth<768)};return e.addEventListener("change",a),t(window.innerWidth<768),()=>e.removeEventListener("change",a)},[]),!!e}(),[m,f]=o.useState(!1),[p,h]=o.useState(a),b=null!=s?s:p,x=o.useCallback(e=>{let t="function"==typeof e?e(b):e;i?i(t):h(t),document.cookie="".concat("sidebar:state","=").concat(t,"; path=/; max-age=").concat(604800)},[i,b]),g=o.useCallback(()=>u?f(e=>!e):x(e=>!e),[u,x,f]);o.useEffect(()=>{let e=e=>{"b"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),g())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[g]);let v=b?"expanded":"collapsed",w=o.useMemo(()=>({state:v,open:b,setOpen:x,isMobile:u,openMobile:m,setOpenMobile:f,toggleSidebar:g}),[v,b,x,u,m,f,g]);return(0,r.jsx)(F.Provider,{value:w,children:(0,r.jsx)(T,{delayDuration:0,children:(0,r.jsx)("div",{style:{"--sidebar-width":"16rem","--sidebar-width-icon":"3rem",...d},className:(0,y.cn)("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",n),ref:t,...c,children:l})})})});U.displayName="SidebarProvider";let G=o.forwardRef((e,t)=>{let{side:a="left",variant:s="sidebar",collapsible:i="offcanvas",className:n,children:d,...l}=e,{isMobile:o,state:c,openMobile:u,setOpenMobile:m}=O();return"none"===i?(0,r.jsx)("div",{className:(0,y.cn)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",n),ref:t,...l,children:d}):o?(0,r.jsx)(C,{open:u,onOpenChange:m,...l,children:(0,r.jsx)(B,{"data-sidebar":"sidebar","data-mobile":"true",className:"w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",style:{"--sidebar-width":"18rem"},side:a,children:(0,r.jsx)("div",{className:"flex h-full w-full flex-col",children:d})})}):(0,r.jsxs)("div",{ref:t,className:"group peer hidden md:block text-sidebar-foreground","data-state":c,"data-collapsible":"collapsed"===c?i:"","data-variant":s,"data-side":a,children:[(0,r.jsx)("div",{className:(0,y.cn)("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180","floating"===s||"inset"===s?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]")}),(0,r.jsx)("div",{className:(0,y.cn)("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex","left"===a?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]","floating"===s||"inset"===s?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",n),...l,children:(0,r.jsx)("div",{"data-sidebar":"sidebar",className:"flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",children:d})})]})});G.displayName="Sidebar";let X=o.forwardRef((e,t)=>{let{className:a,onClick:s,...i}=e,{toggleSidebar:n}=O();return(0,r.jsxs)(k.$,{ref:t,"data-sidebar":"trigger",variant:"ghost",size:"icon",className:(0,y.cn)("h-7 w-7",a),onClick:e=>{null==s||s(e),n()},...i,children:[(0,r.jsx)(N.A,{}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle Sidebar"})]})});X.displayName="SidebarTrigger";let V=o.forwardRef((e,t)=>{let{className:a,...s}=e,{toggleSidebar:i}=O();return(0,r.jsx)("button",{ref:t,"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:i,title:"Toggle Sidebar",className:(0,y.cn)("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",a),...s})});V.displayName="SidebarRail";let q=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("main",{ref:t,className:(0,y.cn)("relative flex min-h-svh flex-1 flex-col bg-background","peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",a),...s})});q.displayName="SidebarInset",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(z.p,{ref:t,"data-sidebar":"input",className:(0,y.cn)("h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",a),...s})}).displayName="SidebarInput";let Z=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"header",className:(0,y.cn)("flex flex-col gap-2 p-2",a),...s})});Z.displayName="SidebarHeader",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"footer",className:(0,y.cn)("flex flex-col gap-2 p-2",a),...s})}).displayName="SidebarFooter",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(R.Separator,{ref:t,"data-sidebar":"separator",className:(0,y.cn)("mx-2 w-auto bg-sidebar-border",a),...s})}).displayName="SidebarSeparator";let $=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"content",className:(0,y.cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",a),...s})});$.displayName="SidebarContent";let H=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"group",className:(0,y.cn)("relative flex w-full min-w-0 flex-col p-2",a),...s})});H.displayName="SidebarGroup";let J=o.forwardRef((e,t)=>{let{className:a,asChild:s=!1,...i}=e,n=s?w.DX:"div";return(0,r.jsx)(n,{ref:t,"data-sidebar":"group-label",className:(0,y.cn)("duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",a),...i})});J.displayName="SidebarGroupLabel",o.forwardRef((e,t)=>{let{className:a,asChild:s=!1,...i}=e,n=s?w.DX:"button";return(0,r.jsx)(n,{ref:t,"data-sidebar":"group-action",className:(0,y.cn)("absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","group-data-[collapsible=icon]:hidden",a),...i})}).displayName="SidebarGroupAction",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"group-content",className:(0,y.cn)("w-full text-sm",a),...s})}).displayName="SidebarGroupContent";let Q=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("ul",{ref:t,"data-sidebar":"menu",className:(0,y.cn)("flex w-full min-w-0 flex-col gap-1",a),...s})});Q.displayName="SidebarMenu";let W=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("li",{ref:t,"data-sidebar":"menu-item",className:(0,y.cn)("group/menu-item relative",a),...s})});W.displayName="SidebarMenuItem";let Y=(0,j.F)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}}),ee=o.forwardRef((e,t)=>{let{asChild:a=!1,isActive:s=!1,variant:i="default",size:n="default",tooltip:d,className:l,...o}=e,c=a?w.DX:"button",{isMobile:u,state:m}=O(),f=(0,r.jsx)(c,{ref:t,"data-sidebar":"menu-button","data-size":n,"data-active":s,className:(0,y.cn)(Y({variant:i,size:n}),l),...o});return d?("string"==typeof d&&(d={children:d}),(0,r.jsxs)(E,{children:[(0,r.jsx)(I,{asChild:!0,children:f}),(0,r.jsx)(K,{side:"right",align:"center",hidden:"collapsed"!==m||u,...d})]})):f});ee.displayName="SidebarMenuButton",o.forwardRef((e,t)=>{let{className:a,asChild:s=!1,showOnHover:i=!1,...n}=e,d=s?w.DX:"button";return(0,r.jsx)(d,{ref:t,"data-sidebar":"menu-action",className:(0,y.cn)("absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 after:md:hidden","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",i&&"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",a),...n})}).displayName="SidebarMenuAction",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,"data-sidebar":"menu-badge",className:(0,y.cn)("absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none","peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",a),...s})}).displayName="SidebarMenuBadge",o.forwardRef((e,t)=>{let{className:a,showIcon:s=!1,...i}=e,n=o.useMemo(()=>"".concat(Math.floor(40*Math.random())+50,"%"),[]);return(0,r.jsxs)("div",{ref:t,"data-sidebar":"menu-skeleton",className:(0,y.cn)("rounded-md h-8 flex gap-2 px-2 items-center",a),...i,children:[s&&(0,r.jsx)(D,{className:"size-4 rounded-md","data-sidebar":"menu-skeleton-icon"}),(0,r.jsx)(D,{className:"h-4 flex-1 max-w-[--skeleton-width]","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":n}})]})}).displayName="SidebarMenuSkeleton";let et=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("ul",{ref:t,"data-sidebar":"menu-sub",className:(0,y.cn)("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",a),...s})});et.displayName="SidebarMenuSub";let ea=o.forwardRef((e,t)=>{let{...a}=e;return(0,r.jsx)("li",{ref:t,...a})});ea.displayName="SidebarMenuSubItem";let er=o.forwardRef((e,t)=>{let{asChild:a=!1,size:s="md",isActive:i,className:n,...d}=e,l=a?w.DX:"a";return(0,r.jsx)(l,{ref:t,"data-sidebar":"menu-sub-button","data-size":s,"data-active":i,className:(0,y.cn)("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground","data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground","sm"===s&&"text-xs","md"===s&&"text-sm","group-data-[collapsible=icon]:hidden",n),...d})});er.displayName="SidebarMenuSubButton";var es=a(40514),ei=a(46967),en=a(48173),ed=a.n(en),el=a(30858),eo=a(88218),ec=a(8427),eu=a(5870),em=a(14505),ef=a(29597),ep=a(93518),eh=a(19993),eb=a(72586),ex=a(14081),eg=a(86659),ev=a(51600),ew=a(73250),ej=a(27554),eN=a(68236),ey=a(16233),ek=a(51055),ez=a(33473),eR=a(23950),eA=a(1466),eS=a(99053),eC=a(86835),e_=a(6601),eL=a(25967),eM=a(22104),eB=a(1825),eD=a(76148),eP=a(98867);let eT={dashboard:el.A,logo:eo.A,login:ec.A,close:S.A,product:eu.A,spinner:em.A,kanban:ef.A,chevronLeft:ep.A,chevronRight:ei.A,trash:eh.A,employee:eb.A,post:ex.A,page:eg.A,userPen:ev.A,user2:ew.A,media:ej.A,settings:eN.A,billing:ey.A,ellipsis:ek.A,add:ez.A,warning:eR.A,user:eA.A,arrowRight:eS.A,help:eC.A,pizza:e_.A,sun:eL.A,moon:eM.A,laptop:eB.A,gitHub:e=>{let{...t}=e;return(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,r.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:eD.A,check:eP.A},eE={name:"PRISM",logo:es.A,plan:"Information Management"};function eI(){let e=(0,l.usePathname)();return(0,r.jsxs)(G,{collapsible:"icon",children:[(0,r.jsx)(Z,{children:(0,r.jsxs)("div",{className:"flex gap-2 py-2 text-sidebar-accent-foreground ",children:[(0,r.jsx)("div",{className:"flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",children:(0,r.jsx)(eE.logo,{className:"size-4"})}),(0,r.jsxs)("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[(0,r.jsx)("span",{className:"truncate font-semibold",children:eE.name}),(0,r.jsx)("span",{className:"truncate text-xs",children:eE.plan})]})]})}),(0,r.jsx)($,{className:"overflow-x-hidden",children:(0,r.jsxs)(H,{children:[(0,r.jsx)(J,{children:"Overview"}),(0,r.jsx)(Q,{children:n.map(t=>{var a,s;let i=t.icon?eT[t.icon]:eT.logo;return(null==t?void 0:t.items)&&(null==t?void 0:null===(a=t.items)||void 0===a?void 0:a.length)>0?(0,r.jsx)(x,{asChild:!0,defaultOpen:t.isActive,className:"group/collapsible",children:(0,r.jsxs)(W,{children:[(0,r.jsx)(g,{asChild:!0,children:(0,r.jsxs)(ee,{tooltip:t.title,isActive:e===t.url,children:[t.icon&&(0,r.jsx)(i,{}),(0,r.jsx)("span",{children:t.title}),(0,r.jsx)(ei.A,{className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),(0,r.jsx)(v,{children:(0,r.jsx)(et,{children:null===(s=t.items)||void 0===s?void 0:s.map(t=>(0,r.jsx)(ea,{children:(0,r.jsx)(er,{asChild:!0,isActive:e===t.url,children:(0,r.jsx)(ed(),{href:t.url,children:(0,r.jsx)("span",{children:t.title})})})},t.title))})})]})},t.title):(0,r.jsx)(W,{children:(0,r.jsx)(ee,{asChild:!0,tooltip:t.title,isActive:e===t.url,children:(0,r.jsxs)(ed(),{href:t.url,children:[(0,r.jsx)(i,{}),(0,r.jsx)("span",{children:t.title})]})})},t.title)})})]})}),(0,r.jsx)(V,{})]})}a(84858);let eK=o.forwardRef((e,t)=>{let{...a}=e;return(0,r.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...a})});eK.displayName="Breadcrumb";let eF=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("ol",{ref:t,className:(0,y.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...s})});eF.displayName="BreadcrumbList";let eO=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("li",{ref:t,className:(0,y.cn)("inline-flex items-center gap-1.5",a),...s})});eO.displayName="BreadcrumbItem";let eU=o.forwardRef((e,t)=>{let{asChild:a,className:s,...i}=e,n=a?w.DX:"a";return(0,r.jsx)(n,{ref:t,className:(0,y.cn)("transition-colors hover:text-foreground",s),...i})});eU.displayName="BreadcrumbLink";let eG=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,y.cn)("font-normal text-foreground",a),...s})});eG.displayName="BreadcrumbPage";let eX=e=>{let{children:t,className:a,...s}=e;return(0,r.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,y.cn)("[&>svg]:w-3.5 [&>svg]:h-3.5",a),...s,children:null!=t?t:(0,r.jsx)(ei.A,{})})};eX.displayName="BreadcrumbSeparator";let eV={"/dashboard":[{title:"Dashboard",link:"/dashboard"}],"/dashboard/employee":[{title:"Dashboard",link:"/dashboard"},{title:"Employee",link:"/dashboard/employee"}],"/dashboard/product":[{title:"Dashboard",link:"/dashboard"},{title:"Product",link:"/dashboard/product"}]};var eq=a(82022);function eZ(){let e=function(){let e=(0,l.usePathname)();return(0,o.useMemo)(()=>{if(eV[e])return eV[e];let t=e.split("/").filter(Boolean);return t.map((e,a)=>{let r="/".concat(t.slice(0,a+1).join("/"));return{title:e.charAt(0).toUpperCase()+e.slice(1),link:r}})},[e])}();return 0===e.length?null:(0,r.jsx)(eK,{children:(0,r.jsx)(eF,{children:e.map((t,a)=>(0,r.jsxs)(o.Fragment,{children:[a!==e.length-1&&(0,r.jsx)(eO,{className:"hidden md:block",children:(0,r.jsx)(eU,{href:t.link,children:t.title.replace(".html","")})}),a<e.length-1&&(0,r.jsx)(eX,{className:"hidden md:block",children:(0,r.jsx)(eq.A,{})}),a===e.length-1&&(0,r.jsx)(eG,{children:t.title.replace(".html","")})]},t.title.replace(".html","")))})})}var e$=a(20853);function eH(){let{query:e}=(0,d.useKBar)();return(0,r.jsx)("div",{className:"w-full space-y-2",children:(0,r.jsxs)(k.$,{variant:"outline",className:"relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64",onClick:e.toggle,children:[(0,r.jsx)(e$.A,{className:"mr-2 h-4 w-4"}),"Search...",(0,r.jsxs)("kbd",{className:"pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex",children:[(0,r.jsx)("span",{className:"text-xs",children:"⌘"}),"K"]})]})})}var eJ=a(87365),eQ=a(20750);function eW(e){let{}=e,{setTheme:t}=(0,m.D)();return(0,r.jsxs)(eQ.rI,{children:[(0,r.jsx)(eQ.ty,{asChild:!0,children:(0,r.jsxs)(k.$,{variant:"outline",size:"icon",children:[(0,r.jsx)(eJ.gLX,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,r.jsx)(eJ.rRK,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,r.jsxs)(eQ.SQ,{align:"end",children:[(0,r.jsx)(eQ._2,{onClick:()=>t("light"),children:"Light"}),(0,r.jsx)(eQ._2,{onClick:()=>t("dark"),children:"Dark"}),(0,r.jsx)(eQ._2,{onClick:()=>t("system"),children:"System"})]})]})}function eY(){return(0,r.jsxs)("header",{className:"flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 px-4",children:[(0,r.jsx)(X,{className:"-ml-1"}),(0,r.jsx)(R.Separator,{orientation:"vertical",className:"mr-2 h-4"}),(0,r.jsx)(eZ,{})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 px-4",children:[(0,r.jsx)("div",{className:"hidden md:flex",children:(0,r.jsx)(eH,{})}),(0,r.jsx)(eW,{})]})]})}var e0=a(91325),e2=a.n(e0),e1=a(30814);let e5=e=>{let{...t}=e,{theme:a="system"}=(0,m.D)();return(0,r.jsx)(e1.l$,{theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})};function e3(e){let{children:t,...a}=e;return(0,r.jsx)(m.N,{...a,children:t})}function e6(e){let{children:t}=e;return(0,r.jsx)(e3,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:t})}function e4(e){let{children:t}=e;return(0,r.jsx)("html",{lang:"en",className:"".concat(i().className),suppressHydrationWarning:!0,children:(0,r.jsxs)("body",{className:"overflow-hidden",children:[(0,r.jsx)(e2(),{showSpinner:!1}),(0,r.jsxs)(e6,{children:[(0,r.jsx)(e5,{}),(0,r.jsx)(p,{children:(0,r.jsxs)(U,{children:[(0,r.jsx)(eI,{}),(0,r.jsxs)(q,{children:[(0,r.jsx)(eY,{}),t]})]})})]})]})})}},14085:(e,t,a)=>{"use strict";a.d(t,{$:()=>o,r:()=>l});var r=a(95155),s=a(12115),i=a(12317),n=a(31027),d=a(29602);let l=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:o=!1,...c}=e,u=o?i.DX:"button";return(0,r.jsx)(u,{className:(0,d.cn)(l({variant:s,size:n,className:a})),ref:t,...c})});o.displayName="Button"},20750:(e,t,a)=>{"use strict";a.d(t,{SQ:()=>m,_2:()=>f,lp:()=>p,rI:()=>c,ty:()=>u});var r=a(95155),s=a(12115),i=a(29053),n=a(46967),d=a(98867),l=a(33565),o=a(29602);let c=i.bL,u=i.l9;i.YJ,i.ZL,i.Pb,i.z6,s.forwardRef((e,t)=>{let{className:a,inset:s,children:d,...l}=e;return(0,r.jsxs)(i.ZP,{ref:t,className:(0,o.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s&&"pl-8",a),...l,children:[d,(0,r.jsx)(n.A,{className:"ml-auto"})]})}).displayName=i.ZP.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.G5,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})}).displayName=i.G5.displayName;let m=s.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...n}=e;return(0,r.jsx)(i.ZL,{children:(0,r.jsx)(i.UC,{ref:t,sideOffset:s,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})})});m.displayName=i.UC.displayName;let f=s.forwardRef((e,t)=>{let{className:a,inset:s,...n}=e;return(0,r.jsx)(i.q7,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",s&&"pl-8",a),...n})});f.displayName=i.q7.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,checked:n,...l}=e;return(0,r.jsxs)(i.H_,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:n,...l,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(i.VF,{children:(0,r.jsx)(d.A,{className:"h-4 w-4"})})}),s]})}).displayName=i.H_.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(i.hN,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(i.VF,{children:(0,r.jsx)(l.A,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=i.hN.displayName;let p=s.forwardRef((e,t)=>{let{className:a,inset:s,...n}=e;return(0,r.jsx)(i.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...n})});p.displayName=i.JU.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=i.wv.displayName},9955:(e,t,a)=>{"use strict";a.d(t,{p:()=>n});var r=a(95155),s=a(12115),i=a(29602);let n=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});n.displayName="Input"},89282:(e,t,a)=>{"use strict";a.d(t,{Separator:()=>d});var r=a(95155),s=a(12115),i=a(90434),n=a(29602);let d=s.forwardRef((e,t)=>{let{className:a,orientation:s="horizontal",decorative:d=!0,...l}=e;return(0,r.jsx)(i.b,{ref:t,decorative:d,orientation:s,className:(0,n.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",a),...l})});d.displayName=i.b.displayName},29602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var r=a(43463),s=a(69795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},19324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[146,105,365,55,404,132,441,517,358],()=>t(8843)),_N_E=e.O()}]);