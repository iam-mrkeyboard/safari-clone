/**
 * VPS / Self-Hosted Decap CMS Configuration
 * ============================================
 * 
 * To switch FROM Netlify TO VPS or direct GitHub hosting:
 * 1. Delete the current backend config in index.html
 * 2. Copy the backend block below into the config
 * 3. Remove the Identity widget script from <head>
 * 4. Remove the `if (window.netlifyIdentity)` block
 * 5. Deploy to your VPS / GH Pages
 *
 * Notes:
 * - No base_url needed — the Decap CMS client talks directly to the GitHub API
 * - You'll need a GitHub Personal Access Token (classic) with `repo` scope
 *   or set up a proxy server that handles OAuth
 * - local_backend is enabled so you can run `npx decap-server` for local dev
 *
 * Usage:
 *   // Replace the 'backend' key in window.CMS.init({ config: { backend: {...} }})
 */

const vpsBackendConfig = {
  name: "github",
  repo: "iam-mrkeyboard/safari-clone",
  branch: "main",
  // base_url is intentionally omitted — direct GitHub API
  // local_backend: true  // uncomment for local dev (run: npx decap-server)
  // auth_scope: "repo"   // uncomment if using PAT-based auth
};
