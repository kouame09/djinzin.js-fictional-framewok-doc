# Getting Started

## What is djinzin.js?

djinzin.js is a modern JavaScript framework that brings magic to web development. It combines the best practices of modern web development with an intuitive API that makes complex tasks feel effortless.

## Quick Start

```bash
npm create djinzin@latest my-app
cd my-app
npm install
npm run dev
```

## Basic Example

```js
import { createMagic } from 'djinzin'

const app = createMagic({
  state: {
    count: 0
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

app.mount('#app')
```

## Features

### 🪄 Magical State Management

djinzin.js comes with built-in state management that feels magical:

```js
const { useMagic } = createMagic({
  state: {
    todos: []
  }
})

// State updates automatically trigger re-renders
function AddTodo() {
  const { state } = useMagic()
  
  return {
    addTodo(text) {
      state.todos.push({ text, done: false })
    }
  }
}
```

### ⚡️ Lightning Fast by Default

djinzin.js is built for performance:

- Zero runtime overhead
- Automatic code splitting
- Intelligent caching
- Tree-shakeable architecture

### 🔒 Type Safe Magic

Full TypeScript support with magical type inference:

```ts
interface Todo {
  text: string
  done: boolean
}

const app = createMagic<{
  state: {
    todos: Todo[]
  }
}>()
```

## Next Steps

- Explore the [Core Concepts](/guide/core-concepts)
- Check out the [Examples](/examples/quick-start)
- Join our [Discord Community](https://discord.gg/djinzin)