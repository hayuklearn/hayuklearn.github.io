import{_ as s,v as n,b as a,R as e}from"./chunks/framework.caa0fbaf.js";const v=JSON.parse('{"title":"Android 串口通信","description":"","frontmatter":{},"headers":[],"relativePath":"Android/SerialPort/SerialPort.md","filePath":"Android/SerialPort/SerialPort.md"}'),l={name:"Android/SerialPort/SerialPort.md"},p=e(`<h1 id="android-串口通信" tabindex="-1">Android 串口通信 <a class="header-anchor" href="#android-串口通信" aria-label="Permalink to &quot;Android 串口通信&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/* OnePlus 6</span></span>
<span class="line"><span style="color:#A6ACCD;"> * </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 1. 获取驱动列表</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Vector&lt;Driver&gt; getDrivers() throws IOException;</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * /proc/tty/drivers -----------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> * /dev/tty              /dev/tty        5 0         system:/dev/tty</span></span>
<span class="line"><span style="color:#A6ACCD;"> * /dev/console          /dev/console    5 1         system:console</span></span>
<span class="line"><span style="color:#A6ACCD;"> * /dev/ptmx             /dev/ptmx       5 2         system</span></span>
<span class="line"><span style="color:#A6ACCD;"> * /dev/vc/0             /dev/vc/0       4 0         system:vtmaster</span></span>
<span class="line"><span style="color:#A6ACCD;"> * usbserial             /dev/ttyUSB   188 0-511     serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * acm                   /dev/ttyACM   166 0-255     serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * okl4-vservices-serial /dev/ttyVS    234 0-7       serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * okl4-vtty             /dev/ttyV     236 0-7       serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * msm_geni_serial_hs    /dev/ttyHS    237 0-14      serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * pty_slave             /dev/pts      136 0-1048575 pty:slave</span></span>
<span class="line"><span style="color:#A6ACCD;"> * pty_master            /dev/ptm      128 0-1048575 pty:master</span></span>
<span class="line"><span style="color:#A6ACCD;"> * msm-eud               /dev/ttyEUD   244         0 serial</span></span>
<span class="line"><span style="color:#A6ACCD;"> * unknown               /dev/tty        4 1-63      console</span></span>
<span class="line"><span style="color:#A6ACCD;"> * </span></span>
<span class="line"><span style="color:#A6ACCD;"> * 2. 过滤出串口驱动</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * drivers with keyword serial -------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver usbserial             on /dev/ttyUSB</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver acm                   on /dev/ttyACM</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver okl4-vservices-serial on /dev/ttyVS</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver okl4-vtty             on /dev/ttyV</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver msm_geni_serial_hs    on /dev/ttyHS</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Found new driver msm-eud               on /dev/ttyEUD</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 3. 根据 serial port driver 过滤 /dev 下的串口设备</span></span>
<span class="line"><span style="color:#A6ACCD;"> * public Vector&lt;File&gt; getDevices();</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span></code></pre></div>`,2),t=[p];function o(r,i,c,d,A,C){return n(),a("div",null,t)}const D=s(l,[["render",o]]);export{v as __pageData,D as default};
