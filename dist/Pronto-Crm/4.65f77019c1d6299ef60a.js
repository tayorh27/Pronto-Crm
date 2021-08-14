(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{LmZi:function(e,t,r){"use strict";r.r(t),r.d(t,"registerStorage",(function(){return Xe}));var n=r("wj3C"),o=r.n(n),i=r("mrSG"),a=r("S+S0"),s="firebasestorage.googleapis.com",u=function(){function e(e,t){this.code_=l(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return l(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),c="canceled";function l(e){return"storage/"+e}function h(){return new u("unknown","An unknown error occurred, please check the error payload for server response.")}function p(){return new u(c,"User canceled the upload/download.")}function f(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function d(){return new u("no-download-url","The given file does not have any download URLs.")}function _(e,t,r){return new u("invalid-argument","Invalid argument in `"+t+"` at index "+e+": "+r)}function v(){return new u("app-deleted","The Firebase app was deleted.")}function g(e,t){return new u("invalid-format","String does not match format '"+e+"': "+t)}function m(e){throw new u("internal-error","Internal error: "+e)}var b={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function y(e){switch(e){case b.RAW:case b.BASE64:case b.BASE64URL:case b.DATA_URL:return;default:throw"Expected one of the event types: ["+b.RAW+", "+b.BASE64+", "+b.BASE64URL+", "+b.DATA_URL+"]."}}var w=function(e,t){this.data=e,this.contentType=t||null};function R(e,t){switch(e){case b.RAW:return new w(k(t));case b.BASE64:case b.BASE64URL:return new w(T(e,t));case b.DATA_URL:return new w((r=new x(t)).base64?T(b.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(r){throw g(b.DATA_URL,"Malformed data URL.")}return k(t)}(r.rest),new x(t).contentType)}var r;throw h()}function k(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1))){var o=n,i=e.charCodeAt(++r);t.push(240|(n=65536|(1023&o)<<10|1023&i)>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function T(e,t){switch(e){case b.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw g(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case b.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw g(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw g(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var x=function(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(b.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r,n,o=t[1]||null;null!=o&&(this.base64=(r=o).length>=(n=";base64").length&&r.substring(r.length-n.length)===n,this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)},O={STATE_CHANGED:"state_changed"},S="running",U="pausing",E="paused",P="success",A="canceling",C="canceled",j="error",L={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function B(e){switch(e){case S:case U:case A:return L.RUNNING;case E:return L.PAUSED;case P:return L.SUCCESS;case C:return L.CANCELED;case j:default:return L.ERROR}}function I(e){return null!=e}function q(e){return void 0!==e}function M(e){return"function"==typeof e}function N(e){return"object"==typeof e}function H(e){return N(e)&&null!==e}function z(e){return"string"==typeof e||e instanceof String}function D(e){return F(e)&&Number.isInteger(e)}function F(e){return"number"==typeof e||e instanceof Number}function G(e){return X()&&e instanceof Blob}function X(){return"undefined"!=typeof Blob}var W=function(e){return e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT",e}({}),K=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=W.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=W.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),I(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return I(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw m("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),Z=function(){function e(){}return e.prototype.createXhrIo=function(){return new K},e}();function J(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function V(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=J();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(X())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}var $=function(){function e(e,t){var r=0,n="";G(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(G(this.data_)){var n=(i=t,a=r,(o=this.data_).webkitSlice?o.webkitSlice(i,a):o.mozSlice?o.mozSlice(i,a):o.slice?o.slice(i,a):null);return null===n?null:new e(n)}var o,i,a;return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(X()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(V.apply(null,n))}var o=t.map((function(e){return z(e)?R(b.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),Q=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw new u("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)",o=new RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}for(var a=s.replace(/[.]/g,"\\."),c=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+a+"/v[A-Za-z0-9_]+/b/"+n+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/"+n+"/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:i}],l=0;l<c.length;l++){var h=c[l],p=h.regex.exec(t);if(p){var f=p[h.indices.path];f||(f=""),r=new e(p[h.indices.bucket],f),h.postModify(r);break}}if(null==r)throw function(e){return new u("invalid-url","Invalid URL '"+e+"'.")}(t);return r},e}();function Y(e){var t,r;try{t=JSON.parse(e)}catch(n){return null}return N(r=t)&&!Array.isArray(r)?t:null}function ee(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function te(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function re(e){return"https://"+s+"/v0"+e}function ne(e){var t=encodeURIComponent,r="?";for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}function oe(e,t){return t}var ie=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||oe},ae=null;function se(e,t,r){var n=Y(t);return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=new Q(e.bucket,e.fullPath);return t.makeStorageReference(r)}})}(n,e),n}(e,n,r)}function ue(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function ce(e){if(!N(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!N(r))throw"Expected object for 'customMetadata' mapping."}else if(H(r))throw"Mapping for '"+t+"' cannot be an object."}}function le(e){if(!N(e)||!e)throw"Expected ListOptions object.";for(var t in e)if("maxResults"===t){if(!D(e.maxResults)||e.maxResults<=0)throw"Expected maxResults to be a positive number.";if(e.maxResults>1e3)throw"Expected maxResults to be less than or equal to 1000."}else{if("pageToken"!==t)throw"Unknown option: "+t;if(e.pageToken&&!z(e.pageToken))throw"Expected pageToken to be string."}}var he=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function pe(e){if(!e)throw h()}function fe(e,t){return function(r,n){var o=se(e,n,t);return pe(null!==o),o}}function de(e){return function(t,r){var n;return(n=401===t.getStatus()?new u("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?new u("quota-exceeded","Quota for bucket '"+e.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===t.getStatus()?new u("unauthorized","User does not have permission to access '"+e.path+"'."):r).setServerResponseProp(r.serverResponseProp()),n}}function _e(e){var t=de(e);return function(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=new u("object-not-found","Object '"+e.path+"' does not exist.")),o.setServerResponseProp(n.serverResponseProp()),o}}function ve(e,t,r){var n=re(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new he(n,"GET",fe(e,r),o);return i.errorHandler=_e(t),i}function ge(e,t,r,n,o){var i={};i.prefix=t.isRoot?"":t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o);var a=re(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new he(a,"GET",function(e,t){return function(r,n){var o=function(e,t,r){var n=Y(r);return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new Q(t,a));n.prefixes.push(s)}if(r.items)for(var u=0,c=r.items;u<c.length;u++)s=e.makeStorageReference(new Q(t,c[u].name)),n.items.push(s);return n}(e,t,n)}(e,t,n);return pe(null!==o),o}}(e,t.bucket),s);return u.urlParams=i,u.errorHandler=de(t),u}function me(e,t,r){var n=re(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new he(n,"GET",function(e,t){return function(r,n){var o=se(e,n,t);return pe(null!==o),function(e,t){var r=Y(t);if(null===r)return null;if(!z(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map((function(t){var r=e.fullPath;return re("/b/"+o(e.bucket)+"/o/"+o(r))+ne({alt:"media",token:t})}))[0]}(o,n)}}(e,r),o);return i.errorHandler=_e(t),i}function be(e,t,r,n){var o=re(t.fullServerUrl()),i=ue(r,n),a=e.maxOperationRetryTime,s=new he(o,"PATCH",fe(e,n),a);return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=_e(t),s}function ye(e,t){var r=re(t.fullServerUrl()),n=new he(r,"DELETE",(function(e,t){}),e.maxOperationRetryTime);return n.successCodes=[200,204],n.errorHandler=_e(t),n}function we(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),n}var Re=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function ke(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(n){pe(!1)}return pe(!!r&&-1!==(t||["active"]).indexOf(r)),r}var Te=262144,xe=function(e,t,r){if(M(e)||I(t)||I(r))this.next=e,this.error=t||null,this.complete=r||null;else{var n=e;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},Oe=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};function Se(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a,s,c,l;if(!(n<=r.length&&r.length<=o))throw(a=n)===(s=o)?(c=a,l=1===a?"argument":"arguments"):(c="between "+a+" and "+s,l="arguments"),new u("invalid-argument-count","Invalid argument count in `"+e+"`: Expected "+c+" "+l+", received "+r.length+".");for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(h){throw h instanceof Error?_(i,e,h.message):_(i,e,h)}}var Ue=function(e,t){var r=this;this.validator=function(t){r.optional&&!q(t)||e(t)},this.optional=!!t};function Ee(e,t){function r(e){if(!z(e))throw"Expected string."}var n,o,i;return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new Ue(n,t)}function Pe(){return new Ue((function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||X()&&e instanceof Blob))throw"Expected Blob or File."}))}function Ae(e){return new Ue(ce,e)}function Ce(e){return new Ue(le,e)}function je(){return new Ue((function(e){if(!(F(e)&&e>=0))throw"Expected a number 0 or greater."}))}function Le(e,t){return new Ue((function(t){if(!(null===t||I(t)&&t instanceof Object))throw"Expected an Object.";null!=e&&e(t)}),t)}function Be(e){return new Ue((function(e){if(null!==e&&!M(e))throw"Expected a Function."}),e)}function Ie(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}var qe=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=S,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(c)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(j))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(c)?a.completeTransitions_():(a.error_=e,a.transition_(j))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===S&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.service_.getAuthToken().then((function(r){switch(t.state_){case S:e(r);break;case A:t.transition_(C);break;case U:t.transition_(E)}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=we(t,n,o),s={name:a.fullPath},u=re(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ue(a,r),h=new he(u,"POST",(function(e){var t;ke(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){pe(!1)}return pe(z(t)),t}),e.maxUploadRetryTime);return h.urlParams=s,h.headers=c,h.body=l,h.errorHandler=de(t),h}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=function(e,t,r,n){var o=new he(r,"POST",(function(e){var t=ke(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){pe(!1)}r||pe(!1);var o=Number(r);return pe(!isNaN(o)),new Re(o,n.size(),"final"===t)}),e.maxUploadRetryTime);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=de(t),o}(e.service_,e.location_,t,e.blob_),o=e.service_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=Te*this.chunkMultiplier_,r=new Re(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=function(e,t,r,n,o,i,a,s){var c=new Re(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw new u("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var l=c.total-c.current,h=l;o>0&&(h=Math.min(h,o));var p=c.current,d={"X-Goog-Upload-Command":h===l?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},_=n.slice(p,p+h);if(null===_)throw f();var v=new he(r,"POST",(function(e,r){var o,a=ke(e,["active","final"]),s=c.current+h,u=n.size();return o="final"===a?fe(t,i)(e,r):null,new Re(s,u,"final"===a,o)}),t.maxUploadRetryTime);return v.headers=d,v.body=_.uploadData(),v.progressCallback=s||null,v.errorHandler=de(e),v}(e.location_,e.service_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(j)}var a=e.service_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(P)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){Te*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=ve(e.service_,e.location_,e.mappings_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(P)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=we(t,n,o),c=ue(u,r),l=$.getBlob("--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",n,"\r\n--"+s+"--");if(null===l)throw f();var h={name:u.fullPath},p=re(i),d=e.maxUploadRetryTime,_=new he(p,"POST",fe(e,r),d);return _.urlParams=h,_.headers=a,_.body=l.uploadData(),_.errorHandler=de(t),_}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(P)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case A:case U:this.state_=e,null!==this.request_&&this.request_.cancel();break;case S:var t=this.state_===E;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case E:this.state_=e,this.notifyObservers_();break;case C:this.error_=p(),this.state_=e,this.notifyObservers_();break;case j:case P:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case U:this.transition_(E);break;case A:this.transition_(C);break;case S:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=B(this.state_);return new Oe(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==O.STATE_CHANGED)throw"Expected one of the event types: ["+O.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=Be(!0).validator,s=Le(null,!0).validator;function u(e){try{return void a(e)}catch(t){}try{if(s(e),!(q(e.next)||q(e.error)||q(e.complete)))throw"";return}catch(t){throw i}}var c=[Ee(o),Le(u,!0),Be(!0),Be(!0)];Se("on",c,arguments);var l=this;function h(e){return function(t,r,o){null!==e&&Se("on",e,arguments);var i=new xe(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}}function p(e){if(null===e)throw i;u(e)}var f=[Le(p),Be(!0),Be(!0)],d=!(q(t)||q(r)||q(n));return d?h(f):h(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_(),this.observers_.slice().forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(B(this.state_)){case L.SUCCESS:Ie(this.resolve_.bind(null,this.snapshot))();break;case L.CANCELED:case L.ERROR:Ie(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(B(this.state_)){case L.RUNNING:case L.PAUSED:e.next&&Ie(e.next.bind(e,this.snapshot))();break;case L.SUCCESS:e.complete&&Ie(e.complete.bind(e))();break;case L.CANCELED:case L.ERROR:e.error&&Ie(e.error.bind(e,this.error_))();break;default:e.error&&Ie(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){Se("resume",[],arguments);var e=this.state_===E||this.state_===U;return e&&this.transition_(S),e},e.prototype.pause=function(){Se("pause",[],arguments);var e=this.state_===S;return e&&this.transition_(U),e},e.prototype.cancel=function(){Se("cancel",[],arguments);var e=this.state_===S||this.state_===U;return e&&this.transition_(A),e},e}(),Me=function(){function e(e,t){this.service=e,this.location=t instanceof Q?t:Q.makeFromUrl(t)}return e.prototype.toString=function(){return Se("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return function(){if(ae)return ae;var e=[];e.push(new ie("bucket")),e.push(new ie("generation")),e.push(new ie("metageneration")),e.push(new ie("name","fullPath",!0));var t=new ie("name");t.xform=function(e,t){return function(e){return!z(e)||e.length<2?e:te(e)}(t)},e.push(t);var r=new ie("size");return r.xform=function(e,t){return I(t)?Number(t):t},e.push(r),e.push(new ie("timeCreated")),e.push(new ie("updated")),e.push(new ie("md5Hash",null,!0)),e.push(new ie("cacheControl",null,!0)),e.push(new ie("contentDisposition",null,!0)),e.push(new ie("contentEncoding",null,!0)),e.push(new ie("contentLanguage",null,!0)),e.push(new ie("contentType",null,!0)),e.push(new ie("metadata","customMetadata",!0)),ae=e}()},e.prototype.child=function(e){Se("child",[Ee()],arguments);var t=ee(this.location.path,e),r=new Q(this.location.bucket,t);return this.newRef(this.service,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;var t=new Q(this.location.bucket,e);return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new Q(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return te(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),Se("put",[Pe(),Ae(!0)],arguments),this.throwIfRoot_("put"),new qe(this,this.service,this.location,this.mappings(),new $(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=b.RAW),Se("putString",[Ee(),Ee(y,!0),Ae(!0)],arguments),this.throwIfRoot_("putString");var n=R(t,e),o=Object.assign({},r);return!I(o.contentType)&&I(n.contentType)&&(o.contentType=n.contentType),new qe(this,this.service,this.location,this.mappings(),new $(n.data,!0),o)},e.prototype.delete=function(){var e=this;return Se("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then((function(t){var r=ye(e.service,e.location);return e.service.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){Se("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var r,n,o;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return[4,this.list({pageToken:t})];case 1:return r=i.sent(),(n=e.prefixes).push.apply(n,r.prefixes),(o=e.items).push.apply(o,r.items),null==r.nextPageToken?[3,3]:[4,this.listAllHelper(e,r.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){Se("list",[Ce(!0)],arguments);var t=this;return this.service.getAuthToken().then((function(r){var n=e||{},o=ge(t.service,t.location,"/",n.pageToken,n.maxResults);return t.service.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return Se("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then((function(t){var r=ve(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return Se("updateMetadata",[Ae()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then((function(r){var n=be(t.service,t.location,e,t.mappings());return t.service.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return Se("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then((function(t){var r=me(e.service,e.location,e.mappings());return e.service.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw d();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),Ne=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),He=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var s=e.callback_(a,a.getResponseText());q(s)?o(s):o()}catch(c){i(c)}else null!==a?((n=h()).setServerResponseProp(a.getResponseText()),i(e.errorCallback_?e.errorCallback_(a,n):n)):i(n=r.canceled?e.appDelete_?v():p():new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new ze(!1,null,!0)):this.backoffId_=function(t,r,n){var o=1,a=null,s=!1,u=0;function c(){return 2===u}var l=!1;function h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];l||(l=!0,r.apply(null,e))}function p(t){a=setTimeout((function(){a=null,function(t,r){if(r)t(!1,new ze(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null;var n=(r=r).getErrorCode()===W.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new ze(a,r))}else{var s=r.getErrorCode()===W.ABORT;t(!1,new ze(!1,null,s))}}))}function o(t){null!==e.progressCallback_&&e.progressCallback_(t.loaded,t.lengthComputable?t.total:-1)}}(f,c())}),t)}function f(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!l)if(e)h.call.apply(h,Object(i.__spreadArrays)([null,e],t));else{var n;c()||s?h.call.apply(h,Object(i.__spreadArrays)([null,e],t)):(o<64&&(o*=2),1===u?(u=2,n=0):n=1e3*(o+Math.random()),p(n))}}var d=!1;function _(e){d||(d=!0,l||(null!==a?(e||(u=2),clearTimeout(a),p(0)):e||(u=1)))}return p(0),setTimeout((function(){s=!0,_(!0)}),n),_}(0,t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),ze=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r},De=function(){function e(t,r,n,o){var i;this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,this.authProvider_=r,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requests_=new Set,this.pool_=n,this.bucket_=null!=o?Q.makeFromBucketSpec(o):e.extractBucket_(null===(i=this.app_)||void 0===i?void 0:i.options),this.internals_=new Fe(this)}return e.extractBucket_=function(e){var t=null==e?void 0:e.storageBucket;return null==t?null:Q.makeFromBucketSpec(t)},e.prototype.getAuthToken=function(){return Object(i.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(i.__generator)(this,(function(r){switch(r.label){case 0:return(e=this.authProvider_.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:if(null!==(t=r.sent()))return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach((function(e){return e.cancel()})),this.requests_.clear()},e.prototype.makeStorageReference=function(e){return new Me(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new Ne(v());var n=function(e,t,r,n){var i=ne(e.urlParams),a=e.url+i,s=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,r),function(e){e["X-Firebase-Storage-Version"]="webjs/"+(void 0!==o.a?o.a.SDK_VERSION:"AppManager")}(s),new He(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then((function(){return r.requests_.delete(n)}),(function(){return r.requests_.delete(n)})),n},e.prototype.ref=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(Se("ref",[Ee(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Me(this,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{Q.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return Se("refFromURL",[Ee(t,!1)],arguments),new Me(this,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){Se("setMaxUploadRetryTime",[je()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxOperationRetryTime=function(e){Se("setMaxOperationRetryTime",[je()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),Fe=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},e}();function Ge(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new De(r,n,new Z,t)}function Xe(e){var t={TaskState:L,TaskEvent:O,StringFormat:b,Storage:De,Reference:Me};e.INTERNAL.registerComponent(new a.Component("storage",Ge,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage","0.3.43")}Xe(o.a)}}]);