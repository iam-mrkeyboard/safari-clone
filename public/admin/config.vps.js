/**
 * VPS / Self-Hosted Decap CMS Configuration
 * ============================================
 * 
 * This config is for self-hosting on a VPS or GitHub Pages.
 * It uses direct GitHub API access instead of Netlify Git Gateway.
 * 
 * To switch FROM Netlify TO VPS:
 * 1. Copy the backend block below into public/admin/index.html
 *    (replace the existing 'backend' object)
 * 2. Remove the Identity widget script from <head>:
 *    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
 * 3. Remove the `if (window.netlifyIdentity)` block
 * 4. Deploy to your VPS / GH Pages
 *
 * Requirements for VPS:
 * - GitHub Personal Access Token (classic) with `repo` scope
 *   OR set up an OAuth proxy server
 * - For local dev, uncomment `local_backend: true` and run: npx decap-server
 */

const vpsBackendConfig = {
  name: "github",
  repo: "iam-mrkeyboard/safari-clone",
  branch: "main",
  // No base_url — talks directly to GitHub API
  // local_backend: true  // uncomment for local dev (run: npx decap-server)
};
