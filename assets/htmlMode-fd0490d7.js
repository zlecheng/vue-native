import{m as e}from"./MonacoView-cacb72e9.js";import"./index-5d1466b3.js";import"./Button-b2734cb2.js";import"./Scrollbar-6e58624e.js";import"./Input-022778a3.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.49.0(383fdf3fc0e1e1a024068b8d0fd4f3dcbae74d04)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,o=(e,o,a,s)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let u of r(o))i.call(e,u)||u===a||t(e,u,{get:()=>o[u],enumerable:!(s=n(o,u))||s.enumerable});return e},a={};o(a,e,"default");var s,u,c,d,g,l,h,f,p,m,v,_,w,k,b,y,E,x,C,I,A,S,R,T,D,P,M,F,L,j,O,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=a.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(u=s||(s={})).MIN_VALUE=-2147483648,u.MAX_VALUE=2147483647,(d=c||(c={})).MIN_VALUE=0,d.MAX_VALUE=2147483647,(l=g||(g={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=c.MAX_VALUE),t===Number.MAX_VALUE&&(t=c.MAX_VALUE),{line:e,character:t}},l.is=function(e){var t=e;return rt.objectLiteral(t)&&rt.uinteger(t.line)&&rt.uinteger(t.character)},(f=h||(h={})).create=function(e,t,n,r){if(rt.uinteger(e)&&rt.uinteger(t)&&rt.uinteger(n)&&rt.uinteger(r))return{start:g.create(e,t),end:g.create(n,r)};if(g.is(e)&&g.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},f.is=function(e){var t=e;return rt.objectLiteral(t)&&g.is(t.start)&&g.is(t.end)},(m=p||(p={})).create=function(e,t){return{uri:e,range:t}},m.is=function(e){var t=e;return rt.defined(t)&&h.is(t.range)&&(rt.string(t.uri)||rt.undefined(t.uri))},(_=v||(v={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},_.is=function(e){var t=e;return rt.defined(t)&&h.is(t.targetRange)&&rt.string(t.targetUri)&&(h.is(t.targetSelectionRange)||rt.undefined(t.targetSelectionRange))&&(h.is(t.originSelectionRange)||rt.undefined(t.originSelectionRange))},(k=w||(w={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},k.is=function(e){var t=e;return rt.numberRange(t.red,0,1)&&rt.numberRange(t.green,0,1)&&rt.numberRange(t.blue,0,1)&&rt.numberRange(t.alpha,0,1)},(y=b||(b={})).create=function(e,t){return{range:e,color:t}},y.is=function(e){var t=e;return h.is(t.range)&&w.is(t.color)},(x=E||(E={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},x.is=function(e){var t=e;return rt.string(t.label)&&(rt.undefined(t.textEdit)||W.is(t))&&(rt.undefined(t.additionalTextEdits)||rt.typedArray(t.additionalTextEdits,W.is))},(I=C||(C={})).Comment="comment",I.Imports="imports",I.Region="region",(S=A||(A={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return rt.defined(n)&&(o.startCharacter=n),rt.defined(r)&&(o.endCharacter=r),rt.defined(i)&&(o.kind=i),o},S.is=function(e){var t=e;return rt.uinteger(t.startLine)&&rt.uinteger(t.startLine)&&(rt.undefined(t.startCharacter)||rt.uinteger(t.startCharacter))&&(rt.undefined(t.endCharacter)||rt.uinteger(t.endCharacter))&&(rt.undefined(t.kind)||rt.string(t.kind))},(T=R||(R={})).create=function(e,t){return{location:e,message:t}},T.is=function(e){var t=e;return rt.defined(t)&&p.is(t.location)&&rt.string(t.message)},(P=D||(D={})).Error=1,P.Warning=2,P.Information=3,P.Hint=4,(F=M||(M={})).Unnecessary=1,F.Deprecated=2,(L||(L={})).is=function(e){var t=e;return null!=t&&rt.string(t.href)},(O=j||(j={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return rt.defined(n)&&(a.severity=n),rt.defined(r)&&(a.code=r),rt.defined(i)&&(a.source=i),rt.defined(o)&&(a.relatedInformation=o),a},O.is=function(e){var t,n=e;return rt.defined(n)&&h.is(n.range)&&rt.string(n.message)&&(rt.number(n.severity)||rt.undefined(n.severity))&&(rt.integer(n.code)||rt.string(n.code)||rt.undefined(n.code))&&(rt.undefined(n.codeDescription)||rt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(rt.string(n.source)||rt.undefined(n.source))&&(rt.undefined(n.relatedInformation)||rt.typedArray(n.relatedInformation,R.is))},(U=N||(N={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return rt.defined(n)&&n.length>0&&(i.arguments=n),i},U.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.title)&&rt.string(t.command)},(V=W||(W={})).replace=function(e,t){return{range:e,newText:t}},V.insert=function(e,t){return{range:{start:e,end:e},newText:t}},V.del=function(e){return{range:e,newText:""}},V.is=function(e){var t=e;return rt.objectLiteral(t)&&rt.string(t.newText)&&h.is(t.range)},(K=H||(H={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},K.is=function(e){var t=e;return void 0!==t&&rt.objectLiteral(t)&&rt.string(t.label)&&(rt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(rt.string(t.description)||void 0===t.description)},(z||(z={})).is=function(e){return"string"==typeof e},(B=X||(X={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},B.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},B.del=function(e,t){return{range:e,newText:"",annotationId:t}},B.is=function(e){var t=e;return W.is(t)&&(H.is(t.annotationId)||z.is(t.annotationId))},(q=$||($={})).create=function(e,t){return{textDocument:e,edits:t}},q.is=function(e){var t=e;return rt.defined(t)&&se.is(t.textDocument)&&Array.isArray(t.edits)},(G=Q||(Q={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},G.is=function(e){var t=e;return t&&"create"===t.kind&&rt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||rt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||rt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(Y=J||(J={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},Y.is=function(e){var t=e;return t&&"rename"===t.kind&&rt.string(t.oldUri)&&rt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||rt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||rt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ee.is=function(e){var t=e;return t&&"delete"===t.kind&&rt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||rt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||rt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||z.is(t.annotationId))},(te||(te={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return rt.string(e.kind)?Q.is(e)||J.is(e)||Z.is(e):$.is(e)})))};var re,ie,oe,ae,se,ue,ce,de,ge,le,he,fe,pe,me,ve,_e,we,ke,be,ye,Ee,xe,Ce,Ie,Ae,Se,Re,Te,De,Pe,Me,Fe,Le,je,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et,tt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=W.insert(e,t):z.is(n)?(i=n,r=X.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=W.replace(e,t):z.is(n)?(i=n,r=X.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=X.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=W.del(e):z.is(t)?(r=t,n=X.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=X.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),nt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(z.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new nt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if($.is(e)){var n=new tt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new tt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(se.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new tt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new tt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new nt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Q.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Q.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(H.is(n)||z.is(n)?i=n:r=n,void 0===i?o=J.create(e,t,r):(a=z.is(i)?i:this._changeAnnotations.manage(i),o=J.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(H.is(t)||z.is(t)?r=t:n=t,void 0===r?i=Z.create(e,n):(o=z.is(r)?r:this._changeAnnotations.manage(r),i=Z.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(ie=re||(re={})).create=function(e){return{uri:e}},ie.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)},(ae=oe||(oe={})).create=function(e,t){return{uri:e,version:t}},ae.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&rt.integer(t.version)},(ue=se||(se={})).create=function(e,t){return{uri:e,version:t}},ue.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&(null===t.version||rt.integer(t.version))},(de=ce||(ce={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},de.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&rt.string(t.languageId)&&rt.integer(t.version)&&rt.string(t.text)},(le=ge||(ge={})).PlainText="plaintext",le.Markdown="markdown",(et=ge||(ge={})).is=function(e){var t=e;return t===et.PlainText||t===et.Markdown},(he||(he={})).is=function(e){var t=e;return rt.objectLiteral(e)&&ge.is(t.kind)&&rt.string(t.value)},(pe=fe||(fe={})).Text=1,pe.Method=2,pe.Function=3,pe.Constructor=4,pe.Field=5,pe.Variable=6,pe.Class=7,pe.Interface=8,pe.Module=9,pe.Property=10,pe.Unit=11,pe.Value=12,pe.Enum=13,pe.Keyword=14,pe.Snippet=15,pe.Color=16,pe.File=17,pe.Reference=18,pe.Folder=19,pe.EnumMember=20,pe.Constant=21,pe.Struct=22,pe.Event=23,pe.Operator=24,pe.TypeParameter=25,(ve=me||(me={})).PlainText=1,ve.Snippet=2,(_e||(_e={})).Deprecated=1,(ke=we||(we={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},ke.is=function(e){var t=e;return t&&rt.string(t.newText)&&h.is(t.insert)&&h.is(t.replace)},(ye=be||(be={})).asIs=1,ye.adjustIndentation=2,(Ee||(Ee={})).create=function(e){return{label:e}},(xe||(xe={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ie=Ce||(Ce={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ie.is=function(e){var t=e;return rt.string(t)||rt.objectLiteral(t)&&rt.string(t.language)&&rt.string(t.value)},(Ae||(Ae={})).is=function(e){var t=e;return!!t&&rt.objectLiteral(t)&&(he.is(t.contents)||Ce.is(t.contents)||rt.typedArray(t.contents,Ce.is))&&(void 0===e.range||h.is(e.range))},(Se||(Se={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Re||(Re={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return rt.defined(t)&&(i.documentation=t),rt.defined(n)?i.parameters=n:i.parameters=[],i},(De=Te||(Te={})).Text=1,De.Read=2,De.Write=3,(Pe||(Pe={})).create=function(e,t){var n={range:e};return rt.number(t)&&(n.kind=t),n},(Fe=Me||(Me={})).File=1,Fe.Module=2,Fe.Namespace=3,Fe.Package=4,Fe.Class=5,Fe.Method=6,Fe.Property=7,Fe.Field=8,Fe.Constructor=9,Fe.Enum=10,Fe.Interface=11,Fe.Function=12,Fe.Variable=13,Fe.Constant=14,Fe.String=15,Fe.Number=16,Fe.Boolean=17,Fe.Array=18,Fe.Object=19,Fe.Key=20,Fe.Null=21,Fe.EnumMember=22,Fe.Struct=23,Fe.Event=24,Fe.Operator=25,Fe.TypeParameter=26,(Le||(Le={})).Deprecated=1,(je||(je={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ne=Oe||(Oe={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ne.is=function(e){var t=e;return t&&rt.string(t.name)&&rt.number(t.kind)&&h.is(t.range)&&h.is(t.selectionRange)&&(void 0===t.detail||rt.string(t.detail))&&(void 0===t.deprecated||rt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(We=Ue||(Ue={})).Empty="",We.QuickFix="quickfix",We.Refactor="refactor",We.RefactorExtract="refactor.extract",We.RefactorInline="refactor.inline",We.RefactorRewrite="refactor.rewrite",We.Source="source",We.SourceOrganizeImports="source.organizeImports",We.SourceFixAll="source.fixAll",(He=Ve||(Ve={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},He.is=function(e){var t=e;return rt.defined(t)&&rt.typedArray(t.diagnostics,j.is)&&(void 0===t.only||rt.typedArray(t.only,rt.string))},(ze=Ke||(Ke={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):N.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},ze.is=function(e){var t=e;return t&&rt.string(t.title)&&(void 0===t.diagnostics||rt.typedArray(t.diagnostics,j.is))&&(void 0===t.kind||rt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||N.is(t.command))&&(void 0===t.isPreferred||rt.boolean(t.isPreferred))&&(void 0===t.edit||te.is(t.edit))},(Be=Xe||(Xe={})).create=function(e,t){var n={range:e};return rt.defined(t)&&(n.data=t),n},Be.is=function(e){var t=e;return rt.defined(t)&&h.is(t.range)&&(rt.undefined(t.command)||N.is(t.command))},(qe=$e||($e={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},qe.is=function(e){var t=e;return rt.defined(t)&&rt.uinteger(t.tabSize)&&rt.boolean(t.insertSpaces)},(Ge=Qe||(Qe={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ge.is=function(e){var t=e;return rt.defined(t)&&h.is(t.range)&&(rt.undefined(t.target)||rt.string(t.target))},(Ye=Je||(Je={})).create=function(e,t){return{range:e,parent:t}},Ye.is=function(e){var t=e;return void 0!==t&&h.is(t.range)&&(void 0===t.parent||Ye.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new at(e,t,n,r)},e.is=function(e){var t=e;return!!(rt.defined(t)&&rt.string(t.uri)&&(rt.undefined(t.languageId)||rt.string(t.languageId))&&rt.uinteger(t.lineCount)&&rt.func(t.getText)&&rt.func(t.positionAt)&&rt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(Ze||(Ze={}));var rt,it,ot,at=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return g.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return g.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();it=rt||(rt={}),ot=Object.prototype.toString,it.defined=function(e){return void 0!==e},it.undefined=function(e){return void 0===e},it.boolean=function(e){return!0===e||!1===e},it.string=function(e){return"[object String]"===ot.call(e)},it.number=function(e){return"[object Number]"===ot.call(e)},it.numberRange=function(e,t,n){return"[object Number]"===ot.call(e)&&t<=e&&e<=n},it.integer=function(e){return"[object Number]"===ot.call(e)&&-2147483648<=e&&e<=2147483647},it.uinteger=function(e){return"[object Number]"===ot.call(e)&&0<=e&&e<=2147483647},it.func=function(e){return"[object Function]"===ot.call(e)},it.objectLiteral=function(e){return null!==e&&"object"==typeof e},it.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var st=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{a.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(a.editor.onDidCreateModel(r)),this._disposables.push(a.editor.onWillDisposeModel(i)),this._disposables.push(a.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{a.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{a.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),a.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:ut(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=a.editor.getModel(e);i&&i.getLanguageId()===t&&a.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{}))}};function ut(e){switch(e){case D.Error:return a.MarkerSeverity.Error;case D.Warning:return a.MarkerSeverity.Warning;case D.Information:return a.MarkerSeverity.Info;case D.Hint:return a.MarkerSeverity.Hint;default:return a.MarkerSeverity.Info}}var ct=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),dt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new a.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:ht(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:lt(e.textEdit.insert),replace:lt(e.textEdit.replace)}:t.range=lt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ft)),e.insertTextFormat===me.Snippet&&(t.insertTextRules=a.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function dt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function gt(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function lt(e){if(e)return new a.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ht(e){const t=a.languages.CompletionItemKind;switch(e){case fe.Text:return t.Text;case fe.Method:return t.Method;case fe.Function:return t.Function;case fe.Constructor:return t.Constructor;case fe.Field:return t.Field;case fe.Variable:return t.Variable;case fe.Class:return t.Class;case fe.Interface:return t.Interface;case fe.Module:return t.Module;case fe.Property:return t.Property;case fe.Unit:return t.Unit;case fe.Value:return t.Value;case fe.Enum:return t.Enum;case fe.Keyword:return t.Keyword;case fe.Snippet:return t.Snippet;case fe.Color:return t.Color;case fe.File:return t.File;case fe.Reference:return t.Reference}return t.Property}function ft(e){if(e)return{range:lt(e.range),text:e.newText}}var pt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),dt(t)))).then((e=>{if(e)return{range:lt(e.range),contents:vt(e.contents)}}))}};function mt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function vt(e){if(e)return Array.isArray(e)?e.map(mt):[mt(e)]}var _t=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),dt(t)))).then((e=>{if(e)return e.map((e=>({range:lt(e.range),kind:wt(e.kind)})))}))}};function wt(e){switch(e){case Te.Read:return a.languages.DocumentHighlightKind.Read;case Te.Write:return a.languages.DocumentHighlightKind.Write;case Te.Text:return a.languages.DocumentHighlightKind.Text}return a.languages.DocumentHighlightKind.Text}var kt=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),dt(t)))).then((e=>{if(e)return[bt(e)]}))}};function bt(e){return{uri:a.Uri.parse(e.uri),range:lt(e.range)}}var yt=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),dt(t)))).then((e=>{if(e)return e.map(bt)}))}},Et=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),dt(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=a.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:lt(i.range),text:i.newText}})}return{edits:t}}(e)))}},xt=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>"children"in e?Ct(e):{name:e.name,detail:"",containerName:e.containerName,kind:It(e.kind),range:lt(e.location.range),selectionRange:lt(e.location.range),tags:[]}))}))}};function Ct(e){return{name:e.name,detail:e.detail??"",kind:It(e.kind),range:lt(e.range),selectionRange:lt(e.selectionRange),tags:e.tags??[],children:(e.children??[]).map((e=>Ct(e)))}}function It(e){let t=a.languages.SymbolKind;switch(e){case Me.File:return t.File;case Me.Module:return t.Module;case Me.Namespace:return t.Namespace;case Me.Package:return t.Package;case Me.Class:return t.Class;case Me.Method:return t.Method;case Me.Property:return t.Property;case Me.Field:return t.Field;case Me.Constructor:return t.Constructor;case Me.Enum:return t.Enum;case Me.Interface:return t.Interface;case Me.Function:return t.Function;case Me.Variable:return t.Variable;case Me.Constant:return t.Constant;case Me.String:return t.String;case Me.Number:return t.Number;case Me.Boolean:return t.Boolean;case Me.Array:return t.Array}return t.Function}var At=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:lt(e.range),url:e.target})))}}))}},St=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Tt(t)).then((e=>{if(e&&0!==e.length)return e.map(ft)}))))}},Rt=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),gt(t),Tt(n)).then((e=>{if(e&&0!==e.length)return e.map(ft)}))))}};function Tt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Dt=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:lt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,gt(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=ft(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(ft)),t}))}))}},Pt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case C.Comment:return a.languages.FoldingRangeKind.Comment;case C.Imports:return a.languages.FoldingRangeKind.Imports;case C.Region:return a.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},Mt=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(dt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:lt(e.range)}),e=e.parent;return t}))}))}},Ft=class extends ct{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Lt(e){const t=new ne(e),n=(...e)=>t.getLanguageServiceWorker(...e);let r=e.languageId;a.languages.registerCompletionItemProvider(r,new Ft(n)),a.languages.registerHoverProvider(r,new pt(n)),a.languages.registerDocumentHighlightProvider(r,new _t(n)),a.languages.registerLinkProvider(r,new At(n)),a.languages.registerFoldingRangeProvider(r,new Pt(n)),a.languages.registerDocumentSymbolProvider(r,new xt(n)),a.languages.registerSelectionRangeProvider(r,new Mt(n)),a.languages.registerRenameProvider(r,new Et(n)),"html"===r&&(a.languages.registerDocumentFormattingEditProvider(r,new St(n)),a.languages.registerDocumentRangeFormattingEditProvider(r,new Rt(n)))}function jt(e){const t=[],n=[],r=new ne(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;Nt(n),r.completionItems&&n.push(a.languages.registerCompletionItemProvider(t,new Ft(i))),r.hovers&&n.push(a.languages.registerHoverProvider(t,new pt(i))),r.documentHighlights&&n.push(a.languages.registerDocumentHighlightProvider(t,new _t(i))),r.links&&n.push(a.languages.registerLinkProvider(t,new At(i))),r.documentSymbols&&n.push(a.languages.registerDocumentSymbolProvider(t,new xt(i))),r.rename&&n.push(a.languages.registerRenameProvider(t,new Et(i))),r.foldingRanges&&n.push(a.languages.registerFoldingRangeProvider(t,new Pt(i))),r.selectionRanges&&n.push(a.languages.registerSelectionRangeProvider(t,new Mt(i))),r.documentFormattingEdits&&n.push(a.languages.registerDocumentFormattingEditProvider(t,new St(i))),r.documentRangeFormattingEdits&&n.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new Rt(i)))}(),t.push(Ot(n)),Ot(t)}function Ot(e){return{dispose:()=>Nt(e)}}function Nt(e){for(;e.length;)e.pop().dispose()}export{ct as CompletionAdapter,kt as DefinitionAdapter,st as DiagnosticsAdapter,Dt as DocumentColorAdapter,St as DocumentFormattingEditProvider,_t as DocumentHighlightAdapter,At as DocumentLinkAdapter,Rt as DocumentRangeFormattingEditProvider,xt as DocumentSymbolAdapter,Pt as FoldingRangeAdapter,pt as HoverAdapter,yt as ReferenceAdapter,Et as RenameAdapter,Mt as SelectionRangeAdapter,ne as WorkerManager,dt as fromPosition,gt as fromRange,jt as setupMode,Lt as setupMode1,lt as toRange,ft as toTextEdit};
