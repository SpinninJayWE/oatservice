import{_ as u,m as d,r,o as s,a,b as n,j as p,e as c,t as m,F as f,g as v,h}from"./index.187fbd51.js";import{r as g}from"./global.68a7128f.js";const b=["title"],x={class:"title"},y={__name:"box",props:{solution:Object},setup(t){const e=d();var i=r(e.path.replace("cards","details/")),o=r(e.path.substring(1,e.path.length).split("/").shift());return(_,l)=>(s(),a("div",{title:t.solution.title,onClick:l[0]||(l[0]=S=>_.$router.push({path:c(i)+t.solution.id+"/"+t.solution.title})),class:"box"},[n("div",{class:"image",style:p({"background-image":`url(${g(`@/assets/Images/${c(o)}/c${t.solution.id}.jpg`)})`})},null,4),n("div",x,m(t.solution.title),1)],8,b))}},$=u(y,[["__scopeId","data-v-2f34cabf"]]);const w={class:"wrapper"},j={class:"row flex justify-center flex-wrap"},k={__name:"row",props:{inbetween:Array},setup(t){return(e,i)=>(s(),a("div",w,[n("div",j,[(s(!0),a(f,null,v(t.inbetween,o=>(s(),a("div",null,[h($,{solution:o},null,8,["solution"])]))),256))])]))}},D=u(k,[["__scopeId","data-v-a4512309"]]);export{D as S};
