# react-animate-components

Fill your simply looking webistes with awesome animations with react-animate-components 🚀
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
import { Fill, Reveal, SlideIn } from "react-animate-components";

const App = () => {
 // not the entrire code this exmaple only shows the animation added to the text or comoponent which are wrapped with the components that comes from react-animate-components package imported above!
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
 <img src="https://s6.ezgif.com/tmp/ezgif-6-f4f5a19c52.gif"/>
</div>

<h1>Common Props</h1>

```ts
  children: React.ReactNode;
  overlayBg: string;
  revealInView?: true | false;
  animateOnce?: true | false;
  delay?: number;
  duration?: number;
```

<h1>Props defination</h1>

<code style="color : fuchsia">?</code> **indicates not required or optional property**

`children`: Your component to animate should wrapped around react-animate-components

`overlayBg`: background color for <code style="color : cyan">Fill</code> & <code style="color : cyan">Reveal</code> components

- <code style="color : cyan">Fill</code>: overlayBg or background-color should match the background of the parent component to get the fill animation effect
- <code style="color : cyan">Reveal</code>: overlayBg or background-color should not match the background of the parent component to see the reveal animation effect

`revealInView` <code style="color : fuchsia">?</code>: By providing true to this prop indicates animation should starts when only the component visible in the view and for false animation will takes places regardless of the component visibility in the viewport - default value is set to `true`

`animateOnce` <code style="color : fuchsia">?</code>: This property controls when the animation should occasionally trigger when set to true the component will animate everytime when it comes into viewport and if false the component will animate once when it is being first time visible in viewport **Note** this prop is only acceptable when `revealInView` prop is set to **true**

`duration` <code style="color : fuchsia">?</code>: Duration of animation in number will be count in seconds

`delay` <code style="color : fuchsia">?</code>: Delay for the animation in number starts will be count in seconds

## Happy hacking

## 🚀 Follow author

[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SoloProgrammer/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratham-shinde-698a4b240/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dev_pratham_0g)
