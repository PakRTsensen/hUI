import{s as Ur,y as Vr,A as Wr,p as Lr,j as lr,l as Kt,i as de,d as C,e as P,t as ke,k as ce,c as U,a as V,b as Se,o as fe,f as N,g as A,u as ct,h as Ae,G as qr,F as La,n as ut,S as dp,q as pp,B as po,Z as qa,W as dg,r as pg,v as cg,w as fg,x as hg}from"./osRMcaoZ.js";import{S as Hr,i as Gr,f as Fr,b as Te,d as Ie,m as Ce,t as Y,a as ee,e as ze,g as Ze,c as Ye}from"./Cz_TVcYH.js";import{g as co}from"./D8uoGrsU.js";import{p as mg}from"./CewYWBXN.js";import{g as gg}from"./D0QH3NT1.js";import{e as ur,u as cp,d as _g,o as yg}from"./DCwEHxc-.js";import{_ as bg,a as $g,b as vg}from"./mwDbUFdv.js";import{m as wg,e as Ha}from"./BZZAOY5F.js";import{M as fp}from"./BbL-Ydhu.js";import{X as hp}from"./YHUoul5_.js";import{S as mp}from"./XYvaYOQu.js";import{T as jr}from"./BRp5r6iY.js";import{S as xg}from"./CgIHmX5r.js";import{C as vt}from"./D0wlPick.js";import{C as er}from"./WR5NVTQu.js";import{t as mi}from"./CNktxJVk.js";import{f as kg}from"./CyTOOynw.js";import{d as hn,r as Sg}from"./I1CDPYOB.js";import{g as Eg,d as Tg,e as Ig,a as Cg}from"./CJdAZ5wh.js";import{A as zg}from"./wbTxV288.js";import{B as Cn}from"./B1Cm1oGM.js";import{C as Ag}from"./Cfz980HS.js";import{P as Og}from"./C5KkUPCv.js";import"./DiZkmC5K.js";import{M as Dg}from"./R_53rVSd.js";import{b as Rg}from"./BzzQifDF.js";import{f as Ng}from"./CBc5jlPY.js";import{D as Bg}from"./Bx9uHXXe.js";import{G as Mg}from"./DI_efbNH.js";import{E as Pg}from"./B2AZZEdi.js";/*!
 * ONNX Runtime Web v1.21.0-dev.20250206-d981b153d3
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var zn=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Vg=Object.getOwnPropertyNames,Wg=Object.prototype.hasOwnProperty,Lg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),le=(e,t)=>()=>(e&&(t=e(e=0)),t),ca=(e,t)=>{for(var r in t)zn(e,r,{get:t[r],enumerable:!0})},qg=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Vg(t))!Wg.call(e,i)&&i!==r&&zn(e,i,{get:()=>t[i],enumerable:!(a=Ug(t,i))||a.enumerable});return e},Ga=e=>qg(zn({},"__esModule",{value:!0}),e),Zr,nr,Rr,fo,gp,_p=le(()=>{Zr=new Map,nr=[],Rr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Zr.get(e);if(a===void 0)Zr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=nr.indexOf(e);i!==-1&&nr.splice(i,1);for(let s=0;s<nr.length;s++)if(Zr.get(nr[s]).priority<=r){nr.splice(s,0,e);return}nr.push(e)}return}throw new TypeError("not a valid backend")},fo=async e=>{let t=Zr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},gp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?nr:r,i,s=[],n=new Set;for(let l of a){let d=await fo(l);typeof d=="string"?s.push({name:l,err:d}):(i||(i=d),i===d&&n.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Hg=le(()=>{_p()}),yp,Gg=le(()=>{yp="1.21.0-dev.20250206-d981b153d3"}),gi,Nt,bp=le(()=>{Gg(),gi="warning",Nt={wasm:{},webgl:{},webgpu:{},versions:{common:yp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);gi=e}},get logLevel(){return gi}},Object.defineProperty(Nt,"logLevel",{enumerable:!0})}),st,Fg=le(()=>{bp(),st=Nt}),$p,vp,jg=le(()=>{$p=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*i,f=0,u=c,m=c*2,_=-1;n==="RGBA"?(f=0,u=c,m=c*2,_=c*3):n==="RGB"?(f=0,u=c,m=c*2):n==="RBG"&&(f=0,m=c,u=c*2);for(let y=0;y<s;y++)for(let w=0;w<i;w++){let v=(e.data[f++]-d[0])*l[0],b=(e.data[u++]-d[1])*l[1],k=(e.data[m++]-d[2])*l[2],S=_===-1?255:(e.data[_++]-d[3])*l[3];a.fillStyle="rgba("+v+","+b+","+k+","+S+")",a.fillRect(w,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},vp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],n=e.dims[3]):(i=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let u=4,m=0,_=1,y=2,w=3,v=0,b=f,k=f*2,S=-1;o==="RGBA"?(v=0,b=f,k=f*2,S=f*3):o==="RGB"?(v=0,b=f,k=f*2):o==="RBG"&&(v=0,k=f,b=f*2),a=r.createImageData(i,s);for(let E=0;E<s*i;m+=u,_+=u,y+=u,w+=u,E++)a.data[m]=(e.data[v++]-c[0])*d[0],a.data[_]=(e.data[b++]-c[1])*d[1],a.data[y]=(e.data[k++]-c[2])*d[2],a.data[w]=S===-1?255:(e.data[S++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),Ta,wp,xp,kp,Sp,Ep,Kg=le(()=>{An(),Ta=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},s,n;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?n=[i.bias,i.bias,i.bias,i.bias]:n=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,u=0,m=1,_=2,y=3,w=0,v=d,b=d*2,k=-1;o==="RGB"&&(f=3,u=0,m=1,_=2,y=-1),l==="RGBA"?k=d*3:l==="RBG"?(w=0,b=d,v=d*2):l==="BGR"&&(b=0,v=d,w=d*2);for(let S=0;S<d;S++,u+=f,_+=f,m+=f,y+=f)c[w++]=(e[u]+n[0])/s[0],c[v++]=(e[m]+n[1])/s[1],c[b++]=(e[_]+n[2])/s[2],k!==-1&&y!==-1&&(c[k++]=(e[y]+n[3])/s[3]);return l==="RGBA"?new At("float32",c,[1,4,r,a]):new At("float32",c,[1,3,r,a])},wp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let u=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(u=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=u,o.width=m}else o.tensorFormat="RGBA",o.height=u,o.width=m;f.drawImage(e,0,0),n=f.getImageData(0,0,m,u).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let u=l();u.width=f,u.height=c;let m=d(u);if(m!=null)m.putImageData(e,0,0),n=m.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else n=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let u=e.height,m=e.width;return f.drawImage(e,0,0,m,u),n=f.getImageData(0,0,m,u).data,o.height=u,o.width=m,Ta(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let u=l(),m=d(u);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{u.width=_.width,u.height=_.height,m.drawImage(_,0,0,u.width,u.height);let y=m.getImageData(0,0,u.width,u.height);o.height=u.height,o.width=u.width,c(Ta(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Ta(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},xp=(e,t)=>{let{width:r,height:a,download:i,dispose:s}=t,n=[1,a,r,4];return new At({location:"texture",type:"float32",texture:e,dims:n,download:i,dispose:s})},kp=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new At({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:s})},Sp=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new At({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:s})},Ep=(e,t,r)=>new At({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),$r,na,_i,Tp,Qg=le(()=>{$r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),na=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),_i=!1,Tp=()=>{if(!_i){_i=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&($r.set("int64",BigInt64Array),na.set(BigInt64Array,"int64")),t&&($r.set("uint64",BigUint64Array),na.set(BigUint64Array,"uint64")),r?($r.set("float16",Float16Array),na.set(Float16Array,"float16")):$r.set("float16",Uint16Array)}}}),Ip,Cp,Zg=le(()=>{An(),Ip=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},Cp=(e,t)=>{switch(e.location){case"cpu":return new At(e.type,e.data,t);case"cpu-pinned":return new At({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new At({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new At({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new At({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),At,An=le(()=>{jg(),Kg(),Qg(),Zg(),At=class{constructor(e,t,r){Tp();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let n=$r.get(a);if(!n)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(a=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=$r.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",n=e;else if(l==="boolean")a="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",n=Uint8Array.from(e);else{let l=na.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=n,this.dataLocation="cpu"}let s=Ip(i);if(this.cpuData&&s!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=s}static async fromImage(e,t){return wp(e,t)}static fromTexture(e,t){return xp(e,t)}static fromGpuBuffer(e,t){return kp(e,t)}static fromMLTensor(e,t){return Sp(e,t)}static fromPinnedBuffer(e,t,r){return Ep(e,t,r)}toDataURL(e){return $p(this,e)}toImageData(e){return vp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Cp(this,e)}}}),jt,zp=le(()=>{An(),jt=At}),Fa,yi,Qt,Wt,Ap=le(()=>{bp(),Fa=(e,t)=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||console.timeStamp(`${e}::ORT::${t}`)},yi=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],a=!1;for(let s=0;s<r.length;s++){if(a&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Fa("CPU",n);return}r[s].includes("TRACE_FUNC")&&(a=!0)}},Qt=e=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||yi("BEGIN",e)},Wt=e=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||yi("END",e)}}),Op,Yg=le(()=>{_p(),zp(),Ap(),Op=class Dp{constructor(t){this.handler=t}async run(t,r,a){Qt();let i={},s={};if(typeof t!="object"||t===null||t instanceof jt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof jt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let u=r[f];(u===null||u instanceof jt)&&(d=!0,n=!1,i[f]=u)}if(d){if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(n)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof jt?l[d]=c:l[d]=new jt(c.type,c.data,c.dims)}return Wt(),l}async release(){return this.handler.dispose()}static async create(t,r,a,i){Qt();let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,u=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(u=t.byteLength-f,typeof a=="number"){if(u=a,!Number.isSafeInteger(u))throw new RangeError("'byteLength' must be an integer.");if(u<=0||f+u>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,u)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await gp(n),d=await o.createInferenceSessionHandler(s,l);return Wt(),new Dp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Rp,Xg=le(()=>{Yg(),Rp=Op}),Jg=le(()=>{}),e_=le(()=>{}),t_=le(()=>{}),r_=le(()=>{}),a_={};ca(a_,{InferenceSession:()=>Rp,TRACE:()=>Fa,TRACE_FUNC_BEGIN:()=>Qt,TRACE_FUNC_END:()=>Wt,Tensor:()=>jt,env:()=>st,registerBackend:()=>Rr});var Lt=le(()=>{Hg(),Fg(),Xg(),zp(),Jg(),e_(),Ap(),t_(),r_()}),On=le(()=>{}),Np={};ca(Np,{default:()=>Bp});var bi,$i,Bp,i_=le(()=>{var e;Vh(),Sr(),Dn(),bi="ort-wasm-proxy-worker",$i=((e=globalThis.self)==null?void 0:e.name)===bi,$i&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":Rn(a.wasm).then(()=>{Xn(a).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=a;Jn(s,i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:i}=a,s=Xa(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=a;es(i,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":ts(a),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:n,outputIndices:o,options:l}=a;rs(i,s,n,o,new Array(o.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},is([...n,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":as(a),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Bp=$i?null:t=>new Worker(t??zt,{type:"module",name:bi})}),Mp={};ca(Mp,{default:()=>Pp});var vi,wi,Pp,n_=le(()=>{var e;wi=(vi=import.meta.url,async function(t={}){function r(){return O.buffer!=te.buffer&&ye(),te}function a(){return O.buffer!=te.buffer&&ye(),oe}function i(){return O.buffer!=te.buffer&&ye(),ne}function s(){return O.buffer!=te.buffer&&ye(),G}function n(){return O.buffer!=te.buffer&&ye(),ie}function o(){return O.buffer!=te.buffer&&ye(),re}function l(){return O.buffer!=te.buffer&&ye(),M}function d(){return O.buffer!=te.buffer&&ye(),ve}var c,f,u=Object.assign({},t),m=new Promise((p,h)=>{c=p,f=h}),_=typeof window=="object",y=typeof importScripts=="function",w=y&&self.name=="em-pthread";u.mountExternalData=(p,h)=>{p.startsWith("./")&&(p=p.substring(2)),(u.Fb||(u.Fb=new Map)).set(p,h)},u.unmountExternalData=()=>{delete u.Fb};var v=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let b=()=>{let p=(g,$,x)=>(...z)=>{let K=Ht,ae=$==null?void 0:$();z=g(...z);let ue=$==null?void 0:$();return ae!==ue&&(g=ue,x(ae),$=x=null),Ht!=K?new Promise((pe,Ee)=>{oi={resolve:pe,reject:Ee}}):z},h=g=>async(...$)=>{var x;try{if(u.Gb)throw Error("Session already started");let z=u.Gb={hc:$[0],errors:[]},K=await g(...$);if(u.Gb!==z)throw Error("Session mismatch");(x=u.Hb)==null||x.flush();let ae=z.errors;if(0<ae.length){let ue=await Promise.all(ae);if(ue=ue.filter(pe=>pe),0<ue.length)throw Error(ue.join(`
`))}return K}finally{u.Gb=null}};u._OrtCreateSession=p(u._OrtCreateSession,()=>u._OrtCreateSession,g=>u._OrtCreateSession=g),u._OrtRun=h(p(u._OrtRun,()=>u._OrtRun,g=>u._OrtRun=g)),u._OrtRunWithBinding=h(p(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,g=>u._OrtRunWithBinding=g)),u._OrtBindInput=p(u._OrtBindInput,()=>u._OrtBindInput,g=>u._OrtBindInput=g),b=void 0};u.jsepInit=(p,h)=>{if(b==null||b(),p==="webgpu"){[u.Hb,u.Vb,u.Zb,u.Ob,u.Yb,u.kb,u.$b,u.cc,u.Wb,u.Xb,u.ac]=h;let g=u.Hb;u.jsepRegisterBuffer=($,x,z,K)=>g.registerBuffer($,x,z,K),u.jsepGetBuffer=$=>g.getBuffer($),u.jsepCreateDownloader=($,x,z)=>g.createDownloader($,x,z),u.jsepOnCreateSession=$=>{g.onCreateSession($)},u.jsepOnReleaseSession=$=>{g.onReleaseSession($)},u.jsepOnRunStart=$=>g.onRunStart($),u.dc=($,x)=>{g.upload($,x)}}else if(p==="webnn"){[u.Hb,u.bc,u.Pb,u.jsepEnsureTensor,u.ec,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Pb;let g=u.Hb;u.jsepOnRunStart=$=>g.onRunStart($),u.jsepRegisterMLContext=($,x)=>{g.registerMLContext($,x)},u.jsepOnReleaseSession=$=>{g.onReleaseSession($)},u.jsepCreateMLTensorDownloader=($,x)=>g.createMLTensorDownloader($,x),u.jsepRegisterMLTensor=($,x,z)=>g.registerMLTensor($,x,z),u.jsepCreateMLContext=$=>g.createMLContext($),u.jsepRegisterMLConstant=($,x,z,K,ae)=>g.registerMLConstant($,x,z,K,ae,u.Fb)}};var k,S,E=Object.assign({},u),T=(p,h)=>{throw h},I="";(_||y)&&(y?I=self.location.href:typeof document<"u"&&document.currentScript&&(I=document.currentScript.src),vi&&(I=vi),I=I.startsWith("blob:")?"":I.substr(0,I.replace(/[?#].*/,"").lastIndexOf("/")+1),y&&(S=p=>{var h=new XMLHttpRequest;return h.open("GET",p,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),k=(p,h,g)=>{var $=new XMLHttpRequest;$.open("GET",p,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?h($.response):g()},$.onerror=g,$.send(null)});var D,R=console.log.bind(console),L=console.error.bind(console),se=R,J=L;if(Object.assign(u,E),E=null,w){let p=function(h){try{var g=h.data,$=g.cmd;if($==="load"){let x=[];self.onmessage=z=>x.push(z),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let z of x)p(z);self.onmessage=p};for(let z of g.handlers)u[z]&&!u[z].proxy||(u[z]=(...K)=>{postMessage({Nb:"callHandler",pc:z,args:K})},z=="print"&&(se=u[z]),z=="printErr"&&(J=u[z]));O=g.wasmMemory,ye(),F(g.wasmModule)}else if($==="run"){pi(g.pthread_ptr,0,0,1,0,0),ni(g.pthread_ptr),Tr(),cr(),W||(Xs(),W=!0);try{fa(g.start_routine,g.arg)}catch(x){if(x!="unwind")throw x}}else $==="cancel"?Or()&&Sa(-1):g.target!=="setimmediate"&&($==="checkMailbox"?W&&ma():$&&(J(`worker: received unknown command ${$}`),J(g)))}catch(x){throw Js(),x}};var F,W=!1;J=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:Or()})},u.instantiateWasm=(h,g)=>new Promise($=>{F=x=>{x=new WebAssembly.Instance(x,ht()),g(x),$()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=p}u.wasmBinary&&(D=u.wasmBinary);var O,q,X,te,oe,ne,G,ie,re,M,B,Q,ve,we=!1;function ye(){var p=O.buffer;u.HEAP8=te=new Int8Array(p),u.HEAP16=ne=new Int16Array(p),u.HEAPU8=oe=new Uint8Array(p),u.HEAPU16=G=new Uint16Array(p),u.HEAP32=ie=new Int32Array(p),u.HEAPU32=re=new Uint32Array(p),u.HEAPF32=M=new Float32Array(p),u.HEAPF64=ve=new Float64Array(p),u.HEAP64=B=new BigInt64Array(p),u.HEAPU64=Q=new BigUint64Array(p)}if(!w){if(!((O=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof v))throw J("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");ye()}var $e=[],Ue=[],Pe=[],Re=0,it=null;function bt(){if(--Re==0&&it){var p=it;it=null,p()}}function je(p){throw J(p="Aborted("+p+")"),we=!0,X=1,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),f(p),p}var Ge,qe=p=>p.startsWith("data:application/octet-stream;base64,"),et=p=>p.startsWith("file://");function Et(p){if(p==Ge&&D)return new Uint8Array(D);if(S)return S(p);throw"both async and sync fetching of the wasm failed"}function wt(p,h,g){return function($){if(!D&&(_||y)){if(typeof fetch=="function"&&!et($))return fetch($,{credentials:"same-origin"}).then(x=>{if(!x.ok)throw`failed to load wasm binary file at '${$}'`;return x.arrayBuffer()}).catch(()=>Et($));if(k)return new Promise((x,z)=>{k($,K=>x(new Uint8Array(K)),z)})}return Promise.resolve().then(()=>Et($))}(p).then($=>WebAssembly.instantiate($,h)).then(g,$=>{J(`failed to asynchronously prepare wasm: ${$}`),je($)})}function ht(){return{a:{O:Xe,Aa:De,b:ha,aa:ns,B:ls,qa:us,Y:ps,_:cs,ra:fs,oa:hs,ha:ms,na:gs,L:_s,Z:ys,W:bs,pa:$s,X:vs,va:Xh,F:Jh,Q:em,P:rm,E:im,u:nm,q:sm,G:om,A:hm,R:mm,ua:gm,ka:_m,U:ym,ba:bm,H:$m,ja:ni,ta:vm,t:wm,Ba:xm,x:Em,o:Tm,m:Cm,c:ai,n:zm,k:Dm,w:Rm,p:Nm,f:Bm,s:Mm,l:Pm,e:Um,j:Vm,i:Wm,g:Lm,d:qm,ea:Hm,fa:Gm,ga:Fm,ca:Ns,da:Bs,T:jm,h:Km,D:Qm,I:Zm,M:Ym,y:Xm,sa:Jm,V:eg,v:Ps,z:tg,N:rg,S:ag,za:ig,ya:ng,la:Ws,ma:Ls,$:Me,C:qs,K:Hs,ia:Gs,J:Fs,a:O,xa:Dt,wa:Qs,r:lg}}}var _e={916868:(p,h,g,$,x)=>{if(u===void 0||!u.Fb)return 1;if((p=pt(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=u.Fb.get(p)))return 2;if(h=Number(h>>>0),g=Number(g>>>0),$=Number($>>>0),h+g>p.byteLength)return 3;try{let z=p.subarray(h,h+g);switch(x){case 0:a().set(z,$>>>0);break;case 1:u.dc($,z);break;default:return 4}return 0}catch{return 4}},917583:(p,h,g)=>{u.ec(p,a().subarray(h>>>0,h+g>>>0))},917646:()=>u.bc(),917687:p=>{u.Pb(p)},917723:()=>{u.Wb()},917754:()=>{u.Xb()},917783:()=>{u.ac()},917808:p=>u.Vb(p),917841:p=>u.Zb(p),917873:(p,h,g)=>{u.Ob(Number(p),Number(h),Number(g),!0)},917936:(p,h,g)=>{u.Ob(Number(p),Number(h),Number(g))},917993:()=>typeof wasmOffsetConverter<"u",918050:p=>{u.kb("Abs",p,void 0)},918101:p=>{u.kb("Neg",p,void 0)},918152:p=>{u.kb("Floor",p,void 0)},918205:p=>{u.kb("Ceil",p,void 0)},918257:p=>{u.kb("Reciprocal",p,void 0)},918315:p=>{u.kb("Sqrt",p,void 0)},918367:p=>{u.kb("Exp",p,void 0)},918418:p=>{u.kb("Erf",p,void 0)},918469:p=>{u.kb("Sigmoid",p,void 0)},918524:(p,h,g)=>{u.kb("HardSigmoid",p,{alpha:h,beta:g})},918603:p=>{u.kb("Log",p,void 0)},918654:p=>{u.kb("Sin",p,void 0)},918705:p=>{u.kb("Cos",p,void 0)},918756:p=>{u.kb("Tan",p,void 0)},918807:p=>{u.kb("Asin",p,void 0)},918859:p=>{u.kb("Acos",p,void 0)},918911:p=>{u.kb("Atan",p,void 0)},918963:p=>{u.kb("Sinh",p,void 0)},919015:p=>{u.kb("Cosh",p,void 0)},919067:p=>{u.kb("Asinh",p,void 0)},919120:p=>{u.kb("Acosh",p,void 0)},919173:p=>{u.kb("Atanh",p,void 0)},919226:p=>{u.kb("Tanh",p,void 0)},919278:p=>{u.kb("Not",p,void 0)},919329:(p,h,g)=>{u.kb("Clip",p,{min:h,max:g})},919398:p=>{u.kb("Clip",p,void 0)},919450:(p,h)=>{u.kb("Elu",p,{alpha:h})},919508:p=>{u.kb("Gelu",p,void 0)},919560:p=>{u.kb("Relu",p,void 0)},919612:(p,h)=>{u.kb("LeakyRelu",p,{alpha:h})},919676:(p,h)=>{u.kb("ThresholdedRelu",p,{alpha:h})},919746:(p,h)=>{u.kb("Cast",p,{to:h})},919804:p=>{u.kb("Add",p,void 0)},919855:p=>{u.kb("Sub",p,void 0)},919906:p=>{u.kb("Mul",p,void 0)},919957:p=>{u.kb("Div",p,void 0)},920008:p=>{u.kb("Pow",p,void 0)},920059:p=>{u.kb("Equal",p,void 0)},920112:p=>{u.kb("Greater",p,void 0)},920167:p=>{u.kb("GreaterOrEqual",p,void 0)},920229:p=>{u.kb("Less",p,void 0)},920281:p=>{u.kb("LessOrEqual",p,void 0)},920340:(p,h,g,$,x)=>{u.kb("ReduceMean",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920515:(p,h,g,$,x)=>{u.kb("ReduceMax",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920689:(p,h,g,$,x)=>{u.kb("ReduceMin",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920863:(p,h,g,$,x)=>{u.kb("ReduceProd",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921038:(p,h,g,$,x)=>{u.kb("ReduceSum",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921212:(p,h,g,$,x)=>{u.kb("ReduceL1",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921385:(p,h,g,$,x)=>{u.kb("ReduceL2",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921558:(p,h,g,$,x)=>{u.kb("ReduceLogSum",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921735:(p,h,g,$,x)=>{u.kb("ReduceSumSquare",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921915:(p,h,g,$,x)=>{u.kb("ReduceLogSumExp",p,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},922095:p=>{u.kb("Where",p,void 0)},922148:(p,h,g)=>{u.kb("Transpose",p,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},922272:(p,h,g,$)=>{u.kb("DepthToSpace",p,{blocksize:h,mode:pt(g),format:$?"NHWC":"NCHW"})},922405:(p,h,g,$)=>{u.kb("DepthToSpace",p,{blocksize:h,mode:pt(g),format:$?"NHWC":"NCHW"})},922538:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j,Ve)=>{u.kb("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:h,dilations:[g],group:$,kernelShape:[x],pads:[z,K],strides:[ae],wIsConst:()=>!!r()[pe>>>0],outputPadding:Ee?Array.from(n().subarray(Number(Ee)>>>0,Number(Le)>>>0)):[],outputShape:Ke?Array.from(n().subarray(Number(Ke)>>>0,Number(j)>>>0)):[],activation:pt(Ve)})},922971:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("ConvTranspose",p,{format:ae?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(n().subarray(Number(K)>>>0,2+(Number(K)>>>0)>>>0)),wIsConst:()=>!!r()[ue>>>0],outputPadding:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],outputShape:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[],activation:pt(j)})},923632:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j,Ve)=>{u.kb("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:h,dilations:[g],group:$,kernelShape:[x],pads:[z,K],strides:[ae],wIsConst:()=>!!r()[pe>>>0],outputPadding:Ee?Array.from(n().subarray(Number(Ee)>>>0,Number(Le)>>>0)):[],outputShape:Ke?Array.from(n().subarray(Number(Ke)>>>0,Number(j)>>>0)):[],activation:pt(Ve)})},924065:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("ConvTranspose",p,{format:ae?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(n().subarray(Number(K)>>>0,2+(Number(K)>>>0)>>>0)),wIsConst:()=>!!r()[ue>>>0],outputPadding:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],outputShape:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[],activation:pt(j)})},924726:(p,h)=>{u.kb("GlobalAveragePool",p,{format:h?"NHWC":"NCHW"})},924817:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("AveragePool",p,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[],kernel_shape:ae?Array.from(n().subarray(Number(ae)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[]})},925296:(p,h)=>{u.kb("GlobalAveragePool",p,{format:h?"NHWC":"NCHW"})},925387:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("AveragePool",p,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[],kernel_shape:ae?Array.from(n().subarray(Number(ae)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[]})},925866:(p,h)=>{u.kb("GlobalMaxPool",p,{format:h?"NHWC":"NCHW"})},925953:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("MaxPool",p,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[],kernel_shape:ae?Array.from(n().subarray(Number(ae)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[]})},926428:(p,h)=>{u.kb("GlobalMaxPool",p,{format:h?"NHWC":"NCHW"})},926515:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j)=>{u.kb("MaxPool",p,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[],kernel_shape:ae?Array.from(n().subarray(Number(ae)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:Le?Array.from(n().subarray(Number(Le)>>>0,Number(Ke)>>>0)):[]})},926990:(p,h,g,$,x)=>{u.kb("Gemm",p,{alpha:h,beta:g,transA:$,transB:x})},927094:p=>{u.kb("MatMul",p,void 0)},927148:(p,h,g,$)=>{u.kb("ArgMax",p,{keepDims:!!h,selectLastIndex:!!g,axis:$})},927256:(p,h,g,$)=>{u.kb("ArgMin",p,{keepDims:!!h,selectLastIndex:!!g,axis:$})},927364:(p,h)=>{u.kb("Softmax",p,{axis:h})},927427:(p,h)=>{u.kb("Concat",p,{axis:h})},927487:(p,h,g,$,x)=>{u.kb("Split",p,{axis:h,numOutputs:g,splitSizes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},927643:p=>{u.kb("Expand",p,void 0)},927697:(p,h)=>{u.kb("Gather",p,{axis:Number(h)})},927768:(p,h)=>{u.kb("GatherElements",p,{axis:Number(h)})},927847:(p,h)=>{u.kb("GatherND",p,{batch_dims:Number(h)})},927926:(p,h,g,$,x,z,K,ae,ue,pe,Ee)=>{u.kb("Resize",p,{antialias:h,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[],coordinateTransformMode:pt(x),cubicCoeffA:z,excludeOutside:K,extrapolationValue:ae,keepAspectRatioPolicy:pt(ue),mode:pt(pe),nearestMode:pt(Ee)})},928288:(p,h,g,$,x,z,K)=>{u.kb("Slice",p,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[],ends:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[],axes:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[]})},928552:p=>{u.kb("Tile",p,void 0)},928604:(p,h,g)=>{u.kb("InstanceNormalization",p,{epsilon:h,format:g?"NHWC":"NCHW"})},928718:(p,h,g)=>{u.kb("InstanceNormalization",p,{epsilon:h,format:g?"NHWC":"NCHW"})},928832:p=>{u.kb("Range",p,void 0)},928885:(p,h)=>{u.kb("Einsum",p,{equation:pt(h)})},928966:(p,h,g,$,x)=>{u.kb("Pad",p,{mode:h,value:g,pads:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},929109:(p,h,g,$,x,z)=>{u.kb("BatchNormalization",p,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},929278:(p,h,g,$,x,z)=>{u.kb("BatchNormalization",p,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},929447:(p,h,g)=>{u.kb("CumSum",p,{exclusive:Number(h),reverse:Number(g)})},929544:(p,h,g)=>{u.kb("DequantizeLinear",p,{axis:h,blockSize:g})},929634:(p,h,g,$,x)=>{u.kb("GridSample",p,{align_corners:h,mode:pt(g),padding_mode:pt($),format:x?"NHWC":"NCHW"})},929804:(p,h,g,$,x)=>{u.kb("GridSample",p,{align_corners:h,mode:pt(g),padding_mode:pt($),format:x?"NHWC":"NCHW"})},929974:(p,h,g,$,x,z,K,ae,ue)=>{u.kb("Attention",p,{numHeads:h,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:z,qkvHiddenSizes:K?Array.from(n().subarray(Number(ae)>>>0,Number(ae)+K>>>0)):[],pastPresentShareBuffer:!!ue})},930246:p=>{u.kb("BiasAdd",p,void 0)},930301:p=>{u.kb("BiasSplitGelu",p,void 0)},930362:p=>{u.kb("FastGelu",p,void 0)},930418:(p,h,g,$,x,z,K,ae,ue,pe,Ee,Le,Ke,j,Ve,lt)=>{u.kb("Conv",p,{format:Le?"NHWC":"NCHW",auto_pad:h,dilations:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[],group:x,kernel_shape:z?Array.from(n().subarray(Number(z)>>>0,Number(K)>>>0)):[],pads:ae?Array.from(n().subarray(Number(ae)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],w_is_const:()=>!!r()[Number(Ke)>>>0],activation:pt(j),activation_params:Ve?Array.from(l().subarray(Number(Ve)>>>0,Number(lt)>>>0)):[]})},931002:p=>{u.kb("Gelu",p,void 0)},931054:(p,h,g,$,x,z,K,ae,ue)=>{u.kb("GroupQueryAttention",p,{numHeads:h,kvNumHeads:g,scale:$,softcap:x,doRotary:z,rotaryInterleaved:K,smoothSoftmax:ae,localWindowSize:ue})},931271:(p,h,g,$)=>{u.kb("LayerNormalization",p,{axis:h,epsilon:g,simplified:!!$})},931382:(p,h,g,$)=>{u.kb("LayerNormalization",p,{axis:h,epsilon:g,simplified:!!$})},931493:(p,h,g,$,x,z)=>{u.kb("MatMulNBits",p,{k:h,n:g,accuracyLevel:$,bits:x,blockSize:z})},931620:(p,h,g,$,x,z)=>{u.kb("MultiHeadAttention",p,{numHeads:h,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:z})},931779:(p,h)=>{u.kb("QuickGelu",p,{alpha:h})},931843:(p,h,g,$,x)=>{u.kb("RotaryEmbedding",p,{interleaved:!!h,numHeads:g,rotaryEmbeddingDim:$,scale:x})},931982:(p,h,g)=>{u.kb("SkipLayerNormalization",p,{epsilon:h,simplified:!!g})},932084:(p,h,g)=>{u.kb("SkipLayerNormalization",p,{epsilon:h,simplified:!!g})},932186:(p,h,g,$)=>{u.kb("GatherBlockQuantized",p,{gatherAxis:h,quantizeAxis:g,blockSize:$})},932307:p=>{u.$b(p)},932341:(p,h)=>u.cc(Number(p),Number(h),u.Gb.hc,u.Gb.errors)};function De(p,h,g){return zs(async()=>{await u.Yb(Number(p),Number(h),Number(g))})}function Xe(){return typeof wasmOffsetConverter<"u"}function rt(p){this.name="ExitStatus",this.message=`Program terminated with exit(${p})`,this.status=p}var ft=p=>{p.terminate(),p.onmessage=()=>{}},at=p=>{tt.length==0&&(fr(),Kr(tt[0]));var h=tt.pop();if(!h)return 6;nt.push(h),gt[p.Bb]=h,h.Bb=p.Bb;var g={cmd:"run",start_routine:p.ic,arg:p.Rb,pthread_ptr:p.Bb};return h.postMessage(g,p.nc),0},mt=0,We=(p,h,...g)=>{for(var $=2*g.length,x=hi(),z=fi(8*$),K=z>>>3,ae=0;ae<g.length;ae++){var ue=g[ae];typeof ue=="bigint"?(B[K+2*ae]=1n,B[K+2*ae+1]=ue):(B[K+2*ae]=0n,d()[K+2*ae+1>>>0]=ue)}return p=eo(p,0,$,z,h),Ea(x),p};function Dt(p){if(w)return We(0,1,p);if(X=p,!(0<mt)){for(var h of nt)ft(h);for(h of tt)ft(h);tt=[],nt=[],gt=[],we=!0}T(0,new rt(p))}function he(p){if(w)return We(1,0,p);Me(p)}var Me=p=>{if(X=p,w)throw he(p),"unwind";Dt(p)},tt=[],nt=[],It=[],gt={},Zt=p=>{var h=p.Bb;delete gt[h],tt.push(p),nt.splice(nt.indexOf(p),1),p.Bb=0,ci(h)};function cr(){It.forEach(p=>p())}var Kr=p=>new Promise(h=>{p.onmessage=x=>{var z=(x=x.data).cmd;if(x.targetThread&&x.targetThread!=Or()){var K=gt[x.targetThread];K?K.postMessage(x,x.transferList):J(`Internal error! Worker sent a message "${z}" to target pthread ${x.targetThread}, but that thread no longer exists!`)}else z==="checkMailbox"?ma():z==="spawnThread"?at(x):z==="cleanupThread"?Zt(gt[x.thread]):z==="killThread"?(x=x.thread,z=gt[x],delete gt[x],ft(z),ci(x),nt.splice(nt.indexOf(z),1),z.Bb=0):z==="cancelThread"?gt[x.thread].postMessage({cmd:"cancel"}):z==="loaded"?(p.loaded=!0,h(p)):z==="alert"?alert(`Thread ${x.threadId}: ${x.text}`):x.target==="setimmediate"?p.postMessage(x):z==="callHandler"?u[x.handler](...x.args):z&&J(`worker sent an unknown command ${z}`)},p.onerror=x=>{throw J(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,$=[];for(g of[])u.hasOwnProperty(g)&&$.push(g);p.postMessage({cmd:"load",handlers:$,wasmMemory:O,wasmModule:q})});function fr(){var p=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});tt.push(p)}var hr=p=>{for(;0<p.length;)p.shift()(u)},Tr=()=>{var p=Or(),h=o()[p+52>>>2>>>0];p=o()[p+56>>>2>>>0],ro(h,h-p),Ea(h)},fa=(p,h)=>{mt=0,p=ao(p,h),0<mt?X=p:Sa(p)};class Ir{constructor(h){this.Kb=h-24}}function ha(p,h,g){var $=new Ir(p>>>=0);throw h>>>=0,g>>>=0,o()[$.Kb+16>>>2>>>0]=0,o()[$.Kb+4>>>2>>>0]=h,o()[$.Kb+8>>>2>>>0]=g,p}function Cr(p,h,g,$){return w?We(2,1,p,h,g,$):ns(p,h,g,$)}function ns(p,h,g,$){if(p>>>=0,h>>>=0,g>>>=0,$>>>=0,v===void 0)return J("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var x=[];return w&&x.length===0?Cr(p,h,g,$):(p={ic:g,Bb:p,Rb:$,nc:x},w?(p.Nb="spawnThread",postMessage(p,x),0):at(p))}var ss=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,os=(p,h,g)=>{var $=(h>>>=0)+g;for(g=h;p[g]&&!(g>=$);)++g;if(16<g-h&&p.buffer&&ss)return ss.decode(p.buffer instanceof v?p.slice(h,g):p.subarray(h,g));for($="";h<g;){var x=p[h++];if(128&x){var z=63&p[h++];if((224&x)==192)$+=String.fromCharCode((31&x)<<6|z);else{var K=63&p[h++];65536>(x=(240&x)==224?(15&x)<<12|z<<6|K:(7&x)<<18|z<<12|K<<6|63&p[h++])?$+=String.fromCharCode(x):(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else $+=String.fromCharCode(x)}return $},pt=(p,h)=>(p>>>=0)?os(a(),p,h):"";function ls(p,h,g){return w?We(3,1,p,h,g):0}function us(p,h){if(w)return We(4,1,p,h)}var Ja=p=>{for(var h=0,g=0;g<p.length;++g){var $=p.charCodeAt(g);127>=$?h++:2047>=$?h+=2:55296<=$&&57343>=$?(h+=4,++g):h+=3}return h},ds=(p,h,g,$)=>{if(!(0<$))return 0;var x=g>>>=0;$=g+$-1;for(var z=0;z<p.length;++z){var K=p.charCodeAt(z);if(55296<=K&&57343>=K&&(K=65536+((1023&K)<<10)|1023&p.charCodeAt(++z)),127>=K){if(g>=$)break;h[g++>>>0]=K}else{if(2047>=K){if(g+1>=$)break;h[g++>>>0]=192|K>>6}else{if(65535>=K){if(g+2>=$)break;h[g++>>>0]=224|K>>12}else{if(g+3>=$)break;h[g++>>>0]=240|K>>18,h[g++>>>0]=128|K>>12&63}h[g++>>>0]=128|K>>6&63}h[g++>>>0]=128|63&K}}return h[g>>>0]=0,g-x},zr=(p,h,g)=>ds(p,a(),h,g);function ps(p,h){if(w)return We(5,1,p,h)}function cs(p,h,g){if(w)return We(6,1,p,h,g)}function fs(p,h,g){return w?We(7,1,p,h,g):0}function hs(p,h){if(w)return We(8,1,p,h)}function ms(p,h,g){if(w)return We(9,1,p,h,g)}function gs(p,h,g,$){if(w)return We(10,1,p,h,g,$)}function _s(p,h,g,$){if(w)return We(11,1,p,h,g,$)}function ys(p,h,g,$){if(w)return We(12,1,p,h,g,$)}function bs(p){if(w)return We(13,1,p)}function $s(p,h){if(w)return We(14,1,p,h)}function vs(p,h,g){if(w)return We(15,1,p,h,g)}var ws,rr,Xh=()=>{je("")},qt=p=>{for(var h="";a()[p>>>0];)h+=ws[a()[p++>>>0]];return h},ei={},ti={};function Yt(p,h,g={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function($,x,z={}){var K=x.name;if(!$)throw new rr(`type "${K}" must have a positive integer typeid pointer`);if(ti.hasOwnProperty($)){if(z.Tb)return;throw new rr(`Cannot register type '${K}' twice`)}ti[$]=x,ei.hasOwnProperty($)&&(x=ei[$],delete ei[$],x.forEach(ae=>ae()))}(p,h,g)}var xs=(p,h,g)=>{switch(h){case 1:return g?$=>r()[$>>>0]:$=>a()[$>>>0];case 2:return g?$=>i()[$>>>1>>>0]:$=>s()[$>>>1>>>0];case 4:return g?$=>n()[$>>>2>>>0]:$=>o()[$>>>2>>>0];case 8:return g?$=>B[$>>>3]:$=>Q[$>>>3];default:throw new TypeError(`invalid integer width (${h}): ${p}`)}};function Jh(p,h,g){g>>>=0,Yt(p>>>=0,{name:h=qt(h>>>0),fromWireType:$=>$,toWireType:function($,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":($=typeof x)=="object"||$==="array"||$==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},argPackAdvance:ar,readValueFromPointer:xs(h,g,h.indexOf("u")==-1),Eb:null})}var ar=8;function em(p,h,g,$){Yt(p>>>=0,{name:h=qt(h>>>0),fromWireType:function(x){return!!x},toWireType:function(x,z){return z?g:$},argPackAdvance:ar,readValueFromPointer:function(x){return this.fromWireType(a()[x>>>0])},Eb:null})}var ri=[],Xt=[];function ai(p){9<(p>>>=0)&&--Xt[p+1]==0&&(Xt[p]=void 0,ri.push(p))}var Ct=p=>{if(!p)throw new rr("Cannot use deleted val. handle = "+p);return Xt[p]},Rt=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=ri.pop()||Xt.length;return Xt[h]=p,Xt[h+1]=1,h}};function ii(p){return this.fromWireType(o()[p>>>2>>>0])}var tm={name:"emscripten::val",fromWireType:p=>{var h=Ct(p);return ai(p),h},toWireType:(p,h)=>Rt(h),argPackAdvance:ar,readValueFromPointer:ii,Eb:null};function rm(p){return Yt(p>>>0,tm)}var am=(p,h)=>{switch(h){case 4:return function(g){return this.fromWireType(l()[g>>>2>>>0])};case 8:return function(g){return this.fromWireType(d()[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${p}`)}};function im(p,h,g){g>>>=0,Yt(p>>>=0,{name:h=qt(h>>>0),fromWireType:$=>$,toWireType:($,x)=>x,argPackAdvance:ar,readValueFromPointer:am(h,g),Eb:null})}function nm(p,h,g,$,x){if(p>>>=0,g>>>=0,h=qt(h>>>0),x===-1&&(x=4294967295),x=ae=>ae,$===0){var z=32-8*g;x=ae=>ae<<z>>>z}var K=h.includes("unsigned")?function(ae,ue){return ue>>>0}:function(ae,ue){return ue};Yt(p,{name:h,fromWireType:x,toWireType:K,argPackAdvance:ar,readValueFromPointer:xs(h,g,$!==0),Eb:null})}function sm(p,h,g){function $(z){var K=o()[z>>>2>>>0];return z=o()[z+4>>>2>>>0],new x(r().buffer,z,K)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Yt(p>>>=0,{name:g=qt(g>>>0),fromWireType:$,argPackAdvance:ar,readValueFromPointer:$},{Tb:!0})}function om(p,h){p>>>=0;var g=(h=qt(h>>>0))==="std::string";Yt(p,{name:h,fromWireType:function($){var x=o()[$>>>2>>>0],z=$+4;if(g)for(var K=z,ae=0;ae<=x;++ae){var ue=z+ae;if(ae==x||a()[ue>>>0]==0){if(K=pt(K,ue-K),pe===void 0)var pe=K;else pe+="\0",pe+=K;K=ue+1}}else{for(pe=Array(x),ae=0;ae<x;++ae)pe[ae]=String.fromCharCode(a()[z+ae>>>0]);pe=pe.join("")}return Gt($),pe},toWireType:function($,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var z=typeof x=="string";if(!(z||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new rr("Cannot pass non-string to std::string");var K=g&&z?Ja(x):x.length,ae=ka(4+K+1),ue=ae+4;if(o()[ae>>>2>>>0]=K,g&&z)zr(x,ue,K+1);else if(z)for(z=0;z<K;++z){var pe=x.charCodeAt(z);if(255<pe)throw Gt(ue),new rr("String has UTF-16 code units that do not fit in 8 bits");a()[ue+z>>>0]=pe}else for(z=0;z<K;++z)a()[ue+z>>>0]=x[z];return $!==null&&$.push(Gt,ae),ae},argPackAdvance:ar,readValueFromPointer:ii,Eb($){Gt($)}})}var ks=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,lm=(p,h)=>{for(var g=p>>1,$=g+h/2;!(g>=$)&&s()[g>>>0];)++g;if(32<(g<<=1)-p&&ks)return ks.decode(a().slice(p,g));for(g="",$=0;!($>=h/2);++$){var x=i()[p+2*$>>>1>>>0];if(x==0)break;g+=String.fromCharCode(x)}return g},um=(p,h,g)=>{if(g??(g=2147483647),2>g)return 0;var $=h;g=(g-=2)<2*p.length?g/2:p.length;for(var x=0;x<g;++x){var z=p.charCodeAt(x);i()[h>>>1>>>0]=z,h+=2}return i()[h>>>1>>>0]=0,h-$},dm=p=>2*p.length,pm=(p,h)=>{for(var g=0,$="";!(g>=h/4);){var x=n()[p+4*g>>>2>>>0];if(x==0)break;++g,65536<=x?(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x)):$+=String.fromCharCode(x)}return $},cm=(p,h,g)=>{if(h>>>=0,g??(g=2147483647),4>g)return 0;var $=h;g=$+g-4;for(var x=0;x<p.length;++x){var z=p.charCodeAt(x);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&p.charCodeAt(++x)),n()[h>>>2>>>0]=z,(h+=4)+4>g)break}return n()[h>>>2>>>0]=0,h-$},fm=p=>{for(var h=0,g=0;g<p.length;++g){var $=p.charCodeAt(g);55296<=$&&57343>=$&&++g,h+=4}return h};function hm(p,h,g){if(p>>>=0,h>>>=0,g=qt(g>>>=0),h===2)var $=lm,x=um,z=dm,K=ae=>s()[ae>>>1>>>0];else h===4&&($=pm,x=cm,z=fm,K=ae=>o()[ae>>>2>>>0]);Yt(p,{name:g,fromWireType:ae=>{for(var ue,pe=o()[ae>>>2>>>0],Ee=ae+4,Le=0;Le<=pe;++Le){var Ke=ae+4+Le*h;Le!=pe&&K(Ke)!=0||(Ee=$(Ee,Ke-Ee),ue===void 0?ue=Ee:(ue+="\0",ue+=Ee),Ee=Ke+h)}return Gt(ae),ue},toWireType:(ae,ue)=>{if(typeof ue!="string")throw new rr(`Cannot pass non-string to C++ string type ${g}`);var pe=z(ue),Ee=ka(4+pe+h);return o()[Ee>>>2>>>0]=pe/h,x(ue,Ee+4,pe+h),ae!==null&&ae.push(Gt,Ee),Ee},argPackAdvance:ar,readValueFromPointer:ii,Eb(ae){Gt(ae)}})}function mm(p,h){Yt(p>>>=0,{Ub:!0,name:h=qt(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var gm=()=>1;function _m(p){pi(p>>>0,!y,1,!_,131072,!1),cr()}var Ss=p=>{if(!we)try{if(p(),!(0<mt))try{w?Sa(X):Me(X)}catch(h){h instanceof rt||h=="unwind"||T(0,h)}}catch(h){h instanceof rt||h=="unwind"||T(0,h)}};function ni(p){p>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),p>>>2,p).value.then(ma),p+=128,Atomics.store(n(),p>>>2,1))}var ma=()=>{var p=Or();p&&(ni(p),Ss(to))};function ym(p,h){(p>>>=0)==h>>>0?setTimeout(ma):w?postMessage({targetThread:p,cmd:"checkMailbox"}):(p=gt[p])&&p.postMessage({cmd:"checkMailbox"})}var si=[];function bm(p,h,g,$,x){for(h>>>=0,$/=2,si.length=$,g=x>>>0>>>3,x=0;x<$;x++)si[x]=B[g+2*x]?B[g+2*x+1]:d()[g+2*x+1>>>0];return(h?_e[h]:ug[p])(...si)}function $m(p){p>>>=0,w?postMessage({cmd:"cleanupThread",thread:p}):Zt(gt[p])}function vm(p){}var ga=(p,h)=>{var g=ti[p];if(g===void 0)throw p=Ys(p),g=qt(p),Gt(p),new rr(`${h} has unknown type ${g}`);return g},Es=(p,h,g)=>{var $=[];return p=p.toWireType($,g),$.length&&(o()[h>>>2>>>0]=Rt($)),p};function wm(p,h,g){return h>>>=0,g>>>=0,p=Ct(p>>>0),h=ga(h,"emval::as"),Es(h,g,p)}function xm(p,h){return h>>>=0,p=Ct(p>>>0),(h=ga(h,"emval::as")).toWireType(null,p)}var _a=p=>{try{p()}catch(h){je(h)}},ir=0,Ht=null,Ts=0,ya=[],Is={},Cs={},km=0,oi=null,Sm=[];function zs(p){return function(h){if(!we){if(ir===0){var g=!1,$=!1;h((x=0)=>{if(!we&&(Ts=x,g=!0,$)){ir=2,_a(()=>so(Ht)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),x=!1;try{var z=function(){var ue=n()[Ht+8>>>2>>>0];return ue=xe[Cs[ue]],--mt,ue()}()}catch(ue){z=ue,x=!0}var K=!1;if(!Ht){var ae=oi;ae&&(oi=null,(x?ae.reject:ae.resolve)(z),K=!0)}if(x&&!K)throw z}}),$=!0,g||(ir=1,Ht=function(){var x=ka(65548),z=x+12;o()[x>>>2>>>0]=z,o()[x+4>>>2>>>0]=z+65536,z=ya[0];var K=Is[z];return K===void 0&&(K=km++,Is[z]=K,Cs[K]=z),z=K,n()[x+8>>>2>>>0]=z,x}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),_a(()=>io(Ht)))}else ir===2?(ir=0,_a(oo),Gt(Ht),Ht=null,Sm.forEach(Ss)):je(`invalid state: ${ir}`);return Ts}}(h=>{p().then(h)})}function Em(p){return p>>>=0,zs(()=>(p=Ct(p)).then(Rt))}var ba=[];function Tm(p,h,g,$){return g>>>=0,$>>>=0,(p=ba[p>>>0])(null,h=Ct(h>>>0),g,$)}var Im={},$a=p=>{var h=Im[p];return h===void 0?qt(p):h};function Cm(p,h,g,$,x){return g>>>=0,$>>>=0,x>>>=0,(p=ba[p>>>0])(h=Ct(h>>>0),h[g=$a(g)],$,x)}var As=()=>typeof globalThis=="object"?globalThis:Function("return this")();function zm(p){return(p>>>=0)==0?Rt(As()):(p=$a(p),Rt(As()[p]))}var Am=p=>{var h=ba.length;return ba.push(p),h},Om=(p,h)=>{for(var g=Array(p),$=0;$<p;++$)g[$]=ga(o()[h+4*$>>>2>>>0],"parameter "+$);return g},Os=(p,h)=>Object.defineProperty(h,"name",{value:p});function Dm(p,h,g){var $=(h=Om(p,h>>>0)).shift();p--;var x=`return function (obj, func, destructorsRef, args) {
`,z=0,K=[];g===0&&K.push("obj");for(var ae=["retType"],ue=[$],pe=0;pe<p;++pe)K.push("arg"+pe),ae.push("argType"+pe),ue.push(h[pe]),x+=`  var arg${pe} = argType${pe}.readValueFromPointer(args${z?"+"+z:""});
`,z+=h[pe].argPackAdvance;return x+=`  var rv = ${g===1?"new func":"func.call"}(${K.join(", ")});
`,$.Ub||(ae.push("emval_returnValue"),ue.push(Es),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),ae.push(x+`};
`),p=function(Ee){var Le=Function;if(!(Le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Le} which is not a function`);var Ke=Os(Le.name||"unknownFunctionName",function(){});return Ke.prototype=Le.prototype,Ke=new Ke,(Ee=Le.apply(Ke,Ee))instanceof Object?Ee:Ke}(ae)(...ue),g=`methodCaller<(${h.map(Ee=>Ee.name).join(", ")}) => ${$.name}>`,Am(Os(g,p))}function Rm(p){return p=$a(p>>>0),Rt(u[p])}function Nm(p,h){return h>>>=0,p=Ct(p>>>0),h=Ct(h),Rt(p[h])}function Bm(p){9<(p>>>=0)&&(Xt[p+1]+=1)}function Mm(){return Rt([])}function Pm(p){p=Ct(p>>>0);for(var h=Array(p.length),g=0;g<p.length;g++)h[g]=p[g];return Rt(h)}function Um(p){return Rt($a(p>>>0))}function Vm(){return Rt({})}function Wm(p){for(var h=Ct(p>>>=0);h.length;){var g=h.pop();h.pop()(g)}ai(p)}function Lm(p,h,g){h>>>=0,g>>>=0,p=Ct(p>>>0),h=Ct(h),g=Ct(g),p[h]=g}function qm(p,h){return h>>>=0,p=(p=ga(p>>>0,"_emval_take_value")).readValueFromPointer(h),Rt(p)}function Hm(p,h){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),h>>>=0,p=new Date(1e3*p),n()[h>>>2>>>0]=p.getUTCSeconds(),n()[h+4>>>2>>>0]=p.getUTCMinutes(),n()[h+8>>>2>>>0]=p.getUTCHours(),n()[h+12>>>2>>>0]=p.getUTCDate(),n()[h+16>>>2>>>0]=p.getUTCMonth(),n()[h+20>>>2>>>0]=p.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=p}var Ar=p=>p%4==0&&(p%100!=0||p%400==0),Ds=[0,31,60,91,121,152,182,213,244,274,305,335],Rs=[0,31,59,90,120,151,181,212,243,273,304,334];function Gm(p,h){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),h>>>=0,p=new Date(1e3*p),n()[h>>>2>>>0]=p.getSeconds(),n()[h+4>>>2>>>0]=p.getMinutes(),n()[h+8>>>2>>>0]=p.getHours(),n()[h+12>>>2>>>0]=p.getDate(),n()[h+16>>>2>>>0]=p.getMonth(),n()[h+20>>>2>>>0]=p.getFullYear()-1900,n()[h+24>>>2>>>0]=p.getDay();var g=(Ar(p.getFullYear())?Ds:Rs)[p.getMonth()]+p.getDate()-1|0;n()[h+28>>>2>>>0]=g,n()[h+36>>>2>>>0]=-60*p.getTimezoneOffset(),g=new Date(p.getFullYear(),6,1).getTimezoneOffset();var $=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(g!=$&&p.getTimezoneOffset()==Math.min($,g)),n()[h+32>>>2>>>0]=p}function Fm(p){p>>>=0;var h=new Date(n()[p+20>>>2>>>0]+1900,n()[p+16>>>2>>>0],n()[p+12>>>2>>>0],n()[p+8>>>2>>>0],n()[p+4>>>2>>>0],n()[p>>>2>>>0],0),g=n()[p+32>>>2>>>0],$=h.getTimezoneOffset(),x=new Date(h.getFullYear(),6,1).getTimezoneOffset(),z=new Date(h.getFullYear(),0,1).getTimezoneOffset(),K=Math.min(z,x);return 0>g?n()[p+32>>>2>>>0]=+(x!=z&&K==$):0<g!=(K==$)&&(x=Math.max(z,x),h.setTime(h.getTime()+6e4*((0<g?K:x)-$))),n()[p+24>>>2>>>0]=h.getDay(),g=(Ar(h.getFullYear())?Ds:Rs)[h.getMonth()]+h.getDate()-1|0,n()[p+28>>>2>>>0]=g,n()[p>>>2>>>0]=h.getSeconds(),n()[p+4>>>2>>>0]=h.getMinutes(),n()[p+8>>>2>>>0]=h.getHours(),n()[p+12>>>2>>>0]=h.getDate(),n()[p+16>>>2>>>0]=h.getMonth(),n()[p+20>>>2>>>0]=h.getYear(),p=h.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function Ns(p,h,g,$,x,z,K){return w?We(16,1,p,h,g,$,x,z,K):-52}function Bs(p,h,g,$,x,z){if(w)return We(17,1,p,h,g,$,x,z)}function jm(p,h,g,$){p>>>=0,h>>>=0,g>>>=0,$>>>=0;var x=new Date().getFullYear(),z=new Date(x,0,1),K=new Date(x,6,1);x=z.getTimezoneOffset();var ae=K.getTimezoneOffset(),ue=Math.max(x,ae);o()[p>>>2>>>0]=60*ue,n()[h>>>2>>>0]=+(x!=ae),z=(p=pe=>pe.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(z),K=p(K),ae<x?(zr(z,g,17),zr(K,$,17)):(zr(z,$,17),zr(K,g,17))}var li=[],Ms=(p,h)=>{li.length=0;for(var g;g=a()[p++>>>0];){var $=g!=105;h+=($&=g!=112)&&h%8?4:0,li.push(g==112?o()[h>>>2>>>0]:g==106?B[h>>>3]:g==105?n()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=$?8:4}return li};function Km(p,h,g){return p>>>=0,h=Ms(h>>>0,g>>>0),_e[p](...h)}function Qm(p,h,g){return p>>>=0,h=Ms(h>>>0,g>>>0),_e[p](...h)}var Zm=()=>{},Ym=()=>Date.now();function Xm(p,h){return J(pt(p>>>0,h>>>0))}var Ps,Jm=()=>{throw mt+=1,"unwind"};function eg(){return 4294901760}Ps=()=>performance.timeOrigin+performance.now();var tg=()=>navigator.hardwareConcurrency;function rg(){return je("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ag(p){p>>>=0;var h=a().length;if(p<=h||4294901760<p)return!1;for(var g=1;4>=g;g*=2){var $=h*(1+.2/g);$=Math.min($,p+100663296);var x=Math;$=Math.max(p,$);e:{x=(x.min.call(x,4294901760,$+(65536-$%65536)%65536)-O.buffer.byteLength+65535)/65536;try{O.grow(x),ye();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}var va=()=>(je("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Qr={},Us=p=>{p.forEach(h=>{va()})};function ig(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),Us(p),Qr.Qb=va(),Qr.fc=p,Qr.Qb}function ng(p,h,g){if(p>>>=0,h>>>=0,Qr.Qb==p)var $=Qr.fc;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),Us($);for(var x=3;$[x]&&va()!=p;)++x;for(p=0;p<g&&$[p+x];++p)n()[h+4*p>>>2>>>0]=va();return p}var ui,di={},Vs=()=>{if(!ui){var p,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in di)di[p]===void 0?delete h[p]:h[p]=di[p];var g=[];for(p in h)g.push(`${p}=${h[p]}`);ui=g}return ui};function Ws(p,h){if(w)return We(18,1,p,h);p>>>=0,h>>>=0;var g=0;return Vs().forEach(($,x)=>{var z=h+g;for(x=o()[p+4*x>>>2>>>0]=z,z=0;z<$.length;++z)r()[x++>>>0]=$.charCodeAt(z);r()[x>>>0]=0,g+=$.length+1}),0}function Ls(p,h){if(w)return We(19,1,p,h);p>>>=0,h>>>=0;var g=Vs();o()[p>>>2>>>0]=g.length;var $=0;return g.forEach(x=>$+=x.length+1),o()[h>>>2>>>0]=$,0}function qs(p){return w?We(20,1,p):52}function Hs(p,h,g,$){return w?We(21,1,p,h,g,$):52}function Gs(p,h,g,$){return w?We(22,1,p,h,g,$):70}var sg=[null,[],[]];function Fs(p,h,g,$){if(w)return We(23,1,p,h,g,$);h>>>=0,g>>>=0,$>>>=0;for(var x=0,z=0;z<g;z++){var K=o()[h>>>2>>>0],ae=o()[h+4>>>2>>>0];h+=8;for(var ue=0;ue<ae;ue++){var pe=a()[K+ue>>>0],Ee=sg[p];pe===0||pe===10?((p===1?se:J)(os(Ee,0)),Ee.length=0):Ee.push(pe)}x+=ae}return o()[$>>>2>>>0]=x,0}var js=[31,29,31,30,31,30,31,31,30,31,30,31],Ks=[31,28,31,30,31,30,31,31,30,31,30,31],og=(p,h)=>{r().set(p,h>>>0)};function Qs(p,h,g,$){function x(j,Ve,lt){for(j=typeof j=="number"?j.toString():j||"";j.length<Ve;)j=lt[0]+j;return j}function z(j,Ve){return x(j,Ve,"0")}function K(j,Ve){function lt(uo){return 0>uo?-1:0<uo?1:0}var mr;return(mr=lt(j.getFullYear()-Ve.getFullYear()))===0&&(mr=lt(j.getMonth()-Ve.getMonth()))===0&&(mr=lt(j.getDate()-Ve.getDate())),mr}function ae(j){switch(j.getDay()){case 0:return new Date(j.getFullYear()-1,11,29);case 1:return j;case 2:return new Date(j.getFullYear(),0,3);case 3:return new Date(j.getFullYear(),0,2);case 4:return new Date(j.getFullYear(),0,1);case 5:return new Date(j.getFullYear()-1,11,31);case 6:return new Date(j.getFullYear()-1,11,30)}}function ue(j){var Ve=j.Cb;for(j=new Date(new Date(j.Db+1900,0,1).getTime());0<Ve;){var lt=j.getMonth(),mr=(Ar(j.getFullYear())?js:Ks)[lt];if(!(Ve>mr-j.getDate())){j.setDate(j.getDate()+Ve);break}Ve-=mr-j.getDate()+1,j.setDate(1),11>lt?j.setMonth(lt+1):(j.setMonth(0),j.setFullYear(j.getFullYear()+1))}return lt=new Date(j.getFullYear()+1,0,4),Ve=ae(new Date(j.getFullYear(),0,4)),lt=ae(lt),0>=K(Ve,j)?0>=K(lt,j)?j.getFullYear()+1:j.getFullYear():j.getFullYear()-1}p>>>=0,h>>>=0,g>>>=0,$>>>=0;var pe=o()[$+40>>>2>>>0];for(var Ee in $={lc:n()[$>>>2>>>0],kc:n()[$+4>>>2>>>0],Ib:n()[$+8>>>2>>>0],Mb:n()[$+12>>>2>>>0],Jb:n()[$+16>>>2>>>0],Db:n()[$+20>>>2>>>0],vb:n()[$+24>>>2>>>0],Cb:n()[$+28>>>2>>>0],sc:n()[$+32>>>2>>>0],jc:n()[$+36>>>2>>>0],mc:pe?pt(pe):""},g=pt(g),pe={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})g=g.replace(new RegExp(Ee,"g"),pe[Ee]);var Le="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ke="January February March April May June July August September October November December".split(" ");for(Ee in pe={"%a":j=>Le[j.vb].substring(0,3),"%A":j=>Le[j.vb],"%b":j=>Ke[j.Jb].substring(0,3),"%B":j=>Ke[j.Jb],"%C":j=>z((j.Db+1900)/100|0,2),"%d":j=>z(j.Mb,2),"%e":j=>x(j.Mb,2," "),"%g":j=>ue(j).toString().substring(2),"%G":ue,"%H":j=>z(j.Ib,2),"%I":j=>((j=j.Ib)==0?j=12:12<j&&(j-=12),z(j,2)),"%j":j=>{for(var Ve=0,lt=0;lt<=j.Jb-1;Ve+=(Ar(j.Db+1900)?js:Ks)[lt++]);return z(j.Mb+Ve,3)},"%m":j=>z(j.Jb+1,2),"%M":j=>z(j.kc,2),"%n":()=>`
`,"%p":j=>0<=j.Ib&&12>j.Ib?"AM":"PM","%S":j=>z(j.lc,2),"%t":()=>"	","%u":j=>j.vb||7,"%U":j=>z(Math.floor((j.Cb+7-j.vb)/7),2),"%V":j=>{var Ve=Math.floor((j.Cb+7-(j.vb+6)%7)/7);if(2>=(j.vb+371-j.Cb-2)%7&&Ve++,Ve)Ve==53&&((lt=(j.vb+371-j.Cb)%7)==4||lt==3&&Ar(j.Db)||(Ve=1));else{Ve=52;var lt=(j.vb+7-j.Cb-1)%7;(lt==4||lt==5&&Ar(j.Db%400-1))&&Ve++}return z(Ve,2)},"%w":j=>j.vb,"%W":j=>z(Math.floor((j.Cb+7-(j.vb+6)%7)/7),2),"%y":j=>(j.Db+1900).toString().substring(2),"%Y":j=>j.Db+1900,"%z":j=>{var Ve=0<=(j=j.jc);return j=Math.abs(j)/60,(Ve?"+":"-")+("0000"+(j/60*100+j%60)).slice(-4)},"%Z":j=>j.mc,"%%":()=>"%"},g=g.replace(/%%/g,"\0\0"),pe)g.includes(Ee)&&(g=g.replace(new RegExp(Ee,"g"),pe[Ee]($)));return Ee=function(j){var Ve=Array(Ja(j)+1);return ds(j,Ve,0,Ve.length),Ve}(g=g.replace(/\0\0/g,"%")),Ee.length>h?0:(og(Ee,p),Ee.length-1)}function lg(p,h,g,$){return Qs(p>>>0,h>>>0,g>>>0,$>>>0)}w||function(){for(var p=u.numThreads-1;p--;)fr();$e.unshift(()=>{Re++,function(h){w?h():Promise.all(tt.map(Kr)).then(h)}(()=>bt())})}();for(var Zs=Array(256),wa=0;256>wa;++wa)Zs[wa]=String.fromCharCode(wa);ws=Zs,rr=u.BindingError=class extends Error{constructor(p){super(p),this.name="BindingError"}},u.InternalError=class extends Error{constructor(p){super(p),this.name="InternalError"}},Xt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>Xt.length/2-5-ri.length;var ug=[Dt,he,Cr,ls,us,ps,cs,fs,hs,ms,gs,_s,ys,bs,$s,vs,Ns,Bs,Ws,Ls,qs,Hs,Gs,Fs],xe=function(){function p(g,$){return xe=g.exports,xe=function(){var x=xe,z={};for(let[K,ae]of Object.entries(x))z[K]=typeof ae=="function"?(...ue)=>{ya.push(K);try{return ae(...ue)}finally{we||(ya.pop(),Ht&&ir===1&&ya.length===0&&(ir=0,mt+=1,_a(no),typeof Fibers<"u"&&Fibers.tc()))}}:ae;return z}(),xe=function(){var x=xe,z=ae=>ue=>ae(ue)>>>0,K=ae=>()=>ae()>>>0;return(x=Object.assign({},x)).Da=z(x.Da),x.gb=K(x.gb),x.ib=z(x.ib),x.emscripten_main_runtime_thread_id=K(x.emscripten_main_runtime_thread_id),x.tb=z(x.tb),x.ub=K(x.ub),x}(),It.push(xe.jb),Ue.unshift(xe.Ca),q=$,bt(),xe}var h=ht();if(Re++,u.instantiateWasm)try{return u.instantiateWasm(h,p)}catch(g){J(`Module.instantiateWasm callback failed with error: ${g}`),f(g)}return Ge||(Ge=u.locateFile?qe("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",I):I+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href),function(g,$){var x=Ge;return D||typeof WebAssembly.instantiateStreaming!="function"||qe(x)||et(x)||typeof fetch!="function"?wt(x,g,$):fetch(x,{credentials:"same-origin"}).then(z=>WebAssembly.instantiateStreaming(z,g).then($,function(K){return J(`wasm streaming compile failed: ${K}`),J("falling back to ArrayBuffer instantiation"),wt(x,g,$)}))}(h,function(g){p(g.instance,g.module)}).catch(f),{}}(),Ys=p=>(Ys=xe.Da)(p),Xs=()=>(Xs=xe.Ea)();u._OrtInit=(p,h)=>(u._OrtInit=xe.Fa)(p,h),u._OrtGetLastError=(p,h)=>(u._OrtGetLastError=xe.Ga)(p,h),u._OrtCreateSessionOptions=(p,h,g,$,x,z,K,ae,ue,pe)=>(u._OrtCreateSessionOptions=xe.Ha)(p,h,g,$,x,z,K,ae,ue,pe),u._OrtAppendExecutionProvider=(p,h)=>(u._OrtAppendExecutionProvider=xe.Ia)(p,h),u._OrtAddFreeDimensionOverride=(p,h,g)=>(u._OrtAddFreeDimensionOverride=xe.Ja)(p,h,g),u._OrtAddSessionConfigEntry=(p,h,g)=>(u._OrtAddSessionConfigEntry=xe.Ka)(p,h,g),u._OrtReleaseSessionOptions=p=>(u._OrtReleaseSessionOptions=xe.La)(p),u._OrtCreateSession=(p,h,g)=>(u._OrtCreateSession=xe.Ma)(p,h,g),u._OrtReleaseSession=p=>(u._OrtReleaseSession=xe.Na)(p),u._OrtGetInputOutputCount=(p,h,g)=>(u._OrtGetInputOutputCount=xe.Oa)(p,h,g),u._OrtGetInputName=(p,h)=>(u._OrtGetInputName=xe.Pa)(p,h),u._OrtGetOutputName=(p,h)=>(u._OrtGetOutputName=xe.Qa)(p,h),u._OrtFree=p=>(u._OrtFree=xe.Ra)(p),u._OrtCreateTensor=(p,h,g,$,x,z)=>(u._OrtCreateTensor=xe.Sa)(p,h,g,$,x,z),u._OrtGetTensorData=(p,h,g,$,x)=>(u._OrtGetTensorData=xe.Ta)(p,h,g,$,x),u._OrtReleaseTensor=p=>(u._OrtReleaseTensor=xe.Ua)(p),u._OrtCreateRunOptions=(p,h,g,$)=>(u._OrtCreateRunOptions=xe.Va)(p,h,g,$),u._OrtAddRunConfigEntry=(p,h,g)=>(u._OrtAddRunConfigEntry=xe.Wa)(p,h,g),u._OrtReleaseRunOptions=p=>(u._OrtReleaseRunOptions=xe.Xa)(p),u._OrtCreateBinding=p=>(u._OrtCreateBinding=xe.Ya)(p),u._OrtBindInput=(p,h,g)=>(u._OrtBindInput=xe.Za)(p,h,g),u._OrtBindOutput=(p,h,g,$)=>(u._OrtBindOutput=xe._a)(p,h,g,$),u._OrtClearBoundOutputs=p=>(u._OrtClearBoundOutputs=xe.$a)(p),u._OrtReleaseBinding=p=>(u._OrtReleaseBinding=xe.ab)(p),u._OrtRunWithBinding=(p,h,g,$,x)=>(u._OrtRunWithBinding=xe.bb)(p,h,g,$,x),u._OrtRun=(p,h,g,$,x,z,K,ae)=>(u._OrtRun=xe.cb)(p,h,g,$,x,z,K,ae),u._OrtEndProfiling=p=>(u._OrtEndProfiling=xe.db)(p),u._JsepOutput=(p,h,g)=>(u._JsepOutput=xe.eb)(p,h,g),u._JsepGetNodeName=p=>(u._JsepGetNodeName=xe.fb)(p);var xa,Or=()=>(Or=xe.gb)(),Gt=u._free=p=>(Gt=u._free=xe.hb)(p),ka=u._malloc=p=>(ka=u._malloc=xe.ib)(p),pi=(p,h,g,$,x,z)=>(pi=xe.lb)(p,h,g,$,x,z),Js=()=>(Js=xe.mb)(),eo=(p,h,g,$,x)=>(eo=xe.nb)(p,h,g,$,x),ci=p=>(ci=xe.ob)(p),Sa=p=>(Sa=xe.pb)(p),to=()=>(to=xe.qb)(),ro=(p,h)=>(ro=xe.rb)(p,h),Ea=p=>(Ea=xe.sb)(p),fi=p=>(fi=xe.tb)(p),hi=()=>(hi=xe.ub)(),ao=u.dynCall_ii=(p,h)=>(ao=u.dynCall_ii=xe.wb)(p,h),io=p=>(io=xe.xb)(p),no=()=>(no=xe.yb)(),so=p=>(so=xe.zb)(p),oo=()=>(oo=xe.Ab)();function lo(){0<Re||(w?(c(u),w||hr(Ue),startWorker(u)):(hr($e),0<Re||xa||(xa=!0,u.calledRun=!0,we||(w||hr(Ue),c(u),w||hr(Pe)))))}return u.___start_em_js=932469,u.___stop_em_js=932715,u.stackSave=()=>hi(),u.stackRestore=p=>Ea(p),u.stackAlloc=p=>fi(p),u.setValue=function(p,h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":r()[p>>>0]=h;break;case"i16":i()[p>>>1>>>0]=h;break;case"i32":n()[p>>>2>>>0]=h;break;case"i64":B[p>>>3]=BigInt(h);break;case"float":l()[p>>>2>>>0]=h;break;case"double":d()[p>>>3>>>0]=h;break;case"*":o()[p>>>2>>>0]=h;break;default:je(`invalid type for setValue: ${g}`)}},u.getValue=function(p,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return r()[p>>>0];case"i16":return i()[p>>>1>>>0];case"i32":return n()[p>>>2>>>0];case"i64":return B[p>>>3];case"float":return l()[p>>>2>>>0];case"double":return d()[p>>>3>>>0];case"*":return o()[p>>>2>>>0];default:je(`invalid type for getValue: ${h}`)}},u.UTF8ToString=pt,u.stringToUTF8=zr,u.lengthBytesUTF8=Ja,it=function p(){xa||lo(),xa||(it=p)},lo(),u.PTR_SIZE=4,m}),Pp=wi,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&wi()}),xi,ho,zt,Up,Ia,mo,go,ki,_o,Si,Vp,Ei,Wp,Dn=le(()=>{On(),xi=typeof location>"u"?void 0:location.origin,ho=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url).href,xi).href:import.meta.url},zt=ho(),Up=()=>{if(zt&&!zt.startsWith("blob:"))return zt.substring(0,zt.lastIndexOf("/")+1)},Ia=(e,t)=>{try{let r=t??zt;return(r?new URL(e,r):new URL(e)).origin===xi}catch{return!1}},mo=(e,t)=>{let r=t??zt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},go=(e,t)=>`${t??"./"}${e}`,ki=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},_o=async e=>(await import(e)).default,Si=(i_(),Ga(Np)).default,Vp=async()=>{if(!zt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ia(zt))return[void 0,Si()];let e=await ki(zt);return[e,Si(e)]},Ei=(n_(),Ga(Mp)).default,Wp=async(e,t,r)=>{if(!e&&!t&&Ei&&zt&&Ia(zt))return[void 0,Ei];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??mo(a,t),s=r&&i&&!Ia(i,t),n=s?await ki(i):i??go(a,t);return[s?n:void 0,await _o(n)]}}}),Ti,Ca,Yr,Ii,yo,bo,Rn,_t,Sr=le(()=>{Dn(),Ca=!1,Yr=!1,Ii=!1,yo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},bo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Rn=async e=>{if(Ca)return Promise.resolve();if(Yr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ii)throw new Error("previous call to 'initializeWebAssembly()' failed.");Yr=!0;let t=e.initTimeout,r=e.numThreads;if(!bo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=yo();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,n=i==null?void 0:i.mjs,o=(n==null?void 0:n.href)??n,l=i==null?void 0:i.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[f,u]=await Wp(o,s,r>1),m=!1,_=[];if(t>0&&_.push(new Promise(y=>{setTimeout(()=>{m=!0,y()},t)})),_.push(new Promise((y,w)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||s)v.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,o).href;else if(f){let b=Up();b&&(v.locateFile=k=>b+k)}u(v).then(b=>{Yr=!1,Ca=!0,Ti=b,y(),f&&URL.revokeObjectURL(f)},b=>{Yr=!1,Ii=!0,w(b)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},_t=()=>{if(Ca&&Ti)return Ti;throw new Error("WebAssembly is not initialized yet.")}}),xt,ja,Fe,Nn=le(()=>{Sr(),xt=(e,t)=>{let r=_t(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},ja=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let n=t?t+i:i;if(typeof s=="object")ja(s,n+".",r,a);else if(typeof s=="string"||typeof s=="number")a(n,s.toString());else if(typeof s=="boolean")a(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Fe=e=>{let t=_t(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let s=Number(t.getValue(i,a===4?"i32":"i64")),n=t.getValue(i+a,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Lp,s_=le(()=>{Sr(),Nn(),Lp=e=>{let t=_t(),r=0,a=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=xt(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&Fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&ja(e.extra,"",new WeakSet,(n,o)=>{let l=xt(n,a),d=xt(o,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&Fe(`Can't set a run config entry: ${n} - ${o}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(n=>t._free(n)),s}}}),$o,vo,wo,xo,qp,o_=le(()=>{Sr(),Nn(),$o=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},vo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},wo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},xo=(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name;switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let n=a==null?void 0:a.deviceType;if(n){let o=xt("deviceType",r),l=xt(n,r);_t()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'deviceType' - ${n}.`)}}break;case"webgpu":if(i="JS",typeof a!="string"){let n=a;if(n!=null&&n.preferredLayout){if(n.preferredLayout!=="NCHW"&&n.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${n.preferredLayout}`);let o=xt("preferredLayout",r),l=xt(n.preferredLayout,r);_t()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'preferredLayout' - ${n.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=xt(i,r);_t()._OrtAppendExecutionProvider(e,s)!==0&&Fe(`Can't append execution provider: ${i}.`)}},qp=e=>{let t=_t(),r=0,a=[],i=e||{};wo(i);try{let s=$o(i.graphOptimizationLevel??"all"),n=vo(i.executionMode??"sequential"),o=typeof i.logId=="string"?xt(i.logId,a):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?xt(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,n,!!i.enableProfiling,0,o,l,d,c),r===0&&Fe("Can't create session options."),i.executionProviders&&xo(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let f=xt("enableGraphCapture",a),u=xt(i.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,f,u)!==0&&Fe(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[f,u]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof u!="number"||!Number.isInteger(u)||u<0)throw new Error(`free dimension override value must be a non-negative integer: ${u}`);let m=xt(f,a);t._OrtAddFreeDimensionOverride(r,m,u)!==0&&Fe(`Can't set a free dimension override: ${f} - ${u}.`)}return i.extra!==void 0&&ja(i.extra,"",new WeakSet,(f,u)=>{let m=xt(f,a),_=xt(u,a);t._OrtAddSessionConfigEntry(r,m,_)!==0&&Fe(`Can't set a session config entry: ${f} - ${u}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Fe("Can't release session options."),a.forEach(n=>t._free(n)),s}}}),sa,vr,Nr,Bn,Ka,Mn,Pn,mn,Oe=le(()=>{sa=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},vr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Nr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(a*r):void 0},Bn=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Ka=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Mn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",mn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Un,Hp=le(()=>{On(),Un=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(a)}catch(o){if(o instanceof RangeError){let l=Math.ceil(a/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let n=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(s,n,d).set(l),n+=d}return new Uint8Array(s,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ko,So,Eo,To,Vn,Io,Qe,tr=le(()=>{Oe(),ko=["V","I","W","E","F"],So=(e,t)=>{`${ko[e]}${new Date().toISOString()}${t}`},Vn=(e,t)=>{Eo=e,To=t},Io=(e,t)=>{let r=Ka(e),a=Ka(Eo);r>=a&&So(r,typeof t=="function"?t():t)},Qe=(...e)=>{To&&Io(...e)}}),Wn,Gp=le(()=>{Oe(),Wn=(e,t)=>new(Bn(t))(e)}),Ln=le(()=>{}),Ci,za,Aa,Co,zo,zi,gn,Ao,Fp,l_=le(()=>{tr(),Ln(),Ci=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),za=[],Aa=e=>Math.ceil(Number(e)/16)*16,Co=e=>{for(let t=0;t<za.length;t++){let r=za[t];if(e<=r)return r}return Math.ceil(e/16)*16},zo=1,zi=()=>zo++,gn=async(e,t,r,a)=>{let i=Aa(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Ao=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ci)za.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,s=Aa(i),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),Qe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Aa(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return Qe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=zi();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),Qe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Qe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Co(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?a=o.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let n={id:zi(),type:0,buffer:a};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Qe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Qe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ci.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Qe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Fp=(...e)=>new Ao(...e)}),Oo,Je,dt=le(()=>{Oo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Je=e=>new Oo(e)}),Do,Mr,H,Qa,jp,Kp,Qp,Ne=le(()=>{Do=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Mr=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(a<2||i<2)return;let o=Do.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=a-o<0?1:e[a-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)n[s-o]=Math.max(l,d);else{if(c>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},H=class Va{static size(t){return Va.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),s=a-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Va.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Va.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let s=r;s<a;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,s)=>i+r[s]+r[s+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Qa=class oa{static adjustPoolAttributes(t,r,a,i,s,n){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=a.length?a.push(r[o+2]):a[o]=r[o+2];for(let o=0;o<a.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<a.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<a.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<a.length;o++){if(a[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=a[o]||n[o+a.length]>=a[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)oa.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],a[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,a,i,s,n,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return oa.computeShapeHelper(t,r,l,a,i,s,n,o),l}static computeConvOutputShape(t,r,a,i,s,n,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return oa.computeShapeHelper(!1,t,l,a,i,s,n,o),l}static computeShapeHelper(t,r,a,i,s,n,o,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(oa.adjustPadAndReturnShape(r[d+2],i[d],s[d],n[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,i,s,n,o,l){let d=a*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return s[n]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[n],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[o]-d)/r+1)}},jp=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(a?(o=r[0],l=1):(o=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(i&&!Mr.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},Kp=-34028234663852886e22,Qp=34028234663852886e22}),Pr,Oa,yt,kt,be,ot,_n,Br,dr,ge,Xr,Z,me,Zp,qn,Ro,Yp,Be=le(()=>{Oe(),Ne(),Pr=64,Oa=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},yt=(e,t=1)=>{let r=Oa(e,t);return typeof r=="string"?r:r[0]},kt=(e,t=1)=>{let r=Oa(e,t);return typeof r=="string"?r:r[1]},be=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:H.computeStrides(r)})}),t},ot=e=>e%4===0?4:e%2===0?2:1,_n=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Br=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,dr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ge=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Xr=(e,t,r,a,i)=>{let s=typeof r=="number",n=s?r:r.length,o=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,d=Oa(t,i),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],u={indices:l,value:c,storage:f,tensor:t},m=G=>typeof G=="string"?G:`${G}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",w=`${y}${e}_shape`,v=`${y}${e}_strides`,b="";for(let G=0;G<n-1;G++)b+=`
    let dim${G} = current / ${ge(v,G,n)};
    let rest${G} = current % ${ge(v,G,n)};
    indices[${G}] = dim${G};
    current = rest${G};
    `;b+=`indices[${n-1}] = current;`;let k=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${u.indices} {
    var indices: ${u.indices};
    var current = offset;
    ${b}
    return indices;
  }`,S=G=>(_.offsetToIndices=!0,n<2?G:`o2i_${e}(${G})`),E=[];if(n>=2)for(let G=n-1;G>=0;G--)E.push(`${ge(v,G,n)} * (indices[${G}])`);let T=n<2?"":`
  fn i2o_${e}(indices: ${u.indices}) -> u32 {
    return ${E.join("+")};
  }`,I=G=>(_.indicesToOffset=!0,n<2?G:`i2o_${e}(${G})`),D=(...G)=>n===0?"0u":`${u.indices}(${G.map(m).join(",")})`,R=(G,ie)=>n<2?`${G}`:`${ge(G,ie,n)}`,L=(G,ie,re)=>n<2?`${G}=${re};`:`${ge(G,ie,n)}=${re};`,se={},J=(G,ie)=>{_.broadcastedIndicesToOffset=!0;let re=`${ie.name}broadcastedIndicesTo${e}Offset`;if(re in se)return`${re}(${G})`;let M=[];for(let B=n-1;B>=0;B--){let Q=ie.indicesGet("outputIndices",B+ie.rank-n);M.push(`${R(v,B)} * (${Q} % ${R(w,B)})`)}return se[re]=`fn ${re}(outputIndices: ${ie.type.indices}) -> u32 {
             return ${M.length>0?M.join("+"):"0u"};
           }`,`${re}(${G})`},F=(G,ie)=>(()=>{if(u.storage===u.value)return`${e}[${G}]=${ie};`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`${e}[${G}]=vec2<u32>(u32(${ie}), select(0u, 0xFFFFFFFFu, ${ie} < 0));`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`${e}[${G}]=vec2<u32>(u32(${ie}), 0u);`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`${e}[${G}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ie}));`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),W=G=>(()=>{if(u.storage===u.value)return`${e}[${G}]`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`i32(${e}[${G}].x)`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`u32(${e}[${G}].x)`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${G}] & 0xFFu), bool(${e}[${G}] & 0xFF00u), bool(${e}[${G}] & 0xFF0000u), bool(${e}[${G}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),O=n<2?"":`
  fn get_${e}ByIndices(indices: ${u.indices}) -> ${c} {
    return ${W(`i2o_${e}(indices)`)};
  }`,q=n<2?"":(()=>{let G=o.map(re=>`d${re}: u32`).join(", "),ie=o.map(re=>`d${re}`).join(", ");return`
  fn get_${e}(${G}) -> ${c} {
    return get_${e}ByIndices(${D(ie)});
  }`})(),X=(...G)=>{if(G.length!==n)throw new Error(`indices length must be ${n}`);let ie=G.map(m).join(",");return n===0?W("0u"):n===1?W(ie[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${ie})`)},te=G=>n<2?W(G):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${G})`),oe=n<2?"":`
  fn set_${e}ByIndices(indices: ${u.indices}, value: ${c}) {
    ${F(`i2o_${e}(indices)`,"value")}
  }`,ne=n<2?"":(()=>{let G=o.map(re=>`d${re}: u32`).join(", "),ie=o.map(re=>`d${re}`).join(", ");return`
  fn set_${e}(${G}, value: ${c}) {
    set_${e}ByIndices(${D(ie)}, value);
  }`})();return{impl:()=>{let G=[],ie=!1;return _.offsetToIndices&&(G.push(k),ie=!0),_.indicesToOffset&&(G.push(T),ie=!0),_.broadcastedIndicesToOffset&&(Object.values(se).forEach(re=>G.push(re)),ie=!0),_.set&&(G.push(ne),ie=!0),_.setByIndices&&(G.push(oe),ie=!0),_.get&&(G.push(q),ie=!0),_.getByIndices&&(G.push(O),ie=!0),!s&&ie&&G.unshift(`const ${w} = ${u.indices}(${r.join(",")});`,`const ${v} = ${u.indices}(${H.computeStrides(r).join(",")});`),G.join(`
`)},type:u,offsetToIndices:S,indicesToOffset:I,broadcastedIndicesToOffset:J,indices:D,indicesGet:R,indicesSet:L,set:(...G)=>{if(G.length!==n+1)throw new Error(`indices length must be ${n}`);let ie=G[n];if(typeof ie!="string")throw new Error("value must be string");let re=G.slice(0,n).map(m).join(",");return n===0?F("0u",ie):n===1?F(re[0],ie):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${re}, ${ie})`)},setByOffset:F,setByIndices:(G,ie)=>n<2?F(G,ie):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${G}, ${ie});`),get:X,getByOffset:W,getByIndices:te,usage:a,name:e,strides:v,shape:w,rank:n}},Z=(e,t,r,a=1)=>Xr(e,t,r,"input",a),me=(e,t,r,a=1)=>Xr(e,t,r,"output",a),Zp=(e,t,r)=>Xr(e,t,r,"atomicOutput",1),qn=(e,t,r,a=1)=>Xr(e,t,r,"internal",a),Ro=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Yp=(e,t)=>new Ro(e,t)}),No,Ai,Bo,Mo,Po,Uo,Ot,Xp,Jp,pr=le(()=>{Oe(),Ne(),dt(),Be(),No=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ai=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Bo=(e,t)=>H.sortBasedOnPerm(e,Ai(e.length,t)),Mo=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Po=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Uo=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Ot=(e,t)=>{let r=e.dataType,a=e.dims.length,i=Ai(a,t),s=Bo(e.dims,i),n=e.dims,o=s,l=a<2||Uo(i,e.dims),d;if(l)return d=_=>{let y=Z("input",r,n,4),w=me("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=H.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Po(e.dims,i),u=H.areEqual(f,[2,3,1]),m=H.areEqual(f,[3,1,2]);if(c.length===2||u||m){n=u?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[n[1],n[0]];let _=16;return d=y=>{let w=Z("a",r,n.length),v=me("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${y.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=H.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:y},...be(n,o)]}},getShaderSource:d}}return d=_=>{let y=Z("a",r,n.length),w=me("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(y,w)}

  ${Mo(i,a,y,w)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=H.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...be(n,o)]}},getShaderSource:d}},Xp=(e,t)=>{No(e.inputs,t.perm),e.compute(Ot(e.inputs[0],t.perm))},Jp=e=>Je({perm:e.perm})}),Vo,Wo,Lo,qo,Ho,Go,Fo,jo,Ko,Qo,Bt,ec,tc,rc,ac,ic,nc,sc,oc,lc,uc,u_=le(()=>{Oe(),Ne(),Be(),Hn(),pr(),Vo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Lo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},qo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ho=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},Go=(e,t)=>{let r=[],a=e.length;for(let s=0;s<a;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Fo=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?a.push(e[i++]):a.push(1);return a},jo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ko=(e,t)=>{let r=[];if(!jo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},Qo=(e,t,r,a,i,s,n)=>{let o=r[0].dims,l=H.size(s),d=H.size(n),c=Z("_A",r[0].dataType,o),f=me("output",i,s),u=64;l===1&&(u=256);let m=`
          var<workgroup> aBestValues : array<f32, ${u}>;
       `,_=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(u)}

          let outputIndex = global_idx / ${u};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Lo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${u}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Vo[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${u}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wo[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${qo[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${u}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Bt=(e,t,r,a)=>{let i=e.inputs.length===1?r:yn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,_)=>_));let n=H.normalizeAxes(s,e.inputs[0].dims.length),o=n,l=e.inputs[0],d=Ko(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ot(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Ho(o.length,l.dims.length));let[c,f]=Go(l.dims,o),u=c;i.keepDims&&(u=Fo(c,n)),e.compute(Qo(t,i.cacheKey,[l],a,e.inputs[0].dataType,u,f),{inputs:[l]})},ec=(e,t)=>{Bt(e,"ReduceMeanShared",t,"mean")},tc=(e,t)=>{Bt(e,"ReduceL1Shared",t,"l1")},rc=(e,t)=>{Bt(e,"ReduceL2Shared",t,"l2")},ac=(e,t)=>{Bt(e,"ReduceLogSumExpShared",t,"logSumExp")},ic=(e,t)=>{Bt(e,"ReduceMaxShared",t,"max")},nc=(e,t)=>{Bt(e,"ReduceMinShared",t,"min")},sc=(e,t)=>{Bt(e,"ReduceProdShared",t,"prod")},oc=(e,t)=>{Bt(e,"ReduceSumShared",t,"sum")},lc=(e,t)=>{Bt(e,"ReduceSumSquareShared",t,"sumSquare")},uc=(e,t)=>{Bt(e,"ReduceLogSumShared",t,"logSum")}}),Mt,Zo,Za,yn,Pt,Yo,Xo,Jo,el,tl,rl,al,il,nl,sl,Ut,dc,pc,cc,fc,hc,mc,gc,_c,yc,bc,Hn=le(()=>{Oe(),Ne(),dt(),Be(),u_(),Mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Za=(e,t,r,a,i,s,n=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,f=H.normalizeAxes(i,c),u=!o&&f.length===0;d.forEach((y,w)=>{u||f.indexOf(w)>=0?n&&l.push(1):l.push(y)});let m=l.length,_=H.size(l);return{name:e,shaderCache:t,getShaderSource:y=>{let w=[],v=Z("_A",r[0].dataType,c),b=me("output",s,m),k=a(v,b,f),S=k[2];for(let E=0,T=0;E<c;E++)u||f.indexOf(E)>=0?(n&&T++,S=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(w.push(`${v.indicesSet("input_indices",E,b.indicesGet("output_indices",T))};`),T++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${S}
          ${k[3]}
          ${k.length===4?b.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...be(d,l)]})}},yn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Je({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Pt=(e,t,r,a)=>{let i=e.inputs,s=i.length===1?r:yn(i,r);e.compute(Za(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Zo:a,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Yo=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Xo=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Jo=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},el=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},tl=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceMax",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},rl=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceMean",t,(r,a,i)=>{let s=1;for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${s});`]})},al=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceMin",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},il=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},nl=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},sl=(e,t)=>{Mt(e.inputs),Pt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ut=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?a*=e[s]:i*=e[s];return i<32&&a>1024},dc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rl(e,t):ec(e,t)},pc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):tc(e,t)},cc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):rc(e,t)},fc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?el(e,t):ac(e,t)},hc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tl(e,t):ic(e,t)},mc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?al(e,t):nc(e,t)},gc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?il(e,t):sc(e,t)},_c=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nl(e,t):oc(e,t)},yc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sl(e,t):lc(e,t)},bc=(e,t)=>{Ut(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):uc(e,t)}}),Oi,$c,vc,bn,d_=le(()=>{Oe(),dt(),Hn(),Oi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},$c=(e,t)=>{Oi(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Za("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},vc=(e,t)=>{Oi(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Za("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bn=e=>Je(e)}),ol,Da,ll,ul,dl,pa,pl,wc,Gn=le(()=>{Oe(),Ne(),Ln(),Be(),ol=(e,t)=>{let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,u=f,m=u;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],u=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=d;if(f!==u)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+u+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(n){if(u!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==u/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=n.dims[3])}let w=_+y,v=-1,b=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:w,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Da=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,ll=(e,t,r,a,i,s,n,o)=>{let l=ot(n?1:s),d=64,c=s/l;c<d&&(d=32);let f=Math.ceil(s/l/d),u=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:c},{type:12,data:f}],m=yt(e.dataType,l),_=kt(1,l),y=["type"];n&&y.push("type"),o&&y.push("type");let w=v=>{let b=me("x",e.dataType,e.dims,l),k=[b],S=n?Z("seq_lens",n.dataType,n.dims):void 0;S&&k.push(S);let E=o?Z("total_sequence_length_input",o.dataType,o.dims):void 0;E&&k.push(E);let T=kt(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(I).declareVariables(...k)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Da(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${m};${l}`,inputDependencies:y},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/d),y:i,z:t*r},programUniforms:u})}},ul=(e,t,r,a,i,s,n,o,l)=>{let d=n+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],f=e>1&&a,u=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=f?[s.batchSize,u,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,w=ot(s.headSize),v=s.headSize/w,b=12,k={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=f&&a&&H.size(a.dims)>0,T=["type","type"];E&&T.push("type"),i&&T.push("type"),o&&T.push("type"),l&&T.push("type");let I=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&I.push({dims:m,dataType:t.dataType,gpuDataType:0});let D=R=>{let L=Z("q",t.dataType,t.dims,w),se=Z("key",r.dataType,r.dims,w),J=[L,se];if(E){let oe=Z("past_key",a.dataType,a.dims,w);J.push(oe)}i&&J.push(Z("attention_bias",i.dataType,i.dims));let F=o?Z("seq_lens",o.dataType,o.dims):void 0;F&&J.push(F);let W=l?Z("total_sequence_length_input",l.dataType,l.dims):void 0;W&&J.push(W);let O=me("output",t.dataType,c),q=[O];f&&q.push(me("present_key",t.dataType,m,w));let X=kt(1,w),te=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${L.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${L.type.storage}, ${b*b}>;
  ${R.registerUniforms(te).declareVariables(...J,...q)}
  ${R.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Da(F,W,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${X}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${X}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:k,programUniforms:S}),getShaderSource:D}},dl=(e,t,r,a,i,s,n=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,f=e>1&&a,u=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=f?[i.batchSize,u,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,c],y=12,w={x:Math.ceil(i.vHeadSize/y),y:Math.ceil(i.sequenceLength/y),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:d}],b=f&&a&&H.size(a.dims)>0,k=["type","type"];b&&k.push("type"),n&&k.push("type"),o&&k.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=T=>{let I=Z("probs",t.dataType,t.dims),D=Z("v",r.dataType,r.dims),R=[I,D];b&&R.push(Z("past_value",a.dataType,a.dims));let L=n?Z("seq_lens",n.dataType,n.dims):void 0;n&&R.push(L);let se=o?Z("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(se);let J=[me("output",t.dataType,_)];f&&J.push(me("present_value",t.dataType,m));let F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${I.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${I.type.value}, ${y*y}>;
  ${T.registerUniforms(F).declareVariables(...R,...J)}
  ${T.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Da(L,se,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:v}),getShaderSource:E}},pa=(e,t,r,a,i,s,n,o,l,d,c=void 0,f=void 0)=>{let u=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),m=u>1?d.pastSequenceLength:0,_=m+d.kvSequenceLength,y=l&&H.size(l.dims)>0?l:void 0,w=[t,r];u>1&&n&&H.size(n.dims)>0&&w.push(n),y&&w.push(y),c&&w.push(c),f&&w.push(f);let v=e.compute(ul(u,t,r,n,y,d,m,c,f),{inputs:w,outputs:u>1?[-1,1]:[-1]})[0];e.compute(ll(v,d.batchSize,d.numHeads,m,d.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let b=[v,a];u>1&&o&&H.size(o.dims)>0&&b.push(o),c&&b.push(c),f&&b.push(f),e.compute(dl(u,v,a,o,d,m,c,f),{inputs:b,outputs:u>1?[0,2]:[0]})},pl=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let u=me("output_q",l[0].dataType,r),m=me("output_k",l[0].dataType,r),_=me("output_v",l[0].dataType,r),y=Z("input",l[0].dataType,l[0].dims),w=Z("weight",l[1].dataType,l[1].dims),v=Z("bias",l[2].dataType,l[2].dims),b=y.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${b}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${b}, ${n*n}>;
  var<workgroup> tileWeightK: array<${b}, ${n*n}>;
  var<workgroup> tileWeightV: array<${b}, ${n*n}>;
  ${f.registerUniforms(k).declareVariables(y,w,v,u,m,_)}
  ${f.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},wc=(e,t)=>{let r=ol(e.inputs,t),[a,i,s]=pl(e,r);return pa(e,a,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),cl,fl,hl,xc,p_=le(()=>{Lt(),Oe(),Ne(),dt(),Be(),cl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,s)=>{let n=i.length;if(n!==a.length)throw new Error(`${s}: num dimensions != ${n}`);i.forEach((o,l)=>{if(o!==a[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},fl=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,s=e[0].dims,n=a?ot(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?n:1,l=H.size(s)/n,d=a,c=d?s.length:s,f=Z("x",e[0].dataType,e[0].dims,n),u=Z("scale",e[1].dataType,e[1].dims,o),m=Z("bias",e[2].dataType,e[2].dims,o),_=Z("inputMean",e[3].dataType,e[3].dims,o),y=Z("inputVar",e[4].dataType,e[4].dims,o),w=me("y",e[0].dataType,c,n),v=()=>{let k="";if(a)k=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(i==="NCHW")k=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${u.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<u.rank;S++)k+=`cIndices[${S}] = outputIndices[${S}];`;k+=`let cOffset = ${u.indicesToOffset("cIndices")};`}return k},b=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(f,u,m,_,y,w)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${n}`)};
    ${v()}
    let scale = ${u.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${n}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...be(s)]:[{type:12,data:l}]})}},hl=e=>Je(e),xc=(e,t)=>{let{inputs:r,outputCount:a}=e,i=hl({...t,outputCount:a});if(st.webgpu.validateInputContent&&cl(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fl(r,i))}}),ml,gl,kc,c_=le(()=>{Ne(),Be(),ml=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gl=e=>{let t=e[0].dims,r=e[0].dims[2],a=H.size(t)/4,i=e[0].dataType,s=Z("input",i,t,4),n=Z("bias",i,[r],4),o=Z("residual",i,t,4),l=me("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,n,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},kc=e=>{ml(e.inputs),e.compute(gl(e.inputs))}}),_l,He,Sc,Ec,Tc,Ic,Cc,zc,Ac,Oc,Dc,yl,Rc,Nc,Bc,Mc,la,Pc,Wa,Uc,Vc,Wc,Lc,qc,Hc,Gc,Fc,jc,Kc,Qc,Zc,Yc,Xc,Jc,ef,Di,tf,$n,vn,rf,af,nf,bl,$l,sf,Fn=le(()=>{Oe(),Ne(),dt(),Be(),_l=(e,t,r,a,i,s,n)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Z("inputData",r,[o],4),c=me("outputData",a,[o],4),f=[{name:"vec_size",type:"u32"}];return n&&f.push(...n),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},He=(e,t,r,a,i,s=e.dataType,n,o)=>{let l=[{type:12,data:Math.ceil(H.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>_l(d,H.size(e.dims),e.dataType,s,r,a,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(H.size(d[0].dims)/64/4)},programUniforms:l})}},Sc=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},Ec=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},Tc=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},Ic=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},Cc=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},zc=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},Ac=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},Oc=e=>Je(e),Dc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(He(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},yl=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Je({min:t,max:r})},Rc=(e,t)=>{let r=t||yl(e.inputs),a=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Nc=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},Bc=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},Mc=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},la=e=>Je(e),Pc=(e,t)=>{let r=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Wa=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Uc=e=>{let t=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Wa(t)))},Vc=e=>{e.compute(He(e.inputs[0],"Exp","exp"))},Wc=e=>{e.compute(He(e.inputs[0],"Floor","floor"))},Lc=e=>{let t=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Wa(t)))},qc=(e,t)=>{let r=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Hc=e=>{e.compute(He(e.inputs[0],"Not",t=>`!${t}`))},Gc=e=>{e.compute(He(e.inputs[0],"Neg",t=>`-${t}`))},Fc=e=>{e.compute(He(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},jc=e=>{let t=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Kc=e=>{e.compute(He(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qc=e=>Je(e),Zc=(e,t)=>{let r=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Yc=e=>{e.compute(He(e.inputs[0],"Sin","sin"))},Xc=e=>{e.compute(He(e.inputs[0],"Sinh","sinh"))},Jc=e=>{e.compute(He(e.inputs[0],"Sqrt","sqrt"))},ef=e=>{e.compute(He(e.inputs[0],"Tan","tan"))},Di=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,tf=e=>{e.compute(He(e.inputs[0],"Tanh",Di))},$n=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Di("v")};
}
`,vn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,rf=e=>{let t=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"FastGelu",vn,$n(t),void 0,e.inputs[0].dataType))},af=(e,t)=>{let r=kt(e.inputs[0].dataType);return e.compute(He(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},nf=e=>{e.compute(He(e.inputs[0],"Log","log"))},bl=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,$l=e=>`quick_gelu_impl(${e})`,sf=(e,t)=>{let r=kt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",$l,bl(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vl,wl,of,f_=le(()=>{Ne(),Be(),Fn(),vl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},wl=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Z("input",e[0].dataType,e[0].dims,4),a=Z("bias",e[0].dataType,[e[0].dims[2]],4),i=me("output",e[0].dataType,t,4),s=H.size(t)/4,n=yt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,a,i)}

  ${Wa(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},of=e=>{vl(e.inputs),e.compute(wl(e.inputs))}}),xl,kl,Vt,lf,uf,df,pf,cf,ff,hf,mf,gf,_f,h_=le(()=>{Oe(),Ne(),Be(),xl=(e,t,r,a,i,s,n,o,l,d,c,f)=>{let u,m;typeof o=="string"?u=m=(b,k)=>`${o}((${b}),(${k}))`:typeof o=="function"?u=m=o:(u=o.scalar,m=o.vector);let _=me("outputData",c,a.length,4),y=Z("aData",l,t.length,4),w=Z("bData",d,r.length,4),v;if(i)if(s){let b=H.size(t)===1,k=H.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||k?v=_.setByOffset("global_idx",m(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),k?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(n||S?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",m(y.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(k,S,E="")=>{let T=`aData[indexA${S}][componentA${S}]`,I=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${y.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${k}[${S}] = ${E}(${u(T,I)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,w,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},kl=(e,t,r,a,i,s,n=r.dataType)=>{let o=r.dims.map(y=>Number(y)??1),l=a.dims.map(y=>Number(y)??1),d=!H.areEqual(o,l),c=o,f=H.size(o),u=!1,m=!1,_=[d];if(d){let y=Mr.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),f=H.size(c);let w=H.size(o)===1,v=H.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;_.push(w),_.push(v),_.push(b),_.push(k);let S=1;for(let E=1;E<c.length;E++){let T=o[o.length-E],I=l[l.length-E];if(T===I)S*=T;else break}S%4===0?(m=!0,u=!0):(w||v||b||k)&&(u=!0)}else u=!0;return _.push(u),{name:e,shaderCache:{hint:t+_.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>xl(y,o,l,c,u,d,m,i,r.dataType,a.dataType,n,s),getRunData:()=>({outputs:[{dims:c,dataType:n}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(H.size(c)/4)},...be(o,l,c)]})}},Vt=(e,t,r,a,i,s)=>{e.compute(kl(t,i??"",e.inputs[0],e.inputs[1],r,a,s))},lf=e=>{Vt(e,"Add",(t,r)=>`${t}+${r}`)},uf=e=>{Vt(e,"Div",(t,r)=>`${t}/${r}`)},df=e=>{Vt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},pf=e=>{Vt(e,"Mul",(t,r)=>`${t}*${r}`)},cf=e=>{let t=Z("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Vt(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},ff=e=>{Vt(e,"Sub",(t,r)=>`${t}-${r}`)},hf=e=>{Vt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},mf=e=>{Vt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},gf=e=>{Vt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},_f=e=>{Vt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Sl,El,Tl,Il,yf,bf,m_=le(()=>{Oe(),Ne(),dt(),Be(),Sl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,s=a.dims.length;e.forEach((n,o)=>{if(o!==r){if(n.dataType!==i)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},El=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Tl=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(s):i===0?a.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${i}) { ${s} }`)}return a.join(`
`)},Il=(e,t,r,a)=>{let i=H.size(r),s=new Array(e.length),n=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:i}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],s[y]=o,d.push(e[y].dims.length),n[y]=Z(`input${y}`,a,d[y]),l.push("rank"),c.push({type:12,data:s[y]});for(let y=0;y<e.length;++y)c.push(...be(e[y].dims));c.push(...be(r));let f=me("output",a,r.length),u=f.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),_=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)y.registerUniform(`sizeInConcatAxis${w}`,"u32");return y.declareVariables(...n,f)})()}

  ${El(s.length,m)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${u});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${u} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Tl(n,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:_}},yf=(e,t)=>{let r=e.inputs,a=r[0].dims,i=H.normalizeAxis(t.axis,a.length);Sl(r,i);let s=a.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let n=r.filter(o=>H.size(o.dims)>0);e.compute(Il(n,i,s,r[0].dataType),{inputs:n})},bf=e=>Je({axis:e.axis})}),wr,xr,kr,jn,Er=le(()=>{Oe(),Ne(),wr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},xr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},kr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},jn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Kp,Qp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),$t,$f,Kn=le(()=>{$t=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},$f=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),vf,g_=le(()=>{vf=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),da,Qn,Zn=le(()=>{Oe(),Ne(),Be(),Er(),da=(e,t,r,a,i)=>{let s=a-r;return`
      ${Array.from({length:r}).map((n,o)=>`
      if (${ge(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ge(i,o+s,a))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Qn=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n[n.length-2],d=o[o.length-1],c=n[n.length-1],f=ot(d),u=ot(c),m=ot(l),_=H.size(r)/f/m,y=e.length>2,w=a?a.slice(0,-2):r.slice(0,-2),v=[H.size(w),l,d],b=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];xr(t,b),b.push(...be(w,n,o)),y&&b.push(...be(e[2].dims)),b.push(...be(v));let k=S=>{let E=qn("batch_dims",e[0].dataType,w.length),T=Z("a",e[0].dataType,n.length,u),I=Z("b",e[1].dataType,o.length,f),D=me("output",e[0].dataType,v.length,f),R=yt(D.type.tensor),L=wr(t,D.type.value,R),se=[T,I],J="";if(y){let O=i?f:1;se.push(Z("bias",e[2].dataType,e[2].dims.length,O)),J=`${i?`value += bias[col / ${O}];`:`value += ${D.type.value}(bias[row + i]);`}`}let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];kr(t,F);let W=()=>{let O=`var a_data: ${T.type.value};`;for(let q=0;q<u;q++)O+=`
              let b_data${q} = b[(b_offset + (k + ${q}) * uniforms.N + col) / ${f}];`;for(let q=0;q<m;q++){O+=`a_data = a[(a_offset + (row + ${q}) * uniforms.K + k) / ${u}];`;for(let X=0;X<u;X++)O+=`
            values[${q}] = fma(${I.type.value}(a_data${u===1?"":`[${X}]`}), b_data${X}, values[${q}]);
`}return O};return`
  ${S.registerUniforms(F).registerInternalVariables(E).declareVariables(...se,D)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${da("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${da("b_indices",I,I.rank-2,E.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${u}) {
      ${W()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${J}
      ${L}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${u};${m};${i}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:k}}}),Cl,zl,wn,Ri,Al,xn,Ol,Ya,Yn=le(()=>{Oe(),Ne(),Be(),Er(),Zn(),Kn(),Cl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,zl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,wn=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=i?l:s,f=i?s:l,u=c/t[0],m=s/t[1];if(!((i&&u===4&&e[1]===4||!i&&(u===3||u===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${u} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${u} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${u}<${r}>, ${c/u}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${u};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Cl(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${u===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${zl(i,u)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ri=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Al=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xn=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=i?d:s,u=i?s:d;if(!(u%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${u} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=u/t[1],_=f/t[0],y=s/t[1],w=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Ri(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ri(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Al(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${u}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${w}
  }
`},Ol=(e,t,r,a,i=!1)=>{let[s,n,o,l]=a,d=yt(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${$t(e,d)} {
      var value = ${$t(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${da("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${$t(e,d)} {
      var value = ${$t(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${da("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${$t(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${$t(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ya=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n.slice(0,-2),d=o.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=H.size(c),u=n[n.length-2],m=n[n.length-1],_=o[o.length-1],y=m%4===0&&_%4===0,w=u<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/w[0]),Math.ceil(u/v[1]/w[1]),Math.ceil(f/v[2]/w[2])],k=y?4:1,S=[...l,u,m/k],E=S.length,T=[...d,m,_/k],I=T.length,D=[f,u,_/k],R=[{type:6,data:u},{type:6,data:_},{type:6,data:m}];xr(t,R),R.push(...be(c,S,T));let L=["rank","rank"],se=e.length>2;se&&(R.push(...be(e[2].dims)),L.push("rank")),R.push(...be(D));let J=F=>{let W=c.length,O=qn("batchDims",e[0].dataType,W,1),q=yt(e[0].dataType),X=Z("a",e[0].dataType,E,k),te=Z("b",e[1].dataType,I,k),oe=me("result",e[0].dataType,D.length,k),ne=[X,te];if(se){let B=i?k:1;ne.push(Z("bias",e[2].dataType,e[2].dims.length,B))}let G=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];kr(t,G);let ie=yt(oe.type.tensor),re=wr(t,oe.type.value,ie),M=Ol(k,se,re,[O,X,te,oe],i);return`
  ${F.registerUniforms(G).registerInternalVariables(O).declareVariables(...ne,oe)}
  ${M}
  ${y?wn(w,v,q,O):xn(w,v,q,O)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${y};${i}`,inputDependencies:L},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:R}),getShaderSource:J}}}),Dl,wf,__=le(()=>{Oe(),tr(),Be(),Er(),Kn(),g_(),Yn(),Dl=(e,t,r,a,i=!1,s,n=4,o=4,l=4,d="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},u=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${$t(n,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${y}) {
      ${u}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(n)}
    }
    return resData;`,k=e?t&&a?`
    let col = colIn * ${n};
    ${b}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${$t(n,d)}(0.0);`:a&&r?`
    let col = colIn * ${n};
    ${b}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${$t(n,d)}(0.0);`,S=e?a&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${$t(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${$t(o,d)}(0.0);`,E=$t(l,d),T=$t(e?n:o,d),I=$t(e?o:n,d),D=wr(s,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?k:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${$f(i)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},wf=(e,t,r,a,i,s,n,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],u=d?r[2]:r[3],m=d?r[1]:r[2],_=d?r[3]:r[1],y=d&&(c%4===0||c%3===0)&&_%4===0,w=d?_:u*m,v=d?u*m:_,b=[8,8,1],k=a<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/b[0]/k[0]),Math.ceil(v/b[1]/k[1]),Math.ceil(f/b[2]/k[2])];Qe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=y?d&&c%4!==0?3:4:1,T=b[1]*k[1],I=b[0]*k[0],D=Math.max(b[0]*E,b[1]),R=a%T===0,L=i%I===0,se=s%D===0,J=y?[E,4,4]:[1,1,1],F=[{type:6,data:a},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];xr(t,F),F.push(...be(e[0].dims,e[1].dims));let W=["rank","rank"];n&&(F.push(...be(e[2].dims)),W.push("rank")),F.push(...be(r));let O=q=>{let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];kr(t,X);let te=y?4:1,oe=yt(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${oe}>`:oe}) {
        result[flatIndex] = ${y?`vec4<${oe}>`:oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${oe}>`:oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,G=Z("x",e[0].dataType,e[0].dims.length,E===3?1:E),ie=Z("w",e[1].dataType,e[1].dims.length,te),re=[G,ie],M=me("result",e[0].dataType,r.length,te);if(n){let B=Z("bias",e[2].dataType,e[2].dims.length,te);re.push(B),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${oe}>`:oe} {
          return bias[coords.${d?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${vf("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${q.registerUniforms(X).declareVariables(...re,M)}
        ${ne}
        ${Dl(d,R,L,se,n,t,J[0],J[1],J[2],oe)}
        ${y?wn(k,b,oe,void 0,!d,D):xn(k,b,oe,void 0,!d,D,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${R};${L};${se};${T};${I};${D}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:F}),getShaderSource:O}}}),Rl,Ni,Jr,Nl,Bi,Bl,xf,kf,y_=le(()=>{Oe(),tr(),Ne(),Be(),Er(),Kn(),Rl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ni=e=>typeof e=="number"?[e,e,e]:e,Jr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Nl=(e,t,r,a=1)=>{let i=Jr(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},Bi=(e,t,r,a,i)=>{i==null&&(i=Nl(e,t[0],a[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*i)/a[n]+1));return s},Bl=(e,t,r,a,i,s,n,o,l,d)=>{let c,f,u,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Bi([t,r,a,1],[o,l,d],1,[i,s,n],e);f=_[0],u=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((y,w,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Bi([t,r,a,1],[o,l,d],1,[i,s,n],e[0]);f=_[0],u=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),u=Math.ceil(r/s),m=Math.ceil(a/n);let _=(f-1)*i+o-t,y=(u-1)*s+l-r,w=(m-1)*n+d-a,v=Math.floor(_/2),b=_-v,k=Math.floor(y/2),S=y-k,E=Math.floor(w/2),T=w-E;c={top:k,bottom:S,left:E,right:T,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:u,outWidth:m}},xf=(e,t,r,a,i,s=!1,n="channelsLast")=>{let o,l,d,c,f;if(n==="channelsLast")[o,l,d,c,f]=e;else if(n==="channelsFirst")[o,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${n}`);let[u,,m,_,y]=t,[w,v,b]=Ni(r),[k,S,E]=Ni(a),T=Jr(m,k),I=Jr(_,S),D=Jr(y,E),{padInfo:R,outDepth:L,outHeight:se,outWidth:J}=Bl(i,l,d,c,w,v,b,T,I,D),F=s?u*f:u,W=[0,0,0,0,0];return n==="channelsFirst"?W=[o,F,L,se,J]:n==="channelsLast"&&(W=[o,L,se,J,F]),{batchSize:o,dataFormat:n,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:L,outHeight:se,outWidth:J,outChannels:F,padInfo:R,strideDepth:w,strideHeight:v,strideWidth:b,filterDepth:m,filterHeight:_,filterWidth:y,effectiveFilterDepth:T,effectiveFilterHeight:I,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:S,dilationWidth:E,inShape:e,outShape:W,filterShape:t}},kf=(e,t,r,a,i,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((w,v)=>v)},d=[Math.ceil(Rl(l.x.map(w=>r[w]))/o[0]),1,1];Qe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,f=H.size(r),u=[{type:12,data:f},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];xr(t,u),u.push(...be(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(u.push(...be(e[2].dims)),m.push("rank")),u.push(...be(r));let y=w=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];kr(t,v);let b=1,k=yt(e[0].dataType),S=Z("x",e[0].dataType,e[0].dims.length,c),E=Z("W",e[1].dataType,e[1].dims.length,b),T=[S,E],I=me("result",e[0].dataType,r.length,b),D="";if(_){let se=Z("bias",e[2].dataType,e[2].dims.length,b);T.push(se),D+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${n?ge("coords",4,5):ge("coords",1,5)}];
        }`}let R=$t(c,k),L=wr(t,R,k);return`
            ${D}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(v).declareVariables(...T,I)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ge("coords",0,S.rank)};
              let d2 = ${n?ge("coords",S.rank-1,S.rank):ge("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${n?ge("coords",1,S.rank):ge("coords",2,S.rank)},
              ${n?ge("coords",2,S.rank):ge("coords",3,S.rank)},
              ${n?ge("coords",3,S.rank):ge("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?ge("uniforms.x_shape",1,S.rank):ge("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${n?ge("uniforms.x_shape",2,S.rank):ge("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${n?ge("uniforms.x_shape",3,S.rank):ge("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${n?ge("uniforms.x_shape",4,S.rank):ge("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${L}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${c};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:u}),getShaderSource:y}}}),Sf,Ef,b_=le(()=>{Oe(),Ne(),Be(),Er(),Sf=(e,t,r,a)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?ot(d):1,u=H.size(r)/f,m=[{type:12,data:u},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];xr(t,m),m.push(...be(n,[o[0],o[1],o[2],o[3]/f]));let _=i?["rank","rank","rank"]:["rank","rank"];m.push(...be([r[0],r[1],r[2],r[3]/f]));let y=w=>{let v=me("output",e[0].dataType,r.length,f),b=yt(v.type.tensor),k=wr(t,v.type.value,b),S=Z("x",e[0].dataType,n.length),E=Z("w",e[1].dataType,o.length,f),T=[S,E];i&&T.push(Z("b",e[2].dataType,e[2].dims,f));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];kr(t,I);let D=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(I).declareVariables(...T,v)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${s}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y}},Ef=(e,t,r,a)=>{let i=e.length>2,s=ot(r[3]),n=ot(r[2]),o=H.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];xr(t,f),f.push(...be(l,d,c));let u=(n-1)*t.strides[1]+d[1],m=_=>{let y=me("output",e[0].dataType,c.length,s),w=yt(y.type.tensor),v=wr(t,y.type.value,w),b=Z("x",e[0].dataType,l.length,s),k=Z("w",e[1].dataType,d.length,s),S=[b,k];i&&S.push(Z("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return kr(t,T),`
  ${_.registerUniforms(T).declareVariables(...S,y)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${u}>;
    var values: array<${y.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${u}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${u};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),Ml,Ra,Pl,Na,kn,Mi,Ul,Vl,Sn,$_=le(()=>{Ne(),__(),y_(),Yn(),b_(),Er(),Zn(),pr(),Ml=(e,t,r,a,i,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],c=t.slice(2).map((u,m)=>u+(u-1)*(r[m]-1)),f=o.map((u,m)=>u+a[m]+a[m+l]).map((u,m)=>Math.floor((u-c[m]+i[m])/i[m]));return f.splice(0,0,n),f.splice(s?3:1,0,d),f},Ra=[2,3,1,0],Pl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Na=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let a=e.pads.slice();Qa.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},kn=e=>{let t=jn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Mi=(e,t,r,a)=>{let i=r.format==="NHWC",s=Ml(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let T=[t[0]];if(i){let I=e.kernelCustomData.wT??e.compute(Ot(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),T.push(I)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ef(T,r,s,a),{inputs:T}):e.compute(Sf(T,r,s,a),{inputs:T});return}let n=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],u=s[i?1:2],m=s[i?2:3],_=s[i?3:1],y=i&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=s[0],I,D,R,L=[];if(i){let F=e.kernelCustomData.wT??e.compute(Ot(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),y){let W=o*l*d;I=t[0].reshape([1,T,W]),D=F.reshape([1,W,_]),R=[1,T,_]}else I=t[0].reshape([T,o*l,d]),D=F.reshape([1,d,_]),R=[T,u*m,_];L.push(I),L.push(D)}else I=t[0].reshape([T,d,o*l]),D=t[1].reshape([1,_,d]),R=[T,_,u*m],L.push(D),L.push(I);n&&L.push(t[2]);let se=R[2],J=L[0].dims[L[0].dims.length-1];se<8&&J<8?e.compute(Qn(L,r,s,R,i,a),{inputs:L}):e.compute(Ya(L,r,s,R,i,a),{inputs:L});return}let w=!0,v=e.kernelCustomData.wT??e.compute(Ot(t[1],Ra),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];n&&b.push(t[2]);let k=i?u*m:_,S=i?_:u*m,E=c*f*d;e.compute(wf(b,r,s,k,S,E,n,w,a),{inputs:b})},Ul=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Na({...t,pads:i,strides:s,dilations:n,kernelShape:o},a);Mi(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Vl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Na(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=xf(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,a);e.compute(kf(t,i,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],a))},Sn=(e,t)=>{if(Pl(e.inputs,t),e.inputs[0].dims.length===3)Ul(e,t);else if(e.inputs[0].dims.length===5)Vl(e,e.inputs,t);else{let r=Na(t,e.inputs);Mi(e,e.inputs,r)}}}),Tf,v_=le(()=>{Oe(),tr(),Ne(),Be(),Tf=(e,t,r)=>{let a=e.length>2,i=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,l=o[2]/n,d=o[3],c=s?ot(l):1,f=s?ot(d):1,u=s?d===1?c:f:1,m=H.size(i)/f,_=[Math.ceil(m/64),1,1];Qe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let y=["rank","rank"],w=[t.strides[0],t.strides[1]],v=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],b=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],S=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],E=[{type:12,data:m},{type:12,data:w},{type:12,data:v},{type:12,data:b},{type:12,data:k},{type:6,data:S},{type:12,data:l},{type:12,data:d},...be(e[0].dims,e[1].dims)];a&&(E.push(...be(e[2].dims)),y.push("rank")),E.push(...be(i));let T=I=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:w.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],R=yt(e[0].dataType),L=s?1:2,se=s?2:3,J=s?3:1,F=Z("W",e[1].dataType,e[1].dims.length,u),W=Z("Dy",e[0].dataType,e[0].dims.length,c),O=[W,F];a&&O.push(Z("bias",e[2].dataType,[i[J]].length,f));let q=me("result",e[0].dataType,i.length,f),X=()=>{let oe="";if(c===1)oe+=`
        let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${F.getByOffset(`w_offset / ${u}`)};
        dotProd = dotProd + xValue * wValue;`;else if(d===1)oe+=`
          let wValue = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${u}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ne=0;ne<c;ne++)oe+=`
            let wValue${ne} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ne}, wOutChannel)`)} / ${u}`)};
            dotProd = dotProd + xValue[${ne}] * wValue${ne};`;return oe},te=`
            let outputIndices = ${q.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${q.indicesGet("outputIndices",0)};
            let d1 = ${q.indicesGet("outputIndices",J)};
            let r = ${q.indicesGet("outputIndices",L)};
            let c = ${q.indicesGet("outputIndices",se)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${q.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${R}(dyRCorner) + ${R}(wR)) / ${R}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${R}(uniforms.Dy_shape[${L}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${R}(dyCCorner) + ${R}(wC)) / ${R}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${R}(uniforms.Dy_shape[${se}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${c}) {
                  let xValue = ${s?W.getByOffset(`${W.indicesToOffset(`${W.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):W.get("batch","inputChannel","idyR","idyC")};
                  ${X()}
                  inputChannel = inputChannel + ${c};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${f}]`:""};
            ${q.setByOffset("global_idx","value")};
          `;return`
    ${I.registerUniforms(D).declareVariables(...O,q)}
      ${I.mainStart()}
      ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${te}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${u}${f}${d===1}`,inputDependencies:y},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:E}),getShaderSource:T}}}),Wl,Ll,ql,Pi,If,Hl,Ui,Gl,Cf,w_=le(()=>{v_(),Er(),pr(),Wl=(e,t,r,a,i,s)=>(e-1)*t+r+(a-1)*i+1-s,Ll=(e,t,r,a,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[a]=e-s,r[i]=s)},ql=(e,t,r,a,i,s,n,o,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let u=e[0],m=t[o?3:1]*i;for(let _=0,y=e.length-c-(o?1:0);_<c;++_,++y){let w=e[y],v=f?w*n[_]:d[_],b=Wl(w,n[_],s[_],t[y],r[_],v);Ll(b,a,s,_,_+c),f&&d.push(n[_]*(w-1)+l[_]+(t[y]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,u),d.splice(o?3:1,0,m)},Pi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,u)=>f*u,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}ql(o,r,l,e.autoPad,e.group,i,d,a,n,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:n,outputShape:s,dilations:l,strides:d}),c},If=e=>{let t=jn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group,n=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Hl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ui=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Ot(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(Tf(s,r,a),{inputs:s})},Gl=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Pi({...t,pads:o,strides:n,dilations:s,kernelShape:i,outputPadding:l},a);Ui(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Cf=(e,t)=>{if(Hl(e.inputs,t),e.inputs[0].dims.length===3)Gl(e,t);else{let r=Pi(t,e.inputs);Ui(e,e.inputs,r)}}}),Fl,zf,Af,x_=le(()=>{Oe(),Ne(),dt(),Be(),Fl=(e,t,r,a)=>{let i=H.size(t),s=t.length,n=Z("input",e,s),o=me("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=H.normalizeAxis(l,s),c=f=>{let u=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,m=ge("uniforms.input_shape","uniforms.axis",s),_=a.reverse?u+(a.exclusive?" + 1":""):"0",y=a.reverse?m:u+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...be(t,t)]}),getShaderSource:c}},zf=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(Fl(a,r,i,t),{inputs:[0]})},Af=e=>{let t=e.exclusive===1,r=e.reverse===1;return Je({exclusive:t,reverse:r})}}),jl,Kl,Ql,Of,Df,k_=le(()=>{Oe(),Ne(),dt(),Be(),jl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Kl=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},Ql=(e,t)=>{let r,a,i,s,n,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,i,s]=e.dims,n=c?[r,a,i,d,d,s/d**2]:[r,a,i,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=c?[r,d,d,s/d**2,a,i]:[r,s/d**2,d,d,a,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(n),u=f.dims.length,m=e.dataType,_=Z("a",m,u),y=me("output",m,u),w=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,y)}

  ${Kl(o,u,_,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=l?[r,a*d,i*d,s/d**2]:[r,s/d**2,a*d,i*d],k=H.size(b),S=f.dims,E=H.sortBasedOnPerm(S,o);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...be(S,E)]}},getShaderSource:w}},Of=(e,t)=>{jl(e.inputs),e.compute(Ql(e.inputs[0],t))},Df=e=>Je({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ba,ea,Vi,Zl,Yl,Xl,Jl,Wi,eu,Rf,Nf,S_=le(()=>{Oe(),Ne(),dt(),Be(),Ba="[a-zA-Z]|\\.\\.\\.",ea="("+Ba+")+",Vi="^"+ea+"$",Zl="("+ea+",)*"+ea,Yl="^"+Zl+"$",Xl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Jl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Yl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let o=e[n].dims.slice();if(!s.match(RegExp(Vi)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,n);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!a.match(RegExp(ea)))throw new Error("Invalid RHS");(i=a.match(RegExp(Ba,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,s=!1,n=[],o=0;if(!e.match(RegExp(Vi))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ba,"g")),d=new Xl(a);return l==null||l.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let u=i-l.length+1;if(u<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(o,o+u),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<n.length;m++){let _=String.fromCharCode(48+m);d.addSymbol(_,f+m),this.addSymbol(_,r[o++],a)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],a)}),d}},Wi=e=>e+"_max",eu=(e,t,r,a)=>{let i=e.map(d=>d.length).map((d,c)=>Z(`input${c}`,t,d)),s=H.size(a),n=me("output",t,a.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",u="var sum = 0.0;",m="sum += prod;",_=[],y=[],w=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let I=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];I!==void 0&&r.lhs.forEach((D,R)=>{if(S.inputIndices.includes(R)){let L=D.symbolToIndices.get(E);if(L===void 0)throw new Error("Invalid symbol error");L.forEach(se=>{c.push(`${i[R].indicesSet(`input${R}Indices`,se,n.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,D)=>{if(S.inputIndices.includes(D)){let R=I.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(L=>{_.push(`${i[D].indicesSet(`input${D}Indices`,L,`${E}`)}`)}),v.push(`prod *= ${i[D].getByIndices(`input${D}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Wi(E)}; ${E}++) {`),w.push("}")});let k=b?[...c,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,u,...y,..._,f,...v,m,...w];return`
            ${d.registerUniforms(o.map(S=>({name:`${Wi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,n)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var u;return{type:12,data:((u=r.symbolToInfo.get(f))==null?void 0:u.dimValue)||0}});d.push({type:12,data:s});let c=e.map((f,u)=>[...be(f)]).reduce((f,u)=>f.concat(u),d);return c.push(...be(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},Rf=(e,t)=>{let r=new Jl(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((s,n)=>s.dims);e.compute(eu(i,e.inputs[0].dataType,r,a))},Nf=e=>{let t=e.equation.replace(/\s+/g,"");return Je({equation:t})}}),tu,Li,ru,au,Bf,E_=le(()=>{Oe(),Ne(),Be(),tu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Li=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},ru=(e,t)=>e.length>t.length?Li(e,t):Li(t,e),au=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=ru(t,r),i=e[0].dataType,s=i===9||H.size(t)===1,n=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(H.size(a)/o),d=f=>{let u=Z("input",i,t.length,n),m=me("output",i,a.length,o),_;if(i===9){let y=(w,v,b="")=>`
          let outputIndices${v} = ${m.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${u.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${w}[${v}] = ${b}(${u.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${u.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${u.getByOffset(`inputOffset / ${n}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(u,m)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...be(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Bf=e=>{tu(e.inputs),e.compute(au(e.inputs),{inputs:[0]})}}),iu,Mf,T_=le(()=>{Oe(),Ne(),Be(),Fn(),iu=e=>{let t=e[0].dataType,r=H.size(e[0].dims),a=H.size(e[1].dims),i=a%4===0,s=n=>{let o=Z("x",t,[1],4),l=Z("bias",t,[1],4),d=me("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,u=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(c).declareVariables(o,l,d)}

    ${$n(kt(t))}

    ${n.mainStart(Pr)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",vn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Pr/4)}})}},Mf=e=>{e.inputs.length<2||H.size(e.inputs[1].dims)===0?rf(e):e.compute(iu(e.inputs))}}),nu,su,Pf,Uf,I_=le(()=>{Oe(),Ne(),dt(),Be(),nu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},su=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=H.normalizeAxis(t.axis,i),n=r.slice(0);n.splice(s,1,...a);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(H.size(n)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...be(e[0].dims,e[1].dims,n)],f=u=>{let m=Z("data",e[0].dataType,e[0].dims.length,l),_=Z("inputIndices",e[1].dataType,e[1].dims.length),y=me("output",e[0].dataType,n.length,l),w=b=>{let k=a.length,S=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let E=0;E<k;E++)S+=`${k>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${n.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;S+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${m.type.indices};
        `;for(let E=0,T=0;E<i;E++)E===s?(S+=`${i>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,T+=k):(S+=`${i>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${n.length>1?`outputIndices${b}[${T}]`:`outputIndices${b}`};`,T++);return S},v;if(e[0].dataType===9){let b=(k,S,E="")=>`
          let outputIndices${S} = ${y.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${k}[${S}] = ${E}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${m.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${u.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,y)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},Pf=e=>Je({axis:e.axis}),Uf=(e,t)=>{let r=e.inputs;nu(r),e.compute(su(e.inputs,t))}}),ou,Vf,Wf,C_=le(()=>{Oe(),Ne(),Be(),ou=(e,t,r,a,i,s,n,o,l)=>{let d=[{type:12,data:s},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:l}],c=[s];d.push(...be(t.dims,c));let f=u=>{let m=Z("indices_data",t.dataType,t.dims.length),_=me("input_slice_offsets_data",12,1,1),y=[m,_],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${u.registerUniforms(w).declareVariables(...y)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Vf=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,s=r[1].dims,n=s[s.length-1],o=H.sizeToDimension(s,s.length-1),l=H.sizeFromDimension(a,t.batchDims+n),d=H.sizeToDimension(a,t.batchDims),c=H.sizeFromDimension(a,t.batchDims),f=o/d,u=new Array(n),m=l;for(let S=0;S<n;++S)u[n-1-S]=m,m*=a[t.batchDims+n-1-S];let _=ou(e,r[1],u,t.batchDims,a,o,f,c,n),y=t.batchDims+n;if(y>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=s.slice(0,-1).concat(a.slice(y)),v=H.size(w),b=[{type:12,data:v},{type:12,data:l},...be(r[0].dims,_.dims,w)],k=S=>{let E=Z("data",r[0].dataType,r[0].dims.length),T=Z("slice_offsets",12,_.dims.length),I=me("output",r[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,I)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:k},{inputs:[r[0],_]})},Wf=e=>({batchDims:e.batch_dims,cacheKey:""})}),lu,uu,Lf,qf,z_=le(()=>{Oe(),Ne(),dt(),Be(),lu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=H.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/a)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},uu=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=H.normalizeAxis(t.gatherAxis,i),n=H.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...a);let l=H.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...be(...e.map((m,_)=>m.dims),o)],u=m=>{let _=Z("data",e[0].dataType,e[0].dims.length),y=Z("inputIndices",e[1].dataType,e[1].dims.length),w=Z("scales",e[2].dataType,e[2].dims.length),v=e.length>3?Z("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=me("output",d,o.length),k=[_,y,w];v&&k.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...k,b)}
        ${m.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${kt(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:u}},Lf=(e,t)=>{let r=e.inputs;lu(r,t),e.compute(uu(e.inputs,t))},qf=e=>Je({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),du,pu,Hf,Gf,A_=le(()=>{Oe(),Ne(),dt(),Be(),du=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},pu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,s=e[1].dims,n=e[1].dataType,o=H.normalizeAxis(t.axis,i),l=r[o],d=s.slice(0),c=H.size(d),f=Z("input",a,i),u=Z("indicesInput",n,s.length),m=me("output",a,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...be(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,u,m)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${u.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Hf=e=>Je({axis:e.axis}),Gf=(e,t)=>{let r=e.inputs;du(r),e.compute(pu(e.inputs,t))}}),cu,fu,Ff,jf,O_=le(()=>{Oe(),Ne(),Be(),cu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},fu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,s,n]=jp.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(i/l),f=!0,u=H.size(o),m=[{type:12,data:f?d:u},{type:12,data:i},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...be(e[2].dims)),_.push("rank")),m.push(...be(o));let y=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",S=Z("a",e[0].dataType,e[0].dims),E=Z("b",e[1].dataType,e[1].dims),T=S.type.value,I=null,D=[S,E];e.length===3&&(I=Z("c",e[2].dataType,e[2].dims.length),D.push(I));let R=me("output",e[0].dataType,o.length);D.push(R);let L=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(L).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${k}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${T}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=v=>{let b=Z("a",e[0].dataType,e[0].dims),k=Z("b",e[1].dataType,e[1].dims),S=null,E=[b,k];e.length===3&&(S=Z("c",e[2].dataType,e[2].dims.length),E.push(S));let T=me("output",e[0].dataType,o.length);E.push(T);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let L=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(I).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${L}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y}},Ff=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},jf=(e,t)=>{cu(e.inputs),e.compute(fu(e.inputs,t))}}),Ft,Jt,gr,_r,hu,mu,gu,_u,yu,bu,$u,vu,Kf,Qf,D_=le(()=>{Oe(),Ne(),dt(),Be(),[Ft,Jt,gr,_r]=[0,1,2,3],hu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},mu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,gu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,_u=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,yu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,bu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ft}] = batch;
     indices[${Jt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${gr}] = u32(r);
            indices[${_r}] = u32(c);
          }
        `;case"border":return`
          indices[${gr}] = u32(clamp(r, 0, H - 1));
          indices[${_r}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${gr}] = gs_reflect(r, border[1], border[3]);
          indices[${_r}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,$u=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ft}], indices[${Jt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ft}], indices[${Jt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ft}], indices[${Jt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ft}], indices[${Jt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ft}], indices[${Jt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ft}], indices[${Jt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,vu=(e,t)=>{let r=Z("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Z("grid",e[1].dataType,a.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ft,Jt,gr,_r]=[0,3,1,2]);let n=me("output",e[0].dataType,s.length),o=r.type.value,l=H.size(s),d=[{type:12,data:l},...be(e[0].dims,a,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,n)}
  ${mu}
  ${gu(o)}
  ${_u(t)}
  ${yu(t)}
  ${bu(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${gr}]);
      let W_in = i32(uniforms.x_shape[${_r}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ft}], indices[${gr}], indices[${_r}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${$u(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let u=H.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}},getShaderSource:c}},Kf=(e,t)=>{hu(e.inputs),e.compute(vu(e.inputs,t))},Qf=e=>Je({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),St,wu,Zf,qi,xu,ua,Yf,Xf=le(()=>{Oe(),Ne(),dt(),Ln(),Gn(),Be(),pr(),St=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,wu=(e,t)=>{let r=e[0],a=St(e,1),i=St(e,2),s=St(e,3),n=St(e,4),o=St(e,5),l=St(e,6),d=St(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],u=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,y=0,w=Math.floor(u/t.numHeads);if(l&&d&&H.size(l.dims)&&H.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],y=l.dims[2]}else if(l&&H.size(l.dims)||d&&H.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&H.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&H.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+m,k=0;if(n&&H.size(n.dims)>0){k=8;let I=n.dims;throw I.length===1?I[0]===c?k=1:I[0]===3*c+2&&(k=3):I.length===2&&I[0]===c&&I[1]===b&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=u;if(i&&H.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let T=!1;if(n&&H.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&H.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:u,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:T,passPastInKv:S,qkvFormat:v}},Zf=e=>Je({...e}),qi=Je({perm:[0,2,1,3]}),xu=(e,t,r,a,i,s,n)=>{let o=[a,i,s],l=H.size(o),d=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],c=f=>{let u=me("qkv_with_bias",t.dataType,o),m=Z("qkv",t.dataType,o),_=Z("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(y).declareVariables(m,_,u)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},ua=(e,t,r,a,i,s,n,o)=>{let l=s;if(n&&H.size(n.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=xu(e,s,n,t,a,r*i,o),l=l.reshape([t,a,r,i]),r===1||a===1?l:e.compute(Ot(l,qi.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,a,r,i])),r===1||a===1?l:e.compute(Ot(l,qi.perm),{inputs:[l],outputs:[-1]})[0]},Yf=(e,t)=>{let r=wu(e.inputs,t),a=e.inputs[0],i=St(e.inputs,1),s=St(e.inputs,2),n=St(e.inputs,3),o=St(e.inputs,4),l=St(e.inputs,5),d=St(e.inputs,6),c=St(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,u=ua(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,n,0);if(f)return pa(e,u,i,s,o,void 0,d,c,l,r);if(!i||!s)throw new Error("key and value must be provided");let m=ua(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,n,r.hiddenSize),_=ua(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);pa(e,u,m,_,o,void 0,d,c,l,r)}}),ku,Su,Eu,Tu,En,Jf,eh,th=le(()=>{Oe(),Ne(),dt(),Be(),ku=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Su=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),Je({numOutputs:a,axis:t.axis,splitSizes:r})},Eu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ge("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Tu=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},En=(e,t)=>{let r=e[0].dims,a=H.size(r),i=e[0].dataType,s=H.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),o=Z("input",i,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,u=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let y=r.slice();y[s]=t.splitSizes[_],c.push(y),n[_]=me(`output${_}`,i,y.length),d.push({dims:c[_],dataType:e[0].dataType})}u.push({type:12,data:l},...be(r,...c));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...n)}
  ${Eu(l.length)}
  ${Tu(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ge("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},Jf=(e,t)=>{ku(e.inputs);let r=e.inputs.length===1?t:Su(e.inputs,t);e.compute(En(e.inputs,r),{inputs:[0]})},eh=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Je({axis:t,numOutputs:a,splitSizes:r})}}),Iu,Cu,Hi,rh,R_=le(()=>{dt(),Gn(),Xf(),th(),pr(),Iu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,u=0,m=!a||a.dims.length===0,_=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=_*t.numHeads);let y=s&&s.dims.length!==0,w=n&&n.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&w){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');u=s.dims[2]}else if(y||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,k=!1,S=t.kvNumHeads?_*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:u,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Cu=Je({perm:[0,2,1,3]}),Hi=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Ot(a,Cu.perm),{inputs:[a],outputs:[-1]})[0]),a},rh=(e,t)=>{var w;let r=Iu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((w=e.inputs[1])==null?void 0:w.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Je({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[u,m,_]=!i&&!s?e.compute(En([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,s],y=ua(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,u,void 0,0);pa(e,y,Hi(e,m,r),Hi(e,_,r),void 0,void 0,n,o,void 0,r,l,d)}}),Gi,zu,Au,ah,N_=le(()=>{Oe(),Ne(),pr(),Be(),Gi=(e,t,r,a,i,s,n,o)=>{let l=ot(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*n,u=64;f===1&&(u=256);let m=[i,n,s/l],_=[i,n,2],y=["rank","type","type"],w=[];w.push(...be(m,_));let v=b=>{let k=Z("x",t.dataType,3,l),S=Z("scale",r.dataType,r.dims),E=Z("bias",a.dataType,a.dims),T=me("output",1,3,2),I=[k,S,E,T];return`
  var<workgroup> workgroup_shared : array<${c}, ${u}>;
  const workgroup_size = ${u}u;
  ${b.declareVariables(...I)}
  ${b.mainStart(u)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${dr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${dr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${u}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:w}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},zu=(e,t,r)=>{let a=t[0].dims,i=a,s=2,n=a[0],o=a[1],l=H.sizeFromDimension(a,s),d=ot(l),c=H.size(i)/d,f=Gi(e,t[0],t[1],t[2],n,l,o,r.epsilon),u=[n,o,l/d],m=[n,o],_=["type","none"],y=w=>{let v=Z("x",t[0].dataType,u.length,d),b=Z("scale_shift",1,m.length,2),k=me("output",t[0].dataType,u.length,d),S=[v,b,k];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...be(u,m,u)]}),getShaderSource:y},{inputs:[t[0],f]})},Au=(e,t,r)=>{let a=t[0].dims,i=a,s=a[0],n=a[a.length-1],o=H.sizeFromDimension(a,1)/n,l=ot(n),d=H.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(n/l)}],f=["type","type"],u=!1,m=[0,a.length-1];for(let v=0;v<a.length-2;v++)u=u||a[v+1]!==1,m.push(v+1);u=u&&a[a.length-1]!==1;let _=u?e.compute(Ot(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,b)=>a[m[b]])),y=Gi(e,_,t[1],t[2],s,o,n,r.epsilon),w=v=>{let b=yt(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,S=I=>{let D=I===0?"x":"y",R=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${R}(scale.${D}))`;case 2:return`vec2<${b}>(${R}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${b}>(${R}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=Z("input",t[0].dataType,t[0].dims,l),T=me("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],y]})},ah=(e,t)=>{t.format==="NHWC"?Au(e,e.inputs,t):zu(e,e.inputs,t)}}),Ou,Du,ih,B_=le(()=>{Oe(),Ne(),Be(),Ou=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Du=(e,t,r)=>{let a=t.simplified,i=e[0].dims,s=e[1],n=!a&&e[2],o=i,l=H.normalizeAxis(t.axis,i.length),d=H.sizeToDimension(i,l),c=H.sizeFromDimension(i,l),f=H.size(s.dims),u=n?H.size(n.dims):0;if(f!==c||n&&u!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${u}`);let m=[];for(let E=0;E<i.length;++E)E<l?m.push(i[E]):m.push(1);let _=ot(c),y=["type","type"],w=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];n&&y.push("type");let v=r>1,b=r>2,k=E=>{let T=yt(e[0].dataType),I=[Z("x",e[0].dataType,e[0].dims,_),Z("scale",s.dataType,s.dims,_)];n&&I.push(Z("bias",n.dataType,n.dims,_)),I.push(me("output",e[0].dataType,o,_)),v&&I.push(me("mean_data_output",1,m)),b&&I.push(me("inv_std_output",1,m));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(D).declareVariables(...I)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${_n("f32",_)};
    var mean_square_vector = ${_n("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Br(T,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${dr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${dr("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Br(T,_,"x[j + offset]")};
      let f32scale = ${Br(T,_,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Br(T,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return v&&S.push({dims:m,dataType:1}),b&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:y},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:w}),getShaderSource:k}},ih=(e,t)=>{Ou(e.inputs),e.compute(Du(e.inputs,t,e.outputCount))}}),Ru,nh,M_=le(()=>{Ne(),Zn(),Yn(),Ru=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},nh=e=>{Ru(e.inputs);let t=Mr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Qn(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=H.size(e.inputs[0].dims.slice(0,-2)),n=H.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&n===1){let o=e.inputs[0].reshape([1,s,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,s,r],c=[o,l];e.compute(Ya(c,{activation:""},t,d),{inputs:c})}else e.compute(Ya(e.inputs,{activation:""},t))}}}),Nu,Bu,Mu,sh,oh,P_=le(()=>{Oe(),Ne(),dt(),Be(),Nu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!H.areEqual(n.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(H.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(H.size(l)!==d)throw new Error("zeroPoints input size error.")}},Bu=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=H.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=ot(t.k),u=ot(d),m=ot(n),_=o.concat([i,n]),y=i>1&&n/m%2===0?2:1,w=H.size(_)/m/y,v=64,b=[],k=[l,i,s/f],S=H.convertShape(e[1].dims).slice();S.splice(-1,1,d/u),b.push(...be(k)),b.push(...be(S)),b.push(...be(e[2].dims)),e.length===4&&b.push(...be(H.convertShape(e[3].dims)));let E=[l,i,n/m];b.push(...be(E));let T=I=>{let D=k.length,R=Z("a",e[0].dataType,D,f),L=Z("b",12,S.length,u),se=Z("scales",e[2].dataType,e[2].dims.length),J=[R,L,se],F=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;F&&J.push(F);let W=E.length,O=me("output",e[0].dataType,W,m),q=yt(e[0].dataType),X=(()=>{switch(f){case 1:return`array<${q}, 8>`;case 2:return`mat4x2<${q}>`;case 4:return`mat2x4<${q}>`;default:throw new Error(`${f}-component is not supported.`)}})(),te=()=>{let G=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${X};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let ie=0;ie<m*y;ie++)G+=`
            b_value = ${u===1?`b${ie}_data`:`b${ie}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${X}(${Array.from({length:4},(re,M)=>`${q}(b_value_lower[${M}]), ${q}(b_value_upper[${M}])`).join(", ")});
            b_dequantized_values = ${f===1?`${X}(${Array.from({length:8},(re,M)=>`(b_quantized_values[${M}] - ${F?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${X}(${Array(8).fill(`${F?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/f},(re,M)=>`${f===1?`a_data[${M}] * b_dequantized_values[${M}]`:`dot(a_data[${M}], b_dequantized_values[${M}])`}`).join(" + ")};
          `;return G},oe=()=>{let G=`
            var col_index = col * ${m};
            ${F?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${q}(8);`}
            `;for(let ie=0;ie<m*y;ie++)G+=`
            let scale${ie} = ${se.getByOffset("col_index * nBlocksPerCol + block")};
            ${F?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ie} = ${q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return G},ne=()=>{let G=`col_index = col * ${m};`;for(let ie=0;ie<m*y;ie++)G+=`
            let b${ie}_data = ${L.getByIndices(`${L.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return G+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${X};
            var b_dequantized_values: ${X};`,G};return`
        var<workgroup> workgroup_shared: array<${O.type.value}, ${y*v}>;
        ${I.declareVariables(...J,O)}
        ${I.mainStart([v,1,1])}
          let output_indices = ${O.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${oe()}
            for (var word: u32 = 0; word < ${d}; word += ${u}) {
              ${ne()}
              for (var i: u32 = 0; i < ${u}; i++) {
                ${te()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${O.setByIndices(`${O.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${u};${m};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:w},programUniforms:b}),getShaderSource:T}},Mu=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=H.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=ot(t.k),u=ot(d),m=o.concat([i,n]),_=128,y=n%8===0?8:n%4===0?4:1,w=_/y,v=w*u*8,b=v/f,k=v/t.blockSize,S=H.size(m)/y,E=[],T=[l,i,s/f],I=H.convertShape(e[1].dims).slice();I.splice(-1,1,d/u),E.push(...be(T)),E.push(...be(I)),E.push(...be(e[2].dims)),e.length===4&&E.push(...be(H.convertShape(e[3].dims)));let D=[l,i,n];E.push(...be(D));let R=L=>{let se=T.length,J=Z("a",e[0].dataType,se,f),F=Z("b",12,I.length,u),W=Z("scales",e[2].dataType,e[2].dims.length),O=[J,F,W],q=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;q&&O.push(q);let X=D.length,te=me("output",e[0].dataType,X),oe=yt(e[0].dataType),ne=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${J.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${te.type.value}, ${w}>, ${y}>;
        ${L.declareVariables(...O,te)}
        ${L.mainStart([w,y,1])}
          let output_indices = ${te.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${J.getByIndices(`${J.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${J.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${oe}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${oe}(8);`}
            let scale = ${W.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${F.getByIndices(`${F.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${u}; i++) {
              ${ne()}
              let b_value = ${u===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${oe}>(${Array.from({length:4},(G,ie)=>`${oe}(b_value_lower[${ie}]), ${oe}(b_value_upper[${ie}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${oe}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(G,ie)=>`${`dot(a_data${ie}, b_dequantized_values[${ie}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${te.type.value} = ${te.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${te.setByIndices(`${te.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${u};${w};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:S},programUniforms:E}),getShaderSource:R}},sh=(e,t)=>{Nu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Mu(e.inputs,t)):e.compute(Bu(e.inputs,t))},oh=e=>Je(e)}),Pu,Uu,Vu,Wu,Lu,qu,Hu,Gu,lh,U_=le(()=>{Oe(),Ne(),Be(),Pu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Uu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ge("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Vu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ge("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ge("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Wu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
                  k = i32(${ge("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Lu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${ge("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
                  k -= i32(${ge("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},qu=(e,t,r)=>{switch(r.mode){case 0:return Uu(e,t,r.pads.length);case 1:return Vu(e,t,r.pads.length);case 2:return Wu(e,t,r.pads.length);case 3:return Lu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Hu=(e,t)=>{let r=H.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=H.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...be(e[0].dims,r));let o=["rank"],l=d=>{let c=me("output",e[0].dataType,r.length),f=Z("x",e[0].dataType,a.length),u=f.type.value,m=qu(c,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?u:"f32"}),`
            ${d.registerUniforms(_).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${u}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(r)/64)},programUniforms:s}),getShaderSource:l}},Gu=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:a,pads:n}}else return t},lh=(e,t)=>{Pu(e.inputs);let r=Gu(e.inputs,t);e.compute(Hu(e.inputs,r),{inputs:[0]})}}),ta,Fi,ji,Ki,Qi,Fu,ju,Zi,Yi,uh,dh,Xi,ph,ch,Ji,fh,hh,mh,gh,V_=le(()=>{Lt(),Oe(),Ne(),Be(),ta=e=>{if(st.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fi=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Qa.adjustPoolAttributes(r,i,n,o,l,d);let c=Qa.computePoolOutputShape(r,i,o,l,n,d,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:n,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:n,strides:o,pads:d,cacheKey:t.cacheKey});let u=c.slice();return u.push(u.splice(1,1)[0]),[f,a?u:c]},ji=(e,t)=>{let r=t.format==="NHWC",a=H.size(e),i=H.size(t.kernelShape),s=[{type:12,data:a},{type:12,data:i}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let u=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];u=!!(y+w),s.push({type:12,data:m},{type:12,data:_},{type:12,data:y},{type:12,data:w}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,f,u]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=H.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,n,!!l,!1,!1]}},Ki=(e,t,r,a,i,s,n,o,l,d,c,f)=>{let u=i.format==="NHWC",m=t.type.value,_=me("output",t.type.tensor,a);if(i.kernelShape.length<=2){let y="",w="",v="",b=r-(u?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let k=r-(u?3:2);f?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${w}
              ${y}
              ${v}
              ${n}

              output[global_idx] = value;
            }`}else{if(u)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=i.kernelShape.length,w=i.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${ge("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${ge("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ge("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${ge("uniforms.pads","j - 2u",w)};
                  ${v}
              }
              ${n}

              output[global_idx] = value;
            }`}},Qi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Fu=e=>`${Qi(e)};${e.countIncludePad}`,ju=e=>`${Qi(e)};${e.storageOrder};${e.dilations}`,Zi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Yi=(e,t,r,a)=>{let[i,s]=Fi(t,a,r),n=Z("x",t.dataType,t.dims.length),o=n.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,u,m,_]=ji(s,i);c.push(...be(t.dims,s));let y=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(s)/64)},programUniforms:c}),getShaderSource:w=>Ki(w,n,t.dims.length,s.length,i,l,d,0,f,u,m,_)}},uh=e=>{let t=e.count_include_pad!==0,r=Zi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Fu(a)}},dh=(e,t)=>{ta(e.inputs),e.compute(Yi("AveragePool",e.inputs[0],!1,t))},Xi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ph=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},ch=(e,t)=>{ta(e.inputs),e.compute(Yi("GlobalAveragePool",e.inputs[0],!0,t))},Ji=(e,t,r,a)=>{let[i,s]=Fi(t,a,r),n=`
      value = max(x_val, value);
    `,o="",l=Z("x",t.dataType,t.dims.length),d=["rank"],[c,f,u,m,_]=ji(s,i);return c.push(...be(t.dims,s)),{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(H.size(s)/64)},programUniforms:c}),getShaderSource:y=>Ki(y,l,t.dims.length,s.length,i,n,o,t.dataType===10?-65504:-1e5,f,u,m,_)}},fh=(e,t)=>{ta(e.inputs),e.compute(Ji("MaxPool",e.inputs[0],!1,t))},hh=e=>{let t=e.storage_order,r=e.dilations,a=Zi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:ju(i)}},mh=e=>{let t=e.format;return{format:t,...Xi,cacheKey:t}},gh=(e,t)=>{ta(e.inputs),e.compute(Ji("GlobalMaxPool",e.inputs[0],!0,t))}}),Ku,Qu,_h,yh,W_=le(()=>{Oe(),Ne(),dt(),Be(),Ku=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Qu=(e,t)=>{let r=H.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,s=e[0].dims,n=e[1].dataType,o=H.size(s),l=a===3||a===2,d=l?[Math.ceil(H.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,u=f?l?[Math.ceil(H.size(f.dims)/4)]:f.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,_=m===!1&&c.length===1,y=ot(o),w=m&&(!l||y===4),v=w?y:1,b=w&&!l?y:1,k=Z("input",l?12:a,d.length,b),S=Z("scale",n,c.length),E=f?Z("zero_point",l?12:a,u.length):void 0,T=me("output",n,s.length,v),I=[k,S];E&&I.push(E);let D=[d,c];f&&D.push(u);let R=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...be(...D,s)],L=se=>{let J=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${se.registerUniforms(J).declareVariables(...I,T)}
      ${se.mainStart()}
          ${se.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:L,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:R})}},_h=(e,t)=>{Ku(e.inputs,t),e.compute(Qu(e.inputs,t))},yh=e=>Je({axis:e.axis,blockSize:e.blockSize})}),Zu,Yu,bh,L_=le(()=>{Lt(),Oe(),Be(),Zu=(e,t,r)=>{let a=e===t,i=e<t&&r<0,s=e>t&&r>0;if(a||i||s)throw new Error("Range these inputs' contents are invalid.")},Yu=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],n=i,o=[{type:12,data:n},{type:a,data:e},{type:a,data:r},...be(s)],l=d=>{let c=me("output",a,s.length),f=c.type.value,u=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(u).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},bh=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),st.webgpu.validateInputContent&&Zu(t,r,a),e.compute(Yu(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Xu,Ju,$h,vh,q_=le(()=>{Oe(),Ne(),dt(),Be(),Xu=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${s}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Ju=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,s=1,n=Math.ceil(H.size(a)/s),o=a[a.length-1],l=H.sizeFromDimension(r,o),d=[{type:12,data:n},{type:12,data:o},{type:12,data:l},...be(e[1].dims,e[2].dims,i)],c=f=>{let u=Z("indices",e[1].dataType,e[1].dims.length),m=Z("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Zp("output",e[0].dataType,i.length):me("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(u,m,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Xu(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:c}},$h=e=>Je({reduction:e.reduction}),vh=(e,t)=>{e.compute(Ju(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ed,td,rd,en,ad,id,nd,sd,od,ld,ud,dd,tn,pd,cd,fd,hd,md,wh,xh,H_=le(()=>{Oe(),Ne(),dt(),Be(),ed=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},td=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,s)=>a[i]=e[s]),a},rd=(e,t,r,a,i,s)=>{let[n,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ed(a,t),t.axes.length>0&&td(a,t.axes,d).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},en=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,ad=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${en("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${en("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",id=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nd=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((s,n)=>{a[s]=i[n],a[n+r]=i[t.length+n]}),a):i},sd=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(s=>i.push(s)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((s,n)=>i[s]=r[n])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,n)=>Math.round(s*t[n]))}return i},od=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=a),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(a,0,t.length),i.forEach((s,n)=>i[n]=Math.round(s*t[n]))),i},ld=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ge("uniforms.scales","i",a)};
        var roi_low = ${ge("uniforms.roi","i",i)};
        var roi_hi = ${ge("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ge("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,ud=(e,t,r,a,i,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ge("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ge("uniforms.roi","i",s)};
          var roi_hi = ${ge("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${ge("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,dd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ge("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,tn=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",pd=(e,t,r,a,i)=>{let[s,n,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${tn(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${n}];
      var col:${d} = originalIndices[${o}];
      ${a?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},cd=(e,t,r,a,i,s,n,o,l,d)=>{let c=r.length===2,[f,u]=c?[0,1]:[2,3],m=e.type.value,_=y=>{let w=y===f?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[y]},
        ${a[y]}, ${r[y]}, ${s[y]}, ${s[y]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${m} = originalIdx + ${m}(i);
          if (${w} < 0 || ${w} >= ${r[y]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${w} = max(0, min(${w}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${w})`)};
          data[i + 1] = ${y===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(u)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},fd=(e,t,r,a,i)=>{let[s,n,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${tn(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${n}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},hd=(e,t,r,a,i,s)=>{let n=e.dims,o=nd(s,t.axes,n.length),l=sd(n,a,i,t.axes),d=a.slice();a.length===0&&(d=n.map((b,k)=>b===0?1:l[k]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=od(n,d,t)));let c=me("output",e.dataType,l.length),f=Z("input",e.dataType,n.length),u=H.size(l),m=n.length===l.length&&n.every((b,k)=>b===l[k]),_=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,w=f.type.value,v=b=>`
      ${m?"":`
      ${ad(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${dd(f,n)};
              ${id(t.nearestMode,r,w)};
              ${ud(f,c,n,l,d.length,o.length,_)};
              `;case"linear":return`
              ${ld(c,n,l,d.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${pd(f,c,n,_,y)}`;if(n.length===3||n.length===5)return`${fd(f,c,n,_,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${cd(f,c,n,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:1,data:d},{type:1,data:o},...be(n,l)]})}},md=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},wh=(e,t)=>{let r=[],a=[],i=[],s=md(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");rd(e.inputs,t,s,r,a,i),e.compute(hd(e.inputs[0],t,s,r,a,i),{inputs:[0]})},xh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return Je({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),gd,_d,kh,G_=le(()=>{Oe(),Ne(),dt(),Be(),gd=(e,t)=>{let[r,a,i,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!H.areEqual(a.dims,[])&&!H.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!H.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=i.dims[0],f=H.sizeFromDimension(r.dims,1)/d,u=o===0?i.dims[1]*2:f/n;if(o>u)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(u/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},_d=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:s}=t,n=e[0].dims[0],o=H.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],f=i===0?c*2:d/a,u=new Array(n,l,d/f,f-c),m=H.computeStrides(u),_=[{type:1,data:s},{type:12,data:u},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...be(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=w=>{let v=Z("input",e[0].dataType,e[0].dims.length),b=Z("position_ids",e[1].dataType,e[1].dims.length),k=Z("cos_cache",e[2].dataType,e[2].dims.length),S=Z("sin_cache",e[3].dataType,e[3].dims.length),E=me("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:u.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(v,b,k,S,E)}

        ${w.mainStart(Pr)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",me("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Je({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(H.size(u)/Pr)},programUniforms:_})}},kh=(e,t)=>{gd(e.inputs,t),e.compute(_d(e.inputs,t))}}),yd,bd,Sh,F_=le(()=>{Oe(),Ne(),Be(),yd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},bd=(e,t,r,a)=>{let i=t.simplified,s=e[0].dims,n=H.size(s),o=s,l=n,d=s.slice(-1)[0],c=a?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,u=e.length>4,m=a&&r>1,_=a&&r>2,y=r>3,w=64,v=ot(d),b=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[Z("x",e[0].dataType,e[0].dims,v),Z("skip",e[1].dataType,e[1].dims,v),Z("gamma",e[2].dataType,e[2].dims,v)];f&&I.push(Z("beta",e[3].dataType,e[3].dims,v)),u&&I.push(Z("bias",e[4].dataType,e[4].dims,v)),I.push(me("output",e[0].dataType,o,v)),m&&I.push(me("mean_output",1,c)),_&&I.push(me("inv_std_output",1,c)),y&&I.push(me("input_skip_bias_sum",e[0].dataType,o,v));let D=yt(e[0].dataType),R=yt(1,v);return`

      ${E.registerUniforms(T).declareVariables(...I)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

      ${E.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${u?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Br(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${dr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${dr("square_sum",v)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:c,dataType:1}),r>2&&S.push({dims:c,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${y}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:k,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},Sh=(e,t)=>{yd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(bd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),$d,ra,vd,rn,wd,xd,Eh,Th,j_=le(()=>{Oe(),Ne(),dt(),Be(),$d=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},ra=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},vd=(e,t)=>{if(e.length>1){let r=ra(e,1),a=ra(e,2),i=ra(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Je({starts:r,ends:a,axes:i})}else return t},rn=(e,t,r,a,i)=>{let s=e;return e<0&&(s+=r[a[t]]),i[t]<0?Math.max(0,Math.min(s,r[a[t]]-1)):Math.max(0,Math.min(s,r[a[t]]))},wd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${ge("uniforms.input_shape","i",r.length)};
            let steps_i = ${ge("uniforms.steps","i",r.length)};
            let signs_i = ${ge("uniforms.signs","i",r.length)};
            let starts_i = ${ge("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,xd=(e,t)=>{let r=e[0].dims,a=H.size(r),i=t.axes.length>0?H.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=ra(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let n=t.starts.map((v,b)=>rn(v,b,r,i,s)),o=t.ends.map((v,b)=>rn(v,b,r,i,s));if(i.length!==n.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let v=0;v<r.length;++v)i.includes(v)||(n.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,b,k)=>{if(v<0){let S=(o[b]-n[b])/v,E=n[b],T=E+S*s[b];n[b]=T,o[b]=E,k[b]=-v}});let d=r.slice(0);i.forEach((v,b)=>{d[v]=Math.ceil((o[v]-n[v])/s[v])});let c={dims:d,dataType:e[0].dataType},f=me("output",e[0].dataType,d.length),u=Z("input",e[0].dataType,e[0].dims.length),m=H.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:m},{type:12,data:n},{type:6,data:l},{type:12,data:s},...be(e[0].dims,d)],w=v=>`
      ${v.registerUniforms(_).declareVariables(u,f)}
        ${wd(u,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",u.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y})}},Eh=(e,t)=>{$d(e.inputs,t);let r=vd(e.inputs,t);e.compute(xd(e.inputs,r),{inputs:[0]})},Th=e=>{let t=e.starts,r=e.ends,a=e.axes;return Je({starts:t,ends:r,axes:a})}}),kd,Sd,Ih,Ch,K_=le(()=>{Oe(),Ne(),dt(),pr(),Be(),kd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Sd=(e,t)=>{let r=e.inputs[0],a=r.dims,i=H.size(a),s=a.length,n=H.normalizeAxis(t.axis,s),o=n<a.length-1,l,d=[];o?(d=Array.from({length:s},(I,D)=>D),d[n]=s-1,d[s-1]=n,l=e.compute(Ot(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[s-1],u=i/f,m=ot(f),_=f/m,y=64;u===1&&(y=256);let w=(I,D)=>D===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:D===2?`max(${I}.x, ${I}.y)`:D===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,v=Z("x",l.dataType,l.dims,m),b=me("result",l.dataType,l.dims,m),k=v.type.value,S=yt(l.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=I=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${I.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${w("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${dr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${m};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:u},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Ot(T,d),{inputs:[T]})},Ih=(e,t)=>{kd(e.inputs),Sd(e,t)},Ch=e=>Je({axis:e.axis})}),an,Ed,Td,Id,zh,Q_=le(()=>{Oe(),Ne(),Be(),an=e=>Array.from(e.getBigInt64Array(),Number),Ed=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(an(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Td=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Id=(e,t)=>{let r=e[0].dims,a=t??an(e[1]),i=Td(r,a),s=H.size(i),n=e[0].dataType,o=Z("input",n,r.length),l=me("output",n,i.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...be(e[0].dims,i)]}),getShaderSource:d}},zh=e=>{Ed(e.inputs),e.compute(Id(e.inputs),{inputs:[0]})}}),Cd,zd,Ah,Z_=le(()=>{Oe(),Ne(),Be(),Cd=(e,t,r,a,i)=>{let s=me("output_data",i,r.length,4),n=Z("a_data",t[1].dataType,t[1].dims.length,4),o=Z("b_data",t[2].dataType,t[2].dims.length,4),l=Z("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,u,m)=>`select(${u}, ${f}, ${m})`;if(!a)d=s.setByOffset("global_idx",c(n.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(u,m,_="")=>{let y=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${n.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${u}[${m}] = ${_}(${c(y,w,v)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},zd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,s=!(H.areEqual(t,r)&&H.areEqual(r,a)),n=t,o=H.size(t);if(s){let d=Mr.calcShape(Mr.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");n=d,o=H.size(n)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Cd(d,e,n,s,i),getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...be(a,t,r,n)]})}},Ah=e=>{e.compute(zd(e.inputs))}}),Oh,Y_=le(()=>{d_(),Gn(),p_(),c_(),f_(),h_(),m_(),$_(),w_(),x_(),k_(),S_(),E_(),T_(),I_(),C_(),z_(),A_(),O_(),D_(),R_(),N_(),B_(),M_(),P_(),Xf(),U_(),V_(),W_(),L_(),q_(),Hn(),H_(),G_(),F_(),j_(),K_(),th(),Q_(),pr(),Fn(),Z_(),Oh=new Map([["Abs",[Sc]],["Acos",[Ec]],["Acosh",[Tc]],["Add",[lf]],["ArgMax",[vc,bn]],["ArgMin",[$c,bn]],["Asin",[Ic]],["Asinh",[Cc]],["Atan",[zc]],["Atanh",[Ac]],["Attention",[wc]],["AveragePool",[dh,uh]],["BatchNormalization",[xc]],["BiasAdd",[kc]],["BiasSplitGelu",[of]],["Cast",[Dc,Oc]],["Ceil",[Nc]],["Clip",[Rc]],["Concat",[yf,bf]],["Conv",[Sn,kn]],["ConvTranspose",[Cf,If]],["Cos",[Bc]],["Cosh",[Mc]],["CumSum",[zf,Af]],["DepthToSpace",[Of,Df]],["DequantizeLinear",[_h,yh]],["Div",[uf]],["Einsum",[Rf,Nf]],["Elu",[Pc,la]],["Equal",[df]],["Erf",[Uc]],["Exp",[Vc]],["Expand",[Bf]],["FastGelu",[Mf]],["Floor",[Wc]],["FusedConv",[Sn,kn]],["Gather",[Uf,Pf]],["GatherElements",[Gf,Hf]],["GatherBlockQuantized",[Lf,qf]],["GatherND",[Vf,Wf]],["Gelu",[Lc]],["Gemm",[jf,Ff]],["GlobalAveragePool",[ch,ph]],["GlobalMaxPool",[gh,mh]],["Greater",[hf]],["GreaterOrEqual",[gf]],["GridSample",[Kf,Qf]],["GroupQueryAttention",[rh]],["HardSigmoid",[Zc,Qc]],["InstanceNormalization",[ah]],["LayerNormalization",[ih]],["LeakyRelu",[qc,la]],["Less",[mf]],["LessOrEqual",[_f]],["Log",[nf]],["MatMul",[nh]],["MatMulNBits",[sh,oh]],["MaxPool",[fh,hh]],["Mul",[pf]],["MultiHeadAttention",[Yf,Zf]],["Neg",[Gc]],["Not",[Hc]],["Pad",[lh]],["Pow",[cf]],["QuickGelu",[sf,la]],["Range",[bh]],["Reciprocal",[Fc]],["ReduceMin",[mc]],["ReduceMean",[dc]],["ReduceMax",[hc]],["ReduceSum",[_c]],["ReduceProd",[gc]],["ReduceL1",[pc]],["ReduceL2",[cc]],["ReduceLogSum",[bc]],["ReduceLogSumExp",[fc]],["ReduceSumSquare",[yc]],["Relu",[jc]],["Resize",[wh,xh]],["RotaryEmbedding",[kh]],["ScatterND",[vh,$h]],["Sigmoid",[Kc]],["Sin",[Yc]],["Sinh",[Xc]],["Slice",[Eh,Th]],["SkipLayerNormalization",[Sh]],["Split",[Jf,eh]],["Sqrt",[Jc]],["Softmax",[Ih,Ch]],["Sub",[ff]],["Tan",[ef]],["Tanh",[tf]],["ThresholdedRelu",[af,la]],["Tile",[zh]],["Transpose",[Xp,Jp]],["Where",[Ah]]])}),Dh,X_=le(()=>{Lt(),tr(),Be(),Dh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){Qt(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Wt(e.programInfo.name)}dispose(){}build(e,t){Qt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let i=Yp(t,this.backend.device.limits),s=e.getShaderSource(i),n=`${a.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:n,label:e.name});Qe("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Wt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let s=t*r*a,n=Math.ceil(Math.sqrt(s));if(n>i){if(n=Math.ceil(Math.cbrt(s)),n>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),Ad,Od,Dd,Rd,Rh,J_=le(()=>{Lt(),Oe(),tr(),Gp(),l_(),Y_(),X_(),Ad=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[a].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[a].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Od=(e,t,r)=>{var i,s;let a=e.name;return(i=e.shaderCache)!=null&&i.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Ad(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Dd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Rd=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Rh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=s=>t.features.has(s)&&r.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Rd(this.device),this.adapterInfo=new Dd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Fp(this),this.programManager=new Dh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Vn(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],n=s.kernelId,o=this.kernels.get(n),l=o.kernelType,d=o.kernelName,c=s.programName,f=s.inputTensorViews,u=s.outputTensorViews,m=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),outputsMetadata:u.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:c,startTime:y,endTime:w});else{let v="";f.forEach((k,S)=>{v+=`input[${S}]: [${k.dims}] | ${vr(k.dataType)}, `});let b="";u.forEach((k,S)=>{b+=`output[${S}]: [${k.dims}] | ${vr(k.dataType)}, `}),`${n}${l}${d}${c}${v}${b}`,w-y}Fa("GPU",`${c}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Wt()}run(e,t,r,a,i,s){Qt(e.name);let n=[];for(let b=0;b<t.length;++b){let k=t[b].data;if(k===0)continue;let S=this.gpuDataManager.get(k);if(!S)throw new Error(`no GPU data for input: ${k}`);n.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((b,k)=>k):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],u=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=s)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let k=c[b]===-1,S=c[b]===-2,E=k||S?i(o[b].dataType,o[b].dims):a(c[b],o[b].dataType,o[b].dims);if(f.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(T),S){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(T)}u.push(T)}if(n.length!==t.length||u.length!==f.length){if(u.length===0)return Wt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(d){let b=0,k=[];d.forEach(I=>{let D=typeof I.data=="number"?[I.data]:I.data;if(D.length===0)return;let R=I.type===10?2:4,L,se;I.type===10?(se=D.length>4?16:D.length>2?8:D.length*R,L=D.length>4?16:R*D.length):(se=D.length<=2?D.length*R:16,L=16),b=Math.ceil(b/se)*se,k.push(b);let J=I.type===10?8:4;b+=D.length>4?Math.ceil(D.length/J)*L:D.length*R});let S=16;b=Math.ceil(b/S)*S;let E=new ArrayBuffer(b);d.forEach((I,D)=>{let R=k[D],L=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(E,R,L.length).set(L);else if(I.type===12)new Uint32Array(E,R,L.length).set(L);else if(I.type===10)new Uint16Array(E,R,L.length).set(L);else if(I.type===1)new Float32Array(E,R,L.length).set(L);else throw new Error(`Unsupported uniform type: ${vr(I.type)}`)});let T=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,b),this.gpuDataManager.release(T.id),m={offset:0,size:b,buffer:T.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),y=_[1]===1&&_[2]===1,w=Od(e,t,y),v=this.programManager.getArtifact(w);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(w,v),Qe("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let k=d[b],S=k.type,E=typeof k.data=="number"?1:k.data.length,[T,I]=v.uniformVariablesInfo[b];if(S!==T||E!==I)throw new Error(`Uniform variable ${b} mismatch: expect type ${T} with size ${I}, got type ${S} with size ${E} in program "${v.programInfo.name}".`)}}if(Qe("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,n,u,_,m),Wt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=Oh.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,s=a.kernelName,n=a.kernelEntry,o=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Qe("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),n=this.gpuDataManager.registerExternalBuffer(r,a,s);return i.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await gn(this,e,t);return Wn(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Qe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Qe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Qe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),s=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Nd,nn,Bd,sn,on,ln,Md,Nh,e0=le(()=>{tr(),Nd=1,nn=()=>Nd++,Bd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),sn=(e,t)=>{let r=Bd.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},on=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return sn(this.dataType,this.tensorShape)}destroy(){Qe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}},ln=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==sn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Qe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Md=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=nn();return this.tensorTrackersById.set(e,new ln(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a){Qe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(this.backend.currentContext,t,r,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Qe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=nn(),s=new on({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new ln(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,i){let s=this.backend.currentSessionId,n=this.backend.currentContext;for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(n,e,t)){Qe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=s,c}Qe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=await n.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:a,readable:i});return new on({sessionId:s,context:n,tensor:o,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Nh=(...e)=>new Md(...e)}),un,Pd,Bh,t0=le(()=>{Oe(),Sr(),Gp(),e0(),tr(),un=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Pd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,s)=>i===a[s]&&e[i]===t[i])},Bh=class{constructor(e){this.tensorManager=Nh(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],Vn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Pd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Qe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a){let i=un.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,i,r,a)}uploadTensor(e,t){if(!_t().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Qe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Wn(r,t)}}registerMLTensor(e,t,r){let a=un.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.registerTensor(this.currentContext,e,a,r);return Qe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${a}, dimensions: ${r}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,i,s){if(!s)throw new Error("External mounted files are not available.");let n=e;e.startsWith("./")&&(n=e.substring(2));let o=s.get(n);if(!o)throw new Error(`File with name ${n} not found in preloaded files.`);if(t+r>o.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=o.slice(t,t+r).buffer,d;switch(i.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Qe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),a.constant(i,d)}flush(){}}}),Mh={};ca(Mh,{init:()=>Ph});var Ma,Ud,Ph,r0=le(()=>{Oe(),J_(),tr(),Ne(),t0(),Ma=class Uh{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=H.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(H.size(t)!==H.size(this.dims))throw new Error("Invalid new shape");return new Uh(this.module,this.dataType,this.data,t)}},Ud=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,s=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,s));let n=Number(e.getValue(a*i++,s));this.outputCount=Number(e.getValue(a*i++,s)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,s));let o=[];for(let l=0;l<n;l++){let d=Number(e.getValue(a*i++,s)),c=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,s)),u=[];for(let m=0;m<f;m++)u.push(Number(e.getValue(a*i++,s)));o.push(new Ma(e,d,c,u))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,a=(t==null?void 0:t.outputs)??[],i=(o,l,d)=>new Ma(this.module,l,this.output(o,d),d),s=(o,l)=>{let d=Nr(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Ma(this.module,o,c,l)};return this.backend.run(e,r,a,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*a);this.module.setValue(s,t.length,i);for(let n=0;n<t.length;n++)this.module.setValue(s+a*(n+1),t[n],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Ph=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new Rh;await s.initialize(r,a),i("webgpu",[s,n=>s.alloc(Number(n)),n=>s.free(n),(n,o,l,d=!1)=>{if(d)Qe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(o)}, size=${Number(l)}`),s.memcpy(Number(n),Number(o));else{Qe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(o)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(l));s.upload(Number(o),c)}},async(n,o,l)=>{Qe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${o}, size=${l}`),await s.download(Number(n),()=>t.HEAPU8.subarray(Number(o)>>>0,Number(o+l)>>>0))},(n,o,l)=>s.createKernel(n,Number(o),l,t.UTF8ToString(t._JsepGetNodeName(Number(o)))),n=>s.releaseKernel(n),(n,o,l,d)=>{Qe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${n}, contextDataOffset=${o}`);let c=new Ud(t,s,Number(o));return s.computeKernel(Number(n),c,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new Bh(r);i("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,l,d)=>s.ensureTensor(n,o,l,d),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o)])}}}),Vd,Xn,Jn,sr,Wd,Xa,es,ts,dn,rs,as,is,Vh=le(()=>{s_(),o_(),Oe(),Sr(),Nn(),Hp(),Vd=(e,t)=>{_t()._OrtInit(e,t)!==0&&Fe("Can't initialize onnxruntime.")},Xn=async e=>{Vd(e.wasm.numThreads,Ka(e.logLevel))},Jn=async(e,t)=>{{let r=(r0(),Ga(Mh)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",_t(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",_t(),e)}}},sr=new Map,Wd=e=>{let t=_t(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&Fe("Can't get session input/output count.");let s=a===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+a,s))]}finally{t.stackRestore(r)}},Xa=e=>{let t=_t(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},es=async(e,t)=>{var f,u,m;let r,a,i=_t();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Xa(e);let s=0,n=0,o=0,l=[],d=[],c=[];try{if([n,l]=qp(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let E=[];for(let T of t.externalData){let I=typeof T=="string"?T:T.path;E.push(Un(typeof T=="string"?T:T.data).then(D=>{i.mountExternalData(I,D)}))}await Promise.all(E)}for(let E of(t==null?void 0:t.executionProviders)??[])if((typeof E=="string"?E:E.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof E!="string"){let T=E,I=T==null?void 0:T.context,D=T==null?void 0:T.gpuDevice,R=T==null?void 0:T.deviceType,L=T==null?void 0:T.powerPreference;I?i.currentContext=I:D?i.currentContext=await i.jsepCreateMLContext(D):i.currentContext=await i.jsepCreateMLContext({deviceType:R,powerPreference:L})}else i.currentContext=await i.jsepCreateMLContext();break}s=await i._OrtCreateSession(r,a,n),s===0&&Fe("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.jsepRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,y]=Wd(s),w=!!(t!=null&&t.enableGraphCapture),v=[],b=[],k=[];for(let E=0;E<_;E++){let T=i._OrtGetInputName(s,E);T===0&&Fe("Can't get an input name."),d.push(T),v.push(i.UTF8ToString(T))}for(let E=0;E<y;E++){let T=i._OrtGetOutputName(s,E);T===0&&Fe("Can't get an output name."),c.push(T);let I=i.UTF8ToString(T);b.push(I);{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let D=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((u=t==null?void 0:t.preferredOutputLocation)==null?void 0:u[I])??"cpu";if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(w&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(D)}}let S=null;return k.some(E=>E==="gpu-buffer"||E==="ml-tensor")&&(o=i._OrtCreateBinding(s),o===0&&Fe("Can't create IO binding."),S={handle:o,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(E=>mn(E))}),sr.set(s,[s,d,c,S,w,!1]),[s,v,b]}catch(_){throw d.forEach(y=>i._OrtFree(y)),c.forEach(y=>i._OrtFree(y)),o!==0&&i._OrtReleaseBinding(o)!==0&&Fe("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&Fe("Can't release session."),_}finally{i._free(r),n!==0&&i._OrtReleaseSessionOptions(n)!==0&&Fe("Can't release session options."),l.forEach(_=>i._free(_)),(m=i.unmountExternalData)==null||m.call(i)}},ts=e=>{var l;let t=_t(),r=sr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,s,n,o]=r;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&Fe("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&Fe("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),i.forEach(d=>t._OrtFree(d)),s.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&Fe("Can't release session."),sr.delete(e)},dn=(e,t,r,a,i,s=!1)=>{if(!e){t.push(0);return}let n=_t(),o=n.PTR_SIZE,l=e[0],d=e[1],c=e[3],f,u;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let y=e[2].gpuBuffer;u=Nr(sa(l),d);let w=n.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=w(a,i,y,u)}else if(c==="ml-tensor"){let y=e[2].mlTensor;u=Nr(sa(l),d);let w=n.jsepRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=w(y,sa(l),d)}else{let y=e[2];if(Array.isArray(y)){u=o*y.length,f=n._malloc(u),r.push(f);for(let w=0;w<y.length;w++){if(typeof y[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);n.setValue(f+w*o,xt(y[w],r),"*")}}else u=y.byteLength,f=n._malloc(u),r.push(f),n.HEAPU8.set(new Uint8Array(y.buffer,y.byteOffset,u),f)}let m=n.stackSave(),_=n.stackAlloc(4*d.length);try{d.forEach((w,v)=>n.setValue(_+v*o,w,o===4?"i32":"i64"));let y=n._OrtCreateTensor(sa(l),f,u,_,d.length,mn(c));y===0&&Fe(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(y)}finally{n.stackRestore(m)}},rs=async(e,t,r,a,i,s)=>{var se,J;let n=_t(),o=n.PTR_SIZE,l=sr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],u=l[3],m=l[4],_=l[5],y=t.length,w=a.length,v=0,b=[],k=[],S=[],E=[],T=n.stackSave(),I=n.stackAlloc(y*o),D=n.stackAlloc(y*o),R=n.stackAlloc(w*o),L=n.stackAlloc(w*o);try{(se=n.jsepOnRunStart)==null||se.call(n,d),[v,b]=Lp(s);for(let O=0;O<y;O++)dn(r[O],k,E,e,t[O],m);for(let O=0;O<w;O++)dn(i[O],S,E,e,y+a[O],m);for(let O=0;O<y;O++)n.setValue(I+O*o,k[O],"*"),n.setValue(D+O*o,c[t[O]],"*");for(let O=0;O<w;O++)n.setValue(R+O*o,S[O],"*"),n.setValue(L+O*o,f[a[O]],"*");if(u&&!_){let{handle:O,outputPreferredLocations:q,outputPreferredLocationsEncoded:X}=u;if(c.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${c.length}).`);for(let te=0;te<y;te++){let oe=t[te];await n._OrtBindInput(O,c[oe],k[te])!==0&&Fe(`Can't bind input[${te}] for session=${e}.`)}for(let te=0;te<w;te++){let oe=a[te];(J=i[te])!=null&&J[3]?n._OrtBindOutput(O,f[oe],S[te],0)!==0&&Fe(`Can't bind pre-allocated output[${te}] for session=${e}.`):n._OrtBindOutput(O,f[oe],0,X[oe])!==0&&Fe(`Can't bind output[${te}] to ${q[te]} for session=${e}.`)}sr.set(e,[d,c,f,u,m,!0])}let F;u?F=await n._OrtRunWithBinding(d,u.handle,w,R,v):F=await n._OrtRun(d,D,I,y,L,w,R,v),F!==0&&Fe("failed to call OrtRun().");let W=[];for(let O=0;O<w;O++){let q=Number(n.getValue(R+O*o,"*"));if(q===S[O]){W.push(i[O]);continue}let X=n.stackSave(),te=n.stackAlloc(4*o),oe=!1,ne,G=0;try{n._OrtGetTensorData(q,te,te+o,te+2*o,te+3*o)!==0&&Fe(`Can't access output tensor data on index ${O}.`);let ie=o===4?"i32":"i64",re=Number(n.getValue(te,ie));G=n.getValue(te+o,"*");let M=n.getValue(te+o*2,"*"),B=Number(n.getValue(te+o*3,ie)),Q=[];for(let ye=0;ye<B;ye++)Q.push(Number(n.getValue(M+ye*o,ie)));n._OrtFree(M)!==0&&Fe("Can't free memory for tensor dims.");let ve=Q.reduce((ye,$e)=>ye*$e,1);ne=vr(re);let we=u==null?void 0:u.outputPreferredLocations[a[O]];if(ne==="string"){if(we==="gpu-buffer"||we==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ye=[];for(let $e=0;$e<ve;$e++){let Ue=n.getValue(G+$e*o,"*"),Pe=n.getValue(G+($e+1)*o,"*"),Re=$e===ve-1?void 0:Pe-Ue;ye.push(n.UTF8ToString(Ue,Re))}W.push([ne,Q,ye,"cpu"])}else if(we==="gpu-buffer"&&ve>0){let ye=n.jsepGetBuffer;if(!ye)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let $e=ye(G),Ue=Nr(re,ve);if(Ue===void 0||!Mn(ne))throw new Error(`Unsupported data type: ${ne}`);oe=!0,W.push([ne,Q,{gpuBuffer:$e,download:n.jsepCreateDownloader($e,Ue,ne),dispose:()=>{n._OrtReleaseTensor(q)!==0&&Fe("Can't release tensor.")}},"gpu-buffer"])}else if(we==="ml-tensor"&&ve>0){let ye=n.jsepEnsureTensor;if(!ye)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Nr(re,ve)===void 0||!Pn(ne))throw new Error(`Unsupported data type: ${ne}`);let $e=await ye(G,re,Q,!1);oe=!0,W.push([ne,Q,{mlTensor:$e,download:n.jsepCreateMLTensorDownloader(G,ne),dispose:()=>{n.jsepReleaseTensorId(G),n._OrtReleaseTensor(q)}},"ml-tensor"])}else{let ye=Bn(ne),$e=new ye(ve);new Uint8Array($e.buffer,$e.byteOffset,$e.byteLength).set(n.HEAPU8.subarray(G,G+$e.byteLength)),W.push([ne,Q,$e,"cpu"])}}finally{n.stackRestore(X),ne==="string"&&G&&n._free(G),oe||n._OrtReleaseTensor(q)}}return u&&!m&&(n._OrtClearBoundOutputs(u.handle)!==0&&Fe("Can't clear bound outputs."),sr.set(e,[d,c,f,u,m,!1])),W}finally{n.stackRestore(T),k.forEach(F=>n._OrtReleaseTensor(F)),S.forEach(F=>n._OrtReleaseTensor(F)),E.forEach(F=>n._free(F)),v!==0&&n._OrtReleaseRunOptions(v),b.forEach(F=>n._free(F))}},as=e=>{let t=_t(),r=sr.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&Fe("Can't get an profile file name."),t._OrtFree(i)},is=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),or,Tt,Dr,aa,ia,Pa,pn,Ua,yr,br,Ld,Wh,Lh,qh,Hh,Gh,Fh,jh,Kh=le(()=>{Lt(),Vh(),Sr(),Dn(),or=()=>!!st.wasm.proxy&&typeof document<"u",Dr=!1,aa=!1,ia=!1,Ua=new Map,yr=(e,t)=>{let r=Ua.get(e);r?r.push(t):Ua.set(e,[t])},br=()=>{if(Dr||!aa||ia||!Tt)throw new Error("worker not ready")},Ld=e=>{switch(e.data.type){case"init-wasm":Dr=!1,e.data.err?(ia=!0,pn[1](e.data.err)):(aa=!0,pn[0]()),Pa&&(URL.revokeObjectURL(Pa),Pa=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ua.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Wh=async()=>{if(!aa){if(Dr)throw new Error("multiple calls to 'initWasm()' detected.");if(ia)throw new Error("previous call to 'initWasm()' failed.");if(Dr=!0,or())return new Promise((e,t)=>{Tt==null||Tt.terminate(),Vp().then(([r,a])=>{var i;try{Tt=a,Tt.onerror=n=>t(n),Tt.onmessage=Ld,pn=[e,t];let s={type:"init-wasm",in:st};!s.in.wasm.wasmPaths&&(r||(i=import.meta.url)!=null&&i.startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href}),Tt.postMessage(s),Pa=r}catch(s){t(s)}},t)});try{await Rn(st.wasm),await Xn(st),aa=!0}catch(e){throw ia=!0,e}finally{Dr=!1}}},Lh=async e=>{if(or())return br(),new Promise((t,r)=>{yr("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:st}};Tt.postMessage(a)});await Jn(st,e)},qh=async e=>or()?(br(),new Promise((t,r)=>{yr("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Tt.postMessage(a,[e.buffer])})):Xa(e),Hh=async(e,t)=>{if(or()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return br(),new Promise((r,a)=>{yr("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Tt.postMessage(i,s)})}else return es(e,t)},Gh=async e=>{if(or())return br(),new Promise((t,r)=>{yr("release",[t,r]);let a={type:"release",in:e};Tt.postMessage(a)});ts(e)},Fh=async(e,t,r,a,i,s)=>{if(or()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return br(),new Promise((n,o)=>{yr("run",[n,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:s}};Tt.postMessage(d,is(l))})}else return rs(e,t,r,a,i,s)},jh=async e=>{if(or())return br(),new Promise((t,r)=>{yr("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Tt.postMessage(a)});as(e)}}),cn,qd,Qh,a0=le(()=>{Lt(),Kh(),Oe(),On(),Hp(),cn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},qd=e=>{switch(e[3]){case"cpu":return new jt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Mn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return jt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!Pn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return jt.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Qh=class{async fetchModelAndCopyToWasmMemory(e){return qh(await Un(e))}async loadModel(e,t){Qt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Hh(r,t),Wt()}async dispose(){return Gh(this.sessionId)}async run(e,t,r){Qt();let a=[],i=[];Object.entries(e).forEach(f=>{let u=f[0],m=f[1],_=this.inputNames.indexOf(u);if(_===-1)throw new Error(`invalid input '${u}'`);a.push(m),i.push(_)});let s=[],n=[];Object.entries(t).forEach(f=>{let u=f[0],m=f[1],_=this.outputNames.indexOf(u);if(_===-1)throw new Error(`invalid output '${u}'`);s.push(m),n.push(_)});let o=a.map((f,u)=>cn(f,()=>`input "${this.inputNames[i[u]]}"`)),l=s.map((f,u)=>f?cn(f,()=>`output "${this.outputNames[n[u]]}"`):null),d=await Fh(this.sessionId,i,o,n,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[n[f]]]=s[f]??qd(d[f]);return Wt(),c}startProfiling(){}endProfiling(){jh(this.sessionId)}}}),Zh={};ca(Zh,{OnnxruntimeWebAssemblyBackend:()=>In,initializeFlags:()=>Tn,wasmBackend:()=>Yh});var Tn,In,Yh,i0=le(()=>{Lt(),Kh(),a0(),Tn=()=>{if((typeof st.wasm.initTimeout!="number"||st.wasm.initTimeout<0)&&(st.wasm.initTimeout=0),st.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof st.wasm.proxy!="boolean"&&(st.wasm.proxy=!1),typeof st.wasm.trace!="boolean"&&(st.wasm.trace=!1),typeof st.wasm.numThreads!="number"||!Number.isInteger(st.wasm.numThreads)||st.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)st.wasm.numThreads=1;else{let e=typeof navigator>"u"?Lg("node:os").cpus().length:navigator.hardwareConcurrency;st.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},In=class{async init(e){Tn(),await Wh(),await Lh(e)}async createInferenceSessionHandler(e,t){let r=new Qh;return await r.loadModel(e,t),Promise.resolve(r)}},Yh=new In});Lt();Lt();Lt();var n0="1.21.0-dev.20250206-d981b153d3";{let e=(i0(),Ga(Zh)).wasmBackend;Rr("webgpu",e,5),Rr("webnn",e,5),Rr("cpu",e,10),Rr("wasm",e,10)}Object.defineProperty(st.versions,"web",{value:n0,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(e,t,r){const a=e.slice();return a[10]=t[r],a}function Gd(e){let t,r,a=e[1].name+"",i,s,n,o,l,d,c,f,u,m,_=e[3].t("Close")+"",y,w,v,b;o=new hp({props:{className:"size-5"}});function k(T,I){return T[2].length?o0:s0}let S=k(e),E=S(e);return{c(){t=P("div"),r=P("div"),i=ke(a),s=ce(),n=P("button"),Te(o.$$.fragment),l=ce(),d=P("div"),c=P("div"),E.c(),f=ce(),u=P("div"),m=P("button"),y=ke(_),this.h()},l(T){t=U(T,"DIV",{class:!0});var I=V(t);r=U(I,"DIV",{class:!0});var D=V(r);i=Se(D,a),D.forEach(C),s=fe(I),n=U(I,"BUTTON",{class:!0,"aria-label":!0});var R=V(n);Ie(o.$$.fragment,R),R.forEach(C),I.forEach(C),l=fe(T),d=U(T,"DIV",{class:!0});var L=V(d);c=U(L,"DIV",{class:!0});var se=V(c);E.l(se),se.forEach(C),f=fe(L),u=U(L,"DIV",{class:!0});var J=V(u);m=U(J,"BUTTON",{class:!0,type:!0});var F=V(m);y=Se(F,_),F.forEach(C),J.forEach(C),L.forEach(C),this.h()},h(){N(r,"class","text-lg font-medium self-center"),N(n,"class","self-center"),N(n,"aria-label","Close"),N(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),N(c,"class","mb-2"),N(m,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),N(m,"type","button"),N(u,"class","flex justify-end pt-2"),N(d,"class","px-5 pb-4 dark:text-gray-200")},m(T,I){de(T,t,I),A(t,r),A(r,i),A(t,s),A(t,n),Ce(o,n,null),de(T,l,I),de(T,d,I),A(d,c),E.m(c,null),A(d,f),A(d,u),A(u,m),A(m,y),w=!0,v||(b=[ct(n,"click",e[5]),ct(m,"click",e[5])],v=!0)},p(T,I){(!w||I&2)&&a!==(a=T[1].name+"")&&Ae(i,a),S===(S=k(T))&&E?E.p(T,I):(E.d(1),E=S(T),E&&(E.c(),E.m(c,null))),(!w||I&8)&&_!==(_=T[3].t("Close")+"")&&Ae(y,_)},i(T){w||(Y(o.$$.fragment,T),w=!0)},o(T){ee(o.$$.fragment,T),w=!1},d(T){T&&(C(t),C(l),C(d)),ze(o),E.d(),v=!1,qr(b)}}}function s0(e){let t,r="-";return{c(){t=P("span"),t.textContent=r},l(a){t=U(a,"SPAN",{"data-svelte-h":!0}),La(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,i){de(a,t,i)},p:ut,d(a){a&&C(t)}}}function o0(e){let t,r=ur(e[2]),a=[];for(let i=0;i<r.length;i+=1)a[i]=Fd(Hd(e,r,i));return{c(){t=P("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=U(i,"DIV",{class:!0});var s=V(t);for(let n=0;n<a.length;n+=1)a[n].l(s);s.forEach(C),this.h()},h(){N(t,"class","flex flex-wrap gap-1 mt-1 -mx-1")},m(i,s){de(i,t,s);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,null)},p(i,s){if(s&4){r=ur(i[2]);let n;for(n=0;n<r.length;n+=1){const o=Hd(i,r,n);a[n]?a[n].p(o,s):(a[n]=Fd(o),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},d(i){i&&C(t),dp(a,i)}}}function Fd(e){let t,r=e[10].tag+"",a,i,s,n=e[10].count+"",o,l;return{c(){t=P("span"),a=ke(r),i=ce(),s=P("span"),o=ke(n),l=ce(),this.h()},l(d){t=U(d,"SPAN",{class:!0});var c=V(t);a=Se(c,r),i=fe(c),s=U(c,"SPAN",{class:!0});var f=V(s);o=Se(f,n),f.forEach(C),l=fe(c),c.forEach(C),this.h()},h(){N(s,"class","text-gray-500 font-medium"),N(t,"class","px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-xs")},m(d,c){de(d,t,c),A(t,a),A(t,i),A(t,s),A(s,o),A(t,l)},p(d,c){c&4&&r!==(r=d[10].tag+"")&&Ae(a,r),c&4&&n!==(n=d[10].count+"")&&Ae(o,n)},d(d){d&&C(t)}}}function l0(e){let t,r,a=e[1]&&Gd(e);return{c(){a&&a.c(),t=Kt()},l(i){a&&a.l(i),t=Kt()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,s){i[1]?a?(a.p(i,s),s&2&&Y(a,1)):(a=Gd(i),a.c(),Y(a,1),a.m(t.parentNode,t)):a&&(Ze(),ee(a,1,1,()=>{a=null}),Ye())},i(i){r||(Y(a),r=!0)},o(i){ee(a),r=!1},d(i){i&&C(t),a&&a.d(i)}}}function u0(e){let t,r,a;function i(n){e[8](n)}let s={size:"sm",$$slots:{default:[l0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new fp({props:s}),Vr.push(()=>Fr(t,"show",i)),{c(){Te(t.$$.fragment)},l(n){Ie(t.$$.fragment,n)},m(n,o){Ce(t,n,o),a=!0},p(n,[o]){const l={};o&8206&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(Y(t.$$.fragment,n),a=!0)},o(n){ee(t.$$.fragment,n),a=!1},d(n){ze(t,n)}}}function d0(e,t,r){let a,i,{show:s=!1}=t,{model:n=null}=t,{feedbacks:o=[]}=t,{onClose:l=()=>{}}=t;const d=Lr("i18n");lr(e,d,m=>r(3,i=m));const c=()=>{r(0,s=!1),l()},f=(m,_,y=5)=>{const w=new Map;return _.filter(v=>v.data.model_id===m).forEach(v=>{(v.data.tags||[]).forEach(b=>{w.set(b,(w.get(b)||0)+1)})}),Array.from(w.entries()).sort((v,b)=>b[1]-v[1]).slice(0,y).map(([v,b])=>({tag:v,count:b}))};function u(m){s=m,r(0,s)}return e.$$set=m=>{"show"in m&&r(0,s=m.show),"model"in m&&r(1,n=m.model),"feedbacks"in m&&r(6,o=m.feedbacks),"onClose"in m&&r(7,l=m.onClose)},e.$$.update=()=>{e.$$.dirty&66&&r(2,a=n?f(n.id,o):[])},[s,n,a,i,d,c,o,l,u]}class p0 extends Hr{constructor(t){super(),Gr(this,t,d0,u0,Ur,{show:0,model:1,feedbacks:6,onClose:7})}}const{Map:c0}=gg;function jd(e,t,r){const a=e.slice();return a[10]=t[r],a[38]=r,a}function f0(e){let t,r,a,i,s,n,o,l,d;return a=new xg({props:{className:"size-3"}}),{c(){t=P("div"),r=P("div"),Te(a.$$.fragment),i=ce(),s=P("input"),this.h()},l(c){t=U(c,"DIV",{class:!0});var f=V(t);r=U(f,"DIV",{class:!0});var u=V(r);Ie(a.$$.fragment,u),u.forEach(C),i=fe(f),s=U(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(C),this.h()},h(){N(r,"class","self-center ml-1 mr-3"),N(s,"class","w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"),N(s,"placeholder",n=e[9].t("Search")),N(t,"class","flex flex-1")},m(c,f){de(c,t,f),A(t,r),Ce(a,r,null),A(t,i),A(t,s),po(s,e[2]),o=!0,l||(d=[ct(s,"input",e[17]),ct(s,"focus",e[18])],l=!0)},p(c,f){(!o||f[0]&512&&n!==(n=c[9].t("Search")))&&N(s,"placeholder",n),f[0]&4&&s.value!==c[2]&&po(s,c[2])},i(c){o||(Y(a.$$.fragment,c),o=!0)},o(c){ee(a.$$.fragment,c),o=!1},d(c){c&&C(t),ze(a),l=!1,qr(d)}}}function Kd(e){let t,r,a,i;return a=new mp({props:{className:"size-5"}}),{c(){t=P("div"),r=P("div"),Te(a.$$.fragment),this.h()},l(s){t=U(s,"DIV",{class:!0});var n=V(t);r=U(n,"DIV",{class:!0});var o=V(r);Ie(a.$$.fragment,o),o.forEach(C),n.forEach(C),this.h()},h(){N(r,"class","m-auto"),N(t,"class","absolute top-0 bottom-0 left-0 right-0 flex")},m(s,n){de(s,t,n),A(t,r),Ce(a,r,null),i=!0},i(s){i||(Y(a.$$.fragment,s),i=!0)},o(s){ee(a.$$.fragment,s),i=!1},d(s){s&&C(t),ze(a)}}}function h0(e){let t,r,a,i,s,n=e[9].t("RK")+"",o,l,d,c,f,u,m,_=e[9].t("Model")+"",y,w,v,b,k,S,E,T=e[9].t("Rating")+"",I,D,R,L,se,J,F,W=e[9].t("Won")+"",O,q,X,te,oe,ne,G,ie=e[9].t("Lost")+"",re,M,B,Q,ve,we,ye=[],$e=new c0,Ue,Pe,Re,it;const bt=[_0,g0],je=[];function Ge(he,Me){return he[3]==="rating"?0:1}d=Ge(e),c=je[d]=bt[d](e);const qe=[v0,$0],et=[];function Et(he,Me){return he[3]==="name"?0:1}v=Et(e),b=et[v]=qe[v](e);const wt=[S0,k0],ht=[];function _e(he,Me){return he[3]==="rating"?0:1}R=_e(e),L=ht[R]=wt[R](e);const De=[C0,I0],Xe=[];function rt(he,Me){return he[3]==="won"?0:1}X=rt(e),te=Xe[X]=De[X](e);const ft=[D0,O0],at=[];function mt(he,Me){return he[3]==="lost"?0:1}B=mt(e),Q=at[B]=ft[B](e);let We=ur(e[8]);const Dt=he=>he[10].id;for(let he=0;he<We.length;he+=1){let Me=jd(e,We,he),tt=Dt(Me);$e.set(tt,ye[he]=Qd(tt,Me))}return{c(){t=P("table"),r=P("thead"),a=P("tr"),i=P("th"),s=P("div"),o=ke(n),l=ce(),c.c(),f=ce(),u=P("th"),m=P("div"),y=ke(_),w=ce(),b.c(),k=ce(),S=P("th"),E=P("div"),I=ke(T),D=ce(),L.c(),se=ce(),J=P("th"),F=P("div"),O=ke(W),q=ce(),te.c(),oe=ce(),ne=P("th"),G=P("div"),re=ke(ie),M=ce(),Q.c(),ve=ce(),we=P("tbody");for(let he=0;he<ye.length;he+=1)ye[he].c();this.h()},l(he){t=U(he,"TABLE",{class:!0});var Me=V(t);r=U(Me,"THEAD",{class:!0});var tt=V(r);a=U(tt,"TR",{class:!0});var nt=V(a);i=U(nt,"TH",{scope:!0,class:!0});var It=V(i);s=U(It,"DIV",{class:!0});var gt=V(s);o=Se(gt,n),l=fe(gt),c.l(gt),gt.forEach(C),It.forEach(C),f=fe(nt),u=U(nt,"TH",{scope:!0,class:!0});var Zt=V(u);m=U(Zt,"DIV",{class:!0});var cr=V(m);y=Se(cr,_),w=fe(cr),b.l(cr),cr.forEach(C),Zt.forEach(C),k=fe(nt),S=U(nt,"TH",{scope:!0,class:!0});var Kr=V(S);E=U(Kr,"DIV",{class:!0});var fr=V(E);I=Se(fr,T),D=fe(fr),L.l(fr),fr.forEach(C),Kr.forEach(C),se=fe(nt),J=U(nt,"TH",{scope:!0,class:!0});var hr=V(J);F=U(hr,"DIV",{class:!0});var Tr=V(F);O=Se(Tr,W),q=fe(Tr),te.l(Tr),Tr.forEach(C),hr.forEach(C),oe=fe(nt),ne=U(nt,"TH",{scope:!0,class:!0});var fa=V(ne);G=U(fa,"DIV",{class:!0});var Ir=V(G);re=Se(Ir,ie),M=fe(Ir),Q.l(Ir),Ir.forEach(C),fa.forEach(C),nt.forEach(C),tt.forEach(C),ve=fe(Me),we=U(Me,"TBODY",{class:!0});var ha=V(we);for(let Cr=0;Cr<ye.length;Cr+=1)ye[Cr].l(ha);ha.forEach(C),Me.forEach(C),this.h()},h(){N(s,"class","flex gap-1.5 items-center"),N(i,"scope","col"),N(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),N(m,"class","flex gap-1.5 items-center"),N(u,"scope","col"),N(u,"class","px-3 py-1.5 cursor-pointer select-none"),N(E,"class","flex gap-1.5 items-center justify-end"),N(S,"scope","col"),N(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),N(F,"class","flex gap-1.5 items-center justify-end"),N(J,"scope","col"),N(J,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),N(G,"class","flex gap-1.5 items-center justify-end"),N(ne,"scope","col"),N(ne,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),N(a,"class",""),N(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),N(we,"class",""),N(t,"class",Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(e[5]?"opacity-20":""))},m(he,Me){de(he,t,Me),A(t,r),A(r,a),A(a,i),A(i,s),A(s,o),A(s,l),je[d].m(s,null),A(a,f),A(a,u),A(u,m),A(m,y),A(m,w),et[v].m(m,null),A(a,k),A(a,S),A(S,E),A(E,I),A(E,D),ht[R].m(E,null),A(a,se),A(a,J),A(J,F),A(F,O),A(F,q),Xe[X].m(F,null),A(a,oe),A(a,ne),A(ne,G),A(G,re),A(G,M),at[B].m(G,null),A(t,ve),A(t,we);for(let tt=0;tt<ye.length;tt+=1)ye[tt]&&ye[tt].m(we,null);Pe=!0,Re||(it=[ct(i,"click",e[19]),ct(u,"click",e[20]),ct(S,"click",e[21]),ct(J,"click",e[22]),ct(ne,"click",e[23])],Re=!0)},p(he,Me){(!Pe||Me[0]&512)&&n!==(n=he[9].t("RK")+"")&&Ae(o,n);let tt=d;d=Ge(he),d===tt?je[d].p(he,Me):(Ze(),ee(je[tt],1,1,()=>{je[tt]=null}),Ye(),c=je[d],c?c.p(he,Me):(c=je[d]=bt[d](he),c.c()),Y(c,1),c.m(s,null)),(!Pe||Me[0]&512)&&_!==(_=he[9].t("Model")+"")&&Ae(y,_);let nt=v;v=Et(he),v===nt?et[v].p(he,Me):(Ze(),ee(et[nt],1,1,()=>{et[nt]=null}),Ye(),b=et[v],b?b.p(he,Me):(b=et[v]=qe[v](he),b.c()),Y(b,1),b.m(m,null)),(!Pe||Me[0]&512)&&T!==(T=he[9].t("Rating")+"")&&Ae(I,T);let It=R;R=_e(he),R===It?ht[R].p(he,Me):(Ze(),ee(ht[It],1,1,()=>{ht[It]=null}),Ye(),L=ht[R],L?L.p(he,Me):(L=ht[R]=wt[R](he),L.c()),Y(L,1),L.m(E,null)),(!Pe||Me[0]&512)&&W!==(W=he[9].t("Won")+"")&&Ae(O,W);let gt=X;X=rt(he),X===gt?Xe[X].p(he,Me):(Ze(),ee(Xe[gt],1,1,()=>{Xe[gt]=null}),Ye(),te=Xe[X],te?te.p(he,Me):(te=Xe[X]=De[X](he),te.c()),Y(te,1),te.m(F,null)),(!Pe||Me[0]&512)&&ie!==(ie=he[9].t("Lost")+"")&&Ae(re,ie);let Zt=B;B=mt(he),B===Zt?at[B].p(he,Me):(Ze(),ee(at[Zt],1,1,()=>{at[Zt]=null}),Ye(),Q=at[B],Q?Q.p(he,Me):(Q=at[B]=ft[B](he),Q.c()),Y(Q,1),Q.m(G,null)),Me[0]&8448&&(We=ur(he[8]),ye=cp(ye,Me,Dt,1,he,We,$e,we,_g,Qd,null,jd)),(!Pe||Me[0]&32&&Ue!==(Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(he[5]?"opacity-20":"")))&&N(t,"class",Ue)},i(he){Pe||(Y(c),Y(b),Y(L),Y(te),Y(Q),Pe=!0)},o(he){ee(c),ee(b),ee(L),ee(te),ee(Q),Pe=!1},d(he){he&&C(t),je[d].d(),et[v].d(),ht[R].d(),Xe[X].d(),at[B].d();for(let Me=0;Me<ye.length;Me+=1)ye[Me].d();Re=!1,qr(it)}}}function m0(e){let t,r=e[9].t("No models found")+"",a;return{c(){t=P("div"),a=ke(r),this.h()},l(i){t=U(i,"DIV",{class:!0});var s=V(t);a=Se(s,r),s.forEach(C),this.h()},h(){N(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s[0]&512&&r!==(r=i[9].t("No models found")+"")&&Ae(a,r)},i:ut,o:ut,d(i){i&&C(t)}}}function g0(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function _0(e){let t,r,a,i;const s=[b0,y0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function y0(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function b0(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function $0(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function v0(e){let t,r,a,i;const s=[x0,w0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function w0(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function x0(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function k0(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function S0(e){let t,r,a,i;const s=[T0,E0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function E0(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function T0(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function I0(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function C0(e){let t,r,a,i;const s=[A0,z0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function z0(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function A0(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function O0(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function D0(e){let t,r,a,i;const s=[N0,R0],n=[];function o(l,d){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function R0(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function N0(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function B0(e){let t,r=(e[10].stats.won/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.won+"",l;return{c(){t=P("span"),a=ke(r),i=ke("%"),s=ce(),n=P("span"),l=ke(o),this.h()},l(d){t=U(d,"SPAN",{class:!0});var c=V(t);a=Se(c,r),i=Se(c,"%"),c.forEach(C),s=fe(d),n=U(d,"SPAN",{class:!0});var f=V(n);l=Se(f,o),f.forEach(C),this.h()},h(){N(t,"class","hidden group-hover:inline"),N(n,"class","group-hover:hidden")},m(d,c){de(d,t,c),A(t,a),A(t,i),de(d,s,c),de(d,n,c),A(n,l)},p(d,c){c[0]&256&&r!==(r=(d[10].stats.won/d[10].stats.count*100).toFixed(1)+"")&&Ae(a,r),c[0]&256&&o!==(o=d[10].stats.won+"")&&Ae(l,o)},d(d){d&&(C(t),C(s),C(n))}}}function M0(e){let t;return{c(){t=ke("-")},l(r){t=Se(r,"-")},m(r,a){de(r,t,a)},p:ut,d(r){r&&C(t)}}}function P0(e){let t,r=(e[10].stats.lost/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.lost+"",l;return{c(){t=P("span"),a=ke(r),i=ke("%"),s=ce(),n=P("span"),l=ke(o),this.h()},l(d){t=U(d,"SPAN",{class:!0});var c=V(t);a=Se(c,r),i=Se(c,"%"),c.forEach(C),s=fe(d),n=U(d,"SPAN",{class:!0});var f=V(n);l=Se(f,o),f.forEach(C),this.h()},h(){N(t,"class","hidden group-hover:inline"),N(n,"class","group-hover:hidden")},m(d,c){de(d,t,c),A(t,a),A(t,i),de(d,s,c),de(d,n,c),A(n,l)},p(d,c){c[0]&256&&r!==(r=(d[10].stats.lost/d[10].stats.count*100).toFixed(1)+"")&&Ae(a,r),c[0]&256&&o!==(o=d[10].stats.lost+"")&&Ae(l,o)},d(d){d&&(C(t),C(s),C(n))}}}function U0(e){let t;return{c(){t=ke("-")},l(r){t=Se(r,"-")},m(r,a){de(r,t,a)},p:ut,d(r){r&&C(t)}}}function Qd(e,t){var ie;let r,a,i,s=(((ie=t[10])==null?void 0:ie.rating)!=="-"?t[38]+1:"-")+"",n,o,l,d,c,f,u,m,_,y,w=t[10].name+"",v,b,k,S=t[10].rating+"",E,T,I,D,R,L,se,J,F,W;function O(re,M){return re[10].stats.won==="-"?M0:B0}let q=O(t),X=q(t);function te(re,M){return re[10].stats.lost==="-"?U0:P0}let oe=te(t),ne=oe(t);function G(){return t[24](t[10])}return{key:e,first:null,c(){r=P("tr"),a=P("td"),i=P("div"),n=ke(s),o=ce(),l=P("td"),d=P("div"),c=P("div"),f=P("img"),_=ce(),y=P("div"),v=ke(w),b=ce(),k=P("td"),E=ke(S),T=ce(),I=P("td"),D=P("div"),X.c(),R=ce(),L=P("td"),se=P("div"),ne.c(),J=ce(),this.h()},l(re){r=U(re,"TR",{class:!0});var M=V(r);a=U(M,"TD",{class:!0});var B=V(a);i=U(B,"DIV",{class:!0});var Q=V(i);n=Se(Q,s),Q.forEach(C),B.forEach(C),o=fe(M),l=U(M,"TD",{class:!0});var ve=V(l);d=U(ve,"DIV",{class:!0});var we=V(d);c=U(we,"DIV",{class:!0});var ye=V(c);f=U(ye,"IMG",{src:!0,alt:!0,class:!0}),ye.forEach(C),_=fe(we),y=U(we,"DIV",{class:!0});var $e=V(y);v=Se($e,w),$e.forEach(C),we.forEach(C),ve.forEach(C),b=fe(M),k=U(M,"TD",{class:!0});var Ue=V(k);E=Se(Ue,S),Ue.forEach(C),T=fe(M),I=U(M,"TD",{class:!0});var Pe=V(I);D=U(Pe,"DIV",{class:!0});var Re=V(D);X.l(Re),Re.forEach(C),Pe.forEach(C),R=fe(M),L=U(M,"TD",{class:!0});var it=V(L);se=U(it,"DIV",{class:!0});var bt=V(se);ne.l(bt),bt.forEach(C),it.forEach(C),J=fe(M),M.forEach(C),this.h()},h(){var re,M,B;N(i,"class","line-clamp-1"),N(a,"class","px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit"),qa(f.src,u=((B=(M=(re=t[10])==null?void 0:re.info)==null?void 0:M.meta)==null?void 0:B.profile_image_url)??`${Ha}/favicon.png`)||N(f,"src",u),N(f,"alt",m=t[10].name),N(f,"class","size-5 rounded-full object-cover shrink-0"),N(c,"class","shrink-0"),N(y,"class","font-medium text-gray-800 dark:text-gray-200 pr-4"),N(d,"class","flex items-center gap-2"),N(l,"class","px-3 py-1.5 flex flex-col justify-center"),N(k,"class","px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max"),N(D,"class","w-10"),N(I,"class","px-3 py-1.5 text-right font-semibold text-green-500"),N(se,"class","w-10"),N(L,"class","px-3 py-1.5 text-right font-semibold text-red-500"),N(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"),this.first=r},m(re,M){de(re,r,M),A(r,a),A(a,i),A(i,n),A(r,o),A(r,l),A(l,d),A(d,c),A(c,f),A(d,_),A(d,y),A(y,v),A(r,b),A(r,k),A(k,E),A(r,T),A(r,I),A(I,D),X.m(D,null),A(r,R),A(r,L),A(L,se),ne.m(se,null),A(r,J),F||(W=ct(r,"click",G),F=!0)},p(re,M){var B,Q,ve,we;t=re,M[0]&256&&s!==(s=(((B=t[10])==null?void 0:B.rating)!=="-"?t[38]+1:"-")+"")&&Ae(n,s),M[0]&256&&!qa(f.src,u=((we=(ve=(Q=t[10])==null?void 0:Q.info)==null?void 0:ve.meta)==null?void 0:we.profile_image_url)??`${Ha}/favicon.png`)&&N(f,"src",u),M[0]&256&&m!==(m=t[10].name)&&N(f,"alt",m),M[0]&256&&w!==(w=t[10].name+"")&&Ae(v,w),M[0]&256&&S!==(S=t[10].rating+"")&&Ae(E,S),q===(q=O(t))&&X?X.p(t,M):(X.d(1),X=q(t),X&&(X.c(),X.m(D,null))),oe===(oe=te(t))&&ne?ne.p(t,M):(ne.d(1),ne=oe(t),ne&&(ne.c(),ne.m(se,null)))},d(re){re&&C(r),X.d(),ne.d(),F=!1,W()}}}function V0(e){let t,r,a,i,s,n,o=e[9].t("Leaderboard")+"",l,d,c,f,u,m=e[1].length+"",_,y,w,v,b,k,S,E,T,I,D,R,L,se,J=e[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"",F,W,O=e[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"",q,X;function te(M){e[16](M)}let oe={model:e[7],feedbacks:e[0],onClose:e[14]};e[6]!==void 0&&(oe.show=e[6]),t=new p0({props:oe}),Vr.push(()=>Fr(t,"show",te)),v=new jr({props:{content:e[9].t("Re-rank models by topic similarity"),$$slots:{default:[f0]},$$scope:{ctx:e}}});let ne=e[5]&&Kd();const G=[m0,h0],ie=[];function re(M,B){return(M[1]??[]).length===0?0:1}return E=re(e),T=ie[E]=G[E](e),{c(){Te(t.$$.fragment),a=ce(),i=P("div"),s=P("div"),n=P("div"),l=ke(o),d=ce(),c=P("div"),f=ce(),u=P("span"),_=ke(m),y=ce(),w=P("div"),Te(v.$$.fragment),b=ce(),k=P("div"),ne&&ne.c(),S=ce(),T.c(),I=ce(),D=P("div"),R=P("div"),L=P("div"),se=ke("ⓘ "),F=ke(J),W=ce(),q=ke(O),this.h()},l(M){Ie(t.$$.fragment,M),a=fe(M),i=U(M,"DIV",{class:!0});var B=V(i);s=U(B,"DIV",{class:!0});var Q=V(s);n=U(Q,"DIV",{class:!0});var ve=V(n);l=Se(ve,o),ve.forEach(C),d=fe(Q),c=U(Q,"DIV",{class:!0}),V(c).forEach(C),f=fe(Q),u=U(Q,"SPAN",{class:!0});var we=V(u);_=Se(we,m),we.forEach(C),Q.forEach(C),y=fe(B),w=U(B,"DIV",{class:!0});var ye=V(w);Ie(v.$$.fragment,ye),ye.forEach(C),B.forEach(C),b=fe(M),k=U(M,"DIV",{class:!0});var $e=V(k);ne&&ne.l($e),S=fe($e),T.l($e),$e.forEach(C),I=fe(M),D=U(M,"DIV",{class:!0});var Ue=V(D);R=U(Ue,"DIV",{class:!0});var Pe=V(R);L=U(Pe,"DIV",{class:!0});var Re=V(L);se=Se(Re,"ⓘ "),F=Se(Re,J),Re.forEach(C),W=fe(Pe),q=Se(Pe,O),Pe.forEach(C),Ue.forEach(C),this.h()},h(){N(n,"class","gap-1"),N(c,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),N(u,"class","text-lg font-medium text-gray-500 dark:text-gray-300 mr-1.5"),N(s,"class","flex md:self-center text-lg font-medium px-0.5 shrink-0 items-center"),N(w,"class","flex space-x-2"),N(i,"class","mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between"),N(k,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5"),N(L,"class","line-clamp-1"),N(R,"class","text-right"),N(D,"class","text-gray-500 text-xs mt-1.5 w-full flex justify-end")},m(M,B){Ce(t,M,B),de(M,a,B),de(M,i,B),A(i,s),A(s,n),A(n,l),A(s,d),A(s,c),A(s,f),A(s,u),A(u,_),A(i,y),A(i,w),Ce(v,w,null),de(M,b,B),de(M,k,B),ne&&ne.m(k,null),A(k,S),ie[E].m(k,null),de(M,I,B),de(M,D,B),A(D,R),A(R,L),A(L,se),A(L,F),A(R,W),A(R,q),X=!0},p(M,B){const Q={};B[0]&128&&(Q.model=M[7]),B[0]&1&&(Q.feedbacks=M[0]),!r&&B[0]&64&&(r=!0,Q.show=M[6],Wr(()=>r=!1)),t.$set(Q),(!X||B[0]&512)&&o!==(o=M[9].t("Leaderboard")+"")&&Ae(l,o),(!X||B[0]&2)&&m!==(m=M[1].length+"")&&Ae(_,m);const ve={};B[0]&512&&(ve.content=M[9].t("Re-rank models by topic similarity")),B[0]&516|B[1]&256&&(ve.$$scope={dirty:B,ctx:M}),v.$set(ve),M[5]?ne?B[0]&32&&Y(ne,1):(ne=Kd(),ne.c(),Y(ne,1),ne.m(k,S)):ne&&(Ze(),ee(ne,1,1,()=>{ne=null}),Ye());let we=E;E=re(M),E===we?ie[E].p(M,B):(Ze(),ee(ie[we],1,1,()=>{ie[we]=null}),Ye(),T=ie[E],T?T.p(M,B):(T=ie[E]=G[E](M),T.c()),Y(T,1),T.m(k,null)),(!X||B[0]&512)&&J!==(J=M[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"")&&Ae(F,J),(!X||B[0]&512)&&O!==(O=M[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"")&&Ae(q,O)},i(M){X||(Y(t.$$.fragment,M),Y(v.$$.fragment,M),Y(ne),Y(T),X=!0)},o(M){ee(t.$$.fragment,M),ee(v.$$.fragment,M),ee(ne),ee(T),X=!1},d(M){M&&(C(a),C(i),C(b),C(k),C(I),C(D)),ze(t,M),ze(v),ne&&ne.d(),ie[E].d()}}}const Zd="TaylorAI/bge-micro-v2";function W0(e,t,r){let a,i,s;lr(e,wg,re=>r(28,i=re)),bg.backends.onnx.wasm.wasmPaths="/wasm/";const n=Lr("i18n");lr(e,n,re=>r(9,s=re));let o=null,l=null,{feedbacks:d=[]}=t,c=[],f="",u=new Map,m=!0,_,y="rating",w="desc";function v(re){y===re?r(4,w=w==="asc"?"desc":"asc"):(r(3,y=re),r(4,w=re==="name"?"asc":"desc"))}let b=!1,k=null;const S=re=>{r(6,b=!0),r(7,k=re)},E=()=>{r(6,b=!1),r(7,k=null)},T=async(re=new Map)=>{const M=I(d,re);r(1,c=i.filter(B=>{var Q,ve;return(B==null?void 0:B.owned_by)!=="arena"&&(((ve=(Q=B==null?void 0:B.info)==null?void 0:Q.meta)==null?void 0:ve.hidden)??!1)!==!0}).map(B=>{const Q=M.get(B.id);return{...B,rating:Q?Math.round(Q.rating):"-",stats:{count:Q?Q.won+Q.lost:0,won:Q?Q.won.toString():"-",lost:Q?Q.lost.toString():"-"}}}).sort((B,Q)=>B.rating==="-"&&Q.rating!=="-"?1:Q.rating==="-"&&B.rating!=="-"?-1:B.rating!=="-"&&Q.rating!=="-"?Q.rating-B.rating:B.name.localeCompare(Q.name))),r(5,m=!1)};function I(re,M){const B=new Map,Q=32;function ve($e){return B.get($e)||{rating:1e3,won:0,lost:0}}function we($e,Ue,Pe){const Re=ve($e);Re.rating+=Ue,Pe===1?Re.won++:Pe===0&&Re.lost++,B.set($e,Re)}function ye($e,Ue,Pe,Re){const it=1/(1+Math.pow(10,(Ue-$e)/400));return Q*(Pe-it)*Re}return re.forEach($e=>{const Ue=$e.data.model_id,Pe=ve(Ue);let Re;switch($e.data.rating.toString()){case"1":Re=1;break;case"-1":Re=0;break;default:return}const it=f!==""?M.get($e.id)||0:1;($e.data.sibling_model_ids||[]).forEach(je=>{const Ge=ve(je),qe=ye(Pe.rating,Ge.rating,Re,it),et=ye(Ge.rating,Pe.rating,1-Re,it);we(Ue,qe,Re),we(je,et,1-Re)})}),B}const D=(re,M)=>{if(re.length!==M.length)throw new Error("Vectors must be the same length");let B=0,Q=0,ve=0;for(let we=0;we<re.length;we++)B+=re[we]*M[we],Q+=re[we]**2,ve+=M[we]**2;return Q=Math.sqrt(Q),ve=Math.sqrt(ve),Q===0||ve===0?0:B/(Q*ve)},R=(re,M)=>{let B=0;for(const Q of M.values()){const ve=D(re,Q);B=Math.max(B,ve)}return B},L=async()=>{window.tokenizer||(window.tokenizer=await $g.from_pretrained(Zd)),window.model||(window.model=await vg.from_pretrained(Zd)),o=window.tokenizer,r(10,l=window.model);const re=new Set(d.flatMap(M=>M.data.tags||[]));await J(Array.from(re))},se=async re=>{const M=await o(re);return(await l(M)).last_hidden_state.mean(1).ort_tensor.data},J=async re=>{const M=new Map;for(const B of re)u.has(B)||u.set(B,await se(B)),M.set(B,u.get(B));return M},F=async()=>{if(r(5,m=!0),f.trim()===""){T();return}clearTimeout(_),_=setTimeout(async()=>{const re=await se(f),M=new Map;for(const B of d){const Q=B.data.tags||[],ve=await J(Q),we=R(re,ve);M.set(B.id,we)}T(M)},1500)};pp(async()=>{T()});function W(re){b=re,r(6,b)}function O(){f=this.value,r(2,f)}const q=()=>{L()},X=()=>v("rating"),te=()=>v("name"),oe=()=>v("rating"),ne=()=>v("won"),G=()=>v("lost"),ie=re=>S(re);return e.$$set=re=>{"feedbacks"in re&&r(0,d=re.feedbacks)},e.$$.update=()=>{e.$$.dirty[0]&4&&F(),e.$$.dirty[0]&26&&r(8,a=[...c].sort((re,M)=>{let B,Q;return y==="name"?(B=re.name,Q=M.name,w==="asc"?B.localeCompare(Q):Q.localeCompare(B)):y==="rating"?(B=re.rating==="-"?-1/0:re.rating,Q=M.rating==="-"?-1/0:M.rating,w==="asc"?B-Q:Q-B):y==="won"?(B=re.stats.won==="-"?-1/0:Number(re.stats.won),Q=M.stats.won==="-"?-1/0:Number(M.stats.won),w==="asc"?B-Q:Q-B):y==="lost"?(B=re.stats.lost==="-"?-1/0:Number(re.stats.lost),Q=M.stats.lost==="-"?-1/0:Number(M.stats.lost),w==="asc"?B-Q:Q-B):0}))},[d,c,f,y,w,m,b,k,a,s,l,n,v,S,E,L,W,O,q,X,te,oe,ne,G,ie]}class L0 extends Hr{constructor(t){super(),Gr(this,t,W0,V0,Ur,{feedbacks:0},null,[-1,-1])}}function q0(e){let t;const r=e[4].default,a=pg(r,e,e[7],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),t=!0},p(i,s){a&&a.p&&(!t||s&128)&&cg(a,r,i,i[7],t?hg(r,i[7],s,null):fg(i[7]),null)},i(i){t||(Y(a,i),t=!0)},o(i){ee(a,i),t=!1},d(i){a&&a.d(i)}}}function H0(e){let t,r;return t=new jr({props:{content:e[1].t("More"),$$slots:{default:[q0]},$$scope:{ctx:e}}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&2&&(s.content=a[1].t("More")),i&128&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function G0(e){let t,r,a,i=e[1].t("Delete")+"",s,n;return t=new Mg({props:{strokeWidth:"2"}}),{c(){Te(t.$$.fragment),r=ce(),a=P("div"),s=ke(i),this.h()},l(o){Ie(t.$$.fragment,o),r=fe(o),a=U(o,"DIV",{class:!0});var l=V(a);s=Se(l,i),l.forEach(C),this.h()},h(){N(a,"class","flex items-center")},m(o,l){Ce(t,o,l),de(o,r,l),de(o,a,l),A(a,s),n=!0},p(o,l){(!n||l&2)&&i!==(i=o[1].t("Delete")+"")&&Ae(s,i)},i(o){n||(Y(t.$$.fragment,o),n=!0)},o(o){ee(t.$$.fragment,o),n=!1},d(o){o&&(C(r),C(a)),ze(t,o)}}}function F0(e){let t,r;return t=new Dg({props:{class:"flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",$$slots:{default:[G0]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&130&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function j0(e){let t,r,a;return r=new Rg({props:{class:"w-full max-w-[150px] rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",sideOffset:-2,side:"bottom",align:"start",transition:Ng,$$slots:{default:[F0]},$$scope:{ctx:e}}}),{c(){t=P("div"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"DIV",{slot:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"slot","content")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p(i,s){const n={};s&131&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function K0(e){let t,r,a;function i(n){e[6](n)}let s={$$slots:{content:[j0],default:[H0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new Bg({props:s}),Vr.push(()=>Fr(t,"show",i)),t.$on("change",Q0),{c(){Te(t.$$.fragment)},l(n){Ie(t.$$.fragment,n)},m(n,o){Ce(t,n,o),a=!0},p(n,[o]){const l={};o&131&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(Y(t.$$.fragment,n),a=!0)},o(n){ee(t.$$.fragment,n),a=!1},d(n){ze(t,n)}}}const Q0=e=>{};function Z0(e,t,r){let a,{$$slots:i={},$$scope:s}=t;const n=dg(),o=Lr("i18n");lr(e,o,f=>r(1,a=f));let l=!1;const d=()=>{n("delete"),r(0,l=!1)};function c(f){l=f,r(0,l)}return e.$$set=f=>{"$$scope"in f&&r(7,s=f.$$scope)},[l,a,n,o,i,d,c,s]}class Y0 extends Hr{constructor(t){super(),Gr(this,t,Z0,K0,Ur,{})}}function Yd(e,t,r){const a=e.slice();return a[10]=t[r],a}function fn(e){var i,s,n,o,l,d;const t=e.slice(),r=(s=(i=t[3])==null?void 0:i.meta)==null?void 0:s.message_id;t[13]=r;const a=(d=(l=(o=(n=t[3])==null?void 0:n.snapshot)==null?void 0:o.chat)==null?void 0:l.chat)==null?void 0:d.history.messages;return t[14]=a,t}function Xd(e){let t,r,a,i=e[4].t("Feedback Details")+"",s,n,o,l,d,c,f,u,m,_,y;l=new hp({props:{className:"size-5"}});const w=[J0,X0],v=[];function b(k,S){return k[2]?0:1}return f=b(e),u=v[f]=w[f](e),{c(){t=P("div"),r=P("div"),a=P("div"),s=ke(i),n=ce(),o=P("button"),Te(l.$$.fragment),d=ce(),c=P("div"),u.c(),this.h()},l(k){t=U(k,"DIV",{});var S=V(t);r=U(S,"DIV",{class:!0});var E=V(r);a=U(E,"DIV",{class:!0});var T=V(a);s=Se(T,i),T.forEach(C),n=fe(E),o=U(E,"BUTTON",{class:!0,"aria-label":!0});var I=V(o);Ie(l.$$.fragment,I),I.forEach(C),E.forEach(C),d=fe(S),c=U(S,"DIV",{class:!0});var D=V(c);u.l(D),D.forEach(C),S.forEach(C),this.h()},h(){N(a,"class","text-lg font-medium self-center"),N(o,"class","self-center"),N(o,"aria-label","Close"),N(r,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),N(c,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(k,S){de(k,t,S),A(t,r),A(r,a),A(a,s),A(r,n),A(r,o),Ce(l,o,null),A(t,d),A(t,c),v[f].m(c,null),m=!0,_||(y=ct(o,"click",e[6]),_=!0)},p(k,S){(!m||S&16)&&i!==(i=k[4].t("Feedback Details")+"")&&Ae(s,i);let E=f;f=b(k),f===E?v[f].p(k,S):(Ze(),ee(v[E],1,1,()=>{v[E]=null}),Ye(),u=v[f],u?u.p(k,S):(u=v[f]=w[f](k),u.c()),Y(u,1),u.m(c,null))},i(k){m||(Y(l.$$.fragment,k),Y(u),m=!0)},o(k){ee(l.$$.fragment,k),ee(u),m=!1},d(k){k&&C(t),ze(l),v[f].d(),_=!1,y()}}}function X0(e){let t,r,a;return r=new mp({props:{className:"size-5"}}),{c(){t=P("div"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"DIV",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","flex items-center justify-center w-full h-32")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function J0(e){var Q,ve,we,ye,$e,Ue,Pe,Re,it,bt,je;let t,r,a,i,s=e[4].t("Rating")+"",n,o,l,d,c=(((we=(ve=(Q=e[1])==null?void 0:Q.data)==null?void 0:ve.details)==null?void 0:we.rating)??"-")+"",f,u,m,_,y=e[4].t("Reason")+"",w,v,b,k,S=((($e=(ye=e[1])==null?void 0:ye.data)==null?void 0:$e.reason)||"-")+"",E,T,I,D,R=e[4].t("Comment")+"",L,se,J,F,W=(((Pe=(Ue=e[1])==null?void 0:Ue.data)==null?void 0:Pe.comment)||"-")+"",O,q,X,te,oe,ne=e[4].t("Close")+"",G,ie,re,M=e[3]&&Jd(fn(e)),B=((it=(Re=e[1])==null?void 0:Re.data)==null?void 0:it.tags)&&((je=(bt=e[1])==null?void 0:bt.data)==null?void 0:je.tags.length)&&rp(e);return{c(){t=P("div"),M&&M.c(),r=ce(),a=P("div"),i=P("div"),n=ke(s),o=ce(),l=P("div"),d=P("span"),f=ke(c),u=ce(),m=P("div"),_=P("div"),w=ke(y),v=ce(),b=P("div"),k=P("span"),E=ke(S),T=ce(),I=P("div"),D=P("div"),L=ke(R),se=ce(),J=P("div"),F=P("span"),O=ke(W),q=ce(),B&&B.c(),X=ce(),te=P("div"),oe=P("button"),G=ke(ne),this.h()},l(Ge){t=U(Ge,"DIV",{class:!0});var qe=V(t);M&&M.l(qe),r=fe(qe),a=U(qe,"DIV",{class:!0});var et=V(a);i=U(et,"DIV",{class:!0});var Et=V(i);n=Se(Et,s),Et.forEach(C),o=fe(et),l=U(et,"DIV",{class:!0});var wt=V(l);d=U(wt,"SPAN",{});var ht=V(d);f=Se(ht,c),ht.forEach(C),wt.forEach(C),et.forEach(C),u=fe(qe),m=U(qe,"DIV",{class:!0});var _e=V(m);_=U(_e,"DIV",{class:!0});var De=V(_);w=Se(De,y),De.forEach(C),v=fe(_e),b=U(_e,"DIV",{class:!0});var Xe=V(b);k=U(Xe,"SPAN",{});var rt=V(k);E=Se(rt,S),rt.forEach(C),Xe.forEach(C),_e.forEach(C),T=fe(qe),I=U(qe,"DIV",{class:!0});var ft=V(I);D=U(ft,"DIV",{class:!0});var at=V(D);L=Se(at,R),at.forEach(C),se=fe(ft),J=U(ft,"DIV",{class:!0});var mt=V(J);F=U(mt,"SPAN",{});var We=V(F);O=Se(We,W),We.forEach(C),mt.forEach(C),ft.forEach(C),q=fe(qe),B&&B.l(qe),X=fe(qe),te=U(qe,"DIV",{class:!0});var Dt=V(te);oe=U(Dt,"BUTTON",{class:!0,type:!0});var he=V(oe);G=Se(he,ne),he.forEach(C),Dt.forEach(C),qe.forEach(C),this.h()},h(){N(i,"class","mb-1 text-xs text-gray-500"),N(l,"class","flex-1 text-xs"),N(a,"class","flex flex-col w-full mb-2"),N(_,"class","mb-1 text-xs text-gray-500"),N(b,"class","flex-1 text-xs"),N(m,"class","flex flex-col w-full mb-2"),N(D,"class","mb-1 text-xs text-gray-500"),N(J,"class","flex-1 text-xs"),N(I,"class","flex flex-col w-full mb-2"),N(oe,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),N(oe,"type","button"),N(te,"class","flex justify-end pt-2"),N(t,"class","flex flex-col w-full")},m(Ge,qe){de(Ge,t,qe),M&&M.m(t,null),A(t,r),A(t,a),A(a,i),A(i,n),A(a,o),A(a,l),A(l,d),A(d,f),A(t,u),A(t,m),A(m,_),A(_,w),A(m,v),A(m,b),A(b,k),A(k,E),A(t,T),A(t,I),A(I,D),A(D,L),A(I,se),A(I,J),A(J,F),A(F,O),A(t,q),B&&B.m(t,null),A(t,X),A(t,te),A(te,oe),A(oe,G),ie||(re=ct(oe,"click",e[6]),ie=!0)},p(Ge,qe){var et,Et,wt,ht,_e,De,Xe,rt,ft,at,mt;Ge[3]?M?M.p(fn(Ge),qe):(M=Jd(fn(Ge)),M.c(),M.m(t,r)):M&&(M.d(1),M=null),qe&16&&s!==(s=Ge[4].t("Rating")+"")&&Ae(n,s),qe&2&&c!==(c=(((wt=(Et=(et=Ge[1])==null?void 0:et.data)==null?void 0:Et.details)==null?void 0:wt.rating)??"-")+"")&&Ae(f,c),qe&16&&y!==(y=Ge[4].t("Reason")+"")&&Ae(w,y),qe&2&&S!==(S=(((_e=(ht=Ge[1])==null?void 0:ht.data)==null?void 0:_e.reason)||"-")+"")&&Ae(E,S),qe&16&&R!==(R=Ge[4].t("Comment")+"")&&Ae(L,R),qe&2&&W!==(W=(((Xe=(De=Ge[1])==null?void 0:De.data)==null?void 0:Xe.comment)||"-")+"")&&Ae(O,W),(ft=(rt=Ge[1])==null?void 0:rt.data)!=null&&ft.tags&&((mt=(at=Ge[1])==null?void 0:at.data)!=null&&mt.tags.length)?B?B.p(Ge,qe):(B=rp(Ge),B.c(),B.m(t,X)):B&&(B.d(1),B=null),qe&16&&ne!==(ne=Ge[4].t("Close")+"")&&Ae(G,ne)},i:ut,o:ut,d(Ge){Ge&&C(t),M&&M.d(),B&&B.d(),ie=!1,re()}}}function Jd(e){var s;let t,r,a=e[14][(s=e[14][e[13]])==null?void 0:s.parentId]&&ep(e),i=e[14][e[13]]&&tp(e);return{c(){a&&a.c(),t=ce(),i&&i.c(),r=Kt()},l(n){a&&a.l(n),t=fe(n),i&&i.l(n),r=Kt()},m(n,o){a&&a.m(n,o),de(n,t,o),i&&i.m(n,o),de(n,r,o)},p(n,o){var l;n[14][(l=n[14][n[13]])==null?void 0:l.parentId]?a?a.p(n,o):(a=ep(n),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),n[14][n[13]]?i?i.p(n,o):(i=tp(n),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(n){n&&(C(t),C(r)),a&&a.d(n),i&&i.d(n)}}}function ep(e){var c,f;let t,r,a=e[4].t("Prompt")+"",i,s,n,o,l=(((f=e[14][(c=e[14][e[13]])==null?void 0:c.parentId])==null?void 0:f.content)||"-")+"",d;return{c(){t=P("div"),r=P("div"),i=ke(a),s=ce(),n=P("div"),o=P("span"),d=ke(l),this.h()},l(u){t=U(u,"DIV",{class:!0});var m=V(t);r=U(m,"DIV",{class:!0});var _=V(r);i=Se(_,a),_.forEach(C),s=fe(m),n=U(m,"DIV",{class:!0});var y=V(n);o=U(y,"SPAN",{});var w=V(o);d=Se(w,l),w.forEach(C),y.forEach(C),m.forEach(C),this.h()},h(){N(r,"class","mb-1 text-xs text-gray-500"),N(n,"class","flex-1 text-xs whitespace-pre-line break-words"),N(t,"class","flex flex-col w-full mb-2")},m(u,m){de(u,t,m),A(t,r),A(r,i),A(t,s),A(t,n),A(n,o),A(o,d)},p(u,m){var _,y;m&16&&a!==(a=u[4].t("Prompt")+"")&&Ae(i,a),m&8&&l!==(l=(((y=u[14][(_=u[14][u[13]])==null?void 0:_.parentId])==null?void 0:y.content)||"-")+"")&&Ae(d,l)},d(u){u&&C(t)}}}function tp(e){var c;let t,r,a=e[4].t("Response")+"",i,s,n,o,l=(((c=e[14][e[13]])==null?void 0:c.content)||"-")+"",d;return{c(){t=P("div"),r=P("div"),i=ke(a),s=ce(),n=P("div"),o=P("span"),d=ke(l),this.h()},l(f){t=U(f,"DIV",{class:!0});var u=V(t);r=U(u,"DIV",{class:!0});var m=V(r);i=Se(m,a),m.forEach(C),s=fe(u),n=U(u,"DIV",{class:!0});var _=V(n);o=U(_,"SPAN",{});var y=V(o);d=Se(y,l),y.forEach(C),_.forEach(C),u.forEach(C),this.h()},h(){N(r,"class","mb-1 text-xs text-gray-500"),N(n,"class","flex-1 text-xs whitespace-pre-line break-words max-h-32 overflow-y-auto"),N(t,"class","flex flex-col w-full mb-2")},m(f,u){de(f,t,u),A(t,r),A(r,i),A(t,s),A(t,n),A(n,o),A(o,d)},p(f,u){var m;u&16&&a!==(a=f[4].t("Response")+"")&&Ae(i,a),u&8&&l!==(l=(((m=f[14][f[13]])==null?void 0:m.content)||"-")+"")&&Ae(d,l)},d(f){f&&C(t)}}}function rp(e){var s,n;let t,r,a=ur((n=(s=e[1])==null?void 0:s.data)==null?void 0:n.tags),i=[];for(let o=0;o<a.length;o+=1)i[o]=ap(Yd(e,a,o));return{c(){t=P("div"),r=P("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){t=U(o,"DIV",{class:!0});var l=V(t);r=U(l,"DIV",{class:!0});var d=V(r);for(let c=0;c<i.length;c+=1)i[c].l(d);d.forEach(C),l.forEach(C),this.h()},h(){N(r,"class","flex flex-wrap gap-1 mt-1"),N(t,"class","mb-2 -mx-1")},m(o,l){de(o,t,l),A(t,r);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(r,null)},p(o,l){var d,c;if(l&2){a=ur((c=(d=o[1])==null?void 0:d.data)==null?void 0:c.tags);let f;for(f=0;f<a.length;f+=1){const u=Yd(o,a,f);i[f]?i[f].p(u,l):(i[f]=ap(u),i[f].c(),i[f].m(r,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=a.length}},d(o){o&&C(t),dp(i,o)}}}function ap(e){let t,r=e[10]+"",a;return{c(){t=P("span"),a=ke(r),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);a=Se(s,r),s.forEach(C),this.h()},h(){N(t,"class","px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-[9px]")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s&2&&r!==(r=i[10]+"")&&Ae(a,r)},d(i){i&&C(t)}}}function ey(e){let t,r,a=e[1]&&Xd(e);return{c(){a&&a.c(),t=Kt()},l(i){a&&a.l(i),t=Kt()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,s){i[1]?a?(a.p(i,s),s&2&&Y(a,1)):(a=Xd(i),a.c(),Y(a,1),a.m(t.parentNode,t)):a&&(Ze(),ee(a,1,1,()=>{a=null}),Ye())},i(i){r||(Y(a),r=!0)},o(i){ee(a),r=!1},d(i){i&&C(t),a&&a.d(i)}}}function ty(e){let t,r,a;function i(n){e[8](n)}let s={size:"sm",$$slots:{default:[ey]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new fp({props:s}),Vr.push(()=>Fr(t,"show",i)),{c(){Te(t.$$.fragment)},l(n){Ie(t.$$.fragment,n)},m(n,o){Ce(t,n,o),a=!0},p(n,[o]){const l={};o&32798&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(Y(t.$$.fragment,n),a=!0)},o(n){ee(t.$$.fragment,n),a=!1},d(n){ze(t,n)}}}function ry(e,t,r){let a;const i=Lr("i18n");lr(e,i,m=>r(4,a=m));let{show:s=!1}=t,{selectedFeedback:n=null}=t,{onClose:o=()=>{}}=t,l=!1,d=null;const c=()=>{r(0,s=!1),o()},f=async()=>{r(2,l=!1),r(3,d=null),n&&r(3,d=await Eg(localStorage.token,n.id).catch(m=>null)),r(2,l=!0)};function u(m){s=m,r(0,s)}return e.$$set=m=>{"show"in m&&r(0,s=m.show),"selectedFeedback"in m&&r(1,n=m.selectedFeedback),"onClose"in m&&r(7,o=m.onClose)},e.$$.update=()=>{e.$$.dirty&1&&s&&f()},[s,n,l,d,a,i,c,o,u]}class ay extends Hr{constructor(t){super(),Gr(this,t,ry,ty,Ur,{show:0,selectedFeedback:1,onClose:7})}}function ip(e,t,r){const a=e.slice();return a[27]=t[r],a}function np(e){let t,r,a;return r=new jr({props:{content:e[7].t("Export"),$$slots:{default:[iy]},$$scope:{ctx:e}}}),{c(){t=P("div"),Te(r.$$.fragment)},l(i){t=U(i,"DIV",{});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C)},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p(i,s){const n={};s&128&&(n.content=i[7].t("Export")),s&1073741824&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function iy(e){let t,r,a,i,s;return r=new zg({props:{className:"size-3"}}),{c(){t=P("button"),Te(r.$$.fragment),this.h()},l(n){t=U(n,"BUTTON",{class:!0});var o=V(t);Ie(r.$$.fragment,o),o.forEach(C),this.h()},h(){N(t,"class","p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1")},m(n,o){de(n,t,o),Ce(r,t,null),a=!0,i||(s=ct(t,"click",e[17]),i=!0)},p:ut,i(n){a||(Y(r.$$.fragment,n),a=!0)},o(n){ee(r.$$.fragment,n),a=!1},d(n){n&&C(t),ze(r),i=!1,s()}}}function ny(e){let t,r,a,i,s,n=e[7].t("User")+"",o,l,d,c,f,u,m,_=e[7].t("Models")+"",y,w,v,b,k,S,E,T=e[7].t("Result")+"",I,D,R,L,se,J,F,W=e[7].t("Updated At")+"",O,q,X,te,oe,ne,G="",ie,re,M=[],B=new Map,Q,ve,we;const ye=[ly,oy],$e=[];function Ue(_e,De){return _e[2]==="user"?0:1}d=Ue(e),c=$e[d]=ye[d](e);const Pe=[cy,py],Re=[];function it(_e,De){return _e[2]==="model_id"?0:1}v=it(e),b=Re[v]=Pe[v](e);const bt=[gy,my],je=[];function Ge(_e,De){return _e[2]==="rating"?0:1}R=Ge(e),L=je[R]=bt[R](e);const qe=[$y,by],et=[];function Et(_e,De){return _e[2]==="updated_at"?0:1}X=Et(e),te=et[X]=qe[X](e);let wt=ur(e[6]);const ht=_e=>_e[27].id;for(let _e=0;_e<wt.length;_e+=1){let De=ip(e,wt,_e),Xe=ht(De);B.set(Xe,M[_e]=sp(Xe,De))}return{c(){t=P("table"),r=P("thead"),a=P("tr"),i=P("th"),s=P("div"),o=ke(n),l=ce(),c.c(),f=ce(),u=P("th"),m=P("div"),y=ke(_),w=ce(),b.c(),k=ce(),S=P("th"),E=P("div"),I=ke(T),D=ce(),L.c(),se=ce(),J=P("th"),F=P("div"),O=ke(W),q=ce(),te.c(),oe=ce(),ne=P("th"),ne.innerHTML=G,ie=ce(),re=P("tbody");for(let _e=0;_e<M.length;_e+=1)M[_e].c();this.h()},l(_e){t=U(_e,"TABLE",{class:!0});var De=V(t);r=U(De,"THEAD",{class:!0});var Xe=V(r);a=U(Xe,"TR",{class:!0});var rt=V(a);i=U(rt,"TH",{scope:!0,class:!0});var ft=V(i);s=U(ft,"DIV",{class:!0});var at=V(s);o=Se(at,n),l=fe(at),c.l(at),at.forEach(C),ft.forEach(C),f=fe(rt),u=U(rt,"TH",{scope:!0,class:!0});var mt=V(u);m=U(mt,"DIV",{class:!0});var We=V(m);y=Se(We,_),w=fe(We),b.l(We),We.forEach(C),mt.forEach(C),k=fe(rt),S=U(rt,"TH",{scope:!0,class:!0});var Dt=V(S);E=U(Dt,"DIV",{class:!0});var he=V(E);I=Se(he,T),D=fe(he),L.l(he),he.forEach(C),Dt.forEach(C),se=fe(rt),J=U(rt,"TH",{scope:!0,class:!0});var Me=V(J);F=U(Me,"DIV",{class:!0});var tt=V(F);O=Se(tt,W),q=fe(tt),te.l(tt),tt.forEach(C),Me.forEach(C),oe=fe(rt),ne=U(rt,"TH",{scope:!0,class:!0,"data-svelte-h":!0}),La(ne)!=="svelte-twvnjj"&&(ne.innerHTML=G),rt.forEach(C),Xe.forEach(C),ie=fe(De),re=U(De,"TBODY",{class:!0});var nt=V(re);for(let It=0;It<M.length;It+=1)M[It].l(nt);nt.forEach(C),De.forEach(C),this.h()},h(){N(s,"class","flex gap-1.5 items-center justify-end"),N(i,"scope","col"),N(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),N(m,"class","flex gap-1.5 items-center"),N(u,"scope","col"),N(u,"class","px-3 pr-1.5 cursor-pointer select-none"),N(E,"class","flex gap-1.5 items-center justify-end"),N(S,"scope","col"),N(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),N(F,"class","flex gap-1.5 items-center justify-end"),N(J,"scope","col"),N(J,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),N(ne,"scope","col"),N(ne,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),N(a,"class",""),N(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),N(re,"class",""),N(t,"class","w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded-sm")},m(_e,De){de(_e,t,De),A(t,r),A(r,a),A(a,i),A(i,s),A(s,o),A(s,l),$e[d].m(s,null),A(a,f),A(a,u),A(u,m),A(m,y),A(m,w),Re[v].m(m,null),A(a,k),A(a,S),A(S,E),A(E,I),A(E,D),je[R].m(E,null),A(a,se),A(a,J),A(J,F),A(F,O),A(F,q),et[X].m(F,null),A(a,oe),A(a,ne),A(t,ie),A(t,re);for(let Xe=0;Xe<M.length;Xe+=1)M[Xe]&&M[Xe].m(re,null);Q=!0,ve||(we=[ct(i,"click",e[18]),ct(u,"click",e[19]),ct(S,"click",e[20]),ct(J,"click",e[21])],ve=!0)},p(_e,De){(!Q||De&128)&&n!==(n=_e[7].t("User")+"")&&Ae(o,n);let Xe=d;d=Ue(_e),d===Xe?$e[d].p(_e,De):(Ze(),ee($e[Xe],1,1,()=>{$e[Xe]=null}),Ye(),c=$e[d],c?c.p(_e,De):(c=$e[d]=ye[d](_e),c.c()),Y(c,1),c.m(s,null)),(!Q||De&128)&&_!==(_=_e[7].t("Models")+"")&&Ae(y,_);let rt=v;v=it(_e),v===rt?Re[v].p(_e,De):(Ze(),ee(Re[rt],1,1,()=>{Re[rt]=null}),Ye(),b=Re[v],b?b.p(_e,De):(b=Re[v]=Pe[v](_e),b.c()),Y(b,1),b.m(m,null)),(!Q||De&128)&&T!==(T=_e[7].t("Result")+"")&&Ae(I,T);let ft=R;R=Ge(_e),R===ft?je[R].p(_e,De):(Ze(),ee(je[ft],1,1,()=>{je[ft]=null}),Ye(),L=je[R],L?L.p(_e,De):(L=je[R]=bt[R](_e),L.c()),Y(L,1),L.m(E,null)),(!Q||De&128)&&W!==(W=_e[7].t("Updated At")+"")&&Ae(O,W);let at=X;X=Et(_e),X===at?et[X].p(_e,De):(Ze(),ee(et[at],1,1,()=>{et[at]=null}),Ye(),te=et[X],te?te.p(_e,De):(te=et[X]=qe[X](_e),te.c()),Y(te,1),te.m(F,null)),De&5312&&(wt=ur(_e[6]),Ze(),M=cp(M,De,ht,1,_e,wt,B,re,yg,sp,null,ip),Ye())},i(_e){if(!Q){Y(c),Y(b),Y(L),Y(te);for(let De=0;De<wt.length;De+=1)Y(M[De]);Q=!0}},o(_e){ee(c),ee(b),ee(L),ee(te);for(let De=0;De<M.length;De+=1)ee(M[De]);Q=!1},d(_e){_e&&C(t),$e[d].d(),Re[v].d(),je[R].d(),et[X].d();for(let De=0;De<M.length;De+=1)M[De].d();ve=!1,qr(we)}}}function sy(e){let t,r=e[7].t("No feedbacks found")+"",a;return{c(){t=P("div"),a=ke(r),this.h()},l(i){t=U(i,"DIV",{class:!0});var s=V(t);a=Se(s,r),s.forEach(C),this.h()},h(){N(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s&128&&r!==(r=i[7].t("No feedbacks found")+"")&&Ae(a,r)},i:ut,o:ut,d(i){i&&C(t)}}}function oy(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function ly(e){let t,r,a,i;const s=[dy,uy],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function uy(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function dy(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function py(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function cy(e){let t,r,a,i;const s=[hy,fy],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function fy(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function hy(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function my(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function gy(e){let t,r,a,i;const s=[yy,_y],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function _y(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function yy(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function by(e){let t,r,a;return r=new vt({props:{className:"size-2"}}),{c(){t=P("span"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"SPAN",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function $y(e){let t,r,a,i;const s=[wy,vy],n=[];function o(l,d){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=P("span"),a.c(),this.h()},l(l){t=U(l,"SPAN",{class:!0});var d=V(t);a.l(d),d.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,d){de(l,t,d),n[r].m(t,null),i=!0},p(l,d){let c=r;r=o(l),r!==c&&(Ze(),ee(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),Y(a,1),a.m(t,null))},i(l){i||(Y(a),i=!0)},o(l){ee(a),i=!1},d(l){l&&C(t),n[r].d()}}}function vy(e){let t,r;return t=new er({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function wy(e){let t,r;return t=new vt({props:{className:"size-2"}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function xy(e){let t,r,a,i;return{c(){t=P("div"),r=P("img"),this.h()},l(s){t=U(s,"DIV",{class:!0});var n=V(t);r=U(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(C),this.h()},h(){var s,n,o,l;qa(r.src,a=((n=(s=e[27])==null?void 0:s.user)==null?void 0:n.profile_image_url)??`${Ha}/user.png`)||N(r,"src",a),N(r,"alt",i=(l=(o=e[27])==null?void 0:o.user)==null?void 0:l.name),N(r,"class","size-5 rounded-full object-cover shrink-0"),N(t,"class","shrink-0")},m(s,n){de(s,t,n),A(t,r)},p(s,n){var o,l,d,c;n&64&&!qa(r.src,a=((l=(o=s[27])==null?void 0:o.user)==null?void 0:l.profile_image_url)??`${Ha}/user.png`)&&N(r,"src",a),n&64&&i!==(i=(c=(d=s[27])==null?void 0:d.user)==null?void 0:c.name)&&N(r,"alt",i)},d(s){s&&C(t)}}}function ky(e){var i;let t,r=((i=e[27].data)==null?void 0:i.model_id)+"",a;return{c(){t=P("div"),a=ke(r),this.h()},l(s){t=U(s,"DIV",{class:!0});var n=V(t);a=Se(n,r),n.forEach(C),this.h()},h(){N(t,"class","text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5")},m(s,n){de(s,t,n),A(t,a)},p(s,n){var o;n&64&&r!==(r=((o=s[27].data)==null?void 0:o.model_id)+"")&&Ae(a,r)},i:ut,o:ut,d(s){s&&C(t)}}}function Sy(e){var o;let t,r=((o=e[27].data)==null?void 0:o.model_id)+"",a,i,s,n;return s=new jr({props:{content:e[27].data.sibling_model_ids.join(", "),$$slots:{default:[Iy]},$$scope:{ctx:e}}}),{c(){t=P("div"),a=ke(r),i=ce(),Te(s.$$.fragment),this.h()},l(l){t=U(l,"DIV",{class:!0});var d=V(t);a=Se(d,r),d.forEach(C),i=fe(l),Ie(s.$$.fragment,l),this.h()},h(){N(t,"class","font-semibold text-gray-600 dark:text-gray-400 flex-1")},m(l,d){de(l,t,d),A(t,a),de(l,i,d),Ce(s,l,d),n=!0},p(l,d){var f;(!n||d&64)&&r!==(r=((f=l[27].data)==null?void 0:f.model_id)+"")&&Ae(a,r);const c={};d&64&&(c.content=l[27].data.sibling_model_ids.join(", ")),d&1073742016&&(c.$$scope={dirty:d,ctx:l}),s.$set(c)},i(l){n||(Y(s.$$.fragment,l),n=!0)},o(l){ee(s.$$.fragment,l),n=!1},d(l){l&&(C(t),C(i)),ze(s,l)}}}function Ey(e){let t=e[27].data.sibling_model_ids.join(", ")+"",r;return{c(){r=ke(t)},l(a){r=Se(a,t)},m(a,i){de(a,r,i)},p(a,i){i&64&&t!==(t=a[27].data.sibling_model_ids.join(", ")+"")&&Ae(r,t)},d(a){a&&C(r)}}}function Ty(e){let t=e[27].data.sibling_model_ids.slice(0,2).join(", ")+"",r,a,i=e[7].t("and {{COUNT}} more",{COUNT:e[27].data.sibling_model_ids.length-2})+"",s;return{c(){r=ke(t),a=ke(", "),s=ke(i)},l(n){r=Se(n,t),a=Se(n,", "),s=Se(n,i)},m(n,o){de(n,r,o),de(n,a,o),de(n,s,o)},p(n,o){o&64&&t!==(t=n[27].data.sibling_model_ids.slice(0,2).join(", ")+"")&&Ae(r,t),o&192&&i!==(i=n[7].t("and {{COUNT}} more",{COUNT:n[27].data.sibling_model_ids.length-2})+"")&&Ae(s,i)},d(n){n&&(C(r),C(a),C(s))}}}function Iy(e){let t;function r(s,n){return s[27].data.sibling_model_ids.length>2?Ty:Ey}let a=r(e),i=a(e);return{c(){t=P("div"),i.c(),this.h()},l(s){t=U(s,"DIV",{class:!0});var n=V(t);i.l(n),n.forEach(C),this.h()},h(){N(t,"class","text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1")},m(s,n){de(s,t,n),i.m(t,null)},p(s,n){a===(a=r(s))&&i?i.p(s,n):(i.d(1),i=a(s),i&&(i.c(),i.m(t,null)))},d(s){s&&C(t),i.d()}}}function Cy(e){let t,r;return t=new Cn({props:{type:"error",content:e[7].t("Lost")}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Lost")),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function zy(e){let t,r;return t=new Cn({props:{type:"muted",content:e[7].t("Draw")}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Draw")),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function Ay(e){let t,r;return t=new Cn({props:{type:"info",content:e[7].t("Won")}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Won")),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function Oy(e){let t,r,a;return r=new Pg({}),{c(){t=P("button"),Te(r.$$.fragment),this.h()},l(i){t=U(i,"BUTTON",{class:!0});var s=V(t);Ie(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl")},m(i,s){de(i,t,s),Ce(r,t,null),a=!0},p:ut,i(i){a||(Y(r.$$.fragment,i),a=!0)},o(i){ee(r.$$.fragment,i),a=!1},d(i){i&&C(t),ze(r)}}}function sp(e,t){var re,M;let r,a,i,s,n,o,l,d,c,f,u,m,_,y,w,v,b,k,S,E,T=hn(t[27].updated_at*1e3).fromNow()+"",I,D,R,L,se,J,F,W;s=new jr({props:{content:(M=(re=t[27])==null?void 0:re.user)==null?void 0:M.name,$$slots:{default:[xy]},$$scope:{ctx:t}}});const O=[Sy,ky],q=[];function X(B,Q){var ve;return(ve=B[27].data)!=null&&ve.sibling_model_ids?0:1}c=X(t),f=q[c]=O[c](t);const te=[Ay,zy,Cy],oe=[];function ne(B,Q){return Q&64&&(y=null),Q&64&&(w=null),Q&64&&(v=null),y==null&&(y=B[27].data.rating.toString()==="1"),y?0:(w==null&&(w=B[27].data.rating.toString()==="0"),w?1:(v==null&&(v=B[27].data.rating.toString()==="-1"),v?2:-1))}~(b=ne(t,-1))&&(k=oe[b]=te[b](t));function G(...B){return t[22](t[27],...B)}L=new Y0({props:{$$slots:{default:[Oy]},$$scope:{ctx:t}}}),L.$on("delete",G);function ie(){return t[23](t[27])}return{key:e,first:null,c(){r=P("tr"),a=P("td"),i=P("div"),Te(s.$$.fragment),n=ce(),o=P("td"),l=P("div"),d=P("div"),f.c(),u=ce(),m=P("td"),_=P("div"),k&&k.c(),S=ce(),E=P("td"),I=ke(T),D=ce(),R=P("td"),Te(L.$$.fragment),se=ce(),this.h()},l(B){r=U(B,"TR",{class:!0});var Q=V(r);a=U(Q,"TD",{class:!0});var ve=V(a);i=U(ve,"DIV",{class:!0});var we=V(i);Ie(s.$$.fragment,we),we.forEach(C),ve.forEach(C),n=fe(Q),o=U(Q,"TD",{class:!0});var ye=V(o);l=U(ye,"DIV",{class:!0});var $e=V(l);d=U($e,"DIV",{class:!0});var Ue=V(d);f.l(Ue),Ue.forEach(C),$e.forEach(C),ye.forEach(C),u=fe(Q),m=U(Q,"TD",{class:!0});var Pe=V(m);_=U(Pe,"DIV",{class:!0});var Re=V(_);k&&k.l(Re),Re.forEach(C),Pe.forEach(C),S=fe(Q),E=U(Q,"TD",{class:!0});var it=V(E);I=Se(it,T),it.forEach(C),D=fe(Q),R=U(Q,"TD",{class:!0});var bt=V(R);Ie(L.$$.fragment,bt),bt.forEach(C),se=fe(Q),Q.forEach(C),this.h()},h(){N(i,"class","flex justify-center"),N(a,"class","py-0.5 text-right font-semibold"),N(d,"class","flex flex-col h-full"),N(l,"class","flex flex-col items-start gap-0.5 h-full"),N(o,"class","py-1 pl-3 flex flex-col"),N(_,"class","flex justify-end"),N(m,"class","px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max"),N(E,"class","px-3 py-1 text-right font-medium"),N(R,"class","px-3 py-1 text-right font-semibold"),N(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"),this.first=r},m(B,Q){de(B,r,Q),A(r,a),A(a,i),Ce(s,i,null),A(r,n),A(r,o),A(o,l),A(l,d),q[c].m(d,null),A(r,u),A(r,m),A(m,_),~b&&oe[b].m(_,null),A(r,S),A(r,E),A(E,I),A(r,D),A(r,R),Ce(L,R,null),A(r,se),J=!0,F||(W=[ct(R,"click",Ny),ct(r,"click",ie)],F=!0)},p(B,Q){var Ue,Pe;t=B;const ve={};Q&64&&(ve.content=(Pe=(Ue=t[27])==null?void 0:Ue.user)==null?void 0:Pe.name),Q&1073741888&&(ve.$$scope={dirty:Q,ctx:t}),s.$set(ve);let we=c;c=X(t),c===we?q[c].p(t,Q):(Ze(),ee(q[we],1,1,()=>{q[we]=null}),Ye(),f=q[c],f?f.p(t,Q):(f=q[c]=O[c](t),f.c()),Y(f,1),f.m(d,null));let ye=b;b=ne(t,Q),b===ye?~b&&oe[b].p(t,Q):(k&&(Ze(),ee(oe[ye],1,1,()=>{oe[ye]=null}),Ye()),~b?(k=oe[b],k?k.p(t,Q):(k=oe[b]=te[b](t),k.c()),Y(k,1),k.m(_,null)):k=null),(!J||Q&64)&&T!==(T=hn(t[27].updated_at*1e3).fromNow()+"")&&Ae(I,T);const $e={};Q&1073741824&&($e.$$scope={dirty:Q,ctx:t}),L.$set($e)},i(B){J||(Y(s.$$.fragment,B),Y(f),Y(k),Y(L.$$.fragment,B),J=!0)},o(B){ee(s.$$.fragment,B),ee(f),ee(k),ee(L.$$.fragment,B),J=!1},d(B){B&&C(r),ze(s),q[c].d(),~b&&oe[b].d(),ze(L),F=!1,qr(W)}}}function op(e){let t,r,a=e[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"",i,s,n,o,l;return o=new jr({props:{content:e[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included."),$$slots:{default:[Dy]},$$scope:{ctx:e}}}),{c(){t=P("div"),r=P("div"),i=ke(a),s=ce(),n=P("div"),Te(o.$$.fragment),this.h()},l(d){t=U(d,"DIV",{class:!0});var c=V(t);r=U(c,"DIV",{class:!0});var f=V(r);i=Se(f,a),f.forEach(C),s=fe(c),n=U(c,"DIV",{class:!0});var u=V(n);Ie(o.$$.fragment,u),u.forEach(C),c.forEach(C),this.h()},h(){N(r,"class","line-clamp-1 text-gray-500 text-xs"),N(n,"class","flex space-x-1 ml-auto"),N(t,"class","flex flex-col justify-end w-full text-right gap-1")},m(d,c){de(d,t,c),A(t,r),A(r,i),A(t,s),A(t,n),Ce(o,n,null),l=!0},p(d,c){(!l||c&128)&&a!==(a=d[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"")&&Ae(i,a);const f={};c&128&&(f.content=d[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included.")),c&1073741952&&(f.$$scope={dirty:c,ctx:d}),o.$set(f)},i(d){l||(Y(o.$$.fragment,d),l=!0)},o(d){ee(o.$$.fragment,d),l=!1},d(d){d&&C(t),ze(o)}}}function Dy(e){let t,r,a=e[7].t("Share to Open WebUI Community")+"",i,s,n,o,l,d,c;return o=new Ag({props:{className:"size-3",strokeWidth:"3"}}),{c(){t=P("button"),r=P("div"),i=ke(a),s=ce(),n=P("div"),Te(o.$$.fragment),this.h()},l(f){t=U(f,"BUTTON",{class:!0});var u=V(t);r=U(u,"DIV",{class:!0});var m=V(r);i=Se(m,a),m.forEach(C),s=fe(u),n=U(u,"DIV",{class:!0});var _=V(n);Ie(o.$$.fragment,_),_.forEach(C),u.forEach(C),this.h()},h(){N(r,"class","self-center mr-2 font-medium line-clamp-1"),N(n,"class","self-center"),N(t,"class","flex text-xs items-center px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition")},m(f,u){de(f,t,u),A(t,r),A(r,i),A(t,s),A(t,n),Ce(o,n,null),l=!0,d||(c=ct(t,"click",e[24]),d=!0)},p(f,u){(!l||u&128)&&a!==(a=f[7].t("Share to Open WebUI Community")+"")&&Ae(i,a)},i(f){l||(Y(o.$$.fragment,f),l=!0)},o(f){ee(o.$$.fragment,f),l=!1},d(f){f&&C(t),ze(o),d=!1,c()}}}function lp(e){let t,r,a;function i(n){e[25](n)}let s={count:e[0].length,perPage:10};return e[1]!==void 0&&(s.page=e[1]),t=new Og({props:s}),Vr.push(()=>Fr(t,"page",i)),{c(){Te(t.$$.fragment)},l(n){Ie(t.$$.fragment,n)},m(n,o){Ce(t,n,o),a=!0},p(n,o){const l={};o&1&&(l.count=n[0].length),!r&&o&2&&(r=!0,l.page=n[1],Wr(()=>r=!1)),t.$set(l)},i(n){a||(Y(t.$$.fragment,n),a=!0)},o(n){ee(t.$$.fragment,n),a=!1},d(n){ze(t,n)}}}function Ry(e){let t,r,a,i,s,n=e[7].t("Feedback History")+"",o,l,d,c,f,u=e[0].length+"",m,_,y,w,v,b,k,S,E,T;function I(O){e[16](O)}let D={selectedFeedback:e[5],onClose:e[11]};e[4]!==void 0&&(D.show=e[4]),t=new ay({props:D}),Vr.push(()=>Fr(t,"show",I));let R=e[0].length>0&&np(e);const L=[sy,ny],se=[];function J(O,q){return(O[0]??[]).length===0?0:1}v=J(e),b=se[v]=L[v](e);let F=e[0].length>0&&op(e),W=e[0].length>10&&lp(e);return{c(){Te(t.$$.fragment),a=ce(),i=P("div"),s=P("div"),o=ke(n),l=ce(),d=P("div"),c=ce(),f=P("span"),m=ke(u),_=ce(),R&&R.c(),y=ce(),w=P("div"),b.c(),k=ce(),F&&F.c(),S=ce(),W&&W.c(),E=Kt(),this.h()},l(O){Ie(t.$$.fragment,O),a=fe(O),i=U(O,"DIV",{class:!0});var q=V(i);s=U(q,"DIV",{class:!0});var X=V(s);o=Se(X,n),l=fe(X),d=U(X,"DIV",{class:!0}),V(d).forEach(C),c=fe(X),f=U(X,"SPAN",{class:!0});var te=V(f);m=Se(te,u),te.forEach(C),X.forEach(C),_=fe(q),R&&R.l(q),q.forEach(C),y=fe(O),w=U(O,"DIV",{class:!0});var oe=V(w);b.l(oe),oe.forEach(C),k=fe(O),F&&F.l(O),S=fe(O),W&&W.l(O),E=Kt(),this.h()},h(){N(d,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),N(f,"class","text-lg font-medium text-gray-500 dark:text-gray-300"),N(s,"class","flex md:self-center text-lg font-medium px-0.5"),N(i,"class","mt-0.5 mb-2 gap-1 flex flex-row justify-between"),N(w,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5")},m(O,q){Ce(t,O,q),de(O,a,q),de(O,i,q),A(i,s),A(s,o),A(s,l),A(s,d),A(s,c),A(s,f),A(f,m),A(i,_),R&&R.m(i,null),de(O,y,q),de(O,w,q),se[v].m(w,null),de(O,k,q),F&&F.m(O,q),de(O,S,q),W&&W.m(O,q),de(O,E,q),T=!0},p(O,[q]){const X={};q&32&&(X.selectedFeedback=O[5]),!r&&q&16&&(r=!0,X.show=O[4],Wr(()=>r=!1)),t.$set(X),(!T||q&128)&&n!==(n=O[7].t("Feedback History")+"")&&Ae(o,n),(!T||q&1)&&u!==(u=O[0].length+"")&&Ae(m,u),O[0].length>0?R?(R.p(O,q),q&1&&Y(R,1)):(R=np(O),R.c(),Y(R,1),R.m(i,null)):R&&(Ze(),ee(R,1,1,()=>{R=null}),Ye());let te=v;v=J(O),v===te?se[v].p(O,q):(Ze(),ee(se[te],1,1,()=>{se[te]=null}),Ye(),b=se[v],b?b.p(O,q):(b=se[v]=L[v](O),b.c()),Y(b,1),b.m(w,null)),O[0].length>0?F?(F.p(O,q),q&1&&Y(F,1)):(F=op(O),F.c(),Y(F,1),F.m(S.parentNode,S)):F&&(Ze(),ee(F,1,1,()=>{F=null}),Ye()),O[0].length>10?W?(W.p(O,q),q&1&&Y(W,1)):(W=lp(O),W.c(),Y(W,1),W.m(E.parentNode,E)):W&&(Ze(),ee(W,1,1,()=>{W=null}),Ye())},i(O){T||(Y(t.$$.fragment,O),Y(R),Y(b),Y(F),Y(W),T=!0)},o(O){ee(t.$$.fragment,O),ee(R),ee(b),ee(F),ee(W),T=!1},d(O){O&&(C(a),C(i),C(y),C(w),C(k),C(S),C(E)),ze(t,O),R&&R.d(),se[v].d(),F&&F.d(O),W&&W.d(O)}}}const Ny=e=>e.stopPropagation();function By(e,t,r){let a,i,s;const{saveAs:n}=kg;hn.extend(Sg);const o=Lr("i18n");lr(e,o,W=>r(7,s=W));let{feedbacks:l=[]}=t,d=1,c="updated_at",f="desc";function u(W){c===W?r(3,f=f==="asc"?"desc":"asc"):(r(2,c=W),W==="user"||W==="model_id"?r(3,f="asc"):r(3,f="desc")),r(1,d=1)}let m=!1,_=null;const y=W=>{r(4,m=!0),r(5,_=W)},w=()=>{r(4,m=!1),r(5,_=null)},v=async W=>{await Tg(localStorage.token,W).catch(q=>(mi.error(q),null))&&r(0,l=l.filter(q=>q.id!==W))},b=async()=>{mi.success(s.t("Redirecting you to Open WebUI Community"));const W=l.map(te=>{const{snapshot:oe,user:ne,...G}=te;return G}),O="https://openwebui.com",q=await window.open(`${O}/leaderboard`,"_blank"),X=te=>{te.origin===O&&te.data==="loaded"&&(q.postMessage(JSON.stringify(W),"*"),window.removeEventListener("message",X))};window.addEventListener("message",X,!1)},k=async()=>{const W=await Ig(localStorage.token).catch(O=>(mi.error(O),null));if(W){let O=new Blob([JSON.stringify(W)],{type:"application/json"});n(O,`feedback-history-export-${Date.now()}.json`)}};function S(W){m=W,r(4,m)}const E=()=>{k()},T=()=>u("user"),I=()=>u("model_id"),D=()=>u("rating"),R=()=>u("updated_at"),L=(W,O)=>{v(W.id)},se=W=>y(W),J=async()=>{b()};function F(W){d=W,r(1,d)}return e.$$set=W=>{"feedbacks"in W&&r(0,l=W.feedbacks)},e.$$.update=()=>{e.$$.dirty&13&&r(15,i=[...l].sort((W,O)=>{var te,oe;let q,X;switch(c){case"user":return q=((te=W.user)==null?void 0:te.name)||"",X=((oe=O.user)==null?void 0:oe.name)||"",f==="asc"?q.localeCompare(X):X.localeCompare(q);case"model_id":return q=W.data.model_id||"",X=O.data.model_id||"",f==="asc"?q.localeCompare(X):X.localeCompare(q);case"rating":return q=W.data.rating,X=O.data.rating,f==="asc"?q-X:X-q;case"updated_at":return q=W.updated_at,X=O.updated_at,f==="asc"?q-X:X-q;default:return 0}})),e.$$.dirty&32770&&r(6,a=i.slice((d-1)*10,d*10))},[l,d,c,f,m,_,a,s,o,u,y,w,v,b,k,i,S,E,T,I,D,R,L,se,J,F]}class My extends Hr{constructor(t){super(),Gr(this,t,By,Ry,Ur,{feedbacks:0})}}function up(e){let t,r,a,i,s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg>',n,o,l=e[3].t("Leaderboard")+"",d,c,f,u,m,_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg>',y,w,v=e[3].t("Feedbacks")+"",b,k,S,E,T,I,D,R,L;const se=[Uy,Py],J=[];function F(W,O){return W[0]==="leaderboard"?0:W[0]==="feedbacks"?1:-1}return~(T=F(e))&&(I=J[T]=se[T](e)),{c(){t=P("div"),r=P("div"),a=P("button"),i=P("div"),i.innerHTML=s,n=ce(),o=P("div"),d=ke(l),f=ce(),u=P("button"),m=P("div"),m.innerHTML=_,y=ce(),w=P("div"),b=ke(v),S=ce(),E=P("div"),I&&I.c(),this.h()},l(W){t=U(W,"DIV",{class:!0});var O=V(t);r=U(O,"DIV",{id:!0,class:!0});var q=V(r);a=U(q,"BUTTON",{id:!0,class:!0});var X=V(a);i=U(X,"DIV",{class:!0,"data-svelte-h":!0}),La(i)!=="svelte-ujm47k"&&(i.innerHTML=s),n=fe(X),o=U(X,"DIV",{class:!0});var te=V(o);d=Se(te,l),te.forEach(C),X.forEach(C),f=fe(q),u=U(q,"BUTTON",{id:!0,class:!0});var oe=V(u);m=U(oe,"DIV",{class:!0,"data-svelte-h":!0}),La(m)!=="svelte-1fzwrf2"&&(m.innerHTML=_),y=fe(oe),w=U(oe,"DIV",{class:!0});var ne=V(w);b=Se(ne,v),ne.forEach(C),oe.forEach(C),q.forEach(C),S=fe(O),E=U(O,"DIV",{class:!0});var G=V(E);I&&I.l(G),G.forEach(C),O.forEach(C),this.h()},h(){N(i,"class","self-center mr-2"),N(o,"class","self-center"),N(a,"id","leaderboard"),N(a,"class",c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),N(m,"class","self-center mr-2"),N(w,"class","self-center"),N(u,"id","feedbacks"),N(u,"class",k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),N(r,"id","users-tabs-container"),N(r,"class","tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"),N(E,"class","flex-1 mt-1 lg:mt-0 overflow-y-scroll"),N(t,"class","flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4")},m(W,O){de(W,t,O),A(t,r),A(r,a),A(a,i),A(a,n),A(a,o),A(o,d),A(r,f),A(r,u),A(u,m),A(u,y),A(u,w),A(w,b),A(t,S),A(t,E),~T&&J[T].m(E,null),D=!0,R||(L=[ct(a,"click",e[6]),ct(u,"click",e[7])],R=!0)},p(W,O){(!D||O&8)&&l!==(l=W[3].t("Leaderboard")+"")&&Ae(d,l),(!D||O&1&&c!==(c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(W[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&N(a,"class",c),(!D||O&8)&&v!==(v=W[3].t("Feedbacks")+"")&&Ae(b,v),(!D||O&1&&k!==(k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(W[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&N(u,"class",k);let q=T;T=F(W),T===q?~T&&J[T].p(W,O):(I&&(Ze(),ee(J[q],1,1,()=>{J[q]=null}),Ye()),~T?(I=J[T],I?I.p(W,O):(I=J[T]=se[T](W),I.c()),Y(I,1),I.m(E,null)):I=null)},i(W){D||(Y(I),D=!0)},o(W){ee(I),D=!1},d(W){W&&C(t),~T&&J[T].d(),R=!1,qr(L)}}}function Py(e){let t,r;return t=new My({props:{feedbacks:e[2]}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function Uy(e){let t,r;return t=new L0({props:{feedbacks:e[2]}}),{c(){Te(t.$$.fragment)},l(a){Ie(t.$$.fragment,a)},m(a,i){Ce(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){ee(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}function Vy(e){let t,r,a=e[1]&&up(e);return{c(){a&&a.c(),t=Kt()},l(i){a&&a.l(i),t=Kt()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,[s]){i[1]?a?(a.p(i,s),s&2&&Y(a,1)):(a=up(i),a.c(),Y(a,1),a.m(t.parentNode,t)):a&&(Ze(),ee(a,1,1,()=>{a=null}),Ye())},i(i){r||(Y(a),r=!0)},o(i){ee(a),r=!1},d(i){i&&C(t),a&&a.d(i)}}}function Wy(e,t,r){let a,i;lr(e,mg,u=>r(5,a=u));const s=Lr("i18n");lr(e,s,u=>r(3,i=u));let n;const o=u=>{const m=document.getElementById(u);m&&m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};let l=!1,d=[];pp(async()=>{r(2,d=await Cg(localStorage.token)),r(1,l=!0);const u=document.getElementById("users-tabs-container");u&&u.addEventListener("wheel",function(m){m.deltaY!==0&&(u.scrollLeft+=m.deltaY)}),o(n)});const c=()=>{co("/admin/evaluations/leaderboard")},f=()=>{co("/admin/evaluations/feedbacks")};return e.$$.update=()=>{if(e.$$.dirty&32){const u=a.url.pathname.split("/"),m=u[u.length-1];r(0,n=["leaderboard","feedbacks"].includes(m)?m:"leaderboard")}e.$$.dirty&1&&n&&o(n)},[n,l,d,i,s,a,c,f]}class yb extends Hr{constructor(t){super(),Gr(this,t,Wy,Vy,Ur,{})}}export{yb as E};
//# sourceMappingURL=DyV5p-tt.js.map
