(this.webpackJsonpphoto=this.webpackJsonpphoto||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(96),a(56)),s=a.n(c),l=a(70),d=a(42),p=a(172),b=a(173),m=a(174),u=a(171),j=a(186),h=a(175),g=a(176),x=a(179),f=a(170),O=a(177),C=a(178),w=a(180),N=a(87),k=a(181),v=a(182),S=a(183),y=a(184),R=a(185),F=a.p+"static/media/cblogoo.0c081e30.PNG",W=a.p+"static/media/bg.d6836046.png",z=a(85),I=a(8),B=a(110).default,E=Object(p.a)((function(e){return{grow:{flexGrow:1},uploadButton:{width:"-webkit-fill-available",borderRadius:"15px",padding:"15px 22px",color:"white",fontSize:"20px",fontWeight:900},root:{maxWidth:345,flexGrow:1},media:{height:400},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},gridContainer:{justifyContent:"center",padding:"4em 1em 0 1em"},mainContainer:{backgroundImage:"url(".concat(W,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",height:"93vh",marginTop:"8px"},imageCard:{margin:"auto",maxWidth:400,height:500,backgroundColor:"transparent",boxShadow:"0px 9px 70px 0px rgb(0 0 0 / 30%) !important",borderRadius:"15px"},imageCardEmpty:{height:"auto"},noImage:{margin:"auto",width:400,height:"400 !important"},input:{display:"none"},uploadIcon:{background:"white"},tableContainer:{backgroundColor:"transparent !important",boxShadow:"none !important"},table:{backgroundColor:"transparent !important"},tableHead:{backgroundColor:"transparent !important"},tableRow:{backgroundColor:"transparent !important"},tableCell:{fontSize:"22px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableCell1:{fontSize:"14px",backgroundColor:"transparent !important",borderColor:"transparent !important",color:"#000000a6 !important",fontWeight:"bolder",padding:"1px 24px 1px 16px"},tableBody:{backgroundColor:"transparent !important"},text:{color:"white !important",textAlign:"center"},buttonGrid:{maxWidth:"416px",width:"100%"},detail:{backgroundColor:"white"},appbar:{background:"#be6a77",boxShadow:"none",color:"white"}}})),G=function(){var e=E(),t=Object(n.useState)(),a=Object(d.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(),p=Object(d.a)(c,2),W=p[0],G=p[1],L=Object(n.useState)(),P=Object(d.a)(L,2),D=P[0],T=P[1],H=Object(n.useState)(!1),J=Object(d.a)(H,2),U=J[0],A=J[1],M=0,q=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U){e.next=7;break}return(t=new FormData).append("file",o),e.next=5,B({method:"post",url:"https://us-central1-nutri-333217.cloudfunctions.net/predict",data:t});case 5:200===(a=e.sent).status&&T(a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(o){var e=URL.createObjectURL(o);G(e)}else G(void 0)}),[o]),Object(n.useEffect)((function(){W&&q()}),[W]);return D&&(M=(100*parseFloat(D.confidence)).toFixed(2)),Object(I.jsxs)(r.a.Fragment,{children:[Object(I.jsx)(b.a,{position:"static",className:e.appbar,children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(u.a,{className:e.title,variant:"h6",noWrap:!0,children:"Rice Plant Nutrient Defeciency Classification"}),Object(I.jsx)("div",{className:e.grow}),Object(I.jsx)(j.a,{src:F})]})}),Object(I.jsx)(h.a,{maxWidth:!1,className:e.mainContainer,disableGutters:!0,children:Object(I.jsx)(f.a,{className:e.gridContainer,container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:Object(I.jsx)(f.a,{item:!0,xs:12,children:Object(I.jsxs)(g.a,{className:"".concat(e.imageCard," ").concat(U?"":e.imageCardEmpty),children:[U&&Object(I.jsx)(O.a,{children:Object(I.jsx)(C.a,{className:e.media,image:W,component:"image",title:"Contemplative Reptile"})}),!U&&Object(I.jsx)(x.a,{className:e.content,children:Object(I.jsx)(z.a,{acceptedFiles:["image/*"],dropzoneText:"Drag and drop an image of a potato plant leaf to process",onChange:function(e){if(!e||0===e.length)return i(void 0),A(!1),void T(void 0);i(e[0]),T(void 0),A(!0)}})}),D&&Object(I.jsx)(x.a,{className:e.detail,children:Object(I.jsx)(w.a,{component:N.a,className:e.tableContainer,children:Object(I.jsxs)(k.a,{className:e.table,size:"small","aria-label":"simple table",children:[Object(I.jsx)(v.a,{className:e.tableHead,children:Object(I.jsxs)(S.a,{className:e.tableRow,children:[Object(I.jsx)(y.a,{className:e.tableCell1,children:"Label:"}),Object(I.jsx)(y.a,{align:"right",className:e.tableCell1,children:"Confidence:"})]})}),Object(I.jsx)(R.a,{className:e.tableBody,children:Object(I.jsxs)(S.a,{className:e.tableRow,children:[Object(I.jsx)(y.a,{component:"th",scope:"row",className:e.tableCell,children:D.class}),Object(I.jsxs)(y.a,{align:"right",className:e.tableCell,children:[M,"%"]})]})})]})})})]})})})})]})};var L=function(){return Object(I.jsx)(G,{})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(L,{})}),document.getElementById("root")),P()},96:function(e,t,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.38378e9e.chunk.js.map