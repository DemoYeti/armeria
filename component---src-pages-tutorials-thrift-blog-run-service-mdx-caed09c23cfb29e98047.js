"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[8577],{76938:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return v},pageTitle:function(){return s}});var r,i=a(63366),n=(a(67294),a(64983)),l=a(89791),o=["components"],s="Running a service",p={},c=(r="TutorialSteps",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={pageTitle:s,_frontmatter:p},h=l.Z;function v(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)(h,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"running-a-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#running-a-service","aria-label":"running a service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Running a service"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-you-need"},"What you need")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-implement-the-service"},"1. Implement the service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-override-service-methods"},"2. Override service methods")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-create-a-server"},"3. Create a server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-run-the-server"},"4. Run the server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#whats-next"},"What's next"))),(0,n.kt)("p",null,"In this step, we'll do three things with the code we obtained from our Thrift file; define the blog service in Java, create a server instance, and run the service."),(0,n.kt)(c,{current:2,mdxType:"TutorialSteps"}),(0,n.kt)("h2",{id:"what-you-need",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),(0,n.kt)("p",null,"You need to have the ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/thrift/blog/define-service#3-compile-the-thrift-file"},"generated Java code")," obtained from the previous step.\nYou can always ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/tree/main/tutorials/thrift"},"download")," the full version, instead of creating one yourself."),(0,n.kt)("h2",{id:"1-implement-the-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#1-implement-the-service","aria-label":"1 implement the service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Implement the service"),(0,n.kt)("p",null,"Create a file, ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogServiceImpl.java"),", and declare the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogServiceImpl")," class implementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogService")," service we defined earlier in ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/thrift/blog/define-service"},"Step 1. Define a service"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogServiceImpl.java",filename:"BlogServiceImpl.java"},"package example.armeria.server.blog.thrift;\n\nimport example.armeria.blog.thrift.BlogService;\n\npublic class BlogServiceImpl implements BlogService.AsyncIface {}\n")),(0,n.kt)("h2",{id:"2-override-service-methods",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#2-override-service-methods","aria-label":"2 override service methods permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Override service methods"),(0,n.kt)("p",null,"Add empty service methods as follows to override the service methods.\nWe'll implement the service methods one by one in this tutorial.\nLet's leave them empty for now."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogServiceImpl.java",filename:"BlogServiceImpl.java"},"import example.armeria.blog.thrift.BlogPost;\nimport example.armeria.blog.thrift.CreateBlogPostRequest;\nimport example.armeria.blog.thrift.GetBlogPostRequest;\nimport example.armeria.blog.thrift.ListBlogPostsRequest;\nimport example.armeria.blog.thrift.ListBlogPostsResponse;\nimport example.armeria.blog.thrift.UpdateBlogPostRequest;\nimport example.armeria.blog.thrift.DeleteBlogPostRequest;\nimport org.apache.thrift.TException;\nimport org.apache.thrift.async.AsyncMethodCallback;\n\npublic class BlogServiceImpl implements BlogService.AsyncIface {\n\n  @Override\n  public void createBlogPost(CreateBlogPostRequest request, AsyncMethodCallback<BlogPost> resultHandler)\n          throws TException {}\n\n  @Override\n  public void getBlogPost(GetBlogPostRequest request, AsyncMethodCallback<BlogPost> resultHandler)\n          throws TException {}\n\n  @Override\n  public void listBlogPosts(ListBlogPostsRequest request, AsyncMethodCallback<ListBlogPostsResponse> resultHandler)\n          throws TException {}\n\n  @Override\n  public void updateBlogPost(UpdateBlogPostRequest request, AsyncMethodCallback<BlogPost> resultHandler)\n          throws TException {}\n\n  @Override\n  public void deleteBlogPost(DeleteBlogPostRequest request, AsyncMethodCallback<Void> resultHandler)\n          throws TException {}\n}\n")),(0,n.kt)("h2",{id:"3-create-a-server",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#3-create-a-server","aria-label":"3 create a server permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Create a server"),(0,n.kt)("p",null,"Let's create a server to serve our service."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the ",(0,n.kt)("inlineCode",{parentName:"p"},"Main")," class for the server.\nYou can see the full version of the file ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/tree/main/tutorials/thrift/src/main/java/example/armeria/server/blog/thrift/Main.java"},"here"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"package example.armeria.server.blog.thrift;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic final class Main {\n  private static final Logger logger = LoggerFactory.getLogger(Main.class);\n}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"newServer()")," method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Main")," class as follows.\nWe are using Armeria's ",(0,n.kt)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," to handle Thrift calls."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.thrift.THttpService;\n...\nprivate static Server newServer(int port) throws Exception {\n  final THttpService tHttpService =\n            THttpService.builder()\n                        .addService(new BlogServiceImpl())\n                        .build();\n}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create and return a server instance using Armeria's ",(0,n.kt)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),".\nNote that the service instance, ",(0,n.kt)("inlineCode",{parentName:"p"},"tHttpService"),", is added to the server instance."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},'private static Server newServer(int port) throws Exception {\n  ...\n  return Server.builder()\n               .http(port)\n               .service("/thrift", tHttpService) // Add the service to server\n               .build();\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"main()")," method in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Main")," class as follows."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},'public static void main(String[] args) throws Exception {\n  final Server server = newServer(8080);\n\n  server.closeOnJvmShutdown().thenRun(() -> {\n    logger.info("Server has been stopped.");\n  });\n\n  server.start().join();\n}\n')))),(0,n.kt)("h2",{id:"4-run-the-server",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#4-run-the-server","aria-label":"4 run the server permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Run the server"),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"Main.main()")," method on your IDE or using Gradle."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew run\n")),(0,n.kt)("p",null,"Your server is running if you see the following message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[armeria-boss-http-*:8080] INFO com.linecorp.armeria.server.Server - Serving HTTP at /[0:0:0:0:0:0:0:0]:8080 - http://127.0.0.1:8080/\n")),(0,n.kt)("h2",{id:"whats-next",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next"),(0,n.kt)("p",null,"In this step, we've created and added an empty Thrift service to a server."),(0,n.kt)("p",null,"Next, we'll get on with implementing a service method for ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/thrift/blog/implement-create"},"creating blog posts"),"."),(0,n.kt)(c,{current:2,mdxType:"TutorialSteps"}))}v.isMDXComponent=!0},89791:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(25444),i=a(67294),n=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":["grpc/blog","grpc/blog/define-service","grpc/blog/run-service","grpc/blog/implement-create","grpc/blog/implement-read","grpc/blog/implement-update","grpc/blog/implement-delete"],"Thrift service":["thrift/blog","thrift/blog/define-service","thrift/blog/run-service","thrift/blog/implement-create","thrift/blog/implement-read","thrift/blog/implement-update","thrift/blog/implement-delete"]}'),l=a(46731),o=function(e){var t=(0,r.useStaticQuery)("3172452987").allMdx.nodes;return i.createElement(l.Z,Object.assign({},e,{candidateMdxNodes:t,index:n,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-thrift-blog-run-service-mdx-caed09c23cfb29e98047.js.map