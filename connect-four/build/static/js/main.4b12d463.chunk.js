(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{13:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);var n=t(3),s=t(4),i=t(7),o=t(6),l=t(1),d=t.n(l),h=t(5),a=t.n(h),c=(t(13),t(0));function S(e){return Object(c.jsx)("button",{onClick:e.onClick,style:{backgroundColor:e.value,width:"60px",height:"60px",margin:"3px",border:"0px",borderRadius:"100px"}})}var u=function(e){Object(i.a)(t,e);var r=Object(o.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=r.call(this,e)).state={slots:Array(42).fill("white"),redTurn:!0},s}return Object(s.a)(t,[{key:"handleClick",value:function(e){var r=this.state.slots.slice();b(r)||"white"!=r[e]||(r[e]=this.state.redTurn?"red":"yellow",this.setState({slots:r,redTurn:!this.state.redTurn}))}},{key:"renderSlot",value:function(e){var r=this;return Object(c.jsx)(S,{value:this.state.slots[e],onClick:function(){return r.handleClick(e)}})}},{key:"render",value:function(){var e,r=b(this.state.slots);return e="tie"==r?"This game is a tie, refresh to play agian":r?"Winner: "+r:"Next player: "+(this.state.redTurn?"red":"yellow"),Object(c.jsxs)("div",{style:{backgroundColor:"#2092bb",width:"60%",padding:"30px",margin:"auto",marginTop:"100px",borderRadius:"12px"},children:[Object(c.jsx)("div",{style:{fontSize:"40px",color:"white",border:"2px solid white",margin:"10px"},children:e}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(0),this.renderSlot(1),this.renderSlot(2),this.renderSlot(3),this.renderSlot(4),this.renderSlot(5),this.renderSlot(6)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(7),this.renderSlot(8),this.renderSlot(9),this.renderSlot(10),this.renderSlot(11),this.renderSlot(12),this.renderSlot(13)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(14),this.renderSlot(15),this.renderSlot(16),this.renderSlot(17),this.renderSlot(18),this.renderSlot(19),this.renderSlot(20)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(21),this.renderSlot(22),this.renderSlot(23),this.renderSlot(24),this.renderSlot(25),this.renderSlot(26),this.renderSlot(27)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(28),this.renderSlot(29),this.renderSlot(30),this.renderSlot(31),this.renderSlot(32),this.renderSlot(33),this.renderSlot(34)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSlot(35),this.renderSlot(36),this.renderSlot(37),this.renderSlot(38),this.renderSlot(39),this.renderSlot(40),this.renderSlot(41)]})]})}}]),t}(d.a.Component);function b(e){console.log(e);for(var r=0;r<21;r+=7)for(var t=r;t<r+7;t++)if("white"!=e[t]&&e[t]==e[t+7]&&e[t]==e[t+14]&&e[t]==e[t+21])return e[t];for(var n=0;n<41;n+=7)for(var s=n;s<n+4;s++)if("white"!=e[s]&&e[s]==e[s+1]&&e[s]==e[s+2]&&e[s]==e[s+3])return e[s];for(var i=0;i<42;i++)if("red"!=e[i]&&"yellow"!=e[i])return null;return"tie"}a.a.render(Object(c.jsx)(u,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.4b12d463.chunk.js.map