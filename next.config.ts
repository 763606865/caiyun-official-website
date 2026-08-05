import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 生产构建输出到 out/，由 Nginx 等静态 Web 服务器直接托管。
  output: "export",
  trailingSlash: true,

  // 本地开发通过 Nginx 使用自定义域名访问。Next.js 16 默认拒绝来自
  // 非启动主机名的开发资源和 HMR WebSocket 请求。
  allowedDevOrigins: ["local.caiyun-official-website.com", "caiyun-official-website.liujunlintest.fun"],
};

export default nextConfig;
