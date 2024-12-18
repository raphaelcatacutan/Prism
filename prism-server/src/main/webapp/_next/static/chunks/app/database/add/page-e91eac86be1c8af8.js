(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{22304:(e,r,n)=>{Promise.resolve().then(n.bind(n,85479)),Promise.resolve().then(n.bind(n,3392))},85479:(e,r,n)=>{"use strict";n.d(r,{default:()=>V});var s=n(95155),l=n(12115),a=n(85060),t=n(69606),d=n(43415),o=n(14085),i=n(12317),c=n(29602),x=n(46195);let m=(0,n(31027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),j=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(x.b,{ref:r,className:(0,c.cn)(m(),n),...l})});j.displayName=x.b.displayName;let h=t.Op,u=l.createContext({}),p=e=>{let{...r}=e;return(0,s.jsx)(u.Provider,{value:{name:r.name},children:(0,s.jsx)(t.xI,{...r})})},f=()=>{let e=l.useContext(u),r=l.useContext(y),{getFieldState:n,formState:s}=(0,t.xW)(),a=n(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:d}=r;return{id:d,name:e.name,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...a}},y=l.createContext({}),g=l.forwardRef((e,r)=>{let{className:n,...a}=e,t=l.useId();return(0,s.jsx)(y.Provider,{value:{id:t},children:(0,s.jsx)("div",{ref:r,className:(0,c.cn)("space-y-2",n),...a})})});g.displayName="FormItem";let b=l.forwardRef((e,r)=>{let{className:n,...l}=e,{error:a,formItemId:t}=f();return(0,s.jsx)(j,{ref:r,className:(0,c.cn)(a&&"text-destructive",n),htmlFor:t,...l})});b.displayName="FormLabel";let v=l.forwardRef((e,r)=>{let{...n}=e,{error:l,formItemId:a,formDescriptionId:t,formMessageId:d}=f();return(0,s.jsx)(i.DX,{ref:r,id:a,"aria-describedby":l?"".concat(t," ").concat(d):"".concat(t),"aria-invalid":!!l,...n})});v.displayName="FormControl",l.forwardRef((e,r)=>{let{className:n,...l}=e,{formDescriptionId:a}=f();return(0,s.jsx)("p",{ref:r,id:a,className:(0,c.cn)("text-[0.8rem] text-muted-foreground",n),...l})}).displayName="FormDescription";let N=l.forwardRef((e,r)=>{let{className:n,children:l,...a}=e,{error:t,formMessageId:d}=f(),o=t?String(null==t?void 0:t.message):l;return o?(0,s.jsx)("p",{ref:r,id:d,className:(0,c.cn)("text-[0.8rem] font-medium text-destructive",n),...a,children:o}):null});N.displayName="FormMessage";var w=n(51124),E=n(9955),C=n(50745),R=n(91423),F=n(32),P=n(32423),S=n(852),M=n(33565);let _=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(S.bL,{className:(0,c.cn)("grid gap-2",n),...l,ref:r})});_.displayName=S.bL.displayName;let A=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(S.q7,{ref:r,className:(0,c.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),...l,children:(0,s.jsx)(S.C1,{className:"flex items-center justify-center",children:(0,s.jsx)(M.A,{className:"h-3.5 w-3.5 fill-primary"})})})});A.displayName=S.q7.displayName;var I=n(35007),L=n(69239),k=n(51719);let z=L.bL,B=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(L.q7,{ref:r,className:(0,c.cn)("border-b",n),...l})});B.displayName="AccordionItem";let H=l.forwardRef((e,r)=>{let{className:n,children:l,...a}=e;return(0,s.jsx)(L.Y9,{className:"flex",children:(0,s.jsxs)(L.l9,{ref:r,className:(0,c.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",n),...a,children:[l,(0,s.jsx)(k.A,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});H.displayName=L.l9.displayName;let q=l.forwardRef((e,r)=>{let{className:n,children:l,...a}=e;return(0,s.jsx)(L.UC,{ref:r,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:(0,s.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",n),children:l})})});q.displayName=L.UC.displayName;let U=d.Ik({name:d.Yj().min(2,{message:"Name must be at least 2 characters."}),country:d.Yj({required_error:"Please select a country."}),email:d.Yj().email({message:"Please enter a valid email address."}),company:d.Yj().min(1,{message:"Company name is required."}),gender:d.k5(["male","female","other"],{required_error:"Please select a gender."})});function V(){let e=(0,t.mN)({resolver:(0,a.u)(U),defaultValues:{name:"",country:"",email:"",company:"",gender:void 0}});return(0,s.jsxs)(I.Zp,{className:"mx-auto w-full",children:[(0,s.jsx)(I.aR,{children:(0,s.jsx)(I.ZB,{className:"text-left text-3xl font-bold",children:"Personal Information"})}),(0,s.jsx)(I.Wu,{children:(0,s.jsx)(h,{...e,children:(0,s.jsxs)("form",{onSubmit:e.handleSubmit(function(e){console.log(e)}),className:"space-y-30 gap-4",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"gender",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{className:"space-y-4",children:[(0,s.jsx)(b,{children:"Sex"}),(0,s.jsx)(v,{children:(0,s.jsxs)(_,{onValueChange:r.onChange,value:r.value,className:"flex space-x-4",children:[(0,s.jsxs)(g,{className:"flex items-center space-x-2 space-y--3",children:[(0,s.jsx)(v,{children:(0,s.jsx)(A,{value:"male"})}),(0,s.jsx)(b,{className:"font-normal",children:"Male"})]}),(0,s.jsxs)(g,{className:"flex items-center space-x-2 space-y--3",children:[(0,s.jsx)(v,{children:(0,s.jsx)(A,{value:"female"})}),(0,s.jsx)(b,{className:"font-normal",children:"Female"})]}),(0,s.jsxs)(g,{className:"flex items-center space-x-2 space-y--3",children:[(0,s.jsx)(v,{children:(0,s.jsx)(A,{value:"other"})}),(0,s.jsx)(b,{className:"font-normal",children:"Other"})]})]})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"country",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Civil Status"}),(0,s.jsxs)(C.l6,{onValueChange:r.onChange,value:r.value,children:[(0,s.jsx)(v,{children:(0,s.jsx)(C.bq,{children:(0,s.jsx)(C.yv,{placeholder:"Select a country"})})}),(0,s.jsxs)(C.gC,{children:[(0,s.jsx)(C.eb,{value:"usa",children:"USA"}),(0,s.jsx)(C.eb,{value:"uk",children:"UK"}),(0,s.jsx)(C.eb,{value:"canada",children:"Canada"}),(0,s.jsx)(C.eb,{value:"australia",children:"Australia"}),(0,s.jsx)(C.eb,{value:"germany",children:"Germany"}),(0,s.jsx)(C.eb,{value:"france",children:"France"}),(0,s.jsx)(C.eb,{value:"japan",children:"Japan"}),(0,s.jsx)(C.eb,{value:"brazil",children:"Brazil"})]})]}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"country",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Citizenship"}),(0,s.jsxs)(C.l6,{onValueChange:r.onChange,value:r.value,children:[(0,s.jsx)(v,{children:(0,s.jsx)(C.bq,{children:(0,s.jsx)(C.yv,{placeholder:"Select a country"})})}),(0,s.jsxs)(C.gC,{children:[(0,s.jsx)(C.eb,{value:"usa",children:"USA"}),(0,s.jsx)(C.eb,{value:"uk",children:"UK"}),(0,s.jsx)(C.eb,{value:"canada",children:"Canada"}),(0,s.jsx)(C.eb,{value:"australia",children:"Australia"}),(0,s.jsx)(C.eb,{value:"germany",children:"Germany"}),(0,s.jsx)(C.eb,{value:"france",children:"France"}),(0,s.jsx)(C.eb,{value:"japan",children:"Japan"}),(0,s.jsx)(C.eb,{value:"brazil",children:"Brazil"})]})]}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"country",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Citizenship Acquisition"}),(0,s.jsxs)(C.l6,{onValueChange:r.onChange,value:r.value,children:[(0,s.jsx)(v,{children:(0,s.jsx)(C.bq,{children:(0,s.jsx)(C.yv,{placeholder:"Select a country"})})}),(0,s.jsxs)(C.gC,{children:[(0,s.jsx)(C.eb,{value:"usa",children:"USA"}),(0,s.jsx)(C.eb,{value:"uk",children:"UK"}),(0,s.jsx)(C.eb,{value:"canada",children:"Canada"}),(0,s.jsx)(C.eb,{value:"australia",children:"Australia"}),(0,s.jsx)(C.eb,{value:"germany",children:"Germany"}),(0,s.jsx)(C.eb,{value:"france",children:"France"}),(0,s.jsx)(C.eb,{value:"japan",children:"Japan"}),(0,s.jsx)(C.eb,{value:"brazil",children:"Brazil"})]})]}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Blood Type"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Height"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Weight"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Place of Birth"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{className:"grid grid-cols-1 space-y-1 top-20",children:[(0,s.jsx)(b,{children:"Date of birth"}),(0,s.jsxs)(w.AM,{children:[(0,s.jsx)(w.Wv,{asChild:!0,children:(0,s.jsx)(v,{children:(0,s.jsxs)(o.$,{variant:"outline",className:(0,c.cn)("col-span-1 pl-3 text-left font-normal",!r.value&&"text-muted-foreground"),children:[r.value?(0,F.GP)(r.value,"PPP"):(0,s.jsx)("span",{children:"Pick a date"}),(0,s.jsx)(P.A,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),(0,s.jsx)(w.hl,{align:"start",children:(0,s.jsx)(R.V,{mode:"single",onSelect:r.onChange,disabled:e=>e>new Date||e<new Date("1900-01-01"),initialFocus:!0})})]}),(0,s.jsx)(N,{})]})}})]}),(0,s.jsxs)(z,{type:"multiple",className:"my-4",children:[(0,s.jsxs)(B,{value:"item-1",children:[(0,s.jsx)(H,{children:(0,s.jsx)("h3",{className:"text-2xl font-bold tracking-tight",children:"Government Issued Information"})}),(0,s.jsx)(q,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"GSIS Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"PagIBIG Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"PhilHealth Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"SSS Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"TIN"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Agency Employee Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}})]})})]}),(0,s.jsxs)(B,{value:"item-2",children:[(0,s.jsx)(H,{children:(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Contact Information"})}),(0,s.jsx)(q,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House Street"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House Village"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House Barangay"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House City"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House Province"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Resident House ZIP Code"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House Street"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House Village"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House Barangay"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House City"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House Province"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent House ZIP Code"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Permanent Telephone Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mobile Number"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Email Address"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}})]})})]}),(0,s.jsxs)(B,{value:"item-3",children:[(0,s.jsx)(H,{children:(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Family Background"})}),(0,s.jsx)(q,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Occupation"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Employer/Business Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Business Address"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}})]})})]}),(0,s.jsxs)(B,{value:"item-4",children:[(0,s.jsx)(H,{children:(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Education Level"})}),(0,s.jsx)(q,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Occupation"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Employer/Business Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Spouse Business Address"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Father Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden Last Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden First Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}}),(0,s.jsx)(p,{control:e.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(b,{children:"Mother Maiden Middle Name"}),(0,s.jsx)(v,{children:(0,s.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,s.jsx)(N,{})]})}})]})})]})]}),(0,s.jsx)(o.$,{type:"submit",children:"Submit"})]})})})]})}},14085:(e,r,n)=>{"use strict";n.d(r,{$:()=>i,r:()=>o});var s=n(95155),l=n(12115),a=n(12317),t=n(31027),d=n(29602);let o=(0,t.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=l.forwardRef((e,r)=>{let{className:n,variant:l,size:t,asChild:i=!1,...c}=e,x=i?a.DX:"button";return(0,s.jsx)(x,{className:(0,d.cn)(o({variant:l,size:t,className:n})),ref:r,...c})});i.displayName="Button"},91423:(e,r,n)=>{"use strict";n.d(r,{V:()=>i});var s=n(95155);n(12115);var l=n(93518),a=n(46967),t=n(47908),d=n(29602),o=n(14085);function i(e){let{className:r,classNames:n,showOutsideDays:i=!0,...c}=e;return(0,s.jsx)(t.hv,{showOutsideDays:i,className:(0,d.cn)("p-3",r),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,d.cn)((0,o.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,d.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===c.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,d.cn)((0,o.r)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...n},components:{IconLeft:e=>{let{className:r,...n}=e;return(0,s.jsx)(l.A,{className:(0,d.cn)("h-4 w-4",r),...n})},IconRight:e=>{let{className:r,...n}=e;return(0,s.jsx)(a.A,{className:(0,d.cn)("h-4 w-4",r),...n})}},...c})}i.displayName="Calendar"},35007:(e,r,n)=>{"use strict";n.d(r,{BT:()=>i,Wu:()=>c,ZB:()=>o,Zp:()=>t,aR:()=>d,wL:()=>x});var s=n(95155),l=n(12115),a=n(29602);let t=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",n),...l})});t.displayName="Card";let d=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...l})});d.displayName="CardHeader";let o=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("font-semibold leading-none tracking-tight",n),...l})});o.displayName="CardTitle";let i=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("text-sm text-muted-foreground",n),...l})});i.displayName="CardDescription";let c=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("p-6 pt-0",n),...l})});c.displayName="CardContent";let x=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)("div",{ref:r,className:(0,a.cn)("flex items-center p-6 pt-0",n),...l})});x.displayName="CardFooter"},9955:(e,r,n)=>{"use strict";n.d(r,{p:()=>t});var s=n(95155),l=n(12115),a=n(29602);let t=l.forwardRef((e,r)=>{let{className:n,type:l,...t}=e;return(0,s.jsx)("input",{type:l,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n),ref:r,...t})});t.displayName="Input"},51124:(e,r,n)=>{"use strict";n.d(r,{AM:()=>d,Wv:()=>o,hl:()=>i});var s=n(95155),l=n(12115),a=n(61911),t=n(29602);let d=a.bL,o=a.l9;a.Mz;let i=l.forwardRef((e,r)=>{let{className:n,align:l="center",sideOffset:d=4,...o}=e;return(0,s.jsx)(a.ZL,{children:(0,s.jsx)(a.UC,{ref:r,align:l,sideOffset:d,className:(0,t.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})});i.displayName=a.UC.displayName},3392:(e,r,n)=>{"use strict";n.d(r,{ScrollArea:()=>d});var s=n(95155),l=n(12115),a=n(21868),t=n(29602);let d=l.forwardRef((e,r)=>{let{className:n,children:l,...d}=e;return(0,s.jsxs)(a.bL,{ref:r,className:(0,t.cn)("relative overflow-hidden",n),...d,children:[(0,s.jsx)(a.LM,{className:"h-full w-full rounded-[inherit]",children:l}),(0,s.jsx)(o,{}),(0,s.jsx)(a.OK,{})]})});d.displayName=a.bL.displayName;let o=l.forwardRef((e,r)=>{let{className:n,orientation:l="vertical",...d}=e;return(0,s.jsx)(a.VM,{ref:r,orientation:l,className:(0,t.cn)("flex touch-none select-none transition-colors","vertical"===l&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===l&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...d,children:(0,s.jsx)(a.lr,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=a.VM.displayName},50745:(e,r,n)=>{"use strict";n.d(r,{bq:()=>m,eb:()=>p,gC:()=>u,l6:()=>c,yv:()=>x});var s=n(95155),l=n(12115),a=n(9116),t=n(51719),d=n(91902),o=n(98867),i=n(29602);let c=a.bL;a.YJ;let x=a.WT,m=l.forwardRef((e,r)=>{let{className:n,children:l,...d}=e;return(0,s.jsxs)(a.l9,{ref:r,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...d,children:[l,(0,s.jsx)(a.In,{asChild:!0,children:(0,s.jsx)(t.A,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=a.l9.displayName;let j=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(a.PP,{ref:r,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",n),...l,children:(0,s.jsx)(d.A,{className:"h-4 w-4"})})});j.displayName=a.PP.displayName;let h=l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(a.wn,{ref:r,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",n),...l,children:(0,s.jsx)(t.A,{className:"h-4 w-4"})})});h.displayName=a.wn.displayName;let u=l.forwardRef((e,r)=>{let{className:n,children:l,position:t="popper",...d}=e;return(0,s.jsx)(a.ZL,{children:(0,s.jsxs)(a.UC,{ref:r,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:t,...d,children:[(0,s.jsx)(j,{}),(0,s.jsx)(a.LM,{className:(0,i.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:l}),(0,s.jsx)(h,{})]})})});u.displayName=a.UC.displayName,l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(a.JU,{ref:r,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",n),...l})}).displayName=a.JU.displayName;let p=l.forwardRef((e,r)=>{let{className:n,children:l,...t}=e;return(0,s.jsxs)(a.q7,{ref:r,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...t,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.VF,{children:(0,s.jsx)(o.A,{className:"h-4 w-4"})})}),(0,s.jsx)(a.p4,{children:l})]})});p.displayName=a.q7.displayName,l.forwardRef((e,r)=>{let{className:n,...l}=e;return(0,s.jsx)(a.wv,{ref:r,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...l})}).displayName=a.wv.displayName},29602:(e,r,n)=>{"use strict";n.d(r,{cn:()=>a});var s=n(43463),l=n(69795);function a(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,l.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[365,674,318,205,908,681,441,517,358],()=>r(22304)),_N_E=e.O()}]);