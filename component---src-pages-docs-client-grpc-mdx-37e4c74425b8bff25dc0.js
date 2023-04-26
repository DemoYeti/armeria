"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[6963],{41639:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return g},pageTitle:function(){return s}});var n,r=a(63366),o=(a(67294),a(64983)),l=a(28819),i=["components"],s="Calling a gRPC service",c={},p=(n="Tip",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={pageTitle:s,_frontmatter:c},m=l.Z;function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"calling-a-grpc-service",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h1",href:"#calling-a-grpc-service","aria-label":"calling a grpc service permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Calling a gRPC service"),(0,o.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#exception-propagation"},"Exception propagation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#see-also"},"See also"))),(0,o.kt)(p,{mdxType:"Tip"},(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),(0,o.kt)("p",null,"Let's assume we have the following ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," service definition, served at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/"),", just like\nwhat we used in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server-grpc"},"Running a gRPC service"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage grpc.hello;\n\noption java_package = "com.example.grpc.hello";\n\nservice HelloService {\n  rpc Hello (HelloRequest) returns (HelloReply) {}\n}\n\nmessage HelloRequest {\n  string name = 1;\n}\n\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,o.kt)("p",null,"Making a call starts from creating a client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.grpc.GrpcClients;\n\nHelloServiceBlockingStub helloService = GrpcClients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nHelloReply reply = helloService.hello(request);\nassert reply.getMessage().equals("Hello, Armerian World!");\n')),(0,o.kt)("p",null,"Note that we added the serialization format of the call using the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," operator in the scheme part of the URI.\nBecause we are calling a ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," server, we can choose: ",(0,o.kt)("inlineCode",{parentName:"p"},"gproto")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gjson"),". If you are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md"},"gRPC-Web"),",\nyou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"gproto-web"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gproto-web-text")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"gjson-web"),"."),(0,o.kt)(p,{mdxType:"Tip"},(0,o.kt)("p",null,"If a serialization format is not specified, ",(0,o.kt)("inlineCode",{parentName:"p"},"gproto")," will be used by default.")),(0,o.kt)("p",null,"Since we specified ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloServiceBlockingStub.class")," as the client type, ",(0,o.kt)("inlineCode",{parentName:"p"},"Clients.newClient()")," will return a\nsynchronous client implementation.  If we specified ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloServiceFutureStub"),", the calling code would have\nlooked like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.google.common.util.concurrent.Futures;\nimport com.google.common.util.concurrent.ListenableFuture;\nimport com.google.common.util.concurrent.MoreExecutors;\nimport com.linecorp.armeria.client.grpc.GrpcClients;\nimport java.util.concurrent.ForkJoinPool;\n\nHelloServiceFutureStub helloService = GrpcClients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceFutureStub.class);\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nListenableFuture<HelloReply> future = helloService.hello(request);\n\nFutures.addCallback(future, new FutureCallback<HelloReply>() {\n    @Override\n    public void onSuccess(HelloReply result) {\n        assert result.getMessage().equals("Hello, Armerian World!");\n    }\n\n    @Override\n    public void onFailure(Throwable t) {\n        t.printStackTrace();\n    }\n}, MoreExecutors.directExecutor());\n\n// You can also wait until the call is finished.\nHelloReply reply = future.get();\n')),(0,o.kt)("p",null,"The asynchronous stub uses Guava's ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/ListenableFuture.html"},"ListenableFuture")," and can be operated on using methods on ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/Futures.html"},"Futures"),". The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spotify/futures-extra"},"futures-extra")," library is very convenient for working with ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/guava/releases/21.0/api/docs/com/google/common/util/concurrent/ListenableFuture.html"},"ListenableFuture")," in Java 8, including the ability\nto convert it to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/CompletableFuture.html"},"CompletableFuture"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," also natively supports streaming RPC. If our service definition included this method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"service HelloService {\n  rpc ManyHellos (stream HelloRequest) returns (stream HelloReply) {}\n}\n")),(0,o.kt)("p",null,"You can also use the builder pattern for client construction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.grpc.GrpcSerializationFormats;\n\nHelloServiceBlockingStub helloService =\n    GrpcClients.builder("http://127.0.0.1:8080/")\n           .serializationFormat(GrpcSerializationFormats.PROTO)\n           .responseTimeoutMillis(10000)\n           .decorator(LoggingClient.newDecorator())\n           .build(HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class\n                                                   // or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\nHelloReply reply = helloService.hello(request);\nassert reply.getMessage().equals("Hello, Armerian World!");\n')),(0,o.kt)("p",null,"As you might have noticed already, we decorated the client using ",(0,o.kt)("a",{parentName:"p",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient"),", which logs all\nrequests and responses. You might be interested in decorating a client using other decorators, for example\nto gather metrics. Please also refer to ",(0,o.kt)("a",{parentName:"p",href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"},"type://ClientBuilder")," for more configuration options."),(0,o.kt)("h2",{id:"exception-propagation",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#exception-propagation","aria-label":"exception propagation permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Exception propagation"),(0,o.kt)("p",null,"If you have enabled ",(0,o.kt)("inlineCode",{parentName:"p"},"Flags.verboseResponses()")," in the server being accessed by specifying\n",(0,o.kt)("inlineCode",{parentName:"p"},"-Dcom.linecorp.armeria.verboseResponses=true")," system property, then any exception during processing\nin the server will be returned to the client as a ",(0,o.kt)("a",{parentName:"p",href:"type://StatusCauseException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/grpc/StatusCauseException.html"},"type://StatusCauseException")," attached to the normal gRPC\n",(0,o.kt)("inlineCode",{parentName:"p"},"Status"),". This can be used for programmatic access to the exception that happened in the server. In this\nexample, the server always fails with ",(0,o.kt)("inlineCode",{parentName:"p"},'throw new IllegalStateException("Failed!");')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.grpc.GrpcClients;\nimport com.linecorp.armeria.common.grpc.StatusCauseException;\n\nimport io.grpc.StatusRuntimeException;\n\nHelloServiceBlockingStub helloService = GrpcClients.newClient(\n        "gproto+http://127.0.0.1:8080/",\n        HelloServiceBlockingStub.class); // or HelloServiceFutureStub.class or HelloServiceStub.class\n\nHelloRequest request = HelloRequest.newBuilder().setName("Armerian World").build();\ntry {\n    HelloReply reply = helloService.hello(request);\n} catch (StatusRuntimeException e) {\n    if (e.getCause() instanceof StatusCauseException) {\n        StatusCauseException cause = (StatusCauseException) e.getCause();\n        // The name of the class of the exception and its message in the server can be accessed.\n        assert cause.getOriginalClassName().equals("java.lang.IllegalStateException");\n        assert cause.getOriginalMessage().equals("Failed!");\n\n        // The exception\'s message is a combination of both the class name and original message.\n        assert cause.getMessage().equals("java.lang.IllegalStateException: Failed!");\n\n        // The exception\'s stack trace is that which occurred when the server threw the exception.\n        cause.printStackTrace();\n\n        // Logging frameworks, as used by e.g., LoggingClient, will print the stack trace if configured\n        // to do so.\n\n        // Now you know exactly where to look in the server to figure out what may have gone wrong.\n    }\n}\n')),(0,o.kt)("h2",{id:"see-also",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/server-grpc"},"Running a gRPC service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/client-decorator"},"Decorating a client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/client-custom-http-headers"},"Sending custom HTTP headers"))))}g.isMDXComponent=!0},28819:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(25444),r=a(67294),o=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),l=a(46731),i=function(e){var t=(0,n.useStaticQuery)("1217743243").allMdx.nodes;return r.createElement(l.Z,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-grpc-mdx-37e4c74425b8bff25dc0.js.map