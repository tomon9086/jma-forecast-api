import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'

const config = (format) => ({
  input: 'src/main.ts',
  output: {
    dir: `dist/${format}`,
    format,
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    babel({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    typescript({
      declaration: true,
      rootDir: 'src',
      declarationDir: `dist/${format}`,
    }),
  ],
})

export default [config('cjs'), config('es')]
