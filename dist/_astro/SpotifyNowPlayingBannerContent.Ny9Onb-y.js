import{j as t}from"./jsx-runtime.9YwcPWTT.js";import{r as e}from"./index.LFf77hJu.js";function y(){const[o,l]=e.useState(""),[u,s]=e.useState("..."),[r,f]=e.useState("");return e.useEffect(()=>{async function h(){const a=await fetch("https://hockerman-com-spotify.mhoc.workers.dev/current",{headers:{Authorization:"Basic OxcnwUZBWMrwf_hQKMpJmmcXkNcf9ID3"}});if(a.status===200){const n=await a.json(),i=n?.item?.name,c=n?.item?.artists[0].name,m=n?.item?.album?.name;!i||!c||!m?s("Playing Nothing"):(l(i),s(c),f(m))}else a.status===204&&s("Playing Nothing")}h()},[]),t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{color:"#28323E",fontSize:"1.2rem",fontStyle:"italic",transition:"all .25s ease-out"},children:o||t.jsx(t.Fragment,{children:" "})}),t.jsx("span",{style:{color:"#28323E",fontSize:"0.9rem",transition:"all .25s ease-out"},children:u}),t.jsx("span",{style:{color:"#28323E",fontSize:"0.9rem",transition:"all .25s ease-out"},children:r||t.jsx(t.Fragment,{children:" "})})]})}export{y as default};
