# 26. GitHub Packages

## Package Registries

GitHub Packages hosts software packages (npm, Docker, Maven, NuGet, RubyGems) alongside your code.

### Version Management

You can publish multiple versions of a package and manage permissions just like repositories.

## Lab: Publish Package (Conceptual)

1.  **Authenticate:** `npm login --registry=https://npm.pkg.github.com`
2.  **Configure:** Add `publishConfig` to `package.json`.
3.  **Publish:** `npm publish`
4.  **View:** Go to your profile -> **Packages** to see the published artifact.
