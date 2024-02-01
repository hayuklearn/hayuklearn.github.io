import{_ as s,v as a,b as n,R as l}from"./chunks/framework.caa0fbaf.js";const y=JSON.parse('{"title":"Android JNI","description":"","frontmatter":{},"headers":[],"relativePath":"Android/JNI/JNI.md","filePath":"Android/JNI/JNI.md"}'),p={name:"Android/JNI/JNI.md"},e=l(`<h1 id="android-jni" tabindex="-1">Android JNI <a class="header-anchor" href="#android-jni" aria-label="Permalink to &quot;Android JNI&quot;">​</a></h1><h2 id="javah" tabindex="-1">javah <a class="header-anchor" href="#javah" aria-label="Permalink to &quot;javah&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">用法: </span></span>
<span class="line"><span style="color:#A6ACCD;">  javah [options] &lt;classes&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">其中, [options] 包括:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -o &lt;file&gt;                输出文件 (只能使用 -d 或 -o 之一)</span></span>
<span class="line"><span style="color:#A6ACCD;">  -d &lt;dir&gt;                 输出目录</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v  -verbose             启用详细输出</span></span>
<span class="line"><span style="color:#A6ACCD;">  -h  --help  -?           输出此消息</span></span>
<span class="line"><span style="color:#A6ACCD;">  -version                 输出版本信息</span></span>
<span class="line"><span style="color:#A6ACCD;">  -jni                     生成 JNI 样式的标头文件 (默认值)</span></span>
<span class="line"><span style="color:#A6ACCD;">  -force                   始终写入输出文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  -classpath &lt;path&gt;        从中加载类的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  -cp &lt;path&gt;               从中加载类的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  -bootclasspath &lt;path&gt;    从中加载引导类的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;classes&gt; 是使用其全限定名称指定的</span></span>
<span class="line"><span style="color:#A6ACCD;">(例如, java.lang.Object)。</span></span></code></pre></div>`,3),t=[e];function o(c,i,r,d,A,C){return a(),n("div",null,t)}const D=s(p,[["render",o]]);export{y as __pageData,D as default};
