(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(47)},22:function(e,t,a){},24:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDAsUGhg9xxMIAAABSElEQVQ4y5WSO0sDQRRGzwRfkNipBCNaCD4r7RQtBP+Bgn1ADYJYSMTgLxBEiFgZtLJIaSOohY2gnaCdIDGFLwJqY6PEfBYbzc7mweZWd+6cM3P37oAntK7qUVA0gP8Q8+bAvyAWzT74FUTMpMCvIJbMnpP6Ez65/Uv9Ca2ca64eAZo51GQ9AjSQVns9AnSyU1vY4sNTmVG4urBs4kyRs2qNRMu44ltaKa769Wy9psvKN6yapJOYO1LWTrBcEGtm27U+9YxXQx4+7Fk3qeBq6SbAhuIyJcC8em7swbXLMRrXj07UUW1YilkfPQIoKelNCYUq4CG9uPB7pxhURpKUU0J9Fj6gaxee1zROfxrkjK4ileGCHO+0McoYLdav3C2d1a0r1Yq8Nr3dGi3oqSL8pZR6/6doSQEmmGWYCBG+yZIlywNH5rHE/AIXSvwuTxWRcgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0xMVQyMDoyNjoyNCswMTowMEHtV4oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMTFUMjA6MjY6MjQrMDE6MDAwsO82AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDAsUFzZUv2CKAAABCklEQVQ4y+2TsU4CQRRFz6AVlYS1VEMiDYnAT1BYWNDIB0j8A6GwsTHZL6Aw4StMtrPwA0iIllZqOSZIRWO4FrtLeLC7CYWdt5rz5t733hQDRqoqlFcqr1BV69i3yJBL7vhKKOCGEgPyJa++4b781gTVuVpxwLlO1+7rBApXNHZvDnTBLWd881kw+ogDXrl3j+no6VqfrFVDTeNTiR21EVDC6qprKzkBJmoB0KMHoBaT4kCbmuEa7eLArm/4D/xNQCwNL5E1bP64Ds8AePYAiOhkBxZUANxTwgMcgPshrlRY2E1Gmqmct7fKmmkUn11SOuEFzwMfGf5jrjmk6d5tl4YizZWluSI1Ut8vwS5wW+CPVd0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMTFUMjA6MjM6NTQrMDE6MDCtAZXXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTExVDIwOjIzOjU0KzAxOjAw3FwtawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),s=a.n(c),A=(a(22),a(3)),o=a(4),r=a(7),i=a(5),m=a(6),u=a(1),d=function(e){return l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"btns",type:"submit",onClick:e.handleGoBack},l.a.createElement("img",{src:a(24),alt:"back button"}))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"btns",type:"submit",onClick:e.handleDeleteAll},l.a.createElement("img",{src:a(25),alt:"trash"})))))},h=a(16),b=a.n(h),g=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).results=[],a.handleOnSubmit=function(e){e.preventDefault(),console.log("submitting");b.a.get("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDfqwsDoc5QqRg-bed79bTZKa1_XGXY4eI","&cx=").concat("007806920644787485811:qgwcit01afm","&q=").concat(a.state.value)).then(function(e){console.log(e),e&&e.data&&e.data.items?a.props.setResults(e.data.items):console.warn("No response received")})},a.state={value:"",search:"qctzzxd3rpa"},a.handleGoogle=a.handleGoogle.bind(Object(u.a)(Object(u.a)(a))),a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.handleDeleteAll=a.handleDeleteAll.bind(Object(u.a)(Object(u.a)(a))),a.handleGoBack=a.handleGoBack.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleGoogle",value:function(){window.open("http://www.google.com/search?q="+this.state.value,"_blank"),console.log("googling")}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleDeleteAll",value:function(){this.setState({value:""}),console.log("delete All")}},{key:"handleGoBack",value:function(e){var t=this.state.value.split(" ").slice(0,-1).join(" ");this.setState({value:t}),console.log("go back")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-md flex-md-nowrap p-1 shadow fixed-top nav-color"},l.a.createElement("a",{className:"logo-style col-sm-3 col-md-2 mr-0 text-white",href:"1"},"TitanSearch"),l.a.createElement("form",{className:"form-control form-style ",onSubmit:this.handleOnSubmit},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"search",name:"q",placeholder:"Search Custom Search Engine or Google",value:this.state.value,onChange:this.handleChange,className:"form-control","aria-label":"","aria-describedby":"basic-addon1"}),l.a.createElement("span",{className:"input-group-append"},l.a.createElement("button",{type:"submit",onClick:this.handleOnSubmit,className:"btn btn-outline-light my-2 my-sm-0"},"Search"),l.a.createElement("button",{type:"submit",onClick:this.handleGoogle,className:"btn btn-outline-light my-2 my-sm-0"},"Google"),l.a.createElement(d,{handleDeleteAll:this.handleDeleteAll,handleGoBack:this.handleGoBack})))),l.a.createElement("ul",null,this.state.results)))}}]),t}(n.Component),E=function(e){function t(e){return Object(A.a)(this,t),Object(r.a)(this,Object(i.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"displayResults",value:function(){return this.props.results.map(function(e){return l.a.createElement("li",{className:"d-block mt-1",key:e.cacheId},l.a.createElement("span",null,e.htmlSnippet),l.a.createElement("a",{href:e.link},e.displayLink))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"row justify-content-end mt-3 results-style"},l.a.createElement("ul",{className:"col-md-10"},this.displayResults()))}}]),t}(n.Component),p=function(e){function t(){return Object(A.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"col-md-2  bg-light sidebar"},l.a.createElement("div",{className:"sidebar-sticky"},l.a.createElement("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},l.a.createElement("span",null,"Custom Searchs"),l.a.createElement("a",{className:"d-flex align-items-center text-muted",href:"#"})),l.a.createElement("ul",{className:"nav flex-column mb-2"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"TitanSearch")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Salary")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"College")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Social Media"))))))}}]),t}(n.Component),v=(a(45),function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={results:[]},a.setResults=a.setResults.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setResults",value:function(e){console.log(e),this.setState({results:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,{setResults:this.setResults}),l.a.createElement(p,null),l.a.createElement(E,{results:this.state.results}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.133f55e1.chunk.js.map