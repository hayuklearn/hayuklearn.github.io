import{_ as a,c as n,o as i,R as s}from"./chunks/framework.D6kTAKe3.js";const u=JSON.parse('{"title":"Navigation","description":"","frontmatter":{},"headers":[],"relativePath":"Android/Jetpack/Navigation/Navigation.md","filePath":"Android/Jetpack/Navigation/Navigation.md"}'),l={name:"Android/Jetpack/Navigation/Navigation.md"},t=s(`<p>[TOC]</p><h1 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-label="Permalink to &quot;Navigation&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- Navigation Graph</span></span>
<span class="line"><span></span></span>
<span class="line"><span>包含程序中所有的页面以及页面间的跳转关系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- NavHostFragment</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以认为它是一个特殊的 Fragment，是其他 Fragment 的容器。</span></span>
<span class="line"><span>Navigation Graph 中展示的页面和页面关系就是 NavHostFragment 中的内容，</span></span>
<span class="line"><span>可以认为 Navigation Graph 是可视化展示，但是 NavHostFragment 是对应的代码逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- NavController</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个 Java/Kotlin 对象，用于完成在 Navigation Graph 中具体的页面切换工作。</span></span>
<span class="line"><span>当想切换 Fragment 时，使用 NavController 对象，</span></span>
<span class="line"><span>告诉它你想去 Navigation Graph 中的哪个 Fragment，</span></span>
<span class="line"><span>NavController 会将你想去的 Fragment 展示在 NavHostFragment 中。</span></span></code></pre></div><h2 id="navigation-传参方式" tabindex="-1">Navigation 传参方式 <a class="header-anchor" href="#navigation-传参方式" aria-label="Permalink to &quot;Navigation 传参方式&quot;">​</a></h2><ul><li>traditional bundle</li><li>safe args plugin</li></ul><h2 id="navigation-ui" tabindex="-1">Navigation UI <a class="header-anchor" href="#navigation-ui" aria-label="Permalink to &quot;Navigation UI&quot;">​</a></h2><ul><li><p>支持三种 App Bar</p></li><li><ol><li>ActionBar</li></ol></li><li><ol start="2"><li>Toolbar</li></ol></li><li><ol start="3"><li>CollapsingToolbarLayout</li></ol></li></ul><ul><li><p>支持两种 Menu</p></li><li><ol><li>DrawLayout + NavigationView</li></ol></li><li><ol start="2"><li>BottomNavigationView</li></ol></li></ul><h2 id="deeplink" tabindex="-1">DeepLink <a class="header-anchor" href="#deeplink" aria-label="Permalink to &quot;DeepLink&quot;">​</a></h2><ol><li>PendingIntent 方式</li><li>URL 方式</li></ol>`,10),e=[t];function o(p,r,c,g,d,v){return i(),n("div",null,e)}const N=a(l,[["render",o]]);export{u as __pageData,N as default};
