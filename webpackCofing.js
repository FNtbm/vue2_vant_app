cofing = {
  mode: "development",
  context: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect",
  output: {
    hashFunction: "xxhash64",
    path: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\dist",
    filename: "js/[name].js",
    publicPath: "/",
    chunkFilename: "js/[name].js",
  },
  resolve: {
    alias: {
      "@": "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\src",
      vue$: "vue/dist/vue.runtime.esm.js",
      "@css": "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\src\\assets\\css",
      "@img": "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\src\\assets\\img",
    },
    extensions: [".mjs", ".js", ".jsx", ".vue", ".json", ".wasm"],
    modules: [
      "node_modules",
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules",
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\@vue\\cli-service\\node_modules",
    ],
  },
  resolveLoader: {
    modules: [
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\@vue\\cli-plugin-babel\\node_modules",
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\@vue\\cli-service\\lib\\config\\vue-loader-v15-resolve-compat",
      "node_modules",
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules",
      "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\@vue\\cli-service\\node_modules",
    ],
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader:
              "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\@vue\\vue-loader-v15\\lib\\index.js",
            options: {
              compilerOptions: {
                whitespace: "condense",
              },
            },
          },
        ],
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true,
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: "pug-plain-loader",
              },
            ],
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: "raw-loader",
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: "pug-plain-loader",
              },
            ],
          },
        ],
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
        exclude: ["D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\src\\icons"],
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: "asset",
        generator: {
          filename: "media/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: "asset",
        generator: {
          filename: "fonts/[name].[hash:8][ext]",
        },
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: "sass-loader",
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true,
                  },
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\less-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\less-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\less-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\less-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    auto: () => true,
                  },
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\vue-style-loader\\index.js",
                options: {
                  sourceMap: false,
                  shadowMode: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\css-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader:
                  "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\postcss-loader\\dist\\cjs.js",
                options: {
                  sourceMap: false,
                },
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: "stylus-loader",
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () {
            /* omitted long function */
          },
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader:
              "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\babel-loader\\lib\\index.js",
            options: {
              cacheCompression: false,
              cacheDirectory:
                "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\.cache\\babel-loader",
              cacheIdentifier: "7d1b78e3",
            },
          },
        ],
      },
      /* config.module.rule('icons') */
      {
        test: /\.svg$/,
        include: ["D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\src\\icons"],
        use: [
          /* config.module.rule('icons').use('svg-sprite-loader') */
          {
            loader: "svg-sprite-loader",
            options: {
              symbolId: "icon-[name]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "initial",
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin({
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false,
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            safari10: true,
          },
        },
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        BASE_URL: '"/"',
      },
    }),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin({
      additionalTransformers: [
        function () {
          /* omitted long function */
        },
      ],
      additionalFormatters: [
        function () {
          /* omitted long function */
        },
      ],
    }),
    /* config.plugin('html') */
    new HtmlWebpackPlugin({
      title: "vue2.x_proiect",
      scriptLoading: "defer",
      templateParameters: function () {
        /* omitted long function */
      },
      template:
        "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\public\\index.html",
    }),
    /* config.plugin('copy') */
    new CopyPlugin({
      patterns: [
        {
          from: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\public",
          to: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\dist",
          toType: "dir",
          noErrorOnMissing: true,
          globOptions: {
            ignore: [
              "**/.DS_Store",
              "D:/桌面/Web-front/Vue项目/vue2.x_proiect/public/index.html",
            ],
          },
          info: {
            minimized: true,
          },
        },
      ],
    }),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin({
      extensions: [".js", ".jsx", ".vue"],
      cwd: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect",
      cache: true,
      cacheLocation:
        "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\.cache\\eslint\\28dbff94.json",
      context: "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect",
      failOnWarning: false,
      failOnError: true,
      eslintPath:
        "D:\\桌面\\Web-front\\Vue项目\\vue2.x_proiect\\node_modules\\eslint",
      formatter: "stylish",
    }),
    {
      apply: function () {
        /* omitted long function */
      },
    },
  ],
  entry: {
    app: ["./src/main.js"],
  },
};
