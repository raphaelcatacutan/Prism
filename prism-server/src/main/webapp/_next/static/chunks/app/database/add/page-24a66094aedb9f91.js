(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{76525:(e,r,s)=>{Promise.resolve().then(s.bind(s,85072)),Promise.resolve().then(s.bind(s,3392))},85072:(e,r,s)=>{"use strict";s.d(r,{default:()=>T});var n=s(95155),l=s(12115),t=s(85060),o=s(69606),a=s(43415),i=s(14085),d=s(12317),c=s(29602),h=s(46195);let m=(0,s(31027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)(h.b,{ref:r,className:(0,c.cn)(m(),s),...l})});x.displayName=h.b.displayName;let j=o.Op,p=l.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(p.Provider,{value:{name:r.name},children:(0,n.jsx)(o.xI,{...r})})},f=()=>{let e=l.useContext(p),r=l.useContext(y),{getFieldState:s,formState:n}=(0,o.xW)(),t=s(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=r;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...t}},y=l.createContext({}),N=l.forwardRef((e,r)=>{let{className:s,...t}=e,o=l.useId();return(0,n.jsx)(y.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,c.cn)("space-y-2",s),...t})})});N.displayName="FormItem";let g=l.forwardRef((e,r)=>{let{className:s,...l}=e,{error:t,formItemId:o}=f();return(0,n.jsx)(x,{ref:r,className:(0,c.cn)(t&&"text-destructive",s),htmlFor:o,...l})});g.displayName="FormLabel";let v=l.forwardRef((e,r)=>{let{...s}=e,{error:l,formItemId:t,formDescriptionId:o,formMessageId:a}=f();return(0,n.jsx)(d.DX,{ref:r,id:t,"aria-describedby":l?"".concat(o," ").concat(a):"".concat(o),"aria-invalid":!!l,...s})});v.displayName="FormControl",l.forwardRef((e,r)=>{let{className:s,...l}=e,{formDescriptionId:t}=f();return(0,n.jsx)("p",{ref:r,id:t,className:(0,c.cn)("text-[0.8rem] text-muted-foreground",s),...l})}).displayName="FormDescription";let b=l.forwardRef((e,r)=>{let{className:s,children:l,...t}=e,{error:o,formMessageId:a}=f(),i=o?String(null==o?void 0:o.message):l;return i?(0,n.jsx)("p",{ref:r,id:a,className:(0,c.cn)("text-[0.8rem] font-medium text-destructive",s),...t,children:i}):null});b.displayName="FormMessage";var w=s(51124),C=s(9955),E=s(50745),S=s(22079),P=s(91423),_=s(32),H=s(32423),Y=s(852),F=s(33565);let A=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)(Y.bL,{className:(0,c.cn)("grid gap-2",s),...l,ref:r})});A.displayName=Y.bL.displayName;let B=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)(Y.q7,{ref:r,className:(0,c.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),...l,children:(0,n.jsx)(Y.C1,{className:"flex items-center justify-center",children:(0,n.jsx)(F.A,{className:"h-3.5 w-3.5 fill-primary"})})})});B.displayName=Y.q7.displayName;var M=s(35007),k=s(69239),I=s(51719);let O=k.bL,R=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)(k.q7,{ref:r,className:(0,c.cn)("border-b",s),...l})});R.displayName="AccordionItem";let L=l.forwardRef((e,r)=>{let{className:s,children:l,...t}=e;return(0,n.jsx)(k.Y9,{className:"flex",children:(0,n.jsxs)(k.l9,{ref:r,className:(0,c.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",s),...t,children:[l,(0,n.jsx)(I.A,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});L.displayName=k.l9.displayName;let V=l.forwardRef((e,r)=>{let{className:s,children:l,...t}=e;return(0,n.jsx)(k.UC,{ref:r,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:(0,n.jsx)("div",{className:(0,c.cn)("pb-4 pt-0",s),children:l})})});V.displayName=k.UC.displayName;var z=s(7837);let q=a.Ik({emailAd:a.Yj().optional(),fatherLastName:a.Yj().optional(),spouseEmployer:a.Yj().optional(),motherMiddleName:a.Yj().optional(),pagibig:a.Yj().optional(),sss:a.Yj().optional(),spouseMiddleName:a.Yj().optional(),fatherFirstName:a.Yj().optional(),tin:a.Yj().optional(),height:a.bz(),permHouseSt:a.Yj().optional(),gsis:a.Yj().optional(),weight:a.bz(),resZipCode:a.Yj().optional(),telNo:a.Yj().optional(),spouseLastName:a.Yj().optional(),firstName:a.Yj().min(1,{message:"First name is required."}),motherFirstName:a.Yj().optional(),citizenshipAcq:a.Yj().min(1,{message:"Please select a valid citizenship acquisition type."}),lastName:a.Yj().min(1,{message:"Last name is required."}),civilStatus:a.Yj().min(1,{message:"Please select a valid civil status."}),permHouseNo:a.Yj().optional(),sex:a.Yj().min(1,{message:"Sex is required"}),fatherMiddleName:a.Yj().optional(),bloodType:a.Yj().optional(),resHouseSt:a.Yj().optional(),philHealth:a.Yj().optional(),permBrgy:a.Yj().optional(),resBrgy:a.Yj().optional(),permZipCode:a.Yj().optional(),motherLastName:a.Yj().optional(),spouseEmployerAddress:a.Yj().optional(),placeOfBirth:a.Yj().optional(),agency:a.Yj().optional(),citizenship:a.Yj().min(1,{message:"Please select a valid citizenship."}),dateOfBirth:a.p6(),spouseFirstName:a.Yj().optional(),mobileNo:a.Yj().optional(),resHouseNo:a.Yj().optional(),resProv:a.Yj().optional(),spouseOccupation:a.Yj().optional(),permHouseVil:a.Yj().optional(),middleName:a.Yj().optional(),permCity:a.Yj().optional(),resHouseVil:a.Yj().optional(),permProv:a.Yj().optional(),resCity:a.Yj().optional()});function T(){let e;let[r,s]=(0,l.useState)({}),[a,d]=(0,l.useState)(!1),[h,m]=(0,l.useState)(!1),[p,f]=(0,l.useState)([-1,""]),[y,Y]=(0,l.useState)([]),[F,k]=(0,l.useState)(0);e=new URLSearchParams(window.location.search).get("person_id"),(0,l.useEffect)(()=>{e&&fetch("http://localhost:8081/Prism/info_read_info?person_id=".concat(e)).then(e=>e.json()).then(r=>{console.log(e),s(r)}).catch(e=>console.error("Error:",e))},[]),(0,l.useEffect)(()=>{["emailAd","fatherLastName","spouseEmployer","motherMiddleName","pagibig","sss","spouseMiddleName","fatherFirstName","tin","height","permHouseSt","gsis","spouseLastName","firstName","motherFirstName","citizenshipAcq","civilStatus","lastName","permHouseNo","fatherMiddleName","bloodType","resHouseSt","philHealth","permBrgy","resBrgy","permZipCode","motherLastName","spouseEmployerAddress","placeOfBirth","agency","sex","citizenship","dateOfBirth","spouseFirstName","mobileNo","resHouseNo","resProv","spouseOccupation","permHouseVil","middleName","permCity","resHouseVil","permProv","resCity","weight"].forEach(e=>{r.hasOwnProperty(e)&&("dateOfBirth"==e?D.setValue(e,new Date(r[e])):D.setValue(e,r[e]))})},[r]),(0,l.useEffect)(()=>{e&&fetch("http://localhost:8081/Prism/info_read_child?person_id=".concat(e)).then(e=>e.json()).then(e=>{console.log(e),Y(e)}).catch(e=>console.error("Error:",e))},[]);let I=(r,s)=>{console.log(e),e&&(m(!0),f([r,s]))},T=(r,s)=>{try{fetch(null!=r&&"number"==typeof r&&r>0?"http://localhost:8081/Prism/info_update_child":"http://localhost:8081/Prism/info_create_child",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({childId:r,personId:e,fullName:s})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(r=>{if(console.log(r),!e)return m(!1);fetch("http://localhost:8081/Prism/info_read_child?person_id=".concat(e)).then(e=>e.json()).then(e=>{console.log(e),Y(e)}).catch(e=>console.error("Error:",e)),m(!1)})}catch(e){console.error("Error:",e)}},Z=r=>{try{fetch("http://localhost:8081/Prism/info_delete_child",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({deleteChild:r})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(r=>{console.log(r),e&&(fetch("http://localhost:8081/Prism/info_read_child?person_id=".concat(e)).then(e=>e.json()).then(e=>{console.log(e),Y(e)}).catch(e=>console.error("Error:",e)),m(!1))})}catch(e){console.error("Error:",e)}},D=(0,o.mN)({resolver:(0,t.u)(q),defaultValues:{lastName:"",emailAd:"",permHouseNo:"",fatherLastName:"",fatherMiddleName:"",spouseEmployer:"",bloodType:"",resHouseSt:"",civilStatus:"",motherMiddleName:"",pagibig:"",sss:"",philHealth:"",permBrgy:"",spouseMiddleName:"",fatherFirstName:"",resBrgy:"",permZipCode:"",motherLastName:"",tin:"",spouseEmployerAddress:"",height:"",sex:"",placeOfBirth:"",permHouseSt:"",agency:"",gsis:"",citizenship:"",weight:"",dateOfBirth:void 0,spouseFirstName:"",mobileNo:"",resHouseNo:"",resZipCode:"",telNo:"",spouseLastName:"",firstName:"",resProv:"",spouseOccupation:"",permHouseVil:"",motherFirstName:"",middleName:"",permCity:"",citizenshipAcq:"",resHouseVil:"",permProv:"",resCity:""}});return(0,n.jsxs)(M.Zp,{className:"mx-auto w-full",children:[(0,n.jsx)(M.aR,{children:(0,n.jsx)(M.ZB,{className:"text-left text-3xl font-bold",children:"Personal Information"})}),(0,n.jsx)(M.Wu,{children:(0,n.jsx)(j,{...D,children:(0,n.jsxs)("form",{onSubmit:D.handleSubmit(function(r){try{r.person_id=e,fetch(e?"http://localhost:8081/Prism/info_update_info":"http://localhost:8081/Prism/info_create_info",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(r=>{d(!0),console.log(r),e||k(r.personId)})}catch(e){console.error("Error:",e)}}),className:"space-y-30 gap-4",children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsx)(u,{control:D.control,name:"lastName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Last Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{...r,placeholder:"Enter your last name"})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"firstName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"First Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{...r,placeholder:"Enter your first name"})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"middleName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Middle Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{...r,placeholder:"Enter your middle name"})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"sex",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{className:"space-y-4",children:[(0,n.jsx)(g,{children:"Sex"}),(0,n.jsx)(v,{children:(0,n.jsxs)(A,{value:r.value,onValueChange:r.onChange,className:"flex space-x-4",children:[(0,n.jsxs)(N,{className:"flex items-center space-x-2 space-y--3",children:[(0,n.jsx)(v,{children:(0,n.jsx)(B,{value:"1"})}),(0,n.jsx)(g,{className:"font-normal",children:"Male"})]}),(0,n.jsxs)(N,{className:"flex items-center space-x-2 space-y--3",children:[(0,n.jsx)(v,{children:(0,n.jsx)(B,{value:"2"})}),(0,n.jsx)(g,{className:"font-normal",children:"Female"})]})]})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"civilStatus",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Civil Status"}),(0,n.jsxs)(E.l6,{...r,onValueChange:r.onChange,value:r.value,children:[(0,n.jsx)(v,{children:(0,n.jsx)(E.bq,{children:(0,n.jsx)(E.yv,{placeholder:"Select a status"})})}),(0,n.jsxs)(E.gC,{children:[(0,n.jsx)(E.eb,{value:"1",children:"Single"}),(0,n.jsx)(E.eb,{value:"2",children:"Married"}),(0,n.jsx)(E.eb,{value:"3",children:"Annuled"}),(0,n.jsx)(E.eb,{value:"4",children:"Separated"}),(0,n.jsx)(E.eb,{value:"5",children:"Widowed"})]})]}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"citizenship",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Citizenship"}),(0,n.jsxs)(E.l6,{...r,onValueChange:r.onChange,value:r.value,children:[(0,n.jsx)(v,{children:(0,n.jsx)(E.bq,{children:(0,n.jsx)(E.yv,{placeholder:"Select a citizenship type"})})}),(0,n.jsxs)(E.gC,{children:[(0,n.jsx)(E.eb,{value:"1",children:"Filipino"}),(0,n.jsx)(E.eb,{value:"2",children:"Dual Citizenship"})]})]}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"citizenshipAcq",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Citizenship Acquisition"}),(0,n.jsxs)(E.l6,{onValueChange:r.onChange,value:r.value,children:[(0,n.jsx)(v,{children:(0,n.jsx)(E.bq,{children:(0,n.jsx)(E.yv,{placeholder:"Select an acquisition"})})}),(0,n.jsxs)(E.gC,{children:[(0,n.jsx)(E.eb,{value:"1",children:"Birth"}),(0,n.jsx)(E.eb,{value:"2",children:"Naturalization"})]})]}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"bloodType",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Blood Type"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"height",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Height"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{type:"number",...r,placeholder:"Enter your hieght"})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"weight",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Weight"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{type:"number",...r,placeholder:"Enter your weight"})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"placeOfBirth",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Place of Birth"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"dateOfBirth",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{className:"grid grid-cols-1 space-y-1 top-20",children:[(0,n.jsx)(g,{children:"Date of birth"}),(0,n.jsxs)(w.AM,{children:[(0,n.jsx)(w.Wv,{asChild:!0,children:(0,n.jsx)(v,{children:(0,n.jsxs)(i.$,{variant:"outline",className:(0,c.cn)("col-span-1 pl-3 text-left font-normal",!r.value&&"text-muted-foreground"),children:[r.value?(0,_.GP)(r.value,"PPP"):(0,n.jsx)("span",{children:"Pick a date"}),(0,n.jsx)(H.A,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),(0,n.jsx)(w.hl,{align:"start",children:(0,n.jsx)(P.V,{mode:"single",onSelect:r.onChange,initialFocus:!0})})]}),(0,n.jsx)(b,{})]})}})]}),(0,n.jsxs)(O,{type:"multiple",className:"my-4",children:[(0,n.jsxs)(R,{value:"item-1",children:[(0,n.jsx)(L,{children:(0,n.jsx)("h3",{className:"text-2xl font-bold tracking-tight",children:"Government Issued Information"})}),(0,n.jsx)(V,{children:(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsx)(u,{control:D.control,name:"gsis",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"GSIS Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your last name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"pagibig",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"PagIBIG Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your first name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"philHealth",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"PhilHealth Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"sss",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"SSS Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"tin",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"TIN"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"agency",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Agency Employee Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}})]})})]}),(0,n.jsxs)(R,{value:"item-2",children:[(0,n.jsx)(L,{children:(0,n.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Contact Information"})}),(0,n.jsx)(V,{children:(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsx)(u,{control:D.control,name:"resHouseNo",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your last name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resHouseSt",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House Street"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your first name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resHouseVil",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House Village"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resBrgy",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House Barangay"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resCity",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House City"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resProv",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House Province"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"resZipCode",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Resident House ZIP Code"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permHouseNo",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permHouseSt",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House Street"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permHouseVil",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House Village"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permBrgy",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House Barangay"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permCity",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House City"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permProv",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House Province"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"permZipCode",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent House ZIP Code"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"telNo",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Permanent Telephone Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"mobileNo",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Mobile Number"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"emailAd",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Email Address"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}})]})})]}),(0,n.jsxs)(R,{value:"item-3",children:[(0,n.jsx)(L,{children:(0,n.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"Family Background"})}),(0,n.jsxs)(V,{children:[(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsx)(u,{control:D.control,name:"spouseLastName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse Last Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your last name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"spouseFirstName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse First Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your first name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"spouseMiddleName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse Middle Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"spouseOccupation",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse Occupation"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"spouseEmployer",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse Employer/Business Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"spouseEmployerAddress",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Spouse Business Address"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"fatherLastName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Father Last Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"fatherFirstName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Father First Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"fatherMiddleName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Father Middle Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"motherLastName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Mother Maiden Last Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"motherFirstName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Mother Maiden First Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}}),(0,n.jsx)(u,{control:D.control,name:"motherMiddleName",render:e=>{let{field:r}=e;return(0,n.jsxs)(N,{children:[(0,n.jsx)(g,{children:"Mother Maiden Middle Name"}),(0,n.jsx)(v,{children:(0,n.jsx)(C.p,{placeholder:"Enter your middle name",...r})}),(0,n.jsx)(b,{})]})}})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"mt-5 mb-5 text-2xl tracking-tight ",children:"List of Children"}),(0,n.jsxs)(S.XI,{children:[(0,n.jsx)(S.A0,{children:(0,n.jsx)(S.Hj,{children:(0,n.jsx)(S.nd,{children:"Full Name"})})}),(0,n.jsx)(S.BF,{children:y.map(e=>(0,n.jsx)(S.Hj,{className:"h-[50px]",onClick:()=>I(e.childId,e.fullName),children:(0,n.jsx)(S.nA,{children:e.fullName})},e.childId))})]}),(0,n.jsx)(i.$,{type:"button",variant:"secondary",onClick:()=>I(0,""),children:"Add New"})]}),(0,n.jsx)(z.lG,{open:h,onOpenChange:m,children:(0,n.jsxs)(z.Cf,{className:"sm:max-w-md",children:[(0,n.jsx)(z.c7,{children:(0,n.jsx)(z.L3,{children:"Child Information"})}),(0,n.jsxs)("div",{className:"grid flex gap-2",children:[(0,n.jsx)(x,{htmlFor:"chfullname",children:"Full Name"}),(0,n.jsx)(C.p,{id:"chfullname",defaultValue:p[1],onChange:e=>f([p[0],e.target.value])})]}),(0,n.jsxs)(z.Es,{className:"sm:justify-start",children:[(0,n.jsx)(i.$,{onClick:()=>T(p[0],p[1]),children:"Save changes"}),"number"==typeof p[0]&&p[0]>0&&(0,n.jsx)(i.$,{onClick:()=>Z(p[0]),variant:"destructive",children:"Delete"}),(0,n.jsx)(z.HM,{asChild:!0,children:(0,n.jsx)(i.$,{type:"button",variant:"secondary",children:"Close"})})]})]})})]})]})]}),(0,n.jsx)(i.$,{type:"submit",className:"w-48",children:"Submit"}),(0,n.jsx)(z.lG,{open:a,onOpenChange:d,children:(0,n.jsxs)(z.Cf,{children:[(0,n.jsx)(z.c7,{children:(0,n.jsx)(z.L3,{children:"Data Saved Successfully!"})}),(0,n.jsx)(z.rr,{children:"Your data has been successfully saved and stored in the system."}),(0,n.jsx)(z.Es,{children:(0,n.jsx)(z.HM,{asChild:!0,children:(0,n.jsx)(i.$,{type:"button",variant:"secondary",onClick:()=>{window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?person_id=").concat(F)},children:"Okay"})})})]})})]})})})]})}},91423:(e,r,s)=>{"use strict";s.d(r,{V:()=>d});var n=s(95155);s(12115);var l=s(93518),t=s(46967),o=s(47908),a=s(29602),i=s(14085);function d(e){let{className:r,classNames:s,showOutsideDays:d=!0,...c}=e;return(0,n.jsx)(o.hv,{showOutsideDays:d,className:(0,a.cn)("p-3",r),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,a.cn)((0,i.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:(0,a.cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md","range"===c.mode?"[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md":"[&:has([aria-selected])]:rounded-md"),day:(0,a.cn)((0,i.r)({variant:"ghost"}),"h-8 w-8 p-0 font-normal aria-selected:opacity-100"),day_range_start:"day-range-start",day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...s},components:{IconLeft:e=>{let{className:r,...s}=e;return(0,n.jsx)(l.A,{className:(0,a.cn)("h-4 w-4",r),...s})},IconRight:e=>{let{className:r,...s}=e;return(0,n.jsx)(t.A,{className:(0,a.cn)("h-4 w-4",r),...s})}},...c})}d.displayName="Calendar"},35007:(e,r,s)=>{"use strict";s.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>i,Zp:()=>o,aR:()=>a,wL:()=>h});var n=s(95155),l=s(12115),t=s(29602);let o=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("rounded-xl border bg-card text-card-foreground shadow",s),...l})});o.displayName="Card";let a=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",s),...l})});a.displayName="CardHeader";let i=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("font-semibold leading-none tracking-tight",s),...l})});i.displayName="CardTitle";let d=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("text-sm text-muted-foreground",s),...l})});d.displayName="CardDescription";let c=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("p-6 pt-0",s),...l})});c.displayName="CardContent";let h=l.forwardRef((e,r)=>{let{className:s,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,t.cn)("flex items-center p-6 pt-0",s),...l})});h.displayName="CardFooter"}},e=>{var r=r=>e(e.s=r);e.O(0,[365,674,318,142,11,908,423,343,441,517,358],()=>r(76525)),_N_E=e.O()}]);