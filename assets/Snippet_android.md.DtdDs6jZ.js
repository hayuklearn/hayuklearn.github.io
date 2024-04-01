import{_ as s,c as i,o as a,R as n}from"./chunks/framework.D6kTAKe3.js";const d=JSON.parse('{"title":"Android","description":"","frontmatter":{},"headers":[],"relativePath":"Snippet/android.md","filePath":"Snippet/android.md"}'),t={name:"Snippet/android.md"},e=n(`<h1 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h1><nav class="table-of-contents"><ul></ul></nav><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Security 解密字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Security.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decryptString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wQSALi/+szFaD8JU5jSUFKUj3QxP3Q3H5aYVrBCC/07tiHjvqyFPAJeBYVSi Ed5CcT0/uD/O7ZLu34MODTdnWSAh6brUL06gAVMqOLICXYTZ1TcK7SP7p2qP vDbPAWsn9HABZQ6/bQEmG2kzKpl7XLuyM5mht95Bykf2tozf6XctLeaxXH5I QQqINbPWuKeA7hbsJ1edM/NHYWwUis+jORrZVLpWGMVOLH7GHMKlAIwq/fDp GLWLTBq+ECMAtdfA+l0+/MQknrMUzOia9dI0sg==&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toRegex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LogService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;security&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, json </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result)</span></span></code></pre></div><div class="language-kotlin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">kotlin</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Android 存储目录路径获取</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LogService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TAG, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    // 内部存储</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getFilesDir() = \${filesDir.absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getDataDir() = \${dataDir.absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getCacheDir() = \${cacheDir.absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    // 外部存储 - 私有</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getExternalFilesDir(null) = \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalFilesDir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)?.absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getExternalCacheDir() = \${externalCacheDir?.absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getExternalMediaDirs() = \${externalMediaDirs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">joinToString</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    // 外部存储 - 公共</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStorageDirectory() = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStorageDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_MUSIC) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_MUSIC)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_PODCASTS) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_PODCASTS)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_RINGTONES) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_RINGTONES)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_ALARMS) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_ALARMS)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_NOTIFICATIONS) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_NOTIFICATIONS)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_PICTURES) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_PICTURES)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_MOVIES) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_MOVIES)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_DOWNLOADS) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_DOWNLOADS)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_DCIM) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_DCIM)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Environment.getExternalStoragePublicDirectory(DIRECTORY_DOCUMENTS) = \${Environment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getExternalStoragePublicDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(DIRECTORY_DOCUMENTS)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    // 系统存储</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getRootDirectory() = \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRootDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getDataDirectory() = \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDataDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getDownloadCacheDirectory() = \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDownloadCacheDirectory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">().absolutePath}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Context.getDatabasePath(&quot;security&quot;) = \${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDatabasePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(&quot;security&quot;)}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimIndent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), lineCountPerUnit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,4),l=[e];function h(k,p,r,F,E,o){return a(),i("div",null,l)}const y=s(t,[["render",h]]);export{d as __pageData,y as default};