- useLocation
- useHistory
- useParams
- useRouteMatch

<Route> 
- component 和 render 使用内联函数的区别
- children 始终会渲染，这对动画很有用
- component,render和children最多使用一个

<Switch>
- 保证只匹配一个路由，匹配到第一个后会停止寻找

路由
- hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.abc.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。

- history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.abc.com/book/id。如果后端缺少对 /book/id 的路由处理，将返回 404 错误。

Redux
- props
- context 
- `@reduxjs/toolkit`使用，https://react-redux.js.org/tutorials/quick-start
- reac-redux(`connect`) 正常使用`connect`,`mapStateToProps`和`mapDispatchToProps`使用,`dispatch`方法传参
- 将共用`connect`方法包装成装饰器
  1.添加`babel-eslint`
  2.添加 `ecmaFeatures: {legacyDecorators: true}`
  3.`npm run eject` 并修改`package.json`中的`babel`配置
  ```
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  }
  ```
- react-redux(`hooks useSelector useDispatch etc`)

