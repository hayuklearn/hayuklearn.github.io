import{_ as t,c as e,o as i,R as l}from"./chunks/framework.D6kTAKe3.js";const a="/assets/01.BP1fpxGS.png",b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Android/ScreenMatching/AndroidScreenMatching.md","filePath":"Android/ScreenMatching/AndroidScreenMatching.md"}'),d={name:"Android/ScreenMatching/AndroidScreenMatching.md"},p=l('<h2 id="android相对屏幕适配原理与方案" tabindex="-1">Android相对屏幕适配原理与方案 <a class="header-anchor" href="#android相对屏幕适配原理与方案" aria-label="Permalink to &quot;Android相对屏幕适配原理与方案&quot;">​</a></h2><blockquote><p>描述一块屏幕的大小，可以从屏幕各个参数入手，其中比较重要的三个参数分别是尺寸、分辨率以及密度。</p></blockquote><p><strong>尺寸</strong> 以对角线长度为准，单位inch。</p><p><strong>分辨率</strong> 横向像素×纵向像素，单位pixel。</p><p><strong>密度</strong> 单位长度上的像素数，单位ppi（pixels per inch）或dpi（dots per inch）。</p><p>Android开发中能够有效地描述一块屏幕的参数是密度。根据密度的不同划分了大致的几个范围：</p><ul><li>ldpi（≈120dpi）</li><li>mdpi（≈160dpi）</li><li>hdpi（≈240dpi）</li><li>xhdpi（≈320dpi）</li><li>xxhdpi（≈480dpi）</li><li>xxxhdpi（≈640dpi）</li></ul><p>xxhdpi以上的设备的像素点，一般人眼已经看不出，再高也只是增加图像显示锐化，徒增电量损耗耳。</p><p>为了使用密度来描述屏幕，Android推荐使用dp作为UI尺寸的度量单位而不是传统的px。所谓dp是density independent pixel的缩写，即密度无关像素，开发人员在布局UI时，透明地将dp当作是px来使用，SDK会根据设备屏幕的密度转换为对应的实际px值。dp的定义是160dpi的屏幕下，实际的1px就是1dp，而在其它的密度的屏幕下，1dp对应的px值就要按比例缩放。公式如下：</p><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPX = valueInDP × (density / 160)</span></span></code></pre></div><p>因此： 1dp在各个密度屏幕下对应的px数分别为：</p><ul><li>ldpi</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPx = 1 × (120 / 160) = 0.75</span></span></code></pre></div><blockquote><p>即0.75px，而屏幕无法呈现0.75px，所以相当于4dp对应3px。</p></blockquote><ul><li>mdpi</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPx = 1 × (160 / 160) = 1</span></span></code></pre></div><blockquote><p>标准的一一对应。</p></blockquote><ul><li>hdpi</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPx = 1 × (240 / 160) = 1.5</span></span></code></pre></div><blockquote><p>同理相当于2dp对应3px。</p></blockquote><ul><li>xhdpi</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPx = 1 × (320 / 160) = 2</span></span></code></pre></div><blockquote><p>1dp对应2px。</p></blockquote><ul><li>xxhdpi：</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>valueInPx = 1 × (480 / 160) = 3</span></span></code></pre></div><blockquote><p>1dp对应3px。</p></blockquote><ul><li>xxxhdpi：</li></ul><div class="language-math vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">math</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> valueInPx = 1 x (640 / 160) = 4</span></span></code></pre></div><blockquote><p>1dp对应4px。</p></blockquote><p><img src="'+a+'" alt="屏幕密度示意图"></p><p>如图所示一个小正方形代表一个物理像素，4dp在6种密度下对应的像素数分别为3，4，6，8，12，16。可以看出xxxhdpi下显示的UI最精细。</p><p>SDK对应选择</p><ul><li>res/drawable-ldpi</li><li>res/drawable-mdpi</li><li>res/drawable-hdpi</li><li>res/drawable-xhdpi</li><li>res/drawable-xxhdpi</li><li>res/drawable-xxxhdpi</li></ul><p>文件夹下的资源适配屏幕。</p><p>在制作Android APP ICON时，对应密度下的官方尺寸为：</p><ul><li>36×36</li><li>48×48</li><li>72×72</li><li>96×96</li><li>144×144</li><li>192×192</li></ul><p>所以，在开发Android应用时，我们要根据UI设计师的参考尺寸来放置切图，比如，我们的应用需要显示一个宽度大约是屏幕一半的logo，设计师从1080x1920的设计图导出该logo，我们就应该摆放至res/drawable-xxhdpi下，这样即使运行该App的手机是720x1280或1440x2560或其它分辨率，logo显示效果也大致是屏幕的一半。当然，Android手机将切图由大转小的效果优于由小转大，所以切图的参考屏幕尺寸越大，各分辨率手机显示整体效果越好。最理想情况是针对6大密度切6张图，但是权衡目标用户各分辨率手机市场占有率及UI工作量，一般情况切一款即可满足。</p><p>现在主流Android手机的屏幕尺寸是720x1280与1080x1920，1440x2560会越来越多，还有一些特殊的尺寸（比如魅族的机型），也就是说屏幕密度集中于xhdpi~xxxhdpi，可以参考网址<a href="http://screensiz.es/phone" target="_blank" rel="noreferrer">screensiz.es</a>。</p><p>总结如下表所示</p><table><thead><tr><th style="text-align:right;">name</th><th style="text-align:center;">icon size</th><th style="text-align:right;">scope</th><th style="text-align:center;">代表屏幕</th><th style="text-align:left;">scale</th></tr></thead><tbody><tr><td style="text-align:right;">ldpi</td><td style="text-align:center;">36x36</td><td style="text-align:right;">0~120dpi</td><td style="text-align:center;">240x320</td><td style="text-align:left;">0.75</td></tr><tr><td style="text-align:right;">mdpi</td><td style="text-align:center;">48x48</td><td style="text-align:right;">120~160dpi</td><td style="text-align:center;">320x480</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:right;">hddpi</td><td style="text-align:center;">72x72</td><td style="text-align:right;">160~240dpi</td><td style="text-align:center;">480x800</td><td style="text-align:left;">1.5</td></tr><tr><td style="text-align:right;">xhdpi</td><td style="text-align:center;">96x96</td><td style="text-align:right;">240~320dpi</td><td style="text-align:center;">720x1280</td><td style="text-align:left;">2</td></tr><tr><td style="text-align:right;">xxhdpi</td><td style="text-align:center;">144x144</td><td style="text-align:right;">320~480dpi</td><td style="text-align:center;">1080x1920</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:right;">xxxhdpi</td><td style="text-align:center;">192x192</td><td style="text-align:right;">480~640dpi</td><td style="text-align:center;">1440x2560</td><td style="text-align:left;">4</td></tr></tbody></table><p>以上阐述的屏幕适配方法是相对适配，关于Android相对屏幕适配的方法代码参见<a href="https://github.com/hayukleung/AndroidScreenMatchingUtil" target="_blank" rel="noreferrer">AndroidScreenMatchingUtil</a>。</p><h2 id="android绝对屏幕适配原理与方案" tabindex="-1">Android绝对屏幕适配原理与方案 <a class="header-anchor" href="#android绝对屏幕适配原理与方案" aria-label="Permalink to &quot;Android绝对屏幕适配原理与方案&quot;">​</a></h2><blockquote><p>Android SDK已经为我们做好了相对屏幕适配的方案，即采用DP作为UI尺寸的描述单位，绝对屏幕适配方案则希望精确描述UI尺寸，力求UI在所有设备上显示效果一致。</p></blockquote><p>已经实现的方案有</p><ol><li><a href="https://github.com/JulienGenoud/android-percent-support-lib-sample" target="_blank" rel="noreferrer">android-percent-support-lib-sample</a></li><li><a href="https://github.com/hongyangAndroid/AndroidAutoLayout" target="_blank" rel="noreferrer">AndroidAutoLayout</a></li><li><a href="http://blog.csdn.net/lmj623565791/article/details/45460089" target="_blank" rel="noreferrer">鸿洋的博客</a></li></ol><p>基本思想是采用百分比来描述UI尺寸。</p><p>示例代码参见<a href="https://github.com/hayukleung/app/tree/master/lib-app-screen" target="_blank" rel="noreferrer">lib-app-screen</a></p>',47),n=[p];function s(r,o,h,c,g,x){return i(),e("div",null,n)}const y=t(d,[["render",s]]);export{b as __pageData,y as default};
