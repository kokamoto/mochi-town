function updateScssIncludePaths(options) {
    options.includePaths = options.includePaths || [];
    options.includePaths.push('node_modules/bulma');
    return options;
}
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('sass-loader')
            .tap(updateScssIncludePaths);
        config.module
            .rule('scss')
            .oneOf('normal')
            .use('sass-loader')
            .tap(updateScssIncludePaths);
        config.module
            .rule('sass')
            .oneOf('vue')
            .use('sass-loader')
            .tap(updateScssIncludePaths);
        config.module
            .rule('sass')
            .oneOf('normal')
            .use('sass-loader')
            .tap(updateScssIncludePaths);
    }
  }