import{_ as i,o as e,c as r,a}from"./app-938c0f64.js";const s={},o=a(`<h1 id="为什么文件系统内带的动态库、静态库大小和直接编译出来的大小不一样" tabindex="-1"><a class="header-anchor" href="#为什么文件系统内带的动态库、静态库大小和直接编译出来的大小不一样" aria-hidden="true">#</a> 为什么文件系统内带的动态库、静态库大小和直接编译出来的大小不一样？</h1><p>在一些资源受限的linux系统上，一般我们编译好的动态库静态库等lib需要再次进行裁剪，这样能最小化我们的文件系统，在升级、烧录的条件下，可以最大化的提高速度。</p><h1 id="strip工具使用和测试" tabindex="-1"><a class="header-anchor" href="#strip工具使用和测试" aria-hidden="true">#</a> strip工具使用和测试</h1><p>strip工具使用需要在相关嵌入式平台直接使用，不支持跨平台使用类似交叉编译的方法使用。</p><h2 id="strip测试" tabindex="-1"><a class="header-anchor" href="#strip测试" aria-hidden="true">#</a> strip测试</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    strip libprotobuf.so.22.0.2 -o proto.so
    ls -la
    total 36796
    drwxr-xr-x 2 xiaowei xiaowei     4096 Oct  9 18:13 .
    drwxr-xr-x 3 xiaowei xiaowei     4096 Aug 27 11:05 ..
    lrwxrwxrwx 1 xiaowei xiaowei       21 Aug 27 11:05 libprotobuf.so -&gt; libprotobuf.so.22.0.2
    lrwxrwxrwx 1 xiaowei xiaowei       21 Aug 27 11:05 libprotobuf.so.22 -&gt; libprotobuf.so.22.0.2
    -rwxr-xr-x 1 xiaowei xiaowei 34881528 Aug 27 11:05 libprotobuf.so.22.0.2
    -rwxr-xr-x 1 xiaowei xiaowei  2789040 Oct  9 18:13 proto.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),n=[o];function t(d,l){return e(),r("div",null,n)}const c=i(s,[["render",t],["__file","so_slimming.html.vue"]]);export{c as default};
