(function(a){function t(t){for(var n,s,l=t[0],o=t[1],c=t[2],u=0,m=[];u<l.length;u++)s=l[u],i[s]&&m.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],n=!0,l=1;l<e.length;l++){var o=e[l];0!==i[o]&&(n=!1)}n&&(r.splice(t--,1),a=s(s.s=e[0]))}return a}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=n,s.d=function(a,t,e){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)s.d(e,n,function(t){return a[t]}.bind(null,n));return e},s.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"16a7":function(a,t,e){},"3d51":function(a,t,e){a.exports=e.p+"img/spartalogo.bfdef0ad.png"},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=e("bb71"),r=(e("da64"),{primary:{base:"#FFCD00",darken1:"#E2B500"}});n["a"].use(i["a"],{iconfont:"md",theme:r});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-app",[e("v-content",[e("Registration")],1)],1)},l=[],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",{staticClass:"primary",attrs:{bg:"","fill-height":"","grid-list-md":"",flex:""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",[e("div",{attrs:{align:"center"}},[e("v-card",{attrs:{id:"login-box",elevation:"4"}},[e("v-tabs-items",{attrs:{touchless:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("Welcome",{on:{proceed:a.welcome_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("Biodata",{on:{previous:a.go_back,proceed:a.biodata_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("Contact",{on:{previous:a.go_back,proceed:a.contact_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("Medic",{on:{previous:a.go_back,proceed:a.medic_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("EmergencyContact",{on:{previous:a.go_back,proceed:a.ec_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("InformationConsent",{on:{previous:a.go_back,proceed:a.consent_proceed}})],1),e("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1}},[e("Finished")],1)],1)],1)],1)])],1)],1)},c=[],d=e("cebc"),u=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[n("div",{staticClass:"pa-4",attrs:{align:"left"}},[n("v-img",{attrs:{src:e("3d51"),width:"80"}}),n("div",{staticClass:"display-1 font-weight-bold",staticStyle:{"margin-top":"24px"}},[a._v("Selamat datang!")]),n("p",{staticClass:"mt-3"},[a._v("\n            Kami ucapkan selamat dan sukses untuk kalian yang diterima pada program studi Teknik Informatika dan Sistem dan Teknologi Informasi angkatan 2018!\n        ")]),n("p",[a._v("\n            Nah, kami ingin mengenal kamu lebih jauh, pertama-tama, silakan kamu masukkan NIM kamu di bawah ini.\n        ")]),n("v-text-field",{staticClass:"mt-4",attrs:{label:"NIM TPB",rules:a.validation_rules.nim},model:{value:a.nim,callback:function(t){a.nim=t},expression:"nim"}}),n("v-btn",{staticClass:"font-weight-bold",staticStyle:{"text-transform":"none",color:"black"},attrs:{"ma-0":"",depressed:"",block:"",color:"primary",type:"submit"}},[a._v("Lanjutkan")])],1)])},m=[],p=e("6d60"),b={name:"Welcome",data:function(){return{nim:"",validation_rules:p}},methods:{proceed:function(){this.$refs.form.validate()&&this.$emit("proceed",{nim:this.nim})}}},f=b,v=e("2877"),h=e("6544"),k=e.n(h),_=e("8336"),g=e("4bd4"),y=e("adda"),x=e("2677"),C=Object(v["a"])(f,u,m,!1,null,"72c83b2d",null),j=C.exports;k()(C,{VBtn:_["a"],VForm:g["a"],VImg:y["a"],VTextField:x["a"]});var w=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[e("div",{staticClass:"pl-3 pt-4 pr-3 pb-1",attrs:{align:"left"}},[e("v-btn",{staticClass:"pa-0 ma-0 text-none",attrs:{small:"",flat:"",color:"blue darken-1"},on:{click:function(t){return a.$emit("previous")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[a._v("arrow_back")]),a._v("\n            Kembali\n        ")],1)],1),e("div",{staticClass:"pl-4 pr-4 pt-1 pb-4",attrs:{align:"left"}},[e("div",[e("span",{staticClass:"headline font-weight-bold"},[a._v("Data diri")]),e("span",{staticClass:"grey--text ml-2"},[a._v("1/5")])]),e("p",{staticClass:"mt-1 grey--text text--darken-1"},[a._v("Isi data diri kamu dengan jujur ya..")]),e("v-text-field",{attrs:{label:"Nama Lengkap",rules:a.validation_rules.name,hint:"Tulis dengan huruf kapital di awal kata dan kapitalisasi yang sesuai"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}),e("v-text-field",{attrs:{label:"Nama Panggilan",rules:a.validation_rules.name},model:{value:a.nickname,callback:function(t){a.nickname=t},expression:"nickname"}}),e("v-select",{attrs:{items:a.genders,rules:a.validation_rules.gender,"item-text":"text","item-value":"value",label:"Jenis Kelamin","return-object":""},model:{value:a.gender,callback:function(t){a.gender=t},expression:"gender"}}),e("v-text-field",{attrs:{label:"Tempat Lahir",rules:a.validation_rules.bp},model:{value:a.birth_place,callback:function(t){a.birth_place=t},expression:"birth_place"}}),e("v-text-field",{attrs:{label:"Tanggal Lahir",rules:a.validation_rules.bd,mask:"##/##/####",placeholder:"dd/mm/yyyy"},model:{value:a.birth_date,callback:function(t){a.birth_date=t},expression:"birth_date"}}),e("v-btn",{staticClass:"font-weight-bold mt-3",staticStyle:{"text-transform":"none",color:"black"},attrs:{depressed:"",block:"",color:"primary",loading:a.loading,type:"submit"}},[a._v("Lanjutkan")])],1)])},V=[],I=(e("7f7f"),e("6d60")),S={name:"Biodata",data:function(){return{validation_rules:I,name:"",nickname:"",gender:null,birth_place:"",birth_date:"",loading:!1,genders:[{text:"Laki-laki",value:0},{text:"Perempuan",value:1}]}},methods:{proceed:function(){this.$refs.form.validate()&&this.$emit("proceed",{name:this.name,nickname:this.nickname,gender:this.gender.value,birth_place:this.birth_place,birth_date:this.birth_date})}}},$=S,O=e("132d"),T=e("b56d"),F=Object(v["a"])($,w,V,!1,null,"06b680b3",null),P=F.exports;k()(F,{VBtn:_["a"],VForm:g["a"],VIcon:O["a"],VSelect:T["a"],VTextField:x["a"]});var A=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[e("div",{staticClass:"pl-3 pt-4 pr-3 pb-1",attrs:{align:"left"}},[e("v-btn",{staticClass:"pa-0 ma-0 text-none",attrs:{small:"",flat:"",color:"blue darken-1"},on:{click:function(t){return a.$emit("previous")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[a._v("arrow_back")]),a._v("\n            Kembali\n        ")],1)],1),e("div",{staticClass:"pl-4 pr-4 pt-1 pb-4",attrs:{align:"left"}},[e("div",[e("span",{staticClass:"headline font-weight-bold"},[a._v("Informasi kontak")]),e("span",{staticClass:"grey--text ml-2"},[a._v("2/5")])]),e("p",{staticClass:"mt-1 grey--text text--darken-1"},[a._v("Isi data diri kamu dengan jujur ya..")]),e("v-text-field",{attrs:{label:"Alamat email",rules:a.validation_rules.email},model:{value:a.email,callback:function(t){a.email=t},expression:"email"}}),e("v-text-field",{attrs:{label:"ID LINE",rules:a.validation_rules.line_id},model:{value:a.line,callback:function(t){a.line=t},expression:"line"}}),e("v-text-field",{attrs:{label:"Nomor ponsel",rules:a.validation_rules.mobile},model:{value:a.mobile,callback:function(t){a.mobile=t},expression:"mobile"}}),e("v-text-field",{attrs:{label:"Alamat Rumah",rules:a.validation_rules.address},model:{value:a.address_home,callback:function(t){a.address_home=t},expression:"address_home"}}),e("v-text-field",{attrs:{label:"Alamat di Bandung",rules:a.validation_rules.address},model:{value:a.address_local,callback:function(t){a.address_local=t},expression:"address_local"}}),e("v-btn",{staticClass:"font-weight-bold mt-3",staticStyle:{"text-transform":"none",color:"black"},attrs:{depressed:"",block:"",color:"primary",type:"submit"}},[a._v("Lanjutkan")])],1)])},E=[],M=e("6d60"),B={name:"Contact",data:function(){return{validation_rules:M,email:"",line:"",mobile:"",address_home:"",address_local:""}},methods:{proceed:function(){this.$refs.form.validate()&&this.$emit("proceed",{email:this.email,line:this.line,mobile:this.mobile,address_home:this.address_home,address_local:this.address_local})}}},D=B,N=Object(v["a"])(D,A,E,!1,null,"60f54a16",null),L=N.exports;k()(N,{VBtn:_["a"],VForm:g["a"],VIcon:O["a"],VTextField:x["a"]});var K=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[e("div",{staticClass:"pl-3 pt-4 pr-3 pb-1",attrs:{align:"left"}},[e("v-btn",{staticClass:"pa-0 ma-0 text-none",attrs:{small:"",flat:"",color:"blue darken-1"},on:{click:function(t){return a.$emit("previous")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[a._v("arrow_back")]),a._v("\n            Kembali\n        ")],1)],1),e("div",{staticClass:"pl-4 pr-4 pt-1 pb-4",attrs:{align:"left"}},[e("div",[e("span",{staticClass:"headline font-weight-bold"},[a._v("Informasi kondisi medik")]),e("span",{staticClass:"grey--text ml-2"},[a._v("3/5")])]),e("p",{staticClass:"mt-1 grey--text text--darken-1"},[a._v("Kami perlu informasi ini agar kamu aman saat keberjalanan SPARTA")]),e("v-select",{attrs:{items:a.blood_types,label:"Golongan Darah",rules:a.validation_rules.blood_type},model:{value:a.blood_type,callback:function(t){a.blood_type=t},expression:"blood_type"}}),e("v-textarea",{attrs:{label:"Penyakit atau Riwayat Penyakit"},model:{value:a.disease,callback:function(t){a.disease=t},expression:"disease"}}),e("v-btn",{staticClass:"font-weight-bold mt-3",staticStyle:{"text-transform":"none",color:"black"},attrs:{depressed:"",block:"",color:"primary",type:"submit"}},[a._v("Lanjutkan")])],1)])},R=[],H=e("6d60"),W={name:"Medic",data:function(){return{validation_rules:H,disease:"",blood_type:null,blood_types:["A","B","AB","O"]}},methods:{proceed:function(){this.$refs.form.validate()&&this.$emit("proceed",{disease:this.disease,blood_type:this.blood_type})}}},J=W,G=e("a844"),Z=Object(v["a"])(J,K,R,!1,null,"bcc2fa7c",null),z=Z.exports;k()(Z,{VBtn:_["a"],VForm:g["a"],VIcon:O["a"],VSelect:T["a"],VTextarea:G["a"]});var U=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[e("div",{staticClass:"pl-3 pt-4 pr-3 pb-1",attrs:{align:"left"}},[e("v-btn",{staticClass:"pa-0 ma-0 text-none",attrs:{small:"",flat:"",color:"blue darken-1"},on:{click:function(t){return a.$emit("previous")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[a._v("arrow_back")]),a._v("\n            Kembali\n        ")],1)],1),e("div",{staticClass:"pl-4 pr-4 pt-1 pb-4",attrs:{align:"left"}},[e("div",[e("span",{staticClass:"headline font-weight-bold"},[a._v("Kontak darurat")]),e("span",{staticClass:"grey--text ml-2"},[a._v("4/5")])]),e("p",{staticClass:"mt-1 grey--text text--darken-1"},[a._v("Kami perlu informasi ini agar kamu aman saat keberjalanan SPARTA")]),e("v-text-field",{attrs:{label:"Nama Wali",rules:a.validation_rules.name},model:{value:a.guardian_name,callback:function(t){a.guardian_name=t},expression:"guardian_name"}}),e("v-text-field",{attrs:{label:"Hubungan Wali",rules:a.validation_rules.hub_wali,hint:"Misalnya Ayah/Ibu/Saudara kandung/lainnya"},model:{value:a.guardian_rel,callback:function(t){a.guardian_rel=t},expression:"guardian_rel"}}),e("v-text-field",{attrs:{label:"Nomor Telepon Wali",rules:a.validation_rules.mobile},model:{value:a.guardian_mobile,callback:function(t){a.guardian_mobile=t},expression:"guardian_mobile"}}),e("v-btn",{staticClass:"font-weight-bold mt-3",staticStyle:{"text-transform":"none",color:"black"},attrs:{depressed:"",block:"",color:"primary",type:"submit"}},[a._v("Lanjutkan")])],1)])},q=[],Q=e("6d60"),X={name:"EmergencyContact",data:function(){return{validation_rules:Q,guardian_name:"",guardian_rel:"",guardian_mobile:""}},methods:{proceed:function(){this.$refs.form.validate()&&this.$emit("proceed",{guardian_name:this.guardian_name,guardian_rel:this.guardian_rel,guardian_mobile:this.guardian_mobile})}}},Y=X,aa=Object(v["a"])(Y,U,q,!1,null,"779ff2b4",null),ta=aa.exports;k()(aa,{VBtn:_["a"],VForm:g["a"],VIcon:O["a"],VTextField:x["a"]});var ea=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-form",{on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[e("div",{staticClass:"pl-3 pt-4 pr-3 pb-1",attrs:{align:"left"}},[e("v-btn",{staticClass:"pa-0 ma-0 text-none",attrs:{small:"",flat:"",color:"blue darken-1"},on:{click:function(t){return a.$emit("previous")}}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[a._v("arrow_back")]),a._v("\n            Kembali\n        ")],1)],1),e("div",{staticClass:"pl-4 pr-4 pt-1 pb-4",attrs:{align:"left"}},[e("div",[e("span",{staticClass:"headline font-weight-bold"},[a._v("Persetujuan Penyebaran Data")]),e("span",{staticClass:"grey--text ml-2"},[a._v("5/5")])]),e("p",{staticClass:"mt-3"},[a._v("Sebagai informasi, banyak sekali perusahaan-perusahaan eksternal yang sangat antusias untuk bekerja sama dengan HMIF mulai dari membuat seminar hingga membuka lowongan pekerjaan.")]),e("p",[a._v("HMIF mencoba memfasilitasi hal tersebut dengan mendata informasi kontak anggotanya dan memberikannya kepada pihak-pihak tersebut. Di sisi lain, informasi kontak merupakan data pribadi yang harus dijaga kerahasiaannya.")]),e("p",[a._v("Untuk menghargai hal tersebut, HMIF ingin meminta persetujuan Saudara untuk menyebarkan data pribadi Saudara—termasuk tetapi tidak terbatas pada, nama lengkap, nomor ponsel, alamat e-mail, akun LinkedIn, dan akun GitHub—kepada pihak-pihak yang bekerjasama dengan HMIF.")]),e("p",[a._v("Centang kotak di bawah ini apabila Saudara setuju untuk disebarkan datanya, atau biarkan saja bila tidak setuju.")]),e("v-divider"),e("v-checkbox",{attrs:{label:"Saya setuju data saya disebarkan"},model:{value:a.consent,callback:function(t){a.consent=t},expression:"consent"}}),e("v-btn",{staticClass:"font-weight-bold mt-3",staticStyle:{"text-transform":"none",color:"black"},attrs:{depressed:"",block:"",color:"primary",type:"submit"}},[a._v("Lanjutkan")])],1)])},na=[],ia={name:"InformationConsent",data:function(){return{consent:!1}},methods:{proceed:function(){this.$emit("proceed",{consent:this.consent})}}},ra=ia,sa=e("ac7c"),la=e("ce7e"),oa=Object(v["a"])(ra,ea,na,!1,null,"76b67375",null),ca=oa.exports;k()(oa,{VBtn:_["a"],VCheckbox:sa["a"],VDivider:la["a"],VForm:g["a"],VIcon:O["a"]});var da=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),a.proceed(t)}}},[n("div",{staticClass:"pa-4",attrs:{align:"left"}},[n("v-img",{attrs:{src:e("3d51"),width:"80"}}),n("div",{staticClass:"display-1 font-weight-bold",staticStyle:{"margin-top":"24px"}},[a._v("Selamat datang di SPARTA 2018!")]),n("p",{staticClass:"mt-3"},[a._v("\n            Perjalanan kalian masih panjang, jangan menyerah dan teruslah berkarya dan berkontribusi! Sisanya biar medinfo aja ya yg nulis lol.\n        ")]),n("p",[a._v("\n            Kamu boleh menutup laman ini.\n        ")])],1)])},ua=[],ma={name:"Finished"},pa=ma,ba=Object(v["a"])(pa,da,ua,!1,null,"d22b83c6",null),fa=ba.exports;k()(ba,{VForm:g["a"],VImg:y["a"]});var va={name:"Registration",components:{Finished:fa,InformationConsent:ca,EmergencyContact:ta,Medic:z,Contact:L,Biodata:P,Welcome:j},data:function(){return{tab:0,data:{}}},methods:{go_back:function(){this.tab>0&&this.tab--},welcome_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=1},biodata_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=2},contact_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=3},medic_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=4},ec_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=5},consent_proceed:function(a){this.data=Object(d["a"])({},this.data,a),this.tab=6}}},ha=va,ka=(e("9435"),e("b0af")),_a=e("a523"),ga=e("0e8f"),ya=e("a722"),xa=e("c671"),Ca=e("aac8"),ja=Object(v["a"])(ha,o,c,!1,null,"7c4aa6b6",null),wa=ja.exports;k()(ja,{VCard:ka["a"],VContainer:_a["a"],VFlex:ga["a"],VLayout:ya["a"],VTabItem:xa["a"],VTabsItems:Ca["a"]});var Va={name:"App",components:{Registration:wa},data:function(){return{}}},Ia=Va,Sa=e("7496"),$a=e("549c"),Oa=Object(v["a"])(Ia,s,l,!1,null,null,null),Ta=Oa.exports;k()(Oa,{VApp:Sa["a"],VContent:$a["a"]});e("b56c");n["a"].config.productionTip=!1,new n["a"]({render:function(a){return a(Ta)}}).$mount("#app")},"6d60":function(a,t){a.exports={nim:[function(a){return!!a||"NIM tidak boleh kosong"},function(a){return/16518\d{3}/.test(a)||"Masukkan NIM TPB STEI 2018"}],name:[function(a){return!!a||"Nama tidak boleh kosong"},function(a){return/([A-Z][a-zA-Z\-'.]*\s*)+/.test(a)||"Kapitalisasi harus benar"}],email:[function(a){return!!a||"Email harus diisi"},function(a){return/\S+@\S+\.\S+/.test(a)||"Format alamat e-mail salah"}],mobile:[function(a){return!!a||"Nomor telepon harus diisi"},function(a){return/\d{3,20}/.test(a)||"Nomor telepon hanya terdiri dari 3-20 angka"}],line_id:[function(a){return!!a||"ID LINE harus diisi"}],gender:[function(a){return!!a||"Jenis kelamin harus diisi"}],bd:[function(a){return!!a||"Tanggal lahir harus diisi"},function(a){return/^(\d{2})(\d{2})(\d{4})$/.test(a)||"Format tanggal lahir tidak benar"}],bp:[function(a){return!!a||"Tempat lahir harus diisi"}],hub_wali:[function(a){return!!a||"Hubungan dengan wali tidak boleh kosong"}],blood_type:[function(a){return!!a||"Golongan darah tidak boleh kosong"}],address:[function(a){return!!a||"Alamat harus diisi"}]}},9435:function(a,t,e){"use strict";var n=e("16a7"),i=e.n(n);i.a},b56c:function(a,t,e){}});
//# sourceMappingURL=app.eadf6a74.js.map