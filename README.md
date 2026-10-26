# nanoui-site

The website of [nanoui](https://github.com/justrach/nanoui): desktop apps in
Zig, with native UI drawn on the GPU or a web frontend. Next.js, deployed to
Cloudflare Workers with [OpenNext](https://opennext.js.org/cloudflare).

```sh
bun install
bun run dev        # http://localhost:3000
bun run preview    # the Workers build, served locally by Wrangler
bun run deploy     # to https://nanoui.dev (cf auth login first)
```

`cf` would build a Next.js project with `next build` itself, so the deploy
script builds for Workers with OpenNext, has Wrangler write that as Build
Output (`.cloudflare/output/`), and deploys it with `cf deploy --prebuilt`.
The Worker and its domain are in `cloudflare.config.ts`; `wrangler.jsonc`
still serves `bun run preview`.

- `src/content/site.ts`: everything the home page says, from nanoui's README.
- `src/content/gallery.ts`: the gallery's shots.
- `public/gallery/`: the gallery example's pages, snapshotted offscreen by
  nanoui in light and dark. To make them again, from a nanoui checkout:

  ```sh
  zig build
  for page in Controls Tasks List Typography Glass Motion Kit; do
    id=$(echo $page | tr A-Z a-z)
    zig-out/bin/gallery --nanoui-snapshot=/tmp/gallery-$id-light.png "--nanoui-script=click:$page" --nanoui-wait=0.6
    zig-out/bin/gallery --nanoui-snapshot=/tmp/gallery-$id-dark.png "--nanoui-script=click:$page" --nanoui-wait=0.6 --nanoui-dark
  done
  for f in /tmp/gallery-*.png; do n=$(basename $f .png)
    cwebp -q 84 $f -o public/gallery/$n.webp
    cwebp -q 80 -resize 900 0 $f -o public/gallery/$n-sm.webp
  done
  ```

Every file stays under 600 lines, as in nanoui.
