import React, { Suspense } from 'react';

// React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

// 然后应在 Suspense 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}

/**
 * React.lazy 目前只支持默认导出（default exports）。
 * 如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块。
 * 这能保证 tree shaking 不会出错，并且不必引入不需要的组件。
    // ManyComponents.js
    export const MyComponent = * ... *;
    export const MyUnusedComponent = * ... *;

    // MyComponent.js
    export { MyComponent as default } from "./ManyComponents.js";

    // MyApp.js
    import React, { lazy } from 'react';
    const MyComponent = lazy(() => import("./MyComponent.js"));
 */