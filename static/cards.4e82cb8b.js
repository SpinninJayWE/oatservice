import{_ as r,l as m,r as l,o as a,a as n,b as e,h as b,e as d,t as c,F as p,g as h,q as v,i as f}from"./index.0556415a.js";import{r as g}from"./global.68a7128f.js";const $=["title"],y={class:"title"},x={__name:"box",props:{solution:Object},setup(t){const s=m();var i=l(s.path.replace("cards","details/")),o=l(s.path.substring(1,s.path.length).split("/").shift());return(_,u)=>(a(),n("div",{title:t.solution.title,onClick:u[0]||(u[0]=P=>_.$router.push({path:d(i)+t.solution.id+"/"+t.solution.title})),class:"box"},[e("div",{class:"image",style:b({"background-image":`url(${g(`@/assets/Images/${d(o)}/c${t.solution.id}.jpg`)})`})},null,4),e("div",y,c(t.solution.title),1)],8,$))}},w=r(x,[["__scopeId","data-v-2f34cabf"]]);const k={class:"wrapper"},I={class:"row flex justify-center flex-wrap"},j={__name:"row",props:{inbetween:Array},setup(t){return(s,i)=>(a(),n("div",k,[e("div",I,[(a(!0),n(p,null,h(t.inbetween,o=>(a(),n("div",null,[v(w,{solution:o},null,8,["solution"])]))),256))])]))}},B=r(j,[["__scopeId","data-v-a4512309"]]);const S={class:"image-title"},q={class:"title"},D={class:"subtitle"},F={class:"solution-cards"},N={__name:"cards",setup(t){const{solution:s}=f(),i=l(s.solutions);return(o,_)=>(a(),n(p,null,[e("div",S,[e("div",q,c(o.$t("titles.solutions")),1),e("div",D,c(o.$t("repeat.subtitle")),1)]),e("div",F,[v(B,{inbetween:i.value},null,8,["inbetween"])])],64))}},A=r(N,[["__scopeId","data-v-289d78b0"]]);export{A as default};
