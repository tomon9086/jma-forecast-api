import { greeting } from './greet'

export const greet = (name?: string): void => {
  console.log(greeting(name))
}
