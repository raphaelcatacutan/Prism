(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{76525:(e,r,s)=>{Promise.resolve().then(s.bind(s,85072)),Promise.resolve().then(s.bind(s,3392))},85072:(e,r,s)=>{"use strict";s.d(r,{default:()=>Z});var l=s(95155),n=s(12115),t=s(85060),a=s(69606),o=s(43415),i=s(14085),d=s(12317),c=s(29602),m=s(46195);let x=(0,s(31027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),h=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)(m.b,{ref:r,className:(0,c.cn)(x(),s),...n})});h.displayName=m.b.displayName;let j=a.Op,p=n.createContext({}),u=e=>{let{...r}=e;return(0,l.jsx)(p.Provider,{value:{name:r.name},children:(0,l.jsx)(a.xI,{...r})})},f=()=>{let e=n.useContext(p),r=n.useContext(y),{getFieldState:s,formState:l}=(0,a.xW)(),t=s(e.name,l);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...t}},y=n.createContext({}),N=n.forwardRef((e,r)=>{let{className:s,...t}=e,a=n.useId();return(0,l.jsx)(y.Provider,{value:{id:a},children:(0,l.jsx)("div",{ref:r,className:(0,c.cn)("space-y-2",s),...t})})});N.displayName="FormItem";let g=n.forwardRef((e,r)=>{let{className:s,...n}=e,{error:t,formItemId:a}=f();return(0,l.jsx)(h,{ref:r,className:(0,c.cn)(t&&"text-destructive",s),htmlFor:a,...n})});g.displayName="FormLabel";let v=n.forwardRef((e,r)=>{let{...s}=e,{error:n,formItemId:t,formDescriptionId:a,formMessageId:o}=f();return(0,l.jsx)(d.DX,{ref:r,id:t,"aria-describedby":n?"".concat(a," ").concat(o):"".concat(a),"aria-invalid":!!n,...s})});v.displayName="FormControl",n.forwardRef((e,r)=>{let{className:s,...n}=e,{formDescriptionId:t}=f();return(0,l.jsx)("p",{ref:r,id:t,className:(0,c.cn)("text-[0.8rem] text-muted-foreground",s),...n})}).displayName="FormDescription";let b=n.forwardRef((e,r)=>{let{className:s,children:n,...t}=e,{error:a,formMessageId:o}=f(),i=a?String(null==a?void 0:a.message):n;return i?(0,l.jsx)("p",{ref:r,id:o,className:(0,c.cn)("text-[0.8rem] font-medium text-destructive",s),...t,children:i}):null});b.displayName="FormMessage";var C=s(51124),E=s(9955),w=s(50745),H=s(22079),S=s(91423),Y=s(32),P=s(32423),F=s(852),B=s(33565);let _=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)(F.bL,{className:(0,c.cn)("grid gap-2",s),...n,ref:r})});_.displayName=F.bL.displayName;let M=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)(F.q7,{ref:r,className:(0,c.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),...n,children:(0,l.jsx)(F.C1,{className:"flex items-center justify-center",children:(0,l.jsx)(B.A,{className:"h-3.5 w-3.5 fill-primary"})})})});M.displayName=F.q7.displayName;var A=s(35007),R=s(69239),L=s(51719);let O=R.bL,I=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)(R.q7,{ref:r,className:(0,c.cn)("border-b",s),...n})});I.displayName="AccordionItem";let V=n.forwardRef((e,r)=>{let{className:s,children:n,...t}=e;return(0,l.jsx)(R.Y9,{className:"flex",children:(0,l.jsxs)(R.l9,{ref:r,className:(0,c.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",s),...t,children:[n,(0,l.jsx)(L.A,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});V.displayName=R.l9.displayName;let k=n.forwardRef((e,r)=>{let{className:s,children:n,...t}=e;return(0,l.jsx)(R.UC,{ref:r,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:(0,l.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",s),children:n})})});k.displayName=R.UC.displayName;var z=s(7837);let q=o.Ik({emailAd:o.Yj().optional(),fatherLastName:o.Yj().optional(),spouseEmployer:o.Yj().optional(),motherMiddleName:o.Yj().optional(),pagibig:o.Yj().optional(),sss:o.Yj().optional(),spouseMiddleName:o.Yj().optional(),fatherFirstName:o.Yj().optional(),tin:o.Yj().optional(),height:o.bz(),permHouseSt:o.Yj().optional(),gsis:o.Yj().optional(),weight:o.bz(),resZipCode:o.Yj().optional(),telNo:o.Yj().optional(),spouseLastName:o.Yj().optional(),firstName:o.Yj().min(1,{message:"First name is required."}),motherFirstName:o.Yj().optional(),citizenshipAcq:o.Yj().min(1,{message:"Please select a valid citizenship acquisition type."}),lastName:o.Yj().min(1,{message:"Last name is required."}),civilStatus:o.Yj().min(1,{message:"Please select a valid civil status."}),permHouseNo:o.Yj().optional(),sex:o.Yj().min(1,{message:"Sex is required"}),fatherMiddleName:o.Yj().optional(),bloodType:o.Yj().optional(),resHouseSt:o.Yj().optional(),philHealth:o.Yj().optional(),permBrgy:o.Yj().optional(),resBrgy:o.Yj().optional(),permZipCode:o.Yj().optional(),motherLastName:o.Yj().optional(),spouseEmployerAddress:o.Yj().optional(),placeOfBirth:o.Yj().optional(),agency:o.Yj().optional(),citizenship:o.Yj().min(1,{message:"Please select a valid citizenship."}),dateOfBirth:o.p6(),spouseFirstName:o.Yj().optional(),mobileNo:o.Yj().optional(),resHouseNo:o.Yj().optional(),resProv:o.Yj().optional(),spouseOccupation:o.Yj().optional(),permHouseVil:o.Yj().optional(),middleName:o.Yj().optional(),permCity:o.Yj().optional(),resHouseVil:o.Yj().optional(),permProv:o.Yj().optional(),resCity:o.Yj().optional()});function Z(){let e;let[r,s]=(0,n.useState)({}),[o,d]=(0,n.useState)(!1),[m,x]=(0,n.useState)(!1),[p,f]=(0,n.useState)("");e=new URLSearchParams(window.location.search).get("person_id"),(0,n.useEffect)(()=>{e&&fetch("http://localhost:8081/Prism/info_read_info?person_id=".concat(e)).then(e=>e.json()).then(r=>{console.log(e),s(r)}).catch(e=>console.error("Error:",e))},[]),(0,n.useEffect)(()=>{["emailAd","fatherLastName","spouseEmployer","motherMiddleName","pagibig","sss","spouseMiddleName","fatherFirstName","tin","height","permHouseSt","gsis","spouseLastName","firstName","motherFirstName","citizenshipAcq","civilStatus","lastName","permHouseNo","fatherMiddleName","bloodType","resHouseSt","philHealth","permBrgy","resBrgy","permZipCode","motherLastName","spouseEmployerAddress","placeOfBirth","agency","sex","citizenship","dateOfBirth","spouseFirstName","mobileNo","resHouseNo","resProv","spouseOccupation","permHouseVil","middleName","permCity","resHouseVil","permProv","resCity","weight"].forEach(e=>{r.hasOwnProperty(e)&&("dateOfBirth"==e?F.setValue(e,new Date(r[e])):F.setValue(e,r[e]))})},[r]);let y=e=>{x(!0),f(e)},F=(0,a.mN)({resolver:(0,t.u)(q),defaultValues:{lastName:"",emailAd:"",permHouseNo:"",fatherLastName:"",fatherMiddleName:"",spouseEmployer:"",bloodType:"",resHouseSt:"",civilStatus:"",motherMiddleName:"",pagibig:"",sss:"",philHealth:"",permBrgy:"",spouseMiddleName:"",fatherFirstName:"",resBrgy:"",permZipCode:"",motherLastName:"",tin:"",spouseEmployerAddress:"",height:"",sex:"",placeOfBirth:"",permHouseSt:"",agency:"",gsis:"",citizenship:"",weight:"",dateOfBirth:void 0,spouseFirstName:"",mobileNo:"",resHouseNo:"",resZipCode:"",telNo:"",spouseLastName:"",firstName:"",resProv:"",spouseOccupation:"",permHouseVil:"",motherFirstName:"",middleName:"",permCity:"",citizenshipAcq:"",resHouseVil:"",permProv:"",resCity:""}});return(0,l.jsxs)(A.Zp,{className:"mx-auto w-full",children:[(0,l.jsx)(A.aR,{children:(0,l.jsx)(A.ZB,{className:"text-left text-3xl font-bold",children:"Personal Information"})}),(0,l.jsx)(A.Wu,{children:(0,l.jsx)(j,{...F,children:(0,l.jsxs)("form",{onSubmit:F.handleSubmit(function(r){try{r.person_id=e,fetch(e?"http://localhost:8081/Prism/info_update_info":"http://localhost:8081/Prism/info_create_info",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{d(!0),console.log(e)})}catch(e){console.error("Error:",e)}}),className:"space-y-30 gap-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,l.jsx)(u,{control:F.control,name:"lastName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Last Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{...r,placeholder:"Enter your last name"})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"firstName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"First Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{...r,placeholder:"Enter your first name"})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"middleName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Middle Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{...r,placeholder:"Enter your middle name"})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"sex",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{className:"space-y-4",children:[(0,l.jsx)(g,{children:"Sex"}),(0,l.jsx)(v,{children:(0,l.jsxs)(_,{value:r.value,onValueChange:r.onChange,className:"flex space-x-4",children:[(0,l.jsxs)(N,{className:"flex items-center space-x-2 space-y--3",children:[(0,l.jsx)(v,{children:(0,l.jsx)(M,{value:"1"})}),(0,l.jsx)(g,{className:"font-normal",children:"Male"})]}),(0,l.jsxs)(N,{className:"flex items-center space-x-2 space-y--3",children:[(0,l.jsx)(v,{children:(0,l.jsx)(M,{value:"2"})}),(0,l.jsx)(g,{className:"font-normal",children:"Female"})]})]})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"civilStatus",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Civil Status"}),(0,l.jsxs)(w.l6,{...r,onValueChange:r.onChange,value:r.value,children:[(0,l.jsx)(v,{children:(0,l.jsx)(w.bq,{children:(0,l.jsx)(w.yv,{placeholder:"Select a status"})})}),(0,l.jsxs)(w.gC,{children:[(0,l.jsx)(w.eb,{value:"1",children:"Single"}),(0,l.jsx)(w.eb,{value:"2",children:"Married"}),(0,l.jsx)(w.eb,{value:"3",children:"Annuled"}),(0,l.jsx)(w.eb,{value:"4",children:"Separated"}),(0,l.jsx)(w.eb,{value:"5",children:"Widowed"})]})]}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"citizenship",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Citizenship"}),(0,l.jsxs)(w.l6,{...r,onValueChange:r.onChange,value:r.value,children:[(0,l.jsx)(v,{children:(0,l.jsx)(w.bq,{children:(0,l.jsx)(w.yv,{placeholder:"Select a citizenship type"})})}),(0,l.jsxs)(w.gC,{children:[(0,l.jsx)(w.eb,{value:"1",children:"Filipino"}),(0,l.jsx)(w.eb,{value:"2",children:"Dual Citizenship"})]})]}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"citizenshipAcq",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Citizenship Acquisition"}),(0,l.jsxs)(w.l6,{onValueChange:r.onChange,value:r.value,children:[(0,l.jsx)(v,{children:(0,l.jsx)(w.bq,{children:(0,l.jsx)(w.yv,{placeholder:"Select an acquisition"})})}),(0,l.jsxs)(w.gC,{children:[(0,l.jsx)(w.eb,{value:"1",children:"Birth"}),(0,l.jsx)(w.eb,{value:"2",children:"Naturalization"})]})]}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"bloodType",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Blood Type"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"height",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Height"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{type:"number",...r,placeholder:"Enter your hieght"})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"weight",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Weight"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{type:"number",...r,placeholder:"Enter your weight"})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"placeOfBirth",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Place of Birth"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"dateOfBirth",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{className:"grid grid-cols-1 space-y-1 top-20",children:[(0,l.jsx)(g,{children:"Date of birth"}),(0,l.jsxs)(C.AM,{children:[(0,l.jsx)(C.Wv,{asChild:!0,children:(0,l.jsx)(v,{children:(0,l.jsxs)(i.$,{variant:"outline",className:(0,c.cn)("col-span-1 pl-3 text-left font-normal",!r.value&&"text-muted-foreground"),children:[r.value?(0,Y.GP)(r.value,"PPP"):(0,l.jsx)("span",{children:"Pick a date"}),(0,l.jsx)(P.A,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),(0,l.jsx)(C.hl,{align:"start",children:(0,l.jsx)(S.V,{mode:"single",onSelect:r.onChange,initialFocus:!0})})]}),(0,l.jsx)(b,{})]})}})]}),(0,l.jsxs)(O,{type:"multiple",className:"my-4",children:[(0,l.jsxs)(I,{value:"item-1",children:[(0,l.jsx)(V,{children:(0,l.jsx)("h3",{className:"text-2xl font-bold tracking-tight",children:"Government Issued Information"})}),(0,l.jsx)(k,{children:(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,l.jsx)(u,{control:F.control,name:"gsis",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"GSIS Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"pagibig",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"PagIBIG Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"philHealth",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"PhilHealth Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"sss",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"SSS Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"tin",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"TIN"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"agency",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Agency Employee Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}})]})})]}),(0,l.jsxs)(I,{value:"item-2",children:[(0,l.jsx)(V,{children:(0,l.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Contact Information"})}),(0,l.jsx)(k,{children:(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,l.jsx)(u,{control:F.control,name:"resHouseNo",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resHouseSt",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House Street"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resHouseVil",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House Village"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resBrgy",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House Barangay"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resCity",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House City"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resProv",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House Province"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"resZipCode",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Resident House ZIP Code"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permHouseNo",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permHouseSt",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House Street"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permHouseVil",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House Village"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permBrgy",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House Barangay"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permCity",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House City"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permProv",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House Province"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"permZipCode",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent House ZIP Code"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"telNo",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Permanent Telephone Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"mobileNo",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Mobile Number"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"emailAd",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Email Address"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}})]})})]}),(0,l.jsxs)(I,{value:"item-3",children:[(0,l.jsx)(V,{children:(0,l.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Family Background"})}),(0,l.jsxs)(k,{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,l.jsx)(u,{control:F.control,name:"spouseLastName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse Last Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your last name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"spouseFirstName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse First Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your first name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"spouseMiddleName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse Middle Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"spouseOccupation",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse Occupation"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"spouseEmployer",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse Employer/Business Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"spouseEmployerAddress",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Spouse Business Address"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"fatherLastName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Father Last Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"fatherFirstName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Father First Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"fatherMiddleName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Father Middle Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"motherLastName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Mother Maiden Last Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"motherFirstName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Mother Maiden First Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}}),(0,l.jsx)(u,{control:F.control,name:"motherMiddleName",render:e=>{let{field:r}=e;return(0,l.jsxs)(N,{children:[(0,l.jsx)(g,{children:"Mother Maiden Middle Name"}),(0,l.jsx)(v,{children:(0,l.jsx)(E.p,{placeholder:"Enter your middle name",...r})}),(0,l.jsx)(b,{})]})}})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"mt-5 mb-5 text-2xl tracking-tight ",children:"List of Children"}),(0,l.jsxs)(H.XI,{children:[(0,l.jsx)(H.A0,{children:(0,l.jsxs)(H.Hj,{children:[(0,l.jsx)(H.nd,{children:"Full Name"}),(0,l.jsx)(H.nd,{children:"Date of Birth"})]})}),(0,l.jsx)(H.BF,{children:[{childId:1,fullName:"raphael",dateOfBirth:"d"}].map(e=>(0,l.jsxs)(H.Hj,{className:"h-[50px]",onClick:()=>y(e.fullName),children:[(0,l.jsx)(H.nA,{children:e.fullName}),(0,l.jsx)(H.nA,{children:e.dateOfBirth})]},e.childId))})]})]}),(0,l.jsx)(z.lG,{open:m,onOpenChange:x,children:(0,l.jsxs)(z.Cf,{className:"sm:max-w-md",children:[(0,l.jsx)(z.c7,{children:(0,l.jsx)(z.L3,{children:"Child Information"})}),(0,l.jsxs)("div",{className:"grid flex gap-2",children:[(0,l.jsx)(h,{htmlFor:"chfullname",children:"Full Name"}),(0,l.jsx)(E.p,{id:"chfullname",defaultValue:p})]}),(0,l.jsxs)("div",{className:"grid flex gap-2",children:[(0,l.jsx)(h,{htmlFor:"chdateofbirth",children:"Date of Birth"}),(0,l.jsx)(E.p,{id:"chdateofbirth",defaultValue:""})]}),(0,l.jsxs)(z.Es,{className:"sm:justify-start",children:[(0,l.jsx)(i.$,{onClick:()=>{},children:"Save changes"}),(0,l.jsx)(z.HM,{asChild:!0,children:(0,l.jsx)(i.$,{type:"button",variant:"secondary",children:"Close"})})]})]})})]})]})]}),(0,l.jsx)(i.$,{type:"submit",className:"w-48",children:"Submit"}),(0,l.jsx)(z.lG,{open:o,onOpenChange:d,children:(0,l.jsxs)(z.Cf,{children:[(0,l.jsx)(z.c7,{children:(0,l.jsx)(z.L3,{children:"Data Saved Successfully!"})}),(0,l.jsx)(z.rr,{children:"Your data has been successfully saved and stored in the system."}),(0,l.jsx)(z.Es,{children:(0,l.jsx)(z.HM,{asChild:!0,children:(0,l.jsx)(i.$,{type:"button",variant:"secondary",children:"Okay"})})})]})})]})})})]})}},91423:(e,r,s)=>{"use strict";s.d(r,{V:()=>d});var l=s(95155);s(12115);var n=s(93518),t=s(46967),a=s(47908),o=s(29602),i=s(14085);function d(e){let{className:r,classNames:s,showOutsideDays:d=!0,...c}=e;return(0,l.jsx)(a.hv,{showOutsideDays:d,className:(0,o.cn)("p-3",r),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,o.cn)((0,i.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,o.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===c.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,o.cn)((0,i.r)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...s},components:{IconLeft:e=>{let{className:r,...s}=e;return(0,l.jsx)(n.A,{className:(0,o.cn)("h-4 w-4",r),...s})},IconRight:e=>{let{className:r,...s}=e;return(0,l.jsx)(t.A,{className:(0,o.cn)("h-4 w-4",r),...s})}},...c})}d.displayName="Calendar"},35007:(e,r,s)=>{"use strict";s.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>i,Zp:()=>a,aR:()=>o,wL:()=>m});var l=s(95155),n=s(12115),t=s(29602);let a=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("rounded-xl border bg-card text-card-foreground shadow",s),...n})});a.displayName="Card";let o=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",s),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("font-semibold leading-none tracking-tight",s),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("text-sm text-muted-foreground",s),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("p-6 pt-0",s),...n})});c.displayName="CardContent";let m=n.forwardRef((e,r)=>{let{className:s,...n}=e;return(0,l.jsx)("div",{ref:r,className:(0,t.cn)("flex items-center p-6 pt-0",s),...n})});m.displayName="CardFooter"}},e=>{var r=r=>e(e.s=r);e.O(0,[365,674,318,142,11,908,423,343,441,517,358],()=>r(76525)),_N_E=e.O()}]);