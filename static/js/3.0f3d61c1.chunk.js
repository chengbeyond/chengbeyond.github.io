(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{889:function(n,t,e){"use strict";e.r(t);var i=e(29),o=e(30),r=e(32),c=e(31),a=e(33),u=e(0),p=e.n(u),l=e(38),b=e(352),f=e(84),s=e(12),d=e(13);function h(){var n=Object(s.a)(["\n     color: #333;\n     h3 {\n       font-weight: bold;\n     }\n     p {\n       font-size: 14px;\n     }\n"]);return h=function(){return n},n}function j(){var n=Object(s.a)(["\n    margin: 50px 0 20px 0;\n    line-height: 34px;\n    font-size: 34px;\n    color: #333;\n    font-weight: bold;\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n    overflow: hidden;;\n    width: 700px;\n    margin: 20px auto;\n    padding-bottom: 100px;\n"]);return O=function(){return n},n}var g=Object(d.b)("div")(O()),m=Object(d.b)("div")(j()),v=Object(d.b)("div")(h()),w=function(n){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(a.a)(t,n),Object(o.a)(t,[{key:"render",value:function(){return p.a.createElement(g,null,p.a.createElement(m,null,this.props.title),p.a.createElement(v,{dangerouslySetInnerHTML:{__html:this.props.content}}))}},{key:"componentDidMount",value:function(){this.props.getDetail(this.props.match.params.id)}}]),t}(u.Component);t.default=Object(l.b)(function(n){return{title:n.getIn(["detail","title"]),content:n.getIn(["detail","content"])}},function(n){return{getDetail:function(t){n(b.a.getDetail(t))}}})(Object(f.e)(w))}}]);