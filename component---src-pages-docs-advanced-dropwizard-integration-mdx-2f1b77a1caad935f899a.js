"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[988],{57669:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u},pageTitle:function(){return s}});var r=a(63366),n=(a(67294),a(64983)),p=a(28819),o=a(75609),i=["components"],s="Using Armeria with Dropwizard",d={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},m=l("Tip"),c=l("RequiredDependencies"),k=l("Warning"),N={pageTitle:s,_frontmatter:d},h=p.Z;function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)(h,Object.assign({},N,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-armeria-with-dropwizard",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#using-armeria-with-dropwizard","aria-label":"using armeria with dropwizard permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using Armeria with Dropwizard"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#server-properties"},"Server Properties"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#server-access-logs"},"Server Access Logs")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#common"},"common")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#combined"},"combined")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#custom"},"custom"))))),(0,n.kt)(m,{mdxType:"Tip"},(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/tree/main/examples/dropwizard"},"armeria-examples")," to find a fully\nworking example.")),(0,n.kt)("p",null,"Dropwizard provides many features which are necessary for building a web application, such as metrics,\nmodel validation, externalized and extensible configuration, etc. In addition, if your Dropwizard\napplication integrates with Armeria, you can leverage the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rich support for Apache ",(0,n.kt)("a",{parentName:"li",href:"https://thrift.apache.org/"},"Thrift")," and ",(0,n.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),",\nincluding ",(0,n.kt)("a",{parentName:"li",href:"/docs/server-docservice"},"the fancy web console")," that enables you to send Thrift and gRPC requests\nfrom a web browser"),(0,n.kt)("li",{parentName:"ul"},"Ability to run HTTP REST service and RPC service in the same port"),(0,n.kt)("li",{parentName:"ul"},"Full HTTP/2 support for both server-side and client-side, including ",(0,n.kt)("inlineCode",{parentName:"li"},"h2c")," (plaintext HTTP/2)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt"},"PROXY protocol")," support which provides\ninteroperability with load balancers such as ",(0,n.kt)("a",{parentName:"li",href:"https://www.haproxy.org/"},"HAProxy")," and\n",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/elasticloadbalancing/"},"AWS ELB"))),(0,n.kt)("p",null,"Armeria can be plugged in as the underlying HTTP server for a Dropwizard application by adding\nthe following dependency:"),(0,n.kt)(c,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"},{groupId:"io.dropwizard",artifactId:"dropwizard-bom",version:""+o["io.dropwizard:dropwizard-core"]}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-dropwizard2"}],mdxType:"RequiredDependencies"}),(0,n.kt)("p",null,"The above dependencies import a new ",(0,n.kt)("inlineCode",{parentName:"p"},"ServerFactory")," for Dropwizard to run on by referring to the ",(0,n.kt)("inlineCode",{parentName:"p"},"armeria")," type\nserver in the Dropwizard configuration file. A user can customize the server configuration with the same properties\nprovided by ",(0,n.kt)("a",{parentName:"p",href:"https://www.dropwizard.io/en/stable/manual/configuration.html#simple"},"Dropwizard"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"SimpleServerFactory"),".\nThe following is a simple example for configuring the server:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  type: armeria\n  applicationContextPath: /\n")),(0,n.kt)("p",null,"For a user who wants to utilize Armeria, an ",(0,n.kt)("a",{parentName:"p",href:"type://ArmeriaBundle:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/dropwizard/ArmeriaBundle.html"},"type://ArmeriaBundle")," implementation must be added to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,n.kt)("p",null,"The user can further customize the server outside of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Configuration")," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public class DropwizardArmeriaApplication extends Application<DropwizardArmeriaConfiguration> {\n\n    public static void main(final String[] args) throws Exception {\n        new DropwizardArmeriaApplication().run(args);\n    }\n\n    @Override\n    public void initialize(final Bootstrap<DropwizardArmeriaConfiguration> bootstrap) {\n        final ArmeriaBundle bundle = new ArmeriaBundle() {\n            @Override\n            public void configure(final ServerBuilder builder) {\n                // Customize the server using the given ServerBuilder. For example:\n                builder.service("/armeria", (ctx, res) -> HttpResponse.of("Hello, Armeria!"));\n\n                builder.annotatedService(new HelloService());\n\n                // You can also bind asynchronous RPC services such as Thrift and gRPC:\n                // builder.service(THttpService.of(...));\n                // builder.service(GrpcService.builder()...build());\n            }\n        };\n        bootstrap.addBundle(bundle);\n    }\n}\n')),(0,n.kt)(m,{mdxType:"Tip"},(0,n.kt)("p",null,"If you are not familiar with Dropwizard, please refer to\n",(0,n.kt)("a",{parentName:"p",href:"http://dropwizard.io/en/stable/getting-started.html"},"Dropwizard Getting Started Guide")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://dropwizard.io/en/stable/manual/core.html"},"Dropwizard User Manual"),".")),(0,n.kt)("h2",{id:"server-properties",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#server-properties","aria-label":"server properties permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Server Properties"),(0,n.kt)(k,{mdxType:"Warning"},(0,n.kt)("p",null,"Not all Dropwizard configurations can be passed into the Armeria server. Currently supported parameters are:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  type: armeria\n  gracefulShutdownQuietPeriodMillis: 5000\n  gracefulShutdownTimeoutMillis: 40000\n  maxRequestLength: 10485760\n  maxNumConnections: 2147483647\n  dateHeaderEnabled: true\n  serverHeaderEnabled: false\n  verboseResponses: false\n  defaultHostname: "host.name.com"\n  ports:\n    - port: 8080\n      protocol: HTTP\n    - ip: 127.0.0.1\n      port: 8081\n      protocol: HTTPS\n    - port: 8443\n      protocols:\n        - HTTPS\n        - PROXY\n          ports:\n  compression:\n    enabled: true\n    mimeTypes:\n      - text/*\n      - application/json\n    excludedUserAgents:\n      - some-user-agent\n      - another-user-agent\n    minResponseSize: 1KB\n  ssl:\n    keyAlias: "host.name.com"\n    keyStore: "classpath:keystore.jks"\n    keyStorePassword: "changeme"\n    trustStore: "classpath:truststore.jks"\n    trustStorePassword: "changeme"\n  http1:\n    maxChunkSize: 4096\n    maxInitialLineLength: 4096\n  http2:\n    initialConnectionWindowSize: 1MB\n    initialStreamWindowSize: 1MB\n    maxFrameSize: 16384\n    maxHeaderListSize: 8192\n  proxy:\n    maxTlvSize: 65319\n  accessLog:\n    type: common\n')),(0,n.kt)("p",null,"Where defined, the Armeria ServerFactory will prefer Armeria's default properties over Dropwizard's.\nThe following additional properties are able to be added to configure the ",(0,n.kt)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder")," before being\npassed to the ",(0,n.kt)("a",{parentName:"p",href:"type://ArmeriaBundle:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/dropwizard/ArmeriaBundle.html"},"type://ArmeriaBundle"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("div",{style:{width:"11rem"}},"Path")),(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("div",{style:{width:"19rem"}},"Property")),(0,n.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"jerseyEnabled"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether to enable JAX-RS resources defined by\nDropwizard (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxRequestLength"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The default server-side maximum length of\na request"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxNumConnections"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum allowed number of open connections"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"dateHeaderEnabled"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether to include default ",(0,n.kt)("inlineCode",{parentName:"p"},'"Data"')," header\nin the response header (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"serverHeaderEnabled"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether to include default ",(0,n.kt)("inlineCode",{parentName:"p"},'"Server"')," header\nin the response header (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),")"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"verboseResponses"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether the verbose response mode is enabled\n(default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),")"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"defaultHostname"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The default hostname of the default\n",(0,n.kt)("a",{parentName:"p",href:"type://VirtualHostBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/VirtualHostBuilder.html"},"type://VirtualHostBuilder")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"gracefulShutdownQuietPeriodMillis"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The number of milliseconds to wait after the\nlast processed request to be considered safe\nfor shutdown"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"gracefulShutdownTimeoutMillis"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The number of milliseconds to wait after going\nunhealthy before forcing the server to shutdown\nregardless of if it is still processing requests"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:3},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.ports"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"port"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The port to run the server on (default: 8080)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"ip"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The IP address to bind to"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"iface"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The network interface to bind to"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:4},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.compression"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"enabled"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether to enable the HTTP content encoding"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"mimeTypes"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The MIME Types of an HTTP response which are\napplicable for the HTTP content encoding"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"excludedUserAgents"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},'"User-Agent"')," header values which are not\napplicable for the HTTP content encoding"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"minResponseSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The minimum bytes for encoding the content of\nan HTTP response"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:6},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.ssl"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"enabled"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"Whether to enable SSL support"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"keyAlias"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The alias that identifies the key in\nthe key store"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"keyStore"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The path to the key store that holds the SSL\ncertificate (typically a jks file)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"keyStorePassword"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The password used to access the key store"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"trustStore"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The trust store that holds SSL certificates"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"trustStorePassword"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The password used to access the trust store"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:2},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.http1"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxChunkSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum length of each chunk in an HTTP/1\nresponse content"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxInitialLineLength"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum length of an HTTP/1 response\ninitial line"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:5},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.http2"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"initialConnectionWindowSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The initial connection-level HTTP/2 flow control\nwindow size"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"initialStreamingWindowSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The initial stream-level HTTP/2 flow control\nwindow size"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxFrameSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum size of HTTP/2 frame that can be\nreceived"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxStreamsPerConnection"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum number of concurrent streams per\nHTTP/2 connection. Unset means there is no limit\non the number of concurrent streams"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"maxHeaderListSize"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The maximum size of headers that can be received"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:2},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"server.accessLog"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"type"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The access log type that is supposed to be one\nof ",(0,n.kt)("inlineCode",{parentName:"p"},'"common"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},'"combined"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'"custom"')))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"p"},"format"))),(0,n.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,n.kt)("p",{parentName:"td"},"The access log format string"))))),(0,n.kt)("h2",{id:"server-access-logs",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#server-access-logs","aria-label":"server access logs permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Server Access Logs"),(0,n.kt)("p",null,"Armeria Server ",(0,n.kt)("inlineCode",{parentName:"p"},"Access Logging <server-access-log>")," is enabled by default when using the Armeria Server.\nThe default ",(0,n.kt)("a",{parentName:"p",href:"type://AccessLogWriter:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/AccessLogWriter.html"},"type://AccessLogWriter")," is ",(0,n.kt)("a",{parentName:"p",href:"type://AccessLogWriter#common():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/AccessLogWriter.html#common()"},"type://AccessLogWriter#common()"),", but this can be changed via the\nfollowing configuration."),(0,n.kt)("h3",{id:"common",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#common","aria-label":"common permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,n.kt)("inlineCode",{parentName:"h3"},"common")),(0,n.kt)("p",null,"Use NCSA common log format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  type: armeria\narmeria:\n  accessLog:\n    type: common\n")),(0,n.kt)("h3",{id:"combined",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#combined","aria-label":"combined permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,n.kt)("inlineCode",{parentName:"h3"},"combined")),(0,n.kt)("p",null,"Use NCSA combined log format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  type: armeria\n  accessLog:\n    type: combined\n")),(0,n.kt)("h3",{id:"custom",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h3",href:"#custom","aria-label":"custom permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),(0,n.kt)("inlineCode",{parentName:"h3"},"custom")),(0,n.kt)("p",null,"Use your own log format. Refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-access-log#customizing-a-log-format"},"Customizing a log format"),"\nfor supported format tokens."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'server:\n  type: armeria\n  accessLog:\n    type: custom\n    format: "...log format..."\n')))}u.isMDXComponent=!0},28819:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(25444),n=a(67294),p=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),o=a(46731),i=function(e){var t=(0,r.useStaticQuery)("1217743243").allMdx.nodes;return n.createElement(o.Z,Object.assign({},e,{candidateMdxNodes:t,index:p,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-dropwizard-integration-mdx-2f1b77a1caad935f899a.js.map