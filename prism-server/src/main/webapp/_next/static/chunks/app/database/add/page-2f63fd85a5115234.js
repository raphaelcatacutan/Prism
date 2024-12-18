(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{22304:(e,r,a)=>{Promise.resolve().then(a.bind(a,92775)),Promise.resolve().then(a.bind(a,3392))},92775:(e,r,a)=>{"use strict";a.d(r,{default:()=>q});var s=a(95155),t=a(12115),l=a(85060),n=a(69606),d=a(43415),i=a(14085),o=a(12317),c=a(29602),m=a(46195);let u=(0,a(31027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(m.b,{ref:r,className:(0,c.cn)(u(),a),...t})});f.displayName=m.b.displayName;let x=n.Op,p=t.createContext({}),h=e=>{let{...r}=e;return(0,s.jsx)(p.Provider,{value:{name:r.name},children:(0,s.jsx)(n.xI,{...r})})},j=()=>{let e=t.useContext(p),r=t.useContext(y),{getFieldState:a,formState:s}=(0,n.xW)(),l=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:d}=r;return{id:d,name:e.name,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...l}},y=t.createContext({}),b=t.forwardRef((e,r)=>{let{className:a,...l}=e,n=t.useId();return(0,s.jsx)(y.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:r,className:(0,c.cn)("space-y-2",a),...l})})});b.displayName="FormItem";let v=t.forwardRef((e,r)=>{let{className:a,...t}=e,{error:l,formItemId:n}=j();return(0,s.jsx)(f,{ref:r,className:(0,c.cn)(l&&"text-destructive",a),htmlFor:n,...t})});v.displayName="FormLabel";let g=t.forwardRef((e,r)=>{let{...a}=e,{error:t,formItemId:l,formDescriptionId:n,formMessageId:d}=j();return(0,s.jsx)(o.DX,{ref:r,id:l,"aria-describedby":t?"".concat(n," ").concat(d):"".concat(n),"aria-invalid":!!t,...a})});g.displayName="FormControl",t.forwardRef((e,r)=>{let{className:a,...t}=e,{formDescriptionId:l}=j();return(0,s.jsx)("p",{ref:r,id:l,className:(0,c.cn)("text-[0.8rem] text-muted-foreground",a),...t})}).displayName="FormDescription";let N=t.forwardRef((e,r)=>{let{className:a,children:t,...l}=e,{error:n,formMessageId:d}=j(),i=n?String(null==n?void 0:n.message):t;return i?(0,s.jsx)("p",{ref:r,id:d,className:(0,c.cn)("text-[0.8rem] font-medium text-destructive",a),...l,children:i}):null});N.displayName="FormMessage";var w=a(9955),C=a(50745),R=a(852),F=a(33565);let k=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(R.bL,{className:(0,c.cn)("grid gap-2",a),...t,ref:r})});k.displayName=R.bL.displayName;let P=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(R.q7,{ref:r,className:(0,c.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),...t,children:(0,s.jsx)(R.C1,{className:"flex items-center justify-center",children:(0,s.jsx)(F.A,{className:"h-3.5 w-3.5 fill-primary"})})})});P.displayName=R.q7.displayName;var I=a(35007);let _=d.Ik({name:d.Yj().min(2,{message:"Name must be at least 2 characters."}),country:d.Yj({required_error:"Please select a country."}),email:d.Yj().email({message:"Please enter a valid email address."}),company:d.Yj().min(1,{message:"Company name is required."}),gender:d.k5(["male","female","other"],{required_error:"Please select a gender."})});function q(){let e=(0,n.mN)({resolver:(0,l.u)(_),defaultValues:{name:"",country:"",email:"",company:"",gender:void 0}});return(0,s.jsxs)(I.Zp,{className:"mx-auto w-full",children:[(0,s.jsx)(I.aR,{children:(0,s.jsx)(I.ZB,{className:"text-left text-2xl font-bold",children:"Employee Information"})}),(0,s.jsx)(I.Wu,{children:(0,s.jsx)(x,{...e,children:(0,s.jsxs)("form",{onSubmit:e.handleSubmit(function(e){console.log(e)}),className:"space-y-8",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,s.jsx)(h,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Name"}),(0,s.jsx)(g,{children:(0,s.jsx)(w.p,{placeholder:"Enter your name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(h,{control:e.control,name:"country",render:e=>{let{field:r}=e;return(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Country"}),(0,s.jsxs)(C.l6,{onValueChange:r.onChange,value:r.value,children:[(0,s.jsx)(g,{children:(0,s.jsx)(C.bq,{children:(0,s.jsx)(C.yv,{placeholder:"Select a country"})})}),(0,s.jsxs)(C.gC,{children:[(0,s.jsx)(C.eb,{value:"usa",children:"USA"}),(0,s.jsx)(C.eb,{value:"uk",children:"UK"}),(0,s.jsx)(C.eb,{value:"canada",children:"Canada"}),(0,s.jsx)(C.eb,{value:"australia",children:"Australia"}),(0,s.jsx)(C.eb,{value:"germany",children:"Germany"}),(0,s.jsx)(C.eb,{value:"france",children:"France"}),(0,s.jsx)(C.eb,{value:"japan",children:"Japan"}),(0,s.jsx)(C.eb,{value:"brazil",children:"Brazil"})]})]}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(h,{control:e.control,name:"email",render:e=>{let{field:r}=e;return(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Email"}),(0,s.jsx)(g,{children:(0,s.jsx)(w.p,{type:"email",placeholder:"Enter your email",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(h,{control:e.control,name:"company",render:e=>{let{field:r}=e;return(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Company"}),(0,s.jsx)(g,{children:(0,s.jsx)(w.p,{placeholder:"Enter your company",...r})}),(0,s.jsx)(N,{})]})}})]}),(0,s.jsx)(h,{control:e.control,name:"gender",render:e=>{let{field:r}=e;return(0,s.jsxs)(b,{className:"space-y-3",children:[(0,s.jsx)(v,{children:"Gender"}),(0,s.jsx)(g,{children:(0,s.jsxs)(k,{onValueChange:r.onChange,value:r.value,className:"flex space-x-4",children:[(0,s.jsxs)(b,{className:"flex items-center space-x-2",children:[(0,s.jsx)(g,{children:(0,s.jsx)(P,{value:"male"})}),(0,s.jsx)(v,{className:"font-normal",children:"Male"})]}),(0,s.jsxs)(b,{className:"flex items-center space-x-2",children:[(0,s.jsx)(g,{children:(0,s.jsx)(P,{value:"female"})}),(0,s.jsx)(v,{className:"font-normal",children:"Female"})]}),(0,s.jsxs)(b,{className:"flex items-center space-x-2",children:[(0,s.jsx)(g,{children:(0,s.jsx)(P,{value:"other"})}),(0,s.jsx)(v,{className:"font-normal",children:"Other"})]})]})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(i.$,{type:"submit",children:"Submit"})]})})})]})}},14085:(e,r,a)=>{"use strict";a.d(r,{$:()=>o,r:()=>i});var s=a(95155),t=a(12115),l=a(12317),n=a(31027),d=a(29602);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=t.forwardRef((e,r)=>{let{className:a,variant:t,size:n,asChild:o=!1,...c}=e,m=o?l.DX:"button";return(0,s.jsx)(m,{className:(0,d.cn)(i({variant:t,size:n,className:a})),ref:r,...c})});o.displayName="Button"},35007:(e,r,a)=>{"use strict";a.d(r,{BT:()=>o,Wu:()=>c,ZB:()=>i,Zp:()=>n,aR:()=>d,wL:()=>m});var s=a(95155),t=a(12115),l=a(29602);let n=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...t})});n.displayName="Card";let d=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",a),...t})});d.displayName="CardHeader";let i=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("font-semibold leading-none tracking-tight",a),...t})});i.displayName="CardTitle";let o=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",a),...t})});o.displayName="CardDescription";let c=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",a),...t})});c.displayName="CardContent";let m=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",a),...t})});m.displayName="CardFooter"},9955:(e,r,a)=>{"use strict";a.d(r,{p:()=>n});var s=a(95155),t=a(12115),l=a(29602);let n=t.forwardRef((e,r)=>{let{className:a,type:t,...n}=e;return(0,s.jsx)("input",{type:t,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:r,...n})});n.displayName="Input"},3392:(e,r,a)=>{"use strict";a.d(r,{$:()=>i,ScrollArea:()=>d});var s=a(95155),t=a(12115),l=a(21868),n=a(29602);let d=t.forwardRef((e,r)=>{let{className:a,children:t,...d}=e;return(0,s.jsxs)(l.bL,{ref:r,className:(0,n.cn)("relative overflow-hidden",a),...d,children:[(0,s.jsx)(l.LM,{className:"h-full w-full rounded-[inherit]",children:t}),(0,s.jsx)(i,{}),(0,s.jsx)(l.OK,{})]})});d.displayName=l.bL.displayName;let i=t.forwardRef((e,r)=>{let{className:a,orientation:t="vertical",...d}=e;return(0,s.jsx)(l.VM,{ref:r,orientation:t,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===t&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...d,children:(0,s.jsx)(l.lr,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=l.VM.displayName},50745:(e,r,a)=>{"use strict";a.d(r,{bq:()=>u,eb:()=>h,gC:()=>p,l6:()=>c,yv:()=>m});var s=a(95155),t=a(12115),l=a(9116),n=a(51719),d=a(91902),i=a(98867),o=a(29602);let c=l.bL;l.YJ;let m=l.WT,u=t.forwardRef((e,r)=>{let{className:a,children:t,...d}=e;return(0,s.jsxs)(l.l9,{ref:r,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",a),...d,children:[t,(0,s.jsx)(l.In,{asChild:!0,children:(0,s.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]})});u.displayName=l.l9.displayName;let f=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(l.PP,{ref:r,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...t,children:(0,s.jsx)(d.A,{className:"h-4 w-4"})})});f.displayName=l.PP.displayName;let x=t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(l.wn,{ref:r,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...t,children:(0,s.jsx)(n.A,{className:"h-4 w-4"})})});x.displayName=l.wn.displayName;let p=t.forwardRef((e,r)=>{let{className:a,children:t,position:n="popper",...d}=e;return(0,s.jsx)(l.ZL,{children:(0,s.jsxs)(l.UC,{ref:r,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...d,children:[(0,s.jsx)(f,{}),(0,s.jsx)(l.LM,{className:(0,o.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),(0,s.jsx)(x,{})]})})});p.displayName=l.UC.displayName,t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(l.JU,{ref:r,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",a),...t})}).displayName=l.JU.displayName;let h=t.forwardRef((e,r)=>{let{className:a,children:t,...n}=e;return(0,s.jsxs)(l.q7,{ref:r,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(i.A,{className:"h-4 w-4"})})}),(0,s.jsx)(l.p4,{children:t})]})});h.displayName=l.q7.displayName,t.forwardRef((e,r)=>{let{className:a,...t}=e;return(0,s.jsx)(l.wv,{ref:r,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...t})}).displayName=l.wv.displayName},29602:(e,r,a)=>{"use strict";a.d(r,{cn:()=>l});var s=a(43463),t=a(69795);function l(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,t.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[365,55,868,205,181,441,517,358],()=>r(22304)),_N_E=e.O()}]);