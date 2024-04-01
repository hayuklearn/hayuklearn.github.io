import{_ as a,c as s,o as n,R as p}from"./chunks/framework.D6kTAKe3.js";const e="/assets/mqtt-fidge-2.BvCXlAR2.svg",T=JSON.parse('{"title":"MQTT","description":"","frontmatter":{},"headers":[],"relativePath":"前端/MQTT/MQTT.md","filePath":"前端/MQTT/MQTT.md"}'),l={name:"前端/MQTT/MQTT.md"},t=p(`<p>[TOC]</p><h1 id="mqtt" tabindex="-1"><a href="https://mqtt.org/" target="_blank" rel="noreferrer">MQTT</a> <a class="header-anchor" href="#mqtt" aria-label="Permalink to &quot;[MQTT](https://mqtt.org/)&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Message Queuing Telemetry Transport</span></span>
<span class="line"><span></span></span>
<span class="line"><span>消息队列遥测传输协议</span></span></code></pre></div><h2 id="主要特性" tabindex="-1">主要特性 <a class="header-anchor" href="#主要特性" aria-label="Permalink to &quot;主要特性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MQTT 协议工作在低带宽、不可靠的网络的远程传感器和控制设备通讯而设计的协议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>它具有以下主要的几项特性：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）使用发布/订阅消息模式，提供一对多的消息发布，解除应用程序耦合。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这一点很类似于 XMPP，但是 MQTT 的信息冗余远小于 XMPP，</span></span>
<span class="line"><span>因为 XMPP 使用 XML 格式文本来传递数据。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（2）对负载内容屏蔽的消息传输。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（3）使用 TCP/IP 提供网络连接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>主流的 MQTT 是基于 TCP 连接进行数据推送的，但是同样有基于 UDP 的版本，叫做 MQTT-SN。</span></span>
<span class="line"><span>这两种版本由于基于不同的连接方式，优缺点自然也就各有不同了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（4）有三种消息发布服务质量：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;至多一次&quot;，消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。</span></span>
<span class="line"><span>这一级别可用于如下情况，环境传感器数据，丢失一次读记录无所谓，因为不久后还会有第二次发送。</span></span>
<span class="line"><span>这一种方式主要普通 APP 的推送，倘若你的智能设备在消息推送时未联网，</span></span>
<span class="line"><span>推送过去没收到，再次联网也就收不到了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;至少一次&quot;，确保消息到达，但消息重复可能会发生。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;只有一次&quot;，确保消息到达一次。在一些要求比较严格的计费系统中，可以使用此级别。</span></span>
<span class="line"><span>在计费系统中，消息重复或丢失会导致不正确的结果。</span></span>
<span class="line"><span>这种最高质量的消息发布服务还可以用于即时通讯类的APP的推送，确保用户收到且只会收到一次。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（5）小型传输，开销很小（固定长度的头部是2字节），协议交换最小化，以降低网络流量。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这就是为什么说它非常适合&quot;在物联网领域，传感器与服务器的通信，信息的收集&quot;，</span></span>
<span class="line"><span>嵌入式设备的运算能力和带宽都相对薄弱，使用这种协议来传递消息再适合不过了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（6）使用 Last Will 和 Testament 特性通知有关各方客户端异常中断的机制。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Last Will：即遗言机制，用于通知同一主题下的其他设备发送遗言的设备已经断开了连接。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Testament：遗嘱机制，功能类似于 Last Will。</span></span></code></pre></div><h2 id="实现方式" tabindex="-1">实现方式 <a class="header-anchor" href="#实现方式" aria-label="Permalink to &quot;实现方式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>实现 MQTT 协议需要客户端和服务器端通讯完成，在通讯过程中，MQTT 协议中有三种身份：</span></span>
<span class="line"><span>1. 发布者（Publish）</span></span>
<span class="line"><span>2. 代理（Broker）（服务器）</span></span>
<span class="line"><span>3. 订阅者（Subscribe）</span></span>
<span class="line"><span>其中，消息的发布者和订阅者都是客户端，消息代理是服务器，消息发布者可以同时是订阅者。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MQTT 传输的消息分为：主题（Topic）和负载（payload）两部分：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Topic，可以理解为消息的类型，订阅者订阅（Subscribe）后，就会收到该主题的消息内容（payload）；</span></span>
<span class="line"><span>2. payload，可以理解为消息的内容，是指订阅者具体要使用的内容。</span></span></code></pre></div><p><img src="`+e+`" alt=""></p><h2 id="客户端" tabindex="-1">客户端 <a class="header-anchor" href="#客户端" aria-label="Permalink to &quot;客户端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>一个使用 MQTT 协议的应用程序或者设备，它总是建立到服务器的网络连接。客户端可以：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）发布其他客户端可能会订阅的信息；</span></span>
<span class="line"><span>（2）订阅其它客户端发布的消息；</span></span>
<span class="line"><span>（3）退订或删除应用程序的消息；</span></span>
<span class="line"><span>（4）断开与服务器连接。</span></span></code></pre></div><h2 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MQTT 服务器以称为&quot;消息代理&quot;（Broker），可以是一个应用程序或一台设备。</span></span>
<span class="line"><span>它是位于消息发布者和订阅者之间，它可以：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）接受来自客户的网络连接；</span></span>
<span class="line"><span>（2）接受客户发布的应用信息；</span></span>
<span class="line"><span>（3）处理来自客户端的订阅和退订请求；</span></span>
<span class="line"><span>（4）向订阅的客户转发应用程序消息。</span></span></code></pre></div><h2 id="数据包格式" tabindex="-1">数据包格式 <a class="header-anchor" href="#数据包格式" aria-label="Permalink to &quot;数据包格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>在 MQTT 协议中，一个 MQTT 数据包由：</span></span>
<span class="line"><span>固定头（Fixed header）、</span></span>
<span class="line"><span>可变头（Variable header）、</span></span>
<span class="line"><span>消息体（payload）</span></span>
<span class="line"><span>三部分构成。MQTT 数据包结构如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）固定头（Fixed header）。存在于所有 MQTT 数据包中，表示数据包类型及数据包的分组类标识。</span></span>
<span class="line"><span>（2）可变头（Variable header）。存在于部分 MQTT 数据包中，数据包类型决定了可变头是否存在及其具体内容。</span></span>
<span class="line"><span>（3）消息体（Payload）。存在于部分 MQTT 数据包中，表示客户端收到的具体内容。</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">FixedHeader</th><th style="text-align:center;">VariableHeader</th><th style="text-align:center;">Payload</th></tr></thead></table><h3 id="固定头-fixedheader" tabindex="-1">固定头 FixedHeader <a class="header-anchor" href="#固定头-fixedheader" aria-label="Permalink to &quot;固定头 FixedHeader&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">数据包类型</th><th style="text-align:center;">标识位</th><th style="text-align:center;">剩余长度</th></tr></thead><tbody><tr><td style="text-align:center;">Byte1(7-4)</td><td style="text-align:center;">Byte1(3-0)</td><td style="text-align:center;">Byte2</td></tr></tbody></table><h4 id="数据包类型" tabindex="-1">数据包类型 <a class="header-anchor" href="#数据包类型" aria-label="Permalink to &quot;数据包类型&quot;">​</a></h4><h4 id="标识位" tabindex="-1">标识位 <a class="header-anchor" href="#标识位" aria-label="Permalink to &quot;标识位&quot;">​</a></h4><h5 id="dup" tabindex="-1">DUP <a class="header-anchor" href="#dup" aria-label="Permalink to &quot;DUP&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>发布消息的副本。用来在保证消息的可靠传输，如果设置为 1，</span></span>
<span class="line"><span>则在下面的变长中增加 MessageId，并且需要回复确认，以保证消息传输完成，但不能用于检测消息重复发送。</span></span></code></pre></div><h5 id="qos" tabindex="-1">QoS <a class="header-anchor" href="#qos" aria-label="Permalink to &quot;QoS&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>发布消息的服务质量，即：保证消息传递的次数</span></span>
<span class="line"><span>Ø00：最多一次，即：&lt;=1</span></span>
<span class="line"><span>Ø01：至少一次，即：&gt;=1</span></span>
<span class="line"><span>Ø10：一次，即：=1</span></span>
<span class="line"><span>Ø11：预留</span></span></code></pre></div><h5 id="retain" tabindex="-1">RETAIN <a class="header-anchor" href="#retain" aria-label="Permalink to &quot;RETAIN&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>发布保留标识，表示服务器要保留这次推送的信息，</span></span>
<span class="line"><span>如果有新的订阅者出现，就把这消息推送给它，</span></span>
<span class="line"><span>如果设有那么推送至当前订阅者后释放。</span></span></code></pre></div><h4 id="剩余长度" tabindex="-1">剩余长度 <a class="header-anchor" href="#剩余长度" aria-label="Permalink to &quot;剩余长度&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>固定头的第二字节用来保存变长头部和消息体的总大小的，但不是直接保存的。</span></span>
<span class="line"><span>这一字节是可以扩展，其保存机制，前7位用于保存长度，后一部用做标识。</span></span>
<span class="line"><span>当最后一位为 1 时，表示长度不足，需要使用二个字节继续保存。</span></span></code></pre></div><h3 id="可变头-variableheader" tabindex="-1">可变头 VariableHeader <a class="header-anchor" href="#可变头-variableheader" aria-label="Permalink to &quot;可变头 VariableHeader&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MQTT 数据包中包含一个可变头，它驻位于固定的头和负载之间。</span></span>
<span class="line"><span>可变头的内容因数据包类型而不同，较常的应用是作为包的标识：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>很多类型数据包中都包括一个 2 字节的数据包标识字段，这些类型的包有：</span></span>
<span class="line"><span>PUBLISH (QoS &gt; 0)</span></span>
<span class="line"><span>PUBACK</span></span>
<span class="line"><span>PUBREC</span></span>
<span class="line"><span>PUBREL</span></span>
<span class="line"><span>PUBCOMP</span></span>
<span class="line"><span>SUBSCRIBE</span></span>
<span class="line"><span>SUBACK</span></span>
<span class="line"><span>UNSUBSCRIBE</span></span>
<span class="line"><span>UNSUBACK</span></span></code></pre></div><h3 id="消息体-payload" tabindex="-1">消息体 Payload <a class="header-anchor" href="#消息体-payload" aria-label="Permalink to &quot;消息体 Payload&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Payload 消息体位 MQTT 数据包的第三部分，包含</span></span>
<span class="line"><span>CONNECT</span></span>
<span class="line"><span>SUBSCRIBE</span></span>
<span class="line"><span>SUBACK</span></span>
<span class="line"><span>UNSUBSCRIBE</span></span>
<span class="line"><span>四种类型的消息：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（1）CONNECT，消息体内容主要是：客户端的 ClientID、订阅的 Topic、Message以及用户名和密码。</span></span>
<span class="line"><span>（2）SUBSCRIBE，消息体内容是一系列的要订阅的主题以及QoS。</span></span>
<span class="line"><span>（3）SUBACK，消息体内容是服务器对于 SUBSCRIBE 所申请的主题及 QoS 进行确认和回复。</span></span>
<span class="line"><span>（4）UNSUBSCRIBE，消息体内容是要订阅的主题。</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://mqtt.org/" target="_blank" rel="noreferrer">官网</a></li><li><a href="https://zhuanlan.zhihu.com/p/20888181" target="_blank" rel="noreferrer">知乎大佬</a></li><li><a href="https://docs.microsoft.com/zh-cn/archive/blogs/zhiqing/%E4%BD%BF%E7%94%A8mqtt%E5%8D%8F%E8%AE%AE%E5%BE%80android%E6%89%8B%E6%9C%BA%E6%8E%A8%E9%80%81%E6%B6%88%E6%81%AF" target="_blank" rel="noreferrer">Microsoft</a></li></ol>`,33),i=[t];function c(o,r,h,d,u,b){return n(),s("div",null,i)}const v=a(l,[["render",c]]);export{T as __pageData,v as default};
