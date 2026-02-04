# Inventory Text Editor

This is a simple React-based text editor that runs as a static site (no build
step required).

## GitHub Pages setup

1. Push this repository to GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The workflow in `.github/workflows/pages.yml` will publish the site on every
   push to the default branch.

Once the workflow finishes, your site will be available at:

```
https://<your-github-username>.github.io/<repository-name>/
```
