export const greeting = (name?: string): void => {
  console.log(`Hello, ${name ?? 'World'}!`)
}
