<div style="text-align:center"><img src="resources/logo.png"/></div>

---

**Medium TOC** is a simple tool to generate tables of contents for Medium articles. Check it out: [www.mediumtoc.com](https://www.mediumtoc.com)

| ![starting](resources/start.png) | ![resulting](resources/result.png) |
| -------------------------------- | ---------------------------------- |
| Enter A URL                      | Get The Contents                   |

## Installation

### Frontend
1. Clone: `git clone https://github.com/adamisntdead/medium-toc`
2. Install: `yarn install`
3. Start: `yarn start`

### Backend (optional)
1. Clone: `git clone https://github.com/adamisntdead/medium-toc`
2. Install: `cd backend; yarn install`
3. Change: apiUrl of medium-toc/src/api/get-headings.js :arrow_down:
```js
// Specifies the API URL for the local environment.
const apiUrl = "http://localhost:8080";
```
4. Start: `yarn start`

And your done! :sparkles:

## License

Copyright Adam Kelly 2020, MIT License.
