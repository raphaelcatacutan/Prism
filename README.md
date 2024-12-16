# Prism - random name

## Setting up project

### Server
1. Create an empty maven project
2. Create a maven project with webapp....soething archetype
2. Add dependencies (just copy pom)
3. Add plugins (pom)

### Front end
1. Run `npx shadcn@latest init -d` on webpage folder
   - Inside this path, you can now install shadcn components
2. Edit `next.config.ts`
```ts
const nextConfig = {
    output: 'export',
    assetPrefix: '/Prism/' // for _next error
};
```
3. Modify build script in `package.json`
```json
{
   "build": "next build && xcopy /e /y /i out\\* ..\\prism-server\\src\\main\\webapp\\"
}
```


## notes
1. no need to add mapping if already annotated (error)
2. Add something like this for fetching data in the server
```tsx
"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";

export default function Home() {
  const [hello, setHello] = useState("ra");

  useEffect(() => {
    fetch('http://localhost:8081/Prism/add-user')
        .then(response => response.json())
        .then(data => {
          console.log(data.message); // "Hello from the servlet!"
          setHello(data.message);
        })
        .catch(error => console.error('Error:', error));
  }, []); // empty dependency array to run only once after the first render
```
3. Add this in `doGet` methods
```java
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
response.setHeader("Access-Control-Allow-Headers", "Content-Type");
```

## Building

### Requirements
1. Maven added to PATH
2. Tomcat v.11 (latest)
    - This project uses 8081 as port (pom)
    - This project uses root root as username and passwrod (pom)
    - Configure user to have `manager-script` role (tomcat installation path)
3. node.js added to PATH

### Building and running

#### Building Front end (no need when not developing front end)
1. Run `npm run build` on `prism-front end`

#### Building and running server
1. Start tomcat server
2. Run `mvn tomcat7:deploy` (first time), `mvn tomcat7:redeploy` when redeploying
3. Visit in `localhost:8081/Prism`

## Testing

### Front end
1. Run `npm next dev`
2. Visit 

### Backend
1. TODO: Create unit test

# todo: fix this README
