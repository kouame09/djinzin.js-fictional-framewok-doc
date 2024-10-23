# Core Concepts

## Magic Components

djinzin.js is built around the concept of Magic Components - reactive components that automatically update when their dependencies change.

```js
import { defineComponent } from 'djinzin'

export default defineComponent({
  name: 'Counter',
  state: {
    count: 0
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  template: `
    <div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  `
})
```

## Magical Reactivity

State management in djinzin.js is truly magical. Changes are tracked automatically and components re-render efficiently:

```js
const { useMagic } = createMagic({
  state: {
    user: {
      name: 'Djinn',
      preferences: {
        theme: 'dark'
      }
    }
  }
})

// Updates are tracked deeply and automatically
function updateTheme() {
  const { state } = useMagic()
  state.user.preferences.theme = 'light'
}
```

## Magic Effects

Side effects are managed through magic effects that automatically track their dependencies:

```js
import { effect } from 'djinzin'

effect(() => {
  // This runs automatically when dependencies change
  console.log(`Theme changed to: ${state.user.preferences.theme}`)
})
```

## Next Steps

- Learn about [State Management](/guide/state-management)
- Explore [Magic Components](/guide/magic-components)
- Understand [Routing](/guide/routing)