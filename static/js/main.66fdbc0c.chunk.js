(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a,n=i(6),c=i.n(n),s=(i(14),i(9)),l=i(2),r=i(1),o=(i(15),i(16),i(17),i(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=i(7),b=i.n(j);!function(e){e.image="imgUrl",e.imdb="imdbUrl"}(a||(a={}));var u=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,h=function(e,t){return Object.values(a).includes(t)&&!u.test(e)};var O="",g=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,s=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,j=e.onChange,u=void 0===j?function(){}:j,g=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),v=Object(l.a)(g,1)[0],p=Object(r.useState)(!1),f=Object(l.a)(p,2),w=f[0],x=f[1],M=w&&m;return i?h(i,t)?O="".concat(n," should have valid URLs"):M=!1:O="".concat(n," is required"),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:v,children:n}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:v,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":M}),placeholder:s,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){return x(!0)}})}),M&&Object(o.jsx)("p",{className:"help is-danger",children:O})]})},v=function(e){var t=e.onAdd,i=Object(r.useState)(0),n=Object(l.a)(i,2),c=n[0],s=n[1],d=Object(r.useState)(""),m=Object(l.a)(d,2),j=m[0],b=m[1],u=Object(r.useState)(""),O=Object(l.a)(u,2),v=O[0],p=O[1],f=Object(r.useState)(""),w=Object(l.a)(f,2),x=w[0],M=w[1],N=Object(r.useState)(""),U=Object(l.a)(N,2),y=U[0],I=U[1],T=Object(r.useState)(""),B=Object(l.a)(T,2),_=B[0],k=B[1],z=!(j&&x&&y&&_&&!h(x,a.image)&&!h(y,a.imdb));return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),t({title:j,description:v,imgUrl:x,imdbUrl:y,imdbId:_}),b(""),p(""),M(""),I(""),k(""),s(c+1)},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(g,{name:"title",label:"Title",value:j,required:!0,onChange:function(e){return b(e)}}),Object(o.jsx)(g,{name:"description",label:"Description",value:v,onChange:function(e){return p(e)}}),Object(o.jsx)(g,{name:"imgUrl",label:"Image URL",value:x,onChange:function(e){return M(e)},required:!0}),Object(o.jsx)(g,{name:"imdbUrl",label:"Imdb URL",value:y,onChange:function(e){return I(e)},required:!0}),Object(o.jsx)(g,{name:"imdbId",label:"Imdb ID",value:_,onChange:function(e){return k(e)},required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:z,children:"Add"})})})]},c)},p=i(8),f=function(){var e=Object(r.useState)(p),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(v,{onAdd:function(e){a((function(t){return[].concat(Object(s.a)(t),[e])}))}})})]})};c.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.66fdbc0c.chunk.js.map