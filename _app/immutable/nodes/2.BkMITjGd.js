import{s as U,n as T,x as ie,q as oe,u as ce,v as ue,w as me}from"../chunks/scheduler.Cu_nLO_j.js";import{S as F,i as V,e as g,s as b,c as _,a as k,A as I,f as w,d as $,o as c,B as Q,g as A,h as m,t as Z,b as ee,j as te,u as E,v as L,w as M,n as C,l as S,x as j}from"../chunks/index.DBNOMoit.js";/* empty css                                                          */function fe(r){let e,a,t,l='<span>Name</span> <input type="text" id="name" name="name" aria-label="name" placeholder="Name"/>',f,o,u='<span>Email</span> <input type="email" id="email" name="email" aria-label="email" placeholder="Email" required=""/>',i,s,h,n,p,y="Reason",P,v,d,O="Contact reason",N,G="Say hi!",x,R="Collaboration request",q,se="Speaking opportunity",ae,D,le='<span>Message</span> <textarea id="message" name="message" aria-label="message" placeholder="Hey! I&#39;d love to talk about..." required="" class="svelte-1h29drl"></textarea>',ne,z,re="Submit";return{c(){e=g("form"),a=g("div"),t=g("label"),t.innerHTML=l,f=b(),o=g("label"),o.innerHTML=u,i=b(),s=g("input"),h=b(),n=g("label"),p=g("span"),p.textContent=y,P=b(),v=g("select"),d=g("option"),d.textContent=O,N=g("option"),N.textContent=G,x=g("option"),x.textContent=R,q=g("option"),q.textContent=se,ae=b(),D=g("label"),D.innerHTML=le,ne=b(),z=g("button"),z.textContent=re,this.h()},l(W){e=_(W,"FORM",{method:!0,action:!0,enctype:!0});var H=k(e);a=_(H,"DIV",{class:!0});var B=k(a);t=_(B,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1p4m6yy"&&(t.innerHTML=l),f=w(B),o=_(B,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),I(o)!=="svelte-1p18m"&&(o.innerHTML=u),i=w(B),s=_(B,"INPUT",{type:!0,name:!0,id:!0,class:!0}),h=w(B),n=_(B,"LABEL",{for:!0,class:!0});var X=k(n);p=_(X,"SPAN",{"data-svelte-h":!0}),I(p)!=="svelte-tsvu06"&&(p.textContent=y),P=w(X),v=_(X,"SELECT",{id:!0,name:!0,"aria-label":!0});var J=k(v);d=_(J,"OPTION",{"data-svelte-h":!0}),I(d)!=="svelte-mr29hx"&&(d.textContent=O),N=_(J,"OPTION",{"data-svelte-h":!0}),I(N)!=="svelte-8dhiwg"&&(N.textContent=G),x=_(J,"OPTION",{"data-svelte-h":!0}),I(x)!=="svelte-19cqhdj"&&(x.textContent=R),q=_(J,"OPTION",{"data-svelte-h":!0}),I(q)!=="svelte-1ek1nep"&&(q.textContent=se),J.forEach($),X.forEach($),B.forEach($),ae=w(H),D=_(H,"LABEL",{for:!0,"data-svelte-h":!0}),I(D)!=="svelte-edvzug"&&(D.innerHTML=le),ne=w(H),z=_(H,"BUTTON",{type:!0,"data-svelte-h":!0}),I(z)!=="svelte-1ou7dtz"&&(z.textContent=re),H.forEach($),this.h()},h(){c(t,"for","name"),c(t,"class","col"),c(o,"for","email"),c(o,"class","col"),c(s,"type","text"),c(s,"name","subject"),c(s,"id","subject"),c(s,"class","is-hidden"),s.value="speak",d.disabled=!0,d.selected=!0,d.__value="",Q(d,d.__value),N.__value="hi",Q(N,N.__value),x.__value="collaboration",Q(x,x.__value),q.__value="speak",Q(q,q.__value),c(v,"id","reason"),c(v,"name","reason"),c(v,"aria-label","reason"),c(n,"for","reason"),c(n,"class","col"),c(a,"class","row"),c(D,"for","message"),c(z,"type","submit"),c(e,"method","POST"),c(e,"action","/contact"),c(e,"enctype","multipart/form-data")},m(W,H){A(W,e,H),m(e,a),m(a,t),m(a,f),m(a,o),m(a,i),m(a,s),m(a,h),m(a,n),m(n,p),m(n,P),m(n,v),m(v,d),m(v,N),m(v,x),m(v,q),m(e,ae),m(e,D),m(e,ne),m(e,z)},p:T,i:T,o:T,d(W){W&&$(e)}}}class pe extends F{constructor(e){super(),V(this,e,null,fe,U,{})}}function he(r){let e,a=`<div class="frontSplash svelte-1e2ffzq"><h2 class="svelte-1e2ffzq">Hi, I&#39;m</h2> <h1 class="nameTitle svelte-1e2ffzq">Minh Hanh</h1> <h3>Game developer, designer, test automation engineer.</h3> <div><a href="https://www.linkedin.com/in/hanjismin/"><img src="https://icongr.am/devicon/linkedin-original.svg?size=24" alt="linkedIn"/></a>
     
    <a href="https://github.com/hans-min"><img src="https://icongr.am/devicon/github-original.svg?size=24" alt="github"/></a></div></div>`;return{c(){e=g("div"),e.innerHTML=a,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-ecyzwn"&&(e.innerHTML=a),this.h()},h(){c(e,"class","hero is-full-screen svelte-1e2ffzq")},m(t,l){A(t,e,l)},p:T,i:T,o:T,d(t){t&&$(e)}}}class de extends F{constructor(e){super(),V(this,e,null,he,U,{})}}function ve(r){let e,a,t,l,f,o,u,i,s,h,n,p,y,P;return{c(){e=g("div"),a=g("div"),t=g("a"),l=Z(r[0]),f=b(),o=g("p"),u=Z(r[2]),i=b(),s=g("p"),h=Z(r[5]),n=b(),p=g("a"),y=g("img"),this.h()},l(v){e=_(v,"DIV",{class:!0});var d=k(e);a=_(d,"DIV",{class:!0});var O=k(a);t=_(O,"A",{class:!0,href:!0});var N=k(t);l=ee(N,r[0]),N.forEach($),f=w(O),o=_(O,"P",{class:!0});var G=k(o);u=ee(G,r[2]),G.forEach($),i=w(O),s=_(O,"P",{class:!0});var x=k(s);h=ee(x,r[5]),x.forEach($),O.forEach($),n=w(d),p=_(d,"A",{class:!0,href:!0});var R=k(p);y=_(R,"IMG",{class:!0,src:!0,alt:!0}),R.forEach($),d.forEach($),this.h()},h(){c(t,"class","subTitle svelte-k9xncl"),c(t,"href",r[1]),c(o,"class","workplace svelte-k9xncl"),c(s,"class","projectDescription"),c(a,"class","col"),c(y,"class","thumbnail svelte-k9xncl"),ie(y.src,P=r[3])||c(y,"src",P),c(y,"alt",r[4]),c(p,"class","col is-center"),c(p,"href",r[1]),c(e,"class","row fadeIn addMargin svelte-k9xncl")},m(v,d){A(v,e,d),m(e,a),m(a,t),m(t,l),m(a,f),m(a,o),m(o,u),m(a,i),m(a,s),m(s,h),m(e,n),m(e,p),m(p,y)},p(v,[d]){d&1&&te(l,v[0]),d&2&&c(t,"href",v[1]),d&4&&te(u,v[2]),d&32&&te(h,v[5]),d&8&&!ie(y.src,P=v[3])&&c(y,"src",P),d&16&&c(y,"alt",v[4]),d&2&&c(p,"href",v[1])},i:T,o:T,d(v){v&&$(e)}}}function ge(r,e,a){let{projectName:t}=e,{link:l=null}=e,{workplace:f}=e,{imgSrc:o}=e,{altText:u}=e,{description:i}=e;return r.$$set=s=>{"projectName"in s&&a(0,t=s.projectName),"link"in s&&a(1,l=s.link),"workplace"in s&&a(2,f=s.workplace),"imgSrc"in s&&a(3,o=s.imgSrc),"altText"in s&&a(4,u=s.altText),"description"in s&&a(5,i=s.description)},[t,l,f,o,u,i]}class Y extends F{constructor(e){super(),V(this,e,ge,ve,U,{projectName:0,link:1,workplace:2,imgSrc:3,altText:4,description:5})}}const _e=""+new URL("../assets/squiddy.DlEU-V_i.png",import.meta.url).href,$e=""+new URL("../assets/crashedWorld.BQcYs8UH.png",import.meta.url).href,be=""+new URL("../assets/myoty.WgPLGbru.webp",import.meta.url).href,we=""+new URL("../assets/poule.BtvgapJG.png",import.meta.url).href;function ye(r){let e,a,t,l,f,o,u,i,s;return a=new Y({props:{projectName:"Squiddy",workplace:"Akensys",description:"Create a Bluetooth library in Swift to facilitate the development of iOS applications that use Bluetooth/BLE",imgSrc:_e,altText:"Squiddy App",link:"http://squiddy.fr/"}}),l=new Y({props:{projectName:"Crashed World",workplace:"CNAM ENJMIN",description:"Basically 2D Minecraft. I was in charge of the procedural generation of the map.",imgSrc:$e,altText:"Crashed World Game",link:"https://hans-min.itch.io/crashed-world"}}),o=new Y({props:{projectName:"MyOty",workplace:"Akensys",description:`Developed MyOty, an mobile application used to detect (map view), read and 
    visualize data from Bluetooth sensors and equipments (Flutter). Also work with the Flutter 
    platform channel to integrate third-party Swift libraries into the app.`,imgSrc:be,altText:"MyOty App",link:"https://play.google.com/store/apps/details?id=net.akensys.myotyv2&hl=en&gl=US"}}),i=new Y({props:{projectName:"Ca roule ma poule",workplace:"INSA Lyon",description:`We created a 1:5 model of a fully functional, movable smart chicken coop. The coop was equiped with a solar panel, 
    an automatic feeding sytem, a water dispenser, ventilation system and a mobile application for the farmers.`,imgSrc:we,altText:"movable chicken coop"}}),{c(){e=g("div"),E(a.$$.fragment),t=b(),E(l.$$.fragment),f=b(),E(o.$$.fragment),u=b(),E(i.$$.fragment)},l(h){e=_(h,"DIV",{});var n=k(e);L(a.$$.fragment,n),t=w(n),L(l.$$.fragment,n),f=w(n),L(o.$$.fragment,n),u=w(n),L(i.$$.fragment,n),n.forEach($)},m(h,n){A(h,e,n),M(a,e,null),m(e,t),M(l,e,null),m(e,f),M(o,e,null),m(e,u),M(i,e,null),s=!0},p:T,i(h){s||(C(a.$$.fragment,h),C(l.$$.fragment,h),C(o.$$.fragment,h),C(i.$$.fragment,h),s=!0)},o(h){S(a.$$.fragment,h),S(l.$$.fragment,h),S(o.$$.fragment,h),S(i.$$.fragment,h),s=!1},d(h){h&&$(e),j(a),j(l),j(o),j(i)}}}class ke extends F{constructor(e){super(),V(this,e,null,ye,U,{})}}function Ce(r){let e,a,t,l,f;const o=r[2].default,u=oe(o,r,r[1],null);return{c(){e=g("section"),a=g("h2"),t=Z(r[0]),l=b(),u&&u.c(),this.h()},l(i){e=_(i,"SECTION",{});var s=k(e);a=_(s,"H2",{class:!0,id:!0});var h=k(a);t=ee(h,r[0]),h.forEach($),l=w(s),u&&u.l(s),s.forEach($),this.h()},h(){c(a,"class","is-center"),c(a,"id",r[0])},m(i,s){A(i,e,s),m(e,a),m(a,t),m(e,l),u&&u.m(e,null),f=!0},p(i,[s]){(!f||s&1)&&te(t,i[0]),(!f||s&1)&&c(a,"id",i[0]),u&&u.p&&(!f||s&2)&&ce(u,o,i,i[1],f?me(o,i[1],s,null):ue(i[1]),null)},i(i){f||(C(u,i),f=!0)},o(i){S(u,i),f=!1},d(i){i&&$(e),u&&u.d(i)}}}function Se(r,e,a){let{$$slots:t={},$$scope:l}=e,{sectionName:f}=e;return r.$$set=o=>{"sectionName"in o&&a(0,f=o.sectionName),"$$scope"in o&&a(1,l=o.$$scope)},[f,l,t]}class K extends F{constructor(e){super(),V(this,e,Se,Ce,U,{sectionName:0})}}function Te(r){let e,a='<h3 class="svelte-1o9htb">Languages</h3> <ul class="row svelte-1o9htb"><li class="button primary svelte-1o9htb">Swift</li> <li class="button primary svelte-1o9htb">Dart</li> <li class="button primary svelte-1o9htb">Python</li> <li class="button primary svelte-1o9htb">Javascript</li> <li class="button primary svelte-1o9htb">HTML/CSS</li></ul> <h3 class="svelte-1o9htb">Framework/Tools</h3> <ul class="row svelte-1o9htb"><li class="button primary svelte-1o9htb">Godot</li> <li class="button primary svelte-1o9htb">Blender</li> <li class="button primary svelte-1o9htb">Swift</li> <li class="button primary svelte-1o9htb">Flutter</li> <li class="button primary svelte-1o9htb">Robot Framework</li> <li class="button primary svelte-1o9htb">Git</li> <li class="button primary svelte-1o9htb">Svelte</li></ul>';return{c(){e=g("div"),e.innerHTML=a,this.h()},l(t){e=_(t,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-l496by"&&(e.innerHTML=a),this.h()},h(){c(e,"class","fadeIn")},m(t,l){A(t,e,l)},p:T,i:T,o:T,d(t){t&&$(e)}}}class Ne extends F{constructor(e){super(),V(this,e,null,Te,U,{})}}function xe(r){let e,a=`Hi, I'm Minh Hanh and I love learning and trying new things. I'm currently working as a test automation
    engineer at EPEX SPOT. I live in Paris, and I was born in Vietnam. I moved to Lyon,
    France in 2019 to study at the engineering school INSA Lyon. In 2021, I reoriented to
    CNAM ENJMIN to study game development and joined Akensys as an apprentice mobile
    developer for 2 years. Then I did my Master at CAWEB, University of Strasbourg and
    have been working at EPEX SPOT since.`;return{c(){e=g("p"),e.textContent=a,this.h()},l(t){e=_(t,"P",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-176x6j0"&&(e.textContent=a),this.h()},h(){c(e,"class","fadeIn")},m(t,l){A(t,e,l)},p:T,d(t){t&&$(e)}}}function Ie(r){let e,a;return e=new Ne({}),{c(){E(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function Ee(r){let e,a;return e=new ke({}),{c(){E(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function Le(r){let e,a;return e=new pe({}),{c(){E(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){M(e,t,l),a=!0},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){S(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function Me(r){let e,a,t,l,f,o,u,i,s,h;return e=new de({}),t=new K({props:{sectionName:"About",$$slots:{default:[xe]},$$scope:{ctx:r}}}),f=new K({props:{sectionName:"Skills",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),u=new K({props:{sectionName:"Projects",$$slots:{default:[Ee]},$$scope:{ctx:r}}}),s=new K({props:{sectionName:"Contact",$$slots:{default:[Le]},$$scope:{ctx:r}}}),{c(){E(e.$$.fragment),a=b(),E(t.$$.fragment),l=b(),E(f.$$.fragment),o=b(),E(u.$$.fragment),i=b(),E(s.$$.fragment)},l(n){L(e.$$.fragment,n),a=w(n),L(t.$$.fragment,n),l=w(n),L(f.$$.fragment,n),o=w(n),L(u.$$.fragment,n),i=w(n),L(s.$$.fragment,n)},m(n,p){M(e,n,p),A(n,a,p),M(t,n,p),A(n,l,p),M(f,n,p),A(n,o,p),M(u,n,p),A(n,i,p),M(s,n,p),h=!0},p(n,[p]){const y={};p&1&&(y.$$scope={dirty:p,ctx:n}),t.$set(y);const P={};p&1&&(P.$$scope={dirty:p,ctx:n}),f.$set(P);const v={};p&1&&(v.$$scope={dirty:p,ctx:n}),u.$set(v);const d={};p&1&&(d.$$scope={dirty:p,ctx:n}),s.$set(d)},i(n){h||(C(e.$$.fragment,n),C(t.$$.fragment,n),C(f.$$.fragment,n),C(u.$$.fragment,n),C(s.$$.fragment,n),h=!0)},o(n){S(e.$$.fragment,n),S(t.$$.fragment,n),S(f.$$.fragment,n),S(u.$$.fragment,n),S(s.$$.fragment,n),h=!1},d(n){n&&($(a),$(l),$(o),$(i)),j(e,n),j(t,n),j(f,n),j(u,n),j(s,n)}}}class Oe extends F{constructor(e){super(),V(this,e,null,Me,U,{})}}export{Oe as component};