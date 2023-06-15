"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[7031],{14335:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var r,n=t(63366),i=(t(67294),t(64983)),o=t(20370),l=["components"],s={},p=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={_frontmatter:s},c=o.Z;function h(e){var a=e.components,t=(0,n.Z)(e,l);return(0,i.kt)(c,Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"14th May 2020"),(0,i.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.blockUntilShutdown()")," which lets you wait for a ",(0,i.kt)("a",{parentName:"p",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server")," to close. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2659"},"#2659")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Server server = Server.builder()...build();\nserver.start().join();\n// Returns when server.close() or closeAsync() is called.\nserver.blockUntilShutdown();\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemInfo.defaultNonLoopbackIpV4Address()")," which returns the sensible IPv4 address of the current\nmachine. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2679"},"#2679"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now specify authorization credentials conveniently when building a client: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2680"},"#2680")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'WebClient.builder("https://example.com/api")\n         // Basic\n         .auth(BasicToken.of("admin", "sesame"))\n         // OAuth 1a\n         .auth(OAuth1aToken.of(...))\n         // OAuth 2\n         .auth(OAuth2Token.of("token-0123456789abcdef"))\n         .build();\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New ",(0,i.kt)("a",{parentName:"p",href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"},"type://RetryRule")," and ",(0,i.kt)("a",{parentName:"p",href:"type://RetryRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContent.html"},"type://RetryRuleWithContent")," API let you define a complex retry policy\nconveniently. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1634"},"#1634")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2661"},"#2661")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2709"},"#2709")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Backoff myBackoff = Backoff.exponential(1000, 60000)\n                           .withJitter(0.3)\n                           .withMaxAttempts(10);\nRetryRule retryRule =\n    RetryRule.of(RetryRule.builder()\n                          .onUnProcessed()\n                          .thenBackoff(myBackoff),\n                 RetryRule.builder()\n                          .onException(ResponseTimeoutException.class)\n                          .thenBackoff(),\n                 RetryRule.builder()\n                          .onStatus(HttpStatus.TOO_MANY_REQUESTS)\n                          .thenNoRetry())\n\nRetryingClient.newDecorator(retryRule);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"type://CircuitBreakerListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerListener.html"},"type://CircuitBreakerListener")," now has a new event listener method ",(0,i.kt)("inlineCode",{parentName:"p"},"onInitialized()"),", which is invoked\nwhen a circuit is initialized. By default, it simply delegates to ",(0,i.kt)("inlineCode",{parentName:"p"},"onStateChanged()"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2675"},"#2675"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now register your server to or retrieve the ",(0,i.kt)("a",{parentName:"p",href:"typeplural://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"typeplural://Endpoint")," from\na ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/service-registration-and-discovery/"},"Eureka")," registry server,\nwhich gives nice integration with Spring Cloud. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/707"},"#707")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2701"},"#2701")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("a",{parentName:"p",href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"},"type://EurekaUpdatingListener")," for ",(0,i.kt)("a",{parentName:"p",href:"typeplural://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"typeplural://Server"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Server server = Server.builder()...build();\nserver.addListener(EurekaUpdatingListener.of("https://my-eureka-registry.com/"));\n// Automatically registers when the Server starts.\nserver.start().join();\n// Automatically deregisters when the Server stops.\nserver.stop().join();\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("a",{parentName:"p",href:"type://EurekaEndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/eureka/EurekaEndpointGroup.html"},"type://EurekaEndpointGroup")," for clients:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Periodically retrieves the endpoint list from the registry.\nEndpointGroup group = EurekaEndpointGroup.of("https://my-eureka-registry/");\ngroup.whenReady().join();\n\n// Sends a request to the endpoints, spreading the load w/ weighted round-robin.\nWebClient client = WebClient.of(SessionProtocol.HTTP, group);\nSystem.err.println(client.get("/some-resource")\n                         .aggregate().join()\n                         .contentUtf8());\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now use the gRPC client stubs generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/grpc/grpc-kotlin"},(0,i.kt)("inlineCode",{parentName:"a"},"grpc-kotlin")),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2662"},"#2662")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2669"},"#2669"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added a new Thrift serialization format ",(0,i.kt)("inlineCode",{parentName:"p"},"TTEXT_NAMED_ENUM"),". It is a variant of ",(0,i.kt)("inlineCode",{parentName:"p"},"TTEXT")," that serializes\nan ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," as a string instead of an integer. This can be useful when you need to serialize a ",(0,i.kt)("inlineCode",{parentName:"p"},"TBase"),"\nobject into a human-readable JSON. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2706"},"#2706")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ObjectMapper mapper = new ObjectMapper()\nmapper.registerModule(new ThriftJacksonModule(/* useNamedEnum */ true));\nString json = mapper.writeValueAsString(myTBaseStruct);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added two Spring Boot annotations that inject the current local Armeria port(s) - ",(0,i.kt)("a",{parentName:"p",href:"type://@LocalArmeriaPort:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/LocalArmeriaPort.html"},"type://@LocalArmeriaPort")," and ",(0,i.kt)("a",{parentName:"p",href:"type://@LocalArmeriaPorts:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/LocalArmeriaPorts.html"},"type://@LocalArmeriaPorts"),",\nwhich is useful when you bind at an ephemeral port or more than one port: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2561"},"#2561")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2684"},"#2684")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\nclass MyConfiguration {\n    @LocalArmeriaPort(SessionProtocol.HTTP)\n    int httpPort;\n    @LocalArmeriaPort(SessionProtocol.HTTPS)\n    int httpsPort;\n    @LocalArmeriaPorts\n    List<Integer> ports;\n}\n")))),(0,i.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener")," now updates the registry with both host name and IP address by default,\nso that the client does not have to do a DNS lookup. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2674"},"#2674")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2679"},"#2679"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The IP address is retrieved from ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultNonLoopbackIpV4Address()")," of ",(0,i.kt)("a",{parentName:"li",href:"type://SystemInfo:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/util/SystemInfo.html"},"type://SystemInfo"),".")))),(0,i.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed a bug where more than one thread can consume from a streaming message. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2687"},"#2687")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2683"},"#2683")),(0,i.kt)("li",{parentName:"ul"},"You will not get a ",(0,i.kt)("inlineCode",{parentName:"li"},"NullPointerException")," anymore when starting a ",(0,i.kt)("a",{parentName:"li",href:"type://JettyService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyService.html"},"type://JettyService")," with DEBUG level\nlogging enabled. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2688"},"#2688")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2691"},"#2691")),(0,i.kt)("li",{parentName:"ul"},"PING interval now works as expected even if idle timeout is disabled. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2702"},"#2702")),(0,i.kt)("li",{parentName:"ul"},"A connection is now closed immediately when PING fails, rather than waiting for idle timeout. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2699"},"#2699")),(0,i.kt)("li",{parentName:"ul"},"A request sent to an HTTP/1 server behind an HTTP CONNECT proxy server is now handled properly. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2705"},"#2705")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2698"},"#2698")),(0,i.kt)("li",{parentName:"ul"},"An event loop does not block for too long anymore when:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Thrift TEXT protocol loads a class. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2692"},"#2692")),(0,i.kt)("li",{parentName:"ul"},"A client makes a lot of requests for a short period. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2700"},"#2700"))))),(0,i.kt)("h2",{id:"️-breaking-changes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://BasicToken:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/auth/BasicToken.html"},"type://BasicToken"),", ",(0,i.kt)("a",{parentName:"li",href:"type://OAuth1aToken:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/auth/OAuth1aToken.html"},"type://OAuth1aToken")," and ",(0,i.kt)("a",{parentName:"li",href:"type://OAuth2Token:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/auth/OAuth2Token.html"},"type://OAuth2Token")," have been moved to\n",(0,i.kt)("inlineCode",{parentName:"li"},"com.linecorp.armeria.common.auth"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2680"},"#2680")),(0,i.kt)("li",{parentName:"ul"},"Builder and factory methods of ",(0,i.kt)("a",{parentName:"li",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient")," need an explicit type parameter for\n",(0,i.kt)("a",{parentName:"li",href:"type://RetryStrategy"},"type://RetryStrategy")," when creating with a lambda expression. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2661"},"#2661"))),(0,i.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dropwizard 2.0.5 → 2.0.9"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.5 → 4.1.7, 3.2.5 → 3.2.6"),(0,i.kt)("li",{parentName:"ul"},"gRPC 1.28.0 → 1.29.0"),(0,i.kt)("li",{parentName:"ul"},"Jackson 2.10.3 → 2.11.0"),(0,i.kt)("li",{parentName:"ul"},"java-jwt 3.10.2 → 3.10.3"),(0,i.kt)("li",{parentName:"ul"},"Jetty 9.4.27 → 9.4.28"),(0,i.kt)("li",{parentName:"ul"},"Micrometer 1.3.6 → 1.5.1"),(0,i.kt)("li",{parentName:"ul"},"Netty 4.1.48 → 4.1.50"),(0,i.kt)("li",{parentName:"ul"},"Prometheus simpleclient 0.8.1 → 0.9.0"),(0,i.kt)("li",{parentName:"ul"},"protobuf-jackson 1.0.0 → 1.1.0"),(0,i.kt)("li",{parentName:"ul"},"Reactor 3.3.4 → 3.3.5"),(0,i.kt)("li",{parentName:"ul"},"RxJava 3.0.1 → 3.0.3"),(0,i.kt)("li",{parentName:"ul"},"snappy-java 1.1.7 → 1.1.7.5"),(0,i.kt)("li",{parentName:"ul"},"Spring Boot 2.2.6 → 2.2.7"),(0,i.kt)("li",{parentName:"ul"},"Tomcat 9.0.33 → 9.0.35, 8.5.53 → 8.5.55"),(0,i.kt)("li",{parentName:"ul"},"ZooKeeper 3.5.7 → 3.5.8"),(0,i.kt)("li",{parentName:"ul"},"Shaded dependencies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bouncy Castle 1.64 → 1.65"),(0,i.kt)("li",{parentName:"ul"},"Caffeine 2.8.1 → 2.8.2"),(0,i.kt)("li",{parentName:"ul"},"Guava 28.2 → 29.0"))),(0,i.kt)("li",{parentName:"ul"},"Example dependencies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kotlin 1.3.71 → 1.3.72"),(0,i.kt)("li",{parentName:"ul"},"Kotlin Coroutines 1.3.4 → 1.3.6")))),(0,i.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,i.kt)(p,{usernames:["andrewoma","anuraaga","Charliocat","eonezhang","gary-lo","ghkim3221","heowc","hexoul","hueneburg","ikhoon","imasahiro","jrhee17","KarboniteKream","max904-github","minwoox","mono0x","renaudb","shakuzen","syleeeee","tobias-","trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,a,t){t(88025);var r=t(1923),n=t(25444),i=t(67294),o=t(55746),l=t(8284),s=t(96759),p=t(46731),m=t(9396),c=r.Z.Title,h=Object.keys(l)[0],u=d(h);function d(e){return e.substring(e.lastIndexOf("/")+1)}a.Z=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var k=(0,m.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),i.createElement(p.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==u?i.createElement(s.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(n.Link,{to:h},"the latest release note"),"."):"",N?i.createElement(c,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20230426-newsletter-5":"Armeria Newsletter vol. 5","/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.24.0":"v1.24.0","/release-notes/1.23.1":"v1.23.1","/release-notes/1.23.0":"v1.23.0","/release-notes/1.22.1":"v1.22.1","/release-notes/1.22.0":"v1.22.0","/release-notes/1.21.0":"v1.21.0","/release-notes/1.20.3":"v1.20.3","/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1","/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.2":"v1.16.2"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-5-mdx-ae2458469af8215481fb.js.map