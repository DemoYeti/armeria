"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[8597],{88290:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return v},pageTitle:function(){return o}});var r=a(63366),n=(a(67294),a(64983)),i=a(28819),l=["components"],o="Running a Thrift service",c={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},s=p("Tip"),m=p("Warning"),d={pageTitle:o,_frontmatter:c},h=i.Z;function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)(h,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"running-a-thrift-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#running-a-thrift-service","aria-label":"running a thrift service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Running a Thrift service"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#thttpservice"},"THttpService")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#serialization-formats"},"Serialization formats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#service-multiplexing"},"Service multiplexing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#see-also"},"See also"))),(0,n.kt)(s,{mdxType:"Tip"},(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),(0,n.kt)("p",null,"Let's assume we have the following Thrift IDL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},"namespace java com.example.thrift.hello\n\nservice HelloService {\n    string hello(1:string name)\n}\n")),(0,n.kt)("p",null,"The Apache Thrift compiler will produce some Java code under the ",(0,n.kt)("inlineCode",{parentName:"p"},"com.example.thrift.hello")," package.\nThe most noteworthy one is ",(0,n.kt)("inlineCode",{parentName:"p"},"HelloService.java")," which defines the service interfaces we will implement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.thrift.TException;\nimport org.apache.thrift.async.AsyncMethodCallback;\n\npublic class HelloService {\n    public interface Iface {\n        public String hello(String name) throws TException;\n    }\n\n    public interface AsyncIface {\n        public void hello(String name, AsyncMethodCallback<String> resultHandler) throws TException;\n    }\n    ...\n}\n")),(0,n.kt)("p",null,"If you are interested in going fully asynchronous, it is recommended to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIface")," interface,\nalthough it is easier to implement the synchronous ",(0,n.kt)("inlineCode",{parentName:"p"},"Iface")," interface:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import org.apache.thrift.TException;\nimport org.apache.thrift.async.AsyncMethodCallback;\n\npublic class MyHelloService implements HelloService.AsyncIface {\n    @Override\n    public void hello(String name, AsyncMethodCallback<String> resultHandler) {\n        resultHandler.onComplete(\"Hello, \" + name + '!');\n    }\n}\n\n// or synchronously:\npublic class MySynchronousHelloService implements HelloService.Iface {\n    @Override\n    public String hello(String name) throws TException {\n        return \"Hello, \" + name + '!';\n    }\n}\n")),(0,n.kt)("h2",{id:"thttpservice",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#thttpservice","aria-label":"thttpservice permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,n.kt)("inlineCode",{parentName:"h2"},"THttpService")),(0,n.kt)("p",null,"Once you've finished the implementation of the interface, you need to wrap it with a ",(0,n.kt)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService"),"\nand add it to the ",(0,n.kt)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\n...\nsb.service("/hello", THttpService.of(new MyHelloService()));\n...\nServer server = sb.build();\nserver.start();\n')),(0,n.kt)("h2",{id:"serialization-formats",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#serialization-formats","aria-label":"serialization formats permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Serialization formats"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," supports four Thrift serialization formats: TBINARY, TCOMPACT, TJSON and TTEXT.\nIt chooses the serialization format based on the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"content-type")," HTTP header."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"th"},"Header value")),(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"th"},"Serialization format")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Unspecified or\n",(0,n.kt)("inlineCode",{parentName:"p"},"application/x-thrift"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Use the default serialization format\n(TBINARY unless specified)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TBINARY")," or ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"vnd.apache.thrift.binary"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"TBINARY"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TCOMPACT")," or ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"vnd.apache.thrift.compact"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"TCOMPACT"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TJSON")," or ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"vnd.apache.thrift.json"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"TJSON"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"application/x-thrift; protocol=TTEXT")," or ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"vnd.apache.thrift.text"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"TTEXT"))))),(0,n.kt)("p",null,"To change the default serialization format from TBINARY to something else, specify it when creating a\n",(0,n.kt)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.thrift.ThriftSerializationFormats;\n\nServerBuilder sb = Server.builder();\n// Use TCOMPACT as the default serialization format.\nsb.service("/hello", THttpService.of(new MyHelloService(),\n                                     ThriftSerializationFormats.COMPACT));\n')),(0,n.kt)("p",null,"You can also choose the list of allowed serialization formats:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = Server.builder();\n// Use TBINARY as the default serialization format.\n// Allow TBINARY and TCOMPACT only.\nsb.service("/hello", THttpService.of(new MyHelloService(),\n                                     ThriftSerializationFormats.BINARY,\n                                     ThriftSerializationFormats.COMPACT));\n')),(0,n.kt)(m,{mdxType:"Warning"},"TTEXT is not designed for efficiency and is recommended to be only used for debugging. It's best to serve from a separate path only accessible internally."),(0,n.kt)("h2",{id:"service-multiplexing",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#service-multiplexing","aria-label":"service multiplexing permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Service multiplexing"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," supports service multiplexing fully compatible with Apache Thrift ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/400b346db2510fffa06c0ced11105e3618ce5367/lib/java/src/org/apache/thrift/TMultiplexedProcessor.java#L28"},"TMultiplexedProcessor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> impls = new HashMap<>();\nimpls.put("foo", new MyFooService());\nimpls.put("bar", new MyBarService());\n// Use MyHelloService for non-multiplexed requests.\nimpls.put("", new MyHelloService());\n\nsb.service("/thrift", THttpService.of(impls));\n')),(0,n.kt)("h2",{id:"see-also",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/client-thrift"},"Calling a Thrift service"))))}v.isMDXComponent=!0},28819:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(25444),n=a(67294),i=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),l=a(46731),o=function(e){var t=(0,r.useStaticQuery)("1217743243").allMdx.nodes;return n.createElement(l.Z,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-thrift-mdx-47bcb24681ffd25ba7ca.js.map