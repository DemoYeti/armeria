"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[7631],{72834:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return g},pageTitle:function(){return s}});var r,i=a(63366),n=(a(67294),a(64983)),o=a(89791),l=["components"],s="Implementing DELETE operation",c={},p=(r="TutorialSteps",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={pageTitle:s,_frontmatter:c},d=o.Z;function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"implementing-delete-operation",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h1",href:"#implementing-delete-operation","aria-label":"implementing delete operation permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implementing DELETE operation"),(0,n.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-you-need"},"What you need")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-implement-server-side"},"1. Implement server-side")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-test-deleting-a-blog-post"},"2. Test deleting a blog post")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-test-an-error-case"},"3. Test an error case")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-add-the-documentation-service"},"4. Add the Documentation service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#5-check-the-docservice-page"},"5. Check the DocService page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#whats-next"},"What's next"))),(0,n.kt)("p",null,"So far, we created, read, and updated a blog post.\nNow, let's implement and make a call to delete a blog post.\nAlso, we'll add Armeria's ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation Service")," for testing our blog service."),(0,n.kt)(p,{current:6,mdxType:"TutorialSteps"}),(0,n.kt)("h2",{id:"what-you-need",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),(0,n.kt)("p",null,"You need to have the following files obtained from previous steps.\nYou can always ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/tree/main/tutorials/grpc"},"download")," the full version, instead of creating one yourself."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/tutorials/grpc/blog/define-service#6-compile-the-proto-file"},"Generated Java code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BlogService.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Main.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BlogServiceTest.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BlogNotFoundException.java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GrpcExceptionHandler.java"))),(0,n.kt)("h2",{id:"1-implement-server-side",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#1-implement-server-side","aria-label":"1 implement server side permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Implement server-side"),(0,n.kt)("p",null,"Let's implement a service method ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteBlogPost()")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"BlogService")," class."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add a service method, ",(0,n.kt)("inlineCode",{parentName:"p"},"deleteBlogPost()"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},'import example.armeria.blog.grpc.DeleteBlogPostRequest;\n\npublic class BlogService extends BlogServiceGrpc.BlogServiceImplBase {\n  @Override\n  public void deleteBlogPost(DeleteBlogPostRequest request, StreamObserver<Empty> responseObserver) {\n    try {\n      // Simulate a blocking API call.\n      Thread.sleep(100);\n    } catch (InterruptedException e) {\n      throw new RuntimeException(e);\n    }\n\n    final BlogPost removed = blogPosts.remove(request.getId());\n    if (removed == null) {\n      responseObserver.onError(\n        new BlogNotFoundException("The blog post does not exist. ID: " + request.getId()));\n    } else {\n        responseObserver.onNext(Empty.getDefaultInstance());\n        responseObserver.onCompleted();\n    }\n }\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add Armeria's ",(0,n.kt)("a",{parentName:"p",href:"type://GrpcServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcServiceBuilder.html"},"type://GrpcServiceBuilder"),"'s blocking task executor to make all gRPC methods executed\nin the blocking task executor's thread pool."),(0,n.kt)("p",{parentName:"li"},"By default, service methods are executed on the event loop and are expected to be implemented asynchronously.\nTo implement blocking logic, call ",(0,n.kt)("inlineCode",{parentName:"p"},"useBlockingTaskExecutor(true)"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"private static Server newServer(int port) throws Exception {\n  final GrpcService grpcService =\n          GrpcService.builder().addService(new BlogService())\n                               .exceptionMapping(new GrpcExceptionHandler())\n                               .useBlockingTaskExecutor(true) // Add this\n                               .build();\n  ...\n}\n")))),(0,n.kt)("h2",{id:"2-test-deleting-a-blog-post",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#2-test-deleting-a-blog-post","aria-label":"2 test deleting a blog post permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Test deleting a blog post"),(0,n.kt)("p",null,"Let's test deleting a blog post.\nWe'll delete the blog post with ID ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),", and try retrieving with the same ID to verify it is indeed deleted.\nAdd a test method like the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogServiceTest.java",filename:"BlogServiceTest.java"},'@Test\n@Order(7)\nvoid deleteBlogPost() {\n  final DeleteBlogPostRequest request = DeleteBlogPostRequest.newBuilder()\n                                                             .setId(1)\n                                                             .build();\n  client.deleteBlogPost(request);\n  final Throwable exception = catchThrowable(() -> {\n    client.getBlogPost(GetBlogPostRequest.newBuilder().setId(1).build());\n  });\n\n  final StatusRuntimeException statusException = (StatusRuntimeException) exception;\n  assertThat(statusException.getStatus().getCode()).isEqualTo(Code.NOT_FOUND);\n  assertThat(statusException)\n          .hasMessageContaining("The blog post does not exist. ID: 1");\n}\n')),(0,n.kt)("p",null,"Run all the test cases on your IDE or using Gradle.\nCheck that you see the test is passed."),(0,n.kt)("h2",{id:"3-test-an-error-case",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#3-test-an-error-case","aria-label":"3 test an error case permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Test an error case"),(0,n.kt)("p",null,"Let's test deleting a blog post that does not exist.\nAdd a test method like the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogServiceTest.java",filename:"BlogServiceTest.java"},'@Test\n@Order(8)\nvoid badRequestExceptionHandlerWhenTryingDeleteMissingBlogPost() throws JsonProcessingException {\n  final Throwable exception = catchThrowable(() -> {\n    client.deleteBlogPost(DeleteBlogPostRequest.newBuilder().setId(100).build());\n  });\n  final StatusRuntimeException statusException = (StatusRuntimeException) exception;\n  assertThat(statusException.getStatus().getCode()).isEqualTo(Code.NOT_FOUND);\n  assertThat(statusException)\n          .hasMessageContaining("The blog post does not exist. ID: 100");\n}\n')),(0,n.kt)("p",null,"Run all the test cases on your IDE or using Gradle.\nCheck that you see the test is passed."),(0,n.kt)("h2",{id:"4-add-the-documentation-service",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#4-add-the-documentation-service","aria-label":"4 add the documentation service permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Add the Documentation service"),(0,n.kt)("p",null,"This time, we'll add Armeria's ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),".\nThe Documentation service automatically creates documentation of your service methods, as well as providing means to test out the methods."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"newServer()")," method, add a ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," instance and a request example for ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/grpc/blog/implement-create"},"creating blog posts"),",\nusing ",(0,n.kt)("a",{parentName:"p",href:"type://DocServiceBuilder#exampleRequests(Class,String,Iterable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocServiceBuilder.html#exampleRequests(java.lang.Class,java.lang.String,java.lang.Iterable)"},"type://DocServiceBuilder#exampleRequests(Class,String,Iterable)"),". Feel free to add more examples for other service methods."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},'import com.linecorp.armeria.server.docs.DocService;\nimport com.linecorp.armeria.server.docs.DocServiceFilter;\nimport io.grpc.reflection.v1alpha.ServerReflectionGrpc;\n\nfinal class Main {\n  private static Server newServer(int port) throws Exception {\n    final BlogPost exampleRequest =\n      BlogPost.newBuilder()\n              .setTitle("Example title")\n              .setContent("Example content")\n              .build();\n    final DocService docService =\n      DocService.builder()\n                .exampleRequests(BlogServiceGrpc.SERVICE_NAME,\n                                 "CreateBlogPost", exampleRequest)\n                .exclude(DocServiceFilter.ofServiceName(\n                         ServerReflectionGrpc.SERVICE_NAME))\n                .build();\n\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable unframed requests by setting ",(0,n.kt)("a",{parentName:"p",href:"type://GrpcServiceBuilder#enableUnframedRequests(boolean):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcServiceBuilder.html#enableUnframedRequests(boolean)"},"type://GrpcServiceBuilder#enableUnframedRequests(boolean)")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),".\nThis makes the blog service support requests that are not framed in gRPC wire format.\nFor us, this enables making calls from a web browser."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"private static Server newServer(int port) throws Exception {\n...\nfinal GrpcService grpcService =\n        GrpcService.builder()\n                   .addService(new BlogService())\n                   .enableUnframedRequests(true) // Add this\n                   .exceptionMapping(new GrpcExceptionHandler())\n                   .useBlockingTaskExecutor(true)\n                   .build();\n...\n}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," to the server builder."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},'private static Server newServer(int port) throws Exception {\n  ...\n  return Server.builder()\n               .http(port)\n               .service(grpcService)\n               .serviceUnder("/docs", docService) // Add this\n               .build();\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) To access the Documentation service result easily, edit the log message in the ",(0,n.kt)("inlineCode",{parentName:"p"},"main()")," method."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=2",filename:"Main.java",highlight:"2"},'public static void main(String[] args) throws Exception {\n  ...\n  logger.info("Server has been started. Serving DocService at http://127.0.0.1:{}/docs",\n              server.activeLocalPort());\n}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Otherwise, restart the server by running the ",(0,n.kt)("inlineCode",{parentName:"p"},"Main.main()")," method."),(0,n.kt)("p",{parentName:"li"},"The server and services are launched successfully if you see this message."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Server has been started. Serving DocService at http://127.0.0.1:8080/docs\n")))),(0,n.kt)("h2",{id:"5-check-the-docservice-page",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#5-check-the-docservice-page","aria-label":"5 check the docservice page permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"5. Check the DocService page"),(0,n.kt)("p",null,"Let's test and call our service operations using Armeria's Documentation service."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the URL ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/docs"},"http://127.0.0.1:8080/docs")," from the log message or open up the URL on a web browser."),(0,n.kt)("p",{parentName:"li"},"If you see the Document service page, you've successfully launched the ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," and server."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.558282208588956%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVQoz4VRy07DMBDMTyIhQJwQEi39AOBn+ATEGbUHKGcOPARSy4U2aVo7dRrbiR130G6bKsCBlUbe5+xsEh11Bjg46+Ow0+d3/7SPvZM7dC/u0bt6/InLIc5b6F487NC7GuK4N0A0Gk+wEBpCGsTJEq9vnzu8bPH8MuJ4/BljMpX4mgh8TSXiRLWwRDxTiPJihcbq2mM2i5HEU34bzNMEaZpgns44VipDaTVC8H8Q3bzNscwyLISAMRZKKWRZhqLQ8N7DuQau5XuuVZVr5R2qqkJ0/ZRAigWEEKjretvgdqqpKYTAPuWttRyXpeX+siyhteYcxdHtu8Aq36hy3nODMQbr9ZpBPqn221qeKx6UkshrWGt2S6kn+ogFvN/I3ZxRIc9z9smIhJdtTyJyIkzTNbQOqKqSF5MxoVkpVtFIpkEiLIqCc+0FVKN8XQcIEWBtgHMbdUTKhFobSCkZ9H2awf9AV/3O0U/5BtAtnUfHopw0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice grpc docservice start",title:"tutorial blogservice grpc docservice start",src:"/static/086c21a19d49782fc8be80de89682531/a6d36/tutorial_blogservice_grpc_docservice_start.png",srcSet:["/static/086c21a19d49782fc8be80de89682531/222b7/tutorial_blogservice_grpc_docservice_start.png 163w","/static/086c21a19d49782fc8be80de89682531/ff46a/tutorial_blogservice_grpc_docservice_start.png 325w","/static/086c21a19d49782fc8be80de89682531/a6d36/tutorial_blogservice_grpc_docservice_start.png 650w","/static/086c21a19d49782fc8be80de89682531/e548f/tutorial_blogservice_grpc_docservice_start.png 975w","/static/086c21a19d49782fc8be80de89682531/c23ad/tutorial_blogservice_grpc_docservice_start.png 1193w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"CreateBlogPost()")," method link in the left panel. You can make calls to the method from the page."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"536px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.91411042944786%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVQ4y61UTUvDQBDd/yj4AwR/iTfFm+DFo0dPnkQ8efQmVmhLpBAaTTFpzDbfuzNPdmtCTG2bFgfezrK7vHlvGUZQWYHmC5DMQF8JKMnBzGDiZd4RAqUCv4fgUII/Y3CcwgYz9glRqarXw94KlVKIoggLKRHHMbTSzWWbqE28UaFZgiCA67qYzWbI89zuHceB7/sWnufZc1P8ryIrhEbheDzGcDi0pEbpYDCwxFLKhjjLsn6EYRhaRZPJBKPRyKoxRDVB9y83Wi6Kwlopy7LJRGShtV759K0Kt1XkHdtHbGuDXUlFHxv/qrAP2i4EEaONfaLtTHSuUGkNRV0QFJPtgi5MN/xS+PA4xenFM84vX3Bz+wbkBbSZPGm+nECLDBSnoCgBVepnEtF6y1fXrzg4usPh8T1Ozp6ANAMFEhwl4Dp/zMFeABRVbWSt5W8Wi+XRk6yfAAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice grpc reqex",title:"tutorial blogservice grpc reqex",src:"/static/acdaa3794824d76c419537e1c463904a/2d920/tutorial_blogservice_grpc_reqex.png",srcSet:["/static/acdaa3794824d76c419537e1c463904a/222b7/tutorial_blogservice_grpc_reqex.png 163w","/static/acdaa3794824d76c419537e1c463904a/ff46a/tutorial_blogservice_grpc_reqex.png 325w","/static/acdaa3794824d76c419537e1c463904a/2d920/tutorial_blogservice_grpc_reqex.png 536w"],sizes:"(max-width: 536px) 100vw, 536px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",{parentName:"li"},"Note that in the ",(0,n.kt)("strong",{parentName:"p"},"REQUEST BODY")," section the values specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"exampleRequest")," are automatically displayed on the page."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},'final BlogPost exampleRequest = BlogPost.newBuilder()\n                   .setTitle("Example title")\n                   .setContent("Example content")\n                   .build();\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"SUBMIT")," button, and you'll see the blog post information returned in the right panel."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.607361963190186%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVQY032Qy07DMBBF8/+fxYYt7YKXxEMsUtsJJI4TO/HYPqguVCBUrnQ00mjmzqMxWkEp/FX5AXjvKzFGSikXafTgWKLgJbGI4FbBBcH6jF0K45JZEzjnKkfD/9Tc9ZnrW1e52o3s3ybu1cz+JbJ7Fm6ehNamOl22gkjGOo8PG2E9bVvv+YqNnyOTFdycmTwEgS3DVo6UE7mQUqZvPWMXaM3Aw8uBx1fFYOffhuVjgnGCdQUylFx/mnOmVE6FIonZRtwQiTGh3y26t7gl1D+fDQ9Go/sO03VobVBKobSmbVuMMTUfQjg3XNK34SewdNK0crM3nwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial blogservice grpc return",title:"tutorial blogservice grpc return",src:"/static/69a08798c50da02eed9b5765ac89b63e/a6d36/tutorial_blogservice_grpc_return.png",srcSet:["/static/69a08798c50da02eed9b5765ac89b63e/222b7/tutorial_blogservice_grpc_return.png 163w","/static/69a08798c50da02eed9b5765ac89b63e/ff46a/tutorial_blogservice_grpc_return.png 325w","/static/69a08798c50da02eed9b5765ac89b63e/a6d36/tutorial_blogservice_grpc_return.png 650w","/static/69a08798c50da02eed9b5765ac89b63e/e548f/tutorial_blogservice_grpc_return.png 975w","/static/69a08798c50da02eed9b5765ac89b63e/302a4/tutorial_blogservice_grpc_return.png 1080w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,n.kt)("h2",{id:"whats-next",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next"),(0,n.kt)("p",null,"In this step, we've implemented a service method and client method for deleting a blog post.\nWe've also added ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service")," to our server."),(0,n.kt)("p",null,"We've come to the end of this tutorial.\nNext, try adding more service methods to the tutorial or have a go at developing a service of your own."),(0,n.kt)(p,{current:6,mdxType:"TutorialSteps"}))}g.isMDXComponent=!0},89791:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(25444),i=a(67294),n=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":["grpc/blog","grpc/blog/define-service","grpc/blog/run-service","grpc/blog/implement-create","grpc/blog/implement-read","grpc/blog/implement-update","grpc/blog/implement-delete"],"Thrift service":["thrift/blog","thrift/blog/define-service","thrift/blog/run-service","thrift/blog/implement-create","thrift/blog/implement-read","thrift/blog/implement-update","thrift/blog/implement-delete"]}'),o=a(46731),l=function(e){var t=(0,r.useStaticQuery)("3172452987").allMdx.nodes;return i.createElement(o.Z,Object.assign({},e,{candidateMdxNodes:t,index:n,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-grpc-blog-implement-delete-mdx-ca9ad2f7f58d3229aaaf.js.map