(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{34967:(e,a,t)=>{Promise.resolve().then(t.bind(t,21960)),Promise.resolve().then(t.bind(t,3392)),Promise.resolve().then(t.bind(t,89282)),Promise.resolve().then(t.t.bind(t,48173,23))},21960:(e,a,t)=>{"use strict";t.d(a,{default:()=>K});var s=t(95155),r=t(12115),l=t(14085),n=t(3392),d=t(50745),o=t(29602);let i=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,o.cn)("w-full caption-bottom text-sm",t),...r})})});i.displayName="Table";let c=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("thead",{ref:a,className:(0,o.cn)("[&_tr]:border-b",t),...r})});c.displayName="TableHeader";let m=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tbody",{ref:a,className:(0,o.cn)("[&_tr:last-child]:border-0",t),...r})});m.displayName="TableBody",r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tfoot",{ref:a,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...r})}).displayName="TableFooter";let f=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tr",{ref:a,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...r})});f.displayName="TableRow";let u=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("th",{ref:a,className:(0,o.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...r})});u.displayName="TableHead";let p=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("td",{ref:a,className:(0,o.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...r})});p.displayName="TableCell",r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("caption",{ref:a,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",t),...r})}).displayName="TableCaption";var x=t(87365),h=t(89789),g=t(19083),b=t(93518),N=t(46967);function j(e){var a;let{columns:t,data:o,totalItems:j,pageSizeOptions:y=[10,20,30,40,50]}=e,[w,v]=(0,r.useState)(1),[C,R]=(0,r.useState)(10),k={pageIndex:w-1,pageSize:C},P=Math.ceil(j/C),z=(0,h.N4)({data:o,columns:t,pageCount:P,state:{pagination:k},onPaginationChange:e=>{let a="function"==typeof e?e(k):e;v(a.pageIndex+1),R(a.pageSize)},getCoreRowModel:(0,g.HT)(),getPaginationRowModel:(0,g.kW)(),manualPagination:!0,manualFiltering:!0});return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)(n.ScrollArea,{className:"grid h-[calc(80vh-220px)] rounded-md border md:h-[calc(90dvh-240px)]",children:[(0,s.jsxs)(i,{className:"relative",children:[(0,s.jsx)(c,{children:z.getHeaderGroups().map(e=>(0,s.jsx)(f,{children:e.headers.map(e=>(0,s.jsx)(u,{children:e.isPlaceholder?null:(0,h.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(m,{children:(null===(a=z.getRowModel().rows)||void 0===a?void 0:a.length)?z.getRowModel().rows.map(e=>(0,s.jsx)(f,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,s.jsx)(p,{children:(0,h.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(f,{children:(0,s.jsx)(p,{colSpan:t.length,className:"h-24 text-center",children:"No results."})})})]}),(0,s.jsx)(n.$,{orientation:"horizontal"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,s.jsx)("div",{className:"flex-1 text-sm text-muted-foreground",children:j>0?(0,s.jsxs)(s.Fragment,{children:["Showing"," ",k.pageIndex*k.pageSize+1," to"," ",Math.min((k.pageIndex+1)*k.pageSize,j)," ","of ",j," entries"]}):"No entries found"}),(0,s.jsx)("div",{className:"flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("p",{className:"whitespace-nowrap text-sm font-medium",children:"Rows per page"}),(0,s.jsxs)(d.l6,{value:"".concat(k.pageSize),onValueChange:e=>{z.setPageSize(Number(e))},children:[(0,s.jsx)(d.bq,{className:"h-8 w-[70px]",children:(0,s.jsx)(d.yv,{placeholder:k.pageSize})}),(0,s.jsx)(d.gC,{side:"top",children:y.map(e=>(0,s.jsx)(d.eb,{value:"".concat(e),children:e},e))})]})]})})]}),(0,s.jsxs)("div",{className:"flex w-full items-center justify-between gap-2 sm:justify-end",children:[(0,s.jsx)("div",{className:"flex w-[150px] items-center justify-center text-sm font-medium",children:j>0?(0,s.jsxs)(s.Fragment,{children:["Page ",k.pageIndex+1," of ",z.getPageCount()]}):"No pages"}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(l.$,{"aria-label":"Go to first page",variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>z.setPageIndex(0),disabled:!z.getCanPreviousPage(),children:(0,s.jsx)(x.jvd,{className:"h-4 w-4","aria-hidden":"true"})}),(0,s.jsx)(l.$,{"aria-label":"Go to previous page",variant:"outline",className:"h-8 w-8 p-0",onClick:()=>z.previousPage(),disabled:!z.getCanPreviousPage(),children:(0,s.jsx)(b.A,{className:"h-4 w-4","aria-hidden":"true"})}),(0,s.jsx)(l.$,{"aria-label":"Go to next page",variant:"outline",className:"h-8 w-8 p-0",onClick:()=>z.nextPage(),disabled:!z.getCanNextPage(),children:(0,s.jsx)(N.A,{className:"h-4 w-4","aria-hidden":"true"})}),(0,s.jsx)(l.$,{"aria-label":"Go to last page",variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>z.setPageIndex(z.getPageCount()-1),disabled:!z.getCanNextPage(),children:(0,s.jsx)(x.QZK,{className:"h-4 w-4","aria-hidden":"true"})})]})]})]})]})}var y=t(86352),w=t(98867);let v=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(y.bL,{ref:a,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...r,children:(0,s.jsx)(y.C1,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(w.A,{className:"h-4 w-4"})})})});v.displayName=y.bL.displayName;var C=t(46020),R=t(40767);let k=C.bL;C.l9;let P=C.ZL;C.bm;let z=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(C.hJ,{ref:a,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});z.displayName=C.hJ.displayName;let S=r.forwardRef((e,a)=>{let{className:t,children:r,...l}=e;return(0,s.jsxs)(P,{children:[(0,s.jsx)(z,{}),(0,s.jsxs)(C.UC,{ref:a,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...l,children:[r,(0,s.jsxs)(C.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(R.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});S.displayName=C.UC.displayName;let A=e=>{let{className:a,...t}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",a),...t})};A.displayName="DialogHeader";let _=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(C.hE,{ref:a,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",t),...r})});_.displayName=C.hE.displayName;let I=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(C.VY,{ref:a,className:(0,o.cn)("text-sm text-muted-foreground",t),...r})});I.displayName=C.VY.displayName;let L=e=>{let{title:a,description:t,isOpen:r,onClose:l,children:n}=e;return(0,s.jsx)(k,{open:r,onOpenChange:e=>{e||l()},children:(0,s.jsxs)(S,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(_,{children:a}),(0,s.jsx)(I,{children:t})]}),(0,s.jsx)("div",{children:n})]})})},M=e=>{let{isOpen:a,onClose:t,onConfirm:n,loading:d}=e,[o,i]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{i(!0)},[]),o)?(0,s.jsx)(L,{title:"Are you sure?",description:"This action cannot be undone.",isOpen:a,onClose:t,children:(0,s.jsxs)("div",{className:"flex w-full items-center justify-end space-x-2 pt-6",children:[(0,s.jsx)(l.$,{disabled:d,variant:"outline",onClick:t,children:"Cancel"}),(0,s.jsx)(l.$,{disabled:d,variant:"destructive",onClick:n,children:"Continue"})]})}):null};var T=t(20750),U=t(84858),$=t(26764),E=t(19993),O=t(76046);let V=e=>{let{}=e,[a]=(0,r.useState)(!1),[t,n]=(0,r.useState)(!1),d=(0,O.useRouter)(),o=async()=>{n(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M,{isOpen:t,onClose:()=>n(!1),onConfirm:o,loading:a}),(0,s.jsxs)(T.rI,{modal:!1,children:[(0,s.jsx)(T.ty,{asChild:!0,children:(0,s.jsxs)(l.$,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,s.jsx)(U.A,{className:"h-4 w-4"})]})}),(0,s.jsxs)(T.SQ,{align:"end",children:[(0,s.jsx)(T.lp,{children:"Actions"}),(0,s.jsxs)(T._2,{onClick:()=>d.push("/employee/info"),children:[(0,s.jsx)($.A,{className:"mr-2 h-4 w-4"})," Update"]}),(0,s.jsxs)(T._2,{onClick:()=>n(!0),children:[(0,s.jsx)(E.A,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},F=[{id:"select",header:e=>{let{table:a}=e;return(0,s.jsx)(v,{checked:a.getIsAllPageRowsSelected(),onCheckedChange:e=>a.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:a}=e;return(0,s.jsx)(v,{checked:a.getIsSelected(),onCheckedChange:e=>a.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"NAME"},{accessorKey:"country",header:"COUNTRY"},{accessorKey:"email",header:"EMAIL"},{accessorKey:"job",header:"COMPANY",enableSorting:!0},{accessorKey:"gender",header:"GENDER"},{id:"actions",cell:e=>{let{row:a}=e;return(0,s.jsx)(V,{data:a.original})}}];function K(e){let{data:a,totalData:t}=e;return(0,s.jsx)("div",{className:"space-y-4",children:(0,s.jsx)(j,{columns:F,data:a,totalItems:t})})}},14085:(e,a,t)=>{"use strict";t.d(a,{$:()=>i,r:()=>o});var s=t(95155),r=t(12115),l=t(12317),n=t(31027),d=t(29602);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=r.forwardRef((e,a)=>{let{className:t,variant:r,size:n,asChild:i=!1,...c}=e,m=i?l.DX:"button";return(0,s.jsx)(m,{className:(0,d.cn)(o({variant:r,size:n,className:t})),ref:a,...c})});i.displayName="Button"},20750:(e,a,t)=>{"use strict";t.d(a,{SQ:()=>f,_2:()=>u,lp:()=>p,rI:()=>c,ty:()=>m});var s=t(95155),r=t(12115),l=t(29053),n=t(46967),d=t(98867),o=t(33565),i=t(29602);let c=l.bL,m=l.l9;l.YJ,l.ZL,l.Pb,l.z6,r.forwardRef((e,a)=>{let{className:t,inset:r,children:d,...o}=e;return(0,s.jsxs)(l.ZP,{ref:a,className:(0,i.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",r&&"pl-8",t),...o,children:[d,(0,s.jsx)(n.A,{className:"ml-auto"})]})}).displayName=l.ZP.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.G5,{ref:a,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})}).displayName=l.G5.displayName;let f=r.forwardRef((e,a)=>{let{className:t,sideOffset:r=4,...n}=e;return(0,s.jsx)(l.ZL,{children:(0,s.jsx)(l.UC,{ref:a,sideOffset:r,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});f.displayName=l.UC.displayName;let u=r.forwardRef((e,a)=>{let{className:t,inset:r,...n}=e;return(0,s.jsx)(l.q7,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",r&&"pl-8",t),...n})});u.displayName=l.q7.displayName,r.forwardRef((e,a)=>{let{className:t,children:r,checked:n,...o}=e;return(0,s.jsxs)(l.H_,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(d.A,{className:"h-4 w-4"})})}),r]})}).displayName=l.H_.displayName,r.forwardRef((e,a)=>{let{className:t,children:r,...n}=e;return(0,s.jsxs)(l.hN,{ref:a,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(o.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=l.hN.displayName;let p=r.forwardRef((e,a)=>{let{className:t,inset:r,...n}=e;return(0,s.jsx)(l.JU,{ref:a,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",t),...n})});p.displayName=l.JU.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.wv,{ref:a,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=l.wv.displayName},3392:(e,a,t)=>{"use strict";t.d(a,{$:()=>o,ScrollArea:()=>d});var s=t(95155),r=t(12115),l=t(21868),n=t(29602);let d=r.forwardRef((e,a)=>{let{className:t,children:r,...d}=e;return(0,s.jsxs)(l.bL,{ref:a,className:(0,n.cn)("relative overflow-hidden",t),...d,children:[(0,s.jsx)(l.LM,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(o,{}),(0,s.jsx)(l.OK,{})]})});d.displayName=l.bL.displayName;let o=r.forwardRef((e,a)=>{let{className:t,orientation:r="vertical",...d}=e;return(0,s.jsx)(l.VM,{ref:a,orientation:r,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...d,children:(0,s.jsx)(l.lr,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.VM.displayName},50745:(e,a,t)=>{"use strict";t.d(a,{bq:()=>f,eb:()=>h,gC:()=>x,l6:()=>c,yv:()=>m});var s=t(95155),r=t(12115),l=t(9116),n=t(51719),d=t(91902),o=t(98867),i=t(29602);let c=l.bL;l.YJ;let m=l.WT,f=r.forwardRef((e,a)=>{let{className:t,children:r,...d}=e;return(0,s.jsxs)(l.l9,{ref:a,className:(0,i.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...d,children:[r,(0,s.jsx)(l.In,{asChild:!0,children:(0,s.jsx)(n.A,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=l.l9.displayName;let u=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.PP,{ref:a,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(d.A,{className:"h-4 w-4"})})});u.displayName=l.PP.displayName;let p=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.wn,{ref:a,className:(0,i.cn)("flex cursor-default items-center justify-center py-1",t),...r,children:(0,s.jsx)(n.A,{className:"h-4 w-4"})})});p.displayName=l.wn.displayName;let x=r.forwardRef((e,a)=>{let{className:t,children:r,position:n="popper",...d}=e;return(0,s.jsx)(l.ZL,{children:(0,s.jsxs)(l.UC,{ref:a,className:(0,i.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:n,...d,children:[(0,s.jsx)(u,{}),(0,s.jsx)(l.LM,{className:(0,i.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(p,{})]})})});x.displayName=l.UC.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.JU,{ref:a,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",t),...r})}).displayName=l.JU.displayName;let h=r.forwardRef((e,a)=>{let{className:t,children:r,...n}=e;return(0,s.jsxs)(l.q7,{ref:a,className:(0,i.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,s.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(l.VF,{children:(0,s.jsx)(o.A,{className:"h-4 w-4"})})}),(0,s.jsx)(l.p4,{children:r})]})});h.displayName=l.q7.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(l.wv,{ref:a,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=l.wv.displayName},89282:(e,a,t)=>{"use strict";t.d(a,{Separator:()=>d});var s=t(95155),r=t(12115),l=t(90434),n=t(29602);let d=r.forwardRef((e,a)=>{let{className:t,orientation:r="horizontal",decorative:d=!0,...o}=e;return(0,s.jsx)(l.b,{ref:a,decorative:d,orientation:r,className:(0,n.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",t),...o})});d.displayName=l.b.displayName},29602:(e,a,t)=>{"use strict";t.d(a,{cn:()=>l});var s=t(43463),r=t(69795);function l(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,r.QP)((0,s.$)(a))}}},e=>{var a=a=>e(e.s=a);e.O(0,[105,365,55,868,404,205,271,441,517,358],()=>a(34967)),_N_E=e.O()}]);