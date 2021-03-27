# packageOptions.source="remote" causes Deprecated warning

I upgraded a project from 3.0.11 (working fine) to 3.1.2 and got this error:

`Deprecated manual package import. Please use snowpack.getUrlForPackage() to create package URLs instead.`


```
% yarn start
yarn run v1.22.10
warning ../package.json: No license field
$ snowpack dev
[09:04:43] [snowpack] Server started in 11ms.
[09:04:43] [snowpack] Local: http://localhost:8080
[09:04:43] [snowpack] Network: http://192.168.253.116:8080
[09:04:43] [snowpack] (/_snowpack/pkg/canvas-confetti) Deprecated manual package import. Please use snowpack.getUrlForPackage() to create package URLs instead.
[09:05:10] [snowpack] File changed: .git/index
[09:05:10] [snowpack] File changed: .git/objects/36/5a7d3327d1bff7ecb55258fb7ec2724dbda14d
```

## Reproducing
This repo contains a minimal project that demonstrates the bug.

It turns out that setting `packageOptions.source="remote"` in the snowpack.config.js file caused this. Commenting out the line allows the project to work as expected.

```
  packageOptions: {
    source: "remote",
  },
```

NB: In my full project, I also have `installpackageOptions.installTypes=true`, and using either of these lines causes that *getUrlForPackage()* warning.

**The current commit demonstrates the error** - commenting out `source: "remote"` makes it go away.
