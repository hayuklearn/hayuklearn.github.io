import{_ as s,c as a,o as i,R as n}from"./chunks/framework.D6kTAKe3.js";const u=JSON.parse('{"title":"ProtoBuf","description":"","frontmatter":{},"headers":[],"relativePath":"前端/PROTOBUF/ProtoBuf.md","filePath":"前端/PROTOBUF/ProtoBuf.md"}'),t={name:"前端/PROTOBUF/ProtoBuf.md"},l=n(`<p>[TOC]</p><h1 id="protobuf" tabindex="-1">ProtoBuf <a class="header-anchor" href="#protobuf" aria-label="Permalink to &quot;ProtoBuf&quot;">​</a></h1><ul><li>编码</li><li>序列化</li><li>反序列化</li><li>反射</li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ol><li>创建<code>.proto</code>文件</li><li>定义数据结构</li></ol><div class="language-proto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">message \${YourDataStructure} {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 字段规则：required -&gt; 字段只能也必须出现 1 次</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 字段规则：optional -&gt; 字段可出现 0 次或1次</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 字段规则：repeated -&gt; 字段可出现任意多次（包括 0）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 类型：int32、int64、sint32、sint64、string、32-bit ....</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 字段编号：0 ~ 536870911（除去 19000 到 19999 之间的数字）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  字段规则 类型 名称 = 字段编号;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>编译</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// $SRC_DIR: .proto 所在的源目录</span></span>
<span class="line"><span>// --cpp_out: 生成 c++ 代码</span></span>
<span class="line"><span>// $DST_DIR: 生成代码的目标目录</span></span>
<span class="line"><span>// xxx.proto: 要针对哪个 proto 文件生成接口代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>protoc -I=$SRC_DIR --cpp_out=$DST_DIR $SRC_DIR/xxx.proto</span></span></code></pre></div><p>e.g.</p><div class="language-proto vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// test.proto</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  optional</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 命令行编译</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">protoc.exe -I=./ --java_out=./ ./test.proto</span></span></code></pre></div><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><ul><li><a href="https://github.com/protocolbuffers/protobuf" target="_blank" rel="noreferrer">https://github.com/protocolbuffers/protobuf</a></li><li><a href="https://developers.google.com/protocol-buffers/docs/tutorials" target="_blank" rel="noreferrer">https://developers.google.com/protocol-buffers/docs/tutorials</a></li><li><a href="https://developers.google.com/protocol-buffers/" target="_blank" rel="noreferrer">https://developers.google.com/protocol-buffers/</a></li></ul>`,12),p=[l];function e(o,r,h,k,c,d){return i(),a("div",null,p)}const E=s(t,[["render",e]]);export{u as __pageData,E as default};
