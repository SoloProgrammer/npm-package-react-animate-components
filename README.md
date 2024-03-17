# react-animate-components-ts

Fill your simply looking webistes with awesome animations with react-animate-components-ts 🚀
Easy to use animation component library where you can find tons of animation components in the upcoming versions of this package for now we introduced some incredible animation components or wrappers that animate components of your page smoothly with an eye caching transitions!

<div align="center">
 <h1> React Animations Components</h1>
</div>

<div align="center">
   <a href="https://axios-http.com"><img width=200 src="https://miro.medium.com/v2/resize:fit:971/1*iI2L2ZNAL51tBpM-gzzGRw.png" /></a><br>
</div>
<p align="center">Turn your websites into beutifully looking ones</p>

<h1>Installation</h1>

_npm_

```js
npm install use-axios-http-requests-ts
```

_yarn_

```js
yarn add use-axios-http-requests-ts
```

<br>

<hr/>
<br>

<h1>Use-sage</h1>

`App.jsx`

```tsx
import { Fill, Reveal, SlideIn } from "react-animate-components-ts";

const App = () => {
 // not the entrire code this exmaple only shows the animation added to the text or comoponent which are wrapped with the components that comes from react-animate-components-ts package imported above!
 return (
      <Reveal overlayBg={"var(--main-color)"} delay={0.5}>
        <b>One stop&nbsp;platform,</b>
      </Reveal>
      <Fill delay={1} overlayBg={"var(--bg)"}>
        <p>To discover stories and creative ideas for developers!</p>
      </Fill>
      <SlideIn from="right" right={100} type="tween" duration={1} delay={1.2}>
        <h1 className={styles.featuredHeading}>
          Top Story: The Highlight of the Week!
        </h1>
      </SlideIn>
   )
};

```

<h1>Result</h1>

<div align="center">
 <img src="https://dev-hub-nextjs-app.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdvzjzf36i%2Fimage%2Fupload%2Fv1710614736%2Fowsg5apovixvgqlqr5mj.gif&w=1920&q=75"/>
</div>

## Other animation components

```tsx
  <FadeIn/>
  <Pop/>
```

<hr/>

<h1>All Props</h1>

```ts
  children: React.ReactNode;
  overlayBg: string;
  revealInView?: true | false;
  animateOnce?: true | false;
  delay?: number;
  duration?: number;
  animateFrom?: true | false;
  from: string;
  left: number;
  right: number;
  type: string
  origin: string
```

<h1>Props defination</h1>

<code style="color : fuchsia">?</code> **indicates not required or optional property**

1. **`children`**: Your component to animate should wrapped around react-animate-components-ts

2. **`overlayBg`**: background color for <code style="color : cyan">Fill</code> & <code style="color : cyan">Reveal</code> components

   - <code style="color : cyan">Fill</code>: overlayBg or background-color should match the background of the parent component to get the fill animation effect

   - <code style="color : cyan">Reveal</code>: overlayBg or background-color should not match the background of the parent component to see the reveal animation effect

3. **`revealInView`** <code style="color : fuchsia">?</code>: By providing true to this prop indicates animation should starts when only the component visible in the view and for false animation will takes places regardless of the component visibility in the viewport - default value is set to `true`

4. **`animateOnce`** <code style="color : fuchsia">?</code>: This property controls when the animation should occasionally trigger when set to true the component will animate everytime when it comes into viewport and if false the component will animate once when it is being first time visible in viewport **Note** this prop is only acceptable when `revealInView` prop is set to **true**

5. **`duration`** <code style="color : fuchsia">?</code>: Duration of animation in number will be count in seconds

6. **`delay`** <code style="color : fuchsia">?</code>: Delay for the animation in number starts will be count in seconds

7. **`animateFrom`** <code style="color : fuchsia">?</code> : Special prop for <code style="color : cyan">Fill</code> component which controls the direction from where the the component should start fill animation accepts only 2 values: **"left"** or **"right"** and default is set to **"left"** fill animation will begin from **"left"** direction

8. **`from`**: Special prop for <code style="color : cyan">SlideIn</code> component initiate slide animation either from **"left"** or **"right"** from the below two props one of the prop is <code style="color : red">required\*</code> when from value is given!

   - `left` <code style="color : lightskyblue">when from = "left"</code> : Initial position of component from left value should a **positive number**

   - `right` <code style="color : lightskyblue">when from = "right"</code> : Initial position of component from right value should a **positive number**

9. **`type`**: Special prop for <code style="color : cyan">SlideIn</code> component accepts any one value from the below ones!

   - `tween`: Gaves fade effect while sliding in

   - `spring`: Gaves stretchy/springy animation effect while sliding in

10. **`origin`** <code style="color : fuchsia">?</code>: Special prop for <code style="color : cyan">Pop</code> component to set the origin of Pop animation!

    - ```ts
      Predifined values: "center" | "bottom" | "top" | "left" | "right" | "bottom left" | "bottom right" | "top left" | "top right" | `${number} ${number}`;
      ```
    - where `${number} ${number}`: sepcifies customs values you can pass to set the origin of the element that will animate or pop For Eg: `0% 50%`

    - When you pass a custom value like `0% 50%` to origin prop, it means you are specifying the X and Y co-ordinates of the origin point relative to the width and height of the element

## Happy hacking

## 🚀 Follow author

[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SoloProgrammer/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratham-shinde-698a4b240/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dev_pratham_0g)
