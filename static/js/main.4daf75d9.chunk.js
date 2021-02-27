(this.webpackJsonpgraphediting=this.webpackJsonpgraphediting||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){e.exports={container:"forceGraph_container__1gzsd",male:"forceGraph_male__3ebJ9",female:"forceGraph_female__2zQIC",node:"forceGraph_node__1xPTl",tooltip:"forceGraph_tooltip__bZJe3",contextMenu:"forceGraph_contextMenu__17mUO",menuEntry:"forceGraph_menuEntry__3hChz"}},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),s=n.n(c),o=(n(47),n(7)),i=n(2),l=(n(48),n(15),n.p+"static/media/redoIcon.ba597351.svg"),d=n.p+"static/media/upload-thick.2b0d678b.svg",u=n.p+"static/media/plusSquare.4903a1f7.svg",f=n.p+"static/media/downMenu.a7a8095f.svg",p=n.p+"static/media/addNode.32ab0af6.svg",j=n.p+"static/media/links.d361ac9c.svg",g=n.p+"static/media/modify.c1b1d5f5.svg",h=n.p+"static/media/removeNode.6f2e8054.svg",b=n.p+"static/media/csvFile.6ebd3c15.svg",m=n.p+"static/media/outputFile.81bbffdd.svg",O=n(0),v=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useRef)(),o=Object(a.useRef)(),v=Object(a.useRef)(),x=Object(a.useRef)(),N=Object(a.useRef)(),k=Object(a.useState)(1),I=Object(i.a)(k,2),y=I[0],E=I[1],w=Object(a.useRef)(),C=Object(a.useRef)(),S=Object(a.useState)(2),G=Object(i.a)(S,2),F=G[0],D=G[1],M=Object(a.useState)(3),_=Object(i.a)(M,2),A=_[0],U=_[1],R=function(){console.log(w.current.value+" "+C.current.value),D(w.current.value),U(C.current.value)};return Object(O.jsxs)("div",{className:"options",children:[Object(O.jsx)("span",{className:"header",children:"Graph Editing"}),Object(O.jsx)("span",{className:"description",children:"Add a graph to edit and visualize"}),Object(O.jsxs)("div",{className:"reset",onClick:e.reset,children:[Object(O.jsx)("img",{className:"resetIcon",src:l}),Object(O.jsx)("span",{className:"resetText",children:"Reset options"})]}),Object(O.jsxs)("div",{className:"sections",children:[Object(O.jsxs)("div",{className:"sectionToggle",onClick:function(){t.current.classList.toggle("closed"),n.current.classList.toggle("rotate")},children:[Object(O.jsx)("span",{className:"sectionTitle",children:"Upload a graph file"}),Object(O.jsx)("img",{ref:n,className:"menuIcon",src:f})]}),Object(O.jsxs)("div",{ref:t,className:"fileSection",children:[Object(O.jsxs)("div",{className:e.graphFile?"uploadGr green":"uploadGr",onClick:function(){document.getElementById("fileUpload").click()},children:[Object(O.jsx)("img",{className:"uploadIcon",src:d}),Object(O.jsx)("span",{className:"uploadspan",children:"Upload file"}),Object(O.jsx)("input",{id:"fileUpload",type:"file",onChange:e.handleFileUpload,className:"noDisplay"})]}),Object(O.jsxs)("div",{className:e.graphFile?"uploadGr green":"uploadGr",onClick:e.handleModifiedDownload,children:[Object(O.jsx)("img",{className:"uploadIcon",src:m}),Object(O.jsx)("span",{className:"uploadspan",children:"Download graph"})]})]}),Object(O.jsxs)("div",{className:"sectionToggle",onClick:function(){s.current.classList.toggle("closed"),o.current.classList.toggle("rotate")},children:[Object(O.jsx)("span",{className:"sectionTitle",children:"Graph options"}),Object(O.jsx)("img",{ref:o,className:"menuIcon",src:f})]}),Object(O.jsxs)("div",{ref:s,className:"fileSection",children:[Object(O.jsxs)("div",{className:"addArff",onClick:e.addNode,children:[Object(O.jsx)("img",{className:"plusIcon",src:p}),Object(O.jsx)("span",{className:"uploadspan",children:"Add node"})]}),Object(O.jsxs)("div",{className:"modifyLink",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"plusIcon",src:j}),Object(O.jsx)("span",{className:"uploadspan",children:"Modify links"})]}),Object(O.jsx)("span",{className:"nodespan",children:"Start:"}),Object(O.jsx)("input",{ref:w,className:"nodeInput",placeholder:"1",onChange:R}),Object(O.jsx)("img",{className:"modifyIcon",src:g}),Object(O.jsx)("span",{className:"nodespan2",children:"End:"}),Object(O.jsx)("input",{ref:C,className:"nodeInput",placeholder:"2",onChange:R}),Object(O.jsx)("span",{className:"modifyLinkButton",onClick:function(){return e.modifyLink(F,A)},children:"Modify"})]}),Object(O.jsxs)("div",{className:"modifyLink",children:[Object(O.jsxs)("div",{className:"removeNodeTitle",children:[Object(O.jsx)("img",{className:"plusIcon",src:h}),Object(O.jsx)("span",{className:"uploadspan",children:"Remove node"})]}),Object(O.jsx)("span",{className:"nodespan",children:"Node:"}),Object(O.jsx)("input",{ref:N,className:"nodeInput",placeholder:"1",onChange:function(){E(N.current.value),console.log("Node to remove value",N.current.value)}}),Object(O.jsx)("span",{className:"removeNodeButton",onClick:function(){return e.removeNode(y)},children:"Remove"})]})]}),Object(O.jsxs)("div",{className:"sectionToggle",onClick:function(){r.current.classList.toggle("closed"),c.current.classList.toggle("rotate")},children:[Object(O.jsx)("span",{className:"sectionTitle",children:"Pace and Weka file options"}),Object(O.jsx)("img",{ref:c,className:"menuIcon",src:f})]}),Object(O.jsxs)("div",{ref:r,className:"fileSection",children:[Object(O.jsxs)("div",{className:e.grGraphFile?"uploadGr green":"uploadGr",onClick:function(){document.getElementById("grUpload").click()},children:[Object(O.jsx)("img",{className:"uploadIcon",src:d}),Object(O.jsx)("span",{className:"uploadspan",children:"Upload a .gr graph file"}),Object(O.jsx)("input",{id:"grUpload",type:"file",onChange:e.handleGrFileUpload,className:"noDisplay"})]}),Object(O.jsxs)("div",{className:e.arffGraphFile?"addArff green":"addArff",onClick:function(){e.grGraphFile&&!e.modified?document.getElementById("arffUpload").click():e.modified?window.alert("Can not upload an arff file because the graph has been manually modified"):window.alert("No .gr graph file found. Please upload a graph before proceeding.")},children:[Object(O.jsx)("img",{className:"plusIcon",src:u}),Object(O.jsx)("span",{className:"uploadspan",children:"Add .arff file to graph"}),Object(O.jsx)("input",{id:"arffUpload",type:"file",onChange:e.handleArffFileUpload,className:"noDisplay"})]})]}),Object(O.jsxs)("div",{className:"sectionToggle",onClick:function(){v.current.classList.toggle("closed"),x.current.classList.toggle("rotate")},children:[Object(O.jsx)("span",{className:"sectionTitle",children:"Pace and Weka format file outputs"}),Object(O.jsx)("img",{ref:x,className:"menuIcon",src:f})]}),Object(O.jsxs)("div",{ref:v,className:"fileSection",children:[Object(O.jsxs)("div",{className:e.grGraphFile?"uploadGr green":"uploadGr",onClick:e.handleCsvDownload,children:[Object(O.jsx)("img",{className:"uploadIcon",src:b}),Object(O.jsx)("span",{className:"uploadspan",children:"Download CSV file"})]}),Object(O.jsxs)("div",{className:e.arffGraphFile?"addArff green":"addArff",onClick:e.handleOutFileDownload,children:[Object(O.jsx)("img",{className:"plusIcon",src:m}),Object(O.jsx)("span",{className:"uploadspan",children:"Download Output file"})]})]})]})]})},x=n(3);n(51);var N=n(17),k=n.n(N);function I(e){var t=e.graph,n=Object(a.useRef)(null),r=Object(a.useState)(),c=Object(i.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(),d=Object(i.a)(l,2),u=d[0],f=d[1],p=Object(a.useState)(),j=Object(i.a)(p,2),g=j[0],h=j[1],b=Object(a.useState)(),m=Object(i.a)(b,2),v=m[0],N=m[1],I=Object(a.useState)(),y=Object(i.a)(I,2),E=y[0],w=y[1],C=function(){return"#9D00A0"},S=Object(a.useState)(!0),G=Object(i.a)(S,2),F=G[0],D=G[1],M=function(e){return x.a().on("start",(function(t,n){t.active||e.alphaTarget(.3).restart(),n.fx=n.x,n.fy=n.y})).on("drag",(function(e,t){t.fx=e.x,t.fy=e.y})).on("end",(function(t,n){t.active||e.alphaTarget(0),n.fx=null,n.fy=null}))};return Object(a.useEffect)((function(){var e;if(console.log("Grafi",t),n.current&&F){console.log("From inside");var a=function(e,t,n,a,r,c,s,o,i){var l=e.getBoundingClientRect(),d=l.height,u=l.width;return n=x.d(t.nodes).force("link",x.b(t.links).id((function(e){return e.id}))).force("charge",x.c().strength(-150)).force("x",x.e()).force("y",x.f()),o=x.g(e).append("svg").attr("id","graphSvg").attr("viewBox",[-u/2,-d/2,u,d]).call(x.h().on("zoom",(function(e){o.attr("transform",e.transform)}))),r=o.append("g").attr("stroke","#999").attr("stroke-opacity",.6).selectAll("line").data(t.links).join("line").attr("stroke-width",(function(e){return Math.sqrt(e.value)})),a=o.append("g").attr("stroke","#fff").attr("stroke-width",2).selectAll("circle").data(t.nodes).join("circle").attr("r",12).attr("fill",s).call(i(n)).on("click",(function(e){return console.log("Node clicked",e)})),c=o.append("g").attr("class","labels").selectAll("text").data(t.nodes).enter().append("text").attr("text-anchor","middle").attr("dominant-baseline","central").text((function(e){return e.id})).call(i(n)),n.on("tick",(function(){r.attr("x1",(function(e){return e.source.x})).attr("y1",(function(e){return e.source.y})).attr("x2",(function(e){return e.target.x})).attr("y2",(function(e){return e.target.y})),a.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})),c.attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y}))})),{destroy:function(){n.stop()},nodes:function(){return o.node()},svg:o,node:a,link:r,label:c,simulation:n}}(n.current,t,s,g,v,E,C,u,M);e=a.destroy,f(a.svg),h(a.node),N(a.link),w(a.label),o(a.simulation),D(!1)}else{var r=function(e,t,n,a,r,c,s,o){var i=e.nodes,l=e.links,d=new Map(n.data().map((function(e){return[e.id,e]})));return console.log("old",d),console.log("svg",s),i=i.map((function(e){return Object.assign(d.get(e.id)||{},e)})),l=l.map((function(e){return Object.assign({},e)})),console.log("updated nodes",i),console.log("updated links",l),n=n.data(i,(function(e){return e.id})).join((function(e){return e.append("circle").attr("r",12).attr("fill",c)})).call(o(t)),a=a.data(l,(function(e){return[e.source,e.target]})).join("line"),r=r.data(i,(function(e){return e.id})).join((function(e){return e.append("text").attr("text-anchor","middle").attr("dominant-baseline","central").text((function(e){return e.id}))})).call(o(t)),t.nodes(i),t.force("link").links(l),t.alpha(1).restart(),t.on("tick",(function(){a.attr("x1",(function(e){return e.source.x})).attr("y1",(function(e){return e.source.y})).attr("x2",(function(e){return e.target.x})).attr("y2",(function(e){return e.target.y})),n.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})),r.attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y}))})),{destroy:function(){t.stop()},nodes:function(){return s.node()},node:n,link:a,label:r,simulation:t}}(t,s,g,v,E,C,u,M);e=r.destroy,f(r.svg),h(r.node),N(r.link),w(r.label),o(r.simulation)}return e}),[t]),Object(O.jsx)("div",{ref:n,className:k.a.container})}var y=[[0,1,1],[1,0,0],[1,0,0]],E=function(e){var t=[],n={},a=[],r=[];return e.forEach((function(e,n){e.includes(1)&&t.push(n+1)})),t.forEach((function(e){a.push({id:e})})),n.nodes=a,e.forEach((function(t,n){t.forEach((function(t,a){n<a&&1===e[n][a]&&r.push({source:n+1,target:a+1})}))})),n.links=r,console.log("Graph",n),n},w=function(e,t,n){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t));var r=e.substr(0,e.length-3)+n;a.setAttribute("download",r),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},C=function(){var e=new FileReader,t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),l=Object(i.a)(s,2),d=l[0],u=l[1],f=Object(a.useState)(),p=Object(i.a)(f,2),j=p[0],g=p[1],h=Object(a.useState)(E(y)),b=Object(i.a)(h,2),m=b[0],x=b[1],N=Object(a.useState)(3),k=Object(i.a)(N,2),C=k[0],S=k[1],G=Object(a.useState)(),F=Object(i.a)(G,2),D=(F[0],F[1]),M=Object(a.useState)(),_=Object(i.a)(M,2),A=_[0],U=_[1],R=Object(a.useState)(),T=Object(i.a)(R,2),L=T[0],B=T[1],P=Object(a.useState)(),z=Object(i.a)(P,2),J=z[0],q=z[1],V=Object(a.useState)(),W=Object(i.a)(V,2),Q=(W[0],W[1]),Z=Object(a.useState)(),H=Object(i.a)(Z,2),K=H[0],X=H[1],Y=Object(a.useState)(),$=Object(i.a)(Y,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){if(J){var e=function(e,t,n){for(var a=[],r=0;r<n;r++)a.push([]);a.forEach((function(e){for(var t=0;t<n;t++)e.push(0)}));for(var c=0;c<n;c++)for(var s=0;s<n;s++)e[c][s]!==t[c][s]&&(a[c][s]=1);console.log("difference matrix",a);for(var o="",i=0;i<n;i++)for(var l=0;l<n;l++)i<l&&1===a[i][l]&&(0===o.length?o+="".concat(i+1," ").concat(l+1):o+="\n".concat(i+1," ").concat(l+1));return{differenceMatrix:a,outFile:o}}(A,J,C);Q(e.differenceMatrix),X(e.outFile)}}),[J]);return Object(a.useEffect)((function(){console.log("graph after link modification",m)}),[m]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("div",{className:"graph",children:Object(O.jsx)(I,{graph:m})}),Object(O.jsx)(v,{graphFile:r,grGraphFile:d,arffGraphFile:j,handleFileUpload:function(t){e.readAsText(t.target.files[0],"utf-8"),e.onload=function(e){c(e.target.result);var t=function(e){var t=e.split("\n"),n=0,a=[];t.forEach((function(e){var t=e.split(" ");a.push(t)})),a.forEach((function(e){var t=0,a=parseInt(e[0]),r=parseInt(e[1]);(t=a>r?a:r)>n&&(n=t)})),console.log("Number of nodes",n);for(var r=[],c=0;c<n;c++)r.push([]);return r.forEach((function(e){for(var t=0;t<n;t++)e.push(0)})),a.forEach((function(e){var t=e[0],n=e[1];r[parseInt(t)-1][parseInt(n)-1]=1,r[parseInt(n)-1][parseInt(t)-1]=1})),console.log("empty matrix",r),{initialMatrix:r,numberOfNodes:n}}(e.target.result);S(parseInt(t.numberOfNodes)),D(t.initialMatrix);var n=E(t.initialMatrix);x(n)},document.getElementById("fileUpload").value=""},handleGrFileUpload:function(t){e.readAsText(t.target.files[0],"utf-8"),e.onload=function(e){u(e.target.result);var t=function(e){var t=e.split("\n");t=t.filter((function(e){return""!==e}));var n={nodesD:0,linksD:0,linkedNodes:[]};t.forEach((function(e){var t=e.split(" ");"p"===t[0]&&(n.nodesD=t[2],n.linksD=t[3])})),console.log(n.nodesD,n.linksD);for(var a=[],r=0;r<n.nodesD;r++)a.push([]);a.forEach((function(e){for(var t=0;t<n.nodesD;t++)e.push(0)})),t.forEach((function(e){var t=e.split(" ");if("p"!==t[0]){var n=t[0],r=t[1];a[parseInt(n)-1][parseInt(r)-1]=1,a[parseInt(r)-1][parseInt(n)-1]=1}})),t.forEach((function(e){var t=e.split(" ");if("p"!==t[0]){var a=t[0],r=t[1];n.linkedNodes.push(a),n.linkedNodes.push(r)}}));for(var c="Node",s=0;s<n.nodesD;s++)c+=", ".concat(s+1);return a.forEach((function(e,t){c+="\n ".concat(t+1),e.forEach((function(e){c+=", ".concat(e)}))})),{initialMatrix:a,numberOfNodes:n.nodesD,csv:c}}(e.target.result);S(parseInt(t.numberOfNodes)),U(t.initialMatrix);var n=E(t.initialMatrix);x(n),B(t.csv)},document.getElementById("grUpload").value=""},handleArffFileUpload:function(t){e.readAsText(t.target.files[0],"utf-8"),e.onload=function(e){g(e.target.result);var t=function(e,t){var n=e.split("\n");n=(n=(n=n.filter((function(e){return""!==e}))).filter((function(e){return"@"!==e.split("")[0]}))).map((function(e){return e.split(",")}));var a=parseInt(t)+2,r=[];n.forEach((function(e){var t={node:e[1],cluster:e[a]};r.push(t)}));var c=[];r.forEach((function(e,t){r.forEach((function(n,a){t<a&&e.cluster===n.cluster&&c.push({x:e.node,y:n.node})}))}));for(var s=[],o=0;o<t;o++)s.push([]);return s.forEach((function(e){for(var n=0;n<t;n++)e.push(0)})),c.forEach((function(e){s[parseInt(e.x)-1][parseInt(e.y)-1]=1,s[parseInt(e.y)-1][parseInt(e.x)-1]=1})),{finalMatrix:s}}(e.target.result,C);q(t.finalMatrix);var n=E(t.finalMatrix);x(n)},document.getElementById("arffUpload").value=""},handleModifiedDownload:function(){var e=function(e){var t="";return e.links.forEach((function(e){var n=e.source.id?e.source.id:e.source,a=e.target.id?e.target.id:e.target;t+="".concat(n," ").concat(a," \n")})),t}(m);w("Graph",e,"modified.txt")},handleCsvDownload:function(){L?w("Graph",L,"toCSV.csv"):window.alert("No .gr graph file found. Please upload a graph before proceeding.")},handleOutFileDownload:function(){K?w("Graph",K,"OutputFormat.txt"):window.alert("Missing .gr or .arff graph file. Please upload graph files before proceeding.")},modified:ee,setModified:function(){return te(!0)},addNode:function(){return function(){te(!0);var e=Object.assign({},m);e.nodes.push({id:C+1}),S(C+1),x(e)}()},removeNode:function(e){if(e>C)window.alert("Node doesn't exist");else{var t=Object.assign({},m);te(!0);var n=Object(o.a)(m.nodes).filter((function(t){return t.id!=parseInt(e)}));if(parseInt(e)===C)S(parseInt(C)-1);console.log(C);var a=Object(o.a)(m.links).filter((function(t){return(t.source.id?t.source.id:t.source)!=parseInt(e)&&(t.target.id?t.target.id:t.target)!=parseInt(e)}));t.nodes=n,t.links=a,x(t)}},modifyLink:function(e,t){console.log("Modified link between nodes",e+" "+t);var n=Object(o.a)(m.nodes),a=n.find((function(t){return t.id===parseInt(e)})),r=n.find((function(e){return e.id===parseInt(t)}));if(e>C||t>C)window.alert("One of nodes doesn't exist");else if(a&&r){var c=Object.assign({},m);te(!0);var s=Object(o.a)(m.links),i=[];s.forEach((function(e){i.push({source:e.source.id?e.source.id:e.source,target:e.target.id?e.target.id:e.target})}));var l=i.find((function(n){return n.source===parseInt(e)&&n.target===parseInt(t)||n.source===parseInt(t)&&n.target===parseInt(e)})),d=[].concat(i);l?d=i.filter((function(n){return!(n.source===parseInt(e)&&n.target===parseInt(t)||n.source===parseInt(t)&&n.target===parseInt(e))})):d.push({source:parseInt(e),target:parseInt(t)});var u=Object(o.a)(m.nodes),f=[];u.forEach((function(e){f.push({id:e.id})})),c.nodes=f,c.links=d,console.log("modified graph",c),x(c)}else window.alert('One of the nodes doesn"t exist. Add the node before modifying link')},reset:function(){return c(null),u(null),g(null),B(null),X(null),x(E(y)),te(!1),void S(y.length)}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),S()}},[[52,1,2]]]);
//# sourceMappingURL=main.4daf75d9.chunk.js.map